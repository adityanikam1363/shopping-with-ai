import React, { useState } from 'react';
import { AlertCircle, RefreshCw, ShoppingBag, ShieldCheck, CheckCircle } from 'lucide-react';

export default function GracefulFailure() {
  const [retrying, setRetrying] = useState(false);
  const [recovered, setRecovered] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      setRecovered(true);
    }, 1200);
  };

  return (
    <section className="py-16 bg-white border-y border-[#DDE9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#64746F]">
            Resilience & Fault Tolerance
          </span>
          <h3 className="text-2xl font-bold text-[#102A27] mt-1">
            When Something Goes Wrong
          </h3>
        </div>

        {/* Small Professional Error Graceful Degradation Card */}
        <div className="max-w-2xl mx-auto bg-[#F5F7F2] rounded-2xl border border-[#DDE9E5] p-6 shadow-xs relative">
          
          <div className="flex items-start space-x-4">
            
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              recovered ? 'bg-[#ECFDF5] text-[#0F766E]' : 'bg-amber-50 text-amber-600 border border-amber-200'
            }`}>
              {recovered ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            </div>

            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-extrabold text-base text-[#102A27]">
                  {recovered ? '✓ Recommendation Service Reconnected' : '⚠ Recommendation service unavailable'}
                </h4>
                <p className="text-xs text-[#64746F] mt-1 leading-relaxed">
                  {recovered
                    ? 'All recommendation pipelines restored successfully. Shopper session active.'
                    : 'Your cart and order are safe. You can continue shopping while we retry.'}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                {!recovered ? (
                  <button
                    onClick={handleRetry}
                    disabled={retrying}
                    className="px-4 py-2 bg-[#0F766E] hover:bg-[#14B8A6] text-white text-xs font-bold rounded-lg transition-all inline-flex items-center space-x-1.5 shadow-xs"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${retrying ? 'animate-spin' : ''}`} />
                    <span>{retrying ? 'Retrying Connection...' : 'Retry'}</span>
                  </button>
                ) : (
                  <span className="text-xs font-bold text-[#0F766E] bg-[#ECFDF5] px-3 py-1.5 rounded-lg border border-[#DDE9E5]">
                    Status: 100% Operational
                  </span>
                )}

                <a
                  href="#ai-agent"
                  className="px-4 py-2 bg-white text-[#102A27] border border-[#DDE9E5] hover:border-[#14B8A6] text-xs font-bold rounded-lg transition-all inline-flex items-center space-x-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Continue Shopping</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
