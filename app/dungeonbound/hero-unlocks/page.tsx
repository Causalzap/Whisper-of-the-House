
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DungeonboundHeroUnlocksContent from "@/data/dungeonbound/hero-unlocks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dungeonbound`;
const pageUrl = `${hubUrl}/hero-unlocks`;

const metadataTitle =
  "Dungeonbound Hero Unlocks: Climb Quests & Story Classes";

const metadataDescription =
  "Unlock Dungeonbound heroes through Climb Quests, Act bosses, character prerequisites, and Story upgrades. Find requirements for Paladin, Snuffy, and more.";

const articleTitle =
  "Dungeonbound Hero Unlocks: How Do You Unlock More Heroes?";

const articleDescription =
  "Find Climb hero unlock requirements, claim completed Quests, unlock Story classes through character upgrades, and fix characters that remain locked.";

const imageUrls = [
  `${siteUrl}/images/dungeonbound/dungeonbound-snuffy-paladin-quest-claim.webp`,
  `${siteUrl}/images/dungeonbound/dungeonbound-hero-quest-unlocks-menu.webp`,
];

const toc = [
  { id: "how-to-unlock", label: "How to Unlock Heroes" },
  { id: "starting-heroes", label: "Starting Heroes" },
  { id: "cumulative-hero-quests", label: "Combat & Shop Unlocks" },
  { id: "act-hero-unlocks", label: "Act & Boss Unlocks" },
  { id: "special-hero-unlocks", label: "Hero Prerequisites" },
  { id: "story-hero-unlocks", label: "Story Mode Classes" },
  {
    id: "unlock-quest-vs-achievement",
    label: "Unlocks vs. Hero Victories",
  },
  { id: "unlock-problems", label: "Unlock Troubleshooting" },
];

const relatedLinks = [
  {
    href: "/dungeonbound",
    label: "Beginner Guide: Game Modes & First Steps",
  },
  {
    href: "/dungeonbound/act-1",
    label: "Climb Act 1: Win on Floor 8",
  },
  {
    href: "/dungeonbound/walkthrough",
    label: "Story Walkthrough & Character Progression",
  },
  {
    href: "/dungeonbound/achievements",
    label: "Hero Victory Achievements & Checklist",
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
        width: 974,
        height: 968,
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
          name: "Hero Unlocks",
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

export default function DungeonboundHeroUnlocksPage() {
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
          <DungeonboundHeroUnlocksContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
