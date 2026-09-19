import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorGuideContent from "@/data/tcg-card-shop-simulator/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tcg-card-shop-simulator`;

const metadataTitle =
  "TCG Card Shop Simulator Guide: Progression, Money & Tetramon";

const metadataDescription =
  "TCG Card Shop Simulator 1.0 guide for progression, money, packs, grading, Ascension, Tetramon cards, decks, duels, and all 50 achievements.";

const articleDescription =
  "A TCG Card Shop Simulator Version 1.0 guide covering early shop priorities, progression and money decisions, packs and card collection, the level 7 Workbench, Tetramon cards and deck building, grading, Ascension, achievements, and practical fixes when the shop stops progressing smoothly.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-workbench-pack-opener-unlocks.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-tetramon-shelf-1-0.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "shop-systems",
    label: "Shop systems",
  },
  {
    id: "money-and-stock",
    label: "Money & stock",
  },
  {
    id: "packs-and-cards",
    label: "Packs & cards",
  },
  {
    id: "tetramon",
    label: "Tetramon at level 7",
  },
  {
    id: "grading",
    label: "Card grading",
  },
  {
    id: "ascension",
    label: "Ascension cards",
  },
  {
    id: "achievements",
    label: "Achievements & 100%",
  },
  {
    id: "what-to-do-next",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/progression-guide",
    label: "TCG Card Shop Simulator Progression Guide",
  },
  {
    href: "/tcg-card-shop-simulator/money-guide",
    label: "How to Make Money Fast",
  },
  {
    href: "/tcg-card-shop-simulator/tier-list",
    label: "Tetramon Card Tier List",
  },
  {
    href: "/tcg-card-shop-simulator/deck-builder",
    label: "Tetramon Deck Builder",
  },
  {
    href: "/tcg-card-shop-simulator/best-decks",
    label: "Best Tetramon Decks",
  },
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
  },
  {
    href: "/tcg-card-shop-simulator/card-grading",
    label: "Card Grading Guide",
  },
  {
    href: "/tcg-card-shop-simulator/ascension-cards",
    label: "Ascension Cards Guide",
  },
  {
    href: "/tcg-card-shop-simulator/achievements",
    label: "Achievements Guide & Tracker",
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
        alt: "Workbench, pack opening equipment, storage, and card systems in TCG Card Shop Simulator",
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
          name: "TCG Card Shop Simulator",
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
        "TCG Card Shop Simulator Guide: Progression, Money & Tetramon",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-19",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "TCG Card Shop Simulator",
        },
        {
          "@type": "Thing",
          name: "Shop Progression",
        },
        {
          "@type": "Thing",
          name: "Money Making",
        },
        {
          "@type": "Thing",
          name: "Product Pricing",
        },
        {
          "@type": "Thing",
          name: "Card Packs",
        },
        {
          "@type": "Thing",
          name: "Card Collection",
        },
        {
          "@type": "Thing",
          name: "Workbench",
        },
        {
          "@type": "Thing",
          name: "Tetramon Cards",
        },
        {
          "@type": "Thing",
          name: "Tetramon Deck Building",
        },
        {
          "@type": "Thing",
          name: "Tetramon Duel Master",
        },
        {
          "@type": "Thing",
          name: "Card Grading",
        },
        {
          "@type": "Thing",
          name: "Ascension Cards",
        },
        {
          "@type": "Thing",
          name: "Achievements",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="TCG Card Shop Simulator Guide: Progression, Money & Tetramon"
          description="Figure out what your shop needs next, protect cash and stock, decide when to open packs or grade cards, build playable Tetramon decks, and move into Ascension and long completion goals."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}