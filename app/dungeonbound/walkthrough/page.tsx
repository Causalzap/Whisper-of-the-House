
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DungeonboundWalkthroughContent from "@/data/dungeonbound/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dungeonbound`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Dungeonbound Story Walkthrough: All 5 Dungeons & The King";

const metadataDescription =
  "Clear all five Dungeonbound Story dungeons with Joshua, from The Forest and Hydra through The Castle, Crypt, Demon Realm, Dragon, and final King fight.";

const articleTitle =
  "Dungeonbound Story Walkthrough: How Do You Beat All Five Dungeons?";

const articleDescription =
  "Build Joshua through The Forest, The Castle, The Crypt, The Demon Realm, and The Dungeon, defeat the major bosses, and claim the final Story rewards.";

const imageUrls = [
  `${siteUrl}/images/dungeonbound/dungeonbound-story-joshua-forest-start.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-forest-hydra-boss-poison.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-story-castle-entry.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-story-crypt-entry.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-story-king-final-boss.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-story-king-ally-unlock.webp`,
];

const toc = [
  { id: "story-order", label: "Story Mode: Dungeon Order" },
  { id: "story-first-steps", label: "Start Joshua's Story" },
  { id: "forest", label: "The Forest & Hydra Boss" },
  { id: "castle", label: "The Castle Walkthrough" },
  { id: "crypt", label: "The Crypt Walkthrough" },
  { id: "demon-realm", label: "The Demon Realm & Dragon" },
  { id: "final-dungeon", label: "The Dungeon: Final Area" },
  { id: "the-king", label: "How to Beat The King" },
  { id: "story-completion", label: "Ending, Quests & King Ally" },
];

const relatedLinks = [
  {
    href: "/dungeonbound",
    label: "Beginner Guide: First Run & Equipment",
  },
  {
    href: "/dungeonbound/fusion-guide",
    label: "Fusion Guide: Upgrade Your Equipment",
  },
  {
    href: "/dungeonbound/hero-unlocks",
    label: "Story Classes & Hero Unlocks",
  },
  {
    href: "/dungeonbound/achievements",
    label: "Story & Boss Achievements",
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: imageUrls[0],
        width: 1972,
        height: 1086,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          name: "Dungeonbound",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Story Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-18",
      image: imageUrls,
    },
  ],
};

export default function DungeonboundWalkthroughPage() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Dungeonbound"
          gameHref="/dungeonbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DungeonboundWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
