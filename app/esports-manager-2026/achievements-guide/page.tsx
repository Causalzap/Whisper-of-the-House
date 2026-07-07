import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EsportsManager2026AchievementsContent from "@/data/esports-manager-2026/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/esports-manager-2026/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-contract-response-confirm.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-scouting-player-search.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-sponsor-objectives-rewards.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-eco-save-full-buy.webp`,
];

const toc = [
  {
    id: "all-achievements-checklist",
    label: "Checklist",
  },
  {
    id: "esports-manager-2026-achievements-guide",
    label: "Achievement route",
  },
  {
    id: "first-week-achievements",
    label: "First week",
  },
  {
    id: "scouting-roster-achievements",
    label: "Scouting & roster",
  },
  {
    id: "sponsor-budget-achievements",
    label: "Sponsor & budget",
  },
  {
    id: "tournament-major-achievements",
    label: "Tournament & Major",
  },
  {
    id: "academy-star",
    label: "Academy Star",
  },
  {
    id: "final-cleanup-order",
    label: "Cleanup order",
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
    href: "/esports-manager-2026/training-tactics-guide",
    label: "Training and Tactics Guide",
  },
];

export const metadata: Metadata = {
  title: "Esports Manager 2026 Achievements Guide & Checklist",
  description:
    "Track all 21 Esports Manager 2026 achievements with checklist, Steam unlock rates, first-week route, scouting, budget, academy and Major goals.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Esports Manager 2026 Achievements Guide & Checklist",
    description:
      "Use the Esports Manager 2026 achievements checklist to track all 21 achievements, Steam Global unlock rates, first-week goals, scouting routes, sponsor and budget goals, academy cleanup, and Major difficulty wins.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Esports Manager 2026 contract response screen used for the First Contract achievement route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Manager 2026 Achievements Guide",
    description:
      "Track all 21 achievements with checklist progress, Steam unlock rates, and a clean route for scouting, sponsor, budget, academy, and Major goals.",
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
          item: `${siteUrl}/esports-manager-2026/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "Esports Manager 2026 Achievements Guide and Checklist",
      name: "Esports Manager 2026 Achievements Guide and Checklist",
      description:
        "A practical Esports Manager 2026 achievements guide covering all 21 full-release achievements, Steam Global unlock rates recorded in July 2026, an interactive checklist, first-week unlocks, scouting and roster achievements, sponsor and budget achievements, tournament and Major difficulty routes, Academy Star planning, Financial Cushion, Risky Investor, Scout of the Year, and final 100% cleanup order.",
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
          name: "Esports Manager 2026 achievements",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 achievement checklist",
        },
        {
          "@type": "Thing",
          name: "First Contract",
        },
        {
          "@type": "Thing",
          name: "Rising Star",
        },
        {
          "@type": "Thing",
          name: "Global Scout",
        },
        {
          "@type": "Thing",
          name: "Negotiation King",
        },
        {
          "@type": "Thing",
          name: "Risky Investor",
        },
        {
          "@type": "Thing",
          name: "Financial Cushion",
        },
        {
          "@type": "Thing",
          name: "Academy Star",
        },
        {
          "@type": "Thing",
          name: "Scout of the Year",
        },
        {
          "@type": "Thing",
          name: "Hard Major",
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
      "@id": `${pageUrl}#achievement-routes`,
      name: "Esports Manager 2026 Achievement Routes",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "First-week setup achievements",
          description:
            "First Contract, First Victory, First Deal, and Staff Debut are the natural early route while building the first playable organization loop.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scouting and roster achievements",
          description:
            "Rising Star, Global Scout, Coaching Hire, Loyalty First, New Face, Dream Team, and Scout of the Year depend on scouting, roster fit, contracts, and long-term player planning.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sponsor and budget achievements",
          description:
            "Negotiation King, Risky Investor, and Financial Cushion depend on sponsor timing, budget control, wage pressure, and planned spending or saving.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Tournament and Major achievements",
          description:
            "Podium Newbie, Consistency, Casual Major, Easy Major, Normal Major, and Hard Major require repeatable tournament results, map preparation, tactics, and economy control.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Academy development achievement",
          description:
            "Academy Star is a late cleanup route for developing a youth academy player to at least a 4-star rating.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many achievements are in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 21 achievements in the current full-release list, from early unlocks like First Contract to rare long routes like Financial Cushion, Academy Star, Hard Major, and Scout of the Year.",
          },
        },
        {
          "@type": "Question",
          name: "What achievement should I unlock first in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "First Contract should usually come first because signing a player fixes the early roster gate. After that, First Victory, First Deal, and Staff Debut follow naturally.",
          },
        },
        {
          "@type": "Question",
          name: "What are the hardest achievements in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The hardest group is Scout of the Year, Hard Major, Normal Major, Academy Star, Financial Cushion, and Dream Team because they need long-term scouting, Major success, academy development, money control, or a full 4-star roster.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Rising Star in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Scout and sign a player with 4+ star potential. It is safer to wait until the roster is stable enough to sign for potential without ignoring role, wage, and contract fit.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Negotiation King in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Secure a sponsorship deal with a tournament win bonus. It is best to wait until the team can realistically win events before chasing this achievement.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Risky Investor early in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Risky Investor asks you to spend 80% of the budget on a single player, so it should be treated as planned cleanup rather than a normal first-season transfer.",
          },
        },
        {
          "@type": "Question",
          name: "How do I prepare for Financial Cushion in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Control wages, avoid panic transfers, complete realistic sponsor objectives, and stop spending every reward immediately. The achievement requires $20,000,000 in the organization account.",
          },
        },
        {
          "@type": "Question",
          name: "Which achievements should I save for last in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save Financial Cushion, Academy Star, Scout of the Year, Normal Major, and Hard Major for late cleanup because they need a stable organization and long-term planning.",
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
          title="Esports Manager 2026 Achievements Guide"
          description="Track every Esports Manager 2026 achievement with a saved checklist, Steam Global unlock rates, route order, and cleanup plan."
          gameTitle="Esports Manager 2026"
          gameHref="/esports-manager-2026/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EsportsManager2026AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}