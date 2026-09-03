import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaSymbolContent from "@/data/bombanana/symbol.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/symbol`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-symbol-module.webp`,
  `${siteUrl}/images/bombanana/bombanana-symbol-module-manual.webp`,
];


const toc = [
  {
    id: "find-sounding-symbol",
    label: "Find the sounding symbol",
  },
  {
    id: "why-first-attempts-fail",
    label: "Why first attempts fail",
  },
  {
    id: "four-stages",
    label: "The four stages",
  },
  {
    id: "clean-run",
    label: "A clean Symbol solve",
  },
  {
    id: "name-the-shapes",
    label: "Name shapes consistently",
  },
  {
    id: "similar-symbols",
    label: "Similar symbol traps",
  },
  {
    id: "when-not-to-press",
    label: "When not to press",
  },
  {
    id: "after-wrong-input",
    label: "Reset after a mistake",
  },
  {
    id: "level-8-practice",
    label: "Practice on Level 8",
  },
  {
    id: "symbol-or-communication",
    label: "Rule or relay problem?",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/piano",
    label: "BOMBANANA Piano Guide",
  },
  {
    href: "/bombanana/soundboard",
    label: "BOMBANANA Soundboard Guide",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles & Communication Guide",
  },
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana/chaos",
    label: "BOMBANANA Chaos Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Symbol Guide: Sound, Stages & Buttons",

  description:
    "Find the sounding symbol, use the current stage to choose the right button, avoid shape mix-ups, and know when to replay Level 8.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Symbol Guide: Sound, Stages & Buttons",

    description:
      "Find the active sounding shape, keep the current stage straight, and turn each Symbol lookup into one confirmed color-button input.",

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
          "BOMBANANA Symbol Module with selectable shapes and colored answer buttons.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Symbol Guide: Sound, Stages & Buttons",

    description:
      "Use the sounding symbol and current stage to choose the correct BOMBANANA Symbol button.",

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
            "BOMBANANA Symbol Guide",

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
        "BOMBANANA Symbol Module Guide: Sound, Stages and Buttons",

      description:
        "A player-focused BOMBANANA Symbol Module guide covering how to identify the sounding shape, preserve a stable symbol name, use the current stage for the color-button answer, avoid look-alike symbol mistakes, recover after a bad input, and use Level 8 as the first fixed practice checkpoint.",

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
            "BOMBANANA Symbol Module",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA sounding symbol",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Symbol stages",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Symbol buttons",
        },
      ],

      mentions: [
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 8",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 10",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 11",
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
          title="BOMBANANA Symbol Module Guide"
          description="Find the shape that is actually producing sound, keep the stage current, and turn one clear symbol description into the correct color-button input."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaSymbolContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}