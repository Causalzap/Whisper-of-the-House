import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import BombananaContent from "@/data/bombanana/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-hub.webp`,
  `${siteUrl}/images/bombanana/bombanana-bomb-timer-mistakes.webp`,
];

const toc = [
  {
    id: "diagnose-first",
    label: "Diagnose the failed run",
  },
  {
    id: "manual-live",
    label: "Use the manual during a live bomb",
  },
  {
    id: "module-route",
    label: "Jump to the right module",
  },
  {
    id: "solver-or-manual",
    label: "Solver or manual?",
  },
  {
    id: "three-roles",
    label: "Blind, Deaf & Mute",
  },
  {
    id: "campaign",
    label: "30-level Campaign progression",
  },
  {
    id: "chaos",
    label: "When Chaos changes priority",
  },
  {
    id: "smaller-modules",
    label: "Color Slider, Maze & Monkey-Says",
  },
  {
    id: "retry-decision",
    label: "Replay or keep moving",
  },
  {
    id: "modes",
    label: "Campaign, Endless & Custom",
  },
  {
    id: "buy-or-skip",
    label: "Is BOMBANANA worth it?",
  },
  {
    id: "completion",
    label: "Campaign vs completion",
  },
  {
    id: "ktane",
    label: "BOMBANANA vs KTaNE",
  },
  {
    id: "what-to-fix-next",
    label: "What to fix next",
  },
];

const relatedLinks = [
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles & Communication Guide",
  },
  {
    href: "/bombanana/chaos",
    label: "BOMBANANA Chaos Guide",
  },
  {
    href: "/bombanana/morse",
    label: "BOMBANANA Morse Code Guide",
  },
  {
    href: "/bombanana/achievements",
    label: "BOMBANANA Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Manual & Guide: Solver, Levels, Roles",

  description:
    "Use the BOMBANANA manual and guide to diagnose failed runs, route to module solvers, fix Blind/Deaf/Mute communication, and choose what to practice next.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "BOMBANANA Manual & Guide: Solver, Levels, Roles",

    description:
      "Figure out what is actually ending the run, then move to the right BOMBANANA module, role, Chaos, Campaign, or completion path.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA three-player co-op bomb defusal gameplay",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BOMBANANA Manual & Guide: Solver, Levels, Roles",

    description:
      "Diagnose the failed run first, then use the right module guide, solver, role fix, Campaign checkpoint, or Chaos response.",

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
          name: "BOMBANANA Manual & Guide",
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
        "BOMBANANA Manual & Guide: Diagnose the Run Before You Retry",

      description:
        "A BOMBANANA guide for deciding what kind of problem is actually ending a run before starting another attempt. It covers how to separate rule mistakes from bad live state, relay failures, and attention problems; when the Module Solver is appropriate; how Blind, Deaf, and Mute change the path from manual answer to physical action; how the 30-level Campaign exposes persistent weaknesses; when Chaos should override the current plan; and how Campaign, Endless, Custom, achievements, purchase fit, and comparison with Keep Talking and Nobody Explodes fit into the wider game. Dedicated module procedures are routed to their individual guides, while Color Slider, Maze, and Monkey-Says remain part of the broader decision framework.",

      image: imageUrls,

      inLanguage: "en",

      datePublished: "2026-06-19",

      dateModified: "2026-09-06",

      articleSection: "BOMBANANA Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA manual",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA three-player co-op",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Blind Deaf Mute roles",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Campaign",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Chaos Modules",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "BOMBANANA Module Solver",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Cable Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Direction Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Calculator Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Switch Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Morse Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Maze",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Monkey-Says",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Endless",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Custom",
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
          title="BOMBANANA Guide: Diagnose the Run Before You Retry"
          description="I start with what actually broke—rule, live state, relay, or attention—then move to the solver, module guide, role fix, Chaos response, or Campaign checkpoint that matches the problem."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="BOMBANANA"
          heading="Looking for another co-op game after BOMBANANA?"
          description="Use the quick recommender to find another game that fits your platform, group size, and current mood, or build a broader Gaming DNA profile from games you already love."
        />
      </main>

      <Footer />
    </>
  );
}