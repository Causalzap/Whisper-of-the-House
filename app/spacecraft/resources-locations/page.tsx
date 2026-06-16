import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ResourcesContent from "@/data/spacecraft/resources-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/resources-locations`;

const imageUrls = [
  `${siteUrl}/images/spacecraft/spacecraft-mining-bureau-resource-coordinates.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-solar-alpha-1-iron-copper.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-cargo-weight-limit.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-solar-alpha-2-gray-quartz.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-gravite-radar-search.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-mining-bureau-explains-resources.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-mining-bureau-carbon-silicate-pyrite.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-rotalis-mining-outpost-deposits.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-resource-inventory-categories.webp`,
];

const toc = [
  {
    id: "resources-locations-guide",
    label: "Resources guide",
  },
  {
    id: "known-resource-locations",
    label: "Known locations",
  },
  {
    id: "copper-iron-location",
    label: "Copper and Iron",
  },
  {
    id: "cargo-limit",
    label: "Cargo limit",
  },
  {
    id: "gray-quartz-location",
    label: "Gray Quartz",
  },
  {
    id: "gravite-location",
    label: "Gravite",
  },
  {
    id: "silicon-gel",
    label: "Silicon Gel",
  },
  {
    id: "mining-laser-tool-tier",
    label: "Mining tool gates",
  },
  {
    id: "mining-bureau",
    label: "Mining Bureau",
  },
  {
    id: "mining-bureau-planet-information",
    label: "Planet information",
  },
  {
    id: "carbon-silicate-pyrite",
    label: "Carbon, Silicate, Pyrite",
  },
  {
    id: "refining-sell-or-smelt",
    label: "Refine or sell",
  },
  {
    id: "how-to-search-resources",
    label: "Search methods",
  },
  {
    id: "deposits-outcrops-stones",
    label: "Deposits vs outcrops",
  },
  {
    id: "inventory-resource-categories",
    label: "Keep or sell",
  },
  {
    id: "resource-mistakes",
    label: "Mistakes",
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
    href: "/spacecraft/permits-knowledge-unlock",
    label: "SpaceCraft Permits and Knowledge Unlock Guide",
    },
    {
    href: "/spacecraft/noviciate-corporation-unlock",
    label: "SpaceCraft Noviciate and Corporation Unlock Guide",
    },
  {
    href: "/spacecraft/scanlyzer-alpha-ftl-engine",
    label: "SpaceCraft Scanalyzer Alpha and FTL Guide",
  },
  {
    href: "/spacecraft/ship-upgrades-cargo-inventory",
    label: "SpaceCraft Ship Upgrades Guide",
  },
  {
    href: "/spacecraft/base-building-automation",
    label: "SpaceCraft Base Building and Automation Guide",
  },
];

export const metadata: Metadata = {
  title: "SpaceCraft Resources Guide: Carbon, Silicate, Quartz",
  description:
    "Find Copper, Iron, Gray Quartz, Gravite, B-Carbon, Silicate and Pyrite with Mining Bureau coordinates, tool gates, deposits, and refining tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "SpaceCraft Resources Guide: Copper, Iron, Gray Quartz, Gravite, Carbon, Silicate and Pyrite",
    description:
      "Find key SpaceCraft resources with early locations, Mining Bureau coordinates, Carbon, Silicate, Pyrite, Gray Quartz, Gravite, mining laser tool gates, deposits, outcrops, and refining advice.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "SpaceCraft Mining Bureau resource coordinates menu for finding target resources.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCraft Resources Guide",
    description:
      "Find Copper, Iron, Gray Quartz, Gravite, B-Carbon, Silicate, Pyrite, Mining Bureau targets, deposits, and refining paths.",
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
          name: "SpaceCraft Resources Guide",
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
        "SpaceCraft Resources Guide: Copper, Iron, Gray Quartz, Gravite, B-Carbon, Silicate, Pyrite, Mining Bureau and Deposits",
      description:
        "A player-focused SpaceCraft resources guide covering early Copper and Iron on Solar Alpha 1, Gray Quartz and Gravite on Solar Alpha 2, Silicon Gel from the Company Exchanger, B-Carbon, Silicate and Pyrite through Mining Bureau protocols, paid resource coordinates, planet information sales, mining laser and tool tier gates, refining versus selling decisions, deposits versus outcrops versus stones, resource inventory categories, and first-base deposit planning.",
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
          name: "SpaceCraft resources",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Copper",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Iron",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Gray Quartz",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Gravite",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Silicon Gel",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft B-Carbon",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Silicate",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Pyrite",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Mining Bureau",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft resource coordinates",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Mining Laser tier",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft deposits",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft outcrops",
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
          name: "Where do I find Copper in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Copper appears early on Solar Alpha 1. Use radar near the surface and look for Copper or Cupri-style nodes during the opening mining objective. Copper Deposits can also appear on later planets and make strong first-base targets.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Iron in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Iron appears on Solar Alpha 1 during the opening route. Mine it with Copper because both feed early module crafting. For base automation, look for actual Iron Deposits rather than only loose stones.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Gray Quartz in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Gray Quartz appears on Solar Alpha 2 after Scanalyzer Alpha is installed. Scan it first, then mine it. Keep enough for Crystalline Focuser and later upgrade paths.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I find Gravite in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Gravite does not give a perfect radar marker. Follow the approximate direction, slow down, and search visually.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get Silicon Gel in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy Silicon Gel from the Company Exchanger during the trading objective. The early route asks you to buy 10, and later recipes can ask for more.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Carbon or B-Carbon in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After RakMu, use the Mining Bureau. The Integration Protocol can ask for B-Carbon, and paid coordinates can point you to a target system in the current build.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Silicate in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Mining Bureau target list or buy coordinates if you do not already know a source. Silicate can become an early Bureau blocker after RakMu.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Pyrite in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pyrite appears as a Mining Bureau target after RakMu. Use the Bureau if visual searching is taking too long, and confirm the resource label before assuming a gold-looking node is Pyrite.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Mining Bureau for in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Mining Bureau helps you locate specific resources, buy coordinates, bring resource samples, and sell useful planet information.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sell planet information to the Mining Bureau?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fully survey the planet instead of leaving after one scan. Identify resource types, deposits, and points of interest the objective cares about, then return to the Bureau when the exploration data is useful.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I mine a resource I found in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your Mining Laser, Resource Detector, or extraction tool may be too weak for that resource. Upgrade your tools before forcing higher-tier nodes.",
          },
        },
        {
          "@type": "Question",
          name: "Should I refine ore before selling in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Refine when a recipe needs ingots or processed parts. Sell raw or spare materials only when you need credits and the material is not part of your next recipe chain.",
          },
        },
        {
          "@type": "Question",
          name: "What resources should I keep early in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep Copper, Iron, Gray Quartz, Silicon Gel, and active Bureau samples until you know your next recipe or objective does not need them.",
          },
        },
        {
          "@type": "Question",
          name: "What matters for a first mining base in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Look for actual deposits, not only loose stones or outcrops. Extractors need valid resource deposits to automate mining.",
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
          title="Find SpaceCraft Resources Without Guessing Every Planet"
          description="Use early locations, Mining Bureau coordinates, deposit scouting, mining tool gates, and refining rules to find the materials you actually need."
          gameTitle="SpaceCraft"
          gameHref="/spacecraft"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ResourcesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
