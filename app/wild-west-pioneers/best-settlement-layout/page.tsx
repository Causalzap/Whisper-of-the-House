import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildWestPioneersBestSettlementLayoutContent from "@/data/wild-west-pioneers/best-settlement-layout.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wild-west-pioneers`;
const pageUrl = `${hubUrl}/best-settlement-layout`;

const metadataTitle =
  "Wild West Pioneers Best Settlement Layout Guide";

const metadataDescription =
  "Plan a strong Wild West Pioneers start with Town Hall direction, Warehouse placement, Food Shop range, water, roads, soil, and restart rules.";

const articleDescription =
  "Choose a compact first settlement, point the Town Hall correctly, place the first Warehouse around useful resources, keep housing inside Food Shop coverage, preserve good soil, and know when an opening is bad enough to restart.";

const imageUrls = [
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-starting-resource-overlays.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-town-hall-main-road-direction.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-first-warehouse-forest.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-food-shop-range.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-soil-quality-production-buildings.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "check-map-before-town-hall",
    label: "Check the resource views",
  },
  {
    id: "town-hall-main-road",
    label: "Town Hall & main road",
  },
  {
    id: "first-warehouse",
    label: "First Warehouse placement",
  },
  {
    id: "resource-buildings",
    label: "Place resource buildings",
  },
  {
    id: "housing-food-shop",
    label: "Housing & Food Shop range",
  },
  {
    id: "water-layout",
    label: "Plan water access",
  },
  {
    id: "protect-soil-quality",
    label: "Protect good soil",
  },
  {
    id: "roads",
    label: "Main road & branches",
  },
  {
    id: "when-to-restart",
    label: "When to restart",
  },
  {
    id: "starting-layout",
    label: "Starting layout",
  },
];

const relatedLinks = [
  {
    href: "/wild-west-pioneers",
    label: "Wild West Pioneers Guide",
  },
  {
    href: "/wild-west-pioneers/production-chains",
    label: "Production Chains Guide",
  },
  {
    href: "/wild-west-pioneers/progression-guide",
    label: "Progression & Unlocks Guide",
  },
  {
    href: "/wild-west-pioneers/settler-needs",
    label: "Settler Needs & Satisfaction",
  },
  {
    href: "/wild-west-pioneers/scouts-expeditions",
    label: "Scouts, Expeditions & Second Settlement",
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
        alt: "Wild West Pioneers resource overlays used to choose a strong starting settlement layout",
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
          name: "Wild West Pioneers Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Settlement Layout",
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
        "What Is the Best Starting Layout in Wild West Pioneers?",
      description: articleDescription,
      image: imageUrls,
      datePublished: "2026-09-25",
      dateModified: "2026-09-25",
      about: [
        {
          "@type": "VideoGame",
          name: "Wild West Pioneers",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers settlement layout",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Town Hall placement",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Warehouse placement",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Food Shop range",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers water and soil layout",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="What Is the Best Starting Layout in Wild West Pioneers?"
          description={articleDescription}
          gameTitle="Wild West Pioneers"
          gameHref="/wild-west-pioneers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildWestPioneersBestSettlementLayoutContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}