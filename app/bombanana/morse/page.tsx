import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaMorseContent from "@/data/bombanana/morse.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana/morse`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-morse-four-displays.webp`,
  `${siteUrl}/images/bombanana/bombanana-morse-manual-table.webp`,
];

const toc = [
  {
    id: "slot-is-position",
    label: "What the green slot means",
  },
  {
    id: "digit-table",
    label: "Morse numbers 0–9",
  },
  {
    id: "five-signals",
    label: "Why all 5 signals matter",
  },
  {
    id: "position-before-pattern",
    label: "Call the position first",
  },
  {
    id: "8145-run",
    label: "How the 8145 solve came together",
  },
  {
    id: "wait-for-loop",
    label: "When to wait for another loop",
  },
  {
    id: "keep-confirmed",
    label: "Reread one slot or rebuild four",
  },
  {
    id: "under-pressure",
    label: "Keep progress through interruptions",
  },
  {
    id: "enter",
    label: "When to press Enter",
  },
  {
    id: "after-enter",
    label: "What to do after a failed submit",
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
    href: "/bombanana/switch",
    label: "BOMBANANA Switch Guide",
  },
  {
    href: "/bombanana/chaos",
    label: "BOMBANANA Chaos Guide",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Manual & Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Morse Code Guide: 4 Displays, Digits & Enter",

  description:
    "Read the active slot, decode its five-signal Morse pattern, keep all 4 digits in position, and press Enter only after the full BOMBANANA code is confirmed.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "BOMBANANA Morse Code Guide: 4 Displays, Digits & Enter",

    description:
      "Match each five-signal Morse pattern to the slot that is flashing, preserve all four positions, and submit only after the full code is settled.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "BOMBANANA Morse module on the bomb with four numbered input positions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BOMBANANA Morse Code Guide: 4 Displays, Digits & Enter",

    description:
      "Identify the active slot, hear all five Morse signals, convert the pattern to a digit, and keep every answer in the right position before Enter.",

    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "BreadcrumbList",

      "@id": `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "BOMBANANA Manual & Guide",
          item: `${siteUrl}/bombanana`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BOMBANANA Morse Code Guide",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Article",

      "@id": `${pageUrl}#article`,

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },

      headline:
        "BOMBANANA Morse Code Guide: Four Displays, Five-Signal Digits and Enter",

      description:
        "A BOMBANANA Morse Module walkthrough built around the four numbered input positions and the five-signal Morse numeral system. It explains how the green flash identifies which slot is active, why counting flashes produces the wrong kind of information, how the listening player and visible slot position combine into one digit, why incomplete patterns such as four dots or four dashes must wait for the fifth signal, how an 8145 solve was recovered after position confusion, when to wait for a pattern to loop again, how much of a partially solved code can still be trusted after an interruption, and what should be reread when Enter does not clear the module.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-06",

      articleSection: "BOMBANANA Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Morse Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Morse Code",
        },
        {
          "@type": "Thing",
          name: "Morse code numerals",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "BOMBANANA Morse display positions",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Morse Enter",
        },
        {
          "@type": "Thing",
          name: "Five-signal Morse numeral patterns",
        },
      ],

      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },

      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="BOMBANANA Morse Code: Match Every Signal to the Right Slot"
          description="The flashing position tells me where the next answer belongs. I listen for all five Morse signals, convert that pattern to a digit, keep the four slots intact, and leave Enter alone until the code is complete."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaMorseContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}