import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OreProcessingGuideContent from "@/data/scrap-mechanic/ore-processing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/ore-processing-guide`;

const metadataTitle =
  "Scrap Mechanic Ore Processing Guide: Ingots & Vault";

const metadataDescription =
  "Process Scrap Mechanic Ore with the Crushbot and Prospector, form Ore Balls, cast Ingots, fix automation, and reach Vault Quotas safely.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-plasma-drill-ore-ejection.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-crushbot-manual-ore-input.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-residual-ore-after-crushbot.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-prospector-water-input-output.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-hub-ore-ball.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-hub-colored-lines.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-caster-ingots-output.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-vault-10000-quota.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-automated-ore-processing-running.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-three-prospector-bots.webp`,
];

const toc = [
  {
    id: "processing-chain",
    label: "Ore processing chain",
  },
  {
    id: "universal-connection-check",
    label: "Check inputs and outputs",
  },
  {
    id: "first-crushbot",
    label: "Use the Crushbot",
  },
  {
    id: "crushbot-not-working",
    label: "Crushbot not working",
  },
  {
    id: "crushbot-output",
    label: "Crushbot outputs",
  },
  {
    id: "prospector-bot",
    label: "Use the Prospector Bot",
  },
  {
    id: "prospector-materials",
    label: "Prospector materials",
  },
  {
    id: "prospector-not-working",
    label: "Prospector not working",
  },
  {
    id: "confirmed-numbers",
    label: "Confirmed processing numbers",
  },
  {
    id: "ore-ball",
    label: "Create an Ore Ball",
  },
  {
    id: "caster-route",
    label: "Move the Ball to the Caster",
  },
  {
    id: "caster-ingots",
    label: "Produce and haul Ingots",
  },
  {
    id: "vault",
    label: "Deposit into the Vault",
  },
  {
    id: "processing-decisions",
    label: "Processing decisions",
  },
  {
    id: "automation-layout",
    label: "Build the automated line",
  },
  {
    id: "automation-not-working",
    label: "Automation troubleshooting",
  },
  {
    id: "multiple-prospectors",
    label: "Add more Prospectors",
  },
  {
    id: "when-to-return",
    label: "When to return to mining",
  },
  {
    id: "faq",
    label: "Ore processing edge cases",
  },
];

const relatedLinks = [
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
      question:
        "Does each Prospector need its own Water Container?",
      answer:
        "No. Multiple Prospectors can draw from the same connected water network. The shared supply still needs enough water for every active wash cycle, and each Prospector needs its own valid material input and output path. If the first Prospector works but additional Bots remain idle, check their individual material connections before adding another Water Container.",
    },
    {
      question:
        "Should I keep rare Prospector materials or send everything to the Vault?",
      answer:
        "Keep at least one labeled stack of every newly revealed material until its current crafting or progression use is clear. Metal, Chemical, Quartz, Sand, and Crimsonite can have different uses, and depositing or consuming everything may leave you short for a later machine, vehicle upgrade, or Mining Hub Station.",
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
      "Scrap Mechanic Ore Processing Guide: Crushbot, Ingots and Vault",
    description:
      "Follow my complete processing route from physical Ore and Residual Ore through the Crushbot, Prospector, Ore Ball, Caster, heavy Ingot transport, Vault Quotas, and automated-line troubleshooting.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "Scrap Mechanic player manually inserting Ore into the Crushbot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Use the Crushbot and Prospector, form Ore Balls, haul heavy Ingots, protect Vault Quotas, and repair broken automated processing lines.",
    images: [imageUrls[1]],
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
          name: "Ore Processing Guide",
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
        "Scrap Mechanic Ore Processing Guide: Crushbot, Prospector, Ingots and Vault",
      description:
        "A practical Scrap Mechanic 1.0 ore processing guide covering physical Ore collection, manual Crushbot input, why loose Ore beside the machine does nothing, direct processed outputs, Residual Ore, Prospector water supply, input and output direction checks, Metal Block 1, Chemical, Quartz, Sand and Crimsonite results, confirmed processing numbers, Mining Hub intake stations, Ore Ball formation, colored transport lines, the Caster route, heavy Ingot hauling, suspension problems, Vault deposits, 10,000 and 100,000 Quotas, safe Credit withdrawals, automation timing, shared structures, buffer chests, multiple Prospectors, output storage, and fixes for processing lines that fail to move materials.",
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
          name: "Scrap Mechanic ore processing",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Crushbot",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Residual Ore",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Prospector Bot",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Prospector materials",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Ore Ball",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Hub Caster",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Ingots",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Vault",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Vault Quota",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic 10000 Quota",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic 100000 Quota",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic automated ore processing",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Prospector not working",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Crushbot not working",
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
          title="How I Process Ore Into Ingots and Vault Credits"
          description="I test the Crushbot manually, wash Residual Ore with the Prospector, move Ore Balls to the Caster, haul the heavy Ingots, and keep enough Credits deposited for the next Quota."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OreProcessingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}