import React, { useState } from 'react';
import { ViewMode } from '../types';
import { Button } from './Button';
import { InteractiveDemo } from './InteractiveDemo';
import { Check, Loader2 } from 'lucide-react';

interface HeroProps {
  mode: ViewMode;
}

export const Hero: React.FC<HeroProps> = ({ mode }) => {
  const isCreator = mode === 'creator';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          
          <div className="animate-slide-up opacity-0 [animation-delay:0ms] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/60 text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-8">
             <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
             {isCreator ? "Waitlist Open - Join 19+ Others" : "Brand Partnership Access"}
          </div>

          <h1 className="animate-slide-up opacity-0 [animation-delay:100ms] text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-black leading-[0.9] mb-8 text-balance">
            {isCreator ? "Create videos." : "Vetted creators."}
            <br />
            <span className="text-zinc-400">{isCreator ? "Earn crypto." : "Real results."}</span>
          </h1>

          <p className="animate-slide-up opacity-0 [animation-delay:200ms] text-lg sm:text-xl text-zinc-500 max-w-xl leading-relaxed font-normal text-balance mb-10">
            {isCreator 
              ? "Post brand content. Hit view targets. Get paid instantly via escrow. The new standard for creator monetization."
              : "Access a vetted network of creators. Track performance in real-time. Pay only for verified views."}
          </p>

          <div className="animate-slide-up opacity-0 [animation-delay:300ms] w-full max-w-md h-[50px] relative">
            {submitted ? (
              <div className="absolute inset-0 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2 text-green-700 font-medium animate-fade-in shadow-sm">
                 <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white shadow-sm">
                    <Check size={12} strokeWidth={3} />
                 </div>
                 You're on the list! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  disabled={loading}
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-black placeholder-zinc-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-sm h-[46px]"
                />
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto h-[46px] rounded-xl px-8 bg-black hover:bg-zinc-800 text-white shadow-xl shadow-black/10 min-w-[140px] flex items-center justify-center"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    isCreator ? "Join Waitlist" : "Request Access"
                  )}
                </Button>
              </form>
            )}
          </div>
          
          <div className="animate-slide-up opacity-0 [animation-delay:400ms] mt-8 flex items-center gap-6 text-xs text-zinc-400 font-medium">
             <div className="flex items-center gap-1.5"><Check size={12} /> No credit card required</div>
             <div className="flex items-center gap-1.5"><Check size={12} /> {isCreator ? "Instant onboarding" : "Free demo"}</div>
          </div>
        </div>

        {/* Interactive Demo Container */}
        <div className="animate-slide-up opacity-0 [animation-delay:500ms] relative mx-auto max-w-4xl">
           <div className="absolute -inset-10 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-32 bottom-0 pointer-events-none"></div>
           <InteractiveDemo mode={mode} />
        </div>

      </div>
    </section>
  );
};