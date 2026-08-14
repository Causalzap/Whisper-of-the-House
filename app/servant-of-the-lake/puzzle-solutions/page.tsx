import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakePuzzleSolutionsContent from "@/data/servant-of-the-lake/puzzle-solutions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/puzzle-solutions`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-day-1-favorite-flowers.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-day-1-flag-puzzle.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-cellar-time-piece-symbols.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-cellar-clock-times.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-dinner-soup-recipe.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-dinner-main-course-rules.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Puzzle Solutions: Codes & Answers",
  description:
    "Solve Servant of the Lake puzzles with 315, 281, 2451, Day 1 flowers, William, floors, Cellar clocks, Alchemy, and Dinner rules.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Puzzle Solutions & Answers",
    description:
      "Quick answers for Day 1–3 puzzles, including Coffee, Laundry, Bathroom, William, Cellar clocks, Alchemy, and Dinner rules.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "Day 1 flag puzzle solution in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Puzzle Solutions & Answers",
    description:
      "Codes and solutions for Day 1–3 puzzles, William, Cellar, Alchemy, and Dinner.",
    images: [imageUrls[1]],
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
          name: "Servant of the Lake Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Puzzle Solutions",
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
        "Servant of the Lake Puzzle Solutions: Day 1–3 Codes, Cellar, Alchemy and Dinner",
      description:
        "A practical Servant of the Lake puzzle guide covering Day 1 breakfast, flowers and flag logic, the 315 Coffee code, William's room, Cleaning the Floors, the 0–6 Laundry order, Bathroom code 281, Cellar Time Pieces and clock settings, Alchemy code 2451, and the Day 3 Dinner rules.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake puzzle solutions",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake codes",
        },
        {
          "@type": "Thing",
          name: "Preparing Breakfast",
        },
        {
          "@type": "Thing",
          name: "Favorite Flowers puzzle",
        },
        {
          "@type": "Thing",
          name: "Flag puzzle",
        },
        {
          "@type": "Thing",
          name: "Preparing Coffee code 315",
        },
        {
          "@type": "Thing",
          name: "Waking up William",
        },
        {
          "@type": "Thing",
          name: "Cleaning the Floors",
        },
        {
          "@type": "Thing",
          name: "Laundry clothes order",
        },
        {
          "@type": "Thing",
          name: "Bathroom code 281",
        },
        {
          "@type": "Thing",
          name: "Cellar Time Pieces",
        },
        {
          "@type": "Thing",
          name: "Cellar clock puzzle",
        },
        {
          "@type": "Thing",
          name: "Alchemy code 2451",
        },
        {
          "@type": "Thing",
          name: "Preparing Dinner",
        },
        {
          "@type": "Thing",
          name: "Serving Dinner",
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
    id: "how-i-use-puzzle-solutions",
    label: "Walkthrough or puzzle answer?",
  },
  {
    id: "day-1-puzzles",
    label: "Day 1 puzzle solutions",
  },
  {
    id: "preparing-breakfast",
    label: "Preparing Breakfast",
  },
  {
    id: "favorite-flowers",
    label: "Favorite Flowers",
  },
  {
    id: "flag-puzzle",
    label: "Flag puzzle",
  },
  {
    id: "day-2-puzzles",
    label: "Day 2 puzzle solutions",
  },
  {
    id: "coffee-315",
    label: "Coffee code 315",
  },
  {
    id: "waking-william",
    label: "Waking up William",
  },
  {
    id: "cleaning-floors",
    label: "Cleaning the Floors",
  },
  {
    id: "laundry-order",
    label: "Laundry order 0–6",
  },
  {
    id: "bathroom-281",
    label: "Bathroom code 281",
  },
  {
    id: "cellar-time-pieces",
    label: "Cellar Time Pieces",
  },
  {
    id: "cellar-tools",
    label: "Cellar tool puzzle",
  },
  {
    id: "cellar-clocks",
    label: "Cellar clock times",
  },
  {
    id: "day-3-puzzles",
    label: "Day 3 puzzle solutions",
  },
  {
    id: "alchemy-2451",
    label: "Alchemy code 2451",
  },
  {
    id: "preparing-dinner",
    label: "Preparing Dinner",
  },
  {
    id: "serving-dinner",
    label: "Serving Dinner",
  },
  {
    id: "post-game-puzzles",
    label: "Post-game puzzles",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/walkthrough",
    label: "Servant of the Lake Walkthrough",
  },
  {
    href: "/servant-of-the-lake/coffee-puzzle",
    label: "Coffee Puzzle & Code 315",
  },
  {
    href: "/servant-of-the-lake/laundry-puzzle",
    label: "Laundry Puzzle & Clothes Order",
  },
  {
    href: "/servant-of-the-lake/waking-up-aldous",
    label: "Waking Up Aldous Guide",
  },
  {
    href: "/servant-of-the-lake/bathroom-puzzle",
    label: "Bathroom Puzzle & Code 281",
  },
  {
    href: "/servant-of-the-lake/alchemy-puzzle",
    label: "Alchemy Puzzle & Code 2451",
  },
  {
    href: "/servant-of-the-lake/secret-ending",
    label: "Secret Ending Guide",
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
          title="Servant of the Lake Puzzle Solutions"
          description="I use this as my quick-answer route for the puzzles that actually stop progression: Day 1 visual logic, William and the floors, fixed codes, the Cellar, Alchemy, and the Day 3 Dinner rules."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakePuzzleSolutionsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}