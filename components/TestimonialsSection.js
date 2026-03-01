'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection({ items = testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - 2);
  const mobileMaxIndex = items.length - 1;

  const prev = () => {
    setCurrentIndex((i) => Math.max(0, i - 2));
  };

  const next = () => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 2));
  };

  const mobilePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const mobileNext = () => setCurrentIndex((i) => Math.min(mobileMaxIndex, i + 1));

  const visibleDesktop = items.slice(currentIndex, currentIndex + 2);
  const visibleMobile = items[currentIndex];

  return (
    <section className="bg-dark py-22 lg:py-26" aria-label="Client testimonials">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-serif font-normal text-h2 text-white leading-[1.12]">
            Valued and trusted<br className="hidden lg:block" /> by our clients
          </h2>

          {/* Desktop Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonials"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonials"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: 2 at a time */}
        <div className="hidden md:grid grid-cols-2 gap-12">
          {visibleDesktop.map((t, i) => (
            <div key={currentIndex + i} className="animate-fade-in">
              <blockquote className="font-sans text-body-lg text-white/80 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full bg-navy flex items-center justify-center shrink-0">
                  <span className="font-sans text-xs font-semibold text-white">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans text-body-sm font-medium text-white">{t.name}</p>
                  <p className="font-sans text-body-sm text-white/70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 1 at a time */}
        <div className="md:hidden">
          {visibleMobile && (
            <div className="animate-fade-in">
              <blockquote className="font-sans text-body-lg text-white/80 leading-relaxed mb-8">
                &ldquo;{visibleMobile.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full bg-navy flex items-center justify-center shrink-0">
                  <span className="font-sans text-xs font-semibold text-white">{visibleMobile.initial}</span>
                </div>
                <div>
                  <p className="font-sans text-body-sm font-medium text-white">{visibleMobile.name}</p>
                  <p className="font-sans text-body-sm text-white/70">{visibleMobile.title}</p>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Arrows */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={mobilePrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={mobileNext}
              disabled={currentIndex >= mobileMaxIndex}
              className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
