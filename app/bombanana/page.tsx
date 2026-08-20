import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import BombananaContent from "@/data/bombanana/bombanana.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-tutorial-book.webp`,
  `${siteUrl}/images/bombanana/bombanana-wire-module-led.webp`,
  `${siteUrl}/images/bombanana/bombanana-numpad-math-module.webp`,
  `${siteUrl}/images/bombanana/bombanana-switch-module.webp`,
];

const toc = [
  {
    id: "manual-quick-reference",
    label: "Manual quick reference",
  },
  {
    id: "how-many-levels",
    label: "How many levels?",
  },
  {
    id: "how-to-play",
    label: "How to play",
  },
  {
    id: "wires-manual",
    label: "Wires manual",
  },
  {
    id: "direction-manual",
    label: "Direction / D-pad",
  },
  {
    id: "calculation-manual",
    label: "Calculation / numpad",
  },
  {
    id: "switch-manual",
    label: "Switch module",
  },
  {
    id: "levels-1-7",
    label: "Levels 1–7",
  },
  {
    id: "best-module-order",
    label: "Best module order",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [];

export const metadata: Metadata = {
  title: "BOMBANANA Manual & Guide: Modules, Levels & Solutions",
  description:
    "BOMBANANA manual and guide for wires, D-pad, numpad math, switch modules, all 7 current levels, role communication, and puzzle solutions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "BOMBANANA Manual & Guide: Modules, Levels & Solutions",
    description:
      "Use this BOMBANANA manual for wires, Direction and Braille, numpad math, switch rules, all 7 current levels, communication, and puzzle solutions.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA manual showing bomb modules, roles, Braille, and puzzle instructions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOMBANANA Manual & Guide: Modules, Levels & Solutions",
    description:
      "BOMBANANA manual for wires, D-pad, numpad math, switches, all 7 current levels, role communication, and puzzle solutions.",
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
      headline: "BOMBANANA Manual & Guide: Modules, Levels & Solutions",
      description:
        "A player-focused BOMBANANA manual and guide covering wires, Direction and Braille, calculation and numpad logic, odd and even answers, switch-panel rules, all seven current levels, role communication, module order, and common puzzle mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-08-20",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA manual",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA guide",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA levels",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA wires",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Direction module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA D-pad",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Braille",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA calculation module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA numpad",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA odd even answers",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA switch module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 5",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 7",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How many levels are in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The current playable version of BOMBANANA has 7 levels, with Level 7 as the current maximum.",
          },
        },
        {
          "@type": "Question",
          name: "Is Level 5 the final BOMBANANA level?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Level 5 introduces the switch panel as a major new mechanic, but the current progression continues through Levels 6 and 7.",
          },
        },
        {
          "@type": "Question",
          name: "What should I call out first for every BOMBANANA module?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the module name and position. Then give only the state that module needs: wire count and LED for Wires, LED and Braille for Direction, equation result plus LED and odd or even for Numpad, or the full light order and four numbers for Switches.",
          },
        },
        {
          "@type": "Question",
          name:
            "Why does the BOMBANANA numpad need another number after I solve the equation?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The calculation module is two-stage. Enter the raw equation result first, then use the LED color and odd or even classification to determine the final single-digit key.",
          },
        },
        {
          "@type": "Question",
          name: "Why do BOMBANANA switch answers change between runs?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The switch panel does not use one universal color-to-position rule. The light order selects the rule family, while the four numbers determine which conditions apply in that setup.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if a BOMBANANA switch answer is wrong?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not immediately press Enter again. Re-read the complete light order and all four numbers, identify which physical switch needs to change, correct it, and then confirm the full panel before pressing Enter.",
          },
        },
      ],
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
          title="BOMBANANA Manual & Guide"
          description="Use this BOMBANANA manual to solve wires, Direction and Braille, numpad math, switch modules, all seven current levels, and the communication mistakes that cost runs."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="August 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="BOMBANANA"
          heading="Looking for another game after BOMBANANA?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}