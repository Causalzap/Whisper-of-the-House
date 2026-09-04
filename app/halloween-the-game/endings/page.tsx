import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenEndingsContent from "@/data/halloween-the-game/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "Halloween: The Game Endings: Full, Cornfield & Sewer";

const metadataDescription =
  "Get all three Halloween: The Game endings with the railroad, cornfield, and sewer routes, then replay Chapter 5 without restarting the story.";

const imageUrls = [
  `${siteUrl}/images/halloween-the-game/halloween-the-game-endings-three-routes.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-railroad-exit-one-minute.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-full-ending-train-crossing.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-cornfield-ending-entrance.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-sewer-ending-gully.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-sewer-ending-entrance.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-sewer-ending-mask.webp`,
];

const toc = [
  {
    id: "how-endings-work",
    label: "How the endings work",
  },
  {
    id: "railroad-ending",
    label: "Railroad / Full Ending",
  },
  {
    id: "cornfield-ending",
    label: "Cornfield Ending",
  },
  {
    id: "sewer-ending",
    label: "Sewer Ending",
  },
  {
    id: "what-changes",
    label: "What changes between endings",
  },
  {
    id: "replay-order",
    label: "Best replay order",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "The Babysitters Walkthrough",
  },
  {
    href: "/halloween-the-game",
    label: "Halloween: The Game Guide",
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
    title: "Halloween: The Game Endings — All 3 Final Escape Routes",
    description:
      "Find the railroad, cornfield, and sewer endings in Into the Shadows, see where each route commits, and replay only Chapter 5 for the endings you missed.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Michael Myers escaping Haddonfield during the final chapter of Halloween The Game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Endings — All 3 Routes",
    description:
      "Follow the railroad, cornfield, and sewer routes in Chapter 5 and see what actually changes between the three endings.",
    images: [imageUrls[0]],
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
          name: "Endings",
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
        "Halloween: The Game Endings Guide: Railroad, Cornfield, and Sewer Routes",
      description:
        "A complete guide to the three confirmed ending routes in Halloween: The Game's final story chapter, Into the Shadows. It explains how the ending branch is determined by Michael's escape route, how to complete the railroad or Full Ending by waiting for the train, how to reach the Cornfield Ending, how to follow the gully objective to the Sewer Ending, what changes between the route-specific escape scenes, and how to replay Chapter 5 for missed endings without restarting the full campaign.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      articleSection: "Halloween: The Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game endings",
        },
        {
          "@type": "Thing",
          name: "Railroad Ending",
        },
        {
          "@type": "Thing",
          name: "Full Ending",
        },
        {
          "@type": "Thing",
          name: "Cornfield Ending",
        },
        {
          "@type": "Thing",
          name: "Sewer Ending",
        },
        {
          "@type": "Thing",
          name: "Into the Shadows",
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
          title="Get Every Ending Without Replaying the Whole Story"
          description="Chapter 5 can send Michael out through the railroad, cornfield, or sewer. Here is where each route commits, what actually changes, and when it is smarter to leave than keep fighting."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenEndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}