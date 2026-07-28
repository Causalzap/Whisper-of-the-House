import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import ScrapMechanicHubContent from "@/data/scrap-mechanic/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scrap-mechanic`;

const metadataTitle =
  "Scrap Mechanic 1.0 Guide Hub: Story & Progression";

const metadataDescription =
  "Use this Scrap Mechanic 1.0 guide hub to find the right walkthrough for your current story, access, vehicle, processing, construction, or completion blocker.";

const socialImage =
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-story-warehouse-exterior.webp`;

const toc = [
  {
    id: "choose-guide",
    label: "Choose a guide",
  },
  {
    id: "progression-order",
    label: "Progression order",
  },
  {
    id: "hub-mechanics",
    label: "Shared mechanics",
  },
  {
    id: "excavation-island",
    label: "Excavation Island",
  },
  {
    id: "trip-check",
    label: "Long-trip checklist",
  },
  {
    id: "next-step",
    label: "Choose the next step",
  },
  {
    id: "faq",
    label: "Cross-system edge cases",
  },
];

const guideItems = [
  {
    href: "/scrap-mechanic/first-grow-lab-walkthrough",
    label: "First Grow Lab Walkthrough",
    description:
      "Preparation, combat route, progression checks, reward, and exit sequence for the first numbered Grow Lab.",
  },
  {
    href: "/scrap-mechanic/warehouse-key",
    label: "Warehouse Key Guide",
    description:
      "Hubert's story key, Farmbot drops, regular and Master Key differences, correct destination, and locked-door checks.",
  },
  {
    href: "/scrap-mechanic/warehouse-walkthrough",
    label: "Story Warehouse Walkthrough",
    description:
      "The complete story route through the Anti-theft floors, Trash Bot boss, Lorenzo sequence, survey map, and escape.",
  },
  {
    href: "/scrap-mechanic/hubert-watchtower-small-tank",
    label: "Hubert Watchtower & Small Tank",
    description:
      "Find the physical Small Tank, collect it during the Warehouse loot window, and complete Hubert's hologram build.",
  },
  {
    href: "/scrap-mechanic/mining-guide",
    label: "Mining Site 01 Guide",
    description:
      "Mine access, Plasma Drill setup, Terramass, ore collection, Turret Seat aiming, traction, power, and vehicle upgrades.",
  },
  {
    href: "/scrap-mechanic/ore-processing-guide",
    label: "Ore Processing Guide",
    description:
      "Move physical Ore through the Crushbot, Prospector, Mining Hub, Caster, Ingot transport, Vault, and automation loop.",
  },
  {
    href: "/scrap-mechanic/achievements",
    label: "All 34 Achievements Guide",
    description:
      "A structured checklist for story milestones, construction goals, combat totals, Vault targets, and long-term cleanup.",
  },
];

const relatedLinks = guideItems.map(({ href, label }) => ({
  href,
  label,
}));

const faqEntities = [
  {
    question:
      "Can I continue the main story if I leave the Warehouse without a Small Tank?",
    answer:
      "Yes. The Small Tank is required for Hubert's Watchtower project, not for the Mining Site 01 survey-map reveal or Plasma Drill progression. Continue the underground story route and obtain a Small Tank later from another intact Warehouse.",
  },
  {
    question:
      "Can an optional intact Warehouse replace the destroyed story Warehouse?",
    answer:
      "No. The Lorenzo, Mining Site 01, and Plasma Drill story sequence belongs to Hubert's marked Warehouse. Other intact Warehouses remain useful for optional exploration, protected interior parts, additional Small Tanks, and material runs.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: metadataTitle,
    description:
      "Choose the correct Scrap Mechanic 1.0 route for story progression, access problems, vehicle failures, resource processing, construction projects, and completion goals.",
    siteName: "Whisper of the House",
    images: [
      {
        url: socialImage,
        width: 1280,
        height: 720,
        alt: "Scrap Mechanic story Warehouse and 1.0 progression route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find the right Scrap Mechanic 1.0 walkthrough for your current progression or system blocker.",
    images: [socialImage],
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
          name: "Scrap Mechanic Guide Hub",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Scrap Mechanic 1.0 Guides",
      numberOfItems: guideItems.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: guideItems.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.label,
        description: guide.description,
        url: `${siteUrl}${guide.href}`,
      })),
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: metadataTitle,
      headline: "Scrap Mechanic 1.0 Guide Hub",
      description:
        "A route-based Scrap Mechanic 1.0 guide hub that directs players to the correct walkthrough for story progression, access items, combat routes, underground vehicles, material processing, construction projects, and achievements.",
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      image: socialImage,
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
      about: {
        "@type": "VideoGame",
        name: "Scrap Mechanic",
        url: pageUrl,
      },
      hasPart: guideItems.map((guide) => ({
        "@type": "WebPage",
        name: guide.label,
        description: guide.description,
        url: `${siteUrl}${guide.href}`,
      })),
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
          title="Scrap Mechanic 1.0 Guide Hub"
          description="Choose the route that matches your current blocker, from early story progression and access items to underground systems, construction projects, and completion goals."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ScrapMechanicHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Scrap Mechanic"
          heading="Looking for another game after Scrap Mechanic?"
          description="Use the quick recommender to find a game that matches your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}