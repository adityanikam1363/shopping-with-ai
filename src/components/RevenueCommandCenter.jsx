import React, { useState } from 'react';
import { DollarSign, TrendingUp, ShoppingBag, Target, ArrowUpRight, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RevenueCommandCenter() {
  const [actionedOpps, setActionedOpps] = useState({});

  const kpis = [
    {
      title: 'Revenue',
      value: '₹1,24,500',
      change: '↑ 18.6%',
      sub: 'vs last month',
      sparkline: 'M0 25 Q 20 18, 40 22 T 80 10 T 120 5',
    },
    {
      title: 'AI Assisted Sales',
      value: '₹32,800',
      change: '↑ 24.3%',
      sub: '26.3% of total revenue',
      sparkline: 'M0 28 Q 25 24, 50 18 T 90 8 T 120 2',
    },
    {
      title: 'Conversion',
      value: '8.4%',
      change: '↑ 2.1%',
      sub: 'benchmark 4.2%',
      sparkline: 'M0 24 Q 30 20, 60 15 T 90 10 T 120 4',
    },
    {
      title: 'Average Order',
      value: '₹2,850',
      change: '↑ 12.4%',
      sub: '+₹310 per shopper',
      sparkline: 'M0 26 Q 20 25, 50 16 T 85 12 T 120 6',
    },
  ];

  const opportunities = [
    {
      id: 'opp-1',
      type: 'Abandoned Cart',
      potential: '₹12,000',
      impact: 'High',
      detail: '42 shoppers left cart items in past 24 hours. Instant AI SMS/WhatsApp agent recovery ready.',
      actionLabel: 'Recover →',
      doneLabel: 'Recovery Agent Active',
    },
    {
      id: 'opp-2',
      type: 'Upsell Opportunity',
      potential: '₹8,500',
      impact: 'Medium',
      detail: 'Fitness watch buyers showing high interest in Pro warranty & extra strap package.',
      actionLabel: 'Activate →',
      doneLabel: 'Upsell Rules Live',
    },
    {
      id: 'opp-3',
      type: 'Cross-sell',
      potential: '₹6,300',
      impact: 'Medium',
      detail: 'Auto-suggest running socks & water bottles when sports shoes are added.',
      actionLabel: 'View →',
      doneLabel: 'Cross-sell Active',
    },
  ];

  const handleAction = (id) => {
    setActionedOpps((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="revenue" className="py-20 bg-[#F5F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#DDE9E5]">
            <TrendingUp className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              Merchant Dashboard & Analytics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A27] tracking-tight">
            Your Revenue. With an AI Advantage.
          </h2>
          <p className="text-base sm:text-lg text-[#64746F]">
            Real-time merchant metrics powered by agentic intelligence. Observe conversion lifts and automated opportunity recovery.
          </p>
        </div>

        {/* 4 KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#DDE9E5] shadow-xs hover:border-[#14B8A6] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#64746F] mb-1">
                  <span>{kpi.title}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#ECFDF5] text-[#0F766E]">
                    {kpi.change}
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#102A27] tracking-tight mt-2">
                  {kpi.value}
                </div>
                <div className="text-xs text-[#64746F] mt-1">{kpi.sub}</div>
              </div>

              {/* Mini Sparkline Chart */}
              <div className="mt-6 pt-4 border-t border-[#DDE9E5]/60 flex items-center justify-between">
                <svg className="w-32 h-8 stroke-[#0F766E] fill-none stroke-[2.5]" viewBox="0 0 120 30">
                  <path d={kpi.sparkline} />
                </svg>
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-ping" />
              </div>

            </div>
          ))}
        </div>

        {/* AI Opportunities Section */}
        <div className="bg-white rounded-3xl border border-[#DDE9E5] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DDE9E5]">
            <div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-[#0F766E]" />
                <h3 className="text-xl font-bold text-[#102A27]">AI Opportunities</h3>
              </div>
              <p className="text-xs text-[#64746F] mt-1">
                Detected revenue leakage ready for one-click AI agent resolution.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#0F766E] bg-[#ECFDF5] px-3 py-1.5 rounded-xl border border-[#DDE9E5] font-bold self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span>₹26,800 Unlocked Potential</span>
            </div>
          </div>

          {/* Opportunities Table / Cards */}
          <div className="space-y-4">
            {opportunities.map((opp) => {
              const isDone = actionedOpps[opp.id];
              return (
                <div
                  key={opp.id}
                  className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isDone
                      ? 'bg-[#ECFDF5]/60 border-[#14B8A6]/40'
                      : 'bg-[#F5F7F2] border-[#DDE9E5] hover:border-[#14B8A6]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                      <h4 className="font-bold text-base text-[#102A27]">{opp.type}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#0F766E] border border-[#DDE9E5]">
                        {opp.impact} Priority
                      </span>
                    </div>
                    <p className="text-xs text-[#64746F] pl-5 max-w-2xl">
                      {opp.detail}
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 self-end md:self-center shrink-0">
                    <div className="text-right">
                      <div className="text-xs text-[#64746F]">Potential Revenue</div>
                      <div className="text-lg font-extrabold text-[#0F766E]">{opp.potential}</div>
                    </div>

                    <button
                      onClick={() => handleAction(opp.id)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                        isDone
                          ? 'bg-[#0F766E] text-white'
                          : 'bg-white text-[#0F766E] border border-[#14B8A6] hover:bg-[#0F766E] hover:text-white shadow-xs'
                      }`}
                    >
                      {isDone ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#A7F3D0]" />
                          <span>{opp.doneLabel}</span>
                        </>
                      ) : (
                        <span>{opp.actionLabel}</span>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
