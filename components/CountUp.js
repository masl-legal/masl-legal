'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function CountUp({ target, suffix = '', prefix = '', duration = 2000 }) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    const numericTarget = parseFloat(target.toString().replace(/[^0-9.]/g, ''));
    const hasDecimal = target.toString().includes('.');
    const start = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = easedProgress * numericTarget;

      if (hasDecimal) {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(`${prefix}${target}${suffix}`);
      }
    }

    requestAnimationFrame(step);
  }, [target, suffix, prefix, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(`${prefix}${target}${suffix}`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, prefix, animate]);

  return <span ref={ref}>{display}</span>;
}
