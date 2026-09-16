import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TetramonDuelMasterContent from "@/data/tcg-card-shop-simulator/tetramon-duel-master.mdx";

const siteUrl =
  "https://www.whisperofthehouse.com";

const hubUrl =
  `${siteUrl}/tcg-card-shop-simulator`;

const pageUrl =
  `${hubUrl}/tetramon-duel-master`;

const metadataTitle =
  "TCG Card Shop Simulator Tetramon Duel Master Guide";

const metadataDescription =
  "Learn Tetramon Duel Master: opening hands, Elemental Areas, evolution timing, Guardians, customer duels, tournaments, and what to fix after a loss.";

const articleDescription =
  "Learn how Tetramon Duel Master works in TCG Card Shop Simulator 1.0, from the level 7 Workbench and opening five-card hand to Elemental Areas, Play Effects, evolution timing, attacks, Guardian thresholds, customer duels, tournaments, and common match problems.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetramon-element-stats.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetran-split-evolution.webp`,
];

const heroImage =
  imageUrls[0];

const toc = [
  {
    id: "start-tetramon-duel",
    label:
      "Start playing Tetramon",
  },
  {
    id: "opening-hand",
    label:
      "Opening hand & mulligan",
  },
  {
    id: "elemental-areas",
    label:
      "Fire, Earth, Water & Wind",
  },
  {
    id: "play-effects",
    label:
      "Play Effects",
  },
  {
    id: "evolution",
    label:
      "How evolution works",
  },
  {
    id: "attack-phase",
    label:
      "Attack Phase",
  },
  {
    id: "guardian-area",
    label:
      "Guardian Area",
  },
  {
    id: "first-duel",
    label:
      "First customer duel",
  },
  {
    id: "customer-duels",
    label:
      "Challenge customers",
  },
  {
    id: "tournaments",
    label:
      "Enter tournaments",
  },
  {
    id: "tcg-arcade",
    label:
      "TCG Arcade achievement",
  },
  {
    id: "what-to-fix-next",
    label:
      "What to fix after a loss",
  },
];

const relatedLinks = [
  {
    href:
      "/tcg-card-shop-simulator/deck-builder",
    label:
      "Tetramon Deck Builder",
  },
  {
    href:
      "/tcg-card-shop-simulator/tier-list",
    label:
      "Tetramon Card Tier List",
  },
  {
    href:
      "/tcg-card-shop-simulator/progression-guide",
    label:
      "TCG Card Shop Simulator Progression Guide",
  },
  {
    href:
      "/tcg-card-shop-simulator/achievements",
    label:
      "TCG Card Shop Simulator Achievements Guide",
  },
  {
    href:
      "/tcg-card-shop-simulator",
    label:
      "TCG Card Shop Simulator Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description:
    metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: metadataTitle,
    description:
      metadataDescription,
    url: pageUrl,
    siteName:
      "Whisper of the House",
    type: "article",

    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt:
          "Tetramon card showing Fire, Earth, Water, and Wind values in TCG Card Shop Simulator",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",
    title: metadataTitle,
    description:
      metadataDescription,
    images: [heroImage],
  },
};

const jsonLd = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type":
        "BreadcrumbList",
      "@id":
        `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type":
            "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type":
            "ListItem",
          position: 2,
          name:
            "TCG Card Shop Simulator",
          item: hubUrl,
        },
        {
          "@type":
            "ListItem",
          position: 3,
          name:
            "Tetramon Duel Master",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Article",
      "@id":
        `${pageUrl}#article`,

      mainEntityOfPage: {
        "@type":
          "WebPage",
        "@id": pageUrl,
      },

      headline:
        "How to Play Tetramon Duel Master in TCG Card Shop Simulator",

      description:
        articleDescription,

      image: imageUrls,

      inLanguage: "en",

      dateModified:
        "2026-09-16",

      articleSection:
        "Game Guides",

      about: [
        {
          "@type":
            "VideoGame",
          name:
            "TCG Card Shop Simulator",
        },
        {
          "@type":
            "Thing",
          name:
            "Tetramon Duel Master",
        },
        {
          "@type":
            "Thing",
          name:
            "Workbench",
        },
        {
          "@type":
            "Thing",
          name:
            "Elemental Areas",
        },
        {
          "@type":
            "Thing",
          name:
            "Play Effects",
        },
        {
          "@type":
            "Thing",
          name:
            "Tetramon Evolution",
        },
        {
          "@type":
            "Thing",
          name:
            "Guardian Area",
        },
        {
          "@type":
            "Thing",
          name:
            "Customer Duels",
        },
        {
          "@type":
            "Thing",
          name:
            "Tournaments",
        },
      ],

      author: {
        "@id":
          `${siteUrl}#organization`,
      },

      publisher: {
        "@id":
          `${siteUrl}#organization`,
      },

      breadcrumb: {
        "@id":
          `${pageUrl}#breadcrumb`,
      },

      isPartOf: {
        "@id":
          `${siteUrl}#website`,
      },
    },

    {
      "@type":
        "Organization",
      "@id":
        `${siteUrl}#organization`,
      name:
        "Whisper of the House",
      url: siteUrl,
    },

    {
      "@type":
        "WebSite",
      "@id":
        `${siteUrl}#website`,
      name:
        "Whisper of the House",
      url: siteUrl,
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
            __html:
              JSON.stringify(
                jsonLd
              ),
          }}
        />

        <GuideArticlePage
          title="How to Play Tetramon Duel Master in TCG Card Shop Simulator"
          description="Learn the opening hand, four Elemental Areas, Play Effects, evolution timing, Guardian thresholds, customer duels, tournaments, and how to identify what went wrong after a loss."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/tcg-card-shop-simulator"
          breadcrumbBaseLabel="TCG Card Shop Simulator"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={
            relatedLinks
          }
        >
          <TetramonDuelMasterContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}