import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#F5F7F2] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Mint/Emerald Gradient Box */}
        <div className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#0F766E] rounded-3xl p-10 sm:p-16 text-white text-center shadow-2xl shadow-[#0F766E]/20 relative overflow-hidden space-y-8">
          
          {/* Subtle Glowing Background Circles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#A7F3D0]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A7F3D0]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Sparkles className="w-4 h-4 text-[#A7F3D0]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                Ready For AI Commerce Agent
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turn Intent Into Growth.
            </h2>

            <p className="text-lg sm:text-xl text-[#ECFDF5] font-normal leading-relaxed">
              Let ShppingwithAI discover your next revenue opportunity.
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href="#hero"
                className="inline-flex items-center space-x-3 px-9 py-4 rounded-xl bg-white text-[#102A27] font-extrabold text-base shadow-xl hover:bg-[#ECFDF5] hover:text-[#0F766E] hover:-translate-y-0.5 transition-all"
              >
                <span>Launch ShppingwithAI</span>
                <ArrowRight className="w-5 h-5 text-[#0F766E]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
