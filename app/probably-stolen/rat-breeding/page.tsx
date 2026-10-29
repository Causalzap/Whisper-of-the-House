
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RatBreedingContent from "@/data/probably-stolen/rat-breeding.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/rat-breeding`;

const metadataTitle =
  "Probably Stolen Rat Breeding: Growth, Genetics & Farming";

const metadataDescription =
  "Breed better rats in Probably Stolen. Compare parent and offspring Growth, manage cages, food and disease, use serums, and harvest meat.";

const articleDescription =
  "Breed and raise rats in Probably Stolen using Animal Cages, controlled feeding, and parent selection. Compare 1.46 and 1.15 Growth parents with offspring reaching 1.30 and 1.37, examine a naturally born 1.48 Growth rat, distinguish serum-boosted attributes from natural Growth, and manage overcrowding, disease, aging, cage expansion, and meat harvesting.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/rat-cage-metal-ingot-expansion.webp`,
  `${siteUrl}/images/probably-stolen/rat-breeding-parent-growth.webp`,
  `${siteUrl}/images/probably-stolen/rat-breeding-offspring-growth.webp`,
  `${siteUrl}/images/probably-stolen/rat-natural-growth-148.webp`,
  `${siteUrl}/images/probably-stolen/rat-growth-serum-boost.webp`,
  `${siteUrl}/images/probably-stolen/rat-cage-overcrowding.webp`,
  `${siteUrl}/images/probably-stolen/rat-adult-521g.webp`,
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
      "Select high-Growth breeding rats, compare offspring traits, manage cages and disease, and distinguish natural Growth from serum boosts.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        alt: "Probably Stolen newborn female rat with a natural Growth Rate of 1.48",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Improve rat Growth through breeding, manage food and overcrowding, and understand serum-boosted attributes.",
    images: [imageUrls[3]],
  },
};

const toc = [
  {
    id: "starting-rats",
    label: "Rat Wrangler Starting Setup",
  },
  {
    id: "growth-and-breeding",
    label: "Growth & Breeding Stats",
  },
  {
    id: "growth-example",
    label: "Parent & Offspring Growth",
  },
  {
    id: "serums",
    label: "Natural Growth vs Serum",
  },
  {
    id: "food-and-cages",
    label: "Food, Cages & Overcrowding",
  },
  {
    id: "disease-aging",
    label: "Disease & Aging Rats",
  },
  {
    id: "giant-rats",
    label: "Giant Rats & Meat Harvesting",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Compare Rat Farming Profits & Cash Flow",
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
          name: "Rat Breeding",
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
        "How to Breed Better Rats in Probably Stolen",
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
          name: "Rat Wrangler Starting Scenario",
        },
        {
          "@type": "Thing",
          name: "Rat breeding and Growth Rate",
        },
        {
          "@type": "Thing",
          name: "Parent selection and offspring traits",
        },
        {
          "@type": "Thing",
          name: "Livestock Steroid Serum and Immunity Serum",
        },
        {
          "@type": "Thing",
          name: "Animal Cage expansion and overcrowding",
        },
        {
          "@type": "Thing",
          name: "Rat disease and longevity",
        },
        {
          "@type": "Thing",
          name: "Giant Rats and meat production",
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
          title="How to Breed Better Rats in Probably Stolen"
          description="Select stronger breeding parents, compare the Growth of newborn rats, manage cages and feeding, and decide which animals to keep or harvest."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RatBreedingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
