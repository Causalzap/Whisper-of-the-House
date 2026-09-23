import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenChallengesContent from "@/data/halloween-the-game/challenges.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/challenges`;

const metadataTitle =
  "Halloween: The Game Challenges Guide – All 36 Story Challenges";

const metadataDescription =
  "Complete all 36 Story Challenges in Halloween: The Game, understand Progressive and Passive tracking, and see what changed in Patch 1.0.3.";

const articleDescription =
  "Find all 36 Story Challenges in Halloween: The Game, plus the current Progressive and Passive Challenge rules, Patch 1.0.3 changes, tracking behavior, and the most common reasons progress does not count.";

const imageUrls = [
  `${siteUrl}/images/halloween-the-game/halloween-the-game-lethal-efficiency-the-sequel-challenge.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-chapter-3-returning-home-challenges.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-chapter-5-into-the-shadows-challenges.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "challenge-types",
    label: "Challenge Types",
  },
  {
    id: "patch-1-0-3",
    label: "Patch 1.0.3 Changes",
  },
  {
    id: "all-story-challenges",
    label: "All 36 Story Challenges",
  },
  {
    id: "chapter-4",
    label: "Chapter 4",
  },
  {
    id: "chapter-5",
    label: "Chapter 5",
  },
  {
    id: "progressive-challenges",
    label: "Progressive Challenges",
  },
  {
    id: "passive-after-prestige",
    label: "Passive Challenges After Prestige",
  },
  {
    id: "private-match",
    label: "Private Match",
  },
  {
    id: "why-it-did-not-count",
    label: "Why Challenges Do Not Count",
  },
  {
    id: "before-next-run",
    label: "Before Your Next Run",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "Prologue Challenges",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Main Street Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "The Babysitters Walkthrough",
  },
  {
    href: "/halloween-the-game/prestige-guide",
    label: "Prestige Guide",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1904,
        height: 768,
        alt: "Halloween The Game Chapter 3 Story Challenges screen",
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
          name: "Halloween: The Game",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Challenges Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-09-23",
      datePublished: "2026-09-23",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

export default function HalloweenChallengesPage() {
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
          title="Halloween: The Game Challenges Guide – All 36 Story Challenges"
          description={articleDescription}
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/halloween-the-game"
          breadcrumbBaseLabel="Halloween: The Game"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenChallengesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}