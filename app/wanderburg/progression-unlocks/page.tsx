import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgProgressionUnlocksContent from "@/data/wanderburg/progression-unlocks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wanderburg`;
const pageUrl = `${hubUrl}/progression-unlocks`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-green-plains-biome-quests.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-overworld-meadows-golden-dunes.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-module-unlock-quests.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-overtime-silver-reward.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-dark-forest-unlocked.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Progression Guide: Biomes, Silver & Unlocks",
  description:
    "Clear Wanderburg biome gates, spend Silver wisely, unlock modules and rerolls, reach Spiderburg, and fix common progression stalls.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Progression, Silver & Module Unlocks",
    description:
      "Follow biome boss gates, spend Silver on useful permanent upgrades, unlock modules and rerolls, and decide what should change before the next run.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Wanderburg Green Plains biome objectives showing boss progression gates and Silver rewards.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderburg Progression & Unlocks Guide",
    description:
      "Clear biome gates, spend Silver well, unlock permanent modules and rerolls, and choose the next Wanderburg objective.",
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
          name: "Wanderburg Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression and Unlocks",
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
        "Wanderburg Progression and Unlocks Guide: Biomes, Silver, Modules and Rerolls",
      description:
        "A Wanderburg progression guide covering the Green Plains boss gate, Golden Dunes and Meadows routes, Silver spending, permanent module unlocks, Module and Artifact rerolls, Overtime, Spiderburg progression, later Lands, and common progression blockers.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-09",
      dateModified: "2026-09-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Wanderburg",
        },
        {
          "@type": "Thing",
          name: "Wanderburg progression",
        },
        {
          "@type": "Thing",
          name: "Wanderburg unlocks",
        },
        {
          "@type": "Thing",
          name: "Green Plains",
        },
        {
          "@type": "Thing",
          name: "Golden Dunes",
        },
        {
          "@type": "Thing",
          name: "Meadows",
        },
        {
          "@type": "Thing",
          name: "Waving Fields",
        },
        {
          "@type": "Thing",
          name: "Silver",
        },
        {
          "@type": "Thing",
          name: "Overtime",
        },
        {
          "@type": "Thing",
          name: "Module unlocks",
        },
        {
          "@type": "Thing",
          name: "Module rerolls",
        },
        {
          "@type": "Thing",
          name: "Artifact rerolls",
        },
        {
          "@type": "Thing",
          name: "Archer Tower",
        },
        {
          "@type": "Thing",
          name: "Turret Layer",
        },
        {
          "@type": "Thing",
          name: "Front Cannon",
        },
        {
          "@type": "Thing",
          name: "Repair Crew",
        },
        {
          "@type": "Thing",
          name: "Catapult",
        },
        {
          "@type": "Thing",
          name: "Side Arms",
        },
        {
          "@type": "Thing",
          name: "Spiderburg",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Wanderburg Progression & Unlocks: Where to Go Next"
          description="Follow the next biome gate, spend Silver on permanent bottlenecks, unlock useful modules and rerolls, and diagnose what is actually stopping progression."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 13, 2026"
          toc={[
            {
              id: "how-progression-works",
              label: "How progression works",
            },
            {
              id: "green-plains",
              label: "Green Plains",
            },
            {
              id: "where-to-go-next",
              label: "Where to go next",
            },
            {
              id: "silver",
              label: "How to spend Silver",
            },
            {
              id: "rerolls",
              label: "Module & Artifact rerolls",
            },
            {
              id: "permanent-module-unlocks",
              label: "Permanent module unlocks",
            },
            {
              id: "same-modules",
              label: "Why modules repeat",
            },
            {
              id: "overtime",
              label: "When Overtime is worth it",
            },
            {
              id: "spiderburg",
              label: "Spiderburg progression",
            },
            {
              id: "later-progression",
              label: "Later Lands",
            },
            {
              id: "progression-stuck",
              label: "Progression stuck",
            },
            {
              id: "next-objective",
              label: "Choose the next objective",
            },
          ]}
          relatedLinks={[
            {
              href: "/wanderburg",
              label: "Wanderburg Guide Hub",
            },
            {
              href: "/wanderburg/bosses",
              label: "Wanderburg Boss Guide",
            },
            {
              href: "/wanderburg/best-builds",
              label: "Wanderburg Best Builds",
            },
            {
              href: "/wanderburg/captains-tier-list",
              label: "Wanderburg Captains Tier List",
            },
            {
              href: "/wanderburg/how-to-unlock-spiderburg",
              label: "How to Unlock Spiderburg",
            },
            {
              href: "/wanderburg/achievements",
              label: "Wanderburg Achievements Guide",
            },
          ]}
        >
          <WanderburgProgressionUnlocksContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}