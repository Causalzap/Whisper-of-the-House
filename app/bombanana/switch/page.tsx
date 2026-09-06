import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BombananaSwitchContent from "@/data/bombanana/switch.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana/switch`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-switch-module.webp`,
  `${siteUrl}/images/bombanana/bombanana-switch-manual-table.webp`,
];

const toc = [
  {
    id: "whole-state",
    label: "Why the first two attempts failed",
  },
  {
    id: "order-matters",
    label: "Keep colors and numbers in position",
  },
  {
    id: "numbers-change-answer",
    label: "Why the numbers change the answer",
  },
  {
    id: "read-packet",
    label: "Read all eight values",
  },
  {
    id: "set-switches",
    label: "Set all four before Enter",
  },
  {
    id: "when-to-reread",
    label: "When to reread the board",
  },
  {
    id: "real-wall",
    label: "Where Switch runs actually break",
  },
  {
    id: "two-resets",
    label: "Repeat one or restart everything",
  },
  {
    id: "level-16",
    label: "Use Level 16 to learn Switch",
  },
  {
    id: "push-or-return",
    label: "When to leave Level 16",
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
    href: "/bombanana/module-solver",
    label: "BOMBANANA Module Solver",
  },
  {
    href: "/bombanana",
    label: "BOMBANANA Manual & Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Switch Guide: 4 Lights, 4 Numbers & Enter",

  description:
    "Read all 4 lights and 4 numbers in order, set every BOMBANANA Switch position, know when to reread, and press Enter only after the row is confirmed.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "BOMBANANA Switch Guide: 4 Lights, 4 Numbers & Enter",

    description:
      "Keep all eight Switch values in position, turn them into four Up or Down settings, and know when one uncertain slot means the board needs another read.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA Switch module with four colored positions and the Enter control",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BOMBANANA Switch Guide: 4 Lights, 4 Numbers & Enter",

    description:
      "Lock the four colors and four numbers into position, set every switch, and keep your hand off Enter while any slot is uncertain.",

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
          name: "BOMBANANA Switch Guide",
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
        "BOMBANANA Switch Guide: Four Lights, Four Numbers and Enter",

      description:
        "A player-focused BOMBANANA Switch guide for reading the four light colors and four numbers as one ordered board, keeping each number attached to its physical position, converting the current state into four Up or Down switch settings, deciding when a partial mistake requires one repeat or a full reread, avoiding premature Enter submissions, and using Levels 16 and 17 to build a reliable Switch solve before carrying it into more crowded Campaign setups such as Level 20.",

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
          name: "BOMBANANA Switch Module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Switch lights",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Switch numbers",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Switch positions",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Switch Enter",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "BOMBANANA Level 16",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 17",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Level 20",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Pressure",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Alarm",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA Slider Chaos",
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
          title="BOMBANANA Switch: Get All 8 Values Right Before Enter"
          description="I lock the four colors and four numbers to their positions first, set the switches left to right, and only touch Enter when every slot is settled."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          updatedAt="September 6, 2026"
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