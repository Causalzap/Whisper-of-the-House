import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BaseBuildingAutomationContent from "@/data/spacecraft/base-building-automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/base-building-automation`;

const imageUrls = [
  `${siteUrl}/images/spacecraft/spacecraft-personal-factory-unlock.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-base-core-drive-description.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-base-components-list.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-rotalis-mining-outpost-deposits.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-first-base-terminal-footprint-energy.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-extractor-smelter-pylon-setup.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-smelter-iron-ore-input.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-drone-route-requires-drone.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-drone-route-created.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-base-automation-tutorial-complete.webp`,
];

const toc = [
  {
    id: "base-building-automation-guide",
    label: "Base building guide",
  },
  {
    id: "when-base-building-starts",
    label: "When base building starts",
  },
  {
    id: "where-to-build-first-base",
    label: "Where to build first",
  },
  {
    id: "find-unclaimed-resource-deposit",
    label: "Unclaimed deposits",
  },
  {
    id: "base-terminal-footprint-energy",
    label: "Footprint and energy",
  },
  {
    id: "power-sources",
    label: "Power sources",
  },
  {
    id: "extractor-smelter-pylon",
    label: "Extractor, Smelter, Pylon",
  },
  {
    id: "smelter-input",
    label: "Smelter input",
  },
  {
    id: "drone-route",
    label: "Drone Route",
  },
  {
    id: "base-buildings-explained",
    label: "Base buildings",
  },
  {
    id: "co-op-base-roles",
    label: "Co-op roles",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "mistakes",
    label: "Mistakes",
  },
  {
    id: "automation-complete",
    label: "First setup complete",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/spacecraft",
    label: "SpaceCraft Guide Hub",
  },
  {
    href: "/spacecraft/beginner-guide",
    label: "SpaceCraft Beginner Guide",
  },
  {
    href: "/spacecraft/scanlyzer-alpha-ftl-engine",
    label: "SpaceCraft Scanalyzer Alpha and FTL Guide",
  },
  {
    href: "/spacecraft/resources-locations",
    label: "SpaceCraft Resources Guide",
  },
  {
    href: "/spacecraft/ship-upgrades-cargo-inventory",
    label: "SpaceCraft Ship Upgrades Guide",
  },
];

export const metadata: Metadata = {
  title: "SpaceCraft Base Building Guide: Extractor, Smelter, Drones",
  description:
    "Build your first SpaceCraft base with Base Core Drive, unclaimed deposits, Extractor, Smelter, Pylon power, Drone Routes, co-op roles, and building materials.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "SpaceCraft Base Building Guide: Extractor, Smelter, Pylon, Drone Routes and Unclaimed Deposits",
    description:
      "Learn how to start your first SpaceCraft base with Base Core Drive, unclaimed Iron or Copper deposits, Extractors, Smelters, Pylons, Drone Routes, power limits, building materials, and co-op role splits.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "SpaceCraft Personal Factory unlock for first base building.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCraft Base Building Guide",
    description:
      "Start your first SpaceCraft base with an unclaimed deposit, Base Core Drive, Extractor, Smelter, Pylon, and Drone Route.",
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
          name: "SpaceCraft Guide",
          item: `${siteUrl}/spacecraft`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SpaceCraft Base Building and Automation Guide",
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
        "SpaceCraft Base Building and Automation Guide: Base Core Drive, Extractors, Smelters, Pylons, Drone Routes and Unclaimed Deposits",
      description:
        "A player-focused SpaceCraft base building and automation guide covering when base building starts, how to choose an unclaimed Iron or Copper deposit, how to place the Base Core Drive, how to read footprint and energy values, how to connect Extractors, Smelters, and Pylons, how to select Smelter input, how to create the first Drone Route, which base buildings matter first, how Solar Plant and power options work, and how co-op players can split layout, automation, scouting, and logistics roles.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-13",
      dateModified: "2026-06-13",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "SpaceCraft",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft base building",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft automation",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Base Core Drive",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft unclaimed resource deposit",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Extractor",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Smelter",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Pylon",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Drone Route",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Solar Plant",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft co-op base",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "When can I start base building in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Base building starts once Personal Factory and the first base construction items become available. Your first key items are Construction Tool, Base Core Drive, Extractor, Smelter, Pylon, Cable, and Base Deploy Kit.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Base Core Drive do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Base Core Drive claims the surrounding area and supplies electric power to the base. In the shown build, it appears in the Company Exchange for 499.99 credits, but Early Access values can change.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I build my first base in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build near an unclaimed Iron or Copper deposit. These resources feed the most useful early crafting and automation chains.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find an unclaimed resource point in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Scan from orbit, open the map, fly low over the marker, check whether another player has already claimed or built around the area, then place your Base Core Drive only after confirming the deposit is usable.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build a base around Quartz in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Quartz is useful, especially for Crystalline Focuser and later upgrade paths, but it is usually better as a second-stage base target after Iron or Copper production is stable.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build a base around Gravite in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not for your first base. Gravite is more useful as a special scouting or progression resource than as the anchor for your first ore-to-ingot loop.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I place an Extractor in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Extractors must be placed directly over a valid resource deposit. If the deposit is already claimed or the blueprint is not aligned with the deposit, placement may fail.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my Smelter not working in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check power, input, and material flow. The most common issue is forgetting to select the correct Smelter input, such as Iron Ore.",
          },
        },
        {
          "@type": "Question",
          name: "How do I connect buildings to power in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a Pylon and cable connection to link the building back to the base power grid. Then check Energy Consumption in the base terminal.",
          },
        },
        {
          "@type": "Question",
          name: "How does Solar Plant orientation work in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Solar Plant description says it needs correct orientation and space. Place it in an open area, rotate it carefully during placement, and avoid cramped or blocked spots.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if base power consumption is too high?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the base terminal. If Energy Consumption is close to the limit, add more power before adding more Extractors, Smelters, Warehouses, or routes.",
          },
        },
        {
          "@type": "Question",
          name: "Does Drone Route have a range limit in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The exact range can vary by setup and current build, so do not assume one Drone can solve every distance problem. If a route fails or feels inefficient, shorten the route, add storage, or reorganize buildings before scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Add Route require a Drone in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The route tool needs an actual Drone before the route can run. Craft a Drone first, then create the route again.",
          },
        },
        {
          "@type": "Question",
          name: "Can I unclaim or move a base in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not rely on moving a base as your main plan unless you have confirmed the current patch’s base removal or relocation option. Before placing the Base Core Drive, assume the site choice matters and scout carefully.",
          },
        },
        {
          "@type": "Question",
          name: "Is Trading Box useful solo in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not early. Trading Box is mainly useful for corporation or co-op sharing. Solo players should focus first on Extractor, Smelter, Pylon, power, and Drone Routes.",
          },
        },
        {
          "@type": "Question",
          name: "What should co-op players do differently when building a base?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Co-op players should split roles before placing the Base Core Drive. One player can handle layout, one can manage automation, one can scout unclaimed deposits, and one can move missing materials.",
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
          title="Build Your First SpaceCraft Base Without Wasting Power"
          description="Find an unclaimed deposit, place the Base Core Drive, connect Extractors and Smelters with Pylons, then add Drone Routes without overbuilding."
          gameTitle="SpaceCraft"
          gameHref="/spacecraft"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BaseBuildingAutomationContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
