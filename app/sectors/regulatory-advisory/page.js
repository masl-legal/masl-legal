import SectorPageTemplate from '@/components/SectorPageTemplate';
import { getSectorBySlug } from '@/lib/data';

const SLUG = 'regulatory-advisory';

const sector = getSectorBySlug(SLUG);

export const metadata = {
  title: sector.name,
  description: `${sector.tagline} Masl Legal provides expert legal services across ${sector.name.toLowerCase()}.`,
  openGraph: {
    title: `${sector.name} | Masl Legal`,
    description: `${sector.tagline} Masl Legal provides expert legal services across ${sector.name.toLowerCase()}.`,
  },
};

export default function SectorPage() {
  return <SectorPageTemplate sector={sector} />;
}
