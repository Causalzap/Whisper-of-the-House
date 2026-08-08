import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronNestContent from "@/data/iron-nest/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest`;

const metadataTitle =
  "Iron Nest Guide: Missions, Triangulation & Shells";

const metadataDescription =
  "Complete Iron Nest missions with triangulation, firing solutions, shell choices, troubleshooting, and walkthroughs from Fire and Light to all four endings.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-demo-protocol.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-map-bearing-range.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-teleprinter-orders.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-calculator-elevation.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-shell-menu-types.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-requisition-console.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-right-gun-link.webp`,
];

const campaignPages = [
  {
    mission: 2,
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Mission 2 — Fire and Light",
    schemaName: "Iron Nest Mission 2: Fire and Light Walkthrough",
  },
  {
    mission: 3,
    href: "/iron-nest/liberation-walkthrough",
    label: "Mission 3 — Liberation",
    schemaName: "Iron Nest Mission 3: Liberation Walkthrough",
  },
  {
    mission: 4,
    href: "/iron-nest/counter-battery-mission",
    label: "Mission 4 — Counter-Battery",
    schemaName: "Iron Nest Mission 4: Counter-Battery Walkthrough",
  },
  {
    mission: 5,
    href: "/iron-nest/iron-road-walkthrough",
    label: "Mission 5 — Iron Road",
    schemaName: "Iron Nest Mission 5: Iron Road Walkthrough",
  },
  {
    mission: 6,
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Mission 6 — Siege of Cartagena",
    schemaName: "Iron Nest Mission 6: Siege of Cartagena Walkthrough",
  },
  {
    mission: 7,
    href: "/iron-nest/the-gorge-walkthrough",
    label: "Mission 7 — The Gorge",
    schemaName: "Iron Nest Mission 7: The Gorge Walkthrough",
  },
  {
    mission: 8,
    href: "/iron-nest/rock-of-gibraltar-walkthrough",
    label: "Mission 8 — Rock of Gibraltar",
    schemaName: "Iron Nest Mission 8: Rock of Gibraltar Walkthrough",
  },
  {
    mission: 9,
    href: "/iron-nest/dead-reckoning-walkthrough",
    label: "Mission 9 — Dead Reckoning",
    schemaName: "Iron Nest Mission 9: Dead Reckoning Walkthrough",
  },
  {
    mission: 10,
    href: "/iron-nest/fire-on-call-walkthrough",
    label: "Mission 10 — Fire on Call",
    schemaName: "Iron Nest Mission 10: Fire on Call Walkthrough",
  },
  {
    mission: 11,
    href: "/iron-nest/high-tide-walkthrough",
    label: "Mission 11 — High Tide",
    schemaName: "Iron Nest Mission 11: High Tide Walkthrough",
  },
  {
    mission: 12,
    href: "/iron-nest/blind-fire-walkthrough",
    label: "Mission 12 — Blind Fire",
    schemaName: "Iron Nest Mission 12: Blind Fire Walkthrough",
  },
  {
    mission: 13,
    href: "/iron-nest/phantom-battery-walkthrough",
    label: "Mission 13 — Phantom Battery",
    schemaName: "Iron Nest Mission 13: Phantom Battery Walkthrough",
  },
  {
    mission: 14,
    href: "/iron-nest/final-harvest-walkthrough",
    label: "Mission 14 — Final Harvest",
    schemaName: "Iron Nest Mission 14: Final Harvest Walkthrough",
  },
  {
    mission: 15,
    href: "/iron-nest/white-shells-endings",
    label: "Mission 15 — White Shells & All Endings",
    schemaName: "Iron Nest White Shells Endings Guide: All 4 Endings",
  },
];

const supportPages = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate in Iron Nest",
    schemaName: "How to Triangulate in Iron Nest",
  },
];

const toc = [
  {
    id: "how-iron-nest-works",
    label: "How Iron Nest works",
  },
  {
    id: "campaign-walkthroughs",
    label: "Campaign walkthroughs",
  },
  {
    id: "triangulation",
    label: "Triangulation help",
  },
  {
    id: "calibration-fire",
    label: "Calibration Fire",
  },
  {
    id: "read-the-order",
    label: "Read the order",
  },
  {
    id: "build-final-solution",
    label: "Build a firing solution",
  },
  {
    id: "shell-choice",
    label: "Choose the right shell",
  },
  {
    id: "requisition",
    label: "Spend requisition",
  },
  {
    id: "dual-guns",
    label: "Left and right guns",
  },
  {
    id: "troubleshooting",
    label: "Troubleshoot bad shots",
  },
  {
    id: "white-shells-endings",
    label: "White Shells endings",
  },
  {
    id: "challenge-mode",
    label: "Challenge Mode",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate in Iron Nest",
  },
  {
    href: "/iron-nest/high-tide-walkthrough",
    label: "High Tide Walkthrough",
  },
  {
    href: "/iron-nest/phantom-battery-walkthrough",
    label: "Phantom Battery Walkthrough",
  },
  {
    href: "/iron-nest/white-shells-endings",
    label: "White Shells — All 4 Endings",
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
    title: "Iron Nest Guide: Campaign Missions, Triangulation & Endings",
    description:
      "Follow the Iron Nest campaign from Calibration Fire through White Shells, with mission walkthroughs, triangulation help, shell decisions, troubleshooting, and all four endings.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest operating protocol showing the firing process from locating a target through firing and confirmation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Guide: Missions, Triangulation & Endings",
    description:
      "Mission-by-mission Iron Nest help with triangulation, firing solutions, shells, troubleshooting, late-game missions, and all four White Shells endings.",
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
          name: "Iron Nest Guide",
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
        "Iron Nest Guide: Campaign Missions, Triangulation, Firing Solutions, Shells, and All Endings",
      description:
        "A player-focused Iron Nest guide covering the shared read, locate, calculate, prepare, fire, and confirm loop; Calibration Fire; campaign walkthroughs from Mission 2 Fire and Light through Mission 15 White Shells; spotter triangulation and Position Reports; bearing, range, powder charges, and elevation; shell choice based on target certainty and friendly positions; requisition decisions; left and right gun management; troubleshooting for bad shots and incomplete objectives; moving targets in Iron Road, Rock of Gibraltar, and High Tide; hidden positions in Dead Reckoning; live fire support in Fire on Call; blind chained intelligence; Phantom Battery recovery and counter-battery pressure; Final Harvest target scheduling; and all four confirmed White Shells endings.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Iron Nest guide",
        },
        {
          "@type": "Thing",
          name: "Iron Nest mission walkthroughs",
        },
        {
          "@type": "Thing",
          name: "Iron Nest triangulation",
        },
        {
          "@type": "Thing",
          name: "Iron Nest firing solutions",
        },
        {
          "@type": "Thing",
          name: "Iron Nest shell types",
        },
        {
          "@type": "Thing",
          name: "Iron Nest White Shells endings",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Challenge Mode",
        },
      ],
      hasPart: [
        ...supportPages.map(({ href, schemaName }) => ({
          "@type": "WebPage",
          "@id": `${siteUrl}${href}`,
          name: schemaName,
          url: `${siteUrl}${href}`,
        })),
        ...campaignPages.map(({ href, schemaName }) => ({
          "@type": "WebPage",
          "@id": `${siteUrl}${href}`,
          name: schemaName,
          url: `${siteUrl}${href}`,
        })),
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
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#campaign-walkthroughs`,
      name: "Iron Nest Campaign Mission Walkthroughs",
      numberOfItems: campaignPages.length,
      itemListElement: campaignPages.map(
        ({ mission, href, schemaName }, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: schemaName,
          url: `${siteUrl}${href}`,
          additionalType: "https://schema.org/WebPage",
          identifier: `Mission ${mission}`,
        }),
      ),
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
          title="Iron Nest Guide: Campaign Missions, Firing Help, and Endings"
          description="Start with the shared firing loop, jump to the mission that is blocking you, or open the triangulation guide when bearings and Position Reports stop making sense."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronNestContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="IRON NEST: Heavy Turret Simulator"
          heading="Looking for another game after IRON NEST: Heavy Turret Simulator?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />

      </main>

      <Footer />
    </>
  );
}