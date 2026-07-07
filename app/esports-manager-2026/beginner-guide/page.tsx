import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EsportsManager2026BeginnerContent from "@/data/esports-manager-2026/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/esports-manager-2026/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-scouting-player-search.webp`,
];

const toc = [
  {
    id: "esports-manager-2026-beginner-guide",
    label: "Beginner route",
  },
  {
    id: "game-setup",
    label: "Game setup",
  },
  {
    id: "first-problem-map",
    label: "Problem map",
  },
  {
    id: "fix-the-roster-first",
    label: "Fix roster",
  },
  {
    id: "first-signing-check",
    label: "First signing",
  },
  {
    id: "first-contract",
    label: "First contract",
  },
  {
    id: "staff-first",
    label: "Staff",
  },
  {
    id: "training-and-map-practice",
    label: "Training",
  },
  {
    id: "sponsors",
    label: "Sponsors",
  },
  {
    id: "finance-manager",
    label: "Finance",
  },
  {
    id: "basecamp-shop",
    label: "Basecamp",
  },
  {
    id: "first-tournament",
    label: "First tournament",
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
  {
    href: "/esports-manager-2026/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Esports Manager 2026 Beginner Guide & First Season",
  description:
    "Start Esports Manager 2026 with a first-season route: fix the roster, sign your first player, hire staff, train maps, manage sponsors, budget and tournament prep.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Esports Manager 2026 Beginner Guide",
    description:
      "Follow a practical Esports Manager 2026 beginner route for setup, legal roster repair, first signing, staff, training, sponsors, Finance Manager, basecamp, and the first tournament.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Esports Manager 2026 scouting screen showing player search, staff search, player pool, and transfer budget.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Manager 2026 Beginner Guide",
    description:
      "Fix the first roster gate, sign safely, choose staff, train the right weakness, and handle sponsors and budget in Esports Manager 2026.",
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
          name: "Beginner Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "Esports Manager 2026 Beginner Guide and First Season Route",
      name: "Esports Manager 2026 Beginner Guide",
      description:
        "A practical Esports Manager 2026 beginner guide covering the first-season route, game setup, legal roster repair, Scouting, first player signing, contract flexibility, staff priorities, training and map practice, sponsor objectives, Finance Manager decisions, basecamp and shop spending, first tournament diagnosis, and when to move into deeper scouting, sponsor, training, or achievement guides.",
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
          name: "Esports Manager 2026 beginner guide",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 first season",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 scouting",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 contracts",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 staff",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 training",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 sponsors",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 finance manager",
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
          name: "What difficulty should I choose first in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose a start that gives enough money, staff room, and roster flexibility to learn the systems. A stricter start is better after you already know Scouting, contracts, sponsors, and finance.",
          },
        },
        {
          "@type": "Question",
          name: "Should I start with free agents or transfers in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with free agents if you only need a legal fifth player. Move to paid transfers when free agents cannot solve the role problem and the budget can survive the cost.",
          },
        },
        {
          "@type": "Question",
          name: "Is a 12-month contract good early in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A 12-month contract is usually fine when the player fills a real need and the wage is manageable. Longer early deals are better saved for players who are clearly part of the core.",
          },
        },
        {
          "@type": "Question",
          name: "Who should I hire first in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Hire based on the current problem. Analyst helps information, coach helps training, psychologist helps morale and mental recovery, and physiotherapist helps recovery stability.",
          },
        },
        {
          "@type": "Question",
          name: "Is Auto Schedule enough in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Auto Schedule is fine while learning. Once you know the weak role, weak map, or repeated match problem, manual training is better.",
          },
        },
        {
          "@type": "Question",
          name: "What do Transfers, Wages, Marketing, and Operating do in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Transfers fund player moves, Wages cover ongoing salary pressure, Marketing supports growth, and Operating keeps the organization stable. Money should not move into Transfers until there is a clear target.",
          },
        },
        {
          "@type": "Question",
          name: "Should I spend sponsor rewards right away in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Claim the reward, check Finance Manager, then spend only if the next bottleneck is clear.",
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
          title="Esports Manager 2026 Beginner Guide"
          description="Follow a clean first-season route: choose a safe start, fix the roster, sign carefully, hire useful staff, train the next weakness, and avoid wasting sponsor money."
          gameTitle="Esports Manager 2026"
          gameHref="/esports-manager-2026"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EsportsManager2026BeginnerContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}