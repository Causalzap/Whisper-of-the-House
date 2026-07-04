import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MasterHealerKaleBestSkillsContent from "@/data/master-healer-kale/best-skills-skill-tree.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/master-healer-kale/best-skills-skill-tree`;

const imageUrls = [
  `${siteUrl}/images/master-healer-kale/master-healer-kale-basic-heal-timing.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-grandpa-bagel-armor-upgrade.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-party-heal-spell-node.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-protection-shield-spell.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-damage-board-skill-tree-50.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-fire-spread-fireball-aoe.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-arcane-advantage-full-health.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-multi-shot-arcane-magic.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-mind-break-dark-magic.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-reset-skill-tree-node.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-data-bank-skill-tree-percentage.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-angel-form-skill-tree.webp`,
];

const toc = [
  {
    id: "master-healer-kale-best-skills-guide",
    label: "Best skills overview",
  },
  {
    id: "early-upgrade-priority",
    label: "Early upgrades",
  },
  {
    id: "grandpa-bagel-tank-route",
    label: "Grandpa Bagel tank route",
  },
  {
    id: "first-ruby-choice",
    label: "First Ruby choice",
  },
  {
    id: "skill-tree-priority-by-phase",
    label: "Skill tree priority",
  },
  {
    id: "madeleine-damage-route",
    label: "Madeleine damage route",
  },
  {
    id: "madeleine-vs-klepon",
    label: "Madeleine vs Klepon",
  },
  {
    id: "dark-holy-and-support-scaling",
    label: "Dark, Holy and support scaling",
  },
  {
    id: "protection-and-shield-support",
    label: "Protection and shields",
  },
  {
    id: "haste-and-speed",
    label: "Haste and speed",
  },
  {
    id: "reset-point-and-data-bank",
    label: "Reset Point and Data Bank",
  },
  {
    id: "angel-form",
    label: "Angel Form",
  },
  {
    id: "nightmare-endgame-nodes",
    label: "Nightmare nodes",
  },
  {
    id: "what-not-to-buy-early",
    label: "What not to buy early",
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
    href: "/master-healer-kale/achievements-guide",
    label: "Master Healer Kale Achievements Guide",
  },
  {
    href: "/master-healer-kale/nightmare-mode-endgame",
    label: "Nightmare Mode Endgame Guide",
  },
];

export const metadata: Metadata = {
  title: "Master Healer Kale Best Skills & Skill Tree Guide",
  description:
    "Choose Master Healer Kale best skills with Heal, Party Heal, Meditate, Protection, Reset Point, Madeleine vs Klepon, Angel Form, and Tavern priorities.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Master Healer Kale Best Skills and Skill Tree Guide: Party Heal, Meditate, Protection and Madeleine Builds",
    description:
      "Choose the best Master Healer Kale skills with early Heal timing, Grandpa Bagel tank upgrades, first Ruby choices, Madeleine magic damage, Klepon investment, Reset Point, Data Bank, Haste, Protection, Angel Form, and Nightmare endgame node planning.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[4],
        width: 1600,
        height: 900,
        alt:
          "Master Healer Kale Tavern skill tree damage board showing mid-game damage routes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Healer Kale Best Skills Guide",
    description:
      "Pick the right Tavern skills, Ruby spells, Madeleine damage route, Reset Point, Data Bank, Protection, Haste, and Angel Form.",
    images: [imageUrls[4]],
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
          name: "Best Skills and Skill Tree Guide",
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
        "Master Healer Kale Best Skills and Skill Tree Guide: Heal, Party Heal, Meditate, Protection, Madeleine, Reset Point and Angel Form",
      description:
        "A Master Healer Kale with Useless Party best skills and skill tree guide for players deciding what to buy in the Tavern. The guide covers early Heal timing, Grandpa Bagel tank upgrades, Party Heal, Meditate, Protection, Madeleine versus Klepon, mid-game damage board decisions, Fireball, Arcane Magic, Dark Magic, Holy support, Haste, shield support, Reset Point, Data Bank, Angel Form, and when to delay Nightmare endgame nodes.",
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
          name: "Master Healer Kale best skills",
        },
        {
          "@type": "Thing",
          name: "Master Healer Kale skill tree",
        },
        {
          "@type": "Thing",
          name: "Tavern skill tree",
        },
        {
          "@type": "Thing",
          name: "Heal",
        },
        {
          "@type": "Thing",
          name: "Party Heal",
        },
        {
          "@type": "Thing",
          name: "Meditate",
        },
        {
          "@type": "Thing",
          name: "Protection",
        },
        {
          "@type": "Thing",
          name: "Grandpa Bagel",
        },
        {
          "@type": "Thing",
          name: "Madeleine",
        },
        {
          "@type": "Thing",
          name: "Klepon",
        },
        {
          "@type": "Thing",
          name: "Fireball",
        },
        {
          "@type": "Thing",
          name: "Arcane Magic",
        },
        {
          "@type": "Thing",
          name: "Dark Magic",
        },
        {
          "@type": "Thing",
          name: "Holy Magic",
        },
        {
          "@type": "Thing",
          name: "Haste",
        },
        {
          "@type": "Thing",
          name: "Angel Form",
        },
        {
          "@type": "Thing",
          name: "Reset Point",
        },
        {
          "@type": "Thing",
          name: "Data Bank",
        },
        {
          "@type": "Thing",
          name: "Phoenix Staff",
        },
        {
          "@type": "Thing",
          name: "Phoenix Armor",
        },
        {
          "@type": "Thing",
          name: "God Armor",
        },
        {
          "@type": "Thing",
          name: "Arcana Armor",
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
          name: "What should I buy first in Master Healer Kale?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy the upgrade that fixes the last failed run. If Grandpa Bagel dies first, buy tank survival. If Kale runs out of mana, buy mana or Meditate support. If multiple allies take damage, move toward Party Heal or Protection.",
          },
        },
        {
          "@type": "Question",
          name: "Is Party Heal worth buying early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Party Heal is worth buying when damage starts landing on more than one ally. If only Grandpa Bagel is taking damage, it is usually better to improve the tank or basic healing first.",
          },
        },
        {
          "@type": "Question",
          name: "When should I buy Meditate?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy Meditate when the party can survive the damage but Kale cannot keep casting long enough to finish the fight. It becomes more important in mana-pressure dungeons and longer boss attempts.",
          },
        },
        {
          "@type": "Question",
          name: "Is Protection worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Protection is worth it when one ally needs a shield before a specific dangerous window or when backline deaths are ruining otherwise stable fights. It becomes stronger with shield-support upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Madeleine vs Klepon: which damage dealer should I invest in?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the damage board to decide. Madeleine is the preferred mid-game carry when her magic lines are already leading, while Klepon is still worth upgrading for level 100, attack unlocks, utility pressure, and cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Is Haste worth buying?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Haste is worth buying when the party already survives long enough for attack speed to matter. It is weaker if the run is still failing because the tank dies or Kale cannot afford the spell cycle.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Reset Skill Tree?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Reset Skill Tree when your upgrades are solving the wrong problem or when you need to reorganize for achievements and 100% cleanup. The v1.5 right-click reset change makes single-branch fixes much easier.",
          },
        },
        {
          "@type": "Question",
          name: "What does Data Bank do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Data Bank displays the Tavern skill tree completion percentage. It is most useful when you start working toward 100% Tavern cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "When should I buy Angel Form?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy Angel Form when the build already has enough mana, useful spells, and fight length to make the transformation window matter. It is not a good early panic button.",
          },
        },
        {
          "@type": "Question",
          name: "When should I stop buying survival upgrades and start buying damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Switch to damage when Grandpa Bagel survives the opening pressure, Kale is not running out of mana too early, and Madeleine or Klepon is not getting picked off. If the party is alive but the dungeon still takes too long, the wall is clear speed.",
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
          title="Master Healer Kale Best Skills and Skill Tree Guide"
          description="Choose the right Tavern upgrades, Ruby spells, Madeleine damage route, Reset Point, Data Bank, Protection, Haste, and Angel Form."
          gameTitle="Master Healer Kale with Useless Party"
          gameHref="/master-healer-kale"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MasterHealerKaleBestSkillsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}