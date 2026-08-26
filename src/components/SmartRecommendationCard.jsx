import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Eye, TrendingUp, Zap } from 'lucide-react';

export default function SmartRecommendationCard() {
  const [created, setCreated] = useState(false);

  const handleCreate = () => {
    setCreated(true);
  };

  return (
    <section id="recommendation" className="py-20 bg-[#F5F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#DDE9E5]">
            <Sparkles className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              AI Insight Generator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A27] tracking-tight">
            Smart Recommendation Engine
          </h2>
          <p className="text-base sm:text-lg text-[#64746F]">
            VYRO AI constantly monitors real-time session cart behavior and automatically proposes high-margin recommendations.
          </p>
        </div>

        {/* Visually Impressive AI Insight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#DDE9E5] p-8 shadow-xl relative overflow-hidden">
          
          {/* Card Top Accent Light */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#A7F3D0]" />

          {/* Badge & Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#DDE9E5]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] border border-[#DDE9E5] flex items-center justify-center text-[#0F766E]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#102A27]">
                  VYRO AI Found an Opportunity
                </h3>
                <span className="text-xs text-[#64746F]">Session Intent Detection #8941</span>
              </div>
            </div>

            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#ECFDF5] text-[#0F766E] border border-[#DDE9E5] self-start sm:self-center">
              +19% Cart Lift Potential
            </span>
          </div>

          {/* 3 Detail Boxes */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Box 1: Customer is viewing */}
            <div className="bg-[#F5F7F2] p-4.5 rounded-2xl border border-[#DDE9E5] space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#64746F]">
                <Eye className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Customer is viewing</span>
              </div>
              <div className="font-extrabold text-base text-[#102A27]">Running Shoes</div>
              <div className="text-xs font-mono font-bold text-[#0F766E] bg-white px-2 py-0.5 rounded inline-block border border-[#DDE9E5]">
                ₹4,200
              </div>
            </div>

            {/* Box 2: AI Insight */}
            <div className="bg-[#ECFDF5] p-4.5 rounded-2xl border border-[#14B8A6]/40 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0F766E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Insight</span>
              </div>
              <p className="font-bold text-sm text-[#102A27] leading-snug">
                Customer may also need performance running socks.
              </p>
            </div>

            {/* Box 3: Additional Revenue */}
            <div className="bg-[#F5F7F2] p-4.5 rounded-2xl border border-[#DDE9E5] space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#64746F]">
                <TrendingUp className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Potential additional revenue</span>
              </div>
              <div className="font-extrabold text-2xl text-[#0F766E]">₹799</div>
              <div className="text-[11px] text-[#64746F]">High margin (+42%)</div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#DDE9E5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#64746F]">
              Clicking below auto-injects this cross-sell trigger into the shopper's active checkout session.
            </p>

            <button
              onClick={handleCreate}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center space-x-2 ${
                created
                  ? 'bg-[#0F766E] text-white shadow-md'
                  : 'bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {created ? (
                <>
                  <Check className="w-4 h-4 text-[#A7F3D0]" />
                  <span>✓ Recommendation Created</span>
                </>
              ) : (
                <>
                  <span>Create Recommendation</span>
                  <ArrowRight className="w-4 h-4 text-[#A7F3D0]" />
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
