import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DungeonTrapsDeathRecoveryContent from "@/data/romestead/dungeon-traps-death-recovery.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/romestead/dungeon-traps-death-recovery`;

const imageUrls = [
  `${siteUrl}/images/romestead/romestead-death-drops-setting.webp`,
  `${siteUrl}/images/romestead/romestead-twin-crypt-entry.webp`,
  `${siteUrl}/images/romestead/romestead-crypt-spawner-gauntlet.webp`,
  `${siteUrl}/images/romestead/romestead-dungeon-pressure-plate-puzzle.webp`,
  `${siteUrl}/images/romestead/romestead-crypt-loot-reward.webp`,
  `${siteUrl}/images/romestead/romestead-gods-moonstring-well-unlock.webp`,
  `${siteUrl}/images/romestead/romestead-dungeon-crypt-clear.webp`,
];

const toc = [
  { id: "dungeon-types", label: "Dungeon types" },
  { id: "when-to-enter", label: "When to enter" },
  { id: "twin-crypt", label: "Twin Crypt" },
  { id: "crypt-spawner", label: "Crypt Spawner" },
  { id: "trap-rooms", label: "Trap rooms" },
  { id: "loot-table", label: "Dungeon loot" },
  { id: "god-progression", label: "God progression" },
  { id: "death-recovery", label: "Death recovery" },
  { id: "coop", label: "Co-op roles" },
  { id: "cleared-crypt", label: "Cleared crypt" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/romestead", label: "Romestead Guide" },
  {
    href: "/romestead/first-day-base-building",
    label: "First Day and Base Building Guide",
  },
  {
    href: "/romestead/farmstead-workers-food-logistics",
    label: "Farmstead, Workers, Food and Logistics Guide",
  },
  {
    href: "/romestead/gods-offerings-boss-progression",
    label: "Gods, Offerings and Boss Progression Guide",
  },
  {
    href: "/romestead/giant-owl-guardian-of-minerva",
    label: "Giant Owl Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Romestead Dungeon Guide: Traps, Death & Loot Recovery",
  description:
    "Survive Romestead dungeons and crypts. Learn when to enter, how to handle Twin Crypt spawners, traps, loot, death drops and recovery runs.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Romestead Dungeon Guide: Traps, Death and Loot Recovery",
    description:
      "A practical Romestead dungeon guide covering Twin Crypt, crypt spawners, trap rooms, dungeon loot, death settings, recovery runs and god progression links.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Romestead player approaching the Twin Crypt entrance before a crypt run.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romestead Dungeon Guide: Traps, Death and Loot Recovery",
    description:
      "Enter Romestead crypts safely, handle spawners and traps, protect your loot, and recover dropped items without repeating the same mistake.",
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
          name: "Romestead Guide",
          item: `${siteUrl}/romestead`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dungeon Traps and Death Recovery",
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
        "Romestead Dungeon Traps and Death Recovery Guide: Twin Crypt, Spawners, Loot, Traps and Recovery Runs",
      description:
        "A player-focused Romestead dungeon guide explaining how to approach different dungeon types, when a town is ready for crypt runs, how to handle Twin Crypt and crypt spawners, how trap and puzzle rooms work, what dungeon reward types matter, how dungeons connect to god objectives such as The Moonstring and Well unlock, how death settings affect item risk, and how to recover dropped items without repeating the same mistake.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-27",
      dateModified: "2026-05-27",
      about: [
        { "@type": "VideoGame", name: "Romestead" },
        { "@type": "Thing", name: "Romestead Dungeons" },
        { "@type": "Thing", name: "Twin Crypt" },
        { "@type": "Thing", name: "Crypt Spawner" },
        { "@type": "Thing", name: "Dungeon Traps" },
        { "@type": "Thing", name: "Death Recovery" },
        { "@type": "Thing", name: "Softcore" },
        { "@type": "Thing", name: "Dungeon Loot" },
        { "@type": "Thing", name: "The Moonstring" },
        { "@type": "Thing", name: "Well Unlock" },
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
          name: "What is the safest first dungeon type in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A short crypt-style location like Twin Crypt is a reasonable early target, but only after your town has Food Storage, a worker, food, and a clear recovery plan.",
          },
        },
        {
          "@type": "Question",
          name: "How do I deal with Crypt Spawners in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Treat the spawner as the main objective. Back up, control the first wave, then destroy or disable the pressure source before looting. Do not stand in the center while enemies keep appearing.",
          },
        },
        {
          "@type": "Question",
          name: "Why did the Crypt Spawner trigger so early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spawner trigger distance can change during Early Access. Play safely by assuming the spawner may activate before you are directly beside it.",
          },
        },
        {
          "@type": "Question",
          name: "What loot should I expect from Romestead dungeons?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Useful dungeon rewards can include weapons, armor, rings, bones, monster loot, artifacts, quest items, and cleared location progress. Always check whether unusual items connect to the altar, god objectives, or building unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "Are dungeons required for god progression in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some god objectives can point you toward dungeon artifacts. The Moonstring is one example because it asks for a dungeon artifact and unlocks Well.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when I die in a dungeon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It depends on your death setting. Normal death can drop carried inventory while keeping equipped items. Softcore is safer because it only drops money.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Softcore in Romestead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Softcore if you want to learn dungeon layouts without painful recovery runs. Use normal death drops if you want more survival pressure.",
          },
        },
        {
          "@type": "Question",
          name: "How do I recover dropped items from a trap room?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Return with full health, only the gear needed for recovery, and a plan for the exact hazard that killed you. Grab the items and leave instead of continuing the dungeon.",
          },
        },
        {
          "@type": "Question",
          name: "Should I keep exploring after finding a good reward?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if your food, health, and inventory risk are still under control. If the reward is rare, an artifact, or a major gear upgrade, bank it first.",
          },
        },
        {
          "@type": "Question",
          name: "How should co-op groups handle Romestead dungeons?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Split roles. One player controls enemies, one focuses spawners or ranged threats, one secures loot, and one may stay near town if the settlement is still unstable.",
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
          title="Romestead Dungeon Guide: Survive Crypts, Traps and Death Runs"
          description="Know when to enter crypts, how to handle spawners and trap rooms, what loot matters, and how to recover dropped items safely."
          gameTitle="Romestead"
          gameHref="/romestead"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DungeonTrapsDeathRecoveryContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}