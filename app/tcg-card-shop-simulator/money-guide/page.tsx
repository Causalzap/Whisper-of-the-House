import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorMoneyGuideContent from "@/data/tcg-card-shop-simulator/money-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/money-guide`;

const metadataTitle =
  "TCG Card Shop Simulator Money Guide: Pricing & Profit";

const metadataDescription =
  "Make more money in TCG Card Shop Simulator with better pricing, deeper stock, smarter pack opening, safer license timing, and high-value card sales.";

const articleDescription =
  "A practical TCG Card Shop Simulator Version 1.0 money guide covering early cash flow, market-price markups, stock turnover, license costs, single-card sales, when to open packs, product diversification, play-table income, and how to diagnose a shop that stays busy but low on cash.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-price-market-plus-20.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-33-pack-customer-purchase.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-600-card-sale.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "early-money-loop",
    label: "Early money loop",
  },
  {
    id: "pricing",
    label: "How much above market?",
  },
  {
    id: "stock-turnover",
    label: "Stock turnover",
  },
  {
    id: "licenses",
    label: "License costs",
  },
  {
    id: "single-cards",
    label: "High-value single cards",
  },
  {
    id: "opening-packs",
    label: "Sell packs or open them?",
  },
  {
    id: "product-mix",
    label: "Product mix",
  },
  {
    id: "play-table-income",
    label: "Play-table income",
  },
  {
    id: "money-stuck",
    label: "Why cash stays low",
  },
];

const relatedLinks = [
  {
    href: "/tcg-card-shop-simulator/progression-guide",
    label: "TCG Card Shop Simulator Progression Guide",
  },
  {
    href: "/tcg-card-shop-simulator/tetramon-duel-master",
    label: "Tetramon Duel Master Guide",
  },
  {
    href: "/tcg-card-shop-simulator/achievements",
    label: "TCG Card Shop Simulator Achievements Guide",
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
        alt: "TCG Card Shop Simulator product pricing set above market price",
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
          name: "Money Guide",
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
        "TCG Card Shop Simulator Money Guide: Pricing, Stock and Profit",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "TCG Card Shop Simulator",
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
          name: "Market Price",
        },
        {
          "@type": "Thing",
          name: "Stock Turnover",
        },
        {
          "@type": "Thing",
          name: "Card Pack Sales",
        },
        {
          "@type": "Thing",
          name: "Single Card Sales",
        },
        {
          "@type": "Thing",
          name: "Product Licenses",
        },
        {
          "@type": "Thing",
          name: "Pack Opening",
        },
        {
          "@type": "Thing",
          name: "Play Table Income",
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
          title="TCG Card Shop Simulator Money Guide: Pricing, Stock and Profit"
          description="Price products without killing turnover, keep fast sellers stocked, decide when packs should stay sealed, and use licenses and high-value cards without draining the shop."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/tcg-card-shop-simulator"
          breadcrumbBaseLabel="TCG Card Shop Simulator"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TcgCardShopSimulatorMoneyGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}