import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AmINimaWordCombinationsContent from "@/data/am-i-nima/word-combinations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/am-i-nima`;
const pageUrl = `${hubUrl}/word-combinations`;

const metadataTitle =
  "Am I Nima Word Combinations Guide: Recipe Finder & Word List";

const metadataDescription =
  "Find Am I Nima word combinations, search recipes by ingredient or result, discover Memory and Tomato Boy combinations, and track your collected words.";

const articleTitle =
  "Am I Nima Word Combinations: How Do You Find and Unlock Words?";

const articleDescription =
  "Search word combinations, find missing ingredients, discover memories and Tomato Boy characters, and track your word collection.";

const jsonLdDescription =
  "An Am I Nima word combinations guide with an interactive recipe finder, word collection tracker, alternative recipes, word locations, Memory combinations, and Tomato Boy discoveries.";

const imageUrls = [
  `${siteUrl}/images/am-i-nima/am-i-nima-word-history-recipes.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-fossil-book-location.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-pomegranate-prince.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "recipe-finder",
    label: "Word Combination Finder",
  },
  {
    id: "how-to-combine-words",
    label: "How to Combine Words",
  },
  {
    id: "word-combinations",
    label: "Word Combinations List",
  },
  {
    id: "word-locations",
    label: "Word Locations & Unlocks",
  },
  {
    id: "word-list",
    label: "Word List & Collection Tracker",
  },
  {
    id: "memory-combinations",
    label: "Memory Combinations",
  },
  {
    id: "tomato-boy-combinations",
    label: "Tomato Boy Combinations",
  },
  {
    id: "combination-problems",
    label: "Combination Problems",
  },
];

const relatedLinks = [
  {
    href: "/am-i-nima",
    label: "Walkthrough & Guide: Days, Puzzles and Loops",
  },
  {
    href: "/am-i-nima/endings",
    label: "Endings Guide: Choices, Routes & Outcomes",
  },
  {
    href: "/am-i-nima/achievements",
    label: "Achievements Guide & Interactive Checklist",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Word Combinations",
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

export default function AmINimaWordCombinationsPage() {
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
          <AmINimaWordCombinationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}