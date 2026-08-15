import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import SovereignTowerContent from "@/data/sovereign-tower/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sovereign-tower`;

const metadataTitle =
  "Sovereign Tower Guide: Walkthrough, Rewind, Knights & Endings";

const metadataDescription =
  "Plan Sovereign Tower Act 1–3 routes, Demon Power, Knights, Gwendan, South Bay, King Slayer, Golden Key, Arthur, and endings without wasting cycles.";

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
    label: "Act 3 & Arthur",
  },
  {
    id: "golden-key",
    label: "Golden Key",
  },
  {
    id: "endings",
    label: "Endings",
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
 * The Hub already links directly to the route-specific guides inside the
 * article, so the bottom recommendation block stays focused on the main
 * progression pages rather than repeating the whole cluster.
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
    href: "/sovereign-tower/act-3-walkthrough",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/sovereign-tower/golden-key",
    label: "Golden Key Guide",
  },
  {
    href: "/sovereign-tower/endings",
    label: "Endings & Final Routes Guide",
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
      "Plan every Sovereign Tower Act around deadlines, Knight availability, Demon Power, county routes, King Slayer, the Golden Key, Arthur, and the final branches.",
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
      "Act 1–3 walkthrough routes, Knight planning, Demon Power, King Slayer, Golden Key, Arthur, endings, and the decisions that matter across a full run.",
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
        "Sovereign Tower Guide: Act 1–3 Walkthrough, Demon Power, Knights, Golden Key, and Endings",

      description:
        "A player-focused Sovereign Tower guide hub covering the full run from Act 1 through Act 3 and the final branches. It explains how I prioritize deadlines, duration, Knight slots and Damage Risk; use Knight stats, attributes, preferences and affinity; decide when equipment, repairs and mounts are worth the Gold; route Act 1 through Groveshire and the Dragon Knight; use Demon Power without blindly repeating timelines; manage the eight-slot Round Table, Tower murder, South Bay, Wolf and Rufus, and King Slayer during Act 2; finish permanent county and Knight progression before Arthur closes Act 3; approach the two confirmed Golden Key acquisition routes and Emperor decision; and separate final-route preparation from the actual ending consequences and character epilogues.",

      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",

      datePublished: "2026-08-09",
      dateModified: "2026-08-15",

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
          name: "Sovereign Tower Rufus",
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
        {
          "@type": "Thing",
          name: "Sovereign Tower Arthur",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower endings",
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
          title="Plan Your Sovereign Tower Run From Act 1 to the Final Branch"
          description="Use this hub to plan every Act around real deadlines, keep the right Knights available, spend Gold only when an assignment needs it, use Demon Power deliberately, and jump to the dedicated route guide when one decision blocks your run."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
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