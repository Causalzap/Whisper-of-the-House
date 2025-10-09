// app/collection/page.tsx
import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import FurnitureClient from './FurnitureClient';

export const metadata: Metadata = {
  title: 'Furniture & Home Collection - Whisper of the House',
  description: 'Explore the most popular furniture, appliances, rugs, and gardening items in Whisper of the House. Discover all the essential items for decorating and enhancing your virtual space.',
  alternates: {
    canonical: 'https://www.whisperofthehouse.com/collection',
  },
  openGraph: {
    title: 'Furniture & Home Collection - Whisper of the House',
    description: 'Explore the most popular furniture, appliances, rugs, and gardening items in Whisper of the House.',
    type: 'website',
    url: 'https://www.whisperofthehouse.com/collection',
    images: [
      {
        url: '/images/og-collection.jpg',
        width: 1200,
        height: 630,
        alt: 'Whisper of the House Collection',
      },
    ],
  },
};

export default function CollectionPage() {
  return (
    <Layout>
      <FurnitureClient />
    </Layout>
  );
}