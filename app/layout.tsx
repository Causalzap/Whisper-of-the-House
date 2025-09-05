// app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Whisper of the House - Fansite',
    template: '%s | Whisper of the House',
  },
  description:
    'Explore guides, secrets, furniture lists, and the full story of Whisper of the House',

    icons: {
      icon: [
        { url: '/favicon.ico', type: 'image/x-icon' },
        // 可选：再补充 png 版本，兼容性更好
        // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
