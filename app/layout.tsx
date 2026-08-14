// app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.whisperofthehouse.com"),

  title: {
    default: "Whisper of the House - Game Guides & Walkthroughs",
    template: "%s",
  },

  description:
    "Find game guides, walkthroughs, puzzle solutions, endings, collectibles, hidden secrets, beginner tips, and updates for indie, cozy, adventure, survival, RPG, and strategy games.",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Force insecure ad assets to be blocked */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="block-all-mixed-content"
        />

        {/* Mediavine site verification */}
        <meta
          name="impact-site-verification"
          content="5b77d168-34a3-4c38-b27b-6db13d6bd8ba"
        />

        {/* Mediavine Script Wrapper */}
        <Script
          id="mediavine-script"
          src="//scripts.mediavine.com/tags/ef7c02f6-3b8c-44f1-a81a-4ebf11f77ea5.js"
          strategy="beforeInteractive"
          data-noptimize="1"
          data-cfasync="false"
        />
      </head>

      <body>
        {children}

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-CKPEMMMTCR" />
      </body>
    </html>
  );
}