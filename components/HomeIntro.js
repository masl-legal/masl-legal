import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomeIntro() {
  return (
    <section className="bg-white py-22 lg:py-26">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12] mb-12">
            People-powered legal solutions.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px]">
          <ScrollReveal delay={1}>
            <p className="font-sans text-body-lg text-dark font-medium leading-relaxed">
              Masl Legal simplifies complexity with strategic expertise, tailored solutions and a commitment to outcomes that matter. Our lawyers are commercially minded, innovative and highly experienced — focused on delivering practical legal strategies that align with your business objectives.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="space-y-5">
              <p className="font-sans text-body text-body-gray leading-relaxed">
                We offer clients the advantage of deep local insight backed by an international perspective. Our agile, technology-driven approach ensures efficiency, precision and a forward-thinking legal partnership.
              </p>
              <p className="font-sans text-body text-body-gray leading-relaxed">
                Our investment in advanced AI and legal technology enables our teams to work smarter and more efficiently, giving us more time to focus on what matters most: your business and individual goals.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={3}>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 font-sans text-label font-semibold tracking-nav uppercase text-navy hover:opacity-70 transition-opacity mt-10"
          >
            Discover the difference ↗
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
