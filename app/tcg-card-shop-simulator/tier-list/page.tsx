import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorTierListContent from "@/data/tcg-card-shop-simulator/tier-list.mdx";

const siteUrl =
  "https://www.whisperofthehouse.com";

const hubUrl =
  `${siteUrl}/tcg-card-shop-simulator`;

const pageUrl =
  `${hubUrl}/tier-list`;

const metadataTitle =
  "TCG Card Shop Simulator Tetramon Tier List";

const metadataDescription =
  "Compare all 121 Tetramon cards by effect, reliability, synergy, evolution setup and stats, then filter the tier list by type, class and role.";

const articleDescription =
  "A data-driven TCG Card Shop Simulator Tetramon tier list for all 121 playable card identities, with card scores based on Play Effect value, reliability, flexibility, synergy, evolution setup versus payoff, and printed stats. Filter cards by type, class, effect, and tier, inspect each score breakdown, then continue into the Tetramon deck builder.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-toximuck-card.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "best-tetramon-cards",
    label: "Best Tetramon cards",
  },
  {
    id: "no-s-tier",
    label: "Why S tier is empty",
  },
  {
    id: "how-rankings-work",
    label: "How rankings work",
  },
  {
    id: "rarity-vs-tier",
    label: "Rarity vs tier",
  },
  {
    id: "c-tier-cards",
    label: "Are C-tier cards bad?",
  },
  {
    id: "choose-by-effect",
    label: "Choose by effect",
  },
  {
    id: "build-with-card",
    label: "Build around a card",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/deck-builder",
    label: "Tetramon Deck Builder",
  },
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
  },
  {
    href: "/tcg-card-shop-simulator/progression-guide",
    label:
      "TCG Card Shop Simulator Progression Guide",
  },
  {
    href: "/tcg-card-shop-simulator/achievements",
    label:
      "TCG Card Shop Simulator Achievements Guide & Tracker",
  },
  {
    href: "/tcg-card-shop-simulator",
    label:
      "TCG Card Shop Simulator Guide Hub",
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
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",

    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Toximuck Tetramon card in TCG Card Shop Simulator",
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
          name:
            "TCG Card Shop Simulator",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name:
            "Tetramon Tier List",
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
        "TCG Card Shop Simulator Tetramon Tier List",

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
          "@type": "VideoGame",
          name:
            "TCG Card Shop Simulator",
        },
        {
          "@type": "Thing",
          name:
            "Tetramon Duel Master",
        },
        {
          "@type": "Thing",
          name:
            "Tetramon Tier List",
        },
        {
          "@type": "Thing",
          name:
            "Tetramon Cards",
        },
        {
          "@type": "Thing",
          name:
            "Card Rankings",
        },
        {
          "@type": "Thing",
          name:
            "Deck Building",
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
      "@type": "WebApplication",
      "@id": `${pageUrl}#tool`,

      name:
        "TCG Card Shop Simulator Tetramon Tier List",

      url: pageUrl,

      description:
        "Filter and compare Tetramon cards by tier, type, class, Play Effect, individual score, and detailed scoring signals.",

      applicationCategory:
        "GameApplication",

      operatingSystem: "Web",

      browserRequirements:
        "Requires a modern web browser with JavaScript enabled.",

      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },

      featureList: [
        "121-card Tetramon ranking",
        "Tier filtering",
        "Tetramon type filtering",
        "Card class filtering",
        "Play Effect filtering",
        "Individual card scores",
        "Play Effect value breakdown",
        "Reliability scoring",
        "Evolution setup scoring",
        "Synergy scoring",
        "Flexibility scoring",
        "Printed stat scoring",
        "Direct deck builder links",
      ],

      isPartOf: {
        "@id":
          `${siteUrl}#website`,
      },
    },

    {
      "@type": "Organization",
      "@id":
        `${siteUrl}#organization`,

      name:
        "Whisper of the House",

      url: siteUrl,
    },

    {
      "@type": "WebSite",
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
          title="TCG Card Shop Simulator Tetramon Tier List"
          description="Compare all 121 Tetramon cards, see why each card scores where it does, filter by the role your deck needs, and move straight from an individual card into the 50-card deck builder."
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
          <TcgCardShopSimulatorTierListContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}