import ExpertisePageTemplate from '@/components/ExpertisePageTemplate';
import { getExpertiseBySlug } from '@/lib/data';

const SLUG = 'arbitration';

const expertise = getExpertiseBySlug(SLUG);

export const metadata = {
  title: expertise.name,
  description: `${expertise.tagline} ${expertise.description}`,
  openGraph: {
    title: `${expertise.name} | Masl Legal`,
    description: `${expertise.tagline} ${expertise.description}`,
  },
};

export default function ExpertisePage() {
  return <ExpertisePageTemplate expertise={expertise} />;
}
