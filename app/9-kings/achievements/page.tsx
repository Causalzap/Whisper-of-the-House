import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NineKingsAchievementsContent from "@/data/9-kings/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/9-kings/achievements`;

const metadataTitle = "9 Kings Achievements: All 99 & 1.0 Checklist";
const metadataDescription = "Track all 99 9 Kings Steam achievements, including 45 new in version 1.0. Check requirements for kings, quests, cards, combat, plots, and special wins.";
const articleTitle = "How Do You Unlock All 99 Achievements in 9 Kings?";
const articleDescription = "Track 99 Steam achievements, identify the 45 added in version 1.0, and check exact requirements for victories, card combinations, troop counts, plots, statuses, and Quest Mode.";

const imageUrls = [
  `${siteUrl}/images/9-kings/9-kings-achievements-1-0-list.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "9 Kings achievement list showing icons and the Crownmaxxing requirement",
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

const toc = [
  { id: "achievement-checklist", label: "All 99 Achievements" },
  { id: "new-in-1-0", label: "45 New in Version 1.0" },
  { id: "wins-and-difficulty", label: "Wins & Difficulty" },
  { id: "kings-and-quests", label: "Kings & Quest Mode" },
  { id: "cards-and-economy", label: "Cards, Gold & Hand" },
  { id: "troops-and-mounts", label: "Troops & Mounts" },
  { id: "plots-and-buildings", label: "Plots & Buildings" },
  { id: "combat-and-effects", label: "Combat & Status Effects" },
  { id: "diplomacy-time-chaos", label: "Diplomacy, Time & Chaos" },
];

const relatedLinks = [
  { href: "/9-kings", label: "Beginner Guide: Year 33 & King Unlocks" },
  { href: "/9-kings/best-builds", label: "King & Joker Builds" },
  { href: "/9-kings/joker-mode", label: "Joker Mode: Custom Deck Setup" },
];

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
          name: "9 Kings",
          item: `${siteUrl}/9-kings`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-13",
      dateModified: "2026-11-13",
      about: [
        { "@type": "VideoGame", name: "9 Kings" },
        { "@type": "Thing", name: "All 99 Steam achievements" },
        { "@type": "Thing", name: "45 achievements added in version 1.0" },
        { "@type": "Thing", name: "Win and difficulty restrictions" },
        { "@type": "Thing", name: "Quest Mode and king progression achievements" },
        { "@type": "Thing", name: "Card, economy, and hand milestones" },
        { "@type": "Thing", name: "Troop counts and mounts" },
        { "@type": "Thing", name: "Plot and building requirements" },
        { "@type": "Thing", name: "Combat effects and status conditions" },
        { "@type": "Thing", name: "Diplomacy and time travel achievements" },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

export default function Page() {
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
          gameTitle="9 Kings"
          gameHref="/9-kings"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NineKingsAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
