import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HellraiserRevivalContent from "@/data/hellraiser-revival/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hellraiser-revival`;
const pageUrl = hubUrl;

const metadataTitle =
  "Hellraiser Revival Demo Walkthrough & Puzzle Solutions";

const metadataDescription =
  "Get through the Hellraiser Revival demo with the Labyrinth route, Scarlet Church puzzles, Room 206, Bruno, crafting, and the final duck puzzle.";

const articleDescription =
  "A complete player-first Hellraiser Revival demo walkthrough covering the Follow the Darkness apartment loop, Genesis Configuration Labyrinth puzzle, Scarlet Church escape, Blemished Fragment and Blemished Diamond lock, Tongue Key, Bruno keycard route, combat and crafting resources, Room 206 power outage objective, and the final ornament and duck puzzle.";

const imageUrls = [
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-labyrinth-fire-bridge-puzzle.webp`,
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-follow-the-darkness-solution.webp`,
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-blemished-diamond.webp`,
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-tongue-key-puzzle.webp`,
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-bruno-patrol-room.webp`,
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-room-206-power-outage-note.webp`,
  `${siteUrl}/images/hellraiser-revival/hellraiser-revival-ducky-final-door.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "demo-walkthrough",
    label: "Demo walkthrough",
  },
  {
    id: "follow-sunny",
    label: "Where to go after Sunny",
  },
  {
    id: "labyrinth-fire-puzzle",
    label: "Labyrinth puzzle",
  },
  {
    id: "escape-scarlet-church",
    label: "Escape the Scarlet Church",
  },
  {
    id: "blemished-diamond",
    label: "Blemished Diamond",
  },
  {
    id: "tongue-key",
    label: "Tongue Key puzzle",
  },
  {
    id: "bruno-keycard",
    label: "Bruno and the keycard",
  },
  {
    id: "combat-and-crafting",
    label: "Combat and crafting",
  },
  {
    id: "room-206",
    label: "Room 206",
  },
  {
    id: "final-puzzle",
    label: "Final duck puzzle",
  },
  {
    id: "where-demo-ends",
    label: "Where the demo ends",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [];

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
      "Follow the Hellraiser Revival demo from the Labyrinth through Scarlet Church with the main puzzles, key items, combat decisions, and final escape route.",
    siteName: "Whisper of the House",
    publishedTime: "2026-09-18",
    modifiedTime: "2026-09-18",
    images: [
      {
        url: heroImage,
        width: 1508,
        height: 1070,
        alt: "Genesis Configuration Labyrinth bridge puzzle in Hellraiser Revival",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Hellraiser Revival demo route, puzzle solutions, Bruno stealth, Room 206, crafting, key items, and the final duck puzzle.",
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
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hellraiser Revival Guide",
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
        "Hellraiser Revival Demo Walkthrough – All Puzzles & Where to Go",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-18",
      dateModified: "2026-09-18",
      articleSection: "Hellraiser Revival Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Clive Barker's Hellraiser: Revival",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Hellraiser Revival demo walkthrough",
        },
        {
          "@type": "Thing",
          name: "Hellraiser Revival puzzle solutions",
        },
        {
          "@type": "Thing",
          name: "The Labyrinth",
        },
        {
          "@type": "Thing",
          name: "Scarlet Church",
        },
        {
          "@type": "Thing",
          name: "Genesis Configuration",
        },
        {
          "@type": "Thing",
          name: "Blemished Fragment",
        },
        {
          "@type": "Thing",
          name: "Blemished Diamond",
        },
        {
          "@type": "Thing",
          name: "Tongue Key",
        },
        {
          "@type": "Thing",
          name: "Bruno",
        },
        {
          "@type": "Thing",
          name: "Room 206",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Hellraiser Revival Demo Walkthrough – All Puzzles & Where to Go"
          description="I follow the demo from the first Labyrinth loop through the Scarlet Church, with the exact route through the puzzles, key items, stealth sections, crafting decisions, Room 206, and the final way into the club."
          gameTitle="Hellraiser: Revival"
          gameHref="/hellraiser-revival"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HellraiserRevivalContent />

          
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}