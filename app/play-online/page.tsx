// app/play-online/page.tsx
import { Metadata } from 'next';
import PlayOnlineClient from './PlayOnlineClient';  // Import client-side content

// SEO Metadata for Play Online page
export const metadata: Metadata = {
  title: 'Play Online - Home Design Small House',
  description: 'Play Home Design Small House directly in your browser. Organize rooms, uncover hidden secrets, and enjoy a fun, relaxing design game. No downloads needed!',
  openGraph: {
    title: 'Play Home Design Small House Online | Whisper of the House',
    description: 'Experience the fun of organizing and decorating in Home Design Small House. Play directly online with no downloads required. Organize rooms and uncover hidden secrets!',
    type: 'website',
    url: 'https://whisperofthehouse.com/play-online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play Home Design Small House Online',
    description: 'Enjoy playing Home Design Small House directly in your browser. Organize and design rooms while uncovering hidden secrets. No downloads needed.',
  },
  alternates: {
    canonical: 'https://www.whisperofthehouse.com/play-online', // Add the canonical link here
  },
};

export default function PlayOnlinePage() {
  return (
    <PlayOnlineClient />
  );
}
