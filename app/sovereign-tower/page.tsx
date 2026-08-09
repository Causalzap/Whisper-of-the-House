import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import SovereignTowerContent from "@/data/sovereign-tower/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sovereign-tower`;

const metadataTitle =
  "Sovereign Tower Guide: Walkthrough, Rewind, Knights & Routes";

const metadataDescription =
  "Sovereign Tower guide hub for Act routes, Demon Power, Knight planning, Gwendan, Wolf, South Bay, King Slayer, Golden Key, and key decisions.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-round-table-quest-requirements.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-1-groveshire-gavault-choice.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-act-2-round-table-eight-slots.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-thirteen-cycle-warning.webp`,
];

const toc = [
  {
    id: "sovereign-tower-guides",
    label: "Sovereign Tower guides",
  },
  {
    id: "how-progression-works",
    label: "How progression works",
  },
  {
    id: "stats-and-attributes",
    label: "Stats & attributes",
  },
  {
    id: "preferences",
    label: "Knight preferences",
  },
  {
    id: "factions",
    label: "Faction satisfaction",
  },
  {
    id: "when-to-buy",
    label: "When to buy equipment",
  },
  {
    id: "when-to-repair",
    label: "When to repair",
  },
  {
    id: "act-1",
    label: "Act 1",
  },
  {
    id: "demon-power",
    label: "Demon Power",
  },
  {
    id: "act-2",
    label: "Act 2",
  },
  {
    id: "act-2-priorities",
    label: "Act 2 priorities",
  },
  {
    id: "act-3",
    label: "Act 3 & Golden Key",
  },
  {
    id: "achievement-targets",
    label: "Achievement targets",
  },
  {
    id: "rules-i-use",
    label: "Run planning rules",
  },
];

/*
 * The Hub already links directly to every important Sovereign Tower spoke
 * inside the article, so I keep the bottom recommendation block intentionally
 * small rather than repeating the whole cluster.
 */
const relatedLinks = [
  {
    href: "/sovereign-tower/act-1-best-route",
    label: "Act 1 Best Route",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/golden-key",
    label: "Golden Key Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Sovereign Tower Guide",
    description:
      "Plan Sovereign Tower around deadlines, Knight availability, Demon Power, Act routes, county alliances, King Slayer, and the Golden Key.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Sovereign Tower quest assignment screen showing Knight requirements and Damage Risk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Guide",
    description:
      "Walkthrough routes, Knight planning, Demon Power, Gwendan, King Slayer, Golden Key, and the decisions that matter across each Act.",
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
          name: "Sovereign Tower Guide",
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
        "Sovereign Tower Guide: Walkthrough Routes, Demon Power, Knights, and Major Decisions",
      description:
        "A player-focused Sovereign Tower guide hub covering how I prioritize deadlines, duration, Knight slots and Damage Risk; use Knight stats, attributes and preferences; decide when to spend Gold on equipment or repairs; plan faction satisfaction; route Act 1 through Groveshire and the Dragon Knight; use Demon Power without blindly repeating timelines; manage the eight-slot Round Table and major Act 2 routes; handle the Tower murder, South Bay and King Slayer; and approach the Golden Key and Emperor decision in Act 3 without treating unverified final outcomes as a complete endings guide.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-09",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower guide",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower walkthrough",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 1",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 2",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 3",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Knights",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Round Table",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Demon Power",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower rewind",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower factions",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gwendan",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Wolf",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower South Bay",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Golden Key",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Plan Your Sovereign Tower Run Without Wasting Cycles"
          description="Use this hub to choose the right route for each Act, manage Knights and Gold around real deadlines, understand Demon Power, and jump directly to the guide for the problem blocking your run."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SovereignTowerContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Sovereign Tower"
          heading="Looking for another game after Sovereign Tower?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}