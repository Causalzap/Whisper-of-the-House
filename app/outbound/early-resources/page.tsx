import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyResourcesContent from "@/data/outbound/early-resources.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/outbound/early-resources`;

export const metadata: Metadata = {
  title: "Outbound Early Resource Guide: Scrap Metal, Coarse Ore & More",
  description:
    "Find key Outbound resources: Scrap Metal, Everwood, Fiber, Coarse Ore, Silverbark, Clay, bridge materials & the best early farming routes!",
  alternates: {
    canonical: pageUrl,
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
          name: "Outbound Guide",
          item: `${siteUrl}/outbound`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Early Resource Guide",
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
        "Outbound Early Resource Guide: Scrap Metal, Coarse Ore, Everwood, Fiber, Redwood and Clay",
      description:
        "Find key early resources in Outbound, including Scrap Metal, Everwood, Fiber, Litter, Coarse Ore, Silverbark, Redwood, Clay, Sawmill numbers, bridge materials, and resource farming routes.",
      image: [
        `${siteUrl}/images/outbound/outbound-early-resources-scrap-metal-signal-tower.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-fiber-bushes.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-everwood-campsite.webp`,
        `${siteUrl}/images/outbound/outbound-recycler-download-vouchers.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-water-well.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-mining-area-scrap-metal.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-silverbark-biome.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-redwood-coast.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-redwood-search.webp`,
        `${siteUrl}/images/outbound/outbound-early-resources-clay-canyon.webp`
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Outbound",
        },
        {
          "@type": "Thing",
          name: "Resource Locations",
        },
        {
          "@type": "Thing",
          name: "Scrap Metal",
        },
        {
          "@type": "Thing",
          name: "Coarse Ore",
        },
        {
          "@type": "Thing",
          name: "Everwood",
        },
        {
          "@type": "Thing",
          name: "Fiber",
        },
        {
          "@type": "Thing",
          name: "Redwood",
        },
        {
          "@type": "Thing",
          name: "Clay",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Where do I find Scrap Metal in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check around Signal Towers, roadside junk, supply boxes, abandoned stops, and mining areas. One Metal Scrap pickup gives 3 Scrap Metal, and tower-side Scrap Metal can respawn after time passes or after sleeping.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Fiber in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fiber comes from bushes. Small bushes can be gathered early, while larger bushes may require the Sickle.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Everwood in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Everwood comes from loose logs, supply boxes, campsites, wooded paths, and larger wood sources once you unlock the Axe.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Everwood Planks in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build the Sawmill and process Everwood into Everwood Planks. The Sawmill costs 10 Everwood and 2 Scrap Metal, and 2 Everwood makes 1 Everwood Plank.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Coarse Ore in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check mining-style ore pockets or metal-heavy landmarks. Coarse Ore is not spread evenly across normal roadside rocks, so explore mining POIs if smelting recipes are blocking you.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Redwood in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Redwood appears after you leave the first map and reach the coast or second map area. It becomes important for later tools, campfires, and biome progression.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Clay in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clay appears later, around the canyon biome. It is not something you should expect to farm in the first map.",
          },
        },
        {
          "@type": "Question",
          name: "Do resources respawn in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some resources around towers and common pickup areas can return over time. Scrap Metal around Signal Towers is especially worth rechecking when you are short.",
          },
        },
        {
          "@type": "Question",
          name: "What should I burn for power in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use common Everwood if you need emergency charge, use Fiber only as a backup, and avoid burning Silverbark or Redwood until you know your next recipe costs.",
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
          title="Outbound Early Resource Guide: Scrap Metal, Coarse Ore, Everwood, Fiber, Redwood and Clay"
          description="Find early and mid-game resources in Outbound, including Scrap Metal, Everwood, Fiber, Litter, Coarse Ore, Silverbark, Redwood, Clay, Sawmill numbers, bridge materials, storage habits, and farming routes."
          gameTitle="Outbound"
          gameHref="/outbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "best-early-resource-route",
              label: "Best early route",
            },
            {
              id: "storage-panel-build-mode",
              label: "Storage & Build Mode",
            },
            {
              id: "key-resource-numbers",
              label: "Key numbers",
            },
            {
              id: "resource-overview",
              label: "Resource locations",
            },
            {
              id: "scrap-metal",
              label: "Scrap Metal",
            },
            {
              id: "fiber",
              label: "Fiber",
            },
            {
              id: "everwood",
              label: "Everwood",
            },
            {
              id: "litter-download-vouchers",
              label: "Litter & vouchers",
            },
            {
              id: "power-unit-fuel",
              label: "Power Unit fuel",
            },
            {
              id: "water-food-ginger",
              label: "Food & water",
            },
            {
              id: "mining-coarse-ore",
              label: "Coarse Ore",
            },
            {
              id: "silverbark",
              label: "Silverbark",
            },
            {
              id: "redwood",
              label: "Redwood",
            },
            {
              id: "clay",
              label: "Clay",
            },
            {
              id: "resources-by-area",
              label: "Resources by area",
            },
            {
              id: "what-to-do-when-missing-resource",
              label: "Missing resources",
            },
            {
              id: "best-storage-habits",
              label: "Storage habits",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/outbound",
              label: "Outbound Beginner Guide",
            },
            {
              href: "/outbound/leave-first-biome",
              label: "How to Leave the First Biome in Outbound",
            },
            {
              href: "/outbound/blueprints-workstations-upgrades",
              label: "Outbound Blueprints and Workstations Guide",
            },
            {
              href: "/outbound/energy-guide",
              label: "Outbound Energy Guide",
            },
            {
              href: "/outbound/storage-backpack-guide",
              label: "Outbound Storage and Backpack Guide",
            },
          ]}
        >
          <EarlyResourcesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}