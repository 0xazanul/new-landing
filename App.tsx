import React, { useState } from 'react';
import { ViewMode, PageView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { TermsOfService } from './components/TermsOfService';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

function App() {
  const [mode, setMode] = useState<ViewMode>('creator');
  const [page, setPage] = useState<PageView>('home');

  const navigateTo = (p: PageView) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(p);
  };

  const renderContent = () => {
    switch (page) {
      case 'blog':
        return <Blog onNavigate={navigateTo} />;
      case 'terms':
        return <TermsOfService onNavigate={navigateTo} />;
      case 'contact':
        return <Contact onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Hero mode={mode} />
            <TrustSection mode={mode} onNavigate={navigateTo} />
            <Features />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Background />
      <Navbar mode={mode} setMode={setMode} onNavigate={navigateTo} currentPage={page} />
      
      <main className="relative">
        {renderContent()}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;