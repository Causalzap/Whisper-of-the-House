import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaModuleSolverContent from "@/data/bombanana/module-solver.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana/module-solver`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-modules-braille-stage-indicator.webp`,
  `${siteUrl}/images/bombanana/bombanana-cable-module-manual.webp`,
  `${siteUrl}/images/bombanana/bombanana-direction-module-manual.webp`,
  `${siteUrl}/images/bombanana/bombanana-calculator-module-manual.webp`,
];

const toc = [
  {
    id: "which-module",
    label: "Pick the matching module",
  },
  {
    id: "cable",
    label: "Cable / Wire inputs",
  },
  {
    id: "direction",
    label: "Direction inputs",
  },
  {
    id: "calculator",
    label: "Calculator's two stages",
  },
  {
    id: "chaos",
    label: "When Chaos interrupts",
  },
  {
    id: "stale-answer",
    label: "When an answer expires",
  },
  {
    id: "bad-input",
    label: "Check an impossible result",
  },
  {
    id: "communication",
    label: "When the solver is not the problem",
  },
  {
    id: "manual",
    label: "Modules that need another method",
  },
  {
    id: "during-run",
    label: "Use the solver under the timer",
  },
];

const relatedLinks = [
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
    label: "BOMBANANA Roles & Communication Guide",
  },
  {
    href: "/bombanana/chaos",
    label: "BOMBANANA Chaos Guide",
  },
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Manual & Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Module Solver: Wire, Direction & Calculator",

  description:
    "Enter the BOMBANANA Wire, Direction, or Calculator state you see now, get the next input, and recheck the panel before using another answer.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "BOMBANANA Module Solver: Wire, Direction & Calculator",

    description:
      "Solve the current Wire, Direction, or Calculator state, use the result once, then read the bomb again before the next input.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA manual showing module information, Braille, and the stage indicator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BOMBANANA Module Solver: Wire, Direction & Calculator",

    description:
      "Enter the live module state, get the next action, and avoid carrying an old answer into a new BOMBANANA stage.",

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
          name: "BOMBANANA Module Solver",
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

      headline: "BOMBANANA Module Solver: Wire, Direction and Calculator",

      description:
        "A BOMBANANA module solver for Cable or Wire, Direction, and Calculator. It accepts the current visible module state, returns the next physical input, separates Calculator's arithmetic and LED stages, checks Wire count and left-to-right order, handles Direction light and Braille combinations, explains when a result becomes stale after the panel advances, and shows when a communication or Chaos problem should be handled before another lookup.",

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
          name: "BOMBANANA Module Solver",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Cable Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Wire Module",
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
          name: "BOMBANANA Braille",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "BOMBANANA Chaos Modules",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Symbol Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Piano Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Soundboard Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Morse Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Maze Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Monkey-Says Module",
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
          title="BOMBANANA Solver: Enter the State, Get the Next Input"
          description="I use this when the module is already identified and the current state is clear: enter Wire, Direction, or Calculator, take the answer once, then look back at the bomb before the next move."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaModuleSolverContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}