
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TowerFarmMapGuideContent from "@/data/halloween-the-game/tower-farm-map-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/tower-farm-map-guide`;

const metadataTitle =
  "Halloween: The Game Tower Farm Map & Sewer Escape Guide";

const metadataDescription =
  "Find the Tower Farm Sewer Escape, open Chains or Padlocks, clear Boards and Overgrowth, and navigate the farmhouses, cornfields, roads, and bridges.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-tower-farm-map-overview.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-tower-farm-gas-station.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-tower-farm-sewer-entrance.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-tower-farm-sewer-padlock-objectives.webp`,
];

const toc = [
  {
    id: "tower-farm-map",
    label: "Tower Farm map areas",
  },
  {
    id: "farmhouse-barn-festival-route",
    label: "Farmhouses to Harvest Festival",
  },
  {
    id: "sewer-escape-location",
    label: "Where to find the Sewer Escape",
  },
  {
    id: "open-sewer-escape",
    label: "How to open the Sewer Hatch",
  },
  {
    id: "sewer-hatch-steps",
    label: "Sewer Hatch objectives",
  },
  {
    id: "sewer-escape-not-working",
    label: "Sewer Escape not working",
  },
  {
    id: "finding-sewer-items",
    label: "Find Keys and Bolt Cutters",
  },
  {
    id: "civilian-escape-route",
    label: "Civilian routes and crossings",
  },
  {
    id: "michael-tower-farm",
    label: "Michael Myers map strategy",
  },
  {
    id: "tower-farm-pumpkins",
    label: "Pumpkin Patch location",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/items-guide",
    label: "All Items & Uses Guide",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/challenges",
    label: "Challenges & Unlocks Guide",
  },
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
      "Explore Tower Farm, locate the new Sewer Hatch, clear its four objectives, compare Chains and Padlock requirements, and find safer routes across the map.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Tower Farm map overview showing roads, buildings, and objective locations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find the Tower Farm Sewer Escape, unlock Chains or Padlocks, and navigate the farmhouses, cornfields, irrigation ditch, and festival grounds.",
    images: [heroImage],
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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Halloween: The Game Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tower Farm Map & Sewer Escape",
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
        "Halloween: The Game Tower Farm Map & Sewer Escape Guide",
      description:
        "Find the Sewer Escape on Tower Farm, remove Boards and Overgrowth, unlock Chains or Padlocks with the correct items, and navigate the farmhouses, barns, cornfields, roads, and irrigation ditch. Includes Sewer troubleshooting and Michael Myers route decisions.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-28",
      dateModified: "2026-10-28",
      articleSection: "Halloween: The Game Multiplayer Maps",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Tower Farm",
        },
        {
          "@type": "Thing",
          name: "Tower Farm Terror",
        },
        {
          "@type": "Thing",
          name: "Sewer Escape",
        },
        {
          "@type": "Thing",
          name: "Sewer Hatch",
        },
        {
          "@type": "Thing",
          name: "Chains and Padlocks",
        },
        {
          "@type": "Thing",
          name: "Bolt Cutters",
        },
        {
          "@type": "Thing",
          name: "Escape Key",
        },
        {
          "@type": "Thing",
          name: "Overgrown Plants",
        },
        {
          "@type": "Thing",
          name: "Harvest Festival",
        },
        {
          "@type": "Thing",
          name: "Cornfields",
        },
        {
          "@type": "Thing",
          name: "Irrigation Ditch",
        },
        {
          "@type": "Thing",
          name: "Michael Myers",
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
          title="Halloween: The Game Tower Farm Map & Sewer Escape Guide"
          description="Find the Sewer Hatch, clear its four objectives, and navigate Tower Farm's roads, farmhouses, barns, cornfields, and bridges. Includes Chains, Padlock, and escape troubleshooting."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TowerFarmMapGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
