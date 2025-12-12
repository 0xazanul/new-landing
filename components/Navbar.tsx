import React, { useEffect, useState } from 'react';
import { ViewMode, PageView } from '../types';

interface NavbarProps {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}

export const Navbar: React.FC<NavbarProps> = ({ mode, setMode, onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-2 sm:pt-4' : 'pt-4 sm:pt-6'}`}>
      <div className={`
        relative flex items-center justify-between
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled 
          ? 'w-[92%] sm:w-[90%] max-w-4xl bg-white/80 backdrop-blur-md shadow-sm border border-zinc-200/50 rounded-full pl-3 pr-4 py-2.5 sm:px-6 sm:py-3' 
          : 'w-full max-w-6xl px-6 sm:px-8 py-4 bg-transparent border-transparent'
        }
      `}>
          
        {/* Logo - Navigates Home */}
        <div className="flex items-center gap-2 cursor-pointer z-20" onClick={() => onNavigate('home')}>
          <img src="/bg.png" alt="The Clipping Company" className="w-8 h-8 rounded-full flex-shrink-0 shadow-lg shadow-black/10 object-cover" />
          <span className={`font-bold text-sm tracking-tight hidden lg:block transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
            The Clipping Company
          </span>
          {currentPage !== 'home' && (
            <span className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded ml-2 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
              {currentPage}
            </span>
          )}
        </div>

        {/* Center Toggle - Only visible on Home */}
        {currentPage === 'home' && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-auto">
             <div className="p-1 bg-zinc-100/80 rounded-full border border-zinc-200/50 flex shadow-inner backdrop-blur-sm">
                <button 
                  onClick={() => setMode('creator')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-300 whitespace-nowrap ${mode === 'creator' ? 'bg-white text-black shadow-sm ring-1 ring-black/5' : 'text-zinc-500 hover:text-zinc-900'}`}
                >
                  Creators
                </button>
                <button 
                   onClick={() => setMode('brand')}
                   className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-300 whitespace-nowrap ${mode === 'brand' ? 'bg-white text-black shadow-sm ring-1 ring-black/5' : 'text-zinc-500 hover:text-zinc-900'}`}
                >
                  Brands
                </button>
             </div>
          </div>
        )}
        
        {/* Right Actions */}
        <div className="flex items-center gap-4 z-20 ml-auto">
           <button 
             onClick={() => onNavigate('home')}
             className="text-[10px] sm:text-xs bg-black text-white px-3 sm:px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-200 shadow-lg shadow-zinc-200 whitespace-nowrap"
           >
              Join Waitlist
           </button>
        </div>
      </div>
    </nav>
  );
};