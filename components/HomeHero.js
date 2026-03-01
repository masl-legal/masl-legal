'use client';

import { useState, useEffect } from 'react';

export default function HomeHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        autoPlay
        loop
        playsInline
        poster=""
      >
        {/* TODO: Replace src with actual hero video file */}
      </video>

      {/* Gradient Fallback (visible when video hasn't loaded) */}
      <div className="absolute inset-0 hero-gradient z-0" />

      {/* Wave texture */}
      <div className="absolute inset-0 wave-texture z-[1]" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-[2]" />

      {/* Corner brackets */}
      <div className="absolute top-10 right-10 w-10 h-10 border-t-[1.5px] border-r-[1.5px] border-white/25 z-[3]" />
      <div className="absolute bottom-10 left-10 w-10 h-10 border-b-[1.5px] border-l-[1.5px] border-white/25 z-[3]" />
      <div className="absolute bottom-10 right-10 w-10 h-10 border-b-[1.5px] border-r-[1.5px] border-white/25 z-[3]" />

      {/* Headline */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 h-full flex items-end pb-16 lg:pb-20">
        <h1
          className={`font-serif font-light text-hero text-white leading-[1.08] max-w-4xl transition-all duration-[900ms] cubic-bezier-hero ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          Innovative law for<br /> a changing world.
        </h1>
      </div>
    </section>
  );
}
