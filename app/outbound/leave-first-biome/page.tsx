import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LeaveFirstBiomeContent from "@/data/outbound/leave-first-biome.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/outbound/leave-first-biome`;

export const metadata: Metadata = {
  title: "Leaving Outbound's First Biome: Bridges & Mossrocks",
  description:
    "How to leave Outbound's first biome: Fix broken bridges with Everwood Planks, upgrade to Motor I & Pickaxe II, clear Mossrocks, and reach the Paws Lodge!",
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
          name: "First Biome Progression Guide",
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
        "How to Leave the First Biome in Outbound: Mossrocks, Bridges, Drawbridge, Motor I and Pickaxe II",
      description:
        "Learn how to leave the first biome in Outbound, including broken bridge requirements, Everwood Planks, the drawbridge switch, Motor I, Pickaxe II, Mossrocks, and Paws & Whiskers Lodge.",
      image: [
        `${siteUrl}/images/outbound/outbound-first-biome-bridge-repair-everwood-planks.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-sawmill-planks.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-drawbridge-other-side.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-pickaxe-level-two.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-mining-area-scrap-metal.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-steep-slope-motor-upgrade.webp`,
        `${siteUrl}/images/outbound/outbound-mossrocks-first-map-exit.webp`,
        `${siteUrl}/images/outbound/outbound-paws-whiskers-lodge-dog.webp`
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
          name: "First Biome",
        },
        {
          "@type": "Thing",
          name: "Mossrocks",
        },
        {
          "@type": "Thing",
          name: "Pickaxe II",
        },
        {
          "@type": "Thing",
          name: "Everwood Planks",
        },
        {
          "@type": "Thing",
          name: "Drawbridge",
        },
        {
          "@type": "Thing",
          name: "Motor I",
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
          name: "How do I leave the first biome in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "To leave the first biome in Outbound, unlock vouchers and tools, repair bridges, lower the drawbridge from the far side, upgrade to Motor I, craft Pickaxe II, then break the Mossrocks and drive through the tunnel.",
          },
        },
        {
          "@type": "Question",
          name: "How many broken bridges are in the first map in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are three important broken bridges in the first map. The first two each need 10 Everwood Planks. The later east-side bridge needs 30 Everwood Planks and sits behind a steep slope route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I fix broken bridges in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Unlock the Sawmill, turn Everwood into Everwood Planks, and bring the required Planks to the bridge. Two Everwood makes one Everwood Plank.",
          },
        },
        {
          "@type": "Question",
          name: "How do I lower the drawbridge in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reach the far side first, then look for the small control room on the right side of the drawbridge. Flip the switch inside. After that, the drawbridge stays lowered.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I break Mossrocks in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need Pickaxe II to break Mossrocks. If you have the blueprint but cannot craft it, check the Pickaxe II material chain: Reinforced Planks, Metal, Nailing Station, Metal Smelter, Coarse Ore, and Rock.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make Reinforced Planks in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Craft Reinforced Planks at the Nailing Station using 2 Everwood Planks and 1 Metal.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Metal in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Smelt Scrap Metal in the Metal Smelter. The Metal Smelter itself requires Coarse Ore and Rock to build.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t my van climb the steep slope in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need Motor I. Build Vehicle Research, craft Bolts through the Bolt Press, and upgrade the motor before trying the slope again.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the lift in the first map in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The east side of the first map has a lift or elevator-style structure that helps you reach the hilltop route. If you are circling below the hill, look for vertical routing instead of another road.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after leaving the first map in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Visit Paws & Whiskers Lodge early, unlock a dog companion, and start collecting new biome materials such as Redwood. The dog's 10-slot pouch is especially useful for resource runs.",
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
          title="How to Leave the First Biome in Outbound: Mossrocks, Bridges and Pickaxe II"
          description="Follow the full first-biome progression route in Outbound: build the Recycler, make Download Vouchers, repair broken bridges, lower the drawbridge, upgrade Motor I, craft Pickaxe II, break Mossrocks, and reach Paws & Whiskers Lodge."
          gameTitle="Outbound"
          gameHref="/outbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "how-to-leave-first-biome",
              label: "How to leave",
            },
            {
              id: "step-1-start-the-blueprint-loop",
              label: "Blueprint loop",
            },
            {
              id: "step-2-get-sawmill-planks",
              label: "Sawmill & Planks",
            },
            {
              id: "step-3-repair-bridges",
              label: "Repair bridges",
            },
            {
              id: "step-4-lower-drawbridge",
              label: "Lower drawbridge",
            },
            {
              id: "step-5-upgrade-tools",
              label: "Pickaxe II",
            },
            {
              id: "step-6-handle-steep-slopes",
              label: "Motor I",
            },
            {
              id: "step-7-break-mossrocks",
              label: "Break Mossrocks",
            },
            {
              id: "paws-whiskers-lodge",
              label: "Paws & Whiskers",
            },
            {
              id: "progression-blockers",
              label: "Blockers & fixes",
            },
            {
              id: "materials-needed",
              label: "Materials",
            },
            {
              id: "recommended-order",
              label: "Reset route",
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
              href: "/outbound/early-resources",
              label: "Outbound Early Resource Guide",
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
          <LeaveFirstBiomeContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}