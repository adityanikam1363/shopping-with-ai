const Product = require('../models/Product');

function handleError(res, error) {
  if (error.name === 'ValidationError') {
    return res.status(400).json({ success: false, message: 'Invalid product data' });
  }
  if (error.name === 'CastError') {
    return res.status(400).json({ success: false, message: 'Invalid product id' });
  }
  console.error(error);
  return res.status(500).json({ success: false, message: 'Something went wrong' });
}

async function getProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, products });
  } catch (error) {
    return handleError(res, error);
  }
}

async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    return res.status(200).json({ success: true, product });
  } catch (error) {
    return handleError(res, error);
  }
}

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json({ success: true, product });
  } catch (error) {
    return handleError(res, error);
  }
}

async function updateProduct(req, res) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    return res.status(200).json({ success: true, product });
  } catch (error) {
    return handleError(res, error);
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    return res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return handleError(res, error);
  }
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
