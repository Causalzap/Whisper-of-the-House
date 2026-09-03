import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaWireContent from "@/data/bombanana/wire.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/wire`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-cable-module-manual.webp`,
  `${siteUrl}/images/bombanana/bombanana-cable-module-three-cables.webp`,
];


const toc = [
  {
    id: "read-the-board",
    label: "Cable rule table",
  },
  {
    id: "translate-the-answer",
    label: "Color to position",
  },
  {
    id: "three-cable-example",
    label: "3-cable example",
  },
  {
    id: "four-cables",
    label: "4-cable rules",
  },
  {
    id: "callout-language",
    label: "Cable callouts",
  },
  {
    id: "what-not-to-send",
    label: "Incomplete calls",
  },
  {
    id: "bad-read",
    label: "Wrong-looking result",
  },
  {
    id: "roles",
    label: "When the relay fails",
  },
  {
    id: "when-ready",
    label: "When Cable is mastered",
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
    href: "/bombanana/calculator",
    label: "BOMBANANA Calculator Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Wire & Cable Guide: Which Cable to Cut",

  description:
    "Use the BOMBANANA Cable/Wire table to match cable count and LED color, find the target cable, convert it to a left-to-right position, and cut safely.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Wire & Cable Guide: Which Cable to Cut",

    description:
      "Match the Cable Module count and active light, find the target color, then turn that answer into the physical cable position Blind needs.",

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
          "BOMBANANA Cable Module manual showing the three-cable and four-cable rule table.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Wire & Cable Guide: Which Cable to Cut",

    description:
      "Match cable count and LED color, get the target cable, then convert that result into a physical left-to-right position.",

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
            "BOMBANANA Wire & Cable Guide",

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
        "BOMBANANA Wire & Cable Guide: Rules, Position and Which Cable to Cut",

      description:
        "A player-focused BOMBANANA Cable Module guide covering the complete three-cable and four-cable LED mappings, how to identify the target cable color, translate that color into a physical left-to-right position, diagnose bad input, and separate Cable-rule failures from communication failures.",

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
            "BOMBANANA Cable Module",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA wire guide",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA cable rules",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA which wire to cut",
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
          title="BOMBANANA Cable / Wire Guide: Which Cable Do I Cut?"
          description="Count the cables, read the active light, find the target color, then turn that answer into the physical cable position Blind can actually cut."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaWireContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}