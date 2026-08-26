import React, { useState } from 'react';
import { MessageSquareText, BrainCircuit, ShoppingBag, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function JudgeDemoBar({ activeStep, setActiveStep }) {
  const steps = [
    { id: 1, title: '1. Customer Asks', target: '#ai-agent', icon: MessageSquareText, detail: 'Shopper types query' },
    { id: 2, title: '2. AI Understands', target: '#ai-agent', icon: BrainCircuit, detail: 'Intent & budget parsed' },
    { id: 3, title: '3. Product Recommended', target: '#ai-agent', icon: ShoppingBag, detail: 'Match % generated' },
    { id: 4, title: '4. Upsell Detected', target: '#recommendation', icon: Sparkles, detail: 'Cross-sell bundle' },
    { id: 5, title: '5. Merchant Growth', target: '#revenue', icon: TrendingUp, detail: '+18.6% Revenue' },
  ];

  const handleStepClick = (step) => {
    setActiveStep(step.id);
    const element = document.querySelector(step.target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#ECFDF5] border-y border-[#DDE9E5] py-3.5 px-4 sticky top-20 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center space-x-2 shrink-0">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0F766E]"></span>
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F766E]">
            10-Sec Hackathon Demo Flow
          </span>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full md:w-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(step)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-left border ${
                  isActive
                    ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-sm transform scale-102'
                    : 'bg-white text-[#102A27] border-[#DDE9E5] hover:border-[#14B8A6] hover:bg-white/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#A7F3D0]' : 'text-[#0F766E]'}`} />
                <div className="truncate">
                  <div className="truncate font-bold leading-tight">{step.title}</div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-[#A7F3D0]' : 'text-[#64746F]'}`}>
                    {step.detail}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
