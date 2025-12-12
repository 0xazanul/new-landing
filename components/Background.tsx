import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base White */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]" 
        style={{
          backgroundImage: `radial-gradient(#a1a1aa 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}
      ></div>

      {/* Noise Texture (optional for paper feel) */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             filter: 'contrast(320%) brightness(100%)'
           }}>
      </div>
    </div>
  );
};