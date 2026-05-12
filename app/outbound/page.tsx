import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OutboundGuideContent from "@/data/outbound/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/outbound`;

export const metadata: Metadata = {
  title: "Outbound Beginner Guide: What to Do First & How to Progress",
  description:
    "Complete Outbound beginner's guide: Best starting vans, Signal Towers, blueprints, energy & resource management, dog companions, and early co-op progression.",
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
        "Outbound Beginner Guide: Best Starting Van, First Steps, Blueprints, Storage, Energy and Progression",
      description:
        "A complete Outbound beginner guide covering the best starting van, what to do first, Signal Towers, blueprints, storage, energy, resources, Mossrocks, dogs, co-op, collectibles, and early progression.",
      image: [
        `${siteUrl}/images/outbound/outbound-beginner-guide-first-drive.webp`,
        `${siteUrl}/images/outbound/outbound-first-signal-tower-blueprints.webp`,
        `${siteUrl}/images/outbound/outbound-van-storage-power-unit.webp`,
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
          name: "Beginner Guide",
        },
        {
          "@type": "Thing",
          name: "Starting Van",
        },
        {
          "@type": "Thing",
          name: "Signal Towers",
        },
        {
          "@type": "Thing",
          name: "Blueprints",
        },
        {
          "@type": "Thing",
          name: "Storage",
        },
        {
          "@type": "Thing",
          name: "Energy Management",
        },
        {
          "@type": "Thing",
          name: "Mossrocks",
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
          name: "What should I do first in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose a roomy starting van if you are unsure, finish the tutorial area, download Basic Tools from the first Signal Tower, craft the Wrench, repair the gate, gather basic resources, build the Recycler, and start turning Litter into Download Vouchers.",
          },
        },
        {
          "@type": "Question",
          name: "Which starting van should I choose in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For a first playthrough, choose the roomiest vehicle you can. Interior space is valuable because your van quickly fills with workstations, storage, power systems, and building pieces.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock more blueprints in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Signal Towers. The first one is free, but later towers usually need Download Vouchers. Build the Recycler and process Litter to get more vouchers.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my backpack full so quickly in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your backpack is only for the current trip. Deposit materials into the van often, lock important items like Download Vouchers, and use the Storage Guide if you cannot find the deposit panel or retrieve items.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my van battery keep running out in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your van uses battery power while traveling. Early on, feed wood into the Power Unit, use charging stations when you find them, watch van weight, and upgrade battery and motor systems.",
          },
        },
        {
          "@type": "Question",
          name: "How do I leave the first biome in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need to repair bridges, lower the drawbridge from the far side, upgrade Motor I, craft Pickaxe II, and break the Mossrocks that block the tunnel.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get a dog in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After leaving the first map, reach the coast and visit Paws & Whiskers Lodge. The dog pouch helps with resource runs, so it is worth doing early.",
          },
        },
        {
          "@type": "Question",
          name: "Is Outbound co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Outbound supports online co-op for up to four players after the starting tutorial gate.",
          },
        },
        {
          "@type": "Question",
          name: "Does Outbound have crossplay?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Crossplay and platform compatibility can change over time. Check the latest official store page or update notes before planning a long session across platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Is Outbound on Game Pass?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Availability can change over time. Check the latest Xbox or Microsoft Store listing for current Game Pass status before relying on it.",
          },
        },
        {
          "@type": "Question",
          name: "Is Outbound Steam Deck Verified?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Outbound has been listed as Steam Deck Verified during launch coverage, but verification and performance recommendations can change. Check the current Steam page if you are reading this later.",
          },
        },
        {
          "@type": "Question",
          name: "How dangerous is Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Outbound is not a combat-focused or punishing survival game. Hunger, fall damage, heat, and hazards can still cause problems, but the main challenge comes from exploration, resources, energy, storage, blueprints, tools, vehicle upgrades, and biome progression.",
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
          title="Outbound Beginner Guide: What to Do First, Best Starting Van and How to Progress"
          description="Start Outbound the right way with the best starting van choice, first-hour route, Signal Towers, Download Vouchers, storage, energy, resources, Mossrocks, dog companion, co-op notes, and links to every deeper guide."
          gameTitle="Outbound"
          gameHref="/outbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "choose-starting-van",
              label: "Starting van",
            },
            {
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "core-loop",
              label: "Core loop",
            },
            {
              id: "cluster-guides",
              label: "Guide cluster",
            },
            {
              id: "signal-towers-blueprints",
              label: "Signal Towers",
            },
            {
              id: "van-storage",
              label: "Storage",
            },
            {
              id: "energy-basics",
              label: "Energy",
            },
            {
              id: "early-resources",
              label: "Resources",
            },
            {
              id: "first-biome-progression",
              label: "First biome",
            },
            {
              id: "workstations-and-van-upgrades",
              label: "Workstations",
            },
            {
              id: "food-farming-and-health",
              label: "Food & health",
            },
            {
              id: "collectibles",
              label: "Collectibles",
            },
            {
              id: "dog-companion",
              label: "Dog companion",
            },
            {
              id: "easy-to-overlook-systems",
              label: "Easy to overlook",
            },
            {
              id: "co-op-crossplay",
              label: "Co-op & platforms",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/outbound/leave-first-biome",
              label: "How to Leave the First Biome in Outbound",
            },
            {
              href: "/outbound/energy-guide",
              label: "Outbound Energy Guide",
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
              href: "/outbound/storage-backpack-guide",
              label: "Outbound Storage and Backpack Guide",
            },
          ]}
        >
          <OutboundGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}