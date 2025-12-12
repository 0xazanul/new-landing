import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, ChevronRight } from 'lucide-react';
import { PageView } from '../types';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string; // Markdown content
}

const posts: BlogPost[] = [
  {
    id: 'future-of-clipping',
    title: 'The Future of Content Clipping',
    excerpt: 'How short-form content is reshaping the digital marketing landscape and why brands are shifting budget to micro-creators.',
    date: 'Jan 12, 2025',
    author: 'Sarah Jenkins',
    category: 'Industry',
    content: `
# The Future of Content Clipping

Short-form content is not just a trend; it is the new dominant media format. With the rise of TikTok, YouTube Shorts, and Instagram Reels, attention spans have shortened, and the demand for high-density entertainment has exploded.

## Why Brands Are Shifting
Brands are realizing that highly produced, 30-second TV commercials do not work on vertical screens. They need authenticity. They need chaos. They need "Clippers."

**Key drivers for 2025:**

- **Algorithmic Favoritism**: Platforms push content that has high retention. Clips inherently have high retention.
- **Cost Efficiency**: Clipping existing long-form assets is 10x cheaper than shooting new ads.
- **Trust**: Users trust individual creators more than corporate accounts.

## The Economy of Attention
We are building The Clipping Company to be the infrastructure layer for this new economy. By using blockchain for settlements, we remove the friction of cross-border payments for global creator talent.
    `
  },
  {
    id: 'crypto-payouts',
    title: 'Why We Built Payouts on Chain',
    excerpt: 'Traditional banking is too slow for the gig economy. Here is why we chose USDC and ETH for our settlement layer.',
    date: 'Jan 08, 2025',
    author: 'Alex Rivera',
    category: 'Engineering',
    content: `
# Why We Built Payouts on Chain

Waiting 30 days for a bank transfer ("Net-30") is acceptable for corporations, but it is hostile to creators. When a video goes viral, the creator should be paid immediately, not next month.

## Instant Settlement
By using smart contracts, we can trigger a payout the moment a view target is verified by our oracle.

**Benefits:**
- **Speed**: Funds arrive in seconds.
- **Transparency**: Every transaction is verifiable on the blockchain.
- **Global Access**: A creator in Nigeria or Brazil has the same access as one in New York.

## How It Works
1. Brand deposits funds into Escrow.
2. Creator uploads video link.
3. Oracle verifies views.
4. Smart Contract releases funds.

No middlemen. No delays.
    `
  },
  {
    id: 'viral-mechanics',
    title: 'The Mechanics of Virality',
    excerpt: 'Analyzing 10,000 viral clips to understand what makes a user stop scrolling and start watching.',
    date: 'Dec 24, 2024',
    author: 'Data Team',
    category: 'Data',
    content: `
# The Mechanics of Virality

We analyzed over 10,000 clips that achieved over 1 million views. The data revealed distinct patterns that can be replicated.

## The Hook (0-3 Seconds)
If you don't grab attention in the first 3 seconds, you've lost 80% of your audience.
- **Visual Disruption**: Fast movement or unexpected imagery.
- **Audio Hooks**: Recognized sounds or loud starts.

## The Loop
Viral clips often loop perfectly. The end feeds back into the beginning, tricking the algorithm into registering multiple views per user.

## Conclusion
Virality is not luck. It is engineering.
    `
  }
];

interface BlogProps {
  onNavigate?: (page: PageView) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Simple Markdown Renderer
  const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl md:text-4xl font-bold mt-8 mb-4 tracking-tight text-black">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 tracking-tight text-black">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('**') && line.endsWith('**')) { // simplified bold line
         return <p key={index} className="font-bold my-4 text-black">{line.replace(/\*\*/g, '')}</p>
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 list-disc pl-2 mb-2 text-zinc-600">{line.replace('- ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-zinc-600 leading-7">{line}</p>;
    });
  };

  if (activePost) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <button 
            onClick={() => setActivePost(null)}
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </button>

          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
             <span>{activePost.category}</span>
             <span>•</span>
             <span>{activePost.date}</span>
          </div>

          <div className="prose prose-zinc max-w-none">
             {renderMarkdown(activePost.content)}
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-100 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
                   <User size={20} />
                </div>
                <div>
                   <div className="text-sm font-bold text-black">{activePost.author}</div>
                   <div className="text-xs text-zinc-500">Author</div>
                </div>
             </div>
             <button className="text-black font-bold text-sm hover:underline">Share Article</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {onNavigate && (
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        )}
        
        <div className="mb-20">
           <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black mb-6">Blog & Insights</h1>
           <p className="text-xl text-zinc-500 max-w-2xl">
             Thoughts on the creator economy, viral marketing mechanics, and the future of decentralized payments.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {posts.map((post) => (
             <article 
               key={post.id} 
               className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 hover:border-black transition-all duration-300 cursor-pointer"
               onClick={() => setActivePost(post)}
             >
                <div className="h-48 bg-zinc-50 border-b border-zinc-100 flex items-center justify-center p-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="text-zinc-300 group-hover:text-black transition-colors transform group-hover:scale-110 duration-500">
                      {/* Generative placeholder art based on ID length */}
                      <div className="w-24 h-24 rounded-full border-2 border-current opacity-20 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border border-current"></div>
                      </div>
                   </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                   <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                      <span className="text-black font-bold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                   </div>
                   
                   <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4">
                      {post.title}
                   </h3>
                   
                   <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                   </p>
                   
                   <div className="flex items-center text-sm font-bold text-black mt-auto">
                      Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </article>
           ))}
        </div>
      </div>
    </div>
  );
};