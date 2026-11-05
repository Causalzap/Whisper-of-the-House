import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LoftiaMoneyMakingContent from "@/data/loftia/money-making.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/loftia`;
const pageUrl = `${hubUrl}/money-making`;

const metadataTitle =
  "Loftia Money Making: How to Earn Dew Fast";

const metadataDescription =
  "Earn Dew in Loftia with Fruit Smoothies, crops, and cooking. Compare seed costs, shipping prices, and when cooking is worth more than selling raw ingredients.";

const articleTitle =
  "How Do You Make Dew Fast in Loftia?";

const articleDescription =
  "Gather Wild Berries for Fruit Smoothies, compare early crop returns, decide when to cook Tomatoes or Potatoes, and use the Shipping Bin or Vending Machine to earn Dew.";

const imageUrls = [
  `${siteUrl}/images/loftia/loftia-fruit-smoothie-recipe.webp`,
  `${siteUrl}/images/loftia/loftia-fries-recipe-cooking-oil.webp`,
  `${siteUrl}/images/loftia/loftia-shipping-bin-crop-sales.webp`,
  `${siteUrl}/images/loftia/loftia-vending-machine-item-listing.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "first-dew",
    label: "Your First Dew",
  },
  {
    id: "fruit-smoothies",
    label: "Fruit Smoothies",
  },
  {
    id: "smoothie-profit",
    label: "Smoothie Earnings",
  },
  {
    id: "crop-profits",
    label: "Crop Returns",
  },
  {
    id: "cooking-comparison",
    label: "Cooking vs. Raw Crops",
  },
  {
    id: "fries",
    label: "Fries & Cooking Oil",
  },
  {
    id: "shipping-bin",
    label: "Shipping Bin",
  },
  {
    id: "vending-machine",
    label: "Vending Machine",
  },
  {
    id: "spending-dew",
    label: "What to Buy First",
  },
  {
    id: "common-money-mistakes",
    label: "Money Mistakes",
  },
];

const relatedLinks = [
  {
    href: "/loftia",
    label: "Loftia Guide",
  },
  {
    href: "/loftia/beginner-guide",
    label: "Beginner: First Quests & Glider",
  },
  {
    href: "/loftia/research-and-tool-upgrades",
    label: "Research: Hammer & Pruners Lv.2",
  },
  {
    href: "/loftia/pets",
    label: "Pets: First Dog Rescue",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
    images: [
      {
        url: heroImage,
        alt: "Fruit Smoothie recipe with Wild Berries and Sugar in Loftia",
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
          name: "Loftia",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Money Making",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-05",
      dateModified: "2026-11-05",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function LoftiaMoneyMakingPage() {
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
          gameTitle="Loftia"
          gameHref="/loftia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LoftiaMoneyMakingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
