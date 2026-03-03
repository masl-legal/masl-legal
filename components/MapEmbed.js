'use client';

import { useEffect, useRef, useState } from 'react';

export default function MapEmbed({ src, title = 'Office Location' }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="rounded-sm overflow-hidden mt-12 aspect-[21/7] relative">
      {!isVisible && (
        <div className="absolute inset-0 map-skeleton flex items-center justify-center">
          <div className="text-center">
            <svg className="w-8 h-8 text-body-gray/40 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="font-sans text-body-sm text-body-gray/50">Loading map...</p>
          </div>
        </div>
      )}
      {isVisible && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      )}
    </div>
  );
}
