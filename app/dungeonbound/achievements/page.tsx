
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DungeonboundAchievementsContent from "@/data/dungeonbound/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dungeonbound`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Dungeonbound Achievements: All 84 & 100% Checklist";

const metadataDescription =
  "Track all 84 Dungeonbound Steam achievements, including hero victories, Story bosses, Climb milestones, Fusion, Co-op challenges, and Death Defier.";

const articleTitle =
  "Dungeonbound Achievements: How Do You Unlock All 84?";

const articleDescription =
  "Track 84 achievements with a completion checklist, compare hero-specific Floor 8 victories, finish combat and Co-op milestones, and identify difficult late-game challenges.";

const toc = [
  {
    id: "achievement-checklist",
    label: "All 84 Achievements Checklist",
  },
  {
    id: "act-boss-achievements",
    label: "Story, Act & Boss Achievements",
  },
  {
    id: "hero-win-achievements",
    label: "Hero-Specific Floor 8 Victories",
  },
  {
    id: "climb-achievements",
    label: "Climb, PvP & Floor Milestones",
  },
  {
    id: "forge-achievements",
    label: "Fusion, Upgrades & Runes",
  },
  {
    id: "shop-achievements",
    label: "Shop, Relic & Item Achievements",
  },
  {
    id: "combat-achievements",
    label: "Combat & Enemy Kills",
  },
  {
    id: "coop-achievements",
    label: "Co-op Achievements",
  },
  {
    id: "death-achievements",
    label: "Death Damage Achievements",
  },
  {
    id: "completion-plan",
    label: "100% Completion Order",
  },
];

const relatedLinks = [
  {
    href: "/dungeonbound",
    label: "Beginner Guide: Modes & Progression",
  },
  {
    href: "/dungeonbound/hero-unlocks",
    label: "Unlock Heroes for Floor 8 Victories",
  },
  {
    href: "/dungeonbound/act-1",
    label: "Climb Act 1: First Floor 8 Clear",
  },
  {
    href: "/dungeonbound/walkthrough",
    label: "Story Walkthrough: All Five Dungeons",
  },
  {
    href: "/dungeonbound/fusion-guide",
    label: "Fusion & Equipment Upgrades",
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
          name: "Achievements",
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
    },
  ],
};

export default function DungeonboundAchievementsPage() {
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
          <DungeonboundAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
