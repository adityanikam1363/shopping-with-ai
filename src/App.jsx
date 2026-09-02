import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import HeroSection from './components/HeroSection';
import AIShoppingAssistant from './components/AIShoppingAssistant';
import RevenueCommandCenter from './components/RevenueCommandCenter';
import HowItWorks from './components/HowItWorks';
import SmartRecommendationCard from './components/SmartRecommendationCard';
import RevenueSimulator from './components/RevenueSimulator';
import TrustAndAudit from './components/TrustAndAudit';
import GracefulFailure from './components/GracefulFailure';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setAddedIds((prev) => [...prev, item.id]);
    
    // Auto-open cart drawer and show toast feedback
    setIsCartOpen(true);
    setToastMessage(`Added "${item.name}" to cart!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRemoveCartItem = (indexToRemove) => {
    const itemToRemove = cartItems[indexToRemove];
    setCartItems((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    if (itemToRemove) {
      setAddedIds((prev) => prev.filter((id) => id !== itemToRemove.id));
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    setAddedIds([]);
  };

  return (
    <div className="min-h-screen bg-[#F5F7F2] text-[#102A27] font-['Plus_Jakarta_Sans',sans-serif] relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F766E] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#14B8A6] text-xs font-bold flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#A7F3D0] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar */}
      <Navbar cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Main Sections */}
      <main className="homepage-sections">
        <HeroSection />
        <AIShoppingAssistant onAddToCart={handleAddToCart} addedItems={addedIds} />
        <RevenueCommandCenter />
        <HowItWorks />
        <SmartRecommendationCard />
        <RevenueSimulator />
        <TrustAndAudit />
        <GracefulFailure />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
