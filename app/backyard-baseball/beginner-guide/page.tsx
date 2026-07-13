import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BackyardBaseballBeginnerGuideContent from "@/data/backyard-baseball/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/backyard-baseball`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/backyard-baseball/backyard-baseball-beginner-settings-swing-spot.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-tutorial-batting-pitch-spot.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-perfect-pitch-timing.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-pitcher-fatigue.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-fielding-tag-throw-double-play.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-tutorial-slide-spacebar.webp`,
];

const toc = [
  {
    id: "first-hour",
    label: "First-hour route",
  },
  {
    id: "beginner-settings",
    label: "Beginner settings",
  },
  {
    id: "difficulty-modes",
    label: "Difficulty modes",
  },
  {
    id: "controls",
    label: "Controls",
  },
  {
    id: "batting",
    label: "Batting",
  },
  {
    id: "pitching",
    label: "Pitching & stamina",
  },
  {
    id: "fielding",
    label: "Fielding",
  },
  {
    id: "baserunning",
    label: "Baserunning & sliding",
  },
  {
    id: "power-ups",
    label: "Power-Ups",
  },
  {
    id: "league-ready",
    label: "League readiness",
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
    href: "/backyard-baseball",
    label: "Backyard Baseball 2026 Guide Hub",
  },
  {
    href: "/backyard-baseball/best-players-team-lineup",
    label: "Best Players, Team & Lineup",
  },
  {
    href: "/backyard-baseball/unlock-all-players",
    label: "Unlock All Players",
  },
  {
    href: "/backyard-baseball/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Backyard Baseball 2026 Beginner Guide: Controls & Tips",
  description:
    "Choose the right difficulty from all five, fix batting and pitching timing, control fielders and runners, use Power-Ups, and start League Play ready.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Backyard Baseball 2026 Beginner Guide & Controls",
    description:
      "Follow a practical first-hour route with all five difficulties, batting and pitching timing, fielding, runner controls, Power-Ups, and League advice.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Backyard Baseball 2026 beginner settings with Sandlot Star difficulty and Swing Spot Assist enabled",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard Baseball 2026 Beginner Guide & Controls",
    description:
      "Learn the best difficulty, batting and pitching timing, runner controls, fielding, Power-Ups, and when to begin League Play.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "How many difficulty modes are there?",
    answer:
      "Backyard Baseball 2026 has five difficulty modes: New Kid, Sandlot Star, Playground Pro, Backyard Legend, and Neighborhood Hero.",
  },
  {
    question: "Which difficulty should a beginner choose?",
    answer:
      "Choose New Kid when learning baseball rules or the basic controls. Choose Sandlot Star when you understand baseball but still need to learn the 2026 batting, fielding, and runner systems.",
  },
  {
    question: "How do I unlock Backyard Legend?",
    answer:
      "Win the Ultra Grand Championship of the Universe on Playground Pro to unlock Backyard Legend.",
  },
  {
    question: "How do I unlock Neighborhood Hero?",
    answer:
      "Complete the Backyard Legend progression to unlock Neighborhood Hero, the highest difficulty.",
  },
  {
    question: "Should I keep Swing Spot Assist on?",
    answer:
      "Keep Swing Spot Assist enabled until you can identify high, low, inside, and outside pitches directly from the release without relying on the marker.",
  },
  {
    question: "What is the best batting type for beginners?",
    answer:
      "Use Line Drive as the default batting type. Use Power when a strong hitter receives a reachable pitch and the scoring situation justifies the extra risk.",
  },
  {
    question: "How do I slide?",
    answer:
      "Use the slide binding shown in the Controls menu. Spacebar performed the slide on the launch PC Tutorial layout.",
  },
  {
    question: "Can I slide into first base?",
    answer:
      "Yes. Sliding can be used on a close play at first base as well as second, third, and home.",
  },
  {
    question: "Why do my runners get doubled off?",
    answer:
      "The runners are usually advancing before a fly ball is caught or the retreat command is being used too late. Hold near the base until the catch is confirmed.",
  },
  {
    question: "How long should a pitcher stay in?",
    answer:
      "There is no universal pitch count. Watch the stamina indicator, visible fatigue, pitch location, available pitches, the next hitters, the score, and whether the pitcher is needed in the next League game.",
  },
  {
    question: "What batting Power-Ups are in the game?",
    answer:
      "The batting Power-Ups are Crazy Bunts, Undergrounders, and Aluminum Power Bat.",
  },
  {
    question: "What pitching Power-Ups are in the game?",
    answer:
      "The pitching Power-Ups are Fire Balls, Crazy Balls, and Spitballs.",
  },
  {
    question: "Should I worry about Trading Cards during the first hour?",
    answer:
      "No. Learn the controls first. Open card packs between League games later so card achievements, rarity collection, and MLB player unlocks progress together.",
  },
  {
    question: "When should I start League Play?",
    answer:
      "Start League Play after you can hit consistently, return runners, slide, identify force plays, recognize pitcher fatigue, and complete a pitching change without learning the controls during the inning.",
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
          item: hubUrl,
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "Backyard Baseball 2026 Beginner Guide: Controls, Batting and Pitching",
      description:
        "This Backyard Baseball 2026 beginner guide explains the safest first-hour route, New Kid through Neighborhood Hero difficulty progression, recommended settings, Swing Spot Assist, batting placement and timing, Line Drive, Power and Bunt decisions, pitching accuracy and stamina management, bullpen choices across League games, force outs and tag outs, defensive throwing, runner selection, sprinting, sliding, fly-ball retreats, all six batting and pitching Power-Ups, common mistakes, and the checklist for starting League Play.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-13",
      dateModified: "2026-07-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Backyard Baseball",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 beginner guide",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 controls",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball difficulty modes",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball batting",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball pitching",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball pitcher stamina",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball fielding",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball baserunning",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball Power-Ups",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball League Play",
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
          title="Backyard Baseball 2026 Beginner Guide"
          description="Learn the best first-hour route, all five difficulty modes, batting and pitching timing, fielding, runner controls, Power-Ups, and when to begin League Play."
          gameTitle="Backyard Baseball"
          gameHref="/backyard-baseball"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BackyardBaseballBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}