import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenWalkthroughContent from "@/data/halloween-the-game/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Halloween: The Game Walkthrough – All 6 Story Chapters";

const metadataDescription =
  "Complete Halloween: The Game's story from Smith's Grove through Into the Shadows, with the main route for every chapter and when to skip challenges.";

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
    label: "Story chapter order",
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
    label: "How to use chapter replays",
  },
  {
    id: "route-check",
    label: "What to check when you feel lost",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Main Street Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "The Babysitters Walkthrough",
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
    title: "Halloween: The Game Complete Story Walkthrough",
    description:
      "Follow Michael from Smith's Grove through all five story chapters, with the required route, major navigation stops, and the point where each chapter is ready to move on.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game story mode showing the Prologue and five chapters",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Complete Walkthrough",
    description:
      "Follow the main story route through the Prologue and all five chapters without turning the first clear into a full challenge run.",
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
          name: "Complete Walkthrough",
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
        "Halloween: The Game Complete Walkthrough — Prologue Through Chapter 5",
      description:
        "A complete single-player walkthrough for Halloween: The Game covering Escape From Smith's Grove, The Road To Haddonfield, Main Street, Returning Home, The Babysitters, and Into The Shadows. The guide follows the required story route, explains where optional targets can pull Michael away from the current objective, covers the Myers house and Wallace House progression points, and shows when to stop challenge hunting and take the final exit.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      articleSection: "Halloween: The Game Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
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
          title="Complete the Story Without Getting Lost in Optional Challenges"
          description="Follow Michael from Smith's Grove to the final escape, with the route changes that matter, the places where optional targets pull you off course, and the point where each chapter is ready to move on."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
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