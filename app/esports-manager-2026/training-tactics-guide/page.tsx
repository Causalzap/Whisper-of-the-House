import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EsportsManager2026TrainingTacticsContent from "@/data/esports-manager-2026/training-tactics-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/esports-manager-2026/training-tactics-guide`;

const imageUrls = [
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-training-three-attributes-auto-schedule.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-map-training-weaknesses.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-scrim-pick-strong-map.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-scrim-tactic-switch.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-eco-save-full-buy.webp`,
];

const toc = [
  {
    id: "esports-manager-2026-training-tactics-guide",
    label: "Training route",
  },
  {
    id: "auto-schedule",
    label: "Auto Schedule",
  },
  {
    id: "three-attributes",
    label: "3 attributes",
  },
  {
    id: "map-practice",
    label: "Map Practice",
  },
  {
    id: "scrims",
    label: "Scrims",
  },
  {
    id: "tactic-creator",
    label: "Tactic Creator",
  },
  {
    id: "tactic-switching",
    label: "Tactic switching",
  },
  {
    id: "timeout-halftime-talks",
    label: "Timeouts",
  },
  {
    id: "eco-and-full-buy",
    label: "Economy",
  },
  {
    id: "igl-awper-rifler-role-fit",
    label: "Role fit",
  },
  {
    id: "training-or-tactics",
    label: "Fix the layer",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/esports-manager-2026",
    label: "Esports Manager 2026 Guide Hub",
  },
  {
    href: "/esports-manager-2026/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/esports-manager-2026/scouting-contracts-guide",
    label: "Scouting and Contracts Guide",
  },
  {
    href: "/esports-manager-2026/sponsors-budget-guide",
    label: "Sponsors and Budget Guide",
  },
  {
    href: "/esports-manager-2026/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Esports Manager 2026 Training & Tactics Guide",
  description:
    "Train smarter in Esports Manager 2026: use Auto Schedule, three attributes, map practice, scrims, Tactic Creator, timeouts and economy calls.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Esports Manager 2026 Training and Tactics Guide",
    description:
      "Learn how to use Auto Schedule, three-attribute training, Map Practice, scrims, Tactic Creator, tactic switching, timeout and halftime talks, role fit, and Full Buy or Eco Round decisions in Esports Manager 2026.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Esports Manager 2026 training screen showing selectable player attributes and Auto Schedule.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Manager 2026 Training & Tactics",
    description:
      "Use Auto Schedule, three-attribute training, map practice, scrims, Tactic Creator, timeouts, role fit, and economy calls.",
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
          name: "Esports Manager 2026",
          item: `${siteUrl}/esports-manager-2026`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Training and Tactics Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "Esports Manager 2026 Training and Tactics Guide",
      name: "Esports Manager 2026 Training and Tactics Guide",
      description:
        "A practical Esports Manager 2026 training and tactics guide covering Auto Schedule, manual three-attribute training, player role problems, map practice, tournament map risk, scrims, Tactic Creator, tactic switching, Split B, timeout and halftime talks, Full Buy, Semi-Buy, Force Buy, Eco Round decisions, IGL, AWPer and Rifler role fit, and how to decide whether a loss needs training, tactics, economy changes, or scouting.",
      image: imageUrls,
      datePublished: "2026-07-07",
      dateModified: "2026-07-07",
      inLanguage: "en",
      articleSection: "Game Guides",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Esports Manager 2026",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 training",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 tactics",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Auto Schedule",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Map Practice",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 scrims",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Tactic Creator",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Full Buy",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 Eco Round",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 IGL AWPer Rifler",
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
      "@type": "ItemList",
      "@id": `${pageUrl}#training-tactics-systems`,
      name: "Esports Manager 2026 Training and Tactics Systems",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Auto Schedule and manual training",
          description:
            "Auto Schedule is useful early, then manual training becomes better once the weak role, weak map, or repeated match problem is clear.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Map Practice and scrims",
          description:
            "Map Practice repairs tournament risk, while scrims test one map, route, economy plan, or role question before the result matters.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tactic Creator and match adjustments",
          description:
            "Tactic Creator helps refine known plans, while tactic switching, timeout talks, and halftime adjustments respond to opponent reads and team state.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Economy and role fit",
          description:
            "Full Buy, Semi-Buy, Force Buy, Eco Round, IGL, AWPer, and Rifler fit all change whether a tactic can actually work.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Auto Schedule good in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Auto Schedule is good while learning the first week. It is better to switch to manual training once the weak role, weak map, or repeated match problem is clear.",
          },
        },
        {
          "@type": "Question",
          name: "How many attributes can I train in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The training screen lets you select up to three attributes for a player. Those slots are best used for stats that matter to the player’s role.",
          },
        },
        {
          "@type": "Question",
          name: "Should I train my best map or weakest map in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Train the map that matters for the next tournament. If the event can force a weak map, repair that map before it costs a bracket run.",
          },
        },
        {
          "@type": "Question",
          name: "Are scrims worth doing in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you enter with a question. Scrims are useful for testing maps, tactics, economy plans, or whether a role problem still exists.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Tactic Creator in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Tactic Creator when a predefined tactic is close but the zone behavior is wrong. It should refine a known plan, not guess blindly before the map problem is clear.",
          },
        },
        {
          "@type": "Question",
          name: "When should I call a timeout or use halftime talks in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a timeout or halftime talk when the team needs a composure reset, morale boost, or tactical adjustment after a clear match trend, not after one random lost round.",
          },
        },
        {
          "@type": "Question",
          name: "Why does role fit matter for tactics in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "IGL, AWPer, and Rifler roles affect how well a tactic can be executed. If the role is wrong, a good tactic can still fail.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Full Buy, Semi-Buy, Force Buy, and Eco Round in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Full Buy means the strongest weapon round, Semi-Buy is mixed investment, Force Buy spends despite risk, and Eco Round saves for a future buy. Each state changes how aggressive the next call should be.",
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
          title="Esports Manager 2026 Training and Tactics Guide"
          description="Use Auto Schedule early, then train the right attributes, practice risky maps, test scrims, adjust tactics, and respect economy states before judging a loss."
          gameTitle="Esports Manager 2026"
          gameHref="/esports-manager-2026"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EsportsManager2026TrainingTacticsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}