import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, Check, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { PageView } from '../types';

interface ContactProps {
  onNavigate?: (page: PageView) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center px-6 max-w-md animate-fade-in">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-black/20">
            <Check size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Message Sent</h2>
          <p className="text-zinc-500 mb-8">
            Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {onNavigate && (
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        )}
        
        <div className="text-center mb-16 animate-slide-up [animation-delay:0ms]">
           <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black mb-6">Get in touch</h1>
           <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
             Whether you're a creator looking to join or a brand planning your next campaign, we're here to help.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up [animation-delay:200ms]">
           {/* Info Column */}
           <div className="space-y-8">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
                 <h3 className="font-bold text-lg mb-8 tracking-tight text-black">Direct Channels</h3>
                 <div className="space-y-8">
                    <div className="flex items-start gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                          <Mail size={22} strokeWidth={1.5} />
                       </div>
                       <div>
                          <div className="font-bold text-sm text-black mb-1">Email Support</div>
                          <div className="text-zinc-500 text-sm mb-2">For general inquiries and partnership opportunities.</div>
                          <a href="mailto:hello@theclippingcompany.com" className="text-black text-sm font-semibold hover:underline">hello@theclippingcompany.com</a>
                       </div>
                    </div>
                    
                    <div className="flex items-start gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                          <MessageSquare size={22} strokeWidth={1.5} />
                       </div>
                       <div>
                          <div className="font-bold text-sm text-black mb-1">Social Media</div>
                          <div className="text-zinc-500 text-sm mb-2">Follow us for updates and featured clips.</div>
                          <a href="#" className="text-black text-sm font-semibold hover:underline">@theclippingco</a>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-2">Join the Waitlist</h3>
                    <p className="text-zinc-400 text-sm">We are currently accepting a limited number of new partners each week.</p>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
              </div>
           </div>

           {/* Form Column */}
           <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl shadow-zinc-200/40">
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">First Name</label>
                       <input 
                         type="text" 
                         required 
                         className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-sm" 
                         placeholder="Jane" 
                       />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Last Name</label>
                       <input 
                         type="text" 
                         required 
                         className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-sm" 
                         placeholder="Doe" 
                       />
                    </div>
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-sm" 
                      placeholder="jane@company.com" 
                    />
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Topic</label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-sm appearance-none">
                       <option>Brand Partnership</option>
                       <option>Creator Inquiry</option>
                       <option>Support</option>
                       <option>Other</option>
                    </select>
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required 
                      rows={4} 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all resize-none text-sm" 
                      placeholder="Tell us a bit about your project..."
                    ></textarea>
                 </div>

                 <Button type="submit" fullWidth className="bg-black text-white h-12 shadow-lg hover:bg-zinc-800">
                    Send Message <ArrowRight size={16} className="ml-2" />
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};