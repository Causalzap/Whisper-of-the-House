
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FurnaceContent from "@/data/probably-stolen/furnace.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/furnace`;

const metadataTitle =
  "Probably Stolen Furnace Guide: Perfect Ingots, Flux & Blast";

const metadataDescription =
  "Make Perfect Purity Metal Ingots in Probably Stolen. Learn Furnace recipes, Scrap vs Ore, +200% Quality, +300% Blast, Flux, Junk Processing, and Energy fixes.";

const articleTitle =
  "How Do You Make Perfect Ingots with a Furnace in Probably Stolen?";

const articleDescription =
  "Smelt Scrap Metal and Metal Ore, reach Perfect Purity with Quality Modules, use Blast for two Ingots, improve results with Flux, and fix Furnace power or production problems.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/furnace-base-energy.webp`,
  `${siteUrl}/images/probably-stolen/furnace-operation-guide.webp`,
  `${siteUrl}/images/probably-stolen/furnace-low-purity-ingot.webp`,
  `${siteUrl}/images/probably-stolen/furnace-quality-modules.webp`,
  `${siteUrl}/images/probably-stolen/furnace-perfect-ingot.webp`,
  `${siteUrl}/images/probably-stolen/furnace-blast-module.webp`,
  `${siteUrl}/images/probably-stolen/furnace-flux-agent.webp`,
  `${siteUrl}/images/probably-stolen/furnace-reactor-power.webp`,
];

const heroImage = imageUrls[4];

const publishedDate = "2026-11-23";
const modifiedDate = "2026-11-23";

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
        alt: "Probably Stolen Furnace producing a Perfect Purity Metal Ingot worth 150 Credits",
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
    id: "furnace-start",
    label: "Get & Use a Furnace",
  },
  {
    id: "furnace-inputs",
    label: "Scrap Metal vs Metal Ore",
  },
  {
    id: "ingot-purity",
    label: "All 6 Ingot Purity Grades",
  },
  {
    id: "furnace-quality",
    label: "Quality Modules & Thresholds",
  },
  {
    id: "perfect-ingots",
    label: "How to Make Perfect Ingots",
  },
  {
    id: "blast-module",
    label: "Blast Furnace Module",
  },
  {
    id: "flux-smelting",
    label: "Flux Smelting Agent",
  },
  {
    id: "junk-processing",
    label: "Junk Processing Module",
  },
  {
    id: "furnace-power",
    label: "Furnace Energy & Power",
  },
  {
    id: "furnace-troubleshooting",
    label: "Furnace Problems & Fixes",
  },
  {
    id: "furnace-best-setup",
    label: "Best Furnace Setups",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Walkthrough & Guides Hub",
  },
  {
    href: "/probably-stolen/gunsmith",
    label: "Gunsmith: Gun Parts, Metal Printing & Custom Orders",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner & Production Costs",
  },
  {
    href: "/probably-stolen/keycards",
    label: "Keycards & Supply Crates",
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
          name: "Furnace",
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

      datePublished: publishedDate,
      dateModified: modifiedDate,

      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Furnace smelting",
        },
        {
          "@type": "Thing",
          name: "Scrap Metal and Metal Ore recipes",
        },
        {
          "@type": "Thing",
          name: "Metal Ingot purity grades",
        },
        {
          "@type": "Thing",
          name: "Perfect Purity Metal Ingots",
        },
        {
          "@type": "Thing",
          name: "Furnace Quality Modules",
        },
        {
          "@type": "Thing",
          name: "Blast Furnace Module",
        },
        {
          "@type": "Thing",
          name: "Flux Smelting Agent",
        },
        {
          "@type": "Thing",
          name: "Junk Processing Module",
        },
        {
          "@type": "Thing",
          name: "Furnace Energy and Efficiency",
        },
        {
          "@type": "Thing",
          name: "Furnace troubleshooting",
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FurnaceContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
