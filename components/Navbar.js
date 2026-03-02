'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sectors, expertiseAreas } from '@/lib/data';

const expertiseBySector = sectors.map((sector) => ({
  ...sector,
  items: expertiseAreas.filter((e) => e.sector === sector.slug),
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  const handleClickOutside = useCallback((e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setActiveDropdown(null);
      });
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown, handleClickOutside]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isLight = scrolled || activeDropdown || mobileOpen;
  const isLegalPage = pathname === '/privacy-policy' || pathname === '/legal-disclaimer' || pathname === '/privacy-policy/' || pathname === '/legal-disclaimer/';
  const forceLightNav = isLegalPage;

  const textClass = (isLight || forceLightNav) ? 'text-dark' : 'text-white';
  const logoColor = (isLight || forceLightNav) ? '#0f224f' : '#ffffff';
  const iconColor = (isLight || forceLightNav) ? '#0b0b0b' : '#ffffff';

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const isActive = (href) => pathname === href || pathname === href + '/';

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
          (isLight || forceLightNav)
            ? 'bg-white/[0.98] border-b border-light-border backdrop-blur-md'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Masl Legal — Home">
            <img
              src="/Logo/masl-legal-logo.png"
              alt="MASL Legal"
              className={`h-8 w-auto transition-all ${(isLight || forceLightNav) ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => toggleDropdown('sectors')}
              className={`font-sans text-label font-medium tracking-nav uppercase transition-all hover:opacity-70 flex items-center gap-1 pb-1 border-b-[1.5px] ${
                activeDropdown === 'sectors' ? `${textClass} border-current` : `${textClass} border-transparent`
              }`}
              aria-expanded={activeDropdown === 'sectors'}
              aria-haspopup="true"
            >
              Sectors
              <svg className="w-2.5 h-2.5 mt-0.5" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => toggleDropdown('expertise')}
              className={`font-sans text-label font-medium tracking-nav uppercase transition-all hover:opacity-70 flex items-center gap-1 pb-1 border-b-[1.5px] ${
                activeDropdown === 'expertise' ? `${textClass} border-current` : `${textClass} border-transparent`
              }`}
              aria-expanded={activeDropdown === 'expertise'}
              aria-haspopup="true"
            >
              Expertise
              <svg className="w-2.5 h-2.5 mt-0.5" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <Link
              href="/about"
              className={`font-sans text-label font-medium tracking-nav uppercase transition-all hover:opacity-70 pb-1 border-b-[1.5px] ${
                isActive('/about') ? `${textClass} border-current` : `${textClass} border-transparent`
              }`}
            >
              About
            </Link>

            <Link
              href="/news"
              className={`font-sans text-label font-medium tracking-nav uppercase transition-all hover:opacity-70 pb-1 border-b-[1.5px] ${
                isActive('/news') ? `${textClass} border-current` : `${textClass} border-transparent`
              }`}
            >
              News & Insights
            </Link>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/contact"
              className={`font-sans text-label font-medium tracking-nav uppercase transition-opacity hover:opacity-70 ${textClass}`}
            >
              Contact
            </Link>
            <div className={`w-px h-4 ${(isLight || forceLightNav) ? 'bg-light-border' : 'bg-white/20'}`} />
            <div className="flex items-center gap-3">
              <a href="tel:+447304274816" aria-label="Phone" className={`transition-opacity hover:opacity-70 ${textClass}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              <a href="mailto:contact@masllegal.com" aria-label="Email" className={`transition-opacity hover:opacity-70 ${textClass}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/masl-legal-consultancy/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`transition-opacity hover:opacity-70 ${textClass}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${textClass}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Sectors Dropdown — Desktop */}
        {activeDropdown === 'sectors' && (
          <div className="hidden lg:block absolute top-16 left-0 right-0 bg-navy animate-slide-down" role="menu">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-12 relative">
              <button
                onClick={() => setActiveDropdown(null)}
                className="absolute top-6 right-8 lg:right-16 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close dropdown"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="flex flex-col gap-4">
                {sectors.map((sector) => (
                  <Link
                    key={sector.slug}
                    href={sector.href}
                    className="font-serif text-h4 text-white hover:opacity-70 transition-opacity"
                    role="menuitem"
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expertise Dropdown — Desktop */}
        {activeDropdown === 'expertise' && (
          <div className="hidden lg:block absolute top-16 left-0 right-0 bg-navy animate-slide-down" role="menu">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-12 relative">
              <button
                onClick={() => setActiveDropdown(null)}
                className="absolute top-6 right-8 lg:right-16 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close dropdown"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="grid grid-cols-4 gap-10">
                {expertiseBySector.map((group) => (
                  <div key={group.slug}>
                    <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/60 mb-4">
                      {group.name}
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {group.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={item.href}
                          className="font-serif text-lg text-white/85 hover:text-white transition-colors"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Dropdown Backdrop — Desktop */}
      {activeDropdown && (
        <div
          className="hidden lg:block fixed inset-0 bg-black/40 z-40"
          style={{ top: '64px' }}
          onClick={() => setActiveDropdown(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-navy overflow-y-auto" style={{ top: '64px' }}>
          <div className="px-8 py-8 flex flex-col gap-2">
            {/* Sectors Accordion */}
            <button
              onClick={() => setMobileAccordion(mobileAccordion === 'sectors' ? null : 'sectors')}
              className="flex items-center justify-between w-full py-3 border-b border-white/10"
            >
              <span className="font-sans text-label font-medium tracking-nav uppercase text-white">Sectors</span>
              <svg
                className={`w-3 h-3 text-white/60 transition-transform ${mobileAccordion === 'sectors' ? 'rotate-180' : ''}`}
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileAccordion === 'sectors' && (
              <div className="pl-4 pb-2 flex flex-col gap-2">
                {sectors.map((s) => (
                  <Link key={s.slug} href={s.href} className="font-serif text-lg text-white/80 hover:text-white py-1">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Expertise Accordion */}
            <button
              onClick={() => setMobileAccordion(mobileAccordion === 'expertise' ? null : 'expertise')}
              className="flex items-center justify-between w-full py-3 border-b border-white/10"
            >
              <span className="font-sans text-label font-medium tracking-nav uppercase text-white">Expertise</span>
              <svg
                className={`w-3 h-3 text-white/60 transition-transform ${mobileAccordion === 'expertise' ? 'rotate-180' : ''}`}
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileAccordion === 'expertise' && (
              <div className="pl-4 pb-2 flex flex-col gap-2">
                {expertiseBySector.map((group) => (
                  <div key={group.slug} className="mb-3">
                    <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-white/60 mb-2">
                      {group.name}
                    </p>
                    {group.items.map((item) => (
                      <Link key={item.slug} href={item.href} className="block font-serif text-base text-white/75 hover:text-white py-1">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link href="/about" className="py-3 border-b border-white/10 font-sans text-label font-medium tracking-nav uppercase text-white">
              About
            </Link>
            <Link href="/news" className="py-3 border-b border-white/10 font-sans text-label font-medium tracking-nav uppercase text-white">
              News & Insights
            </Link>
            <Link href="/contact" className="py-3 border-b border-white/10 font-sans text-label font-medium tracking-nav uppercase text-white">
              Contact
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-6">
              <a href="tel:+447304274816" aria-label="Phone" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              <a href="mailto:contact@masllegal.com" aria-label="Email" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/masl-legal-consultancy/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
