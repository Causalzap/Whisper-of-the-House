import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EsportsManager2026ScoutingContractsContent from "@/data/esports-manager-2026/scouting-contracts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/esports-manager-2026/scouting-contracts-guide`;

const imageUrls = [
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-scouting-player-search.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-player-page-contract-tab.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-contract-offer-terms.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-contract-duration-negotiation.webp`,
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-contract-response-confirm.webp`,
];

const toc = [
  {
    id: "esports-manager-2026-scouting-contracts-guide",
    label: "Scouting route",
  },
  {
    id: "free-agents-first",
    label: "Free agents",
  },
  {
    id: "read-player-page",
    label: "Player page",
  },
  {
    id: "sign-wait-walk-away",
    label: "Sign or wait",
  },
  {
    id: "contract-offer",
    label: "Contract offer",
  },
  {
    id: "contract-negotiation",
    label: "Negotiation",
  },
  {
    id: "confirm-or-reject",
    label: "Confirm or reject",
  },
  {
    id: "starters-and-bench",
    label: "Bench players",
  },
  {
    id: "paid-transfers",
    label: "Paid transfers",
  },
  {
    id: "achievement-routing",
    label: "Achievements",
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
  title: "Esports Manager 2026 Scouting & Contracts Guide",
  description:
    "Scout and sign better players in Esports Manager 2026. Compare free agents, player pages, contract duration, wage pressure and paid transfers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Esports Manager 2026 Scouting and Contracts Guide",
    description:
      "Learn how to scout free agents, read player pages, check contract terms, handle 12-month negotiation, manage wage pressure, add bench depth, and decide when paid transfers are worth it.",
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
    title: "Esports Manager 2026 Scouting & Contracts",
    description:
      "Use free agents, player-page checks, contract terms, wage control, bench depth, and paid transfer timing to build a safer roster.",
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
          name: "Scouting and Contracts Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "Esports Manager 2026 Scouting and Contracts Guide",
      name: "Esports Manager 2026 Scouting and Contracts Guide",
      description:
        "A practical Esports Manager 2026 scouting and contracts guide covering the first roster gate, free agents, paid transfers, player-page checks, role fit, form, health, potential, contract tab review, transfer date, contract type, 12-month negotiation, wage pressure, confirm-or-reject decisions, starter and bench depth, and achievement routes tied to scouting and contracts.",
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
          name: "Esports Manager 2026 scouting",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 contracts",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 free agents",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 paid transfers",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 player page",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 contract duration",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 wage pressure",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 bench players",
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
          name: "Should I sign free agents first in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually yes. Free agents are the safest first check when you only need a legal fifth player, but they still have wage and duration costs.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check before signing a player in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check role, form, health, potential, attributes, wage, duration, and whether the player actually fixes your roster problem.",
          },
        },
        {
          "@type": "Question",
          name: "Is rating more important than role in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Rating helps shortlist players, but role fit decides whether the signing actually helps the team.",
          },
        },
        {
          "@type": "Question",
          name: "Is a 12-month contract good early in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A 12-month contract is usually fine if the player fills a real need and the wage is manageable. Longer early deals are better saved for players who are clearly part of the core.",
          },
        },
        {
          "@type": "Question",
          name: "When should I reject a contract in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reject or delay when the player wants too much duration, the wage blocks the next move, or the signing no longer solves the problem you opened Scouting for.",
          },
        },
        {
          "@type": "Question",
          name: "When should I buy a player from another team in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy from another team when free agents cannot solve the role problem and the transfer value does not consume the flexibility you need for the rest of the season.",
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
          title="Esports Manager 2026 Scouting and Contracts Guide"
          description="Find the right player, check role fit and contract terms, manage wage pressure, use bench depth carefully, and avoid paid transfers before you know the real roster problem."
          gameTitle="Esports Manager 2026"
          gameHref="/esports-manager-2026"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EsportsManager2026ScoutingContractsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}