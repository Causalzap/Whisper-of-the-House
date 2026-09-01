import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ModuleSolverContent from "@/data/bombanana/module-solver.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pagePath =
  "/bombanana/module-solver";

const pageUrl =
  `${siteUrl}${pagePath}`;

const hubUrl =
  `${siteUrl}/bombanana`;


const title =
  "BOMBANANA Module Solver: Wire, Arrow & Calculator";

const description =
  "Solve BOMBANANA Wire, Arrow, and Calculator modules with an interactive tool. Enter the current panel state and get the next action during a run.";


const socialImage =
  `${siteUrl}/images/bombanana/bombanana-wire-module-live-run.webp`;

  const toc = [
    {
      id: "quick-answer",
      label: "Quick Answer",
    },
    {
      id: "from-panel-state-to-button-press",
      label: "From panel state to button press",
    },
    {
      id: "what-i-check-before-the-input",
      label: "What I check before the input",
    },
    {
      id: "when-i-stop-and-read-the-panel-again",
      label: "When I stop and read the panel again",
    },
    {
      id: "when-i-need-the-manual-instead",
      label: "When I need the manual instead",
    },
  ];


const relatedLinks = [
  {
    href:
      "/bombanana",

    label:
      "BOMBANANA Manual & Guide",
  },
];


export const metadata: Metadata = {
  title,

  description,


  alternates: {
    canonical:
      pageUrl,
  },


  openGraph: {
    title,

    description,

    url:
      pageUrl,

    siteName:
      "Whisper of the House",

    type:
      "article",

    images: [
      {
        url:
          socialImage,

        width:
          556,

        height:
          518,

        alt:
          "BOMBANANA wire module during a live bomb run",
      },
    ],
  },


  twitter: {
    card:
      "summary_large_image",

    title,

    description,

    images: [
      socialImage,
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
            "BOMBANANA",

          item:
            hubUrl,
        },

        {
          "@type":
            "ListItem",

          position:
            3,

          name:
            "Module Solver",

          item:
            pageUrl,
        },
      ],
    },


    {
      "@type":
        "WebApplication",

      "@id":
        `${pageUrl}#solver`,

      name:
        "BOMBANANA Module Solver",

      url:
        pageUrl,

      description:
        "An interactive solver for BOMBANANA Wire, Arrow, and Calculator modules.",

      applicationCategory:
        "GameApplication",

      operatingSystem:
        "Any",

      browserRequirements:
        "Requires JavaScript",

      isAccessibleForFree:
        true,

      image:
        socialImage,

      featureList: [
        "BOMBANANA Wire module solver",
        "BOMBANANA Arrow and Direction module solver",
        "BOMBANANA Calculator module solver",
      ],

      about: {
        "@type":
          "VideoGame",

        name:
          "BOMBANANA",

        url:
          hubUrl,
      },

      isPartOf: {
        "@id":
          `${siteUrl}#website`,
      },
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
        title,

      description,

      image: [
        socialImage,
      ],

      datePublished:
        "2026-09-01",

      dateModified:
        "2026-09-01",

      inLanguage:
        "en",

      articleSection:
        "BOMBANANA Guides",

      about: [
        {
          "@type":
            "VideoGame",

          name:
            "BOMBANANA",

          url:
            hubUrl,
        },

        {
          "@id":
            `${pageUrl}#solver`,
        },
      ],

      mentions: [
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Wire module",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Arrow and Direction module",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Calculator module",
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


const serializedJsonLd =
  JSON.stringify(
    jsonLd
  ).replace(
    /</g,
    "\\u003c"
  );


export default function Page() {
  return (
    <>
      <Header />


      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              serializedJsonLd,
          }}
        />


        <GuideArticlePage
          title="BOMBANANA Module Solver"
          description="Enter the current Wire, Arrow, or Calculator state and get the next action without reopening the full manual."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ModuleSolverContent />
        </GuideArticlePage>
      </main>


      <Footer />
    </>
  );
}