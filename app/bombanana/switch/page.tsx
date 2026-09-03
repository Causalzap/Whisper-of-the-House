import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaSwitchContent from "@/data/bombanana/switch.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/switch`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-switch-module.webp`,
];


const toc = [
  {
    id: "whole-state",
    label: "Read the whole state",
  },
  {
    id: "order-matters",
    label: "Why light order matters",
  },
  {
    id: "numbers-change-answer",
    label: "Why the numbers matter",
  },
  {
    id: "read-packet",
    label: "Send all eight values",
  },
  {
    id: "set-switches",
    label: "Set switches before Enter",
  },
  {
    id: "when-to-reread",
    label: "When to reread",
  },
  {
    id: "real-wall",
    label: "The real Switch wall",
  },
  {
    id: "two-resets",
    label: "Repeat vs. full reset",
  },
  {
    id: "level-16",
    label: "Practice on Level 16",
  },
  {
    id: "push-or-return",
    label: "Push or return",
  },
];


const relatedLinks = [
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
    href: "/bombanana/soundboard",
    label: "BOMBANANA Soundboard Guide",
  },
  {
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Switch Guide: Lights, Numbers & Enter",

  description:
    "Read all four lights and numbers, resolve the four switch positions, confirm the full row before Enter, and practice Switch from Level 16.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Switch Guide: Lights, Numbers & Enter",

    description:
      "Keep the complete four-light and four-number state together, set every Switch position, and confirm the row before pressing Enter.",

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
          "BOMBANANA Switch Module with four colored lights, four physical switches, and the Enter control.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Switch Guide: Lights, Numbers & Enter",

    description:
      "Read the complete Switch state, resolve all four positions, then confirm the row before Enter.",

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
            "BOMBANANA Switch Guide",

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
        "BOMBANANA Switch Module Guide: Lights, Numbers and Enter",

      description:
        "A player-focused BOMBANANA Switch Module guide covering how to preserve the complete four-light and four-number state, why light order and number changes can alter the required Up and Down pattern, how to bind answers to the four physical switches, when to reread the full state, when Enter is safe, and how to use Levels 16 through 20 as Switch practice checkpoints.",

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
            "BOMBANANA Switch Module",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Switch lights",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Switch numbers",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Switch positions",
        },
      ],

      mentions: [
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 16",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 17",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 20",
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
          title="BOMBANANA Switch Module Guide"
          description="Keep all four light colors and all four numbers attached to one current state, resolve the physical switch row, and press Enter only after every position is confirmed."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaSwitchContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}