import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'AI Agent', href: '#ai-agent' },
    { name: 'Revenue', href: '#revenue' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Simulator', href: '#simulator' },
    { name: 'Trust', href: '#trust' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F5F7F2]/90 backdrop-blur-md border-b border-[#DDE9E5] shadow-xs' : 'bg-[#F5F7F2] border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center text-white shadow-md shadow-[#0F766E]/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#A7F3D0]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#102A27]">ShppingwithAI</span>
              </div>
              <span className="text-[11px] text-[#64746F] block -mt-0.5">Agentic Commerce Engine</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#64746F] hover:text-[#0F766E] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#0F766E] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Interactive Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center px-4 py-2 bg-white rounded-full border border-[#DDE9E5] text-xs font-bold text-[#102A27] shadow-xs hover:border-[#0F766E] hover:bg-[#ECFDF5] transition-all cursor-pointer group"
            >
              <ShoppingBag className="w-4 h-4 text-[#0F766E] mr-1.5 group-hover:scale-110 transition-transform" />
              <span>Cart</span>
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-extrabold transition-all ${
                cartCount > 0
                  ? 'bg-[#0F766E] text-white animate-bounce'
                  : 'bg-[#F5F7F2] text-[#64746F]'
              }`}>
                {cartCount}
              </span>
            </button>

          </div>

          {/* Mobile Menu & Cart Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenCart}
              className="p-2 rounded-xl bg-white border border-[#DDE9E5] text-[#102A27] relative"
            >
              <ShoppingBag className="w-5 h-5 text-[#0F766E]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0F766E] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#DDE9E5] text-[#102A27]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#DDE9E5] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-[#102A27] hover:bg-[#ECFDF5] hover:text-[#0F766E]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
