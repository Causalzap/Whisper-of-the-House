import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadBeginnerGuideContent from "@/data/ore-factory-squad/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-first-property-purchase.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-sorting-station-storage.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-product-pallet-storage-area.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-contract-pallet-packer.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-mining-lift-extension.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-property-remaining-resources.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-level-five-unlocks.webp`,
];

const toc = [
  {
    id: "opening-route",
    label: "Opening route",
  },
  {
    id: "first-dig",
    label: "First 12 ore",
  },
  {
    id: "sorting-station",
    label: "Sorting Station",
  },
  {
    id: "storage-area",
    label: "Product storage",
  },
  {
    id: "first-sale",
    label: "First Stock Sale",
  },
  {
    id: "contracts",
    label: "Early contracts",
  },
  {
    id: "upgrade-order",
    label: "Upgrade order",
  },
  {
    id: "mining-lift",
    label: "Mining Lift route",
  },
  {
    id: "remaining-resources",
    label: "Remaining Resources",
  },
  {
    id: "level-five",
    label: "Level 5 choices",
  },
  {
    id: "quick-fixes",
    label: "Quick fixes",
  },
  {
    id: "next-steps",
    label: "After Level 5",
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
    href: "/ore-factory-squad/remaining-resources-switch-property/",
    label: "Remaining Resources & Property Guide",
  },
  {
    href: "/ore-factory-squad/smelt-copper-iron-ingots/",
    label: "Copper & Iron Smelting Guide",
  },
];

export const metadata: Metadata = {
  title: "Ore Factory Squad Beginner Guide: Level 5 Route",
  description:
    "Follow a tested Ore Factory Squad beginner route from Greenpark Lot to Level 5, with exact prices, contract fixes, upgrade order, and Mining Lift setup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Ore Factory Squad Beginner Guide: Best Route to Level 5",
    description:
      "Follow a tested Greenpark Lot opening with exact prices, first sales, contract routing, upgrade choices, Mining Lift setup, and Level 5 decisions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Greenpark Lot negotiation ending at a 750 dollar purchase price",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ore Factory Squad Beginner Guide: Level 5 Route",
    description:
      "Start at Greenpark Lot, build the first factory loop, choose the right upgrades, complete contracts, and reach Level 5 without wasting cash.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Should I buy Metal Processing or Warehouse Automation first?",
    answer:
      "Choose Metal Processing when Copper or Iron is already in Factory Storage and Ingot contracts are appearing. Choose Warehouse Automation only when manual pallet movement has become the real bottleneck and you can afford the license plus its logistics equipment. If neither condition is true, continue basic contracts and improve the mining route.",
  },
  {
    question: "Does Level 5 give me a free Warehouse Robot?",
    answer:
      "No. Level 5 unlocks access to later logistics systems, but it does not automatically place a Warehouse Robot, Drop Zone, or Pallet Dispenser. Those components still need to be purchased and configured, so the forklift remains part of the normal pallet route.",
  },
  {
    question: "Can machines keep working overnight?",
    answer:
      "Yes. Active machines continue processing after dark. Check the contract timer before using End Day because an order with one day remaining expires when the day is skipped. Employee wages and daily loan payments are also deducted when the next day begins.",
  },
  {
    question:
      "Is Westmont Property a good replacement for Greenpark Lot?",
    answer:
      "Westmont was listed at $700 and covered 2,000 square meters, but its preview still focused on Limestone, Clay, Stone, Sandstone, and Coal. It can serve as another basic-material site, but it does not solve a Copper or Iron bottleneck.",
  },
  {
    question: "Can I use a controller with the forklift?",
    answer:
      "Yes. An Xbox-style controller worked for lifting, fine movement, and fine steering. Keyboard controls may still be easier when placing pallets tightly inside the storage area or aligning a contract load with the truck.",
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
          name: "Beginner Guide",
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
        "Ore Factory Squad Beginner Guide: Best Opening Route to Level 5",
      description:
        "This Ore Factory Squad beginner guide follows a tested solo opening route from the empty warehouse and Greenpark Lot through the first 12 ore, Sorting Station, Factory Storage, Stone Crusher, product pallets, Stock Sell, early contracts, Pallet Packer deliveries, Shovel, Pickaxe and Detector upgrades, Mining Lift construction, Remaining Resources checks, Level 4 Metal Processing and the major purchase decisions that appear at Level 5.",
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
          name: "Ore Factory Squad beginner guide",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad early game route",
        },
        {
          "@type": "Thing",
          name: "Greenpark Lot",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad first property",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Sorting Station",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Factory Storage",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Stock Sell",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad contracts",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Pallet Packer",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad early upgrades",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Mining Lift",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Remaining Resources",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Level 4 Metal Processing",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Level 5",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Warehouse Automation",
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
          title="Ore Factory Squad Beginner Guide: Best Opening Route to Level 5"
          description="Start with Greenpark Lot, build the first factory loop, avoid the upgrades that waste early cash, and reach Level 5 through practical contracts and a clean Mining Lift route."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}