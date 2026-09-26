import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3CargoIndustryGuideContent from "@/data/transport-fever-3/cargo-industry-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/cargo-industry-guide`;

const metadataTitle =
  "Transport Fever 3 Cargo Guide: Industries, Rates & Warehouses";

const metadataDescription =
  "Fix cargo that will not move, match industry input ratios, use terminals and warehouses, improve production, and diagnose loading or transfer problems.";

const articleDescription =
  "Trace cargo backward from its destination, use the correct industry terminals and vehicles, match transport rates to production ratios, connect workers where production benefits, build useful transfers, and diagnose cargo that will not load, unload, or leave storage.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-first-cargo-route.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-cargo-rate-matching.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-distribution-center-layout.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-warehouse-transfer.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-force-unload-cargo.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "trace-chain-backward",
    label: "Trace the chain backward",
  },
  {
    id: "industry-terminals",
    label: "Industry terminals",
  },
  {
    id: "cargo-compatibility",
    label: "Cargo compatibility",
  },
  {
    id: "production-ratios",
    label: "Match production ratios",
  },
  {
    id: "worker-transport",
    label: "Worker transport",
  },
  {
    id: "warehouses",
    label: "When to use warehouses",
  },
  {
    id: "distribution-center",
    label: "Distribution centers",
  },
  {
    id: "confirm-transfer",
    label: "Confirm the transfer works",
  },
  {
    id: "cargo-not-unloading",
    label: "Cargo will not unload",
  },
  {
    id: "production-too-slow",
    label: "Industry produces too slowly",
  },
  {
    id: "terminal-congestion",
    label: "Terminal congestion",
  },
  {
    id: "long-haul-cargo",
    label: "Long-haul cargo",
  },
  {
    id: "cargo-troubleshooting",
    label: "Cargo troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
  },
  {
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Money & Economy Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 crop farm with built-in cargo terminals for the first freight route",
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
          name: "Transport Fever 3 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cargo & Industry Guide",
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
      headline: "Transport Fever 3 Cargo & Industry Guide",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-26",
      dateModified: "2026-09-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 production chains",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 warehouses",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 line rate",
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
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Cargo & Industry Guide"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3CargoIndustryGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}