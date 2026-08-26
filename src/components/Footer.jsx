import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#102A27] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center text-[#A7F3D0]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">ShppingwithAI</span>
              <span className="text-xs text-[#A7F3D0] block">Agentic Commerce Engine</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#64746F] font-semibold">
            <a href="#hero" className="hover:text-[#A7F3D0] transition-colors">Home</a>
            <a href="#ai-agent" className="hover:text-[#A7F3D0] transition-colors">AI Sales Agent</a>
            <a href="#revenue" className="hover:text-[#A7F3D0] transition-colors">Revenue Command Center</a>
            <a href="#simulator" className="hover:text-[#A7F3D0] transition-colors">Revenue Simulator</a>
            <a href="#trust" className="hover:text-[#A7F3D0] transition-colors">Trust & Audit</a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64746F]">
          <p>© 2026 ShppingwithAI. Built for Commerce Growth.</p>
          <p className="text-[#A7F3D0]/80">"Turn Customer Intent Into Revenue."</p>
        </div>

      </div>
    </footer>
  );
}
