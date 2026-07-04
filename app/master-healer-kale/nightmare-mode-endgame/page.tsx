import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MasterHealerKaleNightmareContent from "@/data/master-healer-kale/nightmare-mode-endgame.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/master-healer-kale/nightmare-mode-endgame`;

const imageUrls = [
  `${siteUrl}/images/master-healer-kale/master-healer-kale-nightmare-mode-unlock.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-demon-king-final-boss.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-nightmare-endgame-upgrades.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-phoenix-staff-madeleine-damage.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-god-armor-grandpa-bagel-health.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-angel-form-skill-tree.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-magma-core-fire-dragon-shield.webp`,
  `${siteUrl}/images/master-healer-kale/master-healer-kale-100-percent-tavern-alarm-clock.webp`,
];

const toc = [
  {
    id: "master-healer-kale-nightmare-mode-guide",
    label: "Nightmare overview",
  },
  {
    id: "after-demon-king",
    label: "After Demon King",
  },
  {
    id: "endgame-route",
    label: "Endgame route",
  },
  {
    id: "nightmare-mode-cost-and-ruby",
    label: "Cost and Ruby",
  },
  {
    id: "training-and-research-facility",
    label: "Facilities",
  },
  {
    id: "major-endgame-nodes",
    label: "Major Ruby nodes",
  },
  {
    id: "what-to-buy-first",
    label: "What to buy first",
  },
  {
    id: "angel-form-endgame",
    label: "Angel Form",
  },
  {
    id: "nightmare-boss-achievements",
    label: "Nightmare bosses",
  },
  {
    id: "hard-dungeons-in-nightmare",
    label: "Hard dungeons",
  },
  {
    id: "hundred-percent-tavern-endgame",
    label: "100% Tavern",
  },
  {
    id: "common-endgame-mistakes",
    label: "Endgame mistakes",
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
    href: "/master-healer-kale/best-skills-skill-tree",
    label: "Best Skills and Skill Tree Guide",
  },
];

export const metadata: Metadata = {
  title: "Master Healer Kale Nightmare Mode Endgame Guide",
  description:
    "Prepare Master Healer Kale Nightmare Mode with Ruby refarming, Training Facility, Research Facility, Phoenix Staff, God Armor, and Demon King.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Master Healer Kale Nightmare Mode Endgame Guide: Ruby Refarming, Facilities and Demon King",
    description:
      "Prepare Master Healer Kale Nightmare Mode with Ruby refarming, Training Facility, Research Facility, Phoenix Staff, God Armor, Angel Form, Nightmare bosses, 100% Tavern cleanup, and Nightmare Demon King.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "Master Healer Kale Nightmare Mode node showing that Nightmare dungeons let the player collect Ruby again.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Healer Kale Nightmare Mode Guide",
    description:
      "Build for Nightmare Mode with Ruby refarming, facilities, major Ruby nodes, Angel Form, bosses, and 100% Tavern cleanup.",
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
          name: "Nightmare Mode Endgame Guide",
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
        "Master Healer Kale Nightmare Mode Endgame Guide: Ruby Refarming, Training Facility, Research Facility, Major Ruby Nodes and Nightmare Demon King",
      description:
        "A Master Healer Kale with Useless Party Nightmare Mode endgame guide for players who have cleared the normal Demon King and need the post-game route. The guide covers Nightmare Mode unlocks, the 43.2K gold and 10.0K skill point cost, Ruby refarming, safe Nightmare dungeon farming, Training Facility, Research Facility, Phoenix Staff, Phoenix Armor, God Armor, Arcana Armor, Angel Form timing, Nightmare boss achievements, hard dungeon setup checks, 100% Tavern cleanup, and when to attempt Nightmare Demon King.",
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
          name: "Master Healer Kale Nightmare Mode",
        },
        {
          "@type": "Thing",
          name: "Nightmare Mode",
        },
        {
          "@type": "Thing",
          name: "Demon King",
        },
        {
          "@type": "Thing",
          name: "Nightmare Demon King",
        },
        {
          "@type": "Thing",
          name: "Ruby refarming",
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
          name: "Angel Form",
        },
        {
          "@type": "Thing",
          name: "Raise",
        },
        {
          "@type": "Thing",
          name: "Protection",
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
          name: "Machine Gun Punch",
        },
        {
          "@type": "Thing",
          name: "Nice Try",
        },
        {
          "@type": "Thing",
          name: "Boom, You're Looking For This?",
        },
        {
          "@type": "Thing",
          name: "Why So Serious?",
        },
        {
          "@type": "Thing",
          name: "I Am The Best",
        },
        {
          "@type": "Thing",
          name: "Magma Core",
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
          name: "How do I unlock Nightmare Mode in Master Healer Kale?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Beat the normal Demon King, then buy the Nightmare Mode node in the Tavern tree. The node unlocks Nightmare dungeons and lets you collect Ruby again from completed dungeons.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Nightmare Mode cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "On the shown Nightmare Mode node, the cost is 43.2K gold and 10.0K skill points.",
          },
        },
        {
          "@type": "Question",
          name: "Is Nightmare Mode just harder bosses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The bigger change is the endgame economy. Nightmare Mode lets you refarm Ruby, then use that Ruby with Training Facility, Research Facility, and major endgame nodes.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first after unlocking Nightmare Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clear safer Nightmare dungeons first. Use them to collect Ruby again, then buy the major upgrade that fixes your current wall.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush Nightmare Demon King?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Normal Demon King clear is 21.1%, but Nightmare Demon King is only 5.5%. Treat Nightmare Demon King as the final check after Ruby refarming, facilities, and major endgame nodes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first Nightmare Ruby node?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It depends on the failure. God Armor helps if Grandpa Bagel dies, Phoenix Armor helps if Madeleine dies, Arcana Armor helps if Klepon dies, and Phoenix Staff is excellent if Madeleine already carries damage.",
          },
        },
        {
          "@type": "Question",
          name: "Is Phoenix Staff worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if Madeleine is already the main damage route. Phoenix Staff gives Madeleine damage x2, which is much stronger when the magic route is already carrying.",
          },
        },
        {
          "@type": "Question",
          name: "When should I buy God Armor?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy God Armor when Grandpa Bagel is still the reason Nightmare runs collapse. Grandpa Bagel maximum health x3 gives the whole party more time to fight.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Raise for Nightmare Demon King?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Raise is useful insurance because it revives a KO'd ally and gives the run one emergency recovery point. It should not be the whole strategy, but it is useful if one ally drops during a bad window.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Angel Form in Nightmare?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Angel Form when the party is stable, mana is ready, and several useful spells are ready or close to ready. In Nightmare, it works best as a prepared spell window, not a panic button.",
          },
        },
        {
          "@type": "Question",
          name: "When should I do 100% Tavern cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save 100% Tavern cleanup for late endgame, after Nightmare Ruby farming and facility upgrades make resource farming comfortable.",
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
          title="Master Healer Kale Nightmare Mode Endgame Guide"
          description="Prepare Nightmare Mode with Ruby refarming, facilities, major Ruby nodes, Angel Form, Nightmare bosses, Demon King, and 100% Tavern cleanup."
          gameTitle="Master Healer Kale with Useless Party"
          gameHref="/master-healer-kale"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MasterHealerKaleNightmareContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}