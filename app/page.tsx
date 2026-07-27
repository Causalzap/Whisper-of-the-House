import type { Metadata } from "next";

import Layout from "../components/Layout";
import HomeHero from "@/components/home/HomeHero";
import HomeLatestStories from "@/components/home/HomeLatestStories";
import HomeGuideHubs from "@/components/home/HomeGuideHubs";
import HomeAllGuides from "@/components/home/HomeAllGuides";

const siteName = "Whisper of the House";
const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/`;

const metadataTitle =
  "PC & Indie Game Guides, Walkthroughs & Builds | Whisper of the House";

const metadataDescription =
  "Practical PC and indie game guides for walkthroughs, achievements, builds, collectibles, puzzle solutions, endings, and first-hour routes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: metadataTitle,

  description: metadataDescription,

  applicationName: siteName,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    url: pageUrl,
    siteName,
    title: metadataTitle,
    description: metadataDescription,
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: pageUrl,
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: pageUrl,
      name: siteName,
      description: metadataDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
    },

    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: metadataTitle,
      description: metadataDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: [
        {
          "@type": "Thing",
          name: "PC game guides",
        },
        {
          "@type": "Thing",
          name: "Indie game walkthroughs",
        },
        {
          "@type": "Thing",
          name: "Game achievements and builds",
        },
        {
          "@type": "Thing",
          name: "Puzzle solutions",
        },
      ],
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            homePageJsonLd,
          ).replace(/</g, "\\u003c"),
        }}
      />

      <main
        id="main-content"
        className="bg-slate-950 text-white"
      >
        <HomeHero />

        <HomeLatestStories />

        <HomeGuideHubs />

        <HomeAllGuides />
      </main>
    </Layout>
  );
}