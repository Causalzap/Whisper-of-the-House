import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaDirectionContent from "@/data/bombanana/direction.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/direction`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-direction-green-light-braille-two.webp`,
  `${siteUrl}/images/bombanana/bombanana-direction-module-manual.webp`,
];


const toc = [
  {
    id: "two-inputs",
    label: "LED + Braille",
  },
  {
    id: "direction-table",
    label: "Direction answer table",
  },
  {
    id: "number-patterns",
    label: "Braille number patterns",
  },
  {
    id: "state-changes",
    label: "Re-read after each press",
  },
  {
    id: "left-right",
    label: "Left & right perspective",
  },
  {
    id: "wrong-answer",
    label: "Fix a wrong answer",
  },
  {
    id: "level-four",
    label: "Practice on Level 4",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
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
    href: "/bombanana/calculator",
    label: "BOMBANANA Calculator Guide",
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
    "BOMBANANA Direction Guide: Braille & LED Answers",

  description:
    "Solve BOMBANANA Direction with the LED and Braille number, use all 36 answer states, avoid stale inputs, and fix left/right mistakes.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Direction Guide: Braille & LED Answers",

    description:
      "Read the active LED and Braille number together, get the correct direction, press once, then re-read the BOMBANANA Direction panel.",

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
          "BOMBANANA Direction module showing four arrow buttons and Braille number 2 during a live bomb.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Direction Guide: Braille & LED Answers",

    description:
      "Use the current LED and Braille number to solve Direction, then re-read the panel after every successful press.",

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
            "BOMBANANA Direction Guide",

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
        "BOMBANANA Direction Guide: Braille, LED and Arrow Answers",

      description:
        "A player-focused BOMBANANA Direction Module guide covering all 36 LED and Braille states, the five repeating number patterns, Braille numbers 1 through 9, state changes after each press, left-right perspective mistakes, troubleshooting, and the Level 4 practice checkpoint.",

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
            "BOMBANANA Direction Module",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Direction answers",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Braille",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Direction LED",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA arrow puzzle",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 4",
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
          title="BOMBANANA Direction Module Guide"
          description="Read the active LED and Braille number together, use the matching direction, and re-check the panel after every press so an old answer never leaks into the next state."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaDirectionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}