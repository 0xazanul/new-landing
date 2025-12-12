import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do payouts work?",
      answer: "We use a smart escrow system. Funds are locked before work begins. Once the content is live and verified, payment is released instantly to your wallet or bank account."
    },
    {
      question: "Is there a minimum follower count?",
      answer: "Quality over quantity. While larger channels have more reach, we prioritize engagement rates and content quality. Micro-influencers are welcome."
    },
    {
      question: "Can I use multiple platforms?",
      answer: "Absolutely. Our platform aggregates analytics from TikTok, YouTube Shorts, Reels, and X to give you a unified view of your earnings across the web."
    },
    {
      question: "What about content rights?",
      answer: "Creators retain ownership of their channel, but grant brands specific usage rights for the clipped content during the campaign period. It's standard and fair."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-16 tracking-tight text-center">Frequently Asked</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`group border border-zinc-200 rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-zinc-50 border-zinc-300' : 'bg-white hover:border-zinc-300'}`}>
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-semibold text-black">
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center transition-colors ${openIndex === index ? 'bg-black text-white border-black' : 'text-zinc-400'}`}>
                   {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed max-w-xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};