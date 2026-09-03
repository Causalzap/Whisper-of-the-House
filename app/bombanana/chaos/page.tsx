import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaChaosContent from "@/data/bombanana/chaos.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/chaos`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-chaos-warning-control.webp`,
  `${siteUrl}/images/bombanana/bombanana-chaos-modules.webp`,
];


const toc = [
  {
    id: "why-chaos-is-different",
    label: "Why Chaos is different",
  },
  {
    id: "campaign-ramp",
    label: "How Chaos ramps up",
  },
  {
    id: "warning-control",
    label: "When danger changes priority",
  },
  {
    id: "attention-budget",
    label: "The attention budget",
  },
  {
    id: "who-watches",
    label: "Who should watch Chaos",
  },
  {
    id: "when-to-interrupt",
    label: "When to interrupt a solve",
  },
  {
    id: "resume-cleanly",
    label: "How to resume safely",
  },
  {
    id: "practice-points",
    label: "Best practice levels",
  },
  {
    id: "push-or-replay",
    label: "Push or replay",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana/roles",
    label: "BOMBANANA Roles & Communication Guide",
  },
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana/soundboard",
    label: "BOMBANANA Soundboard Guide",
  },
  {
    href: "/bombanana/piano",
    label: "BOMBANANA Piano Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",

  description:
    "Manage BOMBANANA Chaos modules, prioritize Slider, Pressure and Alarm, survive stacked hazards, and know when to interrupt or resume a solve.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",

    description:
      "Learn when BOMBANANA Chaos should interrupt a defusal, how to preserve the unfinished module state, and how stacked hazards change later Campaign levels.",

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
          "BOMBANANA bomb with a warning-marked Chaos control active beside the defusal modules.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Chaos Guide: Slider, Pressure & Alarm",

    description:
      "Control BOMBANANA Chaos without losing the defusal state, from the first Slider hazard to stacked late-game Pressure and Alarm setups.",

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
            "BOMBANANA Chaos Guide",

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
        "BOMBANANA Chaos Guide: Slider, Pressure and Alarm",

      description:
        "A player-focused BOMBANANA Chaos guide covering Slider, Pressure and Alarm hazards, why Chaos must be managed while normal modules are being solved, how danger changes module priority, how to preserve an interrupted defusal state, how stacked Chaos affects the attention budget, and when to practice on Levels 4, 12 and 26 before pushing deeper into the Campaign.",

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
            "BOMBANANA Chaos Modules",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Slider Chaos",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Pressure Chaos",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Alarm Chaos",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Chaos management",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Campaign",
        },
      ],

      mentions: [
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 4",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 12",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 26",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 29",
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
          title="BOMBANANA Chaos Module Guide"
          description="Learn when a Chaos hazard should interrupt the current solve, how to stabilize it without losing the unfinished module state, and when stacked Slider, Pressure, and Alarm setups mean the team should go back and practice."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaChaosContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}