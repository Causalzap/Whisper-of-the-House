import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowManyDudesGoatBossContent from "@/data/how-many-dudes/goat-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-many-dudes`;
const pageUrl = `${hubUrl}/goat-boss-guide`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-round-105-goat-250-rams.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-goat-taunt-resistance-modifier.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-goat-stomp-roster-damage.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-bottled-lightning-goat-no-stun.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cyborg-goat-round-105-win.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes G.O.A.T. Boss Guide: Round 105",
  description:
    "Beat the G.O.A.T. at Round 105 with a tested route for 250 Rams, modifiers, Rounds 101–104, Dude Juice, Health Potion, and final shop choices.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Round 105 G.O.A.T. Boss Guide",
    description:
      "Protect the roster through Rounds 101–104, clear the 250 Rams, read the final modifier, and time Dude Juice and Health Potion against the G.O.A.T.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "How Many Dudes Round 105 fight showing the G.O.A.T. and 250 Rams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes G.O.A.T. Boss Guide",
    description:
      "Use Rounds 101–104 to repair the roster, clear the Ram wave first, and finish the Round 105 G.O.A.T. fight with better recovery timing.",
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
          name: "How Many Dudes Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "G.O.A.T. Boss Guide",
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
        "How Many Dudes G.O.A.T. Boss Guide: Round 105 and 250 Rams",
      description:
        "This How Many Dudes G.O.A.T. boss guide explains how to protect a winning roster through Rounds 101–104, prepare the final shop, read Taunt Resistance or Crit Avoidance modifiers, and divide the Round 105 fight into a 250-Ram clearing phase and a sustained G.O.A.T. phase. It covers Shield Belt and Heroic Medal timing, Dude Juice and Health Potion usage, why Bottled Lightning should not be treated as guaranteed boss control, how G.O.A.T. Stomp creates a roster-wide collapse, and why roughly 304k Cyborg damage is one successful reference rather than a universal requirement.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-31",
      dateModified: "2026-07-31",
      about: [
        {
          "@type": "VideoGame",
          name: "How Many Dudes?",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes G.O.A.T.",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Round 105",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes 250 Rams",
        },
        {
          "@type": "Thing",
          name: "G.O.A.T. Stomp",
        },
        {
          "@type": "Thing",
          name: "Taunt Resistance modifier",
        },
        {
          "@type": "Thing",
          name: "Crit Avoidance modifier",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Dude Juice",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Health Potion",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Bottled Lightning",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Shield Belt",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Heroic Medal",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How to Beat the G.O.A.T. at Round 105"
          description="Repair the roster through Rounds 101–104, clear the 250 Rams before committing to the boss, and time Dude Juice, Health Potion and late Relics around the first real collapse."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "round-105-setup",
              label: "Round 105 setup",
            },
            {
              id: "round-100-to-104",
              label: "Rounds 101–104",
            },
            {
              id: "goat-fight-route",
              label: "G.O.A.T. fight order",
            },
            {
              id: "winning-roster-check",
              label: "Winning roster checks",
            },
            {
              id: "common-failures",
              label: "Common failures",
            },
            {
              id: "after-the-win",
              label: "After the win",
            },
          ]}
          relatedLinks={[
            {
              href: "/how-many-dudes",
              label: "How Many Dudes Guide Hub",
            },
            {
              href: "/how-many-dudes/round-100-guide",
              label: "Round 100 Route Guide",
            },
            {
              href: "/how-many-dudes/best-builds",
              label: "Best Builds & Five-Type Teams",
            },
            {
              href: "/how-many-dudes/relic-combinations",
              label: "Relic Combinations & Shop Choices",
            },
            {
              href: "/how-many-dudes/tier-2-progression",
              label: "Tier 2 Progression Guide",
            },
            {
                href: "/how-many-dudes/achievements-guide",
                label: "All 69 Achievements & Checklist",
              },
          ]}
        >
          <HowManyDudesGoatBossContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}