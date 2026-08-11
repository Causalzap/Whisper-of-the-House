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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="impact-site-verification"
          content="5b77d168-34a3-4c38-b27b-6db13d6bd8ba"
          {...({
            value: "5b77d168-34a3-4c38-b27b-6db13d6bd8ba",
          } as any)}
        />

        <Script
          id="mediavine-script"
          src="//scripts.mediavine.com/tags/ef7c02f6-3b8c-44f1-a81a-4ebf11f77ea5.js"
          strategy="beforeInteractive"
          data-noptimize="1"
          data-cfasync="false"
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

