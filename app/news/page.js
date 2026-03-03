'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import ScrollReveal from '@/components/ScrollReveal';
import { newsArticles } from '@/lib/data';

const ARTICLES_PER_PAGE = 6;

export default function NewsPage() {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const visibleArticles = newsArticles.slice(0, visibleCount);
  const hasMore = visibleCount < newsArticles.length;

  return (
    <main id="main-content">
      <HeroBanner title="News & Insights" subtitle="Expert commentary and legal analysis." />

      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i < 3 ? i + 1 : 0}>
                <Link href={`/news/${article.slug}`} className="group block">
                  {article.image ? (
                    <div className="relative aspect-[16/10] rounded-sm overflow-hidden mb-5">
                      <picture>
                        {!article.image.endsWith('.avif') && (
                          <source srcSet={article.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
                        )}
                        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      </picture>
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

          {hasMore && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setVisibleCount((c) => c + ARTICLES_PER_PAGE)}
                className="font-sans text-label font-semibold tracking-nav uppercase text-white bg-navy px-10 py-4 hover:bg-navy/90 transition-colors"
              >
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
