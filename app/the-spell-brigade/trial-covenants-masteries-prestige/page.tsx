import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TrialCovenantsContent from "@/data/the-spell-brigade/trial-covenants-masteries-prestige.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/trial-covenants-masteries-prestige`;

export const metadata: Metadata = {
  title: "The Spell Brigade Trial Covenants, Masteries & Ascension Guide",
  description:
    "Learn The Spell Brigade Trial Covenants, Devotion, Masteries, Enchantments, Banish, rerolls, Ascension farming, and progression routes for 1.0.",
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
          name: "The Spell Brigade Guide",
          item: `${siteUrl}/the-spell-brigade`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Trial Covenants, Masteries & Ascension",
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
      headline: "The Spell Brigade Trial Covenants, Masteries & Ascension Guide",
      description:
        "Learn The Spell Brigade Trial Covenants, Devotion, Masteries, Enchantments, Banish, rerolls, Ascension farming, and progression routes for 1.0.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-progression-trial-covenants-devotion.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-builds-solar-pulse-aura-setup.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-progression-loop-scaling.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-progression-rerolls-cost-hp.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-progression-banish-unlocked.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-progression-luck-reroll-scroll.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-objectives-augments.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-level-15-rng-pool.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-progression-ascension-points.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-achievements-long-run-stats.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-10",
      dateModified: "2026-05-10",
      about: [
        {
          "@type": "VideoGame",
          name: "The Spell Brigade",
        },
        {
          "@type": "Thing",
          name: "Trial Covenants",
        },
        {
          "@type": "Thing",
          name: "Masteries",
        },
        {
          "@type": "Thing",
          name: "Enchantments",
        },
        {
          "@type": "Thing",
          name: "Ascension",
        },
        {
          "@type": "Thing",
          name: "Progression Systems",
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
          name: "What do Trial Covenants do in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trial Covenants add difficult run modifiers in exchange for Devotion and progression value. Each one changes the run differently, such as reducing Mana drops, disabling Enchantments, reducing upgrade choices, reducing healing, or adding extra enemy waves.",
          },
        },
        {
          "@type": "Question",
          name: "What is Devotion in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Devotion is tied to Trial Covenant difficulty and long-term progression. Higher Devotion is useful when you are intentionally farming ascension-style progress, but it is not worth dying early for.",
          },
        },
        {
          "@type": "Question",
          name: "Do Trial Covenants stack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some Trial Covenants become more severe with stacks. Add stacks slowly and adjust your build around the new pressure instead of treating every stack as the same run.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Masteries and Enchantments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enchantments are broad account upgrades. Masteries are build-defining passive focuses. Treat Enchantments as baseline power and Masteries as the system that tells your run what it wants to become.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Covenant for ascension farming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Abstinence or one-spell routing is the easiest route to recommend when the chosen spell has strong AoE coverage. Solar Pulse is the safest starting example.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use rerolls aggressively?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use rerolls when the current choices do nothing for the build or when you need a specific infusion. Do not reroll every imperfect offer.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Banish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Banish when an offer repeatedly appears but does not help your route. It is especially strong in one-spell, Denial, and achievement-focused builds.",
          },
        },
        {
          "@type": "Question",
          name: "Does Luck help progression?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, especially in long runs. Luck helps you see better rarity offers, but it should not replace immediate survival, damage, or movement when the run is unstable.",
          },
        },
        {
          "@type": "Question",
          name: "Why does pickup range matter for ascension farming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Long runs create more Mana than you can collect automatically. If Mana stays outside pickup range, your level flow slows down and the build stops scaling efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Is Prestige the same as Ascension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Players may use prestige loosely, but the current in-game progression language is better described through wizard rank, Devotion, Covenants, Masteries, outfits, and Ascension.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after Trial Covenants and Masteries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Read the Best Builds Guide for build routes, the Gold Farm Guide for Bounty and gold progression, or the Achievements Guide if you are using Covenants for specific unlocks.",
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
          title="The Spell Brigade Trial Covenants, Masteries, Banish and Ascension Guide"
          description="Learn how Trial Covenants, Devotion, Masteries, Enchantments, Banish, rerolls, and Ascension work in The Spell Brigade 1.0, with progression routes and build planning tips."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "systems-overview",
              label: "Systems overview",
            },
            {
              id: "masteries-vs-enchantments",
              label: "Masteries vs Enchantments",
            },
            {
              id: "trial-covenants",
              label: "Trial Covenants",
            },
            {
              id: "devotion-and-stacks",
              label: "Devotion & stacks",
            },
            {
              id: "one-spell-covenant",
              label: "One-spell routes",
            },
            {
              id: "masteries",
              label: "Best Masteries",
            },
            {
              id: "mastery-spell-size",
              label: "Spell Size Mastery",
            },
            {
              id: "reroll-banish",
              label: "Reroll & Banish",
            },
            {
              id: "luck-and-rarity",
              label: "Luck & rarity",
            },
            {
              id: "objectives-and-augments",
              label: "Objectives & augments",
            },
            {
              id: "level-pacing",
              label: "Level pacing",
            },
            {
              id: "ascension-farming",
              label: "Ascension farming",
            },
            {
              id: "progression-builds",
              label: "Progression builds",
            },
            {
              id: "run-plan",
              label: "Run plan",
            },
            {
              id: "final-stats",
              label: "Final stats",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-progression-order",
              label: "Progression order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-spell-brigade",
              label: "The Spell Brigade Guide",
            },
            {
              href: "/the-spell-brigade/best-builds",
              label: "The Spell Brigade Best Builds",
            },
            {
              href: "/the-spell-brigade/best-spells-elements",
              label: "The Spell Brigade Best Spells & Elements",
            },
            {
              href: "/the-spell-brigade/solo-guide",
              label: "The Spell Brigade Solo Guide",
            },
            {
              href: "/the-spell-brigade/gold-farm",
              label: "The Spell Brigade Gold Farm Guide",
            },
            {
              href: "/the-spell-brigade/wizard-unlocks",
              label: "The Spell Brigade Wizard Unlock Guide",
            },
            {
              href: "/the-spell-brigade/achievements-guide",
              label: "The Spell Brigade Achievements Guide",
            },
          ]}
        >
          <TrialCovenantsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}