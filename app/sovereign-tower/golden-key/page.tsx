import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoldenKeyContent from "@/data/sovereign-tower/golden-key.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/golden-key`;

const metadataTitle =
  "Sovereign Tower Golden Key: How to Get It & Emperor Choice";

const metadataDescription =
  "Get the Golden Key through Angelica or full county unification, compare 0 vs 1–5 Damage Risk, and understand the Emperor choice and 13-cycle warning.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-angelica-clue.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-search-golden-key-assignment.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-all-counties-unlocked.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-all-counties-search-risk.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-all-counties-search-success.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-obtained.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-emperor-peace-offer.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-thirteen-cycle-warning.webp`,
];

const toc = [
  {
    id: "golden-key-route",
    label: "Two Golden Key routes",
  },
  {
    id: "angelica-route",
    label: "Angelica route",
  },
  {
    id: "ask-nicely",
    label: "Ask nicely",
  },
  {
    id: "search-golden-key",
    label: "Search for the Golden Key",
  },
  {
    id: "angelica-magic",
    label: "Angelica Magic setup",
  },
  {
    id: "angelica-repair",
    label: "Angelica repair decision",
  },
  {
    id: "all-counties-route",
    label: "All-counties route",
  },
  {
    id: "all-counties-search",
    label: "Kingdom-wide search",
  },
  {
    id: "all-counties-search-success",
    label: "Search success",
  },
  {
    id: "golden-key-obtained",
    label: "Golden Key obtained",
  },
  {
    id: "emperor-choice",
    label: "Emperor choice",
  },
  {
    id: "refuse-golden-key",
    label: "13-cycle warning",
  },
  {
    id: "how-to-use-golden-key",
    label: "How to use the Key",
  },
  {
    id: "do-you-need-all-counties",
    label: "Do you need all counties?",
  },
  {
    id: "golden-key-stuck",
    label: "Golden Key troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/act-3-walkthrough",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/sovereign-tower/endings",
    label: "Endings & Golden Key Ending Guide",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
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
    title: "Sovereign Tower Golden Key Guide",
    description:
      "Use Angelica's manor route or unite all counties to open the kingdom-wide Golden Key search, then decide whether to keep the Key or accept the Emperor's offer.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Angelica explaining the first confirmed route to the Golden Key in Sovereign Tower",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Golden Key Guide",
    description:
      "Get the Golden Key through Angelica or full county unification, then plan around the Emperor choice and the 13-cycle late-game window.",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Golden Key Guide",
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
        "Sovereign Tower Golden Key Guide: Angelica Route, All Counties Route, and Emperor Choice",

      description:
        "A player-focused Sovereign Tower Golden Key guide covering both confirmed acquisition routes. The first uses Angelica's memory of a manor in the Almore forest near Enberg and the zero-Damage-Risk Search for the golden key assignment, where the Spectral Eye's +3 MAG can help cover her weak Magic. The second opens after all counties of Britannia are united and launches a kingdom-wide Golden Key search with 1–5 Damage Risk. The guide also explains how the Key is confirmed as obtained, why having it does not immediately activate its final use, what the Emperor offers in exchange for it, why peace ends further expansion, and how refusing the handover creates a 13-cycle preparation window before the late Arthur conflict.",

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
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower how to get Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Angelica Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower all counties Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Legend of the Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Search for the golden key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Almore forest",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Enberg",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Spectral Eye",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Emperor Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower give Golden Key to Emperor",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower keep Golden Key",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower 13 cycles",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 3",
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
          title="Get the Golden Key Through Angelica or Full County Unification"
          description="Use Angelica's 0-risk manor route when it appears, or unite Britannia to unlock the 1–5 Damage Risk kingdom-wide search, then decide whether to keep the Key for the late Arthur branch."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GoldenKeyContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}