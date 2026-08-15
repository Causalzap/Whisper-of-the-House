import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalk41661899PuzzleContent from "@/data/big-walk/4166-1899-puzzle.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/4166-1899-puzzle`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-4166-1899-coordinate-board.webp`,
  `${siteUrl}/images/big-walk/big-walk-4166-map-room-map.webp`,
  `${siteUrl}/images/big-walk/big-walk-4166-route-green-structure.webp`,
  `${siteUrl}/images/big-walk/big-walk-4166-hidden-button-camo-box.webp`,
  `${siteUrl}/images/big-walk/big-walk-4166-glass-box-red-piece.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk 4166 1899 Puzzle Solution & Camo Button Location",
  description:
    "4166 and 1899 are coordinates, not a code. Read them as 41.66/18.99, find the hidden camo button, and leave one player at the glass box.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk 4166 1899 Puzzle Solution",
    description:
      "Read 4166 and 1899 as 41.66/18.99, follow the route to the hidden camo button, and keep one player beside the glass box.",
    siteName: "Whisper of the House",
    images: [
      {
        url: `${siteUrl}/images/big-walk/big-walk-4166-1899-coordinate-board.webp`,
        alt: "Big Walk puzzle structure showing 4166 and 1899",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Big Walk 4166 1899 Puzzle Solution",
  description:
    "4166 / 1899 means 41.66 / 18.99. Find the hidden camo button and leave one player at the glass box to collect the red piece.",
  images: [
      `${siteUrl}/images/big-walk/big-walk-4166-1899-coordinate-board.webp`,
    ],
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
          name: "4166 1899 Puzzle Solution",
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
      headline: "Big Walk 4166 1899 Puzzle Solution and Camo Button Location",
      description:
      "A complete solution for the Big Walk 4166 1899 coordinate puzzle, including how to read 4166 and 1899 as 41.66 and 18.99, where to find the hidden camouflage button box, and how two players open the distant glass box.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk 4166 1899 puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk 41.66 18.99 coordinates",
        },
        {
          "@type": "Thing",
          name: "Big Walk camo button",
        },
        {
          "@type": "Thing",
          name: "Big Walk red piece",
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
    id: "what-do-4166-1899-mean",
    label: "What 4166 and 1899 mean",
  },
  {
    id: "what-you-need-before-4166-puzzle",
    label: "What you need first",
  },
  {
    id: "how-to-find-4166-1899-location",
    label: "Find the coordinate location",
  },
  {
    id: "where-is-4166-hidden-button",
    label: "4166 / 1899 camo button",
  },
  {
    id: "how-two-players-solve-4166-1899",
    label: "Split the two-player roles",
  },
  {
    id: "open-glass-box-get-red-blob",
    label: "Open the glass box",
  },
  {
    id: "4166-puzzle-common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "4166-1899-faq",
    label: "FAQ",
  },
  {
    id: "4166-1899-takeaway",
    label: "Final route",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/peg-puzzle",
    label: "Big Walk Peg Puzzle Solution",
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
          title="Big Walk 4166 / 1899 Puzzle Solution"
          description="I read 4166 and 1899 as 41.66 / 18.99, find the hidden camo button, and leave one player at the glass box for the remote trigger."          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalk41661899PuzzleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}