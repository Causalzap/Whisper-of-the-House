
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WineMakingContent from "@/data/probably-stolen/wine-making.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/wine-making`;

const metadataTitle =
  "Probably Stolen Wine Making Guide: Master Vintage & Aging";

const metadataDescription =
  "Make Master Vintage Wine in Probably Stolen with BloomBerry recipes, Wine Scores, water and Yeast bonuses. Fix fermentation, use AgeWell, and compare batches.";

const articleTitle =
  "How Do You Make Master Vintage Wine in Probably Stolen?";

const articleDescription =
  "Unlock Wine Making, brew your first bottle, calculate BloomBerry Wine Scores, reach Master Vintage, fix fermentation problems, and decide when to age or sell your wine.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/wine-making-fermenting-guide.webp`,
  `${siteUrl}/images/probably-stolen/wine-making-fermentation-progress.webp`,
  `${siteUrl}/images/probably-stolen/wine-making-bloomberry-quality.webp`,
  `${siteUrl}/images/probably-stolen/wine-making-master-vintage.webp`,
  `${siteUrl}/images/probably-stolen/wine-making-yeast-bioreactor.webp`,
  `${siteUrl}/images/probably-stolen/wine-making-agewell.webp`,
];

const heroImage = imageUrls[3];

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
        alt: "Probably Stolen Master Vintage BloomBerry Wine showing an estimated value of 186 Credits after two days of aging",
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
    id: "start-wine-making",
    label: "Unlock Wine Making",
  },
  {
    id: "first-wine-bottle",
    label: "Make Your First Wine",
  },
  {
    id: "bloomberry-quality",
    label: "BloomBerry Quality & Inspection",
  },
  {
    id: "wine-quality-score",
    label: "Wine Score & Quality Grades",
  },
  {
    id: "master-vintage-recipes",
    label: "Best Master Vintage Recipes",
  },
  {
    id: "yeast-and-fermentation",
    label: "Yeast & Fermentation Time",
  },
  {
    id: "wine-troubleshooting",
    label: "Fix Wine Making Problems",
  },
  {
    id: "wine-aging",
    label: "Wine Aging & AgeWell",
  },
  {
    id: "bloomberry-supply",
    label: "BloomBerry & Bottle Supply",
  },
  {
    id: "wine-profit",
    label: "Master Vintage vs Multiple Bottles",
  },
  {
    id: "wine-next-steps",
    label: "What to Do After Master Vintage",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Walkthrough & Guides Hub",
  },
  {
    href: "/probably-stolen/hydroponics",
    label: "Hydroponics: BloomBerry Farming & Growth Score",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "Water Purification: How to Make High-Quality Water",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner & Production Costs",
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
          name: "Wine Making",
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
          name: "Wine Making",
        },
        {
          "@type": "Thing",
          name: "Master Vintage Wine",
        },
        {
          "@type": "Thing",
          name: "BloomBerry Wine recipes",
        },
        {
          "@type": "Thing",
          name: "BloomBerry quality and inspection",
        },
        {
          "@type": "Thing",
          name: "Wine Score and quality grades",
        },
        {
          "@type": "Thing",
          name: "Water quality and wine fermentation",
        },
        {
          "@type": "Thing",
          name: "Yeast, Super Yeast and Yeast Bioreactor",
        },
        {
          "@type": "Thing",
          name: "Wine aging and AgeWell",
        },
        {
          "@type": "Thing",
          name: "Wine fermentation troubleshooting",
        },
        {
          "@type": "Thing",
          name: "Wine production and ingredient allocation",
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
          <WineMakingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
