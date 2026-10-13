import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorContent from "@/data/dreadmoor/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dreadmoor`;

const metadataTitle =
  "DREADMOOR Demo Guide: What to Do Next & How to Finish";

const metadataDescription =
  "Stuck in DREADMOOR? Find what to do at Betsy and Sons, repair the Dry Dock, upgrade your boat, and open The Throat gate to finish the demo.";

const articleDescription =
  "Find your next step in DREADMOOR, from the first fishing contracts and Dry Dock repairs to hull protection, the upgraded engine, and The Throat gate.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "DREADMOOR Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "DREADMOOR Demo Guide: What to Do Next and How to Finish",
      description:
        "Find what to do next in the DREADMOOR demo, including the Trading Post, fishing contracts, Dry Dock repairs, Hull Protection, the Upgraded Engine, and opening The Throat gate.",
      inLanguage: "en",
      dateModified: "2026-10-13",
      about: [
        {
          "@type": "VideoGame",
          name: "DREADMOOR",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR demo progression",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR boat upgrades",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR The Throat",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
    },
  ],
};

const toc = [
  {
    id: "where-to-go-next",
    label: "What to do next",
  },
  {
    id: "trading-post",
    label: "Stuck at Betsy and Sons",
  },
  {
    id: "fishing-stuck",
    label: "Trouble catching fish",
  },
  {
    id: "dry-dock-locked",
    label: "Unlock the Dry Dock",
  },
  {
    id: "boat-repaired",
    label: "Boat repaired but still stuck",
  },
  {
    id: "carburetor",
    label: "Get the Carburetor",
  },
  {
    id: "throat-gate",
    label: "Open The Throat gate",
  },
  {
    id: "what-to-do-first",
    label: "Fishing, repairs, or exploration",
  },
  {
    id: "boat-upgrades",
    label: "Which boat upgrades matter",
  },
  {
    id: "old-saves",
    label: "Old Playtest saves",
  },
  {
    id: "demo-ending",
    label: "Where the demo ends",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor/walkthrough",
    label: "DREADMOOR Walkthrough",
  },
  {
    href: "/dreadmoor/fishing-guide",
    label: "DREADMOOR Fishing Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="DREADMOOR Demo Guide: What to Do Next"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DreadmoorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
