import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MasterHealerKaleAchievementsContent from "@/data/master-healer-kale/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/master-healer-kale/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/master-healer-kale/master-healer-kale-100-percent-tavern-alarm-clock.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-reset-skill-tree-node.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-winterfall-peak-60-mana.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-underwater-abyss-100-seconds.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-gravity-arena-disease-debuff.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-magma-core-fire-dragon-shield.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-raise-revive-spell.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-angel-form-skill-tree.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-data-bank-skill-tree-percentage.webp`,
];

const toc = [
  {
    id: "master-healer-kale-achievements-guide",
    label: "Achievements overview",
  },
  {
    id: "achievement-roadmap",
    label: "100% roadmap",
  },
  {
    id: "hardest-achievements",
    label: "Hardest achievements",
  },
  {
    id: "easy-achievements",
    label: "Easy achievements",
  },
  {
    id: "early-mistake-achievements",
    label: "Early mistake achievements",
  },
  {
    id: "level-stat-and-attack-achievements",
    label: "Level and stat goals",
  },
  {
    id: "winterfall-peak",
    label: "Winterfall Peak",
  },
  {
    id: "underwater-abyss",
    label: "Underwater Abyss",
  },
  {
    id: "gravity-arena",
    label: "Gravity Arena",
  },
  {
    id: "magma-core",
    label: "Magma Core",
  },
  {
    id: "no-ally-loss-achievements",
    label: "No ally loss clears",
  },
  {
    id: "burst-heal-raise-time-warp",
    label: "Burst Heal, Raise, Time Warp",
  },
  {
    id: "machine-gun-punch",
    label: "Machine Gun Punch",
  },
  {
    id: "facility-and-gold-achievements",
    label: "Facilities and gold",
  },
  {
    id: "nightmare-achievements",
    label: "Nightmare achievements",
  },
  {
    id: "tavern-100-percent",
    label: "100% Tavern",
  },
  {
    id: "final-cleanup-order",
    label: "Final cleanup order",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/master-healer-kale",
    label: "Master Healer Kale Guide Hub",
  },
  {
    href: "/master-healer-kale/best-skills-skill-tree",
    label: "Best Skills and Skill Tree Guide",
  },
  {
    href: "/master-healer-kale/nightmare-mode-endgame",
    label: "Nightmare Mode Endgame Guide",
  },
];

export const metadata: Metadata = {
  title: "Master Healer Kale Achievements Guide: 100% Route",
  description:
    "Clear all 38 Master Healer Kale achievements with rates, Gotta Go Fast, Machine Gun Punch, I Am The Best, Nightmare Demon King, and 100% Tavern.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Master Healer Kale Achievements Guide: 38 Achievements, 100% Route and Nightmare Cleanup",
    description:
      "Clear all 38 Master Healer Kale achievements with completion rates, route order, dungeon conditions, Raise, Angel Form, Gotta Go Fast, Machine Gun Punch, I Am The Best, Nightmare Demon King, and 100% Tavern cleanup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "Master Healer Kale Tavern skill tree at 100 percent completion with the Alarm Clock node selected.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Healer Kale Achievements Guide",
    description:
      "Clear all 38 achievements with completion rates, dungeon conditions, spell chains, Nightmare bosses, and 100% Tavern cleanup.",
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
          name: "Master Healer Kale Guide",
          item: `${siteUrl}/master-healer-kale`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Master Healer Kale Achievements Guide",
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
        "Master Healer Kale Achievements Guide: 38 Achievements, Completion Rates, 100% Route and Nightmare Cleanup",
      description:
        "A complete Master Healer Kale with Useless Party achievements guide for all 38 achievements. The guide groups the route by story achievements, early mistake achievements, resource and level goals, dungeon-condition achievements, spell achievements, Training Facility, Research Facility, Nightmare bosses, Nightmare Demon King, and 100% Tavern skill tree cleanup. It covers low-completion achievements such as Why So Serious, I Am The Best, Machine Gun Punch, Gotta Go Fast, It's Fire Burning, and Boom, You're Looking For This.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-04",
      dateModified: "2026-07-04",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Master Healer Kale with Useless Party",
        },
        {
          "@type": "Thing",
          name: "Master Healer Kale achievements",
        },
        {
          "@type": "Thing",
          name: "100% achievements",
        },
        {
          "@type": "Thing",
          name: "That Goes Fast",
        },
        {
          "@type": "Thing",
          name: "First Step",
        },
        {
          "@type": "Thing",
          name: "Gotta Go Fast",
        },
        {
          "@type": "Thing",
          name: "It's Fire Burning",
        },
        {
          "@type": "Thing",
          name: "We Don't Do That Here",
        },
        {
          "@type": "Thing",
          name: "Machine Gun Punch",
        },
        {
          "@type": "Thing",
          name: "I Can Do This All Day",
        },
        {
          "@type": "Thing",
          name: "I Am The Best",
        },
        {
          "@type": "Thing",
          name: "Why So Serious?",
        },
        {
          "@type": "Thing",
          name: "Winterfall Peak",
        },
        {
          "@type": "Thing",
          name: "Underwater Abyss",
        },
        {
          "@type": "Thing",
          name: "Gravity Arena",
        },
        {
          "@type": "Thing",
          name: "Magma Core",
        },
        {
          "@type": "Thing",
          name: "Raise",
        },
        {
          "@type": "Thing",
          name: "Angel Form",
        },
        {
          "@type": "Thing",
          name: "Training Facility",
        },
        {
          "@type": "Thing",
          name: "Research Facility",
        },
        {
          "@type": "Thing",
          name: "Nightmare Mode",
        },
        {
          "@type": "Thing",
          name: "Data Bank",
        },
        {
          "@type": "Thing",
          name: "Reset Point",
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
          name: "How many achievements are in Master Healer Kale?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 38 achievements in the full Master Healer Kale with Useless Party achievement list.",
          },
        },
        {
          "@type": "Question",
          name: "What is the rarest achievement in Master Healer Kale?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Why So Serious?, which requires defeating the Demon King in Nightmare Mode, is the rarest achievement at 5.5%.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best order for 100% achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The cleanest order is story and resource achievements first, then level and attack unlocks, then dungeon-condition achievements, then spell and facility achievements, then Nightmare bosses and 100% Tavern cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase dungeon achievements as soon as they appear?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Wait until the build solves the dungeon effect. Underwater Abyss needs speed, Magma Core needs Shield timing, Gravity Arena needs Esuna, and Winterfall Peak needs mana recovery.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Gotta Go Fast?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clear Underwater Abyss in 50 seconds or less. The dungeon gives 100 seconds before the party runs out of breath, but the achievement requires a much faster clear.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get It's Fire Burning?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In Magma Core, use Shield on all of Kale's party while holding Fire Dragon's ability. Prepare Protection, mana, and party survival before trying it.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get We Don't Do That Here?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bring Esuna into Gravity Arena and remove the minus speed debuff 3 times.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Machine Gun Punch?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cast 10 spells in a row while Angel Form is active. Prepare mana, cooldowns, and spell order before starting the chain.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get I Can Do This All Day?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cast Raise 2 times in a battle. It is best done in a long controlled fight because the shown Raise tooltip has a 60-second cooldown.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Reset Skill Tree?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Reset Skill Tree when the build is solving the wrong problem or when reorganizing for achievements and 100% Tavern cleanup. It also gives the Another Path achievement.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do before Nightmare Demon King?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farm Nightmare Ruby, upgrade Training Facility and Research Facility, secure Grandpa Bagel survival, commit to a damage route, and bring emergency tools like Raise, Protection, Party Heal, Meditate, and Angel Form.",
          },
        },
        {
          "@type": "Question",
          name: "Should I finish 100% Tavern before Nightmare Demon King?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. It is cleaner to clear Nightmare progression first, then finish 100% Tavern nodes as final cleanup.",
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
          title="Master Healer Kale Achievements Guide and 100% Route"
          description="Clear all 38 achievements with completion rates, dungeon conditions, spell chains, Nightmare bosses, and 100% Tavern cleanup."
          gameTitle="Master Healer Kale with Useless Party"
          gameHref="/master-healer-kale"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MasterHealerKaleAchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}