import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NineKingsContent from "@/data/9-kings/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/9-kings`;

const metadataTitle = "9 Kings Beginner Guide (1.0): How to Win Your First Run";
const metadataDescription = "Start 9 Kings 1.0 with a safer opening, learn card rewards and plot placement, survive Year 33, unlock all nine kings, and choose your next game mode.";
const articleTitle = "How Do You Win Your First Run in 9 Kings 1.0?";
const articleDescription = "Start with King of Nothing, protect your Castle, choose useful cards after battles, manage Gold and plots, prepare for Year 33, and unlock more kings and game modes.";

const imageUrls = [
  `${siteUrl}/images/9-kings/9-kings-beginner-battle-loot.webp`,
  `${siteUrl}/images/9-kings/9-kings-beginner-reclamation-blessing.webp`,
  `${siteUrl}/images/9-kings/9-kings-year-33-final-assault.webp`,
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
        alt: "9 Kings gameplay showing the card reward options after a battle",
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
  { id: "first-run", label: "First Steps" },
  { id: "yearly-battles", label: "Years & Battle Rewards" },
  { id: "gold-and-plots", label: "Gold, Rerolls & Plots" },
  { id: "survive-early", label: "Why You Lose Lives" },
  { id: "year-33", label: "Year 33 Final Battle" },
  { id: "king-unlocks", label: "Unlock All Nine Kings" },
  { id: "game-modes", label: "Game Modes" },
  { id: "version-one", label: "What Changed in 1.0" },
];

const relatedLinks = [
  { href: "/9-kings/joker-mode", label: "Joker Mode: Unlock, Deck & Conditions" },
  { href: "/9-kings/best-builds", label: "Best Builds: Kings, Cards & Layouts" },
  { href: "/9-kings/achievements", label: "All 99 Achievements & Checklist" },
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
        { "@type": "Thing", name: "King of Nothing and starting cards" },
        { "@type": "Thing", name: "Castle placement and early battles" },
        { "@type": "Thing", name: "Battle rewards and card choices" },
        { "@type": "Thing", name: "Gold, Merchant, Pit, and plot expansion" },
        { "@type": "Thing", name: "Year 33 final assault and Endless" },
        { "@type": "Thing", name: "Unlock requirements for nine kings" },
        { "@type": "Thing", name: "Quest Mode and Daily Mayhem" },
        { "@type": "Thing", name: "9 Kings version 1.0 features" },
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
          <NineKingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
