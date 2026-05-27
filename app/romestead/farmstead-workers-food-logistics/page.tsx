import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarmsteadWorkersFoodLogisticsContent from "@/data/romestead/farmstead-workers-food-logistics.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/farmstead-workers-food-logistics`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-farmstead-offer-40-wheat.webp`,
  `${siteUrl}/images/romestead/romestead-farmstead-building-placement.webp`,
  `${siteUrl}/images/romestead/romestead-farmstead-nearby-crops.webp`,
  `${siteUrl}/images/romestead/romestead-farmstead-seeds-well-requirement.webp`,
  `${siteUrl}/images/romestead/romestead-gods-moonstring-well-unlock.webp`,
  `${siteUrl}/images/romestead/romestead-citizen-assignment-town-core.webp`,
  `${siteUrl}/images/romestead/romestead-worker-job-level-upgrade.webp`,
  `${siteUrl}/images/romestead/romestead-warehouse-automation-limits.webp`,
];

const toc = [
  { id: "unlock-farmstead", label: "Unlock Farmstead" },
  { id: "farmstead-range", label: "Farmstead range" },
  { id: "farmstead-not-watering", label: "Not watering" },
  { id: "crops", label: "Crops" },
  { id: "worker-assignment-job-level", label: "Workers and levels" },
  { id: "food-chain-after-farmstead", label: "Food chain" },
  { id: "warehouse-logistics", label: "Warehouse limits" },
  { id: "farmstead-upgrades", label: "Upgrades" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
  {
    href: "/romestead/first-day-base-building",
    label: "First Day and Base Building Guide",
  },
  {
    href: "/romestead/gods-offerings-boss-progression",
    label: "Gods, Offerings and Boss Progression Guide",
  },
  {
    href: "/romestead/giant-owl-guardian-of-minerva",
    label: "Giant Owl Boss Guide",
  },
  {
    href: "/romestead/dungeon-traps-death-recovery",
    label: "Dungeon Traps and Death Recovery Guide",
  },
];

export const metadata: Metadata = {
  title: "Romestead Farmstead Guide: Workers, Food & Logistics",
  description:
    "Fix Romestead Farmstead problems: unlock it with 40 wheat, place farmland, solve watering, level farmers, manage food storage and logistics.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Romestead Farmstead Guide: Workers, Food and Logistics",
    description:
      "A practical Romestead Farmstead guide covering 40 wheat, Farmstead range, watering, Well unlock, farmer job levels, food processing and Warehouse limits.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Romestead Honoring the Soil quest showing a 40 wheat offering that unlocks Farmstead.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romestead Farmstead Guide: Workers, Food and Logistics",
    description:
      "Unlock Farmstead, fix watering, place crops correctly, level farmers, and stop food-chain items from getting stuck.",
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
          name: "Romestead Guide",
          item: `${siteUrl}/romestead`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Farmstead, Workers, Food and Logistics",
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
        "Romestead Farmstead Guide: Workers, Food, Watering, Job Levels, Upgrades and Logistics",
      description:
        "A player-focused Romestead Farmstead guide explaining how to unlock Farmstead with the 40 wheat Honoring the Soil objective, how Farmstead range and nearby farmland work, why Farmstead may not water crops, how The Moonstring and Well connect to farming, what crops and food sources to track early, how worker assignment and farmer job level affect production, when to upgrade Farmstead, how mills and food processing fit after farming, and how to diagnose Warehouse, Food Storage, finished order and backpack logistics problems.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-27",
      dateModified: "2026-05-27",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead Farmstead" },
        { "@type": "Thing", name: "Farmstead Not Watering" },
        { "@type": "Thing", name: "Honoring the Soil" },
        { "@type": "Thing", name: "40 Wheat" },
        { "@type": "Thing", name: "Well Unlock" },
        { "@type": "Thing", name: "The Moonstring" },
        { "@type": "Thing", name: "Food Storage" },
        { "@type": "Thing", name: "Farmer Job Level" },
        { "@type": "Thing", name: "Warehouse Logistics" },
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
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I unlock Farmstead in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the current route, Farmstead comes from the Honoring the Soil objective and requires 40 wheat. Save wheat once you know you are approaching this unlock.",
          },
        },
        {
          "@type": "Question",
          name: "How close does farmland need to be to the Farmstead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the in-game highlighted area as the final answer. In the current build shown here, the Farmstead working area appears to be around 3 tiles, but Early Access tuning can change exact range.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Farmstead not watering crops?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farmstead and watering are separate steps. If crops are not being watered, check the water support requirement and follow The Moonstring route if you still need Well.",
          },
        },
        {
          "@type": "Question",
          name: "Does Farmstead need a worker?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Farmstead is a workplace, so check worker assignment at the Town Core if nothing is happening.",
          },
        },
        {
          "@type": "Question",
          name: "How do I level up a farmer in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep the Farmstead working. Citizens gain job XP from completing work orders, and higher-level citizens can work faster. If the worker hits the building’s level cap, upgrade the building.",
          },
        },
        {
          "@type": "Question",
          name: "When should I upgrade the Farmstead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade when the farmer is capped, new recipes or orders require a higher level, or the farm loop already works but production speed is now the bottleneck. Do not upgrade before fixing water, storage, and inputs.",
          },
        },
        {
          "@type": "Question",
          name: "What should I plant first in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wheat is the safest priority because 40 wheat unlocks Farmstead. Use other food sources to keep the town stable while saving enough wheat for progression.",
          },
        },
        {
          "@type": "Question",
          name: "Does Warehouse automate all food movement?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Warehouse helps with storage, but it does not automatically solve every finished order, Farmstead output, or processing step. Check where the item actually is.",
          },
        },
        {
          "@type": "Question",
          name: "How does the mill fit into Farmstead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farmstead handles farming. The mill handles processing, such as turning wheat into flour. If crops exist but bread or processed food is missing, the problem may be the processing chain, not the Farmstead itself.",
          },
        },
        {
          "@type": "Question",
          name: "Are food buffs important in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Save stronger food for boss fights, dungeon runs, and recovery once you know which meals give the best current-version bonuses.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Romestead Farmstead Guide: Fix Food, Workers and Watering"
          description="Unlock Farmstead, place crops inside range, solve watering, level your farmer, and stop food-chain items from getting stuck."
          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FarmsteadWorkersFoodLogisticsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}