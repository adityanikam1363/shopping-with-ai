const crypto = require('crypto');
const Razorpay = require('razorpay');
const Order = require('../models/Order');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

function invalidConfiguration(res) {
  return res.status(500).json({ success: false, message: 'Payment service is not configured' });
}

function razorpayConfigured() {
  return process.env.RAZORPAY_KEY_ID
    && process.env.RAZORPAY_KEY_SECRET
    && !process.env.RAZORPAY_KEY_ID.includes('xxxxxxxx')
    && !process.env.RAZORPAY_KEY_SECRET.includes('xxxxxxxx');
}

async function createOrder(req, res) {
  try {
    const { amount, currency = 'INR' } = req.body;
    if (!Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      return res.status(400).json({ success: false, message: 'Amount must be greater than 0' });
    }
    if (currency !== 'INR') return res.status(400).json({ success: false, message: 'Only INR payments are supported' });
    if (!razorpayConfigured()) return invalidConfiguration(res);

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency,
      receipt: `shopping_${Date.now()}`,
    });

    return res.status(201).json({ success: true, order, key: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    console.error(error);
    return res.status(502).json({ success: false, message: 'Unable to create payment order' });
  }
}

async function verifyPayment(req, res) {
  try {
    const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature, products = [], user = null } = req.body;
    if (!orderId || !paymentId || !signature || !process.env.RAZORPAY_KEY_SECRET) {
      return res.status(400).json({ success: false, message: 'Payment verification failed' });
    }

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(`${orderId}|${paymentId}`).digest('hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'utf8');
    const receivedBuffer = Buffer.from(signature, 'utf8');
    const valid = expectedBuffer.length === receivedBuffer.length && crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
    if (!valid) return res.status(400).json({ success: false, message: 'Payment verification failed' });

    const razorpayOrder = await razorpay.orders.fetch(orderId);
    const normalizedProducts = Array.isArray(products) ? products.map((product) => ({
      productId: String(product.productId || product.id || ''),
      name: String(product.name || 'Product'),
      price: Number(product.price) || 0,
      quantity: Number(product.quantity) || 1,
    })).filter((product) => product.productId) : [];

    await Order.create({
      user: user || null,
      products: normalizedProducts,
      amount: Number(razorpayOrder.amount) / 100,
      razorpayOrderId: orderId,
      razorpayPaymentId: paymentId,
      paymentStatus: 'paid',
      orderStatus: 'processing',
    });

    return res.status(200).json({ success: true, message: 'Payment verified successfully' });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ success: false, message: 'Payment has already been verified' });
    console.error(error);
    return res.status(400).json({ success: false, message: 'Payment verification failed' });
  }
}

module.exports = { createOrder, verifyPayment };
