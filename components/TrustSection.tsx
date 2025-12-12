import React from 'react';
import { ViewMode, PageView } from '../types';

interface TrustSectionProps {
  mode: ViewMode;
  onNavigate?: (page: PageView) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ mode, onNavigate }) => {
  const steps = [
    {
      num: "01",
      title: "Funds Escrowed",
      desc: "Project funds are deposited up-front. Full payout secured before campaign goes live."
    },
    {
      num: "02",
      title: "Verification",
      desc: "Creators upload video links. Our system automatically timestamps and verifies views."
    },
    {
      num: "03",
      title: "Instant Release",
      desc: "Once verification hits the target, funds are released. No 30-day waits."
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 border-y border-zinc-200/50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-black tracking-tight mb-6">Trust by default.</h2>
              <p className="text-lg text-zinc-500 font-light max-w-lg">
                The Clipping Company isn't just a marketplace; it's a protocol for trust. We've automated the friction out of influencer marketing.
              </p>
           </div>
           {/* Link removed as per request */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {steps.map((step, idx) => (
             <div key={idx} className="relative group">
                <div className="text-6xl font-bold text-zinc-100 group-hover:text-zinc-200 transition-colors mb-6 font-mono">
                   {step.num}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:translate-x-1 transition-transform">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm pr-4">{step.desc}</p>
                <div className="absolute top-0 left-0 w-px h-full bg-zinc-200/50 -ml-6 hidden md:block"></div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};