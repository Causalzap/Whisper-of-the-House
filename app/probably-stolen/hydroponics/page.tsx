
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HydroponicsContent from "@/data/probably-stolen/hydroponics.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/hydroponics`;

const metadataTitle =
  "Probably Stolen Hydroponics Guide: Huge Nutrifruit & Gene Editing";

const metadataDescription =
  "Grow Huge Nutrifruit in Probably Stolen, fix Growth Score and Mineral problems, compare crops, and edit seeds with the DNA Manipulator.";

const articleTitle =
  "How Do You Grow Huge Nutrifruit and Edit Seeds in Probably Stolen?";

const articleDescription =
  "Set up Hydroponic Systems, manage Water and Minerals, prevent Growth Score damage, grow Huge Nutrifruit, choose crops, and use Gene Editing to create faster-growing seeds.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/hydroponics-first-system.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-mineral-dilution.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-nutrifruit-growth-score.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-huge-nutrifruit.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-nutrifruit-failed.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-hydroreed-water.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-bloomberry-perennial.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-neuro-core-dna.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-gene-scanner-cotton.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-dna-manipulator-slots.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-fast-grower-cotton.webp`,
  `${siteUrl}/images/probably-stolen/hydroponics-purifying-dna-disc.webp`,
];

const heroImage =
  `${siteUrl}/images/probably-stolen/hydroponics-huge-nutrifruit.webp`;

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
        alt: "Probably Stolen Huge Nutrifruit harvest showing large purple fruit inside a Hydroponic System",
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
    id: "start-hydroponics",
    label: "Unlock Hydroponics & Start Farming",
  },
  {
    id: "hydroponic-system",
    label: "Set Up a Hydroponic System",
  },
  {
    id: "water-and-minerals",
    label: "Water, Minerals & Nutrients",
  },
  {
    id: "growth-score",
    label: "Growth Score & Harvest Quality",
  },
  {
    id: "huge-nutrifruit",
    label: "How to Grow Huge Nutrifruit",
  },
  {
    id: "hydroponics-troubleshooting",
    label: "Fix Growing & Harvest Problems",
  },
  {
    id: "crop-comparison",
    label: "All Crops & Growing Requirements",
  },
  {
    id: "hydroponics-modules",
    label: "Best Modules & Upgrades",
  },
  {
    id: "gene-editing",
    label: "DNA Manipulator & Gene Editing",
  },
  {
    id: "next-steps",
    label: "What to Do After Your First Harvest",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "Water Purification & Pure Water",
  },
  {
    href: "/probably-stolen/chemist",
    label: "Chemist: Coffee, Dream Caps & Recipes",
  },
  {
    href: "/probably-stolen/achievements",
    label: "Achievements & Green Thumb",
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
          name: "Hydroponics",
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
          name: "Hydroponic farming",
        },
        {
          "@type": "Thing",
          name: "Hydroponic System",
        },
        {
          "@type": "Thing",
          name: "Plant Growth Score",
        },
        {
          "@type": "Thing",
          name: "Huge Nutrifruit",
        },
        {
          "@type": "Thing",
          name: "Hydroponic Minerals and Nutrients",
        },
        {
          "@type": "Thing",
          name: "Hydroreed and water purification",
        },
        {
          "@type": "Thing",
          name: "BloomBerry, Coffee Beans and Dream Cap",
        },
        {
          "@type": "Thing",
          name: "Hydroponics modules",
        },
        {
          "@type": "Thing",
          name: "DNA Manipulator",
        },
        {
          "@type": "Thing",
          name: "Plant genetics and seed editing",
        },
        {
          "@type": "Thing",
          name: "Genetic Complexity and Heat",
        },
        {
          "@type": "Thing",
          name: "Fast Grower II Kotton",
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
          updatedAt="November 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HydroponicsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
