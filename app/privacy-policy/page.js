export const metadata = {
  title: 'Privacy Policy',
  description: 'Masl Legal Privacy Policy. How we collect, use, and protect your personal data in compliance with UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="pt-28 pb-22">
      <div className="max-w-[820px] mx-auto px-8 lg:px-16">
        <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-5">
          Legal
        </p>
        <h1 className="font-serif font-normal text-h1 text-dark leading-[1.1] mb-4">
          Privacy Policy
        </h1>
        <p className="font-sans text-body-sm text-body-gray mb-12">
          Last updated: March 2026 &middot; This document is a draft and should be reviewed by a qualified solicitor before publication.
        </p>

        <div className="space-y-10 legal-content">
          <Section title="1. Introduction">
            Masl Legal (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </Section>

          <Section title="2. Data Controller">
            Masl Legal is the data controller responsible for your personal data. If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at info@masllegal.com.
          </Section>

          <Section title="3. What Data We Collect">
            We may collect the following categories of personal data: your name, email address, telephone number, and postal address; information about your business or organisation; details of your legal enquiry or matter; information you provide through our contact form or email correspondence; technical data such as IP address, browser type, and pages visited when using our website.
          </Section>

          <Section title="4. How We Collect Your Data">
            We collect personal data directly from you when you contact us by telephone, email, or through our website contact form; when you instruct us to act on your behalf; when you subscribe to our newsletter or publications; and through your use of our website via cookies and similar technologies.
          </Section>

          <Section title="5. Legal Basis for Processing">
            We process your personal data on the following legal bases: where it is necessary for the performance of a contract with you; where it is necessary for our legitimate interests, including providing legal services and marketing; where you have given your consent to the processing; and where it is necessary for compliance with a legal obligation.
          </Section>

          <Section title="6. How We Use Your Data">
            We use your personal data to provide legal services and advice; to respond to your enquiries and communicate with you; to send you legal updates and marketing communications (where you have consented); to comply with our legal and regulatory obligations; and to improve our website and services.
          </Section>

          <Section title="7. Data Sharing">
            We do not sell your personal data. We may share your data with third parties where necessary for the provision of legal services, including barristers, expert witnesses, and other professional advisers; where required by law, regulation, or court order; and with our IT service providers and hosting services, who process data on our behalf under appropriate data processing agreements.
          </Section>

          <Section title="8. International Transfers">
            Your personal data is primarily processed within the United Kingdom. Where we transfer data outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.
          </Section>

          <Section title="9. Data Retention">
            We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, regulatory, accounting, or reporting requirements. Specific retention periods depend on the nature of the data and the purpose of processing.
          </Section>

          <Section title="10. Your Rights">
            Under UK GDPR, you have the right to access your personal data; to request rectification of inaccurate data; to request erasure of your data in certain circumstances; to restrict processing of your data; to data portability; to object to processing based on legitimate interests; and to withdraw consent at any time where processing is based on consent.
          </Section>

          <Section title="11. Cookies">
            Our website uses cookies to improve your browsing experience and analyse website usage. You can manage your cookie preferences through your browser settings. For more information about the cookies we use, please contact us.
          </Section>

          <Section title="12. Security">
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </Section>

          <Section title="13. Changes to This Policy">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-serif text-h4 text-dark mb-3">{title}</h2>
      <p className="font-sans text-body text-body-gray leading-relaxed">{children}</p>
    </div>
  );
}
