import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { PageView } from '../types';

interface TermsOfServiceProps {
  onNavigate?: (page: PageView) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {onNavigate && (
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        )}
        
        <div className="mb-12">
           <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              <span>Legal</span>
              <ChevronRight size={12} />
              <span className="text-black">Terms of Service</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">Terms of Service</h1>
           <p className="text-zinc-500">Last updated: January 15, 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           
           <div className="hidden md:block col-span-4 lg:col-span-3">
              <div className="sticky top-32 space-y-1">
                 {["Agreement", "Accounts", "Content Rights", "Payments", "Termination"].map((item) => (
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} className="block px-3 py-2 text-sm text-zinc-500 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors">
                       {item}
                    </a>
                 ))}
              </div>
           </div>

           <div className="col-span-1 md:col-span-8 lg:col-span-9 prose prose-zinc max-w-none">
              <section id="agreement" className="mb-12">
                 <h3 className="text-xl font-bold text-black mb-4">1. Agreement to Terms</h3>
                 <p className="text-zinc-600 mb-4">
                    By accessing or using The Clipping Company's website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                 </p>
              </section>

              <section id="accounts" className="mb-12">
                 <h3 className="text-xl font-bold text-black mb-4">2. User Accounts</h3>
                 <p className="text-zinc-600 mb-4">
                    When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                 </p>
                 <p className="text-zinc-600">
                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                 </p>
              </section>

              <section id="content-rights" className="mb-12">
                 <h3 className="text-xl font-bold text-black mb-4">3. Content Rights & Licensing</h3>
                 <p className="text-zinc-600 mb-4">
                    Creators retain full ownership of their original channels and social media accounts. However, by participating in a Brand Campaign, you grant the Brand a limited, non-exclusive, royalty-free license to use the specific clipped content for marketing purposes for the duration specified in the campaign.
                 </p>
              </section>

              <section id="payments" className="mb-12">
                 <h3 className="text-xl font-bold text-black mb-4">4. Payments & Escrow</h3>
                 <p className="text-zinc-600 mb-4">
                    The Clipping Company uses a smart contract based escrow system. Funds are released automatically upon verification of view targets. We are not responsible for delays caused by blockchain network congestion or oracle failures, though we will make every effort to resolve such issues manually if they arise.
                 </p>
              </section>

              <section id="termination" className="mb-12">
                 <h3 className="text-xl font-bold text-black mb-4">5. Termination</h3>
                 <p className="text-zinc-600 mb-4">
                    We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                 </p>
              </section>
           </div>
        </div>

      </div>
    </div>
  );
};