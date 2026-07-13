import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BackyardBaseballGuideHubContent from "@/data/backyard-baseball/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/backyard-baseball`;

const imageUrls = [
  `${siteUrl}/images/backyard-baseball/backyard-baseball-2026-game-modes-menu.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-league-14-game-schedule.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-beginner-settings-swing-spot.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-card-shop-speedsters-sluggers-aces.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-achievements-records-screen.webp`,
];

const toc = [
  {
    id: "start-here",
    label: "Start here",
  },
  {
    id: "first-hour",
    label: "First-hour route",
  },
  {
    id: "game-modes",
    label: "Game modes",
  },
  {
    id: "league-play",
    label: "League Play",
  },
  {
    id: "settings",
    label: "Difficulty & settings",
  },
  {
    id: "players-and-team-building",
    label: "Players & Tier List",
  },
  {
    id: "cards-and-tokens",
    label: "Cards & Tokens",
  },
  {
    id: "records-and-hall-of-fame",
    label: "Records & Hall of Fame",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/backyard-baseball/beginner-guide",
    label: "Backyard Baseball 2026 Beginner Guide",
  },
  {
    href: "/backyard-baseball/best-players-team-lineup",
    label: "Best Players, Tier List & Team",
  },
  {
    href: "/backyard-baseball/unlock-all-players",
    label: "Unlock All Players",
  },
  {
    href: "/backyard-baseball/achievements-guide",
    label: "All 51 Achievements & 100% Roadmap",
  },
];

export const metadata: Metadata = {
  title: "Backyard Baseball 2026 Guide, Tier List & Unlocks",
  description:
    "Start with controls, modes, difficulty, League Play, cards, Tokens, the S- and A-tier list, player unlocks, team building, and all 51 achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Backyard Baseball 2026 Guide, Tier List & Unlocks",
    description:
      "Use the complete guide hub for beginner controls, five difficulties, League Play, the Tier List, best team, hidden players, MLB Pros, cards, and achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Backyard Baseball 2026 Play Ball menu showing the available game modes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard Baseball 2026 Guide Hub",
    description:
      "Find beginner tips, modes, difficulties, League Play, the Tier List, best team, player unlocks, cards, Tokens, and all 51 achievements.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Is this guide for Backyard Baseball '97 or '01?",
    answer:
      "No. This guide hub covers the new Backyard Baseball game released in 2026.",
  },
  {
    question: "What should I do first in Backyard Baseball 2026?",
    answer:
      "Complete the Tutorial, check the Controls menu, play one short Quick Play or Pickup Game, and test a pitching change before beginning League Play.",
  },
  {
    question: "How long is a League season?",
    answer:
      "The regular season has 14 games across eight teams, with every opponent played twice before the postseason tournaments begin.",
  },
  {
    question: "How many difficulty levels are there?",
    answer:
      "There are five difficulty levels: New Kid, Sandlot Star, Playground Pro, Backyard Legend, and Neighborhood Hero.",
  },
  {
    question: "Which difficulty should a beginner choose?",
    answer:
      "Choose New Kid when both baseball rules and the controls are unfamiliar. Choose Sandlot Star when you understand baseball but are still learning batting, fielding, runner control, and pitching changes.",
  },
  {
    question:
      "How do I unlock Backyard Legend and Neighborhood Hero?",
    answer:
      "Win the Ultra Grand Championship of the Universe on Playground Pro to unlock Backyard Legend. Complete the championship on Backyard Legend to unlock Neighborhood Hero.",
  },
  {
    question: "Should I keep Swing Spot Assist enabled?",
    answer:
      "Yes. Keep it enabled while learning pitch location and contact timing, then turn it off after you can identify high, low, inside, and outside pitches without the marker.",
  },
  {
    question:
      "What is the difference between Quick Play and Pickup Game?",
    answer:
      "Quick Play starts quickly without requiring a custom draft. Pickup Game is better when you want to select and test specific players, positions, and batting orders.",
  },
  {
    question: "What is Backyard Derby used for?",
    answer:
      "Backyard Derby is useful for power-contact practice and target-based challenges such as Sunny Day's Jumbotron and Julie Dunkel's glass targets.",
  },
  {
    question: "What is Wiggle Ball?",
    answer:
      "Wiggle Ball is a four-on-four mode with unusual ball movement and fewer fielders. It is also used for several player-unlock routes.",
  },
  {
    question: "Does Backyard Baseball 2026 have online multiplayer?",
    answer:
      "The Steam release supports local shared or split-screen PvP but does not list online multiplayer. Console multiplayer features may differ, so check the current store listing for the platform being used.",
  },
  {
    question: "What platforms is Backyard Baseball 2026 available on?",
    answer:
      "The Windows and macOS Steam version released on July 9, 2026. PlayStation and Xbox versions are listed for August 18, 2026, and a Nintendo Switch version has also been announced.",
  },
  {
    question: "Does Backyard Baseball 2026 have microtransactions?",
    answer:
      "The Steam release description states that the reward system does not include microtransactions. Tokens used for card packs are earned through gameplay.",
  },
  {
    question: "How much does a card pack cost?",
    answer:
      "Speedsters, Sluggers, and Aces packs each cost 50 Tokens.",
  },
  {
    question:
      "What do one-star, two-star, three-star, and four-star cards mean?",
    answer:
      "The star levels are used by the release interface and achievement requirements to track card ownership. Earlier preview names such as Base, Rookie, Cracked Ice, and REMIX should not automatically be treated as direct replacements for the star levels.",
  },
  {
    question: "Can card packs unlock MLB Pros?",
    answer:
      "Yes. Vladimir Guerrero becomes selectable when his player card is pulled. Other MLB Pros use separate card, Token, statistical, mode, or League conditions.",
  },
  {
    question: "How many achievements are there?",
    answer:
      "Backyard Baseball 2026 has 51 Steam achievements, all added on July 9, 2026.",
  },
  {
    question:
      "Where can I find the Backyard Baseball 2026 Tier List?",
    answer:
      "The Best Players, Tier List, and Team Guide contains the complete S- and A-tier ratings, recommended nine-player roster, batting order, fielding positions, pitching rotation, boosts, and Custom Kid builds.",
  },
  {
    question: "Which guide should I use for a complete roster?",
    answer:
      "Use the Best Players, Tier List, and Team Guide for drafting and positions, then use the Player Unlock Guide for characters who are not initially selectable.",
  },
];

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
          name: "Backyard Baseball 2026 Guide",
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
        "Backyard Baseball 2026 Guide Hub, Tier List, Team, Unlocks, and Achievements",
      description:
        "This Backyard Baseball 2026 guide hub explains what to do during the first hour, how the six game modes differ, how the eight-team and 14-game League works, which of the five difficulty levels to choose, how to unlock Backyard Legend and Neighborhood Hero, how Swing Spot Assist and other settings affect play, how to build a balanced roster, where to find the S- and A-tier player rankings, how Custom Kids and boosts work, how Speedsters, Sluggers, and Aces card packs use gameplay-earned Tokens, how to check Records and the Hall of Fame, and where to find the complete beginner, team, unlock, and achievements guides.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-13",
      dateModified: "2026-07-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Backyard Baseball",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 guide",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 beginner guide",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 Tier List",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball best team",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball player unlocks",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball achievements",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball League Play",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball card packs",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "New Kid",
        },
        {
          "@type": "Thing",
          name: "Sandlot Star",
        },
        {
          "@type": "Thing",
          name: "Playground Pro",
        },
        {
          "@type": "Thing",
          name: "Backyard Legend",
        },
        {
          "@type": "Thing",
          name: "Neighborhood Hero",
        },
        {
          "@type": "Thing",
          name: "Quick Play",
        },
        {
          "@type": "Thing",
          name: "Pickup Game",
        },
        {
          "@type": "Thing",
          name: "Backyard Derby",
        },
        {
          "@type": "Thing",
          name: "Wiggle Ball",
        },
        {
          "@type": "Thing",
          name: "League Play",
        },
        {
          "@type": "Thing",
          name: "Speedsters card packs",
        },
        {
          "@type": "Thing",
          name: "Sluggers card packs",
        },
        {
          "@type": "Thing",
          name: "Aces card packs",
        },
      ],
      hasPart: [
        {
          "@type": "Article",
          name: "Backyard Baseball 2026 Beginner Guide",
          url: `${pageUrl}/beginner-guide`,
        },
        {
          "@type": "Article",
          name: "Backyard Baseball 2026 Best Players and Tier List",
          url: `${pageUrl}/best-players-team-lineup`,
        },
        {
          "@type": "Article",
          name: "Backyard Baseball 2026 Unlock All Players Guide",
          url: `${pageUrl}/unlock-all-players`,
        },
        {
          "@type": "Article",
          name: "Backyard Baseball 2026 Achievements Guide",
          url: `${pageUrl}/achievements-guide`,
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Backyard Baseball 2026 Guide Hub"
          description="Start here for beginner controls, all five difficulties, game modes, League Play, the S- and A-tier list, best team, player unlocks, cards, Tokens, and all 51 achievements."
          gameTitle="Backyard Baseball"
          gameHref="/backyard-baseball"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BackyardBaseballGuideHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}