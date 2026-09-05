import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenPrologueChallengesContent from "@/data/halloween-the-game/prologue-challenges.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/prologue-challenges`;

const metadataTitle =
  "Halloween: The Game Prologue Challenges – All 6 Guide";

const metadataDescription =
  "Complete all 6 Prologue challenges at Smith's Grove with the best run order, exact kill conditions, and the mistakes that force another attempt.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-all-challenges-complete.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-3-telephone-pole.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-4-throw-orderly.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-6-orderly-12.webp`,
];

const toc = [
  {
    id: "best-run-order",
    label: "Best run order for all 6 challenges",
  },
  {
    id: "challenges-1-to-4",
    label: "Challenges 1–4",
  },
  {
    id: "challenge-5",
    label: "Challenge 5 — No alerts",
  },
  {
    id: "challenge-6",
    label: "Challenge 6 — All 12 orderlies",
  },
  {
    id: "finish-the-chapter",
    label: "When challenge progress saves",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/prologue-challenge-5",
    label: "Prologue Challenge 5 No-Alert Route",
  },
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Walkthrough",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Chapter 2 Main Street Challenges",
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
    title: "Halloween: The Game Prologue Challenges – All 6",
    description:
      "Clear the six Smith's Grove challenges with a two-run approach, including the environmental kills, 12-orderly sweep, and separate no-alert attempt.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "All six Prologue challenges completed in Halloween The Game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Prologue Challenges – All 6",
    description:
      "Use one clean run for Challenge 5 and combine the other Smith's Grove objectives into a combat-focused replay.",
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
          name: "Halloween: The Game Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prologue Challenges",
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
        "Halloween: The Game Prologue Challenges — All 6 Smith's Grove Challenges",
      description:
        "A Smith's Grove Prologue challenge guide for Halloween: The Game covering all six optional objectives and the most efficient way to split them across replays. It explains how to make an orderly flee, complete three bare-hand executions, use the telephone pole environmental execution, throw an orderly to his death, separate the no-alert Challenge 5 into its own clean attempt, account for all 12 orderlies in Challenge 6, and finish the chapter so completed challenge progress is saved.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-05",
      dateModified: "2026-09-05",
      articleSection: "Halloween: The Game Challenges",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Prologue challenges",
        },
        {
          "@type": "Thing",
          name: "Escape From Smith's Grove",
        },
        {
          "@type": "Thing",
          name: "Smith's Grove Sanitarium",
        },
        {
          "@type": "Thing",
          name: "Prologue Challenge 5",
        },
        {
          "@type": "Thing",
          name: "Prologue Challenge 6",
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
          title="Clear All 6 Smith's Grove Prologue Challenges"
          description="Use one clean attempt for the no-alert challenge, combine the combat objectives on another run, and know which mistakes are worth restarting before you lose more time."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenPrologueChallengesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}