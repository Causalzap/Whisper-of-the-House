import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkMapGuideContent from "@/data/big-walk/how-to-unlock-map.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/how-to-unlock-map`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-red-tower-blinking-light-route.png`,
  `${siteUrl}/images/big-walk/big-walk-red-tower-five-head-slots.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-key-cutter-arrow.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-door-open.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-completion-flags.png`,
  `${siteUrl}/images/big-walk/big-walk-portable-map-open.png`,
  `${siteUrl}/images/big-walk/big-walk-map-room-compass-laser-pointers.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Map Guide: Red Tower, 5 Heads & Key Cutters",
  description:
    "Reach the Red Tower, return five Heads, follow all five key cutters, open the Map Room, and use flags, the portable map, Compass, and Laser Pointers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Unlock the Map Room in Big Walk",
    description:
      "Follow the Red Tower route, return five Heads, shape the blank key through five cutters, and use the physical map without mistaking it for a GPS.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        width: 1856,
        height: 824,
        alt: "Big Walk physical island map with blue completion flags and empty flagpoles inside the Map Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Map Room and Red Tower Guide",
    description:
      "Return five Heads, complete the Red Tower key-cutter route, open the Map Room, and understand flags, map sections, Compass, and Laser Pointers.",
    images: [imageUrls[4]],
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
          name: "How to Unlock the Map",
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
        "Big Walk Map Guide: How to Reach the Red Tower, Return Five Heads, Complete the Key Cutters, and Open the Map Room",
      description:
        "This Big Walk map guide follows the route from the tutorial drawbridge to the Red Tower, explains why I return after three of the five required Heads, shows how the blank key moves through five cutter stations, identifies the upper Map Room entrance, explains blue completion flags and empty flagpoles, and shows how to use the portable map, Compass, and Laser Pointers without expecting a live player marker.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
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
          name: "Big Walk Compass",
        },
        {
          "@type": "Thing",
          name: "Big Walk Laser Pointers",
        },
        {
          "@type": "Thing",
          name: "Big View achievement",
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
    href: "/big-walk/beginner-guide",
    label: "Big Walk Beginner Guide",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
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
          title="How I Unlock the Map Room in Big Walk"
          description="Follow the Red Tower beacon, return five Heads, complete all five key cutters, and use the physical Map Room, portable map, Compass, and Laser Pointers correctly."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
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