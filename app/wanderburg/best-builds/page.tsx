import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgBestBuildsContent from "@/data/wanderburg/best-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wanderburg`;
const pageUrl = `${hubUrl}/best-builds`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-archer-ballista-turret-build.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-barracks-upgrade-options.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-mine-mortar-build.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-ram-speed-build.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-summoner-build.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-cannon-build-loadout.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Best Builds: Archer, Mines, Ram & Cannons",
  description:
    "Build around Archer Tower, mines, Ram, summons or Cannons, choose upgrades that scale together, and learn when Movement matters more than Defense.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Best Builds & Upgrade Priorities",
    description:
      "Compare proven Arrow, Mine and Mortar, Ram, Summoner and Cannon builds, learn when to pivot, and keep large castles mobile enough to survive.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Wanderburg Archer Tower, Side Ballista and Turret Layer build during a late run.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderburg Best Builds & Upgrade Priorities",
    description:
      "Use proven Wanderburg builds for early progression and late runs, with upgrade priorities for arrows, mines, Ram, summons and Cannons.",
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
          name: "Best Builds",
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
        "Wanderburg Best Builds Guide: Archer, Mine and Mortar, Ram, Summoner, Cannon, Movement and Upgrade Priorities",
      description:
        "A Wanderburg build guide covering the Archer Tower, Side Ballista and Turret Layer core, the early Mine Layer and Top Mortar setup, Movement versus Defense, Ram speed scaling, Summoner and Cannon builds, upgrade priorities, build pivots, vehicle compatibility, and which setups are most reliable for progression.",
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
          name: "Wanderburg builds",
        },
        {
          "@type": "Thing",
          name: "Archer Tower",
        },
        {
          "@type": "Thing",
          name: "Side Ballista",
        },
        {
          "@type": "Thing",
          name: "Turret Layer",
        },
        {
          "@type": "Thing",
          name: "Mine Layer",
        },
        {
          "@type": "Thing",
          name: "Top Mortar",
        },
        {
          "@type": "Thing",
          name: "Ram build",
        },
        {
          "@type": "Thing",
          name: "Summoner build",
        },
        {
          "@type": "Thing",
          name: "Cannon build",
        },
        {
          "@type": "Thing",
          name: "Movement",
        },
        {
          "@type": "Thing",
          name: "Nitro",
        },
        {
          "@type": "Thing",
          name: "Build upgrades",
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
          title="Wanderburg Best Builds & Upgrade Priorities"
          description="Build around a damage engine that already works, keep the castle mobile as it grows, and choose the right Arrow, Mine, Ram, Summon or Cannon setup for your permanent account."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
          toc={[
            {
              id: "best-build",
              label: "Best overall build",
            },
            {
              id: "arrow-upgrades",
              label: "Arrow upgrade priorities",
            },
            {
              id: "front-slot",
              label: "Best fourth slot",
            },
            {
              id: "vehicle-layout",
              label: "Vehicle compatibility",
            },
            {
              id: "early-game-build",
              label: "Best early build",
            },
            {
              id: "movement",
              label: "Movement vs Defense",
            },
            {
              id: "mine-mortar-stall",
              label: "Mine and Mortar problems",
            },
            {
              id: "ram-build",
              label: "Ram build",
            },
            {
              id: "summoner-build",
              label: "Summoner build",
            },
            {
              id: "cannon-build",
              label: "Cannon build",
            },
            {
              id: "build-pivot",
              label: "When to pivot",
            },
            {
              id: "builds-not-to-force",
              label: "Builds not to force",
            },
            {
              id: "which-build",
              label: "Which build to use",
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
              href: "/wanderburg/progression-unlocks",
              label: "Wanderburg Progression & Unlocks",
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
          <WanderburgBestBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}