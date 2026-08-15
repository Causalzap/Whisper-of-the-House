import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkMapGuideContent from "@/data/big-walk/how-to-unlock-map.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/how-to-unlock-map`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-map-room-door-open.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-completion-flags.png`,
  `${siteUrl}/images/big-walk/big-walk-portable-map-open.png`,
  `${siteUrl}/images/big-walk/big-walk-red-tower-five-head-slots.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-key-cutter-arrow.png`,
  `${siteUrl}/images/big-walk/big-walk-red-tower-blinking-light-route.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-compass-laser-pointers.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Map: How to Unlock the Map Room & Use the Map",
  description:
    "Unlock the Big Walk map with 5 Heads and 5 key cutters. See the Map Room, portable map, completion flags, and how navigation works.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Map: How to Unlock the Map Room & Use the Map",
    description:
      "Unlock the Red Tower Map Room with five Heads and five key cutters, then use the physical island map, portable map, flags, and navigation tools.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1786,
        height: 792,
        alt: "Big Walk Map Room with the physical island map inside the Red Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Map: Unlock the Map Room & Use the Map",
    description:
      "Open the Red Tower Map Room with five Heads and five key cutters, then use the physical island map, portable map, flags, and navigation tools.",
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Big Walk Map and Map Room",
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
        "Big Walk Map Guide: How to Unlock the Map Room and Use the Map",
      description:
        "A complete Big Walk map and Map Room guide explaining how to unlock the Red Tower with five Heads and five key cutters, how the physical island model works, how to read completion flags, and how to use the portable map for navigation and coordinate puzzles.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk map",
        },
        {
          "@type": "Thing",
          name: "Big Walk Map Room",
        },
        {
          "@type": "Thing",
          name: "Big Walk Red Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk five Heads",
        },
        {
          "@type": "Thing",
          name: "Big Walk key cutters",
        },
        {
          "@type": "Thing",
          name: "Big Walk portable map",
        },
        {
          "@type": "Thing",
          name: "Big Walk completion flags",
        },
        {
          "@type": "Thing",
          name: "Big Walk Compass",
        },
        {
          "@type": "Thing",
          name: "Big Walk Laser Pointers",
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

const toc = [
  {
    id: "big-walk-map-explained",
    label: "Map and Map Room explained",
  },
  {
    id: "route-to-red-tower",
    label: "Route to the Red Tower",
  },
  {
    id: "five-head-receiver",
    label: "Five-slot receiver",
  },
  {
    id: "three-head-return",
    label: "Return after three Heads",
  },
  {
    id: "red-tower-key",
    label: "Get the Red Tower key",
  },
  {
    id: "map-key-cutters",
    label: "Follow five key cutters",
  },
  {
    id: "enter-map-room",
    label: "Open the Map Room",
  },
  {
    id: "map-flags",
    label: "Read flags and flagpoles",
  },
  {
    id: "portable-map",
    label: "Use the portable map",
  },
  {
    id: "map-compass-lasers",
    label: "Compass and Laser Pointers",
  },
  {
    id: "stuck",
    label: "Map Room unlock fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/4166-1899-puzzle",
    label: "4166 / 1899 Coordinate Puzzle Solution",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/beginner-guide",
    label: "Big Walk Beginner Guide",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and True Ending Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How to Unlock and Use the Map in Big Walk"
          description="I unlock the Red Tower Map Room, use the physical island model, read completion flags, and carry the portable map without mistaking it for GPS."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkMapGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}