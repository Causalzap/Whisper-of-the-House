import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EverythingIsCrabContent from "@/data/everything-is-crab/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/everything-is-crab`;

export const metadata: Metadata = {
  title: "Everything Is Crab Guide: Best Builds, Genetics & Tips",
  description:
    "Your complete Everything Is Crab guide! Learn the best early builds, essential genetics, and strategies to survive bosses, Carcinisation & max Pressure.",
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
        "Everything Is Crab Guide: Builds, Evolutions, Pressure and Beginner Tips",
      description:
        "This Everything Is Crab guide explains how to survive your first clear, including Cheek Pouch capacity, Trunk damage and cooldown, Stinger poison unlocks, healing, biomes, genetics, non-combat routes, Carcinisation, Pressure, bosses, and what to do after your first clear.",
      image: [
        `${siteUrl}/images/everything-is-crab/everything-is-crab-guide-1-0-run-start.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-cheek-pouch-capacity-tooltip.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-best-builds-trunk-choice.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-carcinisation-food-rarity.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-final-boss-run-structure.webp`,
        `${siteUrl}/images/everything-is-crab/everything-is-crab-final-boss-cataclysm.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-08",
      dateModified: "2026-05-08",
      about: [
        {
          "@type": "VideoGame",
          name: "Everything Is Crab",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab guide",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab beginner guide",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab Cheek Pouch",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab Trunk",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab healing",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab biomes",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab genetics",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab Stinger",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab poison",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab Carcinisation",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab Selective Pressure",
        },
        {
          "@type": "Thing",
          name: "Everything Is Crab final boss",
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
          name: "How many food slots does Cheek Pouch have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cheek Pouch has a confirmed capacity of 2. It stores nearby food inside your cheeks, and stored food is consumed at the same rate while you keep moving.",
          },
        },
        {
          "@type": "Question",
          name: "What is Trunk's exact damage multiplier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trunk deals 1 to 1.4x damage based on Physical or Ability, using whichever value is lower. It also has a 1.5 second cooldown and gives +0.66 Feeding Distance.",
          },
        },
        {
          "@type": "Question",
          name: "What is the easiest first-clear build in Everything Is Crab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The easiest first-clear build uses Cheek Pouch or feeding distance, one main attack, movement speed, Shell, Plating or HP, and low Carcinisation until the run is stable.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I die before the first boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fix food and movement first. Take Cheek Pouch, feeding distance, speed, or a simple main attack before chasing rare evolutions.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I die to bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enter the fight with one attack that hits reliably, movement speed, HP or defense, and safer terrain. Avoid starting boss fights in water, snow, heat, or cramped areas when possible.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I die after taking crab points?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Take fewer Carcinisation points. Stay at 0 to 1 while learning, push 2 to 3 only when stable, and save 4 or more for strong runs or challenge goals.",
          },
        },
        {
          "@type": "Question",
          name: "Is Pacifist good for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pacifist is not a good first-clear route. It becomes useful after you understand food routing, movement, boss patterns, and non-combat scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scavenger good?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scavenger-style XP value becomes stronger when runs are longer, but you still need one attack or survival plan for bosses.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Stinger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stinger is tied to dealing over 200 poison damage in a single run. Build poison early and add enough survival for poison damage to stack.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after my first clear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check the Codex, read new genetics, push one Pressure level with a stable build, and pick one unlock target instead of testing everything at once.",
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
          title="Everything Is Crab Guide: Builds, Evolutions, Pressure and Beginner Tips"
          description="Learn how to survive Everything Is Crab, including Cheek Pouch capacity, Trunk damage and cooldown, healing, biomes, genetics, non-combat routes, poison, Carcinisation, Pressure, bosses, and what to do after your first clear."
          gameTitle="Everything Is Crab"
          gameHref="/everything-is-crab"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 8, 2026"
          toc={[
            {
              id: "known-numbers",
              label: "Known numbers",
            },
            {
              id: "minimum-first-clear-build",
              label: "First-clear build",
            },
            {
              id: "first-death-checklist",
              label: "Death checklist",
            },
            {
              id: "cheek-pouch",
              label: "Cheek Pouch",
            },
            {
              id: "trunk",
              label: "Trunk",
            },
            {
              id: "biomes",
              label: "Biomes",
            },
            {
              id: "genetics",
              label: "Genetics",
            },
            {
              id: "non-combat-routes",
              label: "Non-combat routes",
            },
            {
              id: "poison-and-stinger",
              label: "Poison and Stinger",
            },
            {
              id: "how-to-heal",
              label: "How to heal",
            },
            {
              id: "mutagen-rarity-and-rerolls",
              label: "Mutagen and rerolls",
            },
            {
              id: "carcinisation",
              label: "Carcinisation",
            },
            {
              id: "bosses-and-final-boss",
              label: "Bosses",
            },
            {
              id: "after-first-clear",
              label: "After first clear",
            },
            {
              id: "recommended-reading-order",
              label: "Reading order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/everything-is-crab/best-builds",
              label: "Everything Is Crab Best Builds",
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
              href: "/everything-is-crab/achievements-challenges-guide",
              label: "Everything Is Crab Achievements and Challenges Guide",
            },
          ]}
        >
          <EverythingIsCrabContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}