import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreFactorySquadSmeltCopperIronIngotsContent from "@/data/ore-factory-squad/smelt-copper-iron-ingots.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ore-factory-squad`;
const pageUrl = `${hubUrl}/smelt-copper-iron-ingots`;

const heroImageUrl = `${siteUrl}/images/ore-factory-squad/ore-factory-squad-level-four-unlocks.webp`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-sorting-station-storage.webp`,
  `${siteUrl}/images/ore-factory-squad/ore-factory-squad-level-five-unlocks.webp`,
];

const toc = [
  {
    id: "level-four-unlock",
    label: "Level 4 unlock and setup cost",
  },
  {
    id: "factory-storage",
    label: "Get Copper and Iron into storage",
  },
  {
    id: "make-ingots",
    label: "Make Copper and Iron Ingots",
  },
  {
    id: "furnace-setup",
    label: "Furnace output and pallet setup",
  },
  {
    id: "ingots-vs-plates",
    label: "Ingots vs Plates",
  },
  {
    id: "troubleshooting",
    label: "Smelting Furnace troubleshooting",
  },
  {
    id: "worth-buying",
    label: "Is the furnace worth buying?",
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
    href: "/ore-factory-squad/remaining-resources-switch-property/",
    label: "Remaining Resources & Property Guide",
  },
  {
    href: "/ore-factory-squad/mining-lift-guide/",
    label: "Mining Lift Guide",
  },
  {
    href: "/ore-factory-squad/complete-contracts-pallet-packer/",
    label: "Contracts & Pallet Packer Guide",
  },
  {
    href: "/ore-factory-squad/how-to-sell-products/",
    label: "How to Sell Products",
  },
];

export const metadata: Metadata = {
  title: "Ore Factory Squad Copper & Iron Ingot Guide",
  description:
    "Unlock the Smelting Furnace, move Copper and Iron into Factory Storage, make Ingots, fix blocked output, and avoid confusing Ingots with Plates.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Ore Factory Squad Copper & Iron Ingot Guide",
    description:
      "Use the Level 4 Metal Processing route, move raw Copper and Iron into Factory Storage, configure the Smelting Furnace, and fix missing Ingot output.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Ore Factory Squad Level 4 unlock screen showing the first Metal Processing License and Smelting Furnace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ore Factory Squad Copper & Iron Ingot Guide",
    description:
      "Unlock and configure the Smelting Furnace, process Copper and Iron, fix output problems, and understand why the first furnace does not make Plates.",
    images: [heroImageUrl],
  },
};

const faqEntities = [
  {
    question:
      "Can one Smelting Furnace make both Copper and Iron Ingots in Ore Factory Squad?",
    answer:
      "Yes. I used the same Smelting Furnace for Copper and Iron by changing the active recipe. The machine did not automatically switch recipes when Iron entered Factory Storage, so I reopened the interface, selected Iron Ingot, checked the output, and started the new queue.",
  },
  {
    question:
      "Does the Smelting Furnace keep running when I leave the warehouse?",
    answer:
      "In my tested run, the Smelting Furnace continued processing while I worked elsewhere. I did not verify whether an unfinished queue always survives End Day, saving and reloading, moving the machine, or later game updates.",
  },
  {
    question:
      "Can the first Smelting Furnace process Scrap in Ore Factory Squad?",
    answer:
      "I did not find Scrap in the available recipe list during my first Smelting Furnace setup. I therefore do not treat Scrap as a confirmed furnace input unless it appears as a valid recipe in the current machine interface.",
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
          name: "Copper and Iron Ingot Guide",
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
        "Ore Factory Squad Copper and Iron Ingots: Smelting Furnace Guide",
      description:
        "This Ore Factory Squad smelting guide explains when the first Metal Processing stage appears, how to move Copper and Iron through the Sorting Station into Factory Storage, how to configure one Smelting Furnace for Copper Ingots or Iron Ingots, why changing stored metal does not automatically switch the active recipe, how to prepare and clear the output pallet, why finished Ingots must be moved into tracked storage, why the first furnace does not directly make Copper Plates or Iron Plates, and which input, License, recipe, quantity, Start, and output checks to perform when the machine remains idle.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-18",
      dateModified: "2026-07-18",
      articleSection: "Ore Factory Squad Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Ore Factory Squad",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Smelting Furnace",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Metal Processing License",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Copper Ingot",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Iron Ingot",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Factory Storage",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Copper and Iron processing",
        },
        {
          "@type": "Thing",
          name: "Ore Factory Squad Ingots and Plates",
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
          title="Ore Factory Squad Copper & Iron Ingots: Smelting Furnace Guide"
          description="Move Copper and Iron into Factory Storage, activate the first Metal Processing License, configure the Smelting Furnace, switch Ingot recipes, fix blocked output, and avoid buying the wrong metal-production stage."
          gameTitle="Ore Factory Squad"
          gameHref="/ore-factory-squad/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreFactorySquadSmeltCopperIronIngotsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}