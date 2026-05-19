// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Whisper of the House - Game Guides & Walkthroughs",
    template: "%s",
  },
  description:
    "Find game guides, walkthroughs, puzzle solutions, endings, collectibles, hidden secrets, beginner tips, and updates for indie, cozy, adventure, survival, RPG, and strategy games.",
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
        <meta
          name="impact-site-verification"
          content="5b77d168-34a3-4c38-b27b-6db13d6bd8ba"
          {...({ value: "5b77d168-34a3-4c38-b27b-6db13d6bd8ba" } as any)}
        />

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9769427406770321"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {children} 

        <GoogleAnalytics gaId="G-CKPEMMMTCR" />
      </body>
    </html>
  );
}