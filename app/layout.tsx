// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Whisper of the House - Fansite",
    template: "%s",
  },
  description:
    "Explore Beginner's Guide, Progression Guide, Top Tips & Tricks, Hidden Secrets Guide , Organize and Discover Secrets and the full story of Whisper of the House",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: {
    canonical: "https://www.whisperofthehouse.com/guides",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9769427406770321"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
