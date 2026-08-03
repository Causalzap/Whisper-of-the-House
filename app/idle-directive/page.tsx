import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import IdleDirectiveGuideContent from "@/data/idle-directive/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/idle-directive`;

const publishedDate = "2026-08-03";
const modifiedDate = "2026-08-03";

const imageUrls = [
  `${siteUrl}/images/idle-directive/idle-directive-spire-decrypt-trader-locations.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-trader-transponder-tasks-locked.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-blueprint-lab-replicator-chain.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-terminal-repair-dynamic-time.webp`,
];

export const metadata: Metadata = {
  title: "IDLE_DIRECTIVE Guide: Progression, Prestige and Automation",
  description:
    "Follow the IDLE_DIRECTIVE progression route from Scavenge and Navigation to Spires, Prestige, Traders, Labs, the Replicator, and Terminals.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: "IDLE_DIRECTIVE Progression Guide From First Run to Terminals",
    description:
      "Repair Navigation, reach the first Spire, choose the right Prestige point, unlock Trader Tasks and Blueprints, then begin Terminal progression.",
    publishedTime: `${publishedDate}T00:00:00+08:00`,
    modifiedTime: `${modifiedDate}T00:00:00+08:00`,
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "IDLE_DIRECTIVE repaired Spire revealing Traders, a Terminal and nearby points of interest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDLE_DIRECTIVE Progression Guide",
    description:
      "Go from the opening Scavenge loop to Navigation, Spires, Prestige, Trader Tasks, Blueprints, the Replicator and Terminal repairs.",
    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
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
          name: "IDLE_DIRECTIVE Guide",
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
        "IDLE_DIRECTIVE Progression Guide: From the First Scavenge to Terminal Repairs",
      description:
        "This IDLE_DIRECTIVE progression guide follows the practical route I use from a fresh machine through the first Prestige and early endgame. It explains how I prioritize Energy, Body Space and Inventory Space; repair the Recycler and Navigation Computer; choose between resource POIs and the first Spire; finish Signal Decryption; decide when temporary upgrades are less valuable than System Reset; unlock Trader Tasks; avoid buying a Transponder too early; obtain Lab keys and Blueprints; use the Replicator for a known bottleneck; and begin Terminal progression only after Metal, Machinery and Energy production are stable.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: publishedDate,
      dateModified: modifiedDate,
      about: [
        {
          "@type": "VideoGame",
          name: "IDLE_DIRECTIVE",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE guide",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE progression",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE beginner guide",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE first 15 minutes",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Recycler repair",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Navigation Computer",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Spire",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Signal Decryption",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Prestige",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Traders",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Tasks",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Lab keys",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Blueprints",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Replicator",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Terminal repair",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="The Progression Route I Use From the First Scavenge to Terminals"
          description="Repair only what opens the next system, use Spires to plan each run, and Prestige before temporary expansion becomes the objective."
          gameTitle="IDLE_DIRECTIVE"
          gameHref="/idle-directive"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 3, 2026"
          toc={[
            {
              id: "first-15-minutes",
              label: "First 15 minutes",
            },
            {
              id: "repair-recycler",
              label: "Repair the Recycler",
            },
            {
              id: "repair-navigation",
              label: "Repair Navigation",
            },
            {
              id: "first-destination",
              label: "Choose the first destination",
            },
            {
              id: "repair-first-spire",
              label: "Repair the first Spire",
            },
            {
              id: "when-to-prestige",
              label: "When to Prestige",
            },
            {
              id: "traders-tasks-reputation",
              label: "Traders, Tasks and Reputation",
            },
            {
              id: "blueprints-replicator",
              label: "Blueprints and Replicator",
            },
            {
              id: "terminals",
              label: "Terminal progression",
            },
            {
              id: "common-stalls",
              label: "Common progression stalls",
            },
            {
              id: "which-guide-next",
              label: "Choose the next guide",
            },
            {
              id: "progression-loop",
              label: "Progression loop",
            },
          ]}
          relatedLinks={[
            {
              href: "/idle-directive/first-prestige-best-augments",
              label: "Best Augments & First Prestige",
            },
            {
              href: "/idle-directive/automation-machines-guide",
              label: "Automation & Machines Guide",
            },
            {
              href: "/idle-directive/layout-examples",
              label: "Working Layout Examples",
            },
            {
              href: "/idle-directive/achievements-guide",
              label: "All 43 Achievements",
            },
          ]}
        >
          <IdleDirectiveGuideContent />

          

        </GuideArticlePage>

        <GameDiscoveryCta
            gameTitle="IDLE_DIRECTIVE"
            heading="Looking for another game after IDLE_DIRECTIVE?"
            description="Use the quick recommender to find another automation, incremental, strategy, or systems-heavy game that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
          />
      </main>

      <Footer />
    </>
  );
}