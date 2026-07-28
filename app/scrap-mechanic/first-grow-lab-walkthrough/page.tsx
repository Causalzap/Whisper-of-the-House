import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FirstGrowLabWalkthroughContent from "@/data/scrap-mechanic/first-grow-lab-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/first-grow-lab-walkthrough`;

const metadataTitle =
  "Scrap Mechanic First Grow Lab Walkthrough & Carrot Seeds";

const metadataDescription =
  "Clear the first Scrap Mechanic Grow Lab, find Carrot Seeds, open the red-target door, recover a dropped bag, and trigger quest completion.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-central-chamber.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-hubert-side-hustle-quest.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-elevator.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-ranged-bot.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-net-block-unlock.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-schematic-boxes.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-door-button.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-carrot-seed-bot.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-quest-complete.webp`,
];

const toc = [
  {
    id: "how-to-start",
    label: "Start A Farmers Side Hustle",
  },
  {
    id: "how-long",
    label: "How long it takes",
  },
  {
    id: "what-to-bring",
    label: "What to bring",
  },
  {
    id: "entering-the-lab",
    label: "Enter the Grow Lab",
  },
  {
    id: "central-chamber",
    label: "Navigate the central chamber",
  },
  {
    id: "combat",
    label: "Grow Lab combat",
  },
  {
    id: "recover-dropped-bag",
    label: "Recover a dropped bag",
  },
  {
    id: "unlocks-and-loot",
    label: "Net Block and Schematics",
  },
  {
    id: "red-target",
    label: "Open the red-target door",
  },
  {
    id: "carrot-seeds",
    label: "Find the Carrot Seeds",
  },
  {
    id: "boss",
    label: "Does it have a Boss?",
  },
  {
    id: "completion",
    label: "Complete the Grow Lab",
  },
  {
    id: "what-completion-unlocks",
    label: "What completion unlocks",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/scrap-mechanic",
    label: "Scrap Mechanic 1.0 Guide Hub",
  },
  {
    href: "/scrap-mechanic/hubert-watchtower-small-tank",
    label: "Hubert Watchtower & Small Tank",
  },
  {
    href: "/scrap-mechanic/mining-guide",
    label: "Plasma Drill & Mining Guide",
  },
  {
    href: "/scrap-mechanic/ore-processing-guide",
    label: "Ore Processing, Ingots & Vault",
  },
  {
    href: "/scrap-mechanic/warehouse-key",
    label: "Warehouse Key Guide",
  },
  {
    href: "/scrap-mechanic/warehouse-walkthrough",
    label: "Warehouse Walkthrough",
  },
  {
    href: "/scrap-mechanic/achievements",
    label: "All 34 Achievements Guide",
  },
];

const faqEntities = [
  {
    question: "What quest starts the first Grow Lab in Scrap Mechanic?",
    answer:
      "The first Grow Lab route begins through the quest A Farmers Side Hustle. Its early objective asks the player to find out what Hubert is doing and talk to him before the objective changes to entering the Grow Lab.",
  },
  {
    question: "How long does the first Scrap Mechanic Grow Lab take?",
    answer:
      "A prepared first clear should take about 30 to 45 minutes. A blind attempt can take closer to 50 minutes when it includes a death, dropped-bag recovery, extra food collection, and optional room exploration.",
  },
  {
    question: "Does the first Scrap Mechanic Grow Lab have a Boss?",
    answer:
      "The documented first Grow Lab route did not contain a named Boss or visible Boss health bar. It ended with several Bots, a Large Chest, and a final drop into the plant-filled completion area.",
  },
  {
    question:
      "Where are the Carrot Seeds in the first Scrap Mechanic Grow Lab?",
    answer:
      "The Carrot Seeds are found in the late combat section before the final Large Chest. They are not inside the Large Chest, so check the ground near the defeated Bots before entering the completion passage.",
  },
  {
    question:
      "Does opening the Large Chest complete the first Grow Lab quest?",
    answer:
      "Not immediately. After opening the Large Chest, continue through the passage behind it and drop into the plant-filled chamber. The Main Quest completion banner appears after entering that final area.",
  },
  {
    question:
      "Should I bring a vehicle Bed to the first Scrap Mechanic Grow Lab?",
    answer:
      "Yes. A vehicle Bed near the Grow Lab entrance turns a death into a short recovery. Without one, the player may respawn at an older Bed and need to drive back across the map.",
  },
  {
    question:
      "Do Schematic Boxes immediately unlock Craftbot recipes?",
    answer:
      "No. Schematic Boxes are collected as physical loot and processed later through the Schematic system. Picking one up does not automatically reveal every Craftbot recipe or complete the Grow Lab.",
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
    title:
      "Scrap Mechanic First Grow Lab Walkthrough and Carrot Seed Route",
    description:
      "Follow my complete first Grow Lab route from A Farmers Side Hustle through the elevator, central chamber, red-target door, Carrot Seeds, Large Chest, and final quest-completion drop.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Scrap Mechanic first Grow Lab central chamber walkthrough landmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find the Carrot Seeds, open the red-target door, recover a dropped bag, and finish the first Grow Lab without missing the final quest trigger.",
    images: [imageUrls[0]],
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
          name: "Scrap Mechanic Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "First Grow Lab Walkthrough",
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
        "Scrap Mechanic First Grow Lab Walkthrough: Carrot Seeds, Red Target, and Quest Completion",
      description:
        "A practical walkthrough for the first Scrap Mechanic Grow Lab in the A Farmers Side Hustle quest line. The guide covers preparation, vehicle Bed placement, expected completion time, the entrance elevator, central chamber navigation, ranged and close-range combat, dropped-bag recovery, the Net Block unlock, Schematic Boxes, the red-marked Hammer target, the Carrot Seed pickup, the final Large Chest, the plant-filled quest-completion area, later Grow Lab progression, and fixes for doors or objectives that fail to advance.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      about: [
        {
          "@type": "VideoGame",
          name: "Scrap Mechanic",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic first Grow Lab",
        },
        {
          "@type": "Thing",
          name: "A Farmers Side Hustle",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Carrot Seeds",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Grow Lab walkthrough",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Grow Lab red target",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Net Block",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Schematic Boxes",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Growlab champion",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic dropped bag recovery",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Grow Lab quest not completing",
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
          title="How I Cleared the First Scrap Mechanic Grow Lab"
          description="I follow A Farmers Side Hustle through the elevator and central chamber, collect the Carrot Seeds, open the red-target door, and continue past the Large Chest until the quest actually completes."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FirstGrowLabWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}