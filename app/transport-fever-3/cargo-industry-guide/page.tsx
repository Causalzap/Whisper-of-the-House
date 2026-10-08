
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
  "Fix cargo loading and unloading in Transport Fever 3. Check warehouse coverage, line settings, vehicle compatibility, transfers, and industry rates.";

const articleTitle =
  "Transport Fever 3 Cargo Guide: Fix Loading & Warehouses";

const articleDescription =
  "Find out why freight vehicles leave empty, warehouses receive no goods, or cargo returns without unloading. Fix station coverage, loading settings, vehicle compatibility, storage transfers, and transport rates.";

const publishedAt = "2026-09-26";
const modifiedAt = "2026-10-08";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-distribution-center-layout.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-first-cargo-route.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-cargo-rate-matching.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-warehouse-transfer.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-force-unload-cargo.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "trace-chain-backward",
    label: "Find missing cargo",
  },
  {
    id: "industry-terminals",
    label: "Terminals & coverage",
  },
  {
    id: "cargo-compatibility",
    label: "Cargo not loading",
  },
  {
    id: "production-ratios",
    label: "Match transport rates",
  },
  {
    id: "worker-transport",
    label: "Workers & freight",
  },
  {
    id: "warehouses",
    label: "Warehouse setup",
  },
  {
    id: "distribution-center",
    label: "Distribution centers",
  },
  {
    id: "confirm-transfer",
    label: "Cargo transfers",
  },
  {
    id: "cargo-not-unloading",
    label: "Cargo not unloading",
  },
  {
    id: "production-too-slow",
    label: "Slow production",
  },
  {
    id: "terminal-congestion",
    label: "Terminal congestion",
  },
  {
    id: "long-haul-cargo",
    label: "Trucks vs. trains",
  },
  {
    id: "cargo-troubleshooting",
    label: "Fix a broken line",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/production-chains",
    label: "Production Chains",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Money & Economy Guide",
  },
  {
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
  },
  {
    href: "/transport-fever-3/beginner-guide",
    label: "Beginner Guide",
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
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 distribution center with warehouse storage and cargo transfer connections",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: publishedAt,
      dateModified: modifiedAt,
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo loading and unloading",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 warehouses",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo transfers",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 industry terminals",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 freight transport rates",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 distribution centers",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
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
