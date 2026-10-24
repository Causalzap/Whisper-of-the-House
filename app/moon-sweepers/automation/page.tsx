
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MoonSweepersAutomationContent from "@/data/moon-sweepers/automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/moon-sweepers`;
const pageUrl = `${hubUrl}/automation`;

const metadataTitle =
  "Moon Sweepers Automation: Conveyors, Power & JONAS";

const metadataDescription =
  "Build Moon Sweepers automation with Robot Vacuums, Conveyors, Pressure Chambers, Stone Presses, solar power, and JONAS capsule collection.";

const articleDescription =
  "Set up Robot Vacuum Mk I and Mk II docks, connect capsule outputs to the Depot, and unload sweeping vehicles through a Garage and silo. Turn Moon Dust into Moon Sand with a Pressure Chamber, connect both Dust and Sand inputs to the Stone Press, split and merge Conveyor routes, balance solar power and battery capacity, and collect JONAS capsules with a Capsule Catcher. Diagnose reversed inputs, stalled machines, blocked belts, and production bottlenecks.";

const imageUrls = [
  `${siteUrl}/images/moon-sweepers/moon-sweepers-robot-vacuum-dock.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-conveyor-depot-connection.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-packager.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-pressure-chamber-inlet.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-pressure-chamber-power.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-solar-power-status.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-stone-press-stats.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-stone-press-layout.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-conveyor-splitter.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-conveyor-merger.webp`,
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
      "Connect Robot Vacuums and Conveyors, produce Moon Sand and Moonstone, balance factory power, and use JONAS with a Capsule Catcher.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[7],
        alt: "Moon Sweepers Stone Press placement preview showing Conveyor input and output connections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Build a working Moon Sweepers factory with Dust Conveyors, processing machines, solar power, and JONAS.",
    images: [imageUrls[7]],
  },
};

const toc = [
  {
    id: "first-automation",
    label: "First Robot Vacuum & Conveyor",
  },
  {
    id: "robot-vacuum-coverage",
    label: "Robot Vacuum Mk I vs Mk II",
  },
  {
    id: "vehicle-unloading",
    label: "Vehicle Unloading & Silo",
  },
  {
    id: "pressure-chamber",
    label: "Pressure Chamber & Moon Sand",
  },
  {
    id: "power",
    label: "Solar Power & Batteries",
  },
  {
    id: "stone-press",
    label: "Stone Press & Moonstone",
  },
  {
    id: "splitters-mergers",
    label: "Conveyor Splitters & Mergers",
  },
  {
    id: "production-bottlenecks",
    label: "Production Bottlenecks",
  },
  {
    id: "jonas",
    label: "JONAS & Capsule Catcher",
  },
  {
    id: "automation-troubleshooting",
    label: "Automation Troubleshooting",
  },
  {
    id: "expansion-decisions",
    label: "What to Upgrade Next",
  },
];

const relatedLinks = [
  {
    href: "/moon-sweepers",
    label: "Moon Sweepers Beginner Guide: Upgrades & Vehicles",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automation",
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
        "Moon Sweepers Automation: Robot Vacuums, Conveyors, Moonstone, Power, and JONAS",
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
          name: "Robot Vacuum Mk I and Mk II",
        },
        {
          "@type": "Thing",
          name: "Automated Dust collection",
        },
        {
          "@type": "Thing",
          name: "Conveyor belts, Splitters, and Mergers",
        },
        {
          "@type": "Thing",
          name: "Pressure Chamber and Moon Sand",
        },
        {
          "@type": "Thing",
          name: "Stone Press and Moonstone",
        },
        {
          "@type": "Thing",
          name: "Solar power and battery storage",
        },
        {
          "@type": "Thing",
          name: "JONAS and Capsule Catcher",
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
          title="Moon Sweepers Automation: Conveyors, Power & JONAS"
          description="Connect Robot Vacuums to the Depot, process Dust into Moon Sand and Moonstone, fix Conveyor bottlenecks, and keep JONAS and production machines running."
          gameTitle="Moon Sweepers"
          gameHref="/moon-sweepers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoonSweepersAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
