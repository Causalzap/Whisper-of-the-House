import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustContractsGuideContent from "@/data/the-crust/contracts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-crust`;
const pageUrl = `${hubUrl}/contracts-guide`;

const metadataTitle =
  "The Crust Contracts Guide: Urgent Contracts & Market";

const metadataDescription =
  "Use normal and urgent contracts in The Crust, build reputation, configure shipments, fix wrong destinations, and decide when to buy or sell resources.";

const articleDescription =
  "A The Crust Version 1.0 contracts guide covering normal and urgent contracts, reputation, contract limits, deadlines, the Landing Platform, Online Market, buying and selling, shipment configuration, landing destinations, delivery throughput, Cargo Drones, and Flight Control Center automation.";

const imageUrls = [
  `${siteUrl}/images/the-crust/the-crust-contract-send-resources.webp`,
  `${siteUrl}/images/the-crust/the-crust-contract-logistics-configuration.webp`,
  `${siteUrl}/images/the-crust/the-crust-online-market-supply-demand.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-contracts-work",
    label: "How contracts work",
  },
  {
    id: "unlock-trading",
    label: "Unlock trading",
  },
  {
    id: "urgent-contracts",
    label: "Urgent Contracts",
  },
  {
    id: "reputation",
    label: "Reputation & contract limits",
  },
  {
    id: "online-market",
    label: "Online Market",
  },
  {
    id: "market-vs-contract",
    label: "Market vs contracts",
  },
  {
    id: "contract-not-completing",
    label: "Contract not completing",
  },
  {
    id: "delivery-throughput",
    label: "Delivery speed & automation",
  },
  {
    id: "when-to-accept",
    label: "When to accept a contract",
  },
  {
    id: "buy-resources",
    label: "When to buy resources",
  },
  {
    id: "contract-rhythm",
    label: "Contract priorities",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/walkthrough",
    label: "The Crust 1.0 Walkthrough",
  },
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/cargo-terminal",
    label: "Cargo Terminal & Cargo Dock Guide",
  },
  {
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
  {
    href: "/the-crust/achievements",
    label: "The Crust Achievements Guide",
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
        alt: "Contract logistics screen for sending resources in The Crust",
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
          name: "The Crust",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contracts Guide",
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
        "The Crust Contracts Guide: Urgent Contracts, Market and Shipping",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-13",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Crust",
        },
        {
          "@type": "Thing",
          name: "Contracts",
        },
        {
          "@type": "Thing",
          name: "Urgent Contracts",
        },
        {
          "@type": "Thing",
          name: "Reputation",
        },
        {
          "@type": "Thing",
          name: "Online Market",
        },
        {
          "@type": "Thing",
          name: "Landing Platform",
        },
        {
          "@type": "Thing",
          name: "Cargo Drones",
        },
        {
          "@type": "Thing",
          name: "Flight Control Center",
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
          title="The Crust Contracts Guide: Urgent Contracts, Market & Shipping"
          description="Choose contracts your factory can actually deliver, use urgent jobs to build reputation, configure shipments correctly, and keep the Online Market from draining resources needed elsewhere."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustContractsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}