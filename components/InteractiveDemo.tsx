import React, { useState, useEffect } from 'react';
import { ViewMode } from '../types';
import { 
  Upload, 
  Check, 
  DollarSign, 
  Play, 
  TrendingUp, 
  Wallet, 
  Send, 
  Users, 
  BarChart3,
  Search,
  ArrowRight,
  Loader2,
  MousePointer2,
  Lock
} from 'lucide-react';

interface InteractiveDemoProps {
  mode: ViewMode;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ mode }) => {
  const [step, setStep] = useState(0);
  const [views, setViews] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  // Reset state when mode switches
  useEffect(() => {
    setStep(0);
    setViews(0);
    setBalance(0);
    setIsVerifying(false);
    setIsWithdrawing(false);
  }, [mode]);

  // Auto-increment logic for Step 2 (Stats/Growth)
  useEffect(() => {
    if (step === 2) {
      const duration = 2000;
      const interval = 30;
      const steps = duration / interval;
      
      // Target values
      const targetViews = 15400;
      const targetBalance = 770; // $50 per 1k views approx logic
      const targetCreators = 120;

      const viewIncrement = targetViews / steps;
      const balanceIncrement = targetBalance / steps;
      const creatorIncrement = targetCreators / steps;
      
      let currentStep = 0;
      const countTimer = setInterval(() => {
        currentStep++;
        
        if (mode === 'creator') {
          setViews(prev => Math.min(prev + viewIncrement, targetViews));
          setBalance(prev => Math.min(prev + balanceIncrement, targetBalance));
        } else {
           setViews(prev => Math.min(prev + viewIncrement * 100, 1540000)); // Brand views higher
           setBalance(prev => Math.min(prev + creatorIncrement, targetCreators)); // Creators joined
        }

        if (currentStep >= steps) {
          clearInterval(countTimer);
        }
      }, interval);
      return () => clearInterval(countTimer);
    }
  }, [step, mode]);

  // Handlers for Creator Flow
  const handleSelectCampaign = () => setStep(1);
  
  const handleUploadLink = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(2);
    }, 1500);
  };

  const handleWithdraw = () => {
    setIsWithdrawing(true);
    setTimeout(() => {
      setIsWithdrawing(false);
      setStep(3);
    }, 1500);
  };

  // Handlers for Brand Flow
  const handleLaunchCampaign = () => {
    setStep(1);
    // Auto transition for "Deploying" simulation
    setTimeout(() => setStep(2), 2500);
  };

  const handleReset = () => {
    setStep(0);
    setViews(0);
    setBalance(0);
  };

  const Steps = {
    creator: [
      { label: 'Select', icon: Search },
      { label: 'Upload', icon: Upload },
      { label: 'Earn', icon: TrendingUp },
      { label: 'Withdraw', icon: DollarSign },
    ],
    brand: [
      { label: 'Setup', icon: Wallet },
      { label: 'Deploy', icon: Send },
      { label: 'Growth', icon: BarChart3 },
      { label: 'Results', icon: Check },
    ]
  };

  const currentSteps = mode === 'creator' ? Steps.creator : Steps.brand;

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 overflow-hidden relative min-h-[550px] sm:min-h-[500px] flex flex-col font-sans">
      
      {/* Top Bar / Progress */}
      <div className="border-b border-zinc-100 bg-zinc-50/80 backdrop-blur-sm p-4 sm:p-5 flex items-center justify-between z-20 relative">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
        </div>
        
        {/* Progress Indicators */}
        <div className="flex gap-1 md:gap-3">
          {currentSteps.map((s, i) => (
            <div key={i} className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-500 ${i === step ? 'bg-black text-white shadow-md transform scale-105' : i < step ? 'text-black bg-zinc-100' : 'text-zinc-300'}`}>
              <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-[8px] ${i === step ? 'bg-white text-black' : i < step ? 'bg-black text-white' : 'bg-zinc-200'}`}>
                {i < step ? <Check size={8} strokeWidth={4} /> : i + 1}
              </div>
              <span className="hidden sm:inline tracking-tight">{s.label}</span>
            </div>
          ))}
        </div>
        
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-200 px-2 py-1 rounded-md bg-white">
          Preview
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative bg-gradient-to-b from-white to-zinc-50/50">
        
        {/* ==================== CREATOR FLOW ==================== */}
        {mode === 'creator' && (
          <>
            {/* Step 0: Browse Campaigns */}
            <div className={`absolute inset-0 p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center transition-all duration-500 ${step === 0 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-black">Active Campaigns</h3>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium">Select a brand asset to verify.</p>
              </div>
              
              <div className="w-full max-w-md space-y-3">
                {[
                  { name: 'DeFi Protocol Launch', rate: '$50 / 1k views', color: 'bg-indigo-500' },
                  { name: 'AI Assistant App', rate: '$45 / 1k views', color: 'bg-black' },
                  { name: 'Fashion Brand Q1', rate: '$30 / 1k views', color: 'bg-pink-500' }
                ].map((camp, i) => (
                  <button 
                    key={i}
                    onClick={handleSelectCampaign}
                    className="w-full group relative p-3 sm:p-4 rounded-2xl border border-zinc-200 bg-white hover:border-black hover:shadow-lg transition-all duration-300 text-left flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${camp.color}`}>
                         <Play size={18} fill="currentColor" />
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base text-black tracking-tight">{camp.name}</div>
                        <div className="text-xs font-mono text-zinc-500 mt-1">{camp.rate}</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                       <ArrowRight size={14} />
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 text-zinc-400 text-xs animate-bounce">
                <MousePointer2 size={14} /> Tap to select
              </div>
            </div>

            {/* Step 1: Upload */}
            <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-500 ${step === 1 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
              <div className="w-full max-w-sm bg-white rounded-2xl border border-zinc-200 shadow-xl p-6 sm:p-8 text-center relative overflow-hidden">
                 
                 {/* Decorative background */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>

                 <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-zinc-100 shadow-inner">
                    <Upload className="text-black" size={28} strokeWidth={1.5} />
                 </div>
                 
                 <h3 className="text-xl font-bold mb-2 tracking-tight">Submit Content</h3>
                 <p className="text-zinc-500 text-sm mb-8 font-medium">Paste your post link to verify ownership.</p>
                 
                 <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-center gap-3 mb-6 text-left shadow-sm">
                    <div className="w-5 h-5 rounded-full border border-zinc-300 bg-zinc-200 flex items-center justify-center">
                       <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-400 flex-1 truncate font-mono">tiktok.com/@user/video/74...</span>
                 </div>
                 
                 <button 
                   onClick={handleUploadLink}
                   disabled={isVerifying}
                   className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 hover:scale-[1.02] transition-all disabled:opacity-80 disabled:cursor-wait shadow-lg shadow-black/10"
                 >
                    {isVerifying ? (
                      <><Loader2 size={16} className="animate-spin" /> Verifying Analytics...</>
                    ) : (
                      <>Verify & Start Earning</>
                    )}
                 </button>
              </div>
            </div>

            {/* Step 2: Stats */}
            <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-500 ${step === 2 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
               <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-6 border border-green-100 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span> Live Earnings
                  </div>
                  
                  <div className="flex flex-col items-center">
                     <span className="text-sm font-semibold text-zinc-400 mb-2">Total Balance</span>
                     <div className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-2 tabular-nums leading-none text-black">
                       ${balance.toFixed(0)}
                     </div>
                     <div className="text-zinc-500 text-xs sm:text-sm font-medium flex items-center gap-2 bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-100">
                        <TrendingUp size={14} /> 
                        {Math.floor(views).toLocaleString()} verified views
                     </div>
                  </div>
               </div>
               
               {/* Action Bar */}
               <div className={`transition-all duration-700 ${balance > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                 <button 
                    onClick={handleWithdraw}
                    className="group bg-black text-white pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-4 shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
                 >
                    Withdraw Funds
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                       <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                 </button>
               </div>
            </div>

            {/* Step 3: Payment Sent */}
            <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-500 ${step === 3 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
               {isWithdrawing ? (
                 <div className="flex flex-col items-center animate-pulse">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-zinc-100 border-t-black animate-spin mb-8"></div>
                    <div className="text-lg font-bold">Processing on-chain...</div>
                 </div>
               ) : (
                 <>
                   <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-black/20 animate-[scaleIn_0.4s_ease-out]">
                      <Check size={40} className="text-white" strokeWidth={3} />
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">Funds Sent</h3>
                   <p className="text-zinc-500 mb-10 max-w-xs text-center font-medium text-sm sm:text-base">
                      Your earnings of <span className="text-black font-bold border-b-2 border-zinc-100">${balance.toFixed(2)}</span> have been transferred to your wallet.
                   </p>
                   
                   <div className="w-full max-w-sm bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-zinc-100 rounded-xl flex items-center justify-center text-black shadow-sm">
                         <Wallet size={20} />
                      </div>
                      <div className="flex-1 overflow-hidden">
                         <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Transaction Hash</div>
                         <div className="font-mono text-xs text-black truncate">0x71C765...9A23</div>
                      </div>
                      <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Confirmed</div>
                   </div>

                   <button onClick={handleReset} className="text-sm font-bold text-black hover:underline">Start New Campaign</button>
                 </>
               )}
            </div>
          </>
        )}


        {/* ==================== BRAND FLOW ==================== */}
        {mode === 'brand' && (
           <>
            {/* Step 0: Setup */}
            <div className={`absolute inset-0 p-4 sm:p-8 flex flex-col items-center justify-center transition-all duration-500 ${step === 0 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
               <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-4">
                     <h3 className="text-lg font-bold tracking-tight">New Campaign</h3>
                     <span className="text-[10px] font-bold bg-zinc-100 px-2 py-1 rounded text-zinc-500 uppercase">Draft</span>
                  </div>
                  <div className="space-y-4">
                     <div>
                        <label className="text-xs font-bold text-zinc-500 block mb-1.5 uppercase tracking-wide">Total Budget</label>
                        <div className="w-full p-3 bg-zinc-50 rounded-xl border border-zinc-200 text-base font-medium flex justify-between items-center group hover:border-black transition-colors cursor-text">
                           <span>$5,000.00</span>
                           <Lock size={14} className="text-zinc-300" />
                        </div>
                     </div>
                     <div>
                        <label className="text-xs font-bold text-zinc-500 block mb-1.5 uppercase tracking-wide">Payout Per 1k Views</label>
                        <div className="w-full p-3 bg-zinc-50 rounded-xl border border-zinc-200 text-base font-medium flex justify-between items-center group hover:border-black transition-colors cursor-text">
                           <span>$2.50</span>
                           <span className="text-xs text-zinc-400">Recommended</span>
                        </div>
                     </div>
                  </div>
                  <button 
                    onClick={handleLaunchCampaign}
                    className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-bold mt-2 shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                     Launch Campaign <ArrowRight size={16} />
                  </button>
               </div>
            </div>

             {/* Step 1: Deploy */}
             <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-500 ${step === 1 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="relative mb-8">
                   <div className="absolute inset-0 bg-zinc-100 rounded-full animate-ping opacity-75"></div>
                   <div className="w-24 h-24 bg-white border border-zinc-100 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                      <Send size={32} className="text-black" />
                   </div>
                </div>
                <div className="text-center space-y-3">
                   <h3 className="text-2xl font-bold tracking-tight">Deploying to Network</h3>
                   <div className="flex flex-col items-center gap-2 text-zinc-500 text-sm font-medium">
                      <span>Smart contract initialized...</span>
                      <span className="text-black font-bold">Notifying 14,000+ vetted creators</span>
                   </div>
                   
                   {/* Fake terminal loader */}
                   <div className="mt-8 flex gap-1">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:0ms]"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:150ms]"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:300ms]"></div>
                   </div>
                </div>
             </div>

             {/* Step 2: Growth Dashboard */}
             <div className={`absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-500 ${step === 2 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                 <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
                    {/* Live Indicator */}
                    <div className="col-span-2 flex justify-between items-center mb-2">
                       <h3 className="text-base sm:text-lg font-bold">Campaign Dashboard</h3>
                       <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full animate-pulse">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> LIVE
                       </div>
                    </div>

                    <div className="bg-white border border-zinc-200 p-4 sm:p-5 rounded-2xl shadow-sm text-center">
                       <div className="text-zinc-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Creators Active</div>
                       <div className="text-2xl sm:text-3xl font-black tracking-tight">{Math.floor(balance)}</div>
                    </div>
                    <div className="bg-white border border-zinc-200 p-4 sm:p-5 rounded-2xl shadow-sm text-center">
                       <div className="text-zinc-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Total Reach</div>
                       <div className="text-2xl sm:text-3xl font-black tracking-tight">{(views / 1000).toFixed(1)}M</div>
                    </div>
                    <div className="col-span-2 bg-black text-white p-5 sm:p-6 rounded-2xl shadow-xl flex items-center justify-between relative overflow-hidden">
                        {/* Abstract Chart BG */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end gap-1 px-6 opacity-20 pointer-events-none">
                           {[20,40,30,60,50,80,70,90,100, 85, 95, 100].map((h,i) => (
                              <div key={i} className="flex-1 bg-white rounded-t-sm transition-all duration-300" style={{height: `${h}%`}}></div>
                           ))}
                        </div>

                        <div className="relative z-10">
                           <div className="text-zinc-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Effective CPM</div>
                           <div className="text-3xl sm:text-4xl font-black">$2.45</div>
                        </div>
                        <div className="relative z-10 text-right">
                           <div className="text-green-400 text-xs sm:text-sm font-bold mb-1">+42%</div>
                           <div className="text-zinc-500 text-[10px] sm:text-xs">vs. traditional ads</div>
                        </div>
                    </div>
                    
                    <button 
                       onClick={() => setStep(3)} 
                       className="col-span-2 mt-2 text-xs font-bold text-zinc-400 hover:text-black transition-colors"
                    >
                       End Campaign & View Report
                    </button>
                 </div>
             </div>

             {/* Step 3: Report */}
             <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-500 ${step === 3 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="text-center max-w-md w-full">
                   <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 size={24} className="text-black" />
                   </div>
                   <h3 className="text-2xl font-bold mb-8 tracking-tight">Campaign Complete</h3>
                   
                   <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 text-left space-y-4 mb-8">
                      <div className="flex justify-between items-center">
                         <span className="text-sm font-medium text-zinc-500">Total Views</span>
                         <span className="font-bold tabular-nums">1,540,230</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-sm font-medium text-zinc-500">Avg. Engagement</span>
                         <span className="font-bold tabular-nums">8.4%</span>
                      </div>
                      <div className="h-px bg-zinc-200 my-2"></div>
                      <div className="flex justify-between items-center text-green-600">
                         <span className="text-sm font-bold">ROI</span>
                         <span className="font-bold">+420%</span>
                      </div>
                   </div>
                   
                   <button onClick={handleReset} className="w-full bg-black text-white py-3 rounded-xl text-sm font-bold shadow-lg hover:scale-[1.02] transition-transform">
                      Launch Another Campaign
                   </button>
                </div>
             </div>
           </>
        )}

      </div>
    </div>
  );
};
