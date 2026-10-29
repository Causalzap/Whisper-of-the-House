
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterMerchantGuideContent from "@/data/probably-stolen/water-merchant-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/water-merchant-guide`;

const metadataTitle =
  "Probably Stolen Water Merchant Guide: Start to Late Game";

const metadataDescription =
  "Start Water Merchant in Probably Stolen, manage low-budget buyers and rent, use Georgio's help, prepare for water shortages, and expand production.";

const articleDescription =
  "Start a Water Merchant shop in Probably Stolen, sell the starting water to buyers with limited Credits, and protect rent money before upgrading. Compare Georgio's investment and scavenging assistance, prepare stock for Water Supply Crisis, account for reduced output from multiple Moisture Farms, and save for the store Deed.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/water-merchant-starting-stock.webp`,
  `${siteUrl}/images/probably-stolen/water-merchant-display-water.webp`,
  `${siteUrl}/images/probably-stolen/water-merchant-georgio-return.webp`,
  `${siteUrl}/images/probably-stolen/water-merchant-supply-crisis.webp`,
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
    title: metadataTitle,
    description:
      "Survive the Water Merchant opening, manage bottles and storage, handle rent, and prepare water stock for market shortages.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        alt: "Probably Stolen Day 77 calendar showing a Water Supply Crisis and water price modifiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Build a Water Merchant business, manage Georgio offers and water shortages, and save for the store Deed.",
    images: [imageUrls[3]],
  },
};

const toc = [
  {
    id: "water-merchant-start",
    label: "Starting Inventory & Hard Mode",
  },
  {
    id: "first-sales",
    label: "First Water Customers",
  },
  {
    id: "rent-and-first-upgrades",
    label: "First Equipment Upgrades",
  },
  {
    id: "georgio",
    label: "Georgio: Investment & Scavenging",
  },
  {
    id: "water-shortages",
    label: "Water Supply Crisis",
  },
  {
    id: "production-expansion",
    label: "Expanding Water Production",
  },
  {
    id: "late-game",
    label: "Late-Game Shop Management",
  },
  {
    id: "shop-buyout",
    label: "Store Deed & Buyout",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "How to Make Pure Water & Fix Filtering Problems",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Compare Water Profits & Equipment Payback",
  },
];

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
          name: "Probably Stolen",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Water Merchant Guide",
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
        "Probably Stolen Water Merchant Guide: How to Start and Survive",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-26",
      dateModified: "2026-10-29",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Water Merchant Starting Scenario",
        },
        {
          "@type": "Thing",
          name: "Bottle Printer and water storage",
        },
        {
          "@type": "Thing",
          name: "Water buying and selling",
        },
        {
          "@type": "Thing",
          name: "Water Supply Crisis",
        },
        {
          "@type": "Thing",
          name: "Georgio investment and scavenging assistance",
        },
        {
          "@type": "Thing",
          name: "Moisture Farm expansion and store Deed purchase",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Probably Stolen Water Merchant Guide: How to Start and Survive"
          description="Trade your starting water, cover rent, choose the right storage and equipment upgrades, and keep the business running through water shortages."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WaterMerchantGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
