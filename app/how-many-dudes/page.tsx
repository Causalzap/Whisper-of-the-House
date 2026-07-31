import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import HowManyDudesGuideHubContent from "@/data/how-many-dudes/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/how-many-dudes`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cyborg-samurai-assassin-franken-general-build.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-time-trigger-void-amethyst-shadowy-funnel.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-five-gold-stars-unlock-tier-2.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes Guide: Builds, Relics & Round 105",
  description:
    "How Many Dudes Tier 1 route built from 3 completed runs — exact Round 20–105 checkpoints, which Relics to skip, and how to survive the G.O.A.T.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Guide: Builds, Relic Pool and Tier 1 Route",
    description:
      "Build five Dude Types with clear jobs, control the Flyer and Relic pools, adapt from Round 1 to Round 105, and open the guide that matches your current failure.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1606,
        height: 948,
        alt: "How Many Dudes roster using Cyborg Samurai Assassin Franken and General Dudes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes Guide: Builds, Relics & Round 105",
    description:
      "Build a reliable five-Type roster, control the Relic pool, clear Round 100 and the G.O.A.T., then move into Tier 2 and achievement cleanup.",
    images: [imageUrls[0]],
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
          name: "How Many Dudes Guide",
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
        "How Many Dudes Guide: Five-Type Builds, Combat Mechanics, Relic Pool and Tier 1 Progression",
      description:
        "This How Many Dudes guide hub explains how to build a functional five-Type roster, assign front-line, healing, sustained-damage, crowd-damage and recovery roles, understand Direct Damage, Taunt, Pact, Block, Evasion, Deflection, Temporary Health and Knocked Out Dudes, and control the Relic pool through Flyers and Dude Families. It also provides a tested Round 1 to Round 105 decision framework and directs players to focused guides for best builds, Round 100, the G.O.A.T. boss, Relic combinations, Tier 2 progression and all 69 achievements.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-31",
      dateModified: "2026-07-31",
      about: [
        {
          "@type": "VideoGame",
          name: "How Many Dudes?",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes guide",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes builds",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Relic pool",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Flyers",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Dude Families",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Round 100",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes G.O.A.T. boss",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Tier 2",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes achievements",
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
          title="How Many Dudes Guide: Build a Team That Reaches Round 105"
          description="Start with five Dude Types that cover the jobs your roster needs, learn what each fight is exposing, and jump to the focused guide for your current Round, Relic, boss or achievement problem."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "start-here",
              label: "Build from the first Flyers",
            },
            {
              id: "five-jobs",
              label: "Five roster jobs",
            },
            {
              id: "core-mechanics",
              label: "Core combat mechanics",
            },
            {
              id: "relic-pool",
              label: "Flyers & Relic Pool",
            },
            {
              id: "round-route",
              label: "Tier 1 round route",
            },
            {
              id: "progression",
              label: "First-clear progression",
            },
            {
              id: "choose-a-guide",
              label: "Choose the right guide",
            },
            {
              id: "final-check",
              label: "Pre-fight check",
            },
          ]}
          relatedLinks={[
            {
              href: "/how-many-dudes/best-builds",
              label: "Best Builds & Five-Type Teams",
            },
            {
              href: "/how-many-dudes/round-100-guide",
              label: "Round 100 Guide",
            },
            {
              href: "/how-many-dudes/goat-boss-guide",
              label: "G.O.A.T. Boss Guide",
            },
            {
              href: "/how-many-dudes/relic-combinations",
              label: "Best Relic Combinations",
            },
            {
              href: "/how-many-dudes/tier-2-progression",
              label: "Tier 2 Progression Guide",
            },
            {
              href: "/how-many-dudes/achievements-guide",
              label: "All 69 Achievements & Checklist",
            },
          ]}
        >
          <HowManyDudesGuideHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="How Many Dudes?"
          heading="Looking for another game after How Many Dudes?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>
      <Footer />
    </>
  );
}