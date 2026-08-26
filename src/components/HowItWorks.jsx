import React from 'react';
import { MessageSquare, Cpu, Sparkles, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      desc: 'AI understands customer intent from natural language prompts, budget constraints, and shopping behavior.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Analyze',
      desc: 'AI analyzes live catalog inventory, product attributes, ratings, and customer requirements in real time.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Recommend',
      desc: 'AI recommends the most relevant products with exact confidence match scores (e.g. 94% match).',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'Grow',
      desc: 'AI creates intelligent upsell and cross-sell opportunities to maximize merchant Average Order Value.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-[#DDE9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#DDE9E5]">
            <Sparkles className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              Autonomous Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A27] tracking-tight">
            How ShppingwithAI Works
          </h2>
          <p className="text-base sm:text-lg text-[#64746F]">
            From conversational query to merchant revenue growth in four seamless automated steps.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Background Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#A7F3D0] -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F7F2] rounded-3xl p-8 border border-[#DDE9E5] hover:border-[#14B8A6] hover:bg-white shadow-xs hover:shadow-lg transition-all relative z-10 space-y-6 group flex flex-col justify-between"
              >
                <div>
                  {/* Large Numbered Circle with Emerald Outline */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#0F766E] flex items-center justify-center font-extrabold text-2xl text-[#0F766E] shadow-sm group-hover:scale-105 group-hover:bg-[#0F766E] group-hover:text-white transition-all">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#0F766E]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#102A27] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64746F] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDE9E5] text-[11px] font-bold text-[#0F766E] flex items-center space-x-1">
                  <span>Step {idx + 1} Automated</span>
                  <span>→</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
