import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LuckyTowerUltimatePotionRecipesAndPermanentBuffsGuideContent from "@/data/lucky-tower-ultimate/potion-recipes-and-permanent-buffs-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lucky-tower-ultimate/potion-recipes-and-permanent-buffs-guide`;

export const metadata: Metadata = {
    title: "Lucky Tower Ultimate Potions Guide: All Recipes & Permanent Buffs",
    description:
      "Master all potion recipes and fixed colors in Lucky Tower Ultimate. Learn how to craft Antidotes, unlock permanent buffs, and transform monsters back to humans.",
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
          name: "Potion Recipes and Permanent Buffs Guide",
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
        "Lucky Tower Ultimate Potion Recipes and Permanent Buffs Guide",
      description:
        "This Lucky Tower Ultimate potion recipes and permanent buffs guide explains all major potion recipes, what each potion does, fixed potion colors, tag-based cauldron logic, Alva support, how permanent buffs actually trigger, how to trigger permanent Monster form, how broom transformation works, and which potions matter most for achievement routes.",
      image: [
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-potion-recipes-hero.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-strength-potion.webp`,
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
          name: "Potion Recipes",
        },
        {
          "@type": "Thing",
          name: "Permanent Buffs",
        },
        {
          "@type": "Thing",
          name: "Alchemy",
        },
        {
          "@type": "Thing",
          name: "Antidote",
        },
        {
          "@type": "Thing",
          name: "Human Transformation",
        },
        {
          "@type": "Thing",
          name: "Monster Potion",
        },
        {
          "@type": "Thing",
          name: "Alva",
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
          title="Lucky Tower Ultimate Potion Recipes and Permanent Buffs Guide"
          description="Use this Lucky Tower Ultimate potion recipes and permanent buffs guide to learn every major potion recipe, fixed potion colors, Antidote and Human Transformation differences, Alva support, and how permanent Speed, Strength, Monster, and Alcohol effects actually work."
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
              id: "potion-by-use-case",
              label: "Potion by Use Case",
            },
            {
              id: "all-potion-recipes",
              label: "All Potion Recipes",
            },
            {
              id: "what-each-potion-does",
              label: "What Each Potion Does",
            },
            {
              id: "are-potion-colors-fixed",
              label: "Are Potion Colors Fixed Across Runs?",
            },
            {
              id: "alchemy-rules-and-tag-logic",
              label: "Alchemy Rules and Tag Logic",
            },
            {
              id: "stable-potion-sources",
              label: "Stable Potion Sources",
            },
            {
              id: "alva-guide",
              label: "Alva Guide",
            },
            {
              id: "permanent-buffs",
              label: "Permanent Buffs",
            },
            {
              id: "how-to-trigger-permanent-monster",
              label: "How to Trigger Permanent Monster",
            },
            {
              id: "become-a-broom",
              label: "Become a Broom",
            },
            {
              id: "how-to-remove-permanent-buffs",
              label: "How to Remove Permanent Buffs",
            },
            {
              id: "potion-achievement-links",
              label: "Potion × Achievement Links",
            },
            {
              id: "best-potions-to-prioritize",
              label: "Best Potions to Prioritize",
            },
            {
              id: "advanced-potion-tips",
              label: "Advanced Potion Tips",
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
              href: "/lucky-tower-ultimate/100-achievement-guide",
              label: "Lucky Tower Ultimate 100% achievement guide",
            },
            {
              href: "/lucky-tower-ultimate/pipeline-guide",
              label: "Lucky Tower Ultimate pipeline guide",
            },
            {
              href: "/lucky-tower-ultimate/guide-hub",
              label: "Lucky Tower Ultimate guide hub",
            },
          ]}
        >
          <LuckyTowerUltimatePotionRecipesAndPermanentBuffsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}