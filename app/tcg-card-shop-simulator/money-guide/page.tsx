import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TcgCardShopSimulatorMoneyGuideContent from "@/data/tcg-card-shop-simulator/money-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tcg-card-shop-simulator`;
const pageUrl = `${hubUrl}/money-guide`;

const metadataTitle =
  "How to Make Money Fast in TCG Card Shop Simulator";

const metadataDescription =
  "Make money faster with better pricing, stock control, profitable products, card flips, pack decisions, grading, and smarter expansion timing.";

const articleDescription =
  "TCG Card Shop Simulator Version 1.0 money strategies covering 10–20% pricing tests, stock turnover, profitable products, customer-card flips, license costs, expansion spending, high-value singles, grading, pack opening, product mix, play-table income, and cash-flow problems.";

const imageUrls = [
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-price-market-plus-20.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-33-pack-customer-purchase.webp`,
  `${siteUrl}/images/tcg-card-shop-simulator/tcg-card-shop-simulator-600-card-sale.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "early-money-loop",
    label: "How to make money fast",
  },
  {
    id: "pricing",
    label: "Best product prices",
  },
  {
    id: "stock-turnover",
    label: "Stock turnover",
  },
  {
    id: "best-money-makers",
    label: "Best money makers",
  },
  {
    id: "customer-card-flips",
    label: "Customer card flips",
  },
  {
    id: "licenses",
    label: "License costs",
  },
  {
    id: "expansion-cash",
    label: "Expansion & cash",
  },
  {
    id: "single-cards",
    label: "High-value singles",
  },
  {
    id: "grading",
    label: "Grading for profit",
  },
  {
    id: "opening-packs",
    label: "Open or sell packs?",
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
    href: "/tcg-card-shop-simulator/card-grading",
    label: "TCG Card Shop Simulator Card Grading Guide",
  },
  {
    href: "/tcg-card-shop-simulator/ascension-cards",
    label: "TCG Card Shop Simulator Ascension Cards Guide",
  },
  {
    href: "/tcg-card-shop-simulator/achievements",
    label: "TCG Card Shop Simulator Achievements Guide",
  },
  {
    href: "/tcg-card-shop-simulator",
    label: "TCG Card Shop Simulator Guide",
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
        alt: "Product pricing set above market price in TCG Card Shop Simulator",
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
        "How to Make Money Fast in TCG Card Shop Simulator",
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
          name: "Product Profit",
        },
        {
          "@type": "Thing",
          name: "Customer Card Trading",
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
          name: "Shop Expansion",
        },
        {
          "@type": "Thing",
          name: "Card Grading",
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
          title="How to Make Money Fast in TCG Card Shop Simulator"
          description="Keep profitable stock moving, test prices around 10–20% above market, protect your restock cash, and use card flips, singles, grading, packs, and expansion without starving the shop."
          gameTitle="TCG Card Shop Simulator"
          gameHref="/tcg-card-shop-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 19, 2026"
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