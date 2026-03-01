export default function HeroBanner({ title, subtitle }) {
  return (
    <section className="relative hero-gradient wave-texture corner-bracket overflow-hidden" style={{ minHeight: '38vh' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-[1]" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 h-full flex items-end" style={{ minHeight: '38vh' }}>
        <div className="pb-12 lg:pb-16 pt-28">
          <h1 className="font-serif font-light text-h1 text-white leading-[1.08]">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-body-lg text-white/70 mt-4 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
