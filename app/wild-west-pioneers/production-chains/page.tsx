import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildWestPioneersProductionChainsContent from "@/data/wild-west-pioneers/production-chains.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wild-west-pioneers`;
const pageUrl = `${hubUrl}/production-chains`;

const metadataTitle =
  "Wild West Pioneers Production Chains Guide: Food & Planks";

const metadataDescription =
  "Fix Wild West Pioneers production with the right log, food, Warehouse and plank flow, worker checks, bottleneck diagnosis, and expansion timing.";

const articleDescription =
  "Keep logs and food moving, diagnose Warehouse and worker failures, add plank production at the right time, and trace stalled workshops before building unnecessary duplicates.";

const imageUrls = [
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-food-chain-kitchen.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-food-shop-supply.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-no-warehouse-connected.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-sawmill-planks.webp`,
  `${siteUrl}/images/wild-west-pioneers/wild-west-pioneers-moonshiner-potato-recipe.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "logs-first",
    label: "Get logs moving",
  },
  {
    id: "food-chain",
    label: "Opening food chain",
  },
  {
    id: "warehouse-logistics",
    label: "Warehouse logistics",
  },
  {
    id: "sawmill-planks",
    label: "Sawmill & planks",
  },
  {
    id: "workers",
    label: "Worker bottlenecks",
  },
  {
    id: "no-resources-to-process",
    label: "No Resources to Process",
  },
  {
    id: "later-production",
    label: "Mid-game production",
  },
  {
    id: "when-to-expand-production",
    label: "When to add producers",
  },
  {
    id: "production-checklist",
    label: "Fix a broken chain",
  },
];

const relatedLinks = [
  {
    href: "/wild-west-pioneers",
    label: "Wild West Pioneers Guide",
  },
  {
    href: "/wild-west-pioneers/best-settlement-layout",
    label: "Best Settlement Layout",
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
        alt: "Wild West Pioneers Kitchen and opening food production chain",
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
          name: "Production Chains Guide",
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
        "How Do You Keep Production Running in Wild West Pioneers?",
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
          name: "Wild West Pioneers production chains",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers food production",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers log production",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Warehouse logistics",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers Sawmill and planks",
        },
        {
          "@type": "Thing",
          name: "Wild West Pioneers production bottlenecks",
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
          title="How Do You Keep Production Running in Wild West Pioneers?"
          description={articleDescription}
          gameTitle="Wild West Pioneers"
          gameHref="/wild-west-pioneers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildWestPioneersProductionChainsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}