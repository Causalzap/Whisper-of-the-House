import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Chapter6FogdenGameContent from "@/data/neverness-to-everness/chapter-6-fogden-game-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl =
  `${siteUrl}/neverness-to-everness/chapter-6-fogden-game-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-fogden-building.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-fogden-drawing-clue.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-elevator-entrance.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-right-corridor-entrance.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-shackled-past-fog.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-helm-of-theseus.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-fog-coffin-colossus.webp`,
];

const toc = [
  {
    id: "start-chapter-6",
    label: "Start Chapter 6",
  },
  {
    id: "abandoned-building",
    label: "Abandoned building",
  },
  {
    id: "right-corridor",
    label: "Right corridor entrance",
  },
  {
    id: "fogden-rules",
    label: "10 Lumen Circles",
  },
  {
    id: "daffodil-route",
    label: "Daffodil route",
  },
  {
    id: "shackled-past",
    label: "Shackled Past",
  },
  {
    id: "helm-of-theseus",
    label: "Helm of Theseus",
  },
  {
    id: "linko-nitsa-route",
    label: "Linko and Nitsa route",
  },
  {
    id: "eternal-present",
    label: "Eternal Present",
  },
  {
    id: "future-route",
    label: "Future route",
  },
  {
    id: "final-confrontation",
    label: "Final confrontation",
  },
  {
    id: "finish-chapter-6",
    label: "Finish Chapter 6",
  },
  {
    id: "after-chapter-6",
    label: "After Fogden Game",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [
  {
    href: "/neverness-to-everness/duskmoor-100-percent-guide",
    label: "Duskmoor 100% Exploration Guide",
  },
];

export const metadata: Metadata = {
  title: "NTE Chapter 6 Fogden Game Walkthrough & Puzzle Guide",
  description:
    "Clear NTE Chapter 6 Fogden Game: solve the TV puzzle, find the right corridor entrance, collect 10 Lumen Circles, and finish the Bureau report.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "NTE Chapter 6 Fogden Game Walkthrough & Puzzle Guide",
    description:
      "Follow Chapter 6 through the abandoned building, Fogden routes, Shackled Past, Helm of Theseus, final battle, and Bureau report.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Abandoned building reached during Chapter 6 Fogden Game in Neverness to Everness.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NTE Chapter 6 Fogden Game Walkthrough & Puzzle Guide",
    description:
      "Solve the Chapter 6 building puzzle, Fogden routes, 10 Lumen Circles, Shackled Past, final battle, and Bureau report.",
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
          name: "Neverness to Everness",
          item: `${siteUrl}/neverness-to-everness`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chapter 6: Fogden Game Walkthrough",
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
      headline: "NTE Chapter 6 Fogden Game Walkthrough & Puzzle Guide",
      description:
        "A player-focused Neverness to Everness Chapter 6 walkthrough covering the Fogden Game unlock requirement, abandoned-building TV puzzle, disappearing right-corridor entrance, 10 Lumen Circles, Daffodil and Linko routes, Shackled Past, Helm of Theseus, Madam T confrontation, Fog Coffin Colossus, and the Bureau report required to finish the chapter.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      articleSection: "Neverness to Everness Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Neverness to Everness",
        },
        {
          "@type": "Thing",
          name: "Chapter 6: Fogden Game",
        },
        {
          "@type": "Thing",
          name: "Fighting with a Dragon",
        },
        {
          "@type": "Thing",
          name: "Fogden",
        },
        {
          "@type": "Thing",
          name: "Shackled Past",
        },
        {
          "@type": "Thing",
          name: "Helm of Theseus",
        },
        {
          "@type": "Thing",
          name: "Fogden-Wright",
        },
        {
          "@type": "Thing",
          name: "Madam T",
        },
        {
          "@type": "Thing",
          name: "Fog Coffin Colossus",
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
          title="Chapter 6: Fogden Game Walkthrough"
          description="Get through the abandoned building, Fogden routes, Shackled Past, Helm of Theseus, final battle, and Bureau report without unnecessary backtracking."
          gameTitle="Neverness to Everness"
          gameHref="/neverness-to-everness"
          updatedAt="September 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Chapter6FogdenGameContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}