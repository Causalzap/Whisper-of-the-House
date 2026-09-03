import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaSoundboardContent from "@/data/bombanana/soundboard.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/soundboard`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-soundboard-red-braille-four.webp`,
  `${siteUrl}/images/bombanana/bombanana-soundboard-module-manual.webp`,
];


const toc = [
  {
    id: "find-the-sound",
    label: "Find the sounding button",
  },
  {
    id: "two-part-solve",
    label: "Search, then resolve",
  },
  {
    id: "position-key",
    label: "3×3 position key",
  },
  {
    id: "target-versus-answer",
    label: "Target vs. answer pattern",
  },
  {
    id: "red-four",
    label: "Red + Braille 4",
  },
  {
    id: "already-pressed",
    label: "Track pressed cells",
  },
  {
    id: "misclicks",
    label: "Avoid misclicks",
  },
  {
    id: "too-much-memory",
    label: "Reduce memory load",
  },
  {
    id: "relay",
    label: "Relay the grid pattern",
  },
  {
    id: "level-eleven",
    label: "Practice on Level 11",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/symbol",
    label: "BOMBANANA Symbol Guide",
  },
  {
    href: "/bombanana/piano",
    label: "BOMBANANA Piano Guide",
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
    label: "BOMBANANA Guide",
  },
];


export const metadata: Metadata = {
  title:
    "BOMBANANA Soundboard Guide: Braille, Colors & Grid",

  description:
    "Find the sounding button, match its Braille and color to the 3x3 pattern, track pressed cells, and practice Soundboard on Level 11.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Soundboard Guide: Braille, Colors & Grid",

    description:
      "Find the Soundboard target by sound, use its Braille number and color, then press the correct 3x3 grid positions without losing board state.",

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
          "BOMBANANA Soundboard showing the 3 by 3 button grid during a Braille 4 state.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Soundboard Guide: Braille, Colors & Grid",

    description:
      "Find the sounding button, resolve its Braille and color, and press the correct Soundboard grid positions.",

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
            "BOMBANANA Soundboard Guide",

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
        "BOMBANANA Soundboard Guide: Braille, Colors and Grid Patterns",

      description:
        "A player-focused BOMBANANA Soundboard guide covering how to locate the sounding button, combine its Braille number and color, read the 3-by-3 answer pattern, distinguish the target button from the required inputs, track already-pressed cells, recover from grid mistakes, and use Level 11 as the first fixed practice checkpoint.",

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
            "BOMBANANA Soundboard Module",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Soundboard Braille",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Soundboard grid",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Soundboard colors",
        },
      ],

      mentions: [
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 11",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 12",
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
          title="BOMBANANA Soundboard Module Guide"
          description="Find the button that makes the sound first, convert its Braille number and color into the correct grid pattern, and keep track of what has already been pressed."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaSoundboardContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}