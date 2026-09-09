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
  `${siteUrl}/images/wanderburg/wanderburg-overtime-silver-reward.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-module-unlock-quests.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Progression Guide: Biomes, Silver & Unlocks",
  description:
    "Clear Green Plains, choose Golden Dunes or Meadows, spend Silver wisely, unlock permanent modules, and fix common Wanderburg progression stalls.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Progression, Silver & Module Unlocks",
    description:
      "Follow biome boss gates, spend Silver on permanent upgrades, use Overtime well, unlock new modules, and work out what should change on your next Wanderburg run.",
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
      "Clear biome gates, spend Silver correctly, unlock permanent modules, and choose the next Wanderburg objective.",
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
        "Wanderburg Progression and Unlocks Guide: Biomes, Silver, Overtime and Permanent Module Milestones",
      description:
        "A Wanderburg progression guide covering the four-boss Green Plains gate, Golden Dunes and Meadows routes, permanent Silver spending, Overtime rewards, module unlock objectives, repeated module choices, Spiderburg progression, later Lands, and how to distinguish a genuine progression blocker from a build or loadout problem.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-09",
      dateModified: "2026-09-09",
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
          description="Clear the next biome gate, spend Silver on permanent bottlenecks, target useful module milestones, and work out what should actually change before your next run."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
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
              id: "overtime",
              label: "When Overtime is worth it",
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