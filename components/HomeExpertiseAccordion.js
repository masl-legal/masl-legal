'use client';

import { useState } from 'react';
import Link from 'next/link';
import { expertiseAreas } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomeExpertiseAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-off-white py-22 lg:py-26">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-5">
                Our expertise
              </p>
              <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12]">
                What we do
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-light-border">
          {expertiseAreas.map((item, i) => (
            <div key={item.slug} className="border-b border-light-border">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 group text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-[22px] text-dark group-hover:text-navy transition-colors">
                  {item.name}
                </span>
                <span className={`w-7 h-7 flex items-center justify-center text-body-gray transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-350 ${openIndex === i ? 'max-h-[200px] pb-5' : 'max-h-0'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8 pr-8">
                  <p className="font-sans text-body text-body-gray leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="font-sans text-label font-semibold tracking-nav uppercase text-navy hover:opacity-70 transition-opacity shrink-0"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
