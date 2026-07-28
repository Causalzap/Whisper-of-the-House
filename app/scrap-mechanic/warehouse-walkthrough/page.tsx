import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarehouseWalkthroughContent from "@/data/scrap-mechanic/warehouse-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/warehouse-walkthrough`;

const metadataTitle =
  "Scrap Mechanic Warehouse Walkthrough: Boss & Escape";

const metadataDescription =
  "Beat the Scrap Mechanic Warehouse, defeat the Trash Bot, recover your backpack, use the Master Key, unlock Mining Site 01, and escape the self-destruct.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-story-warehouse-exterior.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-anti-theft-lock.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-utility-elevator-route.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-return-chute-exit.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-trashbot-exposed-head.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-lorenzo-rescued.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-master-key-boss-door.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-site-01-gyro-core-map.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-plasma-drill-level-one-unlock.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-warehouse-self-destruct-five-minutes.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-story-warehouse-explosion.webp`,
];

const toc = [
  {
    id: "before-entering-warehouse",
    label: "Prepare for the Warehouse",
  },
  {
    id: "anti-theft-lock",
    label: "Anti-theft lock",
  },
  {
    id: "warehouse-route",
    label: "Navigate the floors",
  },
  {
    id: "trash-bot-boss",
    label: "Beat the Trash Bot",
  },
  {
    id: "recover-after-death",
    label: "Recover your backpack",
  },
  {
    id: "warehouse-master-key",
    label: "Use the Master Key",
  },
  {
    id: "mining-site-01-reveal",
    label: "Mining Site 01 reveal",
  },
  {
    id: "plasma-drill-unlock",
    label: "Plasma Drill unlock",
  },
  {
    id: "start-self-destruct",
    label: "Start the self-destruct",
  },
  {
    id: "escape-warehouse",
    label: "Escape the explosion",
  },
  {
    id: "warehouse-troubleshooting",
    label: "Warehouse troubleshooting",
  },
  {
    id: "faq",
    label: "Story edge cases",
  },
];

const relatedLinks = [
  {
    href: "/scrap-mechanic/warehouse-key",
    label: "Warehouse Key Guide",
  },
    {
      href: "/scrap-mechanic",
      label: "Scrap Mechanic 1.0 Guide Hub",
    },
    {
      href: "/scrap-mechanic/first-grow-lab-walkthrough",
      label: "First Grow Lab Walkthrough",
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
      href: "/scrap-mechanic/achievements",
      label: "All 34 Achievements Guide",
    },
];

const faqEntities = [
  {
    question:
      "Does the displayed population of 39 create another objective inside the Warehouse?",
    answer:
      "No immediate Warehouse objective appears from the population count alone. The display provides story context about survivors still on the planet. Complete the factory sequence and follow the later objectives instead of searching the room for 39 separate rescue markers.",
  },
  {
    question:
      "Does unlocking Plasma Drill Level 1 automatically open Mining Site 01?",
    answer:
      "No. The Warehouse reveals Mining Site 01 and unlocks Plasma Drill Level 1, but you must still follow the updated story objective, reach the Mining Hub route, and obtain the Mining Access Card before entering the underground section.",
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
      "Scrap Mechanic Warehouse Walkthrough: Trash Bot, Master Key & Escape",
    description:
      "Follow the complete story Warehouse route from the Anti-theft lock and upper floors through the Trash Bot boss, backpack recovery, Mining Site 01 reveal, Plasma Drill unlock, and five-minute escape.",
    siteName: "Whisper of the House",
    publishedTime: "2026-07-28",
    modifiedTime: "2026-07-28",
    images: [
      {
        url: imageUrls[4],
        width: 1280,
        height: 720,
        alt: "Scrap Mechanic Trash Bot boss with its glowing head exposed during a damage window",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Beat the Trash Bot, recover your backpack, use the Warehouse Master Key, trigger the self-destruct, and escape before the building explodes.",
    images: [imageUrls[4]],
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
          name: "Warehouse Walkthrough",
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
        "Scrap Mechanic Warehouse Walkthrough: Trash Bot Boss, Master Key and Escape",
      description:
        "A practical Scrap Mechanic 1.0 story Warehouse walkthrough covering the regular Warehouse Key, the 2.2-mile route, a 1,000-round preparation example, the Anti-theft lock, Utility rooms, elevators, Return Chutes, Tape Bot combat, the Trash Bot boss and exposed-head damage windows, backpack recovery after death, Lorenzo, the Warehouse Master Key door, the Mining Site 01 survey map, the displayed population of 39, the Gyro Core signature, Plasma Drill Level 1, the factory control-panel trigger, the five-minute self-destruct timer, vehicle evacuation, and the final Warehouse explosion.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Scrap Mechanic",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse walkthrough",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Trash Bot boss",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse Anti-theft lock",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse Master Key",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Site 01",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Excavation Island",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Plasma Drill Level 1",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse self-destruct",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Warehouse Return Chute",
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
          title="How I Beat the Story Warehouse and Escape"
          description="I prepare for the long Warehouse route, clear the Anti-theft floors, beat the Trash Bot, recover after death, unlock Mining Site 01, and escape the five-minute self-destruct."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarehouseWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}