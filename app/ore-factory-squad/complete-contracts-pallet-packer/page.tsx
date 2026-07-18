import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadContractsPalletPackerContent from "@/data/ore-factory-squad/complete-contracts-pallet-packer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/complete-contracts-pallet-packer`;

const imageUrls = [
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-contract-pallet-packer.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-clay-block-vs-clay-brick.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-pallet-packer-output-blocked.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-contract-fast-delivery-bonus.webp`,
];

const toc = [
  {
    id: "check-stock",
    label: "Check stock & choose",
  },
  {
    id: "contract-negotiation",
    label: "Contract negotiation",
  },
  {
    id: "select-pallet-packer",
    label: "Select the contract",
  },
  {
    id: "exact-product-stage",
    label: "Exact product stage",
  },
  {
    id: "outputs",
    label: "Contract & Excess Output",
  },
  {
    id: "load-and-deliver",
    label: "Load & deliver",
  },
  {
    id: "rewards-and-deadlines",
    label: "Bonus, deadlines & night",
  },
  {
    id: "manual-and-offsite-contracts",
    label: "Off-site contracts",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
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
    href: "/ore-factory-squad/how-to-sell-products/",
    label: "How to Sell Products",
  },
  {
    href: "/ore-factory-squad/find-limestone-make-cement/",
    label: "Limestone & Cement Guide",
  },
  {
    href: "/ore-factory-squad/smelt-copper-iron-ingots/",
    label: "Copper & Iron Smelting Guide",
  },
];

export const metadata: Metadata = {
  title: "Ore Factory Squad Contracts & Pallet Packer Guide",
  description:
    "Complete Ore Factory Squad contracts with Pallet Packer setup, exact product checks, negotiation tips, output fixes, night delivery, deadlines, and XP.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Ore Factory Squad Contracts Guide: Pallet Packer & Delivery",
    description:
      "Complete contracts with exact product matching, Pallet Packer input and output fixes, negotiation decisions, Delivery Gate steps, deadlines, bonuses, and XP.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Pallet Packer displaying an active contract with separate product counters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ore Factory Squad Contracts Guide: Pallet Packer & Delivery",
    description:
      "Fix Pallet Packer problems, match exact products, negotiate offers, clear blocked outputs, deliver contracts, and protect deadlines and bonuses.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Can I deliver a contract at night?",
    answer:
      "The v1.0.1 hotfix removed the restriction that prevented delivery calls at night. Active machines can also continue processing after dark. This guide did not separately verify whether a nighttime handoff changes the Fast Delivery Bonus.",
  },
  {
    question: "Can I switch active contracts in the Pallet Packer?",
    answer:
      "The Pallet Packer allows an accepted contract to be selected as the active delivery. Clear the current input and outputs before changing selection. This guide did not verify what happens to partially packed products when switching midway through an order.",
  },
  {
    question: "Why does Ore Factory Squad say Contract limit reached?",
    answer:
      "The game limits simultaneous active contracts, and a later upgrade increases contract capacity. The exact default solo limit was not verified in this run, so finish or cancel an existing order before assuming the warning is a bug.",
  },
  {
    question: "What happens if I cancel a contract?",
    answer:
      "A consistent cash, XP, or reputation penalty was not verified in this launch-week run. The destination of partially packed products after cancellation was also not confirmed, so check the required products and machines before accepting an order.",
  },
  {
    question: "Can I carry multiple contract deliveries in one truck?",
    answer:
      "Multiple completed loads can physically fit when the truck has enough space. Verify and hand off each active order separately rather than assuming one visit to the Delivery Gate automatically completes every contract.",
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
          name: "Contracts and Pallet Packer Guide",
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
        "Ore Factory Squad Contracts Guide: Pallet Packer and Delivery",
      description:
        "This Ore Factory Squad contracts guide explains how to compare tracked warehouse stock with contract requirements, negotiate offers, select an accepted order in the Pallet Packer, feed physical product pallets into the input, match Blocks, Bricks, Cement, Crushed Coal and Foam Glass, clear Contract Output and Excess Output, load the truck, complete the Delivery Gate handoff, protect Fast Delivery Bonuses, work at night, avoid End Day expiration and understand Off-site Worker Contracts.",
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
          name: "Ore Factory Squad contracts guide",
        },
        {
          "@type": "Thing",
          name: "How to complete contracts in Ore Factory Squad",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Pallet Packer",
        },
        {
          "@type": "Thing",
          name: "Pallet Packer not working",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad contract negotiation",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Negotiation Rate",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Contract Output",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Excess Output",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Output blocked",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Delivery Gate",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad night delivery",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad contract expired",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Fast Delivery Bonus",
        },
        {
          "@type": "Thing",
          name: "Clay Block versus Clay Brick",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Foam Glass contracts",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Off-site Worker Contracts",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad contract limit reached",
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
          title="Ore Factory Squad Contracts Guide: Pallet Packer & Delivery"
          description="Complete manual contracts from the first stock check to the Delivery Gate. Match exact product stages, negotiate realistic offers, fix blocked Pallet Packer outputs, protect deadlines, and understand what each reward proves."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadContractsPalletPackerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}