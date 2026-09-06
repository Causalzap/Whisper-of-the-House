import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaLevelsContent from "@/data/bombanana/levels.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana/levels`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-campaign-level-11-select.webp`,
  `${siteUrl}/images/bombanana/bombanana-piano-yellow-light.webp`,
  `${siteUrl}/images/bombanana/bombanana-chaos-modules.webp`,
];

const toc = [
  {
    id: "all-levels",
    label: "All 30 Campaign levels",
  },
  {
    id: "levels-1-7",
    label: "Levels 1–7: Build the basics",
  },
  {
    id: "levels-8-15",
    label: "Levels 8–15: Add Medium modules",
  },
  {
    id: "levels-16-20",
    label: "Levels 16–20: Switch and Maze",
  },
  {
    id: "levels-21-24",
    label: "Levels 21–24: Morse and sequences",
  },
  {
    id: "levels-25-30",
    label: "Levels 25–30: Random Hard",
  },
  {
    id: "first-appearances",
    label: "Where major modules first appear",
  },
  {
    id: "replay-or-push",
    label: "Replay or keep pushing",
  },
];

const relatedLinks = [
  {
    href: "/bombanana/morse",
    label: "BOMBANANA Morse Code Guide",
  },
  {
    href: "/bombanana/switch",
    label: "BOMBANANA Switch Guide",
  },
  {
    href: "/bombanana/chaos",
    label: "BOMBANANA Chaos Guide",
  },
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles & Communication Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Manual & Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

  description:
    "See all 30 BOMBANANA levels, timers, module setups and Chaos, then find where Morse, Switch and other modules appear and when a replay is worth it.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

    description:
      "Follow all 30 Campaign levels from early Cable training to Switch, Maze, Morse and the Random Hard endgame, with practical replay checkpoints.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA Campaign level selector showing Level 11",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

    description:
      "Check every Campaign level, timer, module mix and Chaos setup, plus the points where I replay before carrying the same weakness forward.",

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
          item: `${siteUrl}/bombanana`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BOMBANANA Levels & Walkthrough",
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
        "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

      description:
        "A BOMBANANA Campaign progression guide covering all 30 levels, timers, fixed and random defusal slots, Chaos combinations, module introduction points, and practical readiness checks between major stretches of the game. It follows the shift from early Cable, Color Slider, Direction and Calculator levels into Symbol, Piano and Soundboard, then Switch and Maze, Morse and Monkey-Says, and finally Random Hard endgame pools. The progression notes focus on deciding whether a failed run needs another attempt, a return to an earlier practice level, or work on one specific module before moving deeper into Campaign.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-06",

      articleSection: "BOMBANANA Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Campaign",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA levels",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA level progression",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Campaign walkthrough",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "BOMBANANA Switch Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Maze Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Morse Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Monkey-Says",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Random Hard modules",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Chaos Modules",
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
          title="BOMBANANA Levels: All 30 Campaign Stages and When to Replay"
          description="I use the level list to see what the next bomb actually adds, whether a bad run was just messy, and when the same weakness has followed us far enough that replaying an earlier checkpoint will save time."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaLevelsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}