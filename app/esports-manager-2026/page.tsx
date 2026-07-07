import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EsportsManager2026Content from "@/data/esports-manager-2026/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/esports-manager-2026`;

const imageUrls = [
  `${siteUrl}/images/esports-manager-2026/esports-manager-2026-scouting-player-search.webp`,
];

const toc = [
  {
    id: "esports-manager-2026-guide",
    label: "Guide hub",
  },
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "choose-the-right-guide",
    label: "Choose guide",
  },
  {
    id: "crashing-not-launching",
    label: "Crash fixes",
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
    href: "/esports-manager-2026/beginner-guide",
    label: "Esports Manager 2026 Beginner Guide",
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
  title: "Esports Manager 2026 Guide: Scouting, Sponsors & Tactics",
  description:
    "Start Esports Manager 2026 with the right route: fix roster, sign players, choose sponsors, manage budget, train maps and track achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Esports Manager 2026 Guide Hub: Roster, Sponsors, Training and Achievements",
    description:
      "Find the right Esports Manager 2026 guide for roster setup, scouting, contracts, sponsors, budget, training, tactics, crash fixes, and achievement cleanup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Esports Manager 2026 scouting screen showing player and staff search options.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esports Manager 2026 Guide",
    description:
      "Find the right route for roster setup, scouting, sponsors, budget, training, tactics, and achievements in Esports Manager 2026.",
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
          name: "Esports Manager 2026 Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": ["CollectionPage", "WebPage"],
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Esports Manager 2026 Guide Hub",
      headline:
        "Esports Manager 2026 Guide Hub: Roster, Scouting, Sponsors, Training, Tactics, and Achievements",
      description:
        "This Esports Manager 2026 guide hub helps players choose the right route for the first season, including the first roster gate, Scouting, free agents, contracts, player-page checks, sponsor objectives, six sponsor slots, monthly income activation, Finance Manager decisions, transfer budget timing, Auto Schedule, map practice, scrims, Tactic Creator, timeout and halftime talks, IGL, AWPer and Rifler role fit, Full Buy, Semi-Buy, Force Buy, Eco Round decisions, crash fixes, and the full 21-achievement checklist.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-07",
      dateModified: "2026-07-07",
      about: [
        {
          "@type": "VideoGame",
          name: "Esports Manager 2026",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 guide",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 beginner guide",
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
          name: "Esports Manager 2026 sponsors",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 budget",
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
          name: "Esports Manager 2026 achievements",
        },
        {
          "@type": "Thing",
          name: "Esports Manager 2026 crash fixes",
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
      mainEntity: {
        "@type": "ItemList",
        "@id": `${pageUrl}#guides`,
        name: "Esports Manager 2026 Guide Cluster",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Esports Manager 2026 Beginner Guide",
            url: `${siteUrl}/esports-manager-2026/beginner-guide/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Esports Manager 2026 Scouting and Contracts Guide",
            url: `${siteUrl}/esports-manager-2026/scouting-contracts-guide/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Esports Manager 2026 Sponsors and Budget Guide",
            url: `${siteUrl}/esports-manager-2026/sponsors-budget-guide/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Esports Manager 2026 Training and Tactics Guide",
            url: `${siteUrl}/esports-manager-2026/training-tactics-guide/`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Esports Manager 2026 Achievements Guide",
            url: `${siteUrl}/esports-manager-2026/achievements-guide/`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I do first in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fix the roster first. If the squad has only four eligible players, go to Scouting, find a playable fifth, check the player page, and send a contract offer before worrying about advanced tactics.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sign my first player in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open Scouting, start with free agents if money is tight, open the player page, check role and contract terms, then send an offer from the Contract tab.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sign a star player early in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if the player solves a real role problem and the contract does not damage the budget. A flexible first signing is usually better than a flashy signing that blocks future moves.",
          },
        },
        {
          "@type": "Question",
          name: "How do sponsors work in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sponsors assign objectives. Completing those objectives can reward money, gear, or furniture. Early sponsors should be chosen by objective fit, not tier alone.",
          },
        },
        {
          "@type": "Question",
          name: "How many sponsors can I have in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can have up to six sponsors at the same time, but filling all six early can add too many active objectives to track.",
          },
        },
        {
          "@type": "Question",
          name: "Is Auto Schedule good for training in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Auto Schedule is useful while learning the first week. Once the weak role, weak map, or repeated tactic problem is clear, switch to a more targeted training plan.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I keep losing after winning early rounds in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The opponent may have adapted, entered a stronger buy round, or started punishing the same route. Check the tactic, economy state, and map problem before buying another player.",
          },
        },
        {
          "@type": "Question",
          name: "Does this Esports Manager 2026 guide include crash fixes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but only as a short checklist. Crash and not-launching fixes are mostly standard PC troubleshooting, so this hub keeps them short instead of making a thin standalone page.",
          },
        },
        {
          "@type": "Question",
          name: "What achievements should I target first in Esports Manager 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the natural early route: First Contract, First Victory, First Deal, and Staff Debut. Save long routes like Financial Cushion, Academy Star, Major difficulty wins, and Scout of the Year for later.",
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
          title="Esports Manager 2026 Guide Hub"
          description="Find the right Esports Manager 2026 guide for roster setup, scouting, contracts, sponsors, budget, training, tactics, crash fixes, and achievements."
          gameTitle="Esports Manager 2026"
          gameHref="/esports-manager-2026/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EsportsManager2026Content />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}