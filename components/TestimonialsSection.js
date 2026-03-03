'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection({ items = testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = items.length;

  const goTo = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [next, isPaused]);

  return (
    <section
      className="bg-dark py-22 lg:py-26 overflow-hidden"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-serif font-normal text-h2 text-white leading-[1.12]">
            Valued and trusted<br className="hidden lg:block" /> by our clients
          </h2>

          {/* Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((t, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-0 md:pr-8"
                style={{ minWidth: '100%' }}
              >
                <div className="max-w-3xl">
                  <blockquote className="font-sans text-body-lg text-white/80 leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-[38px] h-[38px] rounded-full bg-navy flex items-center justify-center shrink-0">
                      <span className="font-sans text-xs font-semibold text-white">{t.initial}</span>
                    </div>
                    <div>
                      <p className="font-sans text-body-sm font-medium text-white">{t.name}</p>
                      <p className="font-sans text-body-sm text-white/70">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2.5 mt-10">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden items-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
