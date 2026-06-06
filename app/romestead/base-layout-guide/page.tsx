import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BaseLayoutGuideContent from "@/data/romestead/base-layout-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/base-layout-guide`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-base-location-stone-clay-water.webp`,
  `${siteUrl}/images/romestead/romestead-town-core-layout-placement.webp`,
  `${siteUrl}/images/romestead/romestead-roads-movement-layout.webp`,
  `${siteUrl}/images/romestead/romestead-farmstead-layout-near-water.webp`,
  `${siteUrl}/images/romestead/romestead-material-storage-near-production.webp`,
  `${siteUrl}/images/romestead/romestead-spread-out-town-defense-risk.webp`,
  `${siteUrl}/images/romestead/romestead-natural-barrier-chokepoint.webp`,
  `${siteUrl}/images/romestead/romestead-construction-drag-walls-roads.webp`,
];

const toc = [
  { id: "base-location", label: "Base location" },
  { id: "build-order", label: "Build order" },
  { id: "town-core-placement", label: "Town Core" },
  { id: "compact-core", label: "Compact core" },
  { id: "roads", label: "Roads" },
  { id: "farmstead-watermill-layout", label: "Farmstead & Watermill" },
  { id: "material-storage-logistics", label: "Storage & logistics" },
  { id: "raid-defense-layout", label: "Raid layout" },
  { id: "natural-barriers", label: "Natural barriers" },
  { id: "move-remove-buildings", label: "Move buildings" },
  { id: "construction-tools", label: "Construction tools" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
  {
    href: "/romestead/first-day-base-building",
    label: "First Day Build Order and Base Building Guide",
  },
  {
    href: "/romestead/raid-defense-guide",
    label: "Night Raid Defense, Torches and Defense Value Guide",
  },
  {
    href: "/romestead/farmstead-workers-food-logistics",
    label: "Farmstead, Workers, Food and Logistics Guide",
  },
  {
    href: "/romestead/raid-defense-guide",
    label: "Night Raid Defense, Torches and Defense Value Guide",
  },
  {
    href: "/romestead/gods-offerings-boss-progression",
    label: "Gods, Offerings, Sacrifice and Altar Rewards Guide",
  },
];

export const metadata: Metadata = {
  title:
    "Romestead Town Layout Guide: Best Base Setup for Workers, Farmstead & Raids",
  description:
    "Plan the best Romestead town layout with a compact base setup, Town Core placement, Farmstead and Watermill layout, Material Storage, Logistics Tent, roads and raid defense.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Romestead Town Layout Guide: Best Base Setup for Workers, Farmstead and Raids",
    description:
      "Build a better Romestead base with smart Town Core placement, compact production, Farmstead and Watermill planning, Material Storage, Logistics Tent routes, roads and raid defense.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Romestead base location near water, clay, stone, wood and open space.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Romestead Town Layout Guide: Best Base Setup for Workers, Farmstead and Raids",
    description:
      "Plan your Romestead town around resources, Farmstead, Watermill, Material Storage, Logistics Tent, roads and night raid defense.",
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
          name: "Town Layout Guide",
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
        "Romestead Town Layout Guide: Best Base Setup for Workers, Farmstead, Watermill, Logistics and Raids",
      description:
        "A player-focused Romestead town layout guide explaining where to build your first base, why central routes and nearby water, clay, stone, wood and coal matter, how to place Town Core and Workbench deliberately, how to build a compact production core, how roads connect the daily loop, how Farmstead, Well and Watermill placement affect food logistics, how Material Storage and Logistics Tent change resource flow, how to design around raid defense, natural barriers and kill-box-style choke points, and how to avoid common base layout mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead Town Layout" },
        { "@type": "Thing", name: "Base Layout" },
        { "@type": "Thing", name: "Town Core" },
        { "@type": "Thing", name: "Workbench" },
        { "@type": "Thing", name: "Farmstead" },
        { "@type": "Thing", name: "Watermill" },
        { "@type": "Thing", name: "Well" },
        { "@type": "Thing", name: "Material Storage" },
        { "@type": "Thing", name: "Logistics Tent" },
        { "@type": "Thing", name: "Roads" },
        { "@type": "Thing", name: "Blacksmith" },
        { "@type": "Thing", name: "Food Storage" },
        { "@type": "Thing", name: "Raid Defense" },
        { "@type": "Thing", name: "Natural Barriers" },
        { "@type": "Thing", name: "Kill Box" },
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
          name: "Where should I build my first base in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build near the center of your early travel routes, with water, clay, stone, wood, coal access, and enough open space for Farmstead, Well, Watermill, Material Storage, roads and defenses.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best town layout in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best early layout is a compact protected core with Town Core, housing, Food Storage, Workbench, Blacksmith, Farmstead route, Material Storage, and roads close enough to defend and manage.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make a compact base or a large city in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start compact. A large city is harder to light, wall, repair, and defend during raids. Expand once food, workers, storage, logistics and defense are stable.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I place Farmstead in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Place Farmstead where it has fertile space, access to water or future Well support, nearby Food Storage, and a clean route to processing buildings such as Mill or Watermill.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I put the Watermill in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Plan Watermill around water access. Do not treat it like a normal building that can go anywhere in your production core.",
          },
        },
        {
          "@type": "Question",
          name: "How does Logistics Tent change base layout in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Before Logistics Tent, keep production and storage close because you move many items by hand. After Logistics Tent unlocks, you can connect buildings more efficiently, but you still need a layout that is easy to defend and understand.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wall the entire town in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not at first. Protect the important core first: Blacksmith, Farmstead, Food Storage, housing, Town Core, and main roads. A huge wall around a scattered town is expensive and slow to repair.",
          },
        },
        {
          "@type": "Question",
          name: "Can I move buildings in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the current building UI for remove, dismantle, cancel, or rebuild options. If moving is expensive or awkward, work around the mistake and plan the next expansion more carefully.",
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
          title="Romestead Town Layout Guide: Best Base Setup for Workers, Farmstead and Raids"
          description="Plan a compact Romestead town around resources, Town Core, Farmstead, Watermill, Material Storage, Logistics Tent, roads and raid defense."
          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BaseLayoutGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}