import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  // Helper to convert price string to number for subtotal calculation
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const numStr = priceStr.replace(/[^0-9]/g, '');
    return parseInt(numStr, 10) || 0;
  };

  const subtotal = cartItems.reduce((acc, item) => acc + parsePrice(item.price), 0);
  const aiDiscount = cartItems.length > 1 ? 450 : 0;
  const total = Math.max(0, subtotal - aiDiscount);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
    }, 1200);
  };

  const handleDone = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        
        {/* Slide-over panel */}
        <div className="w-screen max-w-md bg-white border-l border-[#DDE9E5] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#DDE9E5] flex items-center justify-between bg-[#F5F7F2]">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center text-[#A7F3D0]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-[#102A27]">Your Shopping Cart</h3>
                <span className="text-xs text-[#64746F]">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-[#DDE9E5] text-[#64746F] hover:text-[#102A27] hover:bg-[#ECFDF5] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {checkoutSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border-2 border-[#14B8A6] text-[#0F766E] flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-extrabold text-[#102A27]">Order Completed!</h4>
                <p className="text-xs text-[#64746F] max-w-xs mx-auto">
                  VYRO AI Agent processed your cart with optimal bundle discounts and updated the merchant revenue metrics.
                </p>
                <div className="p-4 bg-[#F5F7F2] rounded-2xl border border-[#DDE9E5] text-left text-xs space-y-1.5">
                  <div className="flex justify-between text-[#64746F]">
                    <span>Transaction Status:</span>
                    <span className="font-bold text-[#0F766E]">Instant Verified</span>
                  </div>
                  <div className="flex justify-between text-[#64746F]">
                    <span>AI Lift Contribution:</span>
                    <span className="font-bold text-[#0F766E]">
                      +₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleDone}
                  className="w-full py-3.5 bg-[#0F766E] text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5F7F2] border border-[#DDE9E5] flex items-center justify-center text-[#64746F] mx-auto">
                  <ShoppingBag className="w-8 h-8 text-[#64746F]/50" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base text-[#102A27]">Your cart is empty</h4>
                  <p className="text-xs text-[#64746F]">
                    Ask the AI Agent or select products from the live demo to fill your cart.
                  </p>
                </div>
                <a
                  href="#ai-agent"
                  onClick={onClose}
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-[#0F766E] text-white text-xs font-bold shadow-xs hover:bg-[#14B8A6] transition-all"
                >
                  <span>Explore AI Products</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A7F3D0]" />
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="p-4 rounded-2xl border border-[#DDE9E5] bg-[#F5F7F2] hover:border-[#14B8A6] transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 rounded-xl bg-white border border-[#DDE9E5] overflow-hidden shrink-0 shadow-xs">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xl bg-[#0F766E] text-white font-bold">
                            ⌚
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#102A27]">{item.name}</h4>
                        {item.match && (
                          <span className="text-[10px] font-extrabold text-[#0F766E] bg-[#ECFDF5] px-2 py-0.5 rounded inline-block mt-0.5 border border-[#A7F3D0]">
                            ✦ {item.match}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="font-extrabold text-sm text-[#102A27]">{item.price}</span>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="p-1.5 rounded-lg bg-white border border-[#DDE9E5] text-[#64746F] hover:text-red-600 hover:border-red-200 transition-all"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Drawer Footer - Price & Checkout */}
          {cartItems.length > 0 && !checkoutSuccess && (
            <div className="p-6 border-t border-[#DDE9E5] bg-[#F5F7F2] space-y-4">
              
              {/* AI Auto-applied discount badge */}
              <div className="p-3 bg-[#ECFDF5] rounded-xl border border-[#14B8A6]/40 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5 text-[#0F766E] font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Agent Cross-Sell Savings</span>
                </div>
                <span className="font-mono font-extrabold text-[#0F766E]">
                  {aiDiscount > 0 ? `-₹${aiDiscount}` : 'Eligible for Bundle'}
                </span>
              </div>

              {/* Price Rows */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#64746F]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#102A27]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {aiDiscount > 0 && (
                  <div className="flex justify-between text-[#0F766E] font-medium">
                    <span>Bundle Discount</span>
                    <span>-₹{aiDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#64746F]">
                  <span>Shipping</span>
                  <span className="font-bold text-[#0F766E] uppercase text-[10px] bg-white px-2 py-0.5 rounded border border-[#DDE9E5]">
                    Free AI Express
                  </span>
                </div>
                <div className="pt-2 border-t border-[#DDE9E5] flex justify-between text-base font-extrabold text-[#102A27]">
                  <span>Total Amount</span>
                  <span className="text-[#0F766E]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                {isCheckingOut ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing with VYRO AI Agent...</span>
                  </>
                ) : (
                  <>
                    <span>Checkout with AI Agent</span>
                    <ArrowRight className="w-4 h-4 text-[#A7F3D0]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#64746F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Simulated Agentic Merchant Checkout</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
