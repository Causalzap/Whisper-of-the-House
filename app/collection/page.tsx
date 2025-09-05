// app/collection/page.tsx
import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import FurnitureClient from './FurnitureClient';

export const metadata: Metadata = {
  title: 'Furniture & Home Collection',
  description:
    'Explore the most popular furniture, appliances, rugs, and gardening items in Whisper of the House. Discover all the essential items for decorating and enhancing your virtual space.',
  alternates: {
    canonical: 'https://whisperofthehouse.com/collection', // 替换为你的真实域名
  },
  openGraph: {
    title: 'Furniture & Home Collection',
    description:
      'Explore the most popular furniture, appliances, rugs, and gardening items in Whisper of the House.',
    type: 'website',
    url: 'https://whisperofthehouse.com/collection', // 替换为你的真实域名
  },
};

export default function CollectionPage() {
  return (
    <Layout>
      <FurnitureClient />
    </Layout>
  );
}
