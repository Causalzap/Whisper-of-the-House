
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AquacultureContent from "@/data/probably-stolen/aquaculture.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/aquaculture`;

const metadataTitle =
  "Probably Stolen Aquaculture Guide: Fish Breeding, RAS & Caviar";

const metadataDescription =
  "Breed fish in Probably Stolen, fix RAS water and power problems, raise Tilapia and Sturgeon, farm Caviar, and configure Auto Butcher.";

const articleTitle =
  "How Do You Breed Fish, Fix RAS Problems & Farm Caviar in Probably Stolen?";

const articleDescription =
  "Start Aquaculture, manage RAS water and Energy, feed and breed fish, fix dying fish and missing Roe, unlock Sturgeon, harvest Caviar, and automate a three-tank farm.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/aquaculture-fertilized-roe-purchase.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-first-ras.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-ras-insufficient-energy.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-feeding-dispenser-tooltip.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-gutter-tilapia-roe.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-electric-eel-power.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-sturgeon-gravid.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-sturgeon-surgery-harvest.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-auto-butcher-settings.webp`,
  `${siteUrl}/images/probably-stolen/aquaculture-graft-tilapia-setup.webp`,
];

const heroImage =
  `${siteUrl}/images/probably-stolen/aquaculture-first-ras.webp`;

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
        alt: "Probably Stolen Recirculating Aquaculture System showing the fish tank, water reservoir, filters, and feeding equipment",
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
    id: "start-aquaculture",
    label: "Start Aquaculture & Set Up RAS",
  },
  {
    id: "ras-water-power",
    label: "RAS Water, Energy & Filters",
  },
  {
    id: "fish-feeding-growth",
    label: "Fish Food & Growth",
  },
  {
    id: "breeding-and-roe",
    label: "Fish Breeding, Eggs & Roe",
  },
  {
    id: "fish-dying",
    label: "Fish Dying & Breeding Problems",
  },
  {
    id: "fish-species",
    label: "Best Fish & Species Comparison",
  },
  {
    id: "sturgeon-caviar",
    label: "Sturgeon & Caviar Farming",
  },
  {
    id: "auto-butcher",
    label: "Auto Butcher Settings",
  },
  {
    id: "three-tank-farm",
    label: "Three-Tank Fish Farm",
  },
  {
    id: "next-steps",
    label: "What to Do Next",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/chemist",
    label: "Chemist: Reagents & Heavy Metals",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "Water Purification & Pure Water",
  },
  {
    href: "/probably-stolen/keycards",
    label: "Keycards & Supply Crates",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner",
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
          name: "Aquaculture",
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
      datePublished: "2026-11-22",
      dateModified: "2026-11-22",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Aquaculture and fish farming",
        },
        {
          "@type": "Thing",
          name: "Recirculating Aquaculture System",
        },
        {
          "@type": "Thing",
          name: "Fish breeding and Roe",
        },
        {
          "@type": "Thing",
          name: "Tilapia, Gutter Tilapia and Graft Tilapia",
        },
        {
          "@type": "Thing",
          name: "Sturgeon and Caviar",
        },
        {
          "@type": "Thing",
          name: "Eel and Electric Eel",
        },
        {
          "@type": "Thing",
          name: "Livestock Feed Dispenser",
        },
        {
          "@type": "Thing",
          name: "Auto Butcher",
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
          <AquacultureContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
