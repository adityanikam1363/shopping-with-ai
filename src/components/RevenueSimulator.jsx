import React, { useState } from 'react';
import { Play, Sparkles, TrendingUp, CheckCircle, RefreshCw } from 'lucide-react';

export default function RevenueSimulator() {
  const [simState, setSimState] = useState('idle'); // 'idle' | 'analyzing' | 'found' | 'completed'
  const [currentRev, setCurrentRev] = useState(100000);
  const [aiOpp, setAiOpp] = useState(18500);
  const [oppCount, setOppCount] = useState(12);

  const handleRunAnalysis = () => {
    setSimState('analyzing');

    setTimeout(() => {
      setSimState('found');
      setOppCount(17);
    }, 1200);

    setTimeout(() => {
      setSimState('completed');
      setAiOpp(24800);
    }, 2400);
  };

  const resetSim = () => {
    setSimState('idle');
    setAiOpp(18500);
    setOppCount(12);
  };

  const potentialRev = currentRev + aiOpp;

  return (
    <section id="simulator" className="py-20 bg-white border-y border-[#DDE9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#DDE9E5]">
            <Sparkles className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              Interactive Revenue Simulator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A27] tracking-tight">
            See What AI Could Unlock.
          </h2>
          <p className="text-base sm:text-lg text-[#64746F]">
            Simulate how VYRO AI scans shopper session signals to extract hidden revenue headroom.
          </p>
        </div>

        {/* Simulator Card Box */}
        <div className="max-w-4xl mx-auto bg-[#F5F7F2] rounded-3xl border border-[#DDE9E5] p-8 shadow-xl space-y-8">
          
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DDE9E5]">
            <div>
              <h3 className="font-bold text-lg text-[#102A27]">Store Revenue Simulation</h3>
              <p className="text-xs text-[#64746F]">Based on 1,000 monthly store visitors dummy model</p>
            </div>
            
            {simState === 'completed' && (
              <button
                onClick={resetSim}
                className="inline-flex items-center space-x-1.5 text-xs text-[#0F766E] font-bold bg-white px-3 py-1.5 rounded-lg border border-[#DDE9E5] hover:bg-[#ECFDF5]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Simulation</span>
              </button>
            )}
          </div>

          {/* 3 Tier Revenue Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            {/* Current Revenue */}
            <div className="bg-white p-6 rounded-2xl border border-[#DDE9E5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#64746F] uppercase tracking-wider">Current Revenue</div>
              <div className="text-3xl font-extrabold text-[#102A27]">
                ₹{currentRev.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-[#64746F] block">Baseline Sales</span>
            </div>

            {/* AI Opportunity */}
            <div className={`p-6 rounded-2xl border transition-all space-y-2 ${
              simState === 'completed'
                ? 'bg-[#ECFDF5] border-[#14B8A6] shadow-md scale-102'
                : 'bg-white border-[#DDE9E5]'
            }`}>
              <div className="text-xs font-bold text-[#0F766E] uppercase tracking-wider">AI Opportunity</div>
              <div className="text-3xl font-extrabold text-[#0F766E] transition-all">
                +₹{aiOpp.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-[#0F766E] font-bold block">
                {simState === 'completed' ? `+${((aiOpp / currentRev) * 100).toFixed(1)}% Lift` : `+18.5% Base Lift`}
              </span>
            </div>

            {/* Potential Revenue */}
            <div className="bg-white p-6 rounded-2xl border border-[#DDE9E5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#64746F] uppercase tracking-wider">Potential Revenue</div>
              <div className="text-3xl font-extrabold text-[#102A27]">
                ₹{potentialRev.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-[#64746F] block">With VYRO AI Active</span>
            </div>

          </div>

          {/* Action Button & Live Feedback Status */}
          <div className="text-center pt-2 space-y-4">
            
            {simState === 'idle' && (
              <button
                onClick={handleRunAnalysis}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-extrabold text-base shadow-lg shadow-[#0F766E]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5 fill-current text-[#A7F3D0]" />
                <span>Run AI Analysis</span>
              </button>
            )}

            {simState === 'analyzing' && (
              <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-white border border-[#DDE9E5] shadow-xs text-[#0F766E] font-bold text-base">
                <div className="w-5 h-5 border-3 border-[#0F766E] border-t-transparent rounded-full animate-spin" />
                <span>Analyzing customer behavior...</span>
              </div>
            )}

            {simState === 'found' && (
              <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-[#ECFDF5] border border-[#14B8A6] shadow-xs text-[#0F766E] font-extrabold text-base animate-pulse">
                <Sparkles className="w-5 h-5 text-[#0F766E]" />
                <span>{oppCount} opportunities found! Updating revenue...</span>
              </div>
            )}

            {simState === 'completed' && (
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#ECFDF5] border border-[#14B8A6] text-[#0F766E] font-extrabold text-base">
                  <CheckCircle className="w-5 h-5 text-[#0F766E]" />
                  <span>✓ 17 High-Value Revenue Opportunities Applied!</span>
                </div>
                <p className="text-xs text-[#64746F]">
                  Total potential store revenue increased to <strong className="text-[#102A27]">₹1,24,800</strong> per month.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
