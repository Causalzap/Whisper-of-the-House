import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProductionChainsContent from "@/data/transport-fever-3/production-chains.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/production-chains`;

const metadataTitle =
  "Transport Fever 3 Production Chains & Industry Guide";

const metadataDescription =
  "See Transport Fever 3 production chains, industry inputs and outputs, boosters, ratios, climate differences, and how to diagnose broken supply chains.";

const articleDescription =
  "Follow every Transport Fever 3 production chain, compare industry inputs and outputs, understand boosters and workers, and diagnose where a cargo network is actually getting stuck.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-industry-production-panel.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-sawmill-logs-planks-recipe.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-sawmill-worker-boost-bottleneck.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-oil-refinery-production-ratio.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-chemical-plant-production-ratio.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "all-production-chains",
    label: "All Production Chains",
  },
  {
    id: "required-inputs-vs-boosters",
    label: "Inputs vs Boosters",
  },
  {
    id: "workers",
    label: "Workers & Bottlenecks",
  },
  {
    id: "how-to-read-industry-panel",
    label: "Industry Panel",
  },
  {
    id: "input-stock-empty",
    label: "Empty Input Stock",
  },
  {
    id: "output-stock-full",
    label: "Full Output Stock",
  },
  {
    id: "forestry-chain",
    label: "Logs to Planks",
  },
  {
    id: "oil-chemical-chain",
    label: "Oil & Chemicals",
  },
  {
    id: "steel-machines-chain",
    label: "Steel & Machines",
  },
  {
    id: "production-chain-diagnosis",
    label: "Diagnose a Broken Chain",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Economy & Money Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
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
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 industry production panel with inputs outputs and boosters",
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

export default function TransportFever3ProductionChainsPage() {
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
            name: "Transport Fever 3",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Transport Fever 3 Production Chains",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        url: pageUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        dateModified: "2026-10-03",
        author: {
          "@id": `${siteUrl}#organization`,
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
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
      },
    ],
  };

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
          title="Transport Fever 3 Production Chains & Industry Guide"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProductionChainsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}