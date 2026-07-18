import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadSellProductsContent from "@/data/ore-factory-squad/how-to-sell-products.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/how-to-sell-products`;

const imageUrls = [
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-product-pallet-storage-area.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-sorting-station-storage.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-stock-sell-coal-offer.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-stock-sale-40-xp.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-sales-unavailable-at-night.webp`,
];

const toc = [
  {
    id: "stock-sell-inventory",
    label: "Put products in inventory",
  },
  {
    id: "read-stock-sell-offer",
    label: "Read Stock Sell offers",
  },
  {
    id: "stock-sell-troubleshooting",
    label: "Stock Sell troubleshooting",
  },
  {
    id: "stock-sell-vs-contracts",
    label: "Stock Sell vs Contracts",
  },
  {
    id: "what-to-sell",
    label: "What to sell or keep",
  },
  {
    id: "night-restrictions",
    label: "Night restrictions",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/ore-factory-squad/",
    label: "Ore Factory Squad Guide Hub",
  },
  {
    href: "/ore-factory-squad/beginner-guide/",
    label: "Beginner Guide",
  },
  {
    href: "/ore-factory-squad/complete-contracts-pallet-packer/",
    label: "Contracts & Pallet Packer Guide",
  },
  {
    href: "/ore-factory-squad/find-limestone-make-cement/",
    label: "Limestone & Cement Guide",
  },
  {
    href: "/ore-factory-squad/remaining-resources-switch-property/",
    label: "Remaining Resources & Property Guide",
  },
];

export const metadata: Metadata = {
  title: "How to Sell Products in Ore Factory Squad: Stock Sell Guide",
  description:
    "Sell products in Ore Factory Squad with tracked pallet storage, Stock Sell demand and price checks, contract comparisons, night limits, and common fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "How to Sell Products in Ore Factory Squad: Stock Sell Guide",
    description:
      "Move product pallets into tracked storage, read buyer demand and unit prices, fix missing stock, recover negative cash, and compare Stock Sell with Contracts.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Stock Sell offer showing Coal stock buyer demand and price per unit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ore Factory Squad Stock Sell Guide",
    description:
      "Learn how tracked pallet storage works, why products may be missing, how buyer demand affects sales, and when to use Contracts instead.",
    images: [imageUrls[2]],
  },
};

const faqEntities = [
  {
    question: "What happens to the pallet after a Stock Sell transaction?",
    answer:
      "When I sold all 6 Sand, the products disappeared and the empty blue pallet remained in the factory. In the partial Coal sale, the unsold stock remained available rather than the transaction clearing all 90 Coal.",
  },
  {
    question:
      "Can I complete a sale when buyer Demand is higher than my stock?",
    answer:
      "Yes. The Sand buyer wanted more than the 6 units I had, but the sale still completed for the available six. I did not need to produce the buyer's full Demand before confirming the transaction.",
  },
  {
    question: "Does Stock Sell complete an active contract?",
    answer:
      "No. Even when Stock Sell lists the same product required by a contract, the sale does not advance the contract counters. It can instead remove stock that the Pallet Packer still needs.",
  },
  {
    question:
      "Why does Stock Sell open the wrong computer app with a controller?",
    answer:
      "Update to v1.0.1 or later. The launch hotfix corrected a controller issue that could open the wrong application during the Stock Sell tutorial.",
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
          name: "Ore Factory Squad Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Sell Products",
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
        "How to Sell Products in Ore Factory Squad: Stock Sell Guide",
      description:
        "This Ore Factory Squad Stock Sell guide explains how to place finished products on physical pallets, move them fully inside the marked storage area, distinguish internal Factory Storage from tracked pallet stock, read buyer Demand and price per unit, sell partial pallets, understand what remains after a limited sale, fix missing products, recover from negative cash, compare immediate Stock Sell income with Contract rewards, and prepare sales around the nighttime trading restriction.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      about: [
        {
          "@type": "VideoGame",
          name: "Ore Factory Squad",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "How to sell products in Ore Factory Squad",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Stock Sell",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad product not showing",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad marked storage area",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad tracked stock",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad partial pallet sale",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad buyer Demand",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Stock Sell price",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Stock Sell versus Contracts",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad negative cash",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad sales unavailable at night",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Stock Sell controller fix",
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
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="How to Sell Products in Ore Factory Squad"
          description="Move finished product pallets into tracked storage, read Stock Sell demand and unit prices, fix missing inventory, recover negative cash, and decide when a Contract is more valuable than an immediate sale."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadSellProductsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}