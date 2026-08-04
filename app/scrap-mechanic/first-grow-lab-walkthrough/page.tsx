import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FirstGrowLabWalkthroughContent from "@/data/scrap-mechanic/first-grow-lab-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/first-grow-lab-walkthrough`;

const metadataTitle =
  "Scrap Mechanic First Grow Lab Walkthrough & Completion Guide";

const metadataDescription =
  "Complete Scrap Mechanic Grow Lab 1, open the red-target door, find the Carrot Seeds, pass the Large Chest, and trigger the final quest banner.";

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
    label: "Start the first Grow Lab",
  },
  {
    id: "entering-the-lab",
    label: "Enter Grow Lab 1",
  },
  {
    id: "central-chamber",
    label: "Follow the central route",
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
    id: "completion",
    label: "Finish after the Large Chest",
  },
  {
    id: "boss",
    label: "Does it have a Boss?",
  },
  {
    id: "unlocks-and-loot",
    label: "Net Block and Schematics",
  },
  {
    id: "what-to-bring",
    label: "What to bring",
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
    id: "how-long",
    label: "How long it takes",
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
      "The first Grow Lab begins through A Farmers Side Hustle. Talk to Hubert, then follow the active objective to the marked Grow Lab entrance.",
  },
  {
    question: "Do I need a Grow Lab key for the first Grow Lab?",
    answer:
      "No separate overworld key was required for this first story visit. The active Hubert quest provided the progression state needed to enter. Later Grow Labs use their own key progression.",
  },
  {
    question: "Where are the Carrot Seeds in the first Scrap Mechanic Grow Lab?",
    answer:
      "The Carrot Seeds are in the late combat section before the final Large Chest. Check the ground near the defeated Bots instead of searching inside the chest.",
  },
  {
    question: "Does opening the Large Chest complete the first Grow Lab quest?",
    answer:
      "No. Enter the passage behind the Large Chest and drop into the plant-filled chamber. The Main Quest completion banner appears after reaching that final area.",
  },
  {
    question: "Does the first Scrap Mechanic Grow Lab have a Boss?",
    answer:
      "The documented first Grow Lab did not contain a named Boss or visible Boss health bar. Its final section ended with several Bots, a Large Chest, and the drop into the completion chamber.",
  },
  {
    question: "How long does the first Scrap Mechanic Grow Lab take?",
    answer:
      "A prepared first clear should take about 30 to 45 minutes. A blind attempt can take closer to 50 minutes when it includes a death, dropped-bag recovery, and optional exploration.",
  },
  {
    question: "Should I bring a vehicle Bed to the first Grow Lab?",
    answer:
      "Yes. A vehicle Bed near the entrance makes a death much easier to recover from and avoids another long drive from an older respawn point.",
  },
  {
    question: "Do Schematic Boxes immediately unlock Craftbot recipes?",
    answer:
      "No. Schematic Boxes are physical loot that must be processed later. Picking one up does not automatically reveal every Craftbot recipe or complete the Grow Lab.",
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
    description: metadataDescription,
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
        "Scrap Mechanic First Grow Lab Walkthrough & Completion Guide",
      description: metadataDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-08-04",
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
          name: "Scrap Mechanic Growlab 1",
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
          title="Scrap Mechanic First Grow Lab Walkthrough"
          description="Follow A Farmers Side Hustle through Grow Lab 1, open the red-target door, collect the Carrot Seeds, and continue beyond the Large Chest until the final quest banner appears."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 4, 2026"
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