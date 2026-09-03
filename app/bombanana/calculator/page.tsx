import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaCalculatorContent from "@/data/bombanana/calculator.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/calculator`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-calculator-module-manual.webp`,
  `${siteUrl}/images/bombanana/bombanana-calculator-red-led-after-result.webp`,
  `${siteUrl}/images/bombanana/bombanana-calculator-mistake-state.webp`,
];


const toc = [
  {
    id: "two-answers",
    label: "Raw result vs final key",
  },
  {
    id: "no-light",
    label: "Why there is no light",
  },
  {
    id: "manual",
    label: "Calculator answer table",
  },
  {
    id: "worked-solves",
    label: "Worked examples",
  },
  {
    id: "callout",
    label: "Raw and final callouts",
  },
  {
    id: "diagnose",
    label: "Diagnose a failed solve",
  },
  {
    id: "when-to-stop",
    label: "When to reread",
  },
  {
    id: "solver-or-manual",
    label: "When to use the solver",
  },
  {
    id: "move-on",
    label: "When Calculator is mastered",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles Guide",
  },
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana/wire",
    label: "BOMBANANA Cable / Wire Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Calculator Guide & Solver: LED Answers",

  description:
    "Solve BOMBANANA Calculator equations, find the final key from LED color and odd/even parity, handle the no-light stage, and avoid raw-result mistakes.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Calculator Guide & Solver: LED Answers",

    description:
      "Do the equation first, enter the raw result, then use the new LED and odd/even parity to find the final BOMBANANA Calculator key.",

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
          "BOMBANANA Calculator Module manual showing the LED and odd-even final-key table.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Calculator Guide & Solver: LED Answers",

    description:
      "Enter the equation result first, then use the new LED and odd/even parity to get the final Calculator key.",

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
            "BOMBANANA Calculator Guide",

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
        "BOMBANANA Calculator Guide & Solver: Equation, LED and Final Key",

      description:
        "A player-focused BOMBANANA Calculator guide covering the two-stage solve, the no-light first stage, raw arithmetic results, odd and even parity, the complete LED answer table, valid zero answers, shuffled keypad positions, worked examples, and recovery after a bad input.",

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
            "BOMBANANA Calculator Module",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Calculator solver",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Calculator LED answers",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA odd even Calculator",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA numpad",
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
          title="BOMBANANA Calculator Guide & Solver"
          description="Solve the equation first, enter the raw result, then use the new LED and odd/even parity to find the final key without mixing the two stages."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaCalculatorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}