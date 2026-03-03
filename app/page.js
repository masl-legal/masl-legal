import Link from 'next/link';
import { sectors } from '@/lib/data';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import HomeHero from '@/components/HomeHero';
import HomeIntro from '@/components/HomeIntro';
import HomeExpertiseAccordion from '@/components/HomeExpertiseAccordion';
import HomeNews from '@/components/HomeNews';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. HERO */}
      <HomeHero />

      {/* 2. INTRO */}
      <HomeIntro />

      {/* 3. EXPERTISE ACCORDION */}
      <HomeExpertiseAccordion />

      {/* 4. SECTORS */}
      <section className="bg-navy py-22 lg:py-22">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/40 mb-8">
              Sectors
            </p>
          </ScrollReveal>
          <div className="flex flex-col">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.slug} delay={i + 1}>
                <Link
                  href={sector.href}
                  className="group flex items-center justify-between py-5 border-b border-white/[0.12] last:border-b-0 hover:opacity-65 transition-opacity"
                >
                  <span className="font-serif text-[23px] text-white">{sector.name}</span>
                  <svg className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS & INSIGHTS */}
      <HomeNews />

      {/* 6. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. CTA BANNER */}
      <CTABanner />
    </main>
  );
}
