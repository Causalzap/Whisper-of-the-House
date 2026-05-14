import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EvolutionsListContent from "@/data/everything-is-crab/evolutions-list.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab/evolutions-list`;

export const metadata: Metadata = {
  // Title (64 chars): targets evolutions list + picker + best evolutions
  title: "Everything Is Crab Evolutions List & Picker: Best Picks",
  // Description (158 chars): covers list, picker, affinity, builds, pressure and long-tail intent
  description:
    "Use this Everything Is Crab evolutions list and picker to choose the best evolutions by build, affinity, Pressure level, route, and when to skip each pick.",
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
          name: "Everything Is Crab Guide",
          item: `${siteUrl}/everything-is-crab`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Evolutions List & Picker",
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
      headline: "Everything Is Crab Evolutions List & Picker: Best Picks",
      description:
        "Use this Everything Is Crab evolutions list and picker to choose the best evolutions by build, affinity, Pressure level, route, and when to skip each pick.",
      image: [
        `${siteUrl}/images/everything-is-crab/everything-is-crab-evolution-picker-cheek-pouch-choice.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-evolution-picker-poison-stinger-cortex.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-evolution-picker-body-slam-jaws.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-13",
      dateModified: "2026-05-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Everything Is Crab",
        },
        {
          "@type": "Thing",
          name: "Evolutions",
        },
        {
          "@type": "Thing",
          name: "Game Strategies",
        },
        {
          "@type": "Thing",
          name: "Character Builds",
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
          name: "What are the best evolutions in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best general evolutions are usually Cheek Pouch, Saliva, Legs, Shell, More Eyes, and one reliable attack for beginners. For specific routes, Stinger and Leech are better for poison and Ability builds, while Body Slam, Chunky, More Mass, Jaws, and Muscular Tissue are better for big Physical builds.",
          },
        },
        {
          "@type": "Question",
          name: "Does this cover all evolutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This picker covers the major evolution decisions across the game's five affinities and the evolutions most likely to change your build. It organizes important picks by route, priority, take condition, and skip condition instead of cloning a raw data table.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I keep getting the same evolutions in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are probably seeing affinity drift. When you keep choosing evolutions from the same affinity, that affinity becomes more likely to appear in future evolution choices. If you keep taking Gregarious or Social tools, expect more charm, ally, and senses options.",
          },
        },
        {
          "@type": "Question",
          name: "What is affinity drift in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affinity drift is the way your early picks push the future evolution pool. Predator picks pull you toward aggression and meat routes. Imposing picks pull you toward size and tank routes. Gregarious picks pull you toward social and senses routes.",
          },
        },
        {
          "@type": "Question",
          name: "What are Branching Evolutions in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Branching Evolutions are route-shaping choices that appear from boss reward moments and major branch points, not just from normal level-up rolls. Plan for them by building the stats and route that make the branch useful.",
          },
        },
        {
          "@type": "Question",
          name: "How many attacks can you have at once in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plan your loadout around limited slots: usually two normal attacks, one Ultimate-style ability, and one Movement tool. If a new evolution replaces a slot, make sure it improves your actual build instead of breaking your current damage or movement plan.",
          },
        },
        {
          "@type": "Question",
          name: "What is the max evolution level in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not every evolution scales the same way. Some evolutions have multiple levels and become build-defining only after upgrades, while others are one-time tools or branch choices. Check the tooltip before spending mutagen or reroll value on an upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always pick the highest rarity evolution?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Rarity helps, but the best pick is the one that solves your current problem. A rare off-route evolution can be worse than a common evolution that gives your build food, movement, defense, or the correct damage stat.",
          },
        },
        {
          "@type": "Question",
          name: "Is Cheek Pouch good in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cheek Pouch is one of the safest early picks because it improves food tempo. It helps you keep moving while food continues to convert into progress.",
          },
        },
        {
          "@type": "Question",
          name: "Is Stinger good in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stinger is excellent when you are building poison, Ability damage, cooldown, or sustain. It is weaker when your build cannot safely land short-range attacks or when you are already committed to pure Physical.",
          },
        },
        {
          "@type": "Question",
          name: "Is Leech good in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leech is good in Ability and sustain routes because it deals Ability damage and helps you heal through fights. It is less valuable in pure Physical builds unless you have enough Ability support.",
          },
        },
        {
          "@type": "Question",
          name: "Is Body Slam good in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Body Slam is good when you already have Max HP, size, Shell, Plating, Chunky, or More Mass. Do not force it before your build has enough bulk.",
          },
        },
        {
          "@type": "Question",
          name: "Is Jaws good in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jaws is good in Predator routes because it supports Physical damage and meat-based progress. It is best when you can use it to finish enemies reliably.",
          },
        },
        {
          "@type": "Question",
          name: "Are Points of Interest worth chasing in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if your build has movement, senses, and enough safety to reach them. Points of Interest can give huge progress, but chasing them through lethal terrain can still lose the run.",
          },
        },
        {
          "@type": "Question",
          name: "When should I pivot evolutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pivot when your first plan does not appear by the first boss checkpoint. If you wanted poison but the game gives HP, Mass, and Body Slam, pivot to Body Slam. If you wanted big Physical but the game gives Leech, Cortex, and Dextrous, consider Ability instead.",
          },
        },
        {
          "@type": "Question",
          name: "What changes at higher Pressure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At Pressure 1 to 5, food tempo and simple scaling are usually enough. At Pressure 6 and higher, random biome starts make movement and terrain adaptation more valuable. At Pressure 10 and higher, sustain, poison resistance, and defensive consistency become much more important.",
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
          title="Everything Is Crab Evolutions List & Picker: Best Picks by Build"
          description="Choose the best Everything Is Crab evolutions with a player-first picker covering affinities, affinity drift, Branching Evolutions, Pressure changes, poison, Body Slam, Jaws, food economy, movement, and when to skip each pick."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "how-to-use-this-picker",
              label: "How to use",
            },
            {
              id: "affinity-drift",
              label: "Affinity drift",
            },
            {
              id: "branching-evolutions",
              label: "Branching Evolutions",
            },
            {
              id: "best-evolutions-by-goal",
              label: "Best by goal",
            },
            {
              id: "pressure-adaptation",
              label: "Pressure changes",
            },
            {
              id: "full-evolution-picker-table",
              label: "Picker table",
            },
            {
              id: "best-poison-evolutions",
              label: "Poison / Ability",
            },
            {
              id: "best-chonky-physical-evolutions",
              label: "Chonky / Physical",
            },
            {
              id: "best-predator-evolutions",
              label: "Predator",
            },
            {
              id: "best-mobility-poi-evolutions",
              label: "Food / Mobility / POI",
            },
            {
              id: "best-reflect-spines-evolutions",
              label: "Spines / Reflect",
            },
            {
              id: "build-routes-from-evolutions",
              label: "Routes / pivots",
            },
            {
              id: "affinity-picker-notes",
              label: "Affinity notes",
            },
            {
              id: "common-picker-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
              {
                href: "/everything-is-crab/genetics-guide",
                label: "Everything Is Crab Genetics Guide",
              },  
            {
              href: "/everything-is-crab",
              label: "Everything Is Crab Guide",
            },
            {
              href: "/everything-is-crab/best-builds",
              label: "Everything Is Crab Best Builds",
            },
            {
              href: "/everything-is-crab/genetics-guide",
              label: "Everything Is Crab Genetics Guide",
            },
            {
              href: "/everything-is-crab/progression-guide",
              label: "Everything Is Crab Progression Guide",
            },
            {
              href: "/everything-is-crab/boss-guide",
              label: "Everything Is Crab Boss Guide",
            },
            {
              href: "/everything-is-crab/selective-pressure-guide",
              label: "Everything Is Crab Selective Pressure Guide",
            },
            {
              href: "/everything-is-crab/points-of-interest",
              label: "Everything Is Crab Points of Interest Guide",
            },
          ]}
        >
          <EvolutionsListContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}