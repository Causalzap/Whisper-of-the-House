import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkTutorialWalkthroughContent from "@/data/big-walk/tutorial-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/tutorial-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-tutorial-four-head-slots.png`,
  `${siteUrl}/images/big-walk/big-walk-tutorial-glass-head-enclosure.png`,
  `${siteUrl}/images/big-walk/big-walk-tutorial-symbol-room-panels.png`,
  `${siteUrl}/images/big-walk/big-walk-tutorial-greenhouse-simultaneous-switches.png`,
  `${siteUrl}/images/big-walk/big-walk-blank-key-cutting-station.png`,
  `${siteUrl}/images/big-walk/big-walk-drawbridge-open.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Tutorial Walkthrough: 4 Heads & Drawbridge",
  description:
    "Find all four tutorial Heads, solve the glass, symbol and switch rooms, shape the blank key through four cutters, and open the Big Walk drawbridge.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Tutorial and Drawbridge Walkthrough",
    description:
      "Return four Heads, complete the glass enclosure, blue symbol room and green switches, then shape the blank key through all four cutters.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        width: 768,
        height: 680,
        alt: "Big Walk red drawbridge open after the fully shaped tutorial key is inserted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Tutorial Walkthrough",
    description:
      "Solve the four opening Head challenges, finish the key-cutter route, and fix a drawbridge key that fits but does not open the bridge.",
    images: [imageUrls[5]],
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
          name: "Tutorial Walkthrough",
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
        "Big Walk Tutorial Walkthrough: Four Heads, Glass Enclosure, Symbol Room, Green Switches, Key Cutters, and Drawbridge",
      description:
        "This Big Walk tutorial walkthrough explains how to find the four-slot beach receiver, collect the glass-enclosure Head, communicate the blue symbol-room sequence, synchronize the green-building switches, return all four Heads, shape the blank key through four cutter boxes, and open the red drawbridge.",
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
          name: "Big Walk tutorial",
        },
        {
          "@type": "Thing",
          name: "Big Walk four Heads",
        },
        {
          "@type": "Thing",
          name: "Big Walk glass enclosure puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk symbol room",
        },
        {
          "@type": "Thing",
          name: "Big Walk green switches",
        },
        {
          "@type": "Thing",
          name: "Big Walk blank key",
        },
        {
          "@type": "Thing",
          name: "Big Walk key cutters",
        },
        {
          "@type": "Thing",
          name: "Big Walk drawbridge",
        },
        {
          "@type": "Thing",
          name: "Big Walk achievement",
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
    id: "find-head-receiver",
    label: "Find the four-slot receiver",
  },
  {
    id: "glass-head",
    label: "Glass-enclosure Head",
  },
  {
    id: "symbol-room",
    label: "Blue symbol room",
  },
  {
    id: "green-switches",
    label: "Green-building switches",
  },
  {
    id: "return-four-heads",
    label: "Return all four Heads",
  },
  {
    id: "cut-blank-key",
    label: "Follow four key cutters",
  },
  {
    id: "open-drawbridge",
    label: "Open the drawbridge",
  },
  {
    id: "stuck",
    label: "Tutorial and bridge fixes",
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
    href: "/big-walk/how-to-unlock-map",
    label: "How to Unlock the Map Room",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
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
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
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
          title="Big Walk Tutorial and Drawbridge Walkthrough"
          description="Find the four opening Heads, solve the glass, symbol and switch rooms, shape the blank key through four cutters, and open the drawbridge."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkTutorialWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}