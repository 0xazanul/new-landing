import React, { useState } from 'react';
import { ArrowRight, Twitter, Linkedin, Instagram, Check, Loader2 } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden relative font-sans">
      
      {/* Abstract Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-8">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95]">
                The future of <br/>
                <span className="text-zinc-500">content money.</span>
             </h2>
             <p className="text-zinc-400 text-lg max-w-md font-light leading-relaxed">
                Join the protocol redefining the creator economy. <br/>Escrow-secured. Crypto-native. Instant.
             </p>

             <div className="pt-4 max-w-sm h-24">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                   <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Join the Waitlist</span>
                </div>
                
                {submitted ? (
                   <div className="flex items-center gap-3 text-white animate-fade-in bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 backdrop-blur-sm">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-black shrink-0">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium">Added to waitlist. We'll be in touch.</span>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit} className="flex items-center border-b border-zinc-800 focus-within:border-white transition-colors pb-2">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        placeholder="Enter your email" 
                        className="bg-transparent w-full outline-none text-lg placeholder-zinc-700 font-medium text-white"
                      />
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                      >
                         {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} />}
                      </button>
                   </form>
                )}
             </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
             <div className="space-y-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest">Platform</h4>
                <ul className="space-y-3 text-sm text-zinc-500 font-medium">
                   <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors">Creators</button></li>
                   <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors">Brands</button></li>
                   <li><button onClick={() => onNavigate?.('blog')} className="hover:text-white transition-colors">Success Stories</button></li>
                </ul>
             </div>

             <div className="space-y-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest">Company</h4>
                <ul className="space-y-3 text-sm text-zinc-500 font-medium">
                   <li><button onClick={() => onNavigate?.('blog')} className="hover:text-white transition-colors">Blog</button></li>
                   <li><button onClick={() => onNavigate?.('contact')} className="hover:text-white transition-colors">Contact</button></li>
                   <li><button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors">Terms</button></li>
                   <li><button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors">Privacy</button></li>
                </ul>
             </div>

             <div className="space-y-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest">Socials</h4>
                <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                      <Twitter size={16} />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                      <Linkedin size={16} />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                      <Instagram size={16} />
                   </a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-zinc-600 text-xs font-mono">© 2025 THE CLIPPING COMPANY.</p>
           <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 select-none">THE CLIPPING CO.</h1>
        </div>
      </div>
    </footer>
  );
};