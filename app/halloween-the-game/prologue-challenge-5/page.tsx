import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenPrologueChallenge5Content from "@/data/halloween-the-game/prologue-challenge-5.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/prologue-challenge-5`;

const metadataTitle =
  "Halloween: The Game Prologue Challenge 5 – No Alert Route";

const metadataDescription =
  "Beat Prologue Challenge 5 without alerting any Orderlies. Follow the safe patrol route, know when to walk or run, and when to restart.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-5-complete.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-5-ambulance-wait.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-5-stuck-orderly.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-5-power-box-flashlight.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-challenge-5-final-motor-window.webp`,
];

const toc = [
  {
    id: "opening-route",
    label: "Opening route and ambulance wait",
  },
  {
    id: "restart-check",
    label: "When to restart",
  },
  {
    id: "power-box-patrol",
    label: "Power box patrol timing",
  },
  {
    id: "final-approach",
    label: "Final approach",
  },
  {
    id: "confirm-completion",
    label: "Confirm Challenge 5 completion",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
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
    title: "Halloween: The Game Prologue Challenge 5 No-Alert Route",
    description:
      "Escape Smith's Grove without alerting any Orderlies by reading the opening patrols, using the ambulance wait, and moving only when the route is clear.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Prologue Challenge 5 completed without alerting any Orderlies in Halloween The Game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Prologue Challenge 5",
    description:
      "Follow the no-alert Smith's Grove route with the patrol cues, walk and sprint windows, and early restart check that matter.",
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
          item: `${hubUrl}/prologue-challenges`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Prologue Challenge 5",
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
        "Halloween: The Game Prologue Challenge 5 — Escape Without Alerting Any Orderlies",
      description:
        "A route guide for Halloween: The Game Prologue Challenge 5, which requires Michael Myers to complete Escape From Smith's Grove without alerting any Orderlies. It covers the opening patrol, the ambulance waiting point, the two-guard movement window, the stuck-orderly restart signal, the flashlight patrol near the power box, where walking is safer than running, when the route opens for a sprint, the final motor interaction, and how to confirm the challenge completed after the chapter resolves.",
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
          name: "Halloween: The Game Prologue Challenge 5",
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
          name: "Complete the chapter without alerting any Orderlies",
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
          title="Escape Smith's Grove Without Alerting Any Orderlies"
          description="Challenge 5 is a patrol-reading run. Wait out the opening guards, move on their sightlines instead of rushing the map, and restart early when the route is already out of sync."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenPrologueChallenge5Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}