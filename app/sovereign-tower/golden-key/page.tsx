import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoldenKeyContent from "@/data/sovereign-tower/golden-key.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/golden-key`;

const metadataTitle =
  "Sovereign Tower Golden Key Guide: How to Get It & Emperor Choice";

const metadataDescription =
  "Find the Golden Key through Angelica, complete Search for the golden key, and understand the Emperor peace choice and 13-cycle warning.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-angelica-clue.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-search-golden-key-assignment.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-obtained.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-emperor-peace-offer.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-golden-key-thirteen-cycle-warning.webp`,
];

const toc = [
  {
    id: "golden-key-route",
    label: "Golden Key route",
  },
  {
    id: "angelica-clue",
    label: "Angelica's clue",
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
    id: "angelica-availability",
    label: "Keep Angelica available",
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
    id: "give-or-keep",
    label: "Give or keep the Key",
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
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
  },
  {
    href: "/sovereign-tower/south-bay-lamp",
    label: "South Bay Legendary Lamp Guide",
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
      "Follow Angelica's Golden Key route, prepare the major quest, recover the relic, and decide whether the Emperor's peace offer is worth ending expansion.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Angelica explaining where she saw the Golden Key in Sovereign Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Golden Key Guide",
    description:
      "Get the Golden Key through Angelica, use the right quest setup, and understand the Emperor's peace offer and 13-cycle consequence.",
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
        "Sovereign Tower Golden Key Guide: Angelica Route, Search Quest, and Emperor Choice",
      description:
        "A player-focused Sovereign Tower Golden Key guide explaining how Angelica unlocks the route after remembering a manor in the Almore forest near Enberg, why the Golden Key is not a normal Map Room location, which dialogue branch I used successfully, how to prepare Search for the golden key, why the 0 Damage Risk assignment does not require an unnecessary armor repair, how the Spectral Eye's +3 MAG can help Angelica, when the legendary Golden Key is actually confirmed as obtained, what the Emperor offers in exchange for it, why peace ends further expansion, and how refusing the handover led my route into a 13-cycle preparation period.",
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
          title="Find the Golden Key Without Searching the Whole Map"
          description="Wait for Angelica's clue, keep her available for the major quest, use what you already own to cover her stats, and understand what the Emperor's peace offer actually closes."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
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