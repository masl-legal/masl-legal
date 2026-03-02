import Link from 'next/link';
import { newsArticles } from '@/lib/data';

export default function NewsPreview({ articles = newsArticles, limit = 3, showHeader = true }) {
  const featured = articles[0];
  const stacked = articles.slice(1, limit);

  return (
    <section className="bg-off-white py-22 lg:py-26">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {showHeader && (
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12]">
              News and insights
            </h2>
            <Link
              href="/news"
              className="hidden md:inline-flex font-sans text-body-sm font-semibold tracking-nav uppercase text-navy hover:opacity-70 transition-opacity"
            >
              Discover more ↗
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Featured Article */}
          {featured && (
            <Link href={`/news/${featured.slug}`} className="group">
              {featured.image ? (
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden mb-5">
                  <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="placeholder-image aspect-[16/10] rounded-sm mb-5" />
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-sans text-label-xs font-semibold uppercase tracking-wide-label bg-navy text-white px-2.5 py-1 rounded-sm">
                  {featured.tag}
                </span>
                <span className="font-sans text-body-sm text-body-gray">{featured.date}</span>
              </div>
              <h3 className="font-serif font-semibold text-h4 text-dark group-hover:text-navy transition-colors leading-snug mb-2">
                {featured.title}
              </h3>
              <p className="font-sans text-body-sm text-body-gray leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
            </Link>
          )}

          {/* Stacked Articles */}
          <div className="flex flex-col gap-6">
            {stacked.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group flex gap-5">
                {article.image ? (
                  <div className="relative w-[170px] h-[115px] rounded-sm overflow-hidden shrink-0">
                    <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div className="placeholder-image w-[170px] h-[115px] rounded-sm shrink-0" />
                )}
                <div className="flex flex-col justify-center">
                  <span className="font-sans text-body-sm text-body-gray mb-1.5">{article.date}</span>
                  <h4 className="font-serif text-lg text-dark group-hover:text-navy transition-colors leading-snug mb-1.5">
                    {article.title}
                  </h4>
                  <span className="font-sans text-body-sm font-medium text-navy group-hover:opacity-70 transition-opacity">
                    READ MORE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {showHeader && (
          <Link
            href="/news"
            className="md:hidden inline-flex font-sans text-body-sm font-semibold tracking-nav uppercase text-navy hover:opacity-70 transition-opacity mt-8"
          >
            Discover more ↗
          </Link>
        )}
      </div>
    </section>
  );
}
