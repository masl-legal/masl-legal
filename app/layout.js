import { Cormorant_Garamond, Libre_Franklin } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const libre = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-libre',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Masl Legal | London Law Firm',
    template: '%s | Masl Legal',
  },
  description: 'Masl Legal is an independent London-based law firm delivering tailored legal advice across commercial, corporate, international trade, dispute resolution and regulatory matters.',
  keywords: ['law firm', 'London solicitors', 'commercial law', 'corporate law', 'international trade', 'dispute resolution', 'Masl Legal'],
  authors: [{ name: 'Masl Legal' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://masllegal.com',
    siteName: 'Masl Legal',
    title: 'Masl Legal | London Law Firm',
    description: 'Independent London-based law firm delivering tailored legal advice across commercial, corporate, international trade, dispute resolution and regulatory matters.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masl Legal | London Law Firm',
    description: 'Independent London-based law firm delivering tailored legal advice across commercial, corporate, international trade, dispute resolution and regulatory matters.',
  },
  metadataBase: new URL('https://masllegal.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://masllegal.com/#organization',
      name: 'Masl Legal',
      url: 'https://masllegal.com',
      email: 'contact@masllegal.com',
      telephone: '+447304274816',
      description: 'Independent law firm with offices in Lahore and London delivering tailored legal advice across commercial, corporate, international trade, dispute resolution and regulatory matters.',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '9th Floor, Tricon Corporate Centre, 73 Jail Road, Gulberg',
          addressLocality: 'Lahore',
          postalCode: '54000',
          addressCountry: 'PK',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '71-75 Shelton Street, Covent Garden',
          addressLocality: 'London',
          postalCode: 'WC2H 9JQ',
          addressCountry: 'GB',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/masl-legal-consultancy/?viewAsMember=true',
        'https://x.com/masllegal',
      ],
    },
    {
      '@type': 'LegalService',
      '@id': 'https://masllegal.com/#legalservice',
      name: 'Masl Legal',
      url: 'https://masllegal.com',
      priceRange: '$$',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '9th Floor, Tricon Corporate Centre, 73 Jail Road, Gulberg',
          addressLocality: 'Lahore',
          postalCode: '54000',
          addressCountry: 'PK',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '71-75 Shelton Street, Covent Garden',
          addressLocality: 'London',
          postalCode: 'WC2H 9JQ',
          addressCountry: 'GB',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Pakistan' },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${libre.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {/* TODO: Add cookie consent banner component */}
        {/* TODO: Add Google Analytics / Tag Manager script */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
