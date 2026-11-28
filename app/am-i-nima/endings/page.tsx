import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AmINimaEndingsContent from "@/data/am-i-nima/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/am-i-nima`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "Am I Nima Endings Guide: All 11 Endings & Dialogue Choices";

const metadataDescription =
  "Explore all 11 Am I Nima endings, compare key words, dialogue choices and story outcomes, and learn the difference between Judgement and Acceptance.";

const articleTitle =
  "Am I Nima Endings: Which Choices Lead to Each Ending?";

const articleDescription =
  "Find the dialogue choices associated with all 11 endings, identify your current story checkpoint, and explore different outcomes.";

const jsonLdDescription =
  "Compare Am I Nima ending branches, including Loyalty, Duplicity, Monster, Martyr, Stasis, Assimilation, Carnage, Fissure, Symbiosis, Judgement, and Acceptance.";

const imageUrls = [
  `${siteUrl}/images/am-i-nima/am-i-nima-loyalty-mirror-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-loyalty-family-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-loyalty-repression-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-duplicity-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-monster-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-martyr-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-stasis-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-assimilation-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-fissure-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-symbiosis-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-carnage-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-judgement-ending-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-acceptance-ending-choice.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "ending-list",
    label: "All 11 Endings & Choices",
  },
  {
    id: "loyalty-ending",
    label: "Loyalty Ending",
  },
  {
    id: "duplicity-ending",
    label: "Duplicity Ending",
  },
  {
    id: "monster-ending",
    label: "Monster Ending",
  },
  {
    id: "martyr-ending",
    label: "Martyr Ending",
  },
  {
    id: "stasis-ending",
    label: "Stasis Ending",
  },
  {
    id: "assimilation-ending",
    label: "Assimilation Ending",
  },
  {
    id: "fissure-ending",
    label: "Fissure Ending",
  },
  {
    id: "symbiosis-ending",
    label: "Symbiosis Ending",
  },
  {
    id: "carnage-ending",
    label: "Carnage Ending",
  },
  {
    id: "final-verdict",
    label: "The Final Verdict",
  },
  {
    id: "judgement-ending",
    label: "Judgement Ending",
  },
  {
    id: "acceptance-ending",
    label: "Acceptance Ending",
  },
  {
    id: "ending-conditions",
    label: "Ending Conditions & Missing Choices",
  },
];

const relatedLinks = [
  {
    href: "/am-i-nima",
    label: "Walkthrough & Guide: Days, Puzzles and Loops",
  },
  {
    href: "/am-i-nima/word-combinations",
    label: "Word Combinations: Recipe Finder & Word List",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endings",
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

export default function AmINimaEndingsPage() {
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
          <AmINimaEndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}