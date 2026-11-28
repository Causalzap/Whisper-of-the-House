import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AmINimaAchievementsContent from "@/data/am-i-nima/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/am-i-nima`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Am I Nima Achievements Guide: All 18 & Interactive Checklist";

const metadataDescription =
  "Track all 18 Am I Nima achievements, save Whiskers, recover memories, explore hidden endings, and work toward Human Dictionary, Bunker, and Tomato Kingdom.";

const articleTitle =
  "Am I Nima Achievements: How Do You Unlock and Track Them?";

const articleDescription =
  "Track your achievements, rescue Whiskers, complete collection goals, recover memories, and identify which ending achievements you still need.";

const jsonLdDescription =
  "An Am I Nima achievement guide with an interactive checklist for all 18 achievements, including Free Whiskers rescue steps, word and character collection goals, hidden endings, and exploration requirements.";

const imageUrls = [
  `${siteUrl}/images/am-i-nima/am-i-nima-whiskers-surgery-choice.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-whiskers-wall-hole.webp`,
  `${siteUrl}/images/am-i-nima/am-i-nima-whiskers-rescue-result.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-checklist",
    label: "Achievement Checklist",
  },
  {
    id: "word-collection",
    label: "Nima 101 & Human Dictionary",
  },
  {
    id: "memories-achievement",
    label: "Memories Achievement",
  },
  {
    id: "tomato-kingdom",
    label: "Tomato Kingdom",
  },
  {
    id: "free-whiskers",
    label: "Free Whiskers",
  },
  {
    id: "bunker-achievement",
    label: "Bunker Achievement",
  },
  {
    id: "ending-achievements",
    label: "Ending Achievements",
  },
  {
    id: "first-loop",
    label: "First Loop Achievement",
  },
  {
    id: "achievement-problems",
    label: "Achievement Problems",
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
    href: "/am-i-nima/endings",
    label: "All 11 Endings: Choices & Outcomes",
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
          name: "Achievements",
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

export default function AmINimaAchievementsPage() {
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
          <AmINimaAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}