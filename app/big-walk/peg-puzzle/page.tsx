import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkPegPuzzleContent from "@/data/big-walk/peg-puzzle.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/peg-puzzle`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-peg-puzzle-partial-layout.webp`,
  `${siteUrl}/images/big-walk/big-walk-peg-puzzle-landscape-clues.webp`,
  `${siteUrl}/images/big-walk/big-walk-peg-puzzle-bridge-pieces.webp`,
  `${siteUrl}/images/big-walk/big-walk-peg-puzzle-last-piece-rocks.webp`,
  `${siteUrl}/images/big-walk/big-walk-peg-puzzle-solved.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk Peg Puzzle Solution: Colored Pegboard Guide",
  description:
    "Find every colored peg, rebuild the surrounding landscape on the pegboard, fix missing-piece mistakes, and complete the Peg Puzzle in Big Walk.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Peg Puzzle Solution",
    description:
      "Find the colored pieces, use the surrounding terrain as the answer key, rebuild the pegboard, and fix a Peg Puzzle that will not validate.",
    siteName: "Whisper of the House",
    images: [
      {
        url: `${siteUrl}/images/big-walk/big-walk-peg-puzzle-solved.webp`,
        alt: "Completed colored Peg Puzzle board in Big Walk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Peg Puzzle Solution",
    description:
      "Use the surrounding landscape to place every colored peg and complete the Big Walk Peg Puzzle.",
    images: [
      `${siteUrl}/images/big-walk/big-walk-peg-puzzle-solved.webp`,
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
          name: "Peg Puzzle Solution",
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
      headline: "Big Walk Peg Puzzle Solution: Colored Pegboard Guide",
      description:
        "A step-by-step Big Walk Peg Puzzle guide covering the colored pieces, landscape-mapping rule, missing-piece search, pegboard layout, validation, and common mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Peg Puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk colored pegboard",
        },
        {
          "@type": "Thing",
          name: "Big Walk colored pegs",
        },
        {
          "@type": "Thing",
          name: "Big Walk puzzle solution",
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
    id: "where-to-find-big-walk-peg-puzzle",
    label: "Find the Peg Puzzle",
  },
  {
    id: "what-colored-pegs-mean",
    label: "What the colors mean",
  },
  {
    id: "collect-all-colored-pegs-first",
    label: "Collect every piece",
  },
  {
    id: "how-to-solve-big-walk-pegboard",
    label: "Arrange the pegboard",
  },
  {
    id: "last-missing-peg",
    label: "Find the last missing peg",
  },
  {
    id: "verify-peg-puzzle-solution",
    label: "Verify the solution",
  },
  {
    id: "peg-puzzle-not-working",
    label: "Peg Puzzle fixes",
  },
  {
    id: "big-walk-peg-puzzle-faq",
    label: "FAQ",
  },
  {
    id: "peg-puzzle-takeaway",
    label: "Final route",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/4166-1899-puzzle",
    label: "4166 1899 Puzzle Solution",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings Guide",
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
          title="Big Walk Peg Puzzle Solution"
          description="Find every colored peg, read the surrounding terrain as the answer key, rebuild the board, and fix the most common missing-piece mistakes."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkPegPuzzleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}