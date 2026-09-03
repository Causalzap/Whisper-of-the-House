import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaLevelsContent from "@/data/bombanana/levels.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/levels`;


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
    label: "Levels 1–7",
  },
  {
    id: "levels-8-15",
    label: "Levels 8–15",
  },
  {
    id: "levels-16-20",
    label: "Levels 16–20",
  },
  {
    id: "levels-21-24",
    label: "Levels 21–24",
  },
  {
    id: "levels-25-30",
    label: "Levels 25–30",
  },
  {
    id: "first-appearances",
    label: "Module first appearances",
  },
  {
    id: "replay-or-push",
    label: "Replay or keep pushing",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver & Manual",
  },
  {
    href: "/bombanana/wire",
    label: "BOMBANANA Cable / Wire Guide",
  },
  {
    href: "/bombanana/calculator",
    label: "BOMBANANA Calculator Guide & Solver",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles Guide",
  },
  {
    href: "/bombanana/achievements",
    label: "BOMBANANA Achievements Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

  description:
    "See all 30 BOMBANANA Campaign levels, timers, modules, Chaos setups, first appearances, progression breakpoints, and when to replay or push ahead.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

    description:
      "Follow BOMBANANA's 30-level Campaign from early Cable and Calculator training through Switch, Maze, Morse, Monkey-Says, and Random Hard endgame bombs.",

    url:
      pageUrl,

    siteName:
      "Whisper of the House",

    type:
      "article",

    images: [
      {
        url:
          imageUrls[0],

        width:
          1600,

        height:
          900,

        alt:
          "BOMBANANA Campaign level selector showing Level 11.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

    description:
      "See every BOMBANANA Campaign level, module progression, first fixed appearances, Chaos setups, and the major difficulty breakpoints.",

    images: [
      imageUrls[0],
    ],
  },
};


const jsonLd = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type":
        "BreadcrumbList",

      "@id":
        `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type":
            "ListItem",

          position:
            1,

          name:
            "Home",

          item:
            siteUrl,
        },

        {
          "@type":
            "ListItem",

          position:
            2,

          name:
            "BOMBANANA Guide",

          item:
            `${siteUrl}/bombanana`,
        },

        {
          "@type":
            "ListItem",

          position:
            3,

          name:
            "BOMBANANA Levels & Walkthrough",

          item:
            pageUrl,
        },
      ],
    },


    {
      "@type":
        "Article",

      "@id":
        `${pageUrl}#article`,

      mainEntityOfPage: {
        "@type":
          "WebPage",

        "@id":
          pageUrl,
      },

      headline:
        "BOMBANANA Levels & Walkthrough: All 30 Campaign Levels",

      description:
        "A player-focused BOMBANANA Campaign walkthrough covering all 30 levels, timers, fixed and random module compositions, Chaos combinations, first fixed module appearances, progression breakpoints, late-game Random Hard structure, and when a team should replay an earlier section instead of pushing forward.",

      image:
        imageUrls,

      inLanguage:
        "en",

      dateModified:
        "2026-09-03",

      articleSection:
        "Guides",

      about: [
        {
          "@type":
            "VideoGame",

          name:
            "BOMBANANA",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Campaign",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA levels",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA level walkthrough",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA module progression",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Random Hard modules",
        },
      ],

      isPartOf: {
        "@type":
          "WebSite",

        "@id":
          `${siteUrl}#website`,

        name:
          "Whisper of the House",

        url:
          siteUrl,
      },

      publisher: {
        "@type":
          "Organization",

        "@id":
          `${siteUrl}#organization`,

        name:
          "Whisper of the House",

        url:
          siteUrl,
      },

      breadcrumb: {
        "@id":
          `${pageUrl}#breadcrumb`,
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
            __html:
              JSON.stringify(
                jsonLd
              ),
          }}
        />

        <GuideArticlePage
          title="BOMBANANA Levels & Walkthrough: All 30 Campaign Levels"
          description="See the full Campaign structure, where each major module first appears, what changes at each progression breakpoint, and when a weak module is worth practicing before the next level."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
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