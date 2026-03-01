import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTABanner from '@/components/CTABanner';
import { newsArticles, getArticleBySlug } from '@/lib/data';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Masl Legal`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const otherArticles = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const paragraphs = article.content.split('\n\n').filter(Boolean);

  return (
    <main id="main-content">
      {/* Article Header */}
      <section className="hero-gradient wave-texture" style={{ minHeight: '32vh' }}>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 h-full flex items-end" style={{ minHeight: '32vh' }}>
          <div className="pb-12 lg:pb-16 pt-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wide-label bg-white/15 text-white px-2.5 py-1 rounded-sm">
                {article.tag}
              </span>
              <span className="font-sans text-body-sm text-white/60">{article.date}</span>
              <span className="font-sans text-body-sm text-white/40">{article.readingTime}</span>
            </div>
            <h1 className="font-serif font-light text-h1 text-white leading-[1.08] max-w-3xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-light-border">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-3">
          <nav aria-label="Breadcrumb" className="font-sans text-body-sm text-body-gray">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-navy transition-colors">News & Insights</Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <section className="bg-white py-18 lg:py-22">
        <div className="max-w-[780px] mx-auto px-8 lg:px-16">
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-body-lg text-dark/85 leading-[1.8]">
                {p}
              </p>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-light-border">
            <Link
              href="/news"
              className="font-sans text-label font-semibold tracking-nav uppercase text-navy hover:opacity-70 transition-opacity"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <section className="bg-off-white py-18 lg:py-22">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <h2 className="font-serif font-normal text-h3 text-dark mb-10">
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/news/${a.slug}`} className="group">
                  <div className="placeholder-image aspect-[16/10] rounded-sm mb-4" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wide-label bg-navy text-white px-2.5 py-1 rounded-sm">
                      {a.tag}
                    </span>
                    <span className="font-sans text-body-sm text-body-gray">{a.date}</span>
                  </div>
                  <h3 className="font-serif text-h4 text-dark group-hover:text-navy transition-colors leading-snug">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </main>
  );
}
