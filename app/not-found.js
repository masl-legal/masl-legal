import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="hero-gradient min-h-[70vh] flex items-center justify-center text-center px-8">
      <div>
        <p className="font-sans text-label-xs font-semibold uppercase tracking-wide-label text-white/40 mb-5">
          404
        </p>
        <h1 className="font-serif font-light text-h1 text-white leading-[1.08] mb-6">
          Page not found
        </h1>
        <p className="font-sans text-body text-white/60 mb-10 max-w-md mx-auto">
          The page you are looking for may have been moved, removed, or does not exist.
        </p>
        <Link
          href="/"
          className="inline-block font-sans text-label font-semibold tracking-nav uppercase px-8 py-3.5 border border-white/60 text-white hover:bg-white hover:text-navy transition-all"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
