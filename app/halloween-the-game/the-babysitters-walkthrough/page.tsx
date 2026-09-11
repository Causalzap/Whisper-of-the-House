import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheBabysittersContent from "@/data/halloween-the-game/the-babysitters-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/the-babysitters-walkthrough`;

const metadataTitle =
  "Halloween: The Game Chapter 4 Walkthrough & All 6 Challenges";

const metadataDescription =
  "Complete Halloween: The Game Chapter 4: The Babysitters, with the Wallace House route plus all 6 challenge conditions for Annie, Bob, Lynda and the film plot.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-the-babysitters-challenges.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-the-babysitters-wallace-house.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-annie-car-kill.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-bob-lynda-stalk.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-michael-sheet-disguise.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-lynda-telephone-kill.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-babysitters-bedroom-setup.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-babysitters-laurie-chase.webp`,
];

const toc = [
  {
    id: "babysitters-sequence",
    label: "Chapter 4 route & challenge order",
  },
  {
    id: "annie",
    label: "Annie's car challenge",
  },
  {
    id: "bob-lynda-stalk",
    label: "Stalk Bob and Lynda",
  },
  {
    id: "bloodthirsty",
    label: "Bloodthirsty execution",
  },
  {
    id: "bob-wall",
    label: "Bob's kitchen wall",
  },
  {
    id: "sheet",
    label: "Get and keep the Sheet",
  },
  {
    id: "lynda-telephone",
    label: "Lynda telephone kill",
  },
  {
    id: "stage-house",
    label: "Stage the Wallace House",
  },
  {
    id: "film-plot",
    label: "Match the film's plot",
  },
  {
    id: "laurie",
    label: "Laurie's final chase",
  },
  {
    id: "replay-decisions",
    label: "When to restart or finish",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Chapter 2 Main Street Walkthrough",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Prestige Guide",
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
    title: "Halloween: The Game Chapter 4: The Babysitters Walkthrough",
    description:
      "Follow the Wallace House story route and complete all six Chapter 4 challenges without breaking Annie, Bob, Lynda, or Laurie's required scenes.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Chapter 4 The Babysitters challenge list showing all six challenges",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Chapter 4 Walkthrough",
    description:
      "Follow The Babysitters story route and complete all six Chapter 4 challenges, including Annie's car, Bob's wall, Lynda's telephone kill, and the film plot.",
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
          name: "Chapter 4: The Babysitters Walkthrough",
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
        "Halloween: The Game Chapter 4: The Babysitters Walkthrough and All 6 Challenges",
      description:
        "A complete Chapter 4 walkthrough for The Babysitters in Halloween: The Game, covering the Wallace House story route and all six challenge conditions: Annie's car kill, stalking Bob and Lynda together, Bloodthirsty, Bob's kitchen wall execution, the Sheet and Lynda telephone kill, the upstairs staging sequence, the film-plot challenge, and Laurie's final chase.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-11",
      articleSection: "Halloween: The Game Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Chapter 4",
        },
        {
          "@type": "Thing",
          name: "The Babysitters",
        },
        {
          "@type": "Thing",
          name: "The Babysitters walkthrough",
        },
        {
          "@type": "Thing",
          name: "Chapter 4 challenges",
        },
        {
          "@type": "Thing",
          name: "Wallace House",
        },
        {
          "@type": "Thing",
          name: "Annie car challenge",
        },
        {
          "@type": "Thing",
          name: "Bob and Lynda stalking challenge",
        },
        {
          "@type": "Thing",
          name: "Bloodthirsty execution",
        },
        {
          "@type": "Thing",
          name: "Bob kitchen wall challenge",
        },
        {
          "@type": "Thing",
          name: "Sheet disguise",
        },
        {
          "@type": "Thing",
          name: "Lynda telephone challenge",
        },
        {
          "@type": "Thing",
          name: "Halloween film plot challenge",
        },
        {
          "@type": "Thing",
          name: "Laurie Strode",
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
          title="Halloween: The Game Chapter 4: The Babysitters Walkthrough"
          description="Follow the Wallace House story sequence from Annie through Bob, Lynda and Laurie, while preserving the exact scenes needed to complete all six Chapter 4 challenges."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheBabysittersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}