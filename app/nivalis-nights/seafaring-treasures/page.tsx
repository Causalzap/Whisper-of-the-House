
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SeafaringTreasuresContent from "@/data/nivalis-nights/seafaring-treasures.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/seafaring-treasures`;

const metadataTitle =
  "Nivalis Nights Seafaring Treasures: All 3 Locations";

const metadataDescription =
  "Find all 3 Seafaring treasures in Nivalis Nights: the Android Head near the Oil Rig, body at Calypso Island, and CPU beyond the Sewers.";

const articleDescription =
  "Find all three of Salt Pete's Seafaring treasures, including the Old Android Head near the Oil Rig, Android Body at Calypso Island, and Old Android CPU beyond the Sewers. Follow the required conversations, locate the correct fishing signals, and complete the captain's story.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/seafaring-android-head.webp`,
  `${siteUrl}/images/nivalis-nights/seafaring-sewers-water-exit.webp`,
  `${siteUrl}/images/nivalis-nights/seafaring-third-treasure-signal.webp`,
  `${siteUrl}/images/nivalis-nights/seafaring-android-chip.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/seafaring-android-head.webp`;

const toc = [
  {
    id: "start-seafaring",
    label: "How to Start Seafaring",
  },
  {
    id: "first-treasure-oil-rig",
    label: "First Treasure: Old Android Head",
  },
  {
    id: "second-treasure-calypso",
    label: "Second Treasure: Android Body",
  },
  {
    id: "caleb-foamheart",
    label: "Where to Find Caleb Foamheart",
  },
  {
    id: "third-treasure-sewers",
    label: "Third Treasure: Old Android CPU",
  },
  {
    id: "sewers-water-exit",
    label: "Which Sewers Exit to Use",
  },
  {
    id: "sewers-overlapping-signals",
    label: "How to Find the Correct Fishing Signal",
  },
  {
    id: "complete-the-captain",
    label: "How to Complete Seafaring",
  },
  {
    id: "seafaring-treasure-not-working",
    label: "Treasure Not Appearing or Quest Stuck",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/fishing-guide",
    label: "Nivalis Nights Fishing & Boat Guide",
  },
  {
    href: "/nivalis-nights/achievements",
    label: "Nivalis Nights Achievements & Checklist",
  },
  {
    href: "/nivalis-nights",
    label: "Nivalis Nights Walkthrough & Guides",
  },
];

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
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Nivalis Nights Old Android Head recovered during Salt Pete's Seafaring treasure quest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Nivalis Nights",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Seafaring Treasures",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-10-08",
      dateModified: "2026-10-08",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function NivalisNightsSeafaringTreasuresPage() {
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
          title="Nivalis Nights Seafaring Treasures: All 3 Locations"
          description="Find Salt Pete's three treasures at the Oil Rig, Calypso Island, and Sewers, with the correct fishing locations, required NPC conversations, and final quest steps."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SeafaringTreasuresContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
