import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaRolesContent from "@/data/bombanana/roles.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/roles`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-role-selection-lobby.webp`,
  `${siteUrl}/images/bombanana/bombanana-roles-blind-deaf-mute.webp`,
  `${siteUrl}/images/bombanana/bombanana-manual-layout.webp`,
];


const toc = [
  {
    id: "choose-roles",
    label: "How to choose roles",
  },
  {
    id: "blind",
    label: "Blind",
  },
  {
    id: "deaf",
    label: "Deaf",
  },
  {
    id: "mute",
    label: "Mute",
  },
  {
    id: "signals",
    label: "Team signals",
  },
  {
    id: "left-right",
    label: "Left & right perspective",
  },
  {
    id: "module-relay",
    label: "Module callouts",
  },
  {
    id: "stale-state",
    label: "Stale module states",
  },
  {
    id: "swap-roles",
    label: "When to swap roles",
  },
  {
    id: "failed-run",
    label: "Diagnose a failed run",
  },
  {
    id: "before-start",
    label: "Before the timer starts",
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
    href: "/bombanana/levels",
    label: "BOMBANANA Levels & Walkthrough",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Roles Guide: Blind, Deaf & Mute Communication",

  description:
    "Choose Blind, Deaf, and Mute roles in BOMBANANA, fix broken relays, set clear signals, and avoid left/right, mixed-state, and stale-answer mistakes.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Roles Guide: Blind, Deaf & Mute Communication",

    description:
      "Build a cleaner BOMBANANA information chain between Blind, Deaf, and Mute with practical signals, fixed perspectives, module packets, and role swaps.",

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
          "BOMBANANA lobby where players choose Blind, Deaf, and Mute roles.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Roles Guide: Blind, Deaf & Mute Communication",

    description:
      "Choose the right BOMBANANA roles, keep module states separate, use consistent signals, and fix the relay when correct answers still fail.",

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
            "BOMBANANA Roles Guide",

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
        "BOMBANANA Roles Guide: Blind, Deaf & Mute Communication",

      description:
        "A player-focused BOMBANANA roles guide for choosing Blind, Deaf, and Mute, translating manual answers into physical actions, keeping module states separate, building a compact signal vocabulary, fixing left-right perspective problems, deciding when to reset a callout, swapping roles after repeated failures, and diagnosing where information was lost.",

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
            "BOMBANANA Blind role",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Deaf role",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Mute role",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA communication",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA role signals",
        },

        {
          "@type":
            "Thing",

          name:
            "BOMBANANA team roles",
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
          title="BOMBANANA Blind, Deaf & Mute Roles Guide"
          description="Choose each role by the job it actually has to do, keep one module state moving through the team at a time, and fix the exact link where correct information keeps getting lost."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaRolesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}