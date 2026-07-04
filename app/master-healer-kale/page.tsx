import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MasterHealerKaleContent from "@/data/master-healer-kale/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/master-healer-kale`;

const imageUrls = [
  `${siteUrl}/images/master-healer-kale/master-healer-kale-first-battle-healer-party.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-basic-heal-timing.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-goblin-leader-first-boss.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-temple-of-silence-meditate.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-demon-king-final-boss.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-nightmare-mode-unlock.webp`,
];

const toc = [
  {
    id: "master-healer-kale-guide",
    label: "Guide overview",
  },
  {
    id: "beginner-route",
    label: "Main route",
  },
  {
    id: "first-wall-goblin-leader",
    label: "Goblin Leader",
  },
  {
    id: "how-to-read-a-failed-run",
    label: "Failed run checks",
  },
  {
    id: "first-ruby-choice",
    label: "First Ruby",
  },
  {
    id: "when-to-farm-push-retreat",
    label: "Farm or push",
  },
  {
    id: "dungeon-effects",
    label: "Dungeon effects",
  },
  {
    id: "damage-route",
    label: "Damage route",
  },
  {
    id: "demon-king",
    label: "Demon King",
  },
  {
    id: "after-demon-king",
    label: "After Demon King",
  },
  {
    id: "which-guide-next",
    label: "Which guide next",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/master-healer-kale/achievements-guide",
    label: "Master Healer Kale Achievements Guide",
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
  title: "Master Healer Kale Guide: Beginner Route & Tips",
  description:
    "Start Master Healer Kale with Heal timing, Goblin Leader, Ruby choices, dungeon effects, Demon King, Nightmare Mode, and the right next guide.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Master Healer Kale Guide: Beginner Route, Ruby Choices, Demon King and Nightmare Mode",
    description:
      "Use this Master Healer Kale guide hub to learn the main route, early Heal timing, Goblin Leader wall, Ruby spell choices, dungeon-effect checks, Demon King setup, Nightmare Mode unlocks, and which focused guide to read next.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "Master Healer Kale opening scene with Kale introducing himself and the first party setup.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Healer Kale Guide",
    description:
      "Follow the main Master Healer Kale route with Heal timing, Ruby choices, dungeon effects, Demon King, Nightmare Mode, and next-guide links.",
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
        "Master Healer Kale with Useless Party Guide: Beginner Route, Goblin Leader, Ruby Choices, Demon King and Nightmare Mode",
      description:
        "A practical Master Healer Kale with Useless Party guide hub for players who are stuck in the main route. The guide explains how to read failed runs, when to heal Grandpa Bagel, how to handle Goblin Leader, how to decide between Party Heal, Meditate and Protection for the first Ruby choices, when to farm or retreat, how dungeon effects change the route, why Demon King is mostly a setup check, and when to move into Nightmare Mode, Ruby refarming, Training Facility, Research Facility and 100% cleanup.",
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
          name: "Master Healer Kale guide",
        },
        {
          "@type": "Thing",
          name: "Kale",
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
          name: "Goblin Leader",
        },
        {
          "@type": "Thing",
          name: "Temple of Silence",
        },
        {
          "@type": "Thing",
          name: "Demon King",
        },
        {
          "@type": "Thing",
          name: "Nightmare Mode",
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
          name: "Is Master Healer Kale a boss-fight game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not really. Bosses matter, but the main challenge is configuration. If a run fails, the usual fix is to adjust the Tavern setup, spell order, mana plan, or damage route before trying again.",
          },
        },
        {
          "@type": "Question",
          name: "Should I heal Grandpa Bagel immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Wait until Grandpa Bagel has lost enough health to make the first Heal worthwhile. Early overhealing wastes mana and can make the boss room fail later.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I stuck at Goblin Leader?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most Goblin Leader walls happen because Grandpa Bagel dies too fast or Kale runs out of mana before the party finishes enemies. Buy tank survival, better Heal value, or more mana before chasing bigger damage.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend my first Ruby on?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spend the first Ruby based on the wall. Party Heal helps when multiple allies take damage, Meditate helps when Kale runs out of mana, and Protection helps when one ally needs a shield for a specific danger window.",
          },
        },
        {
          "@type": "Question",
          name: "When should I farm instead of push?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farm when the next dungeon is barely failing and one upgrade would likely fix it. Push when the tank survives, Kale has enough mana, the backline is safe, and damage is fast enough.",
          },
        },
        {
          "@type": "Question",
          name: "Is Madeleine better than Klepon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Madeleine becomes the preferred mid-game damage route when the magic board is already ahead. Klepon is still useful for levels, attack unlocks, utility pressure, and cleanup, but damage upgrades should not be split evenly forever.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Reset Skill Tree?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, use Reset Skill Tree when the build has clearly gone in the wrong direction or when preparing for achievements and 100% cleanup. The v1.5 right-click reset change makes fixing a bad branch much easier.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Nightmare Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Beat Demon King, then buy the Nightmare Mode node in the Tavern tree. Nightmare Mode lets you clear dungeons again for Ruby and leads into Training Facility and Research Facility progress.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after Demon King?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start Nightmare planning. Refarm Ruby, upgrade party stats through Training Facility, improve Kale's spells through Research Facility, then work toward Nightmare Demon King and 100% Tavern cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Which guide should I read after this page?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Achievements Guide for 100% completion, the Best Skills and Skill Tree Guide for Tavern decisions, and the Nightmare Mode Endgame Guide after the Demon King clear.",
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
          title="Start Master Healer Kale Without Wasting Your First Runs"
          description="Use this route hub to fix failed runs, choose the right Ruby spell, read dungeon effects, beat Demon King, and move into Nightmare cleanup."
          gameTitle="Master Healer Kale with Useless Party"
          gameHref="/master-healer-kale"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MasterHealerKaleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}