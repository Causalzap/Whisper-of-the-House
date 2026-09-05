import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheBabysittersContent from "@/data/halloween-the-game/the-babysitters-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/the-babysitters-walkthrough`;

const metadataTitle =
  "Halloween: The Game Chapter 4 Challenges – Babysitters Guide";

const metadataDescription =
  "Complete all 6 Chapter 4 Babysitters challenges: Annie's car kill, Bob and Lynda stalking, Bloodthirsty, Bob's wall, Sheet, telephone, and film plot.";

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
    label: "Best route for all 6 challenges",
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
    label: "Bob's kitchen wall challenge",
  },
  {
    id: "sheet",
    label: "Get and keep the Sheet",
  },
  {
    id: "lynda-telephone",
    label: "Lynda telephone challenge",
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
    label: "Chapter 2 Main Street Challenges",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
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
    title: "Halloween: The Game Chapter 4 Babysitters Challenges",
    description:
      "Clear all six Chapter 4 challenges by preserving Annie, Bob, and Lynda until their movie-specific scenes are ready, then finish the staged house and Laurie sequence.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game The Babysitters challenge list showing all six Chapter 4 challenges",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Chapter 4 Challenges",
    description:
      "Time Annie's car kill, stalk Bob and Lynda before breaking their scene, preserve Bob for the wall, then keep the Sheet through Lynda's telephone kill.",
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
          name: "Chapter 4 Babysitters Challenges",
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
        "Halloween: The Game Chapter 4 Challenges — The Babysitters Guide",
      description:
        "A complete Chapter 4 challenge guide for The Babysitters in Halloween: The Game. It covers all six challenge conditions and the Wallace House event order: letting Annie reach the car-kill window, fully stalking Bob and Lynda while they are making out, using a spare resident for Bloodthirsty, preserving Bob for the kitchen wall execution, taking and keeping the Sheet disguise, killing Lynda with the telephone while the Sheet is equipped, staging the upstairs Wallace House scene, keeping the major events aligned with the film-plot challenge, and committing to Laurie's chase once the final objective begins.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
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
          name: "Halloween: The Game Chapter 4",
        },
        {
          "@type": "Thing",
          name: "The Babysitters",
        },
        {
          "@type": "Thing",
          name: "The Babysitters challenges",
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
          name: "Laurie Strode",
        },
        {
          "@type": "Thing",
          name: "Halloween film plot challenge",
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
          title="Halloween: The Game Chapter 4 Challenges – The Babysitters"
          description="Keep the Wallace House scenes intact long enough to use them: wait for Annie's car window, finish Bob and Lynda's stalking state before separating them, preserve Bob for the wall, and keep the Sheet through Lynda's telephone kill."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 5, 2026"
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