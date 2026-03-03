import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';
import { leadership } from '@/lib/data';

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
                <div className="bg-white p-8 lg:p-10 border border-light-border">
                  <h3 className="font-serif font-semibold text-h4 text-dark mb-3">{v.title}</h3>
                  <p className="font-sans text-body text-body-gray leading-relaxed">{v.description}</p>
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

      {/* Leadership */}
      <section className="bg-navy py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/60 mb-5">
              Our leadership
            </p>
            <h2 className="font-serif font-normal text-h2 text-white leading-[1.12] mb-14">
              The partners behind Masl Legal
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i + 1}>
                <div className="border border-white/10 p-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <span className="font-serif text-h4 text-white font-semibold">{person.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-h4 text-white mb-1">{person.name}</h3>
                  <p className="font-sans text-body-sm text-white/60 mb-4">{person.role}</p>
                  <p className="font-sans text-body-sm text-white/75 leading-relaxed mb-5">{person.background}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {person.specialisms.map((s) => (
                      <span key={s} className="font-sans text-label-xs text-white/80 bg-white/10 px-2.5 py-1 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                  <blockquote className="font-sans text-body-sm text-white/60 italic leading-relaxed border-l-2 border-white/20 pl-4">
                    &ldquo;{person.quote}&rdquo;
                  </blockquote>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
