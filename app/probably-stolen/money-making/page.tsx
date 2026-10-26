
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MoneyMakingContent from "@/data/probably-stolen/money-making.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/money-making`;

const metadataTitle =
  "Probably Stolen Money-Making Planner & Profit Calculator";

const metadataDescription =
  "Compare water, wine, rat farming and trading in Probably Stolen. Plan rent, estimate batch profit, equipment payback and 7-day cash flow.";

const articleDescription =
  "Compare Probably Stolen money-making strategies with an interactive Planner for Water Trading, Wine Production, Rat Farming, and buying and reselling goods. Enter actual prices, saleable quantities, production costs, equipment investment, and expected sale dates. Examine three operating cases, calculate batch profits, compare equipment payback, assess rent-day cash safety, and simulate seven-day balances with optional two-business combinations.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/water-merchant-supply-crisis.webp`,
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
      "Compare water, wine, rat farming, and trading with your own prices, costs, sale dates, and rent obligations.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Probably Stolen Water Supply Crisis showing water price changes and rent due",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Calculate batch profit, equipment payback, and seven-day cash flow before choosing your next business investment.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "profit-planner",
    label: "Interactive Profit Planner",
  },
  {
    id: "rent-survival",
    label: "Case 1: Survive Rent",
  },
  {
    id: "water-crisis",
    label: "Case 2: Water Crisis",
  },
  {
    id: "business-comparison",
    label: "Case 3: Water vs Wine vs Rats",
  },
  {
    id: "reselling",
    label: "Buying & Reselling Goods",
  },
  {
    id: "cash-flow",
    label: "Profit, Payback & Cash Flow",
  },
  {
    id: "demo-prices",
    label: "Demo Prices & Market Changes",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/water-merchant-guide",
    label: "Water Merchant: Starting Route & Equipment Decisions",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "How to Produce Pure Water",
  },
  {
    href: "/probably-stolen/rat-breeding",
    label: "Rat Farming: Breeding, Growth & Harvesting",
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
          name: "Money-Making Planner",
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
        "Probably Stolen Money-Making Planner: Which Business Pays Best?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-26",
      dateModified: "2026-10-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Money-making strategies",
        },
        {
          "@type": "Thing",
          name: "Water Trading and Water Supply Crisis",
        },
        {
          "@type": "Thing",
          name: "Wine production profitability",
        },
        {
          "@type": "Thing",
          name: "Rat farming costs and revenue",
        },
        {
          "@type": "Thing",
          name: "Buying and reselling merchandise",
        },
        {
          "@type": "Thing",
          name: "Batch profit and equipment payback",
        },
        {
          "@type": "Thing",
          name: "Rent safety and seven-day cash flow",
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
          title="Probably Stolen Money-Making Planner: Which Business Pays Best?"
          description="Enter your current prices, production costs, and sale dates to compare business profits, equipment payback, and the cash you'll have left when rent is due."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoneyMakingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
