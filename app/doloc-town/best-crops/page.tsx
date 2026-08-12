import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownBestCropsContent from "@/data/doloc-town/best-crops.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/best-crops`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-seed-shop-early-crops.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-seed-research-coffee-tea.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-crop-season-restrictions.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-tea-tree-shrub-basin.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-brewing-cask-crop-processing.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Best Crops: Profit Calculator & Season Guide",
  description:
    "Find the best Doloc Town crops by season, genes and sell method. Compare direct and processed profit per day, tile, growth time and seed cost.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Best Crops and Profit Calculator",
    description:
      "Compare crops by climate period, gene progress, direct sale and processing, then rank the best options for the farm you can actually support.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 754,
        height: 495,
        alt: "Doloc Town seed research screen with Coffee and Tea Tree crop research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Best Crops and Profit Calculator",
    description:
      "Filter crops by season, genes and sell method, then compare profit per day, profit per tile, growth time and seed cost.",
    images: [imageUrls[1]],
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Crops and Profit Calculator",
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
        "Doloc Town Best Crops Guide and Crop Profit Calculator: Seasons, Genes, Processing, and Profit per Day",
      description:
        "This Doloc Town best crops guide combines an interactive crop profit calculator with practical planting decisions for Light Rain, Heavy Rain, Early Dry, Harsh Dry, and indoor growing. It compares seed cost, first growth time, regrowth, direct-sale value, processed value, profit per day, profit per tile, planter requirements, and gene progression so I can choose the strongest crop my current farm can actually support.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Doloc Town",
        },
        {
          "@type": "Thing",
          name: "Doloc Town best crops",
        },
        {
          "@type": "Thing",
          name: "Doloc Town crop profit calculator",
        },
        {
          "@type": "Thing",
          name: "Doloc Town seasons",
        },
        {
          "@type": "Thing",
          name: "Doloc Town crop genes",
        },
        {
          "@type": "Thing",
          name: "Doloc Town crop processing",
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
      "@type": "WebApplication",
      "@id": `${pageUrl}#crop-calculator`,
      name: "Doloc Town Crop Profit Calculator",
      url: `${pageUrl}#crop-calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      inLanguage: "en",
      description:
        "Interactive Doloc Town crop calculator for comparing crop profit by climate period, gene progression, sell method, crop type, profit per day, profit per tile, growth time, and seed cost.",
      about: {
        "@type": "VideoGame",
        name: "Doloc Town",
      },
      isPartOf: {
        "@id": `${pageUrl}#article`,
      },
    },
  ],
};

const toc = [
  {
    id: "crop-calculator",
    label: "Crop profit calculator",
  },
  {
    id: "starter-crops",
    label: "Best starter crops",
  },
  {
    id: "unlock-seeds",
    label: "Unlock better seeds",
  },
  {
    id: "climate-periods",
    label: "Climate periods",
  },
  {
    id: "light-rain",
    label: "Light Rain crops",
  },
  {
    id: "shrub-basin",
    label: "Shrub Plant Basin",
  },
  {
    id: "grape-processing",
    label: "Grape and processing",
  },
  {
    id: "heavy-rain",
    label: "Heavy Rain crops",
  },
  {
    id: "early-dry",
    label: "Early Dry crops",
  },
  {
    id: "harsh-dry",
    label: "Harsh Dry crops",
  },
  {
    id: "genes",
    label: "Genes and crop rankings",
  },
  {
    id: "when-not-to-buy",
    label: "When not to buy seeds",
  },
  {
    id: "next",
    label: "What to build next",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/acid-rain",
    label: "Acid Rain and Crop Protection",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
  {
    href: "/doloc-town/crop-genetics",
    label: "Crop Genetics Guide",
  },
  {
    href: "/doloc-town/animals",
    label: "Animals and Livestock Guide",
  },
  {
    href: "/doloc-town/walkthrough",
    label: "Doloc Town Walkthrough",
  },
];

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
          title="Doloc Town Best Crops and Profit Calculator"
          description="Use the crop calculator to filter by climate period, gene progress, sell method and planter type, then compare which crops are actually worth planting at my current stage."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownBestCropsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}