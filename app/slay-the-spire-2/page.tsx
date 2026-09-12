import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlayTheSpire2GuideContent from "@/data/slay-the-spire-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2`;

const metadataTitle =
  "Slay the Spire 2 Guide – Beginner, Ascension & Co-op";

const metadataDescription =
  "Use this Slay the Spire 2 guide for first wins, Ascension A1–A10, Regent, Necrobinder, co-op strategy, and the right data tools for each run.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-guide-ancient-boon-start.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-guide-coop-party.webp`,
];

const toc = [
  {
    id: "where-to-start",
    label: "Choose the guide for your problem",
  },
  {
    id: "first-win",
    label: "Get your first win",
  },
  {
    id: "ascension",
    label: "Climb Ascension",
  },
  {
    id: "regent",
    label: "Learn Regent",
  },
  {
    id: "necrobinder",
    label: "Learn Necrobinder",
  },
  {
    id: "multiplayer",
    label: "Play co-op",
  },
  {
    id: "exact-data",
    label: "Cards, relics & exact data",
  },
  {
    id: "what-to-play-next",
    label: "Where to go next",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
  },
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/regent-guide",
    label: "Slay the Spire 2 Regent Guide",
  },
  {
    href: "/slay-the-spire-2/necrobinder-guide",
    label: "Slay the Spire 2 Necrobinder Guide",
  },
  {
    href: "/slay-the-spire-2/multiplayer-guide",
    label: "Slay the Spire 2 Multiplayer Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,

  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: metadataTitle,

    description:
      "Find the right Slay the Spire 2 guide for your run, from first clears and Ascension to Regent, Necrobinder, multiplayer, and exact game data.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Ancient offering a choice between Max HP, a card and potion reward, or 333 Gold with Greed",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Start with the problem your current run is showing you, then use the right first-win, Ascension, character, co-op, or data guide.",

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
          name: "Slay the Spire 2 Guide",
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
        "Slay the Spire 2 Guide: Beginner, Ascension, Characters and Co-op",

      description:
        "A player-focused Slay the Spire 2 guide hub that routes common run problems to the right detailed guide. It covers first-win decisions, Ascension progression from A1 through A10, Regent and Necrobinder learning paths, multiplayer team strategy, and when exact card, relic, monster, boss, or map data is better handled through a dedicated structured database.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-12",

      articleSection: "Slay the Spire 2 Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Slay the Spire 2",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 strategy",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Ascension",
        },
        {
          "@type": "Thing",
          name: "Regent",
        },
        {
          "@type": "Thing",
          name: "Necrobinder",
        },
        {
          "@type": "Thing",
          name: "Multiplayer",
        },
        {
          "@type": "Thing",
          name: "Co-op",
        },
        {
          "@type": "Thing",
          name: "Map pathing",
        },
        {
          "@type": "Thing",
          name: "Cards",
        },
        {
          "@type": "Thing",
          name: "Relics",
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
          title="Slay the Spire 2 Guide: What to Fix in Your Next Run"
          description="I use this hub to diagnose where a run is actually breaking: first-win fundamentals, Ascension pressure, Regent or Necrobinder decisions, or multiplayer coordination. Once I know the problem, I move to the guide that owns it instead of treating every loss like the same deck-building issue."
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="September 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SlayTheSpire2GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}