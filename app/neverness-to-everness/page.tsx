import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NevernessToEvernessContent from "@/data/neverness-to-everness/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/neverness-to-everness`;

const imageUrls = [
  `${siteUrl}/images/neverness-to-everness/nte-chapter-6-fogden-building.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-tower-start.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-infinity-mode.webp`,
];

const toc = [
  {
    id: "where-to-go",
    label: "What to do next",
  },
  {
    id: "chapter-order",
    label: "Chapter 7 before Chapter 6",
  },
  {
    id: "after-fogden-game",
    label: "After Fogden Game",
  },
  {
    id: "duskmoor-commissions",
    label: "Duskmoor commissions",
  },
  {
    id: "what-can-wait",
    label: "What can wait",
  },
  {
    id: "current-route",
    label: "Version 1.3 progression route",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [
  {
    href: "/neverness-to-everness/chapter-6-fogden-game-walkthrough",
    label: "Chapter 6: Fogden Game Walkthrough",
  },
  {
    href: "/neverness-to-everness/duskmoor-100-percent-guide",
    label: "Duskmoor 100% Exploration Guide",
  },
  {
    href: "/neverness-to-everness/duskmoor-anomaly-commissions",
    label: "Duskmoor Anomaly Commissions",
  },
  {
    href: "/neverness-to-everness/gauntlet-of-valor-guide",
    label: "Gauntlet of Valor Guide",
  },
];

export const metadata: Metadata = {
  title: "Neverness to Everness 1.3 Guide: Story, Duskmoor & Gauntlet",
  description:
    "Choose what to do next in NTE 1.3: clear Chapter 6, finish Duskmoor, solve Anomaly Commissions, or push Gauntlet of Valor through Floor 99.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Neverness to Everness 1.3 Guide: Story, Duskmoor & Gauntlet",
    description:
      "Find your next NTE 1.3 objective across Chapter 6, Duskmoor exploration, Anomaly Commissions, Gauntlet of Valor, and Infinity.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Abandoned building reached during Neverness to Everness Chapter 6 Fogden Game.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neverness to Everness 1.3 Guide: Story, Duskmoor & Gauntlet",
    description:
      "Decide whether your next NTE 1.3 goal is Chapter 6, Duskmoor completion, an Anomaly Commission, or Gauntlet of Valor.",
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
          name: "Neverness to Everness Guide",
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
        "Neverness to Everness 1.3 Guide: Story, Duskmoor & Gauntlet",
      description:
        "A player-focused Neverness to Everness Version 1.3 progression hub for deciding what to do next: unlock Chapter 6 after Fighting with a Dragon, finish Fogden Game, move into Duskmoor exploration or its six Anomaly Commissions, and choose Gauntlet of Valor when combat progression becomes the goal.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Neverness to Everness",
        },
        {
          "@type": "Thing",
          name: "Neverness to Everness Version 1.3",
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
          name: "Duskmoor",
        },
        {
          "@type": "Thing",
          name: "Duskmoor Anomaly Commissions",
        },
        {
          "@type": "Thing",
          name: "Gauntlet of Valor",
        },
        {
          "@type": "Thing",
          name: "999 Nights",
        },
        {
          "@type": "Thing",
          name: "Infinity",
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
          title="Neverness to Everness 1.3: What Should You Do Next?"
          description="Use your current progress to choose the next route: finish Chapter 6, clear Duskmoor, solve a stuck Anomaly Commission, or move into Gauntlet of Valor."
          gameTitle="Neverness to Everness"
          gameHref="/neverness-to-everness"
          updatedAt="September 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NevernessToEvernessContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}