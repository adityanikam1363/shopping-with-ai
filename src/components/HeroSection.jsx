import React from 'react';
import { Sparkles, ArrowRight, TrendingUp, Cpu, ShoppingBag, Zap, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#F5F7F2]">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#A7F3D0]/20 via-[#14B8A6]/10 to-[#0F766E]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#ECFDF5] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#DDE9E5] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#0F766E]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                ✦ AI-POWERED COMMERCE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A27] tracking-tight leading-[1.15]">
              Every Customer Intent Is a{' '}
              <span className="bg-gradient-to-r from-[#0F766E] to-[#14B8A6] bg-clip-text text-transparent underline decoration-[#A7F3D0] decoration-wavy decoration-2">
                Revenue Opportunity.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#64746F] leading-relaxed max-w-2xl font-normal">
              ShppingwithAI understands what shoppers want, recommends the right products, and helps merchants turn conversations into conversions.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#ai-agent"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white text-base font-bold shadow-lg shadow-[#0F766E]/25 hover:shadow-xl hover:shadow-[#0F766E]/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore AI Agent</span>
                <ArrowRight className="w-5 h-5 text-[#A7F3D0]" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#DDE9E5]/80 flex flex-wrap items-center gap-6 text-xs font-semibold text-[#64746F]">
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-[#0F766E]" />
                <span>Zero Database Setup</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-[#0F766E]" />
                <span>Instant Agentic Recommendation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-[#0F766E]" />
                <span>Automated Upsell & Cross-sell</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visualization */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating mint particles */}
            <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-[#A7F3D0]/80 blur-xs animate-particle" />
            <div className="absolute top-1/3 -right-6 w-8 h-8 rounded-full bg-[#14B8A6]/30 blur-xs animate-particle delay-700" />
            <div className="absolute -bottom-6 left-1/4 w-5 h-5 rounded-full bg-[#A7F3D0] blur-xs animate-particle delay-1000" />

            {/* AI Commerce Card Container */}
            <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-[#DDE9E5] shadow-xl shadow-[#0F766E]/5 relative">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-6 border-b border-[#DDE9E5]">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#14B8A6] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                    AI Agent Flow Engine
                  </span>
                </div>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#ECFDF5] text-[#0F766E] border border-[#DDE9E5]">
                  Live Processing
                </span>
              </div>

              {/* 4 Tier Vertical Architecture Visualization */}
              <div className="py-6 space-y-4 relative">
                
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#14B8A6] via-[#0F766E] to-[#A7F3D0] -translate-x-1/2 -z-0" />

                {/* Node 1: Customer Intent */}
                <div className="relative z-10 bg-[#F5F7F2] p-4 rounded-xl border border-[#DDE9E5] flex items-center justify-between group hover:border-[#14B8A6] transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0F766E] shadow-xs">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64746F] font-semibold">Step 01</div>
                      <div className="text-sm font-bold text-[#102A27]">Customer Intent</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#0F766E] bg-white px-2 py-1 rounded border border-[#DDE9E5]">
                    "Fitness Watch &lt; ₹5k"
                  </span>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center -my-2 relative z-20">
                  <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#DDE9E5] flex items-center justify-center text-[#0F766E]">
                    ↓
                  </div>
                </div>

                {/* Node 2: AI Agent */}
                <div className="relative z-10 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] p-4 rounded-xl text-white shadow-md flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-[#A7F3D0]">
                      <Cpu className="w-4 h-4 animate-spin-slow" />
                    </div>
                    <div>
                      <div className="text-xs text-[#A7F3D0] font-semibold">Core Intelligence</div>
                      <div className="text-sm font-bold text-white">AI Commerce Agent</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-black/20 text-[#A7F3D0] px-2.5 py-1 rounded border border-white/10">
                    94% Match Engine
                  </span>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center -my-2 relative z-20">
                  <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#DDE9E5] flex items-center justify-center text-[#0F766E]">
                    ↓
                  </div>
                </div>

                {/* Node 3: Smart Recommendation */}
                <div className="relative z-10 bg-[#F5F7F2] p-4 rounded-xl border border-[#DDE9E5] flex items-center justify-between group hover:border-[#14B8A6] transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0F766E] shadow-xs">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64746F] font-semibold">Step 03</div>
                      <div className="text-sm font-bold text-[#102A27]">Smart Recommendation</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#0F766E] bg-[#ECFDF5] px-2 py-1 rounded border border-[#DDE9E5]">
                    Bundle Cross-sell
                  </span>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center -my-2 relative z-20">
                  <div className="w-6 h-6 rounded-full bg-[#ECFDF5] border border-[#DDE9E5] flex items-center justify-center text-[#0F766E]">
                    ↓
                  </div>
                </div>

                {/* Node 4: Revenue Growth */}
                <div className="relative z-10 bg-[#ECFDF5] p-4 rounded-xl border border-[#14B8A6]/40 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-[#A7F3D0]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#0F766E] font-bold uppercase tracking-wider">Merchant Outcome</div>
                      <div className="text-sm font-extrabold text-[#102A27]">↑ Revenue Growth</div>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#0F766E] bg-white px-3 py-1 rounded-lg border border-[#DDE9E5] shadow-xs">
                    +18.6% Lift
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
