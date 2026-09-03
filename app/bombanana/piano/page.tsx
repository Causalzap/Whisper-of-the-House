import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaPianoContent from "@/data/bombanana/piano.mdx";


const siteUrl =
  "https://www.whisperofthehouse.com";

const pageUrl =
  `${siteUrl}/bombanana/piano`;


const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-piano-yellow-light.webp`,
  `${siteUrl}/images/bombanana/bombanana-piano-module-manual.webp`,
];


const toc = [
  {
    id: "read-the-state",
    label: "Read octave + light",
  },
  {
    id: "piano-table",
    label: "Piano answer table",
  },
  {
    id: "four-note-sequence",
    label: "Keep four notes together",
  },
  {
    id: "yellow-one",
    label: "Yellow + Braille 1",
  },
  {
    id: "wrong-note",
    label: "Diagnose a wrong note",
  },
  {
    id: "relay",
    label: "Relay the sequence",
  },
  {
    id: "level-nine",
    label: "Practice on Level 9",
  },
];


const relatedLinks = [
  {
    href: "/bombanana/symbol",
    label: "BOMBANANA Symbol Guide",
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
    "BOMBANANA Piano Guide: Braille, LED & Note Sequences",

  description:
    "Match the Braille octave and active light to a four-note sequence, play it in order, and fix Piano callouts before moving past Level 9.",

  alternates: {
    canonical:
      pageUrl,
  },

  openGraph: {
    title:
      "BOMBANANA Piano Guide: Braille, LED & Note Sequences",

    description:
      "Read the Piano Braille octave and active light together, find the four-note answer, and play the sequence without dropping its order.",

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
          "BOMBANANA Piano Module active with Braille and a colored light during a bomb.",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "BOMBANANA Piano Guide: Braille, LED & Note Sequences",

    description:
      "Match the Piano octave and light to the correct four-note BOMBANANA sequence.",

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
            "BOMBANANA Piano Guide",

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
        "BOMBANANA Piano Module Guide: Braille, LED and Note Sequences",

      description:
        "A player-focused BOMBANANA Piano Module guide covering how to combine the Braille octave and active light, read the complete note lookup, preserve a four-note sequence in order, troubleshoot wrong inputs and communication loss, and use Level 9 as the first fixed Piano practice point.",

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
            "BOMBANANA Piano Module",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Piano notes",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Piano Braille",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Piano light colors",
        },
      ],

      mentions: [
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 9",
        },
        {
          "@type":
            "Thing",

          name:
            "BOMBANANA Level 10",
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
          title="BOMBANANA Piano Module Guide"
          description="Read the Braille octave and active light as one state, keep the resulting four notes in order, and know whether a failure came from the lookup, the keyboard, or the relay."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaPianoContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}