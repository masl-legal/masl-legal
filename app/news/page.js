import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import ScrollReveal from '@/components/ScrollReveal';
import { newsArticles } from '@/lib/data';

export const metadata = {
  title: 'News & Insights',
  description: 'Stay informed with the latest legal news, insights, and analysis from Masl Legal. Expert commentary on UK commercial, corporate, and regulatory developments.',
  openGraph: {
    title: 'News & Insights | Masl Legal',
    description: 'Latest legal news, insights, and analysis from Masl Legal.',
  },
};

export default function NewsPage() {
  return (
    <main id="main-content">
      <HeroBanner title="News & Insights" subtitle="Expert commentary and legal analysis." />

      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i < 3 ? i + 1 : 0}>
                <Link href={`/news/${article.slug}`} className="group block">
                  {article.image ? (
                    <div className="relative aspect-[16/10] rounded-sm overflow-hidden mb-5">
                      <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="placeholder-image aspect-[16/10] rounded-sm mb-5" />
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wide-label bg-navy text-white px-2.5 py-1 rounded-sm">
                      {article.tag}
                    </span>
                    <span className="font-sans text-body-sm text-body-gray">{article.date}</span>
                  </div>
                  <h2 className="font-serif text-h4 text-dark group-hover:text-navy transition-colors leading-snug mb-2">
                    {article.title}
                  </h2>
                  <p className="font-sans text-body-sm text-body-gray leading-relaxed line-clamp-3 mb-3">
                    {article.excerpt}
                  </p>
                  <span className="font-sans text-body-sm text-body-gray">{article.readingTime}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
