import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import SirWeHaveAnOrcProblemGuideContent from "@/data/sir-we-have-an-orc-problem/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sir-we-have-an-orc-problem`;

const imageUrls = [
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-layered-burn-gunner-tesla-build.webp`,
  `${siteUrl}/images/sir-we-have-an-orc-problem/sir-we-have-an-orc-problem-survive-perfect-clear-resources.webp`,
];

const toc = [
  {
    id: "guide-path",
    label: "Choose the right guide",
  },
  {
    id: "core-loop",
    label: "How progression works",
  },
  {
    id: "controls",
    label: "Controls & first-run checks",
  },
  {
    id: "survival-perfect-clear",
    label: "Survival vs perfect clear",
  },
  {
    id: "abilities",
    label: "Active abilities",
  },
  {
    id: "enemy-behavior",
    label: "Enemy behavior",
  },
  {
    id: "progression-roadmap",
    label: "Progression roadmap",
  },
  {
    id: "achievements",
    label: "Achievement conditions",
  },
  {
    id: "failure-check",
    label: "Failed-run diagnosis",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/sir-we-have-an-orc-problem/best-turrets-builds",
    label: "Best Turrets, Builds & Tier List",
  },
  {
    href: "/sir-we-have-an-orc-problem/best-upgrades-farming",
    label: "Best Upgrades & Farming",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-3-2-guide",
    label: "Level 3.2 Guide",
  },
  {
    href: "/sir-we-have-an-orc-problem/level-6-1-6-2-guide",
    label: "Levels 6.1 & 6.2 Guide",
  },
];

export const metadata: Metadata = {
  title: "Sir, We Have an Orc Problem Guide & Walkthrough",
  description:
    "Start with controls, abilities and progression basics, then find the right turret, upgrade, farming, Level 3.2 or Level 6.2 guide for your wall.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Sir, We Have an Orc Problem Guide Hub",
    description:
      "Learn the controls, abilities, reward conditions and progression route, then open the focused guide that matches your current stage or failed run.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1005,
        height: 565,
        alt: "Sir We Have an Orc Problem late-game defense using several tower types across separate routes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sir, We Have an Orc Problem Guide & Walkthrough",
    description:
      "Use the guide hub for controls, abilities, progression, achievements and links to the focused turret, farming and level guides.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Does Automatic Missile aim independently in Sir, We Have an Orc Problem?",
    answer:
      "Not completely in the tested build. Automatic Missile removes the need to click repeatedly, but the missile still follows the mouse position. Leave the cursor aimed at a useful route before looking away.",
  },
  {
    question:
      "Do passive upgrades invalidate the Four-tified achievement?",
    answer:
      "The listed condition restricts the run to four tower types and no abilities. It does not explicitly prohibit passive upgrade-tree nodes. Every passive branch has not been independently verified against the trigger, so confirm the result from the achievement popup.",
  },
  {
    question:
      "Do I need a fully upgraded Cryo Beam to finish Level 6.2?",
    answer:
      "No. The tested completed run did not have a fully maxed Cryo Beam. Reaching the final acceleration with emergency tools still available mattered more than filling every remaining ability node.",
  },
  {
    question:
      "Does clearing Level 6.2 unlock an Endless mode?",
    answer:
      "An Endless unlock was not verified after the tested perfect clear. Do not assume the mode exists or unlocks until it appears in the current game build or is confirmed by the developer.",
  },
  {
    question:
      "Will every upgrade price and farming value stay the same?",
    answer:
      "No. Upgrade prices, payouts and damage thresholds can change after balance updates. Precise tested values are kept in the upgrades and farming guide, while the hub focuses on controls, conditions and decision rules that remain useful across versions.",
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
          name: "Sir, We Have an Orc Problem Guide",
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
        "Sir, We Have an Orc Problem Guide, Walkthrough and Progression Hub",
      description:
        "This Sir, We Have an Orc Problem guide hub explains the core progression loop, controls, manual and automatic missile behavior, survival and perfect-clear resources, active abilities, recurring enemy behavior and the achievement restrictions that do not need separate pages. It also provides a problem-based reading route to the dedicated turret and build tier list, upgrade and farming planner, Level 3.2 route guide and Levels 6.1 and 6.2 endgame guide. The hub helps players distinguish global damage failures from missing route coverage, late stragglers and final-wave ability-timing problems without duplicating the detailed strategies covered by the supporting guides.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-29",
      dateModified: "2026-07-29",
      about: [
        {
          "@type": "VideoGame",
          name: "Sir, We Have an Orc Problem",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem guide",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem walkthrough",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem controls",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem abilities",
        },
        {
          "@type": "Thing",
          name: "Survival and perfect clear resources",
        },
        {
          "@type": "Thing",
          name: "Manual Missile and Automatic Missile",
        },
        {
          "@type": "Thing",
          name: "Strafing Run",
        },
        {
          "@type": "Thing",
          name: "Bombing Run",
        },
        {
          "@type": "Thing",
          name: "Orbital Laser",
        },
        {
          "@type": "Thing",
          name: "Cryo Beam",
        },
        {
          "@type": "Thing",
          name: "Nuke ability",
        },
        {
          "@type": "Thing",
          name: "Sir, We Have an Orc Problem achievements",
        },
        {
          "@type": "Thing",
          name: "Four-tified achievement",
        },
        {
          "@type": "Thing",
          name: "Against All Odds achievement",
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
          title="The Route I Use From the First 400 Orcs to Level 6.2"
          description="Start here for controls, abilities, resource conditions, achievement restrictions and the checks that tell me whether to move a tower, buy an upgrade, farm a shorter stage or save an ability for the final rush."
          gameTitle="Sir, We Have an Orc Problem"
          gameHref="/sir-we-have-an-orc-problem"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SirWeHaveAnOrcProblemGuideContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Sir, We Have an Orc Problem"
          heading="Looking for another game after Sir, We Have an Orc Problem?"
          description="Use the quick recommender to find another game that fits your current mood, platform, and play style, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}