import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsPreview from '@/components/NewsPreview';
import CTABanner from '@/components/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';
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

      {/* Expertise List */}
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
                <Link href={item.href} className="group grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 py-8 border-b border-light-border last:border-b-0">
                  <div className="placeholder-image aspect-[16/10] rounded-sm" />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-serif text-h3 text-dark group-hover:text-navy transition-colors leading-snug mb-3">
                      {item.name}
                    </h3>
                    <p className="font-sans text-body text-body-gray leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="font-sans text-label font-semibold tracking-nav uppercase text-navy group-hover:opacity-70 transition-opacity">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection items={relatedTestimonials} />
      <NewsPreview limit={3} />
      <CTABanner />
    </main>
  );
}
