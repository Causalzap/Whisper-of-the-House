// app/abnormal-points-collection/page.tsx
import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import SecretsAndStoryClient from './SecretsAndStoryClient';

export const metadata: Metadata = {
  title: 'Abnormal Points Collection - Whisper of the House',
  description: 'Discover all 49 abnormal points in Whisper of the House, uncover hidden anomalies, and experience unique interactions across diverse in-game scenes.',
  alternates: {
    canonical: 'https://www.whisperofthehouse.com/abnormal-points-collection',
  },
  openGraph: {
    title: 'Abnormal Points Collection - Whisper of the House',
    description: 'Discover the 49 abnormal points in Whisper of the House. Explore hidden anomalies and special interactions across various in-game scenes.',
    type: 'website',
    url: 'https://whisperofthehouse.com/abnormal-points-collection',
    images: [
      {
        url: '/images/og-abnormal-points.jpg',
        width: 1200,
        height: 630,
        alt: 'Whisper of the House Abnormal Points Collection',
      },
    ],
  },
};

export default function AbnormalPointsPage() {
  return (
    <Layout>
      <SecretsAndStoryClient />
    </Layout>
  );
}