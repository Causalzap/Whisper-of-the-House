import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeBathroomPuzzleContent from "@/data/servant-of-the-lake/bathroom-puzzle.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/bathroom-puzzle`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-bathroom-category-puzzle.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-bathroom-sliding-puzzle.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-bathroom-maggot.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-bathroom-mouse-comb.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-bathroom-bubble-puzzle.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-bathroom-281-code.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-alexandra-bronze-time-piece.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Bathroom Puzzle: 281 & Time Piece",
  description:
    "Solve the Bathroom puzzle from Soap and Scissors through the Maggot, mouse, Comb, bubbles, code 281, and Alexandra's Bronze Time Piece.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Bathroom Puzzle: 281 & Time Piece",
    description:
      "Solve Alexandra's Bathroom chain: Scissors, Soap, Maggot, mouse, Comb, bubbles, code 281, and the Bronze Time Piece.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[5],
        width: 1280,
        height: 720,
        alt: "281 code entered into the Bathroom lock in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Bathroom Puzzle: 281 & Time Piece",
    description:
      "Scissors, Soap, Maggot, mouse, Comb, bubbles, code 281, and Alexandra's Bronze Time Piece.",
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
          name: "Servant of the Lake Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bathroom Puzzle",
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
        "Servant of the Lake Bathroom Puzzle Guide: 281, Maggot, Comb and Bronze Time Piece",
      description:
        "A complete Servant of the Lake Helping with Bathing solution covering the Bathroom Key handoff, category puzzle, Scissors, sliding puzzle, Soap, Alexandra's stitches, Maggot, mouse, Comb, directional bubble puzzle, code 281, pendant, and Bronze Time Piece.",
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
          name: "Helping with Bathing",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Bathroom puzzle",
        },
        {
          "@type": "Thing",
          name: "Bathroom code 281",
        },
        {
          "@type": "Thing",
          name: "Bathroom category puzzle",
        },
        {
          "@type": "Thing",
          name: "Bathroom sliding puzzle",
        },
        {
          "@type": "Thing",
          name: "Alexandra's Maggot",
        },
        {
          "@type": "Thing",
          name: "Bathroom Comb",
        },
        {
          "@type": "Thing",
          name: "Bathroom bubble puzzle",
        },
        {
          "@type": "Thing",
          name: "Bronze Time Piece",
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
    id: "unlock-bathroom",
    label: "Unlock the Bathroom",
  },
  {
    id: "fill-bath-first",
    label: "Fill the bath",
  },
  {
    id: "category-puzzle",
    label: "Category puzzle",
  },
  {
    id: "sliding-puzzle",
    label: "Sliding puzzle",
  },
  {
    id: "use-soap",
    label: "Use the Soap",
  },
  {
    id: "scissors-maggot",
    label: "Scissors and Maggot",
  },
  {
    id: "maggot-mouse-comb",
    label: "Get the Comb",
  },
  {
    id: "bubble-puzzle",
    label: "Bubble puzzle",
  },
  {
    id: "bathroom-code-281",
    label: "Bathroom code 281",
  },
  {
    id: "bronze-time-piece",
    label: "Bronze Time Piece",
  },
  {
    id: "bathroom-stuck",
    label: "Bathroom puzzle stuck",
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
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "Puzzle Solutions & Codes",
  },
  {
    href: "/servant-of-the-lake/laundry-puzzle",
    label: "Laundry Puzzle & Bathroom Key",
  },
];

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
          title="Servant of the Lake Bathroom Puzzle Guide"
          description="I enter with the Bathroom Key, solve the Scissors and Soap puzzles, follow the Maggot-to-Comb chain, finish the bubbles, use 281, and leave only after taking Alexandra's Bronze Time Piece."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeBathroomPuzzleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}