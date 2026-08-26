import React from 'react';
import { ShieldCheck, Lock, Eye, UserCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function TrustAndAudit() {
  const pillars = [
    {
      title: 'Explainable',
      desc: 'Every recommendation has a reason.',
      detail: 'Confidence vectors and reasoning chains are logged transparently for merchant inspection.',
      icon: Eye,
    },
    {
      title: 'Bounded',
      desc: 'AI only performs approved actions.',
      detail: 'Strict safety guardrails prevent rogue discounts or out-of-scope price alterations.',
      icon: Lock,
    },
    {
      title: 'Auditable',
      desc: 'Every action is recorded.',
      detail: 'Complete immutable event audit trail for total transparency and compliance.',
      icon: ShieldCheck,
    },
    {
      title: 'Human Controlled',
      desc: 'Merchant stays in control.',
      detail: 'Override rules, set manual approval thresholds, or disable triggers anytime with 1 click.',
      icon: UserCheck,
    },
  ];

  const timelineEvents = [
    {
      time: '10:42 AM',
      event: 'AI detected customer intent',
      detail: 'Parsed query: "smartwatch for fitness under ₹5,000" (Confidence: 96.4%)',
      status: 'success',
    },
    {
      time: '10:43 AM',
      event: 'Product recommendation generated',
      detail: 'Surfaced 3 catalog matches: FitPro, PulseTrack, AeroFit Pro',
      status: 'success',
    },
    {
      time: '10:44 AM',
      event: 'Cross-sell opportunity identified',
      detail: 'Suggested Sports Band co-purchase (+₹450 value)',
      status: 'success',
    },
    {
      time: '10:45 AM',
      event: 'Merchant approved recommendation',
      detail: 'Auto-applied bundle trigger for active shopper session',
      status: 'success',
    },
  ];

  return (
    <section id="trust" className="py-20 bg-[#F5F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#DDE9E5]">
            <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              Enterprise Safety & Oversight
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A27] tracking-tight">
            AI That You Can Trust.
          </h2>
          <p className="text-base sm:text-lg text-[#64746F]">
            Built with deterministic guardrails so merchants maintain complete control over catalog recommendations and pricing rules.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#DDE9E5] shadow-xs hover:border-[#14B8A6] transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#0F766E]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#102A27]">{pillar.title}</h3>
                  <p className="text-sm font-bold text-[#0F766E] mt-0.5">{pillar.desc}</p>
                </div>
                <p className="text-xs text-[#64746F] leading-relaxed pt-2 border-t border-[#DDE9E5]/60">
                  {pillar.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real-time Activity Timeline Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#DDE9E5] p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#DDE9E5]">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#0F766E]" />
              <h3 className="font-bold text-lg text-[#102A27]">Live Activity Audit Log</h3>
            </div>
            <span className="text-xs font-mono font-bold bg-[#ECFDF5] text-[#0F766E] px-3 py-1 rounded-full border border-[#DDE9E5]">
              Realtime Audit Stream
            </span>
          </div>

          {/* Timeline List */}
          <div className="space-y-6 relative pl-4 border-l-2 border-[#DDE9E5]">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative pl-6 space-y-1 group">
                
                {/* Small Emerald Status Indicator Dot */}
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#ECFDF5] border-2 border-[#0F766E] flex items-center justify-center text-[#0F766E] group-hover:scale-110 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-[#0F766E] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#DDE9E5]">
                    {item.time}
                  </span>
                  <h4 className="font-extrabold text-sm text-[#102A27]">{item.event}</h4>
                </div>
                <p className="text-xs text-[#64746F]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
