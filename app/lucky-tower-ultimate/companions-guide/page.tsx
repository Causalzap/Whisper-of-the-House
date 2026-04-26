import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LuckyTowerUltimateCompanionsGuideContent from "@/data/lucky-tower-ultimate/companions-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lucky-tower-ultimate/companions-guide`;

export const metadata: Metadata = {
    title: "Lucky Tower Ultimate Companions Guide: Loyalty & Endgame",
    description:
      "Unlock all companions in Lucky Tower Ultimate. Master loyalty mechanics for the Princess and Sobu, discover synergies, and reach the true village endgame.",
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
          name: "Companions Guide",
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
      headline: "Lucky Tower Ultimate Companions Guide",
      description:
        "This Lucky Tower Ultimate companions guide explains how Sobu, Princess, Alva, Hubert, Marisha and Louise, and the Bard work, where to find companions, how loyalty and morale function, which companion combos are best, and how companions connect to achievements, village progression, and the true ending path.",
      image: [
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-companions-hero.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-sobu-door-hint.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-princess-feeding.webp`,
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
          name: "Companions",
        },
        {
          "@type": "Thing",
          name: "Sobu",
        },
        {
          "@type": "Thing",
          name: "Princess",
        },
        {
          "@type": "Thing",
          name: "Alva",
        },
        {
          "@type": "Thing",
          name: "Hubert",
        },
        {
          "@type": "Thing",
          name: "Pipefitter",
        },
        {
          "@type": "Thing",
          name: "Bard",
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
          title="Lucky Tower Ultimate Companions Guide"
          description="Use this Lucky Tower Ultimate companions guide to learn how Sobu, Princess, Alva, Hubert, Marisha and Louise, and the Bard work, where to find them, how loyalty and morale work, and how companions connect to village progression, achievements, and the true ending path."
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
              id: "companion-comparison-table",
              label: "Companion Comparison Table",
            },
            {
              id: "how-companions-work",
              label: "How Companions Work",
            },
            {
              id: "where-to-find-companions",
              label: "Where to Find Companions",
            },
            {
              id: "companion-loyalty-system",
              label: "Companion Loyalty System",
            },
            {
              id: "sobu-guide",
              label: "Sobu Guide",
            },
            {
              id: "princess-guide",
              label: "Princess Guide",
            },
            {
              id: "alva-guide",
              label: "Alva Guide",
            },
            {
              id: "hubert-guide",
              label: "Hubert Guide",
            },
            {
              id: "pipefitter-guide",
              label: "Pipefitter Guide",
            },
            {
              id: "bard-guide",
              label: "Bard Guide",
            },
            {
              id: "best-companion-combos",
              label: "Best Companion Combos",
            },
            {
              id: "clone-theory-and-worldbuilding",
              label: "Clone Theory and Worldbuilding",
            },
            {
              id: "village-progression-and-citizenship",
              label: "Village Progression and Citizenship",
            },
            {
              id: "new-player-priority",
              label: "New Player Priority",
            },
            {
              id: "companion-achievements",
              label: "Companion-Related Achievements",
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
              href: "/lucky-tower-ultimate/potion-recipes-and-permanent-buffs-guide",
              label: "Lucky Tower Ultimate potion recipes and permanent buffs guide",
            },
            {
              href: "/lucky-tower-ultimate/pipeline-guide",
              label: "Lucky Tower Ultimate pipeline guide",
            },
            {
              href: "/lucky-tower-ultimate/100-achievement-guide",
              label: "Lucky Tower Ultimate 100% achievement guide",
            },
            {
              href: "/lucky-tower-ultimate/guide-hub",
              label: "Lucky Tower Ultimate guide hub",
            },
          ]}
        >
          <LuckyTowerUltimateCompanionsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}