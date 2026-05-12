import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BlueprintsWorkstationsUpgradesContent from "@/data/outbound/blueprints-workstations-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/outbound/blueprints-workstations-upgrades`;

export const metadata: Metadata = {
  title: "Outbound Blueprints Guide: Best Workstations & Upgrades",
  description:
    "Best Outbound blueprints to unlock first: Signal Towers, Recycler, Sawmill, Sewing Table, Bolt Press, Vehicle Research & vital co-op progress tips!",
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
          name: "Blueprints and Workstations Guide",
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
      headline: "Outbound Blueprints Guide: Best Workstations and Upgrades to Unlock First",
      description:
        "Learn the best blueprints to unlock first in Outbound, including Signal Towers, Download Vouchers, Recycler, Sawmill, Sewing Table, Base Building Deck, Bolt Press, Vehicle Research, and co-op progress notes.",
      image: [
        `${siteUrl}/images/outbound/outbound-first-signal-tower-blueprints.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-signal-tower-reactivates.webp`,
        `${siteUrl}/images/outbound/outbound-recycler-download-vouchers.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-lock-download-vouchers.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-tool-choice-axe-pickaxe-sickle.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-sawmill-planks.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-sewing-table-backpack-upgrades.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-base-building-deck-treehut.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-van-roof-expansion.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-metal-smelter-bolt-press-nailing-station.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-vehicle-research-station.webp`,
        `${siteUrl}/images/outbound/outbound-blueprints-bolt-press-making-bolts.webp`
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
          name: "Blueprints",
        },
        {
          "@type": "Thing",
          name: "Signal Towers",
        },
        {
          "@type": "Thing",
          name: "Download Vouchers",
        },
        {
          "@type": "Thing",
          name: "Workstations",
        },
        {
          "@type": "Thing",
          name: "Vehicle Upgrades",
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
          name: "What are the best blueprints to unlock first in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best blueprints to unlock first in Outbound are Basic Tools, Recycler, Axe, Pickaxe, Sickle, Sawmill, Sewing Table, Base Building Deck, Bolt Press, Vehicle Research Station, and Gear Research Station.",
          },
        },
        {
          "@type": "Question",
          name: "Can I permanently miss a blueprint in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually, no. Signal Towers can reactivate and cycle new blueprint options later, so one early choice usually does not permanently lock you out. Revisit towers, follow new radio signals, and check question-mark points of interest.",
          },
        },
        {
          "@type": "Question",
          name: "Are blueprints random in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blueprint availability can vary by save and route. If another player found a blueprint at a different tower, keep checking Signal Towers and question-mark points of interest instead of assuming your game is broken.",
          },
        },
        {
          "@type": "Question",
          name: "How do I build the Recycler in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Build a counter inside your van, then place the Recycler on it. The early Recycler recipe is 2 Everwood and 1 Scrap Metal. Use the Recycler to turn Litter into Download Vouchers.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Sewing Table do in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Sewing Table supports backpack and clothing upgrade paths. It connects Fiber gathering to better carry capacity, stamina, and health-style gear progression.",
          },
        },
        {
          "@type": "Question",
          name: "How do I build on top of the van in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Look for the Base Building Deck blueprint. After crafting it, you can place roof floors and expand upward, though weight and building-space upgrades still matter.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Base Building Deck in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A common early route is around the Treehut and Fire Lookout side of the first map after repairing bridge access. Because blueprint availability can vary, check nearby points of interest and towers if it is not exactly where another player found it.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I missing materials even after building Vehicle Research in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some vehicle upgrades are designed for later progression. The first biome mainly supports early van upgrades; higher-tier materials and more advanced recipes often require later maps and biomes.",
          },
        },
        {
          "@type": "Question",
          name: "How do blueprints work in Outbound co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blueprints, recipes, bridges, van upgrades, and workstation progress are tied to the host save. They help the group while playing in that world, but they should not be expected to transfer back to each guest player's own solo save.",
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
          title="Outbound Blueprints Guide: Best Workstations and Upgrades to Unlock First"
          description="Learn which blueprints to unlock first in Outbound, how Signal Towers and Download Vouchers work, when to build the Recycler, Sawmill, Sewing Table, Base Building Deck, Bolt Press, Vehicle Research Station, and what co-op players should know."
          gameTitle="Outbound"
          gameHref="/outbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "best-blueprints-first",
              label: "Best blueprints first",
            },
            {
              id: "signal-towers-reactivate",
              label: "Signal Towers",
            },
            {
              id: "download-vouchers",
              label: "Download Vouchers",
            },
            {
              id: "lock-vouchers",
              label: "Lock vouchers",
            },
            {
              id: "tools-choice",
              label: "Tool choice",
            },
            {
              id: "sawmill",
              label: "Sawmill",
            },
            {
              id: "player-upgrades",
              label: "Player upgrades",
            },
            {
              id: "base-building-deck",
              label: "Base Building Deck",
            },
            {
              id: "metal-workstations",
              label: "Metal workstations",
            },
            {
              id: "vehicle-research",
              label: "Vehicle Research",
            },
            {
              id: "bolt-press-motor-upgrade",
              label: "Motor upgrade chain",
            },
            {
              id: "what-to-unlock-next",
              label: "What to unlock next",
            },
            {
              id: "co-op-blueprints",
              label: "Co-op notes",
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
              href: "/outbound/early-resources",
              label: "Outbound Early Resource Guide",
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
          <BlueprintsWorkstationsUpgradesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}