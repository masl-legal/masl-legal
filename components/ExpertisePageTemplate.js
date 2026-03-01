import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsPreview from '@/components/NewsPreview';
import CTABanner from '@/components/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';
import { getRelatedTestimonials } from '@/lib/data';

export default function ExpertisePageTemplate({ expertise }) {
  const relatedTestimonials = getRelatedTestimonials(expertise.sector);

  return (
    <main id="main-content">
      <HeroBanner title={expertise.name} subtitle={expertise.tagline} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-light-border">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-3">
          <nav aria-label="Breadcrumb" className="font-sans text-body-sm text-body-gray">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/sectors/${expertise.sector}`} className="hover:text-navy transition-colors">{expertise.sectorName}</Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{expertise.name}</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12]">
                  {expertise.introLeft}
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-body text-body-gray leading-relaxed">
                  {expertise.introRight}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Legislation Callout */}
      {expertise.keyLegislation && expertise.keyLegislation.length > 0 && (
        <section className="bg-off-white border-b border-light-border">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 shrink-0">
                  Key legislation
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.keyLegislation.map((law, i) => (
                    <span
                      key={i}
                      className="font-sans text-body-sm text-dark bg-white border border-light-border px-4 py-1.5 rounded-sm"
                    >
                      {law}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {expertise.sections && expertise.sections.map((section, i) => (
        <section key={i} className={`${i % 2 === 0 ? 'bg-off-white' : 'bg-white'} py-18 lg:py-22`}>
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <h3 className="font-serif font-semibold text-h3 text-dark leading-snug mb-4">
                    {section.heading}
                  </h3>
                  <p className="font-sans text-body-lg text-dark font-medium leading-relaxed">
                    {section.left}
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="font-sans text-body text-body-gray leading-relaxed">
                    {section.right}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <TestimonialsSection items={relatedTestimonials} />
      <NewsPreview limit={3} />
      <CTABanner />
    </main>
  );
}
