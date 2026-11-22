
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterPurificationContent from "@/data/probably-stolen/water-purification.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/water-purification`;

const metadataTitle =
  "How to Make Pure Water in Probably Stolen (99.9% Guide)";

const metadataDescription =
  "Make 99.9% Pure Water in Probably Stolen. Fix the Water Purifier's 99.01% limit, upgrade Quality modules, and use a Moisture Farm or Hydroreed.";

const articleTitle =
  "How Do You Make Pure Water in Probably Stolen?";

const articleDescription =
  "Reach 99.9% Pure Water with Water Purifier Quality modules or a Moisture Farm, remove contaminants, fix purity limits and worn filters, and choose between a Water Purifier and Hydroreed for different water volumes.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/water-scanner-contaminants.webp`,
  `${siteUrl}/images/probably-stolen/moisture-farm-output.webp`,
  `${siteUrl}/images/probably-stolen/moisture-farm-high-quality.webp`,
  `${siteUrl}/images/probably-stolen/water-purifier-module-stats.webp`,
  `${siteUrl}/images/probably-stolen/water-filter-durability.webp`,
  `${siteUrl}/images/probably-stolen/pure-water-scanner-result.webp`,
  `${siteUrl}/images/probably-stolen/water-purifier-9901-purity.webp`,
  `${siteUrl}/images/probably-stolen/water-purifier-quality-modules.webp`,
  `${siteUrl}/images/probably-stolen/water-purifier-pure-water-result.webp`,
];

const heroImage =
  `${siteUrl}/images/probably-stolen/water-purifier-pure-water-result.webp`;

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
        alt: "Probably Stolen Water Purifier producing tested 99.90% Pure Water with 99.9% Max Purity",
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
    id: "starting-water",
    label: "Moisture Farm & Starting Water",
  },
  {
    id: "manual-filtering",
    label: "Filters, UV Lamp & Tablets",
  },
  {
    id: "water-purifier",
    label: "Water Purifier & Hydroreed",
  },
  {
    id: "quality-troubleshooting",
    label: "Fix Water Purity Problems",
  },
  {
    id: "finished-water",
    label: "When Pure Water Isn't Needed",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/water-merchant-guide",
    label: "Water Merchant: Start to Late Game",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Compare Production Costs & Profits",
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
          name: "Water Purification",
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
      datePublished: "2026-10-26",
      dateModified: "2026-11-22",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Pure Water production",
        },
        {
          "@type": "Thing",
          name: "Water Purifier Quality modules",
        },
        {
          "@type": "Thing",
          name: "Water Purifier Max Purity",
        },
        {
          "@type": "Thing",
          name: "99.01% High-Quality Water",
        },
        {
          "@type": "Thing",
          name: "99.9% Pure Water",
        },
        {
          "@type": "Thing",
          name: "Moisture Farm Quality upgrades",
        },
        {
          "@type": "Thing",
          name: "Hydroreed water purification",
        },
        {
          "@type": "Thing",
          name: "Water Filters and UV Lamp",
        },
        {
          "@type": "Thing",
          name: "Water Purification Tablets",
        },
        {
          "@type": "Thing",
          name: "Filter durability",
        },
        {
          "@type": "Thing",
          name: "Water mixing and contamination",
        },
        {
          "@type": "Thing",
          name: "AquaScan and Match Label",
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
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WaterPurificationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
