import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsPreview from '@/components/NewsPreview';
import CTABanner from '@/components/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';
import { getExpertiseBySector, getRelatedTestimonials } from '@/lib/data';

export default function SectorPageTemplate({ sector }) {
  const expertiseItems = getExpertiseBySector(sector.slug);
  const relatedTestimonials = getRelatedTestimonials(sector.slug);

  return (
    <main id="main-content">
      <HeroBanner title={sector.name} subtitle={sector.tagline} />

      {/* Intro */}
      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12]">
                  {sector.introLeft}
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-body text-body-gray leading-relaxed">
                  {sector.introRight}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Approach */}
      {sector.approachHeading && (
        <section className="bg-dark py-22 lg:py-26">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-18">
                <div>
                  <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/60 mb-5">
                    Our approach
                  </p>
                  <h2 className="font-serif font-normal text-h2 text-white leading-[1.12]">
                    {sector.approachHeading}
                  </h2>
                </div>
                <div className="flex flex-col justify-end">
                  {sector.approachText.split('\n\n').map((p, i) => (
                    <p key={i} className={`font-sans text-body text-white/75 leading-relaxed ${i < sector.approachText.split('\n\n').length - 1 ? 'mb-5' : ''}`}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Highlights Grid */}
            {sector.highlights && (
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
                  {sector.highlights.map((h, i) => (
                    <div key={i} className="border border-white/10 p-8">
                      <h3 className="font-serif font-semibold text-h4 text-white mb-3">{h.title}</h3>
                      <p className="font-sans text-body-sm text-white/70 leading-relaxed">{h.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* Stats Row */}
            {sector.stats && (
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                  {sector.stats.map((s, i) => {
                    const match = s.number.match(/^([£$]?)([0-9.]+)(.*)$/);
                    const prefix = match ? match[1] : '';
                    const num = match ? match[2] : s.number;
                    const suffix = match ? match[3] : '';
                    return (
                      <div key={i} className="text-center sm:text-left">
                        <p className="font-serif text-h2 text-white leading-none mb-2">
                          <CountUp target={num} prefix={prefix} suffix={suffix} />
                        </p>
                        <p className="font-sans text-body-sm text-white/60">{s.label}</p>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Expertise List */}
      {expertiseItems.length > 0 && (
        <section className="bg-off-white py-22 lg:py-26">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <ScrollReveal>
              <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-8">
                Expertise
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-10">
              {expertiseItems.map((item, i) => (
                <ScrollReveal key={item.slug} delay={i < 3 ? i + 1 : 0}>
                  <Link href={item.href} className="group block expertise-item py-8 border-b border-light-border last:border-b-0">
                    <h3 className="font-serif font-semibold text-h3 text-dark group-hover:text-navy transition-colors leading-snug mb-3">
                      {item.name}
                    </h3>
                    <p className="font-sans text-body text-body-gray leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="font-sans text-body-sm font-semibold tracking-nav uppercase text-navy group-hover:opacity-70 transition-opacity">
                      Learn more →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSection items={relatedTestimonials} />
      <NewsPreview limit={3} />
      <CTABanner />
    </main>
  );
}
