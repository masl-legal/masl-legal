import HeroBanner from '@/components/HeroBanner';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import ScrollReveal from '@/components/ScrollReveal';
import MapEmbed from '@/components/MapEmbed';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Masl Legal. Our teams in Lahore and London are ready to discuss your legal needs and provide tailored advice.',
  openGraph: {
    title: 'Contact | Masl Legal',
    description: 'Get in touch with Masl Legal. Our teams in Lahore and London are ready to discuss your legal needs.',
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <HeroBanner title="Contact us" subtitle="We are here to help." />

      {/* Intro */}
      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="font-serif font-normal text-h2 text-dark leading-[1.12]">
                  Let&apos;s start a<br className="hidden md:block" /> conversation.
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-body text-body-gray leading-relaxed">
                  Whether you have a specific legal question or would like to discuss how we can support your business, our team is ready to help. Contact us using the form below, by email, or by telephone.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location & Map */}
      <section className="bg-off-white py-18 lg:py-22">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-4">
                  Pakistan Office
                </p>
                <p className="font-sans text-body text-dark leading-relaxed">
                  Masl Legal<br />
                  9th Floor, Tricon Corporate Centre<br />
                  73 Jail Road, Gulberg<br />
                  Lahore, 54000<br />
                  Pakistan
                </p>
              </div>
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-4">
                  UK Office
                </p>
                <p className="font-sans text-body text-dark leading-relaxed">
                  Masl Legal<br />
                  71-75 Shelton Street<br />
                  Covent Garden<br />
                  London WC2H 9JQ<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-4">
                  Email
                </p>
                <a href="mailto:contact@masllegal.com" className="font-sans text-body text-navy hover:opacity-70 transition-opacity">
                  contact@masllegal.com
                </a>
              </div>
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-4">
                  Telephone
                </p>
                <a href="tel:+447304274816" className="font-sans text-body text-navy hover:opacity-70 transition-opacity">
                  +44 7304 274816
                </a>
              </div>
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-4">
                  Office Hours
                </p>
                <p className="font-sans text-body text-dark leading-relaxed">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* London Office Map */}
          <MapEmbed
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8876737!2d-0.1249!3d51.5154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab1e4f33%3A0x37e0514c3f1d47d3!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2s!4v1"
            title="MASL Legal London Office Location"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-22 lg:py-26">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
              <div>
                <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-5">
                  Get in touch
                </p>
                <h2 className="font-serif font-normal text-h3 text-dark leading-[1.15]">
                  Send us a message
                </h2>
                <p className="font-sans text-body text-body-gray leading-relaxed mt-4">
                  Please complete the form and we will respond within one business day.
                </p>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialsSection />
    </main>
  );
}
