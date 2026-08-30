import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarehouseLogisticsGuideContent from "@/data/big-ambitions/warehouse-logistics-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/warehouse-logistics-guide`;

const metadataTitle =
  "Big Ambitions Warehouse & Logistics Guide: Smart Delivery";

const metadataDescription =
  "Set up Big Ambitions 1.0 warehouses, Purchasing Agents, Smart Delivery, Logistics Managers, stock targets, routes, and delivery troubleshooting.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-warehouse-objectives.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-smart-delivery-target.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-logistics-manager-delivery-destinations.webp`,
];

const toc = [
  {
    id: "when-to-rent-warehouse",
    label: "When to rent a warehouse",
  },
  {
    id: "first-warehouse",
    label: "First warehouse setup",
  },
  {
    id: "purchasing-agent",
    label: "Purchasing Agent",
  },
  {
    id: "pallet-storage",
    label: "Pallet storage",
  },
  {
    id: "smart-delivery",
    label: "Smart Delivery",
  },
  {
    id: "stock-targets",
    label: "Stock targets",
  },
  {
    id: "warehouse-to-store",
    label: "Warehouse to store",
  },
  {
    id: "logistics-destinations",
    label: "Logistics destinations",
  },
  {
    id: "warehouse-not-delivering",
    label: "Warehouse not delivering",
  },
  {
    id: "new-business-logistics",
    label: "Adding another business",
  },
  {
    id: "second-warehouse",
    label: "Second warehouse",
  },
  {
    id: "factory-handoff",
    label: "Factory handoff",
  },
  {
    id: "healthy-logistics",
    label: "Healthy logistics",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/progression-guide",
    label: "Progression Guide & What to Unlock Next",
  },
  {
    href: "/big-ambitions/best-businesses",
    label: "Best Businesses by Progression Stage",
  },
  {
    href: "/big-ambitions/factory-guide",
    label: "Factory & Manufacturing Guide",
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
    title: metadataTitle,
    description:
      "Build a working Big Ambitions warehouse chain from purchasing and Smart Delivery through Logistics Manager routes, store stock targets, and delivery troubleshooting.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Big Ambitions Logistics Manager showing warehouse stock, store destinations, and minimum stock settings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Understand Smart Delivery, warehouse stock targets, Logistics Manager destinations, and why stores sometimes stop receiving goods.",
    images: [imageUrls[2]],
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Warehouse & Logistics Guide",
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
        "Big Ambitions Warehouse and Logistics Guide: Smart Delivery, Stock Targets and Routes",
      description:
        "A player-focused Big Ambitions 1.0 warehouse and logistics guide covering when to rent the first warehouse, Purchasing Agent supply, pallet storage, Smart Delivery warehouse targets, delivery vehicles, Logistics Manager destination limits, store minimum-stock settings, second-warehouse decisions, and troubleshooting when products reach the warehouse but not the store.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-30",
      dateModified: "2026-08-30",
      articleSection: "Big Ambitions Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Ambitions",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions warehouse",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions logistics",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Smart Delivery",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Purchasing Agent",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Logistics Manager",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions warehouse not delivering",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions minimum stock amount",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions pallet shelf",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions delivery routes",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions warehouse stock target",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Set Up Warehouses and Logistics in Big Ambitions 1.0"
          description="I separate the supply chain into two jobs: keep the warehouse stocked, then make sure the right products leave it for the right stores. That makes Smart Delivery, stock targets and delivery failures much easier to diagnose."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarehouseLogisticsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}