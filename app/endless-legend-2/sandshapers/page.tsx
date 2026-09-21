import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2SandshapersContent from "@/data/endless-legend-2/sandshapers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/sandshapers`;

const metadataTitle =
  "ENDLESS Legend 2 Sandshapers Guide – Ruins & Wishes";

const metadataDescription =
  "Play Sandshapers with Ruins, Sand, Wishes, Ancient Wisdom, teleportation, Stone Stance, Tidefall planning and stronger resource-heavy Cities.";

const articleDescription =
  "Build the Sandshapers around Buried Ruins, Sand-based Food, Ancient Wisdom, selective Restorations, teleport routes, Tidefall scouting and position-heavy combat.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-sandshapers-first-city-ruin.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-sandshapers-raise-ruin.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-sandshapers-eminence-ruin.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-sandshapers-ruin-teleport.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-sandshapers-stone-stance-stack.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "first-city",
    label: "First City location",
  },
  {
    id: "sand-economy",
    label: "Sand & Food economy",
  },
  {
    id: "ruin-progression",
    label: "Raise Ruins & Ancient Wisdom",
  },
  {
    id: "restore-and-teleport",
    label: "Restore Ruins & teleport",
  },
  {
    id: "monsoon-tidefall",
    label: "Monsoon & Tidefall",
  },
  {
    id: "combat",
    label: "Stone Stance & Sun Shift",
  },
  {
    id: "captured-cities",
    label: "Captured Cities",
  },
  {
    id: "midgame-priorities",
    label: "Midgame priorities",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/factions",
    label: "All 8 Factions",
  },
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
  },
  {
    href: "/endless-legend-2/tidefall",
    label: "Tidefall & Monsoon",
  },
  {
    href: "/endless-legend-2/minor-factions",
    label: "Minor Factions",
  },
  {
    href: "/endless-legend-2/victory-conditions",
    label: "Victory Conditions",
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
    title:
      "ENDLESS Legend 2 Sandshapers Guide – Opening, Ruins & Wishes",
    description: articleDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "ENDLESS Legend 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sandshapers",
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
        "ENDLESS Legend 2 Sandshapers Guide – Opening, Ruins & Wishes",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ENDLESS Legend 2",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sandshapers",
        },
        {
          "@type": "Thing",
          name: "Sandshaper Ruins",
        },
        {
          "@type": "Thing",
          name: "Wish of Awakening",
        },
        {
          "@type": "Thing",
          name: "Wish of Past Grandeur",
        },
        {
          "@type": "Thing",
          name: "Ancient Wisdom",
        },
        {
          "@type": "Thing",
          name: "Stone Stance",
        },
        {
          "@type": "Thing",
          name: "Sun Shift",
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
          title="ENDLESS Legend 2 Sandshapers Guide – Opening, Ruins & Wishes"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2SandshapersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}