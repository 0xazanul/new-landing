import React from 'react';
import { Youtube, Instagram, Twitter, Facebook, Bitcoin, Smartphone, Globe, CreditCard } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-20 max-w-2xl">
           <h2 className="text-4xl font-bold tracking-tight text-black mb-6">Everything you need. <br/> Nothing you don't.</h2>
           <p className="text-lg text-zinc-500 text-balance">We've stripped away the complexity of traditional influencer marketing. No contracts, no negotiations, just results.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
           
           {/* Large Card: Platforms */}
           <div className="md:col-span-2 rounded-3xl bg-zinc-50 border border-zinc-200 p-8 md:p-10 relative overflow-hidden group">
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-white rounded-2xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                    <Globe size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-black mb-3">Omnichannel Reach</h3>
                 <p className="text-zinc-500 max-w-sm">Seamlessly deploy campaigns across every major social video platform simultaneously.</p>
              </div>
              
              <div className="absolute right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/4 p-6 opacity-50 md:opacity-100 transition-opacity">
                 <div className="grid grid-cols-2 gap-3 rotate-[-12deg] origin-center">
                    {['TikTok', 'Shorts', 'Reels', 'X'].map((p, i) => (
                       <div key={i} className="bg-white border border-zinc-200 px-6 py-4 rounded-xl shadow-sm text-sm font-bold text-zinc-800 whitespace-nowrap hover:scale-105 transition-transform">
                          {p}
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Tall Card: Crypto */}
           <div className="md:row-span-2 rounded-3xl bg-black text-white p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group">
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6">
                    <Bitcoin size={24} className="text-white" />
                 </div>
                 <h3 className="text-2xl font-bold mb-3">Crypto Native</h3>
                 <p className="text-zinc-400 text-sm leading-relaxed">
                    Get paid in USDC, ETH, or BTC. Instant settlements on-chain with verifiable proof of payment.
                 </p>
              </div>
              <div className="mt-8 relative h-32 w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
                    <div className="flex justify-between text-xs text-zinc-500 mb-2">
                       <span>ETH/USD</span>
                       <span className="text-green-400">+4.2%</span>
                    </div>
                    <div className="h-10 flex items-end gap-1">
                       {[30, 50, 45, 70, 60, 85, 60, 90, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-white/20 rounded-sm" style={{ height: `${h}%` }}></div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* Small Card: Analytics */}
           <div className="rounded-3xl bg-white border border-zinc-200 p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center mb-4 text-black">
                 <Smartphone size={20} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Mobile First</h3>
              <p className="text-sm text-zinc-500">Manage everything from your phone.</p>
           </div>

           {/* Small Card: Security */}
           <div className="rounded-3xl bg-white border border-zinc-200 p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center mb-4 text-black">
                 <CreditCard size={20} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Fiat On-ramps</h3>
              <p className="text-sm text-zinc-500">PayPal and Bank Transfers supported.</p>
           </div>

        </div>
      </div>
    </section>
  );
};