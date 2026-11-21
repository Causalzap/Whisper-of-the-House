
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainSequenceShipLogisticsContent from "@/data/main-sequence/ship-logistics.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/main-sequence`;
const pageUrl = `${hubUrl}/ship-logistics`;

const metadataTitle =
  "Main Sequence Ship Logistics: Autopilot & Supply Routes";

const metadataDescription =
  "Automate Main Sequence cargo routes with Autopilot, configure Docks and Wait for Items, fix stalled deliveries, and manage Hydrogen Fuel and Warp Fuel stops.";

const articleTitle =
  "Main Sequence Ship Logistics: How Do You Automate Cargo Routes?";

const articleDescription =
  "Set up cargo Autopilot, load and unload Silica, configure Dock Logistics Filters, adjust Wait for Items, refuel ships, and transport Coolant, Water Ice, and Strange Matter between stations.";

const imageUrls = [
  `${siteUrl}/images/main-sequence/main-sequence-autopilot-first-shipping-route.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-autopilot-wait-for-items.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-strange-matter-shipping-route.webp`,
];

const heroImage = imageUrls[1];

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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Main Sequence cargo Autopilot showing a Silica pickup threshold, unloading destination, and refueling stop",
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

const toc = [
  {
    id: "first-shipping-route",
    label: "First Automated Cargo Route",
  },
  {
    id: "docks-and-filters",
    label: "Dock Loading & Filters",
  },
  {
    id: "wait-for-items",
    label: "Wait for Items",
  },
  {
    id: "automatic-refueling",
    label: "Automatic Refueling",
  },
  {
    id: "coolant-shipping",
    label: "Coolant Deliveries",
  },
  {
    id: "water-ice-shipping",
    label: "Water Ice Deliveries",
  },
  {
    id: "interstellar-shipping",
    label: "Interstellar Cargo Routes",
  },
  {
    id: "ship-logistics-troubleshooting",
    label: "Docking & Cargo Problems",
  },
  {
    id: "shipping-throughput",
    label: "Improve Cargo Throughput",
  },
  {
    id: "reliable-shipping-checklist",
    label: "Repeat Route Check",
  },
];

const relatedLinks = [
  {
    href: "/main-sequence",
    label: "Beginner Guide: First Station & Progression",
  },
  {
    href: "/main-sequence/factory-automation",
    label: "Factory Automation: Power & Production",
  },
  {
    href: "/main-sequence/ship-design",
    label: "Ship Design: Cargo Capacity & Thrusters",
  },
  {
    href: "/main-sequence/research-progression",
    label: "Research Progression: Interstellar Travel",
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
          name: "Main Sequence",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ship Logistics",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-21",
      dateModified: "2026-11-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Main Sequence",
        },
        {
          "@type": "Thing",
          name: "Cargo Autopilot and supply routes",
        },
        {
          "@type": "Thing",
          name: "Dock Logistics Filters and unloading",
        },
        {
          "@type": "Thing",
          name: "Wait for Items conditions",
        },
        {
          "@type": "Thing",
          name: "Automatic Hydrogen Fuel and Warp Fuel stops",
        },
        {
          "@type": "Thing",
          name: "Coolant and Water Ice deliveries",
        },
        {
          "@type": "Thing",
          name: "Interstellar Strange Matter transport",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Main Sequence"
          gameHref="/main-sequence"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MainSequenceShipLogisticsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
