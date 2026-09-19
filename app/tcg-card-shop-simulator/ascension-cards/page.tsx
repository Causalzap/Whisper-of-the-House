import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorAscensionCardsContent from "@/data/tcg-card-shop-simulator/ascension-cards.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/ascension-cards`;

const metadataTitle =
  "How to Get Ascension Cards in TCG Card Shop Simulator";

const metadataDescription =
  "Learn how to get Ascension Cards, unlock 32-count and 64-count stock, decide when to open packs, and choose which cards to keep, sell, or grade.";

const articleDescription =
  "A TCG Card Shop Simulator Version 1.0 Ascension guide covering the level 18 32-count and level 32 64-count licenses, stocking Ascension Packs, opening versus selling them, keeping playable copies, using Ascension cards in Tetramon decks, handling valuable pulls, grading decisions, collection goals, and common unlock problems.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-ascension-stock-order-32-64.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-ascension-pack-stock.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-ascension-high-value-pulls.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-to-get-ascension-cards",
    label: "How to get Ascension Cards",
  },
  {
    id: "32-or-64",
    label: "32-count vs 64-count",
  },
  {
    id: "stock-ascension",
    label: "Stocking Ascension Packs",
  },
  {
    id: "open-or-sell",
    label: "Open or sell packs?",
  },
  {
    id: "keep-copies",
    label: "How many cards to keep",
  },
  {
    id: "ascension-and-decks",
    label: "Ascension cards in decks",
  },
  {
    id: "valuable-ascension",
    label: "Expensive Ascension cards",
  },
  {
    id: "ascension-collection",
    label: "Collection goals",
  },
  {
    id: "ascension-stuck",
    label: "Why packs are unavailable",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/progression-guide",
    label: "TCG Card Shop Simulator Progression Guide",
  },
  {
    href: "/tcg-card-shop-simulator/card-grading",
    label: "TCG Card Shop Simulator Card Grading Guide",
  },
  {
    href: "/tcg-card-shop-simulator/best-decks",
    label: "Best Tetramon Decks",
  },
  {
    href: "/tcg-card-shop-simulator/money-guide",
    label: "TCG Card Shop Simulator Money Guide",
  },
  {
    href: "/tcg-card-shop-simulator",
    label: "TCG Card Shop Simulator Guide Hub",
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
        alt: "Ascension 32-count and 64-count licenses in TCG Card Shop Simulator",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ascension Cards",
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
        "How to Get Ascension Cards in TCG Card Shop Simulator",
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
          name: "Ascension Cards",
        },
        {
          "@type": "Thing",
          name: "Ascension Card Pack",
        },
        {
          "@type": "Thing",
          name: "Ascension 32-count License",
        },
        {
          "@type": "Thing",
          name: "Ascension 64-count License",
        },
        {
          "@type": "Thing",
          name: "Stock Order",
        },
        {
          "@type": "Thing",
          name: "Tetramon Deck Building",
        },
        {
          "@type": "Thing",
          name: "Card Grading",
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
          title="How to Get Ascension Cards in TCG Card Shop Simulator"
          description="Unlock Ascension stock at shop levels 18 and 32, keep enough sellable inventory on the shelf, then decide which packs to open and which cards are better kept, sold, or graded."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorAscensionCardsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}