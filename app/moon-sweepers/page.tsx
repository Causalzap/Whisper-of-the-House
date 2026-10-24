
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MoonSweepersGuideContent from "@/data/moon-sweepers/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moon-sweepers`;

const metadataTitle =
  "Moon Sweepers Beginner Guide: Best Upgrades & First Steps";

const metadataDescription =
  "Start Moon Sweepers with brush upgrades, earn money from completed hexes, choose your first vehicle, and learn when to automate cleaning.";

const articleDescription =
  "Begin with the free Toothbrush, deposit Moon Dust at the station, and earn bonuses from completed hexes. Compare Nail Brush, Household Broom, Wide Broom, and Extra Wide Broom purchases; improve container capacity through the Upgrade Matrix; use Market Contracts and Region Bounty; follow the Moon Map to unfinished sectors, flags, survey sites, and stations; and choose between the Push Sweeper, Ride-on Sweeper, Lunar Sweeper, and Mega Vacuum Rover before moving into automated cleaning.";

const imageUrls = [
  `${siteUrl}/images/moon-sweepers/moon-sweepers-household-broom-capacity-upgrade.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-moon-cleaning-progress.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-lunar-sweeper-stats.webp`,
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
    title: metadataTitle,
    description:
      "Choose your first Moon Sweepers brush, compare container upgrades and vehicles, earn rewards from completed sectors, and explore the Moon Map.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Moon Sweepers Household Broom container upgrade showing its $30 cost and 6 kg capacity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Start cleaning the Moon, choose useful brush upgrades, compare vehicles, and find flags and survey rewards.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "first-day",
    label: "First Day & Dust Deposits",
  },
  {
    id: "brush-upgrades",
    label: "Best Brushes & Capacity",
  },
  {
    id: "upgrade-matrix",
    label: "Upgrade Matrix & Money",
  },
  {
    id: "moon-map",
    label: "Moon Map & Waypoints",
  },
  {
    id: "flags-surveys",
    label: "Flags & Survey Rewards",
  },
  {
    id: "vehicles",
    label: "Which Vehicle to Buy",
  },
  {
    id: "multiplayer",
    label: "Multiplayer & Shared Work",
  },
  {
    id: "day-night",
    label: "Nighttime & Visibility",
  },
  {
    id: "automation-progression",
    label: "When to Automate",
  },
  {
    id: "long-term-progress",
    label: "Whole Moon Progress",
  },
];

const relatedLinks = [
  {
    href: "/moon-sweepers/automation",
    label: "Moon Sweepers Automation: Conveyors, Power & JONAS",
  },
  {
    href: "/moon-sweepers/achievements",
    label: "Moon Sweepers: All 33 Achievements & Checklist",
  },
];

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
          name: "Moon Sweepers",
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
        "Moon Sweepers Beginner Guide: Brushes, Upgrades, Vehicles, and Moon Map",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-24",
      dateModified: "2026-10-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Moon Sweepers",
        },
        {
          "@type": "Thing",
          name: "Starting tools and brush upgrades",
        },
        {
          "@type": "Thing",
          name: "Dust collection and Depot deposits",
        },
        {
          "@type": "Thing",
          name: "Upgrade Matrix and equipment purchases",
        },
        {
          "@type": "Thing",
          name: "Moon Map, flags, and lunar surveys",
        },
        {
          "@type": "Thing",
          name: "Lunar cleaning vehicles",
        },
        {
          "@type": "Thing",
          name: "Multiplayer cleaning",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Moon Sweepers Beginner Guide: Best Upgrades & First Steps"
          description="Start with the free Toothbrush, earn money from cleaning and deposits, choose useful upgrades, and compare vehicles before building your automated operation."
          gameTitle="Moon Sweepers"
          gameHref="/moon-sweepers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoonSweepersGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
