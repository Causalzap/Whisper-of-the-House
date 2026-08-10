import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkPurplePuzzlesContent from "@/data/big-walk/purple-puzzles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/purple-puzzles`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-purple-30-minute-timer.webp`,
  `${siteUrl}/images/big-walk/big-walk-purple-golf-heavy-object.webp`,
  `${siteUrl}/images/big-walk/big-walk-purple-light-number-system.webp`,
  `${siteUrl}/images/big-walk/big-walk-purple-music-box-numbered-items.webp`,
  `${siteUrl}/images/big-walk/big-walk-purple-nine-object-matching.webp`,
  `${siteUrl}/images/big-walk/big-walk-purple-fixed-symbol-room.webp`,
  `${siteUrl}/images/big-walk/big-walk-purple-flagpole-location.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk Purple Puzzles Guide: All 7 Solutions",
  description:
    "Solve all seven Big Walk Purple Puzzles, including the 30-minute timer, Golf Course object, light room, music puzzle, symbols, and Flagpole.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Purple Puzzles: All 7 Solutions",
    description:
      "Complete all seven post-game Purple Puzzles with practical routes for the timer, Golf Course, communication rooms, matching puzzles, and Flagpole.",
    siteName: "Whisper of the House",
    images: [
      {
        url: `${siteUrl}/images/big-walk/big-walk-purple-light-number-system.webp`,
        alt: "Big Walk Purple light puzzle with numbered button positions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Purple Puzzles: All 7 Solutions",
    description:
      "Solve all seven post-game Purple Puzzles and avoid the biggest communication and physical-object mistakes.",
    images: [
      `${siteUrl}/images/big-walk/big-walk-purple-light-number-system.webp`,
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
          name: "Purple Puzzles Guide",
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
      headline: "Big Walk Purple Puzzles Guide: All 7 Solutions",
      description:
        "A complete Big Walk post-game Purple Puzzle guide covering the 30-minute timer, Golf Course heavy-object route, light communication room, music puzzle, nine-object matching, fixed symbol room, and Purple Flagpole.",
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
          name: "Big Walk Purple Puzzles",
        },
        {
          "@type": "Thing",
          name: "Big Walk post-game puzzles",
        },
        {
          "@type": "Thing",
          name: "Big Walk 30-minute puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk Purple Flagpole",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Game progression",
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
    id: "when-purple-puzzles-unlock",
    label: "When Purple Puzzles unlock",
  },
  {
    id: "purple-30-minute-puzzle",
    label: "30-minute timer",
  },
  {
    id: "purple-golf-heavy-object-puzzle",
    label: "Golf Course object",
  },
  {
    id: "purple-light-puzzle",
    label: "Light communication puzzle",
  },
  {
    id: "purple-music-box-puzzle",
    label: "Music puzzle",
  },
  {
    id: "purple-nine-object-matching-puzzle",
    label: "Nine-object matching",
  },
  {
    id: "purple-fixed-number-symbol-puzzle",
    label: "Number and symbol room",
  },
  {
    id: "purple-flagpole-puzzle",
    label: "Purple Flagpole",
  },
  {
    id: "purple-puzzles-communication-strategy",
    label: "Communication strategy",
  },
  {
    id: "purple-puzzles-stuck",
    label: "Purple Puzzle fixes",
  },
  {
    id: "after-seven-purple-puzzles",
    label: "After all seven",
  },
  {
    id: "purple-puzzles-takeaway",
    label: "Final strategy",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and Big Game Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
  {
    href: "/big-walk/black-tower",
    label: "Black Tower and Black Key Guide",
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
          title="Big Walk Purple Puzzles Guide"
          description="Solve all seven post-game Purple Puzzles with a faster cleanup order, practical communication systems, and fixes for the hardest physical challenges."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkPurplePuzzlesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}