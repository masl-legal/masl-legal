import NewsPreview from '@/components/NewsPreview';

export default function HomeNews() {
  return <NewsPreview showHeader={true} limit={3} />;
}
