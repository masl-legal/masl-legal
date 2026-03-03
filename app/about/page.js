import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'About',
  description: 'Masl Legal is an independent London-based law firm delivering tailored, expert legal advice across commercial, corporate, international trade, dispute resolution and regulatory matters.',
  openGraph: {
    title: 'About | Masl Legal',
    description: 'Independent London-based law firm delivering tailored legal advice with a commitment to excellence.',
  },
};

const values = [
  { title: 'Excellence', description: 'We are committed to the highest standards of legal practice, delivering advice that is thorough, precise, and commercially astute.' },
  { title: 'Integrity', description: 'Trust is the foundation of every client relationship. We act with honesty, transparency, and unwavering ethical standards.' },
  { title: 'Innovation', description: 'We embrace new technologies and modern approaches to legal practice, ensuring our clients benefit from forward-thinking solutions.' },
  { title: 'Collaboration', description: 'Great outcomes require genuine partnership. We work closely with our clients, understanding their goals and becoming an extension of their team.' },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <HeroBanner title="About us" subtitle="Independent. Expert. Committed." />

      {/* Intro */}
      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12]">
                  A modern law firm<br className="hidden md:block" /> built on traditional values.
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-body text-body-gray leading-relaxed mb-5">
                  Masl Legal was founded with a clear vision: to provide businesses and individuals with legal advice that is genuinely tailored to their needs. We believe that the best legal outcomes come from understanding not just the law, but the people and organisations we serve.
                </p>
                <p className="font-sans text-body text-body-gray leading-relaxed">
                  Based in London with an international outlook, our team combines deep sector expertise with a commitment to innovation and excellence. We are proud to advise clients ranging from ambitious startups to established enterprises across multiple jurisdictions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-off-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-5">
              Our values
            </p>
            <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12] mb-14">
              What drives us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i < 3 ? i + 1 : 0}>
                <div className="bg-white p-8 lg:p-10 border border-light-border card-hover">
                  <h3 className="font-serif font-semibold text-h4 text-dark mb-3">{v.title}</h3>
                  <p className="font-sans text-body text-body-gray leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Masl Legal */}
      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-5">
              Why choose us
            </p>
            <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12] mb-14">
              What sets Masl Legal apart
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                ),
                title: 'Dual Jurisdiction Expertise',
                description: 'With offices in London and Lahore, we provide seamless legal support across the UK and Pakistan — advising on cross-border transactions, regulatory compliance, and international disputes with genuine local insight in both jurisdictions.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: 'Client-First Approach',
                description: 'We invest time understanding your business, industry, and strategic goals before advising on legal structure. Every recommendation is tailored to your specific circumstances — we never offer off-the-shelf solutions.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                  </svg>
                ),
                title: 'Industry Specialists',
                description: 'Our lawyers bring deep sector knowledge across business and commercial, international trade, dispute resolution, and regulatory matters — drawn from careers at Magic Circle and leading City firms.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title: 'Proven Track Record',
                description: 'Trusted by FTSE-listed corporates, high-growth startups, and international enterprises alike. Our 96% client retention rate reflects the quality and consistency of our advice.',
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i < 4 ? i + 1 : 0}>
                <div className="flex gap-5 p-8 lg:p-10 border border-light-border card-hover">
                  <div className="text-navy shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-serif font-semibold text-h4 text-dark mb-3">{feature.title}</h3>
                    <p className="font-sans text-body text-body-gray leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-dark py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/60 mb-5">
                  Our story
                </p>
                <h2 className="font-serif font-normal text-h2 text-white leading-[1.12]">
                  Founded on principle,<br className="hidden md:block" /> driven by purpose.
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-body text-white/75 leading-relaxed mb-5">
                  Masl Legal was established by experienced legal professionals who recognised the need for a different kind of law firm — one that combines the rigour and depth of a large practice with the agility, personal attention, and commercial focus of a specialist firm.
                </p>
                <p className="font-sans text-body text-white/75 leading-relaxed">
                  Our founding team brings decades of combined experience across commercial, corporate, international, and regulatory law. This breadth of expertise, combined with our commitment to understanding each client&apos;s unique circumstances, enables us to deliver advice that is both legally excellent and practically effective.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Global Reach */}
      <section className="bg-navy py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/50 mb-5">
                  Our global reach
                </p>
                <h2 className="font-serif font-normal text-h2 text-white leading-[1.12] mb-6">
                  Cross-border capability,<br className="hidden md:block" /> local precision.
                </h2>
                <p className="font-sans text-body text-white/70 leading-relaxed">
                  With established offices in London and Lahore, Masl Legal provides genuine cross-border legal capability. Our dual-jurisdiction presence enables us to advise on complex multi-jurisdictional transactions, navigate regulatory requirements across markets, and deliver coordinated legal strategies that account for the nuances of each legal system. Whether you are expanding into new markets, managing international supply chains, or resolving cross-border disputes, our global reach ensures you receive locally informed, internationally connected legal advice.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { number: '10', suffix: '+', label: 'Jurisdictions advised' },
                    { number: '25', suffix: '+', label: 'Years combined experience' },
                    { number: '98', suffix: '%', label: 'Client satisfaction rate' },
                    { number: '75', suffix: '+', label: 'Matters completed' },
                  ].map((stat, i) => (
                    <ScrollReveal key={stat.label} delay={i + 1}>
                      <div className="text-center">
                        <p className="font-serif text-h2 text-white leading-none mb-2">
                          <CountUp target={stat.number} suffix={stat.suffix} />
                        </p>
                        <p className="font-sans text-body-sm text-white/60">{stat.label}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-dark py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/60 mb-5">
                  Careers
                </p>
                <h2 className="font-serif font-normal text-h2 text-white leading-[1.12]">
                  Join our team
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-body text-white/70 leading-relaxed mb-5">
                  We are always interested in hearing from talented legal professionals who share our commitment to excellence, innovation, and client service. At Masl Legal, you will find a collaborative, intellectually stimulating environment where your development is a priority.
                </p>
                <p className="font-sans text-body text-white/70 leading-relaxed">
                  If you are interested in exploring opportunities with us, please send your CV and a covering letter to{' '}
                  <a href="mailto:careers@masllegal.com" className="text-white underline underline-offset-2 hover:opacity-70 transition-opacity">
                    careers@masllegal.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
