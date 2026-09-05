import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenWalkthroughContent from "@/data/halloween-the-game/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Halloween: The Game Story Mode Walkthrough – All 6 Chapters";

const metadataDescription =
  "Finish Halloween: The Game Story Mode from Smith's Grove through Chapter 5, with the required route, key objectives, and when to leave challenges for replay.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-story-six-chapters.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-prologue-lower-gates.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-road-to-haddonfield-rabbit-in-red.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-main-street-mask.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-returning-home-childhood-flashback.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-the-babysitters-wallace-house.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-into-the-shadows-avoiding-detainment.webp`,
];

const toc = [
  {
    id: "story-order",
    label: "Story Mode chapter order",
  },
  {
    id: "prologue",
    label: "Prologue — Smith's Grove",
  },
  {
    id: "road-to-haddonfield",
    label: "Chapter 1 — Road to Haddonfield",
  },
  {
    id: "main-street",
    label: "Chapter 2 — Main Street",
  },
  {
    id: "returning-home",
    label: "Chapter 3 — Returning Home",
  },
  {
    id: "babysitters",
    label: "Chapter 4 — The Babysitters",
  },
  {
    id: "into-the-shadows",
    label: "Chapter 5 — Into the Shadows",
  },
  {
    id: "final-exit",
    label: "When to take the final exit",
  },
  {
    id: "chapter-replays",
    label: "What to save for chapter replay",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Chapter 2 Main Street Challenges",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "Chapter 4 Babysitters Challenges",
  },
  {
    href: "/halloween-the-game/endings",
    label: "All Endings: Railroad, Cornfield & Sewer",
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
    title: "Halloween: The Game Story Mode Walkthrough",
    description:
      "Follow Michael through the Smith's Grove Prologue and five story chapters, with the objective changes that tell you when to stop exploring and move on.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Story Mode showing the Prologue and five chapters",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Story Mode Walkthrough",
    description:
      "Clear the Prologue and all five chapters by following the required story route instead of losing time on optional challenge states.",
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
          name: "Story Mode Walkthrough",
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
        "Halloween: The Game Story Mode Walkthrough — Prologue Through Chapter 5",
      description:
        "A complete Story Mode walkthrough for Halloween: The Game covering the Smith's Grove Prologue and all five chapters: The Road To Haddonfield, Main Street, Returning Home, The Babysitters, and Into The Shadows. It follows the required campaign route, shows when the HUD has moved Michael to a new objective, explains the Myers House and Wallace House progression points, covers the Tier 3 recovery and police pressure in Chapter 5, and identifies when optional challenges, extra targets, collectibles, and alternate exits are better left for chapter replay.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-05",
      articleSection: "Halloween: The Game Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Story Mode",
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game walkthrough",
        },
        {
          "@type": "Thing",
          name: "Escape From Smith's Grove",
        },
        {
          "@type": "Thing",
          name: "The Road To Haddonfield",
        },
        {
          "@type": "Thing",
          name: "Main Street",
        },
        {
          "@type": "Thing",
          name: "Returning Home",
        },
        {
          "@type": "Thing",
          name: "The Babysitters",
        },
        {
          "@type": "Thing",
          name: "Into The Shadows",
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
          title="Halloween: The Game Story Walkthrough – Prologue to Final Escape"
          description="Follow the required objective through all six Story Mode stages, know which target actually advances each chapter, and leave optional challenge cleanup for the replay where it belongs."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}