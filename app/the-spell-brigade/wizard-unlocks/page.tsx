import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WizardUnlocksContent from "@/data/the-spell-brigade/wizard-unlocks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/wizard-unlocks`;

export const metadata: Metadata = {
  title: "The Spell Brigade Wizards: Traits, Spells & Best Unlocks",
  description:
    "Find the best wizards in The Spell Brigade 1.0! Discover character traits, signature spells, unlock guides, Wizard Rank, Ascension, and a full tier list.",
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
          name: "Wizard Unlocks",
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
      headline: "The Spell Brigade Wizard Unlocks: Traits, Spells & Best Wizards",
      description:
        "Find the best wizards in The Spell Brigade 1.0, including traits, signature spells, tier list, unlock planning, Wizard Rank, Ascension, Knelly, Pipwick, Star Mage, Sun Mage, and Wizard King.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-15-wizards-overview.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-star-mage-falling-stars.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-enchantments-gold.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-pipwick-impish-havoc.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-knelly-bell-march.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-wizard-unlocks-contracts-wizard.webp`,
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
          name: "Wizard Unlocks",
        },
        {
          "@type": "Thing",
          name: "Wizard Traits",
        },
        {
          "@type": "Thing",
          name: "Signature Spells",
        },
        {
          "@type": "Thing",
          name: "Ascension",
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
          name: "What is the best wizard to unlock first in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sun Mage is the safest early unlock for most players because Solar Pulse works well for solo, farming, and beginner-friendly AoE scaling.",
          },
        },
        {
          "@type": "Question",
          name: "How do you unlock wizards in The Spell Brigade 1.0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wizard unlocks are tracked through wizard, quest, milestone, map, level-up, spell discovery, Wizard Rank, and Ascension progression systems. Gold is mainly used for Enchantments, Bounty, permanent upgrades, and meta-progression.",
          },
        },
        {
          "@type": "Question",
          name: "How many wizards are in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 15 wizards in The Spell Brigade 1.0.",
          },
        },
        {
          "@type": "Question",
          name: "Which wizard is best for solo or farming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sun Mage is the easiest recommendation for both solo and farming because Solar Pulse gives safe AoE, strong scaling, and a simple build route. Star Mage can have a higher damage ceiling, but Sun Mage is easier to reproduce.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best wizard for bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Star Mage is strong for high-ceiling Falling Stars damage. Reginald and Moon Mage are good alternatives when their multi-hit spells can use Acid, Flux, or Corrosion.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best co-op wizard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maggie, Aldric, Campanelli, and Knelly are strong co-op or utility picks because they bring healing, support, revive value, or zone utility.",
          },
        },
        {
          "@type": "Question",
          name: "What does Ascension do in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wizard Rank can lead to ascension progression. Ascension Skins may change a wizard's starting spell, so they can affect gameplay and not just appearance.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wizard King just a Magic Missile wizard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wizard King's visible card shows Increased Critical Chance and Magic Missile, making him a crit-focused projectile wizard. Treat any extra mechanics as advanced details only if confirmed in your game UI.",
          },
        },
        {
          "@type": "Question",
          name: "Is Knelly the bell wizard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The in-game wizard card shows Knelly as the bell wizard, and her signature spell is Bell March.",
          },
        },
        {
          "@type": "Question",
          name: "Is Pipwick worth unlocking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you want a summoner build. Pipwick's Impish Havoc gives the clearest minion route, while his passive adds random elemental infusion and a critical damage tradeoff.",
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
          title="The Spell Brigade Wizard Unlocks: Best Wizards, Traits and Signature Spells"
          description="Find the best wizards in The Spell Brigade 1.0, including the wizard tier list, passive traits, signature spells, unlock planning, Wizard Rank, Ascension, Knelly, Pipwick, Star Mage, Sun Mage, and Wizard King."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "wizard-tier-list",
              label: "Wizard tier list",
            },
            {
              id: "how-wizard-unlocks-work",
              label: "How unlocks work",
            },
            {
              id: "all-wizards",
              label: "All wizards",
            },
            {
              id: "best-unlock-order",
              label: "Unlock order",
            },
            {
              id: "best-wizard-by-goal",
              label: "Wizard by goal",
            },
            {
              id: "gold-and-enchantments",
              label: "Gold & Enchantments",
            },
            {
              id: "ascension-system",
              label: "Ascension",
            },
            {
              id: "signature-spell-unlocks",
              label: "Signature spells",
            },
            {
              id: "specialist-examples",
              label: "Specialist wizards",
            },
            {
              id: "quests-and-unlocks",
              label: "Quests & unlocks",
            },
            {
              id: "contracts",
              label: "Contracts",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-unlock-path",
              label: "Unlock path",
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
              href: "/the-spell-brigade/gold-farm",
              label: "The Spell Brigade Gold Farm Guide",
            },
            {
              href: "/the-spell-brigade/solo-guide",
              label: "The Spell Brigade Solo Guide",
            },
            {
              href: "/the-spell-brigade/achievements-guide",
              label: "The Spell Brigade Achievements Guide",
            },
            {
              href: "/the-spell-brigade/trial-covenants-masteries-prestige",
              label: "The Spell Brigade Trial Covenants Guide",
            },
          ]}
        >
          <WizardUnlocksContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}