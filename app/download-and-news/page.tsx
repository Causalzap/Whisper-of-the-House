// app/download-and-news/page.tsx
import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import DownloadNewsClient from './DownloadNewsClient';

export const metadata: Metadata = {
  title: 'Download & News',
  description:
    'Download Whisper of the House on Steam and explore the latest news, detailed patch notes, and official statements to stay updated on every update.',
  alternates: {
    canonical: 'https://www.whisperofthehouse.com/download-and-news',
  },
  openGraph: {
    title: 'Download & News',
    description:
      'Download Whisper of the House on Steam and read the latest news, patch notes, and official statements.',
    type: 'website',
    url: 'https://www.whisperofthehouse.com/download-and-news',
  },
};

export default function DownloadAndNewsPage() {
  return (
    <Layout>
      <DownloadNewsClient />
    </Layout>
  );
}
