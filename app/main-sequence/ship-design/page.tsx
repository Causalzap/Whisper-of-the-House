
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainSequenceShipDesignContent from "@/data/main-sequence/ship-design.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/main-sequence`;
const pageUrl = `${hubUrl}/ship-design`;

const metadataTitle =
  "Main Sequence Ship Design: Shipyard, Modules & Upgrades";

const metadataDescription =
  "Build Main Sequence ships with the Ship Designer. Compare Shipyard mass limits, Thrusters, cargo modules, combat weapons, Warp Drives, and Fighter Hangars.";

const articleTitle =
  "Main Sequence Ship Design: How Do You Build and Upgrade Ships?";

const articleDescription =
  "Construct and expand a Shipyard, upgrade mining and cargo ships, compare mass, thrust and power, prepare combat equipment, install Warp Drives, repair Hull damage, and configure fighter support.";

const imageUrls = [
  `${siteUrl}/images/main-sequence/main-sequence-wyvern-combat-ship-modules.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-interstellar-ship-design.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-shipyard-mass-limit.webp`,
];

const heroImage = imageUrls[0];

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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Main Sequence combat ship blueprint showing weapon modules and hull layout in the Ship Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};

const toc = [
  {
    id: "shipyard",
    label: "Build a Shipyard",
  },
  {
    id: "ship-designer",
    label: "Upgrade an Existing Ship",
  },
  {
    id: "mass-and-thrusters",
    label: "Mass, Thrusters & Power",
  },
  {
    id: "mining-ship",
    label: "Mining Ship Upgrades",
  },
  {
    id: "cargo-ship",
    label: "Cargo Ship Design",
  },
  {
    id: "combat-ship",
    label: "Combat Ship Design",
  },
  {
    id: "relic-destroyer-combat",
    label: "Relic Destroyer Combat",
  },
  {
    id: "ship-power-and-repairs",
    label: "Ship Power & Repairs",
  },
  {
    id: "warp-drive-installation",
    label: "Warp Drive Installation",
  },
  {
    id: "fighters-and-hangar",
    label: "Fighters & Ship Hangar",
  },
  {
    id: "ship-design-troubleshooting",
    label: "Ship Designer Problems",
  },
  {
    id: "choose-ship-design",
    label: "Which Ship to Build Next",
  },
];

const relatedLinks = [
  {
    href: "/main-sequence",
    label: "Beginner Guide: First Ship & Station",
  },
  {
    href: "/main-sequence/research-progression",
    label: "Research Progression: Ship Technologies",
  },
  {
    href: "/main-sequence/ship-logistics",
    label: "Ship Logistics: Cargo Autopilot",
  },
  {
    href: "/main-sequence/factory-automation",
    label: "Factory Automation: Ship Materials & Production",
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
          name: "Main Sequence",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ship Design",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-21",
      dateModified: "2026-11-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Main Sequence",
        },
        {
          "@type": "Thing",
          name: "Shipyard construction and Ship Designer",
        },
        {
          "@type": "Thing",
          name: "Ship mass and Thruster performance",
        },
        {
          "@type": "Thing",
          name: "Mining, cargo and combat ship modules",
        },
        {
          "@type": "Thing",
          name: "Relic Destroyer ship preparation",
        },
        {
          "@type": "Thing",
          name: "Ship Reactor, Hull damage and Repair Packs",
        },
        {
          "@type": "Thing",
          name: "Slipstream and Interstellar Warp Drives",
        },
        {
          "@type": "Thing",
          name: "Fighter Autopilot and Ship Hangar",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Main Sequence"
          gameHref="/main-sequence"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MainSequenceShipDesignContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
