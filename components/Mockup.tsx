import React from 'react';
import { ArrowUpRight, Play, MoreHorizontal, Wallet, Activity } from 'lucide-react';

export const Mockup: React.FC = () => {
  return (
    <div className="relative group perspective-1000">
      {/* Main Dashboard Card */}
      <div className="relative bg-white rounded-2xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 overflow-hidden transform transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
        
        {/* Navigation Bar */}
        <div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
           <div className="flex items-center gap-8">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                 <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
              </div>
              <div className="flex gap-6 text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                 <span className="text-black">Overview</span>
                 <span>Campaigns</span>
                 <span>Wallet</span>
              </div>
           </div>
           <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-zinc-50/30">
           
           {/* Sidebar / Main Stat */}
           <div className="md:col-span-4 space-y-4">
              <div className="p-6 bg-white rounded-xl border border-zinc-100 shadow-sm">
                 <div className="flex items-center justify-between mb-8">
                    <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100">
                       <Wallet size={16} className="text-zinc-700" />
                    </div>
                    <span className="text-[10px] bg-green-50 text-green-600 px-2 py-1 rounded-full font-semibold border border-green-100">Live</span>
                 </div>
                 <div className="space-y-1">
                    <p className="text-sm text-zinc-500 font-medium">Total Balance</p>
                    <h3 className="text-3xl font-bold tracking-tight text-black">$2,840.50</h3>
                 </div>
                 <div className="mt-6 pt-6 border-t border-zinc-50 flex items-center gap-2 text-xs text-zinc-400">
                    <span>+12.5% vs last week</span>
                 </div>
              </div>

              <div className="p-6 bg-black text-white rounded-xl shadow-lg shadow-zinc-900/10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/30 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                 <div className="relative z-10">
                    <div className="text-xs text-zinc-400 mb-2">Active Campaign</div>
                    <div className="font-semibold mb-4">Summer Promo '25</div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-white h-full w-[70%]"></div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Content Feed */}
           <div className="md:col-span-8 space-y-4">
              {/* Chart Placeholder */}
              <div className="h-48 bg-white rounded-xl border border-zinc-100 p-6 shadow-sm relative overflow-hidden">
                 <div className="flex justify-between items-center mb-6">
                    <h4 className="font-semibold text-sm">View Analytics</h4>
                    <MoreHorizontal size={16} className="text-zinc-300" />
                 </div>
                 <div className="flex items-end gap-2 h-24 w-full">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                       <div key={i} className="flex-1 bg-zinc-100 rounded-sm hover:bg-black transition-colors duration-300" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
              </div>

              {/* List Item */}
              <div className="bg-white rounded-xl border border-zinc-100 p-4 shadow-sm flex items-center justify-between group hover:border-zinc-300 transition-colors">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-black group-hover:text-white transition-colors">
                       <Play size={20} fill="currentColor" />
                    </div>
                    <div>
                       <div className="text-sm font-semibold text-black">Unboxing Video #4</div>
                       <div className="text-xs text-zinc-500">Uploaded 2 hours ago</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-sm font-bold text-black">12.4k</div>
                    <div className="text-[10px] text-green-600 flex items-center justify-end gap-0.5">
                       <Activity size={10} /> +24%
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};