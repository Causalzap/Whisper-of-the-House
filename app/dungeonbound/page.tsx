
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DungeonboundContent from "@/data/dungeonbound/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dungeonbound`;

const metadataTitle =
  "Dungeonbound Beginner Guide: How to Start & Build Your Gear";

const metadataDescription =
  "Start Dungeonbound, choose Story or Climb, equip your first items, survive early fights, spend Gold on useful upgrades, and learn when to fuse equipment.";

const articleTitle =
  "Dungeonbound Beginner Guide: What Should You Do First?";

const articleDescription =
  "Choose between The Long Haul and The Climb, start with Joshua, arrange your equipment, survive early encounters, and make better upgrades after a defeat.";

const imageUrls = [
  `${siteUrl}/images/dungeonbound/dungeonbound-story-joshua-forest-start.webp`,
];

const toc = [
  { id: "choose-mode", label: "Which Mode Should You Play?" },
  { id: "first-run", label: "Your First Dungeonbound Run" },
  { id: "equipment-inventory", label: "Equipment vs. Inventory" },
  { id: "combat-basics", label: "How Combat Works" },
  { id: "early-upgrades", label: "Best First Upgrades" },
  { id: "shops-loot", label: "Buying, Selling & Loot" },
  { id: "fusion-basics", label: "Merge vs. Fusion" },
  { id: "story-climb-progress", label: "Death & Act Progression" },
  { id: "heroes-quests", label: "Unlocking Heroes & Quests" },
  { id: "beginner-problems", label: "Common Beginner Problems" },
];

const relatedLinks = [
  {
    href: "/dungeonbound/walkthrough",
    label: "Story Walkthrough: All Five Dungeons",
  },
  {
    href: "/dungeonbound/act-1",
    label: "Climb Act 1: Beat Floor 8",
  },
  {
    href: "/dungeonbound/fusion-guide",
    label: "Fusion, Forge & Equipment Upgrades",
  },
  {
    href: "/dungeonbound/hero-unlocks",
    label: "Hero Unlocks & Quest Requirements",
  },
  {
    href: "/dungeonbound/achievements",
    label: "All 84 Achievements & Checklist",
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

export default function DungeonboundPage() {
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
          <DungeonboundContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
