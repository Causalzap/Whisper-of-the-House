import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadGuideHubContent from "@/data/ore-factory-squad/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/ore-factory-squad`;

const heroImageUrl = `${siteUrl}/images/ore-factory-squad/ore-factory-squad-first-property-purchase.webp`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-sorting-station-storage.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-mining-lift-full-depth-route.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-contract-pallet-packer.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-level-four-unlocks.webp`,
];

const toc = [
  {
    id: "choose-guide",
    label: "What is blocking you?",
  },
  {
    id: "start-here",
    label: "Greenpark to Level 5 route",
  },
  {
    id: "opening-route",
    label: "Storage, sales and contracts",
  },
  {
    id: "mining-and-properties",
    label: "Mining Lift and properties",
  },
  {
    id: "factory-and-contracts",
    label: "Products and contract delivery",
  },
  {
    id: "level-four-five",
    label: "Level 4 and Level 5",
  },
  {
    id: "all-guides",
    label: "All Ore Factory Squad guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/ore-factory-squad/beginner-guide/",
    label: "Ore Factory Squad Beginner Guide",
  },
  {
    href: "/ore-factory-squad/how-to-sell-products/",
    label: "How to Sell Products",
  },
  {
    href: "/ore-factory-squad/complete-contracts-pallet-packer/",
    label: "Contracts & Pallet Packer Guide",
  },
  {
    href: "/ore-factory-squad/mining-lift-guide/",
    label: "Mining Lift Guide",
  },
  {
    href: "/ore-factory-squad/find-limestone-make-cement/",
    label: "Limestone & Cement Guide",
  },
  {
    href: "/ore-factory-squad/remaining-resources-switch-property/",
    label: "Remaining Resources & Property Guide",
  },
  {
    href: "/ore-factory-squad/dynamite-worth-it/",
    label: "Dynamite Guide",
  },
  {
    href: "/ore-factory-squad/smelt-copper-iron-ingots/",
    label: "Copper & Iron Smelting Guide",
  },
];

const guideItems = [
  {
    name: "Ore Factory Squad Beginner Guide",
    url: `${pageUrl}/beginner-guide`,
    description:
      "Follow the tested Greenpark Lot to Level 5 route with the first dig, factory setup, sales, contracts, upgrades, Mining Lift, and metal progression.",
  },
  {
    name: "Ore Factory Squad How to Sell Products",
    url: `${pageUrl}/how-to-sell-products`,
    description:
      "Fix finished products missing from Stock Sell, understand marked storage, compare buyer demand, and sell partial pallets.",
  },
  {
    name: "Ore Factory Squad Contracts and Pallet Packer Guide",
    url: `${pageUrl}/complete-contracts-pallet-packer`,
    description:
      "Choose achievable contracts, match exact finished products, clear blocked outputs, load the truck, and complete delivery.",
  },
  {
    name: "Ore Factory Squad Mining Lift Guide",
    url: `${pageUrl}/mining-lift-guide`,
    description:
      "Place the Lift Head, add Extensions, fix blocked ladders, and move packed mining boxes from lower resource layers.",
  },
  {
    name: "Ore Factory Squad Limestone and Cement Guide",
    url: `${pageUrl}/find-limestone-make-cement`,
    description:
      "Find Limestone, make Limestone Blocks, use the Forming Press, and calculate the tested Cement recipe.",
  },
  {
    name: "Ore Factory Squad Remaining Resources and Property Guide",
    url: `${pageUrl}/remaining-resources-switch-property`,
    description:
      "Read resource layers, recover Greenpark, fix property purchase errors, and choose Westmont or Forest.",
  },
  {
    name: "Ore Factory Squad Dynamite Guide",
    url: `${pageUrl}/dynamite-worth-it`,
    description:
      "Compare Dynamite costs, reduced resource yield, Secret Cave access, and safer alternatives.",
  },
  {
    name: "Ore Factory Squad Copper and Iron Ingot Guide",
    url: `${pageUrl}/smelt-copper-iron-ingots`,
    description:
      "Buy Metal Processing License 1 and the Smelting Furnace, move Copper and Iron into Factory Storage, and make Ingots.",
  },
];

export const metadata: Metadata = {
  title: "Ore Factory Squad Guides: Mining, Contracts & Smelting",
  description:
    "Start with Greenpark-to-Level-5 progression, then solve Stock Sell, contracts, Mining Lift, Cement, property switching, Dynamite, and smelting.",

  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Ore Factory Squad Guides: Greenpark to Level 5",
    description:
      "Use the problem-first guide hub for factory storage, Stock Sell, contracts, Mining Lift routes, properties, Cement, Dynamite, Copper, Iron, and smelting.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Greenpark Lot property purchase and early progression",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ore Factory Squad Guides: Greenpark to Level 5",
    description:
      "Solve storage, selling, contracts, Mining Lift, property switching, Cement, Dynamite, Copper, Iron, and Smelting Furnace problems.",
    images: [heroImageUrl],
  },
};

const faqEntities = [
  {
    question: "Do I need to read every Ore Factory Squad guide in order?",
    answer:
      "No. Use the Beginner Guide for chronological progression, then open the specialist guide matching the machine, property, product, storage, or contract currently blocking progress. Dependencies still matter: raw Copper must reach Factory Storage before furnace troubleshooting becomes useful, and the correct finished product must exist before Pallet Packer troubleshooting becomes useful.",
  },
  {
    question:
      "How much money do I need for the first metal-processing setup in Ore Factory Squad?",
    answer:
      "Metal Processing License #1 costs $2,000 and the Smelting Furnace costs $1,500, creating a confirmed License-and-Furnace budget of $3,500. This does not include property costs, operating cash, later processing equipment, or any unverified output-pallet expense.",
  },
  {
    question:
      "Which Ore Factory Squad guide should I use after reaching Level 4?",
    answer:
      "Use the Property Guide when the active site does not contain Copper or Iron. Use the Smelting Guide when raw metal is already in Factory Storage. Use the Contract Guide when the Ingots are finished but the delivery will not pack or complete.",
  },
  {
    question:
      "What should I do if an Ore Factory Squad price differs from this guide?",
    answer:
      "Treat the current in-game interface as the source of truth. The listed prices come from launch-week testing, while the dependency order, production routes, and troubleshooting checks are designed to remain useful after balance changes.",
  },
  {
    question: "Does this Ore Factory Squad hub cover Warehouse Automation?",
    answer:
      "Not as a complete standalone guide. Current coverage focuses on Greenpark through Level 5, including mining, storage, selling, contracts, property switching, Cement, Dynamite, and the first Copper and Iron processing stage.",
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
          name: "Ore Factory Squad Guides",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Ore Factory Squad Guides: Greenpark to Level 5",
      description:
        "A problem-first Ore Factory Squad guide hub covering Greenpark Lot, the first factory and storage loop, Stock Sell, contracts, the Pallet Packer, Mining Lift routes, Limestone and Cement, Remaining Resources, property switching, Dynamite, Copper, Iron, and the first Smelting Furnace setup through Level 5.",
      inLanguage: "en",
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: heroImageUrl,
        width: 1600,
        height: 900,
      },
      image: imageUrls,
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Ore Factory Squad",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Greenpark Lot",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Factory Storage",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Contracts",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Mining Lift",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Property Switching",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Metal Processing",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Ore Factory Squad Guides",
      numberOfItems: guideItems.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: guideItems.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: guide.url,
        item: {
          "@type": "Article",
          name: guide.name,
          url: guide.url,
          description: guide.description,
        },
      })),
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
          title="Ore Factory Squad Guides: Greenpark to Level 5"
          description="Start with the Greenpark factory loop, then find the exact guide for missing stock, blocked contracts, deep resources, property switching, Cement, Dynamite, Copper, Iron, and Smelting Furnace problems."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadGuideHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}