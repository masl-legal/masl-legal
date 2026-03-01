export const metadata = {
  title: 'Legal Disclaimer',
  description: 'Masl Legal Disclaimer. Important legal notices regarding the use of this website and the information contained within.',
};

export default function LegalDisclaimerPage() {
  return (
    <main id="main-content" className="pt-28 pb-22">
      <div className="max-w-[820px] mx-auto px-8 lg:px-16">
        <p className="font-sans text-label-xs font-semibold uppercase tracking-label text-body-gray/60 mb-5">
          Legal
        </p>
        <h1 className="font-serif font-normal text-h1 text-dark leading-[1.1] mb-4">
          Legal Disclaimer
        </h1>
        <p className="font-sans text-body-sm text-body-gray mb-12">
          Last updated: March 2026 &middot; This document is a draft and should be reviewed by a qualified solicitor before publication.
        </p>

        <div className="space-y-10">
          <Section title="1. General Information">
            The information provided on this website is for general informational purposes only. It does not constitute legal advice and should not be relied upon as such. No solicitor-client relationship is created by accessing or using this website or by communicating with Masl Legal through this website.
          </Section>

          <Section title="2. No Legal Advice">
            Nothing on this website should be construed as legal advice. The content is intended to provide general information about legal topics and Masl Legal&apos;s services. For specific legal advice relating to your particular circumstances, you should consult a qualified legal professional.
          </Section>

          <Section title="3. Jurisdiction">
            Masl Legal is based in London, England. The information on this website relates primarily to the laws of England and Wales. We do not represent that the content of this website is appropriate or available for use in other jurisdictions. Those who access this website from other jurisdictions do so at their own initiative and are responsible for compliance with applicable local laws.
          </Section>

          <Section title="4. Accuracy of Information">
            While we endeavour to ensure that the information on this website is accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website. The law is subject to change, and information may become outdated.
          </Section>

          <Section title="5. Limitation of Liability">
            To the fullest extent permitted by law, Masl Legal excludes all liability for any loss or damage, whether direct, indirect, or consequential, arising from or in connection with the use of this website or reliance on any information provided on it.
          </Section>

          <Section title="6. External Links">
            This website may contain links to external websites that are not provided or maintained by Masl Legal. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites and are not responsible for their content or privacy practices.
          </Section>

          <Section title="7. Intellectual Property">
            All content on this website, including text, graphics, logos, and images, is the property of Masl Legal or its content suppliers and is protected by United Kingdom and international copyright, trade mark, and other intellectual property laws. You may not reproduce, distribute, or otherwise use any content from this website without our prior written consent.
          </Section>

          <Section title="8. Professional Regulation">
            Masl Legal is authorised and regulated by the Solicitors Regulation Authority. Details of our regulatory status and the professional rules to which we are subject can be found at the SRA website.
          </Section>

          <Section title="9. Governing Law">
            This disclaimer and your use of this website are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </Section>

          <Section title="10. Contact">
            If you have any questions about this Legal Disclaimer, please contact us at info@masllegal.com.
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
