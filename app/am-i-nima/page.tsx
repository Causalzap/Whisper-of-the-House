import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AmINimaContent from "@/data/am-i-nima/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/am-i-nima`;
const pageUrl = hubUrl;

const metadataTitle =
  "Am I Nima Walkthrough & Guide: Days, Puzzles, Endings & Words";

const metadataDescription =
  "Follow Am I Nima through Days 1–5, Mom's tests, the POND locker code, hidden passages, bunker exploration, word combinations, endings, and later loops.";

const articleTitle =
  "Am I Nima Walkthrough & Guide: What Should You Do Next?";

const articleDescription =
  "Progress through Mom's tests, find the POND locker code, explore hidden areas, discover different ending choices, and learn how words return in later loops.";

const jsonLdDescription =
  "An Am I Nima walkthrough covering the opening mechanics, Days 1–5 progression, object tests, bedroom locker code, hidden passages, bunker exploration, and word recovery between loops.";

const imageUrls = [
  `${siteUrl}/images/am-i-nima/am-i-nima-locker-code-pond.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-bathroom-hidden-passage.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-basement-hidden-hatch.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-bunker-keypad-door.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-loop-word-carryover.webp`,
];

const heroImage = imageUrls[4];

const toc = [
  {
    id: "guide-overview",
    label: "Which Guide Do You Need?",
  },
  {
    id: "getting-started",
    label: "Getting Started",
  },
  {
    id: "first-loop-walkthrough",
    label: "Days 1–5 Progression",
  },
  {
    id: "day-1",
    label: "Day 1: Opening & Bedroom",
  },
  {
    id: "day-2",
    label: "Day 2: Bathroom & Object Tests",
  },
  {
    id: "day-3",
    label: "Day 3: Drawings & Memories",
  },
  {
    id: "day-4",
    label: "Day 4: Whiskers & Boiler Room",
  },
  {
    id: "day-5",
    label: "Day 5: Identity Decisions",
  },
  {
    id: "room-exploration",
    label: "Room Exploration",
  },
  {
    id: "puzzle-solutions",
    label: "Puzzle Solutions",
  },
  {
    id: "locker-code",
    label: "POND Locker Code",
  },
  {
    id: "bunker",
    label: "Hidden Passage & Bunker",
  },
  {
    id: "second-loop",
    label: "Second Loop & Word Carryover",
  },
  {
    id: "progression-problems",
    label: "What to Do If You Are Stuck",
  },
  {
    id: "after-first-ending",
    label: "After Your First Ending",
  },
];

const relatedLinks = [
  {
    href: "/am-i-nima/word-combinations",
    label: "Word Combinations: Recipe Finder & Collection Tracker",
  },
  {
    href: "/am-i-nima/endings",
    label: "All 11 Endings: Choices & Outcomes",
  },
  {
    href: "/am-i-nima/achievements",
    label: "Achievements: All 18 & Interactive Checklist",
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: heroImage,
      },
    ],
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
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
          name: "Am I Nima",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: jsonLdDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      dateModified: "2026-11-28",
      image: imageUrls,
    },
  ],
};

export default function AmINimaPage() {
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Am I Nima"
          gameHref="/am-i-nima"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AmINimaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}