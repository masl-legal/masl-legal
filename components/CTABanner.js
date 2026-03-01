import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative hero-gradient wave-texture py-22 lg:py-26 overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
        <h2 className="font-serif font-light text-h2 text-white leading-[1.12] mb-8">
          Innovative solutions from<br className="hidden md:block" /> real world experts.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-navy font-sans text-label font-semibold tracking-nav uppercase px-8 py-3.5 hover:bg-white/90 transition-colors"
        >
          Get in touch ↗
        </Link>
      </div>
    </section>
  );
}
