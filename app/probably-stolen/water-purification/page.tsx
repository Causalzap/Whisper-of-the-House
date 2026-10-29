
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterPurificationContent from "@/data/probably-stolen/water-purification.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/water-purification`;

const metadataTitle =
  "How to Make Pure Water in Probably Stolen";

const metadataDescription =
  "Make 99.9% Pure Water in Probably Stolen with Water Purifier Quality modules. Fix worn filters, water mixing, low Max Purity, and mismatched labels.";

const articleDescription =
  "Make Pure Water in Probably Stolen by checking AquaScan purity, using water treatments and Quality modules, and upgrading a Water Purifier to 99.9% Max Purity. Troubleshoot depleted filters, mix nearly clean water to cross 99%, and correct outdated container labels with Match Label.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/water-scanner-contaminants.webp`,
  `${siteUrl}/images/probably-stolen/moisture-farm-output.webp`,
  `${siteUrl}/images/probably-stolen/moisture-farm-high-quality.webp`,
  `${siteUrl}/images/probably-stolen/water-purifier-module-stats.webp`,
  `${siteUrl}/images/probably-stolen/water-filter-durability.webp`,
  `${siteUrl}/images/probably-stolen/pure-water-scanner-result.webp`,
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
      "Produce Pure Water with Moisture Farm and Water Purifier upgrades, troubleshoot filters, and fix incorrect water labels.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        alt: "Probably Stolen Water Scanner showing 99.97% Pure Water with an outdated High-Quality Water label",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Use Water Purifier Quality modules to reach 99.9% purity, troubleshoot filters, and correct water labels.",
    images: [imageUrls[5]],
  },
};

const toc = [
  {
    id: "starting-water",
    label: "Moisture Farm & Starting Water",
  },
  {
    id: "manual-filtering",
    label: "Manual Filtering",
  },
  {
    id: "water-purifier",
    label: "Water Purifier Setup",
  },
  {
    id: "quality-troubleshooting",
    label: "Why Water Isn't Pure",
  },
  {
    id: "finished-water",
    label: "Storing Pure Water",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/water-merchant-guide",
    label: "Water Merchant: From Starting Stock to Late Game",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Compare Water Production Costs & Profits",
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
      headline:
        "How to Make Pure Water in Probably Stolen",
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
          name: "Pure Water production",
        },
        {
          "@type": "Thing",
          name: "Water Scanner and water purity",
        },
        {
          "@type": "Thing",
          name: "Moisture Farm Quality upgrades",
        },
        {
          "@type": "Thing",
          name: "Water Filters, Water Purification Tablets, and UV Lamp",
        },
        {
          "@type": "Thing",
          name: "Water Purifier",
        },
        {
          "@type": "Thing",
          name: "Filter durability and contaminants",
        },
        {
          "@type": "Thing",
          name: "Water labels and Match Label",
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
          title="How to Make Pure Water in Probably Stolen"
          description="Turn High-Quality Water into Pure Water with the right filters and purifier settings, then check why a finished batch may still show the wrong grade or label."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
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
