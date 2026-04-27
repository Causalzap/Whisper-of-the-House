import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LuckyTowerUltimate100AchievementGuideContent from "@/data/lucky-tower-ultimate/100-achievement-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lucky-tower-ultimate/100-achievement-guide`;

export const metadata: Metadata = {
    title: "Lucky Tower Ultimate 100% Achievement Guide & Roadmap",
    description:
      "Plan your 100% achievement roadmap for Lucky Tower Ultimate. Get practical routes for village upgrades, the true endgame, and hard challenges like No touching!",
    alternates: {
      canonical: pageUrl,
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
          name: "Lucky Tower Ultimate",
          item: `${siteUrl}/lucky-tower-ultimate`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "100% Achievement Guide",
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
      headline: "Lucky Tower Ultimate 100% Achievement Guide",
      description:
        "This Lucky Tower Ultimate 100% achievement guide explains the best order to clear the game's achievement list, which achievements unlock naturally, which ones need dedicated runs, how to handle companion, potion, pipeline, and endgame achievements, and how to approach late-game unlocks like No touching!, Speedrunner-er, and The chosen one.",
      image: [
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-100-achievement-guide-hero.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-citizenship-achievement.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-turn-into-monster-achievement.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Lucky Tower Ultimate",
        },
        {
          "@type": "Thing",
          name: "Achievements",
        },
        {
          "@type": "Thing",
          name: "100% Completion",
        },
        {
          "@type": "Thing",
          name: "Citizenship",
        },
        {
          "@type": "Thing",
          name: "Companions",
        },
        {
          "@type": "Thing",
          name: "Potions",
        },
        {
          "@type": "Thing",
          name: "Pipeline System",
        },
        {
          "@type": "Thing",
          name: "Evelius",
        },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Lucky Tower Ultimate 100% Achievement Guide"
          description="Use this Lucky Tower Ultimate 100% achievement guide to plan the fastest route through escape, village, companion, potion, pipeline, and endgame achievements, with practical advice for No touching!, Speedrunner-er, The chosen one, and other high-difficulty unlocks."
          gameTitle="Lucky Tower Ultimate"
          gameHref="/lucky-tower-ultimate"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 21, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick Answer",
            },
            {
              id: "total-achievements",
              label: "Total Achievements",
            },
            {
              id: "how-long-100-percent-usually-takes",
              label: "How Long 100% Usually Takes",
            },
            {
              id: "achievements-that-often-unlock-naturally",
              label: "Achievements That Often Unlock Naturally",
            },
            {
              id: "achievements-that-need-active-attention",
              label: "Achievements That Need Active Attention",
            },
            {
              id: "hardest-achievements-by-public-rarity",
              label: "Hardest Achievements by Public Rarity",
            },
            {
              id: "best-roadmap",
              label: "Best Roadmap",
            },
            {
              id: "escape-and-speed-achievements",
              label: "Escape and Speed Achievements",
            },
            {
              id: "challenge-escape-achievements",
              label: "Challenge Escape Achievements",
            },
            {
              id: "village-and-citizenship-achievements",
              label: "Village and Citizenship Achievements",
            },
            {
              id: "companion-achievements",
              label: "Companion Achievements",
            },
            {
              id: "potion-and-transformation-achievements",
              label: "Potion and Transformation Achievements",
            },
            {
              id: "pipeline-and-economy-achievements",
              label: "Pipeline and Economy Achievements",
            },
            {
              id: "exploration-puzzle-and-combat-achievements",
              label: "Exploration, Puzzle, and Combat Achievements",
            },
            {
              id: "bard-and-update-achievements",
              label: "Bard and Update Achievements",
            },
            {
              id: "evelius-and-endgame-achievements",
              label: "Evelius and Endgame Achievements",
            },
            {
              id: "best-overlap-runs",
              label: "Best Overlap Runs",
            },
            {
              id: "full-achievement-checklist",
              label: "Full Achievement Checklist",
            },
            {
              id: "faq",
              label: "FAQ",
            },
            {
              id: "final-verdict",
              label: "Final Verdict",
            },
          ]}
          relatedLinks={[
            {
              href: "/lucky-tower-ultimate/companions-guide",
              label: "Lucky Tower Ultimate companions guide",
            },
            {
              href: "/lucky-tower-ultimate/potion-recipes-and-permanent-buffs-guide",
              label: "Lucky Tower Ultimate potion recipes and permanent buffs guide",
            },
            {
              href: "/lucky-tower-ultimate/pipeline-guide",
              label: "Lucky Tower Ultimate pipeline guide",
            },
            {
              href: "/lucky-tower-ultimate",
              label: "Lucky Tower Ultimate guide hub",
            },
          ]}
        >
          <LuckyTowerUltimate100AchievementGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}