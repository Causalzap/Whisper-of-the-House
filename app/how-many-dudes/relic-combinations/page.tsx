import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowManyDudesRelicCombinationsContent from "@/data/how-many-dudes/relic-combinations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-many-dudes`;
const pageUrl = `${hubUrl}/relic-combinations`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-andon-cord-shadowy-funnel-time-sink.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-time-trigger-merchant-shop.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-heroic-medal-general.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-shield-belt-deflection.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-copper-bolts-stash.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-meteor-consumable-card.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cave-painting-15-percent-max-hp.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes Relic Combinations: Best Shop Choices",
  description:
    "Choose better How Many Dudes Relics for Warlock, Time, General, Franken and Cave builds with tested early, mid and late shop decisions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Relic Guide: Best Combos and Shop Timing",
    description:
      "Match each Relic to the problem your roster actually has, then use tested Warlock, Time, General, Franken, Cave and consumable packages without wasting late shops.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1536,
        height: 674,
        alt: "How Many Dudes Relic Stash offering Andon Cord, Shadowy Funnel, and Time Sink",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes Relic Combinations and Shop Guide",
    description:
      "Choose Relics by the roster problem they solve, with tested Warlock, Time, General, Franken, Cave and late-boss consumable packages.",
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
          name: "Relic Combinations Guide",
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
        "How Many Dudes Relic Combinations Guide: Shop Choices, Triggers and Timing",
      description:
        "This How Many Dudes Relic guide explains how to choose shop upgrades by the roster problem they solve rather than by a universal tier list. It covers the verified Andon Cord, Shadowy Funnel and Time Sink Stash choice, the separate Time Trigger Merchant purchase, Heroic Medal and Shield Belt for General-led front lines, Copper Bolts for established Frankendude support, Cave Painting for committed Cave teams, and the late-round value of Health Potion, Dude Juice, Bottled Lightning and Meteor. It also explains trigger requirements, early versus late purchase timing, when to skip a strong Relic, and how to protect a winning run before Round 100 and Round 105.",
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
          name: "How Many Dudes Relics",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Relic combinations",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Relic Stash",
        },
        {
          "@type": "Thing",
          name: "Andon Cord",
        },
        {
          "@type": "Thing",
          name: "Shadowy Funnel",
        },
        {
          "@type": "Thing",
          name: "Time Sink",
        },
        {
          "@type": "Thing",
          name: "Time Trigger",
        },
        {
          "@type": "Thing",
          name: "Heroic Medal",
        },
        {
          "@type": "Thing",
          name: "Shield Belt",
        },
        {
          "@type": "Thing",
          name: "Copper Bolts",
        },
        {
          "@type": "Thing",
          name: "Cave Painting",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes consumables",
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
          title="Which Relics Should You Buy in How Many Dudes?"
          description="Use the previous fight to identify the real problem, then choose the Relic or consumable that fixes it before the next boss instead of following a static tier list."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "how-i-decide",
              label: "How I choose Relics",
            },
            {
              id: "warlock-time-package",
              label: "Warlock & Time",
            },
            {
              id: "general-franken-package",
              label: "General & Franken",
            },
            {
              id: "consumable-package",
              label: "Boss consumables",
            },
            {
              id: "cave-package",
              label: "Cave Painting",
            },
            {
              id: "purchase-timing",
              label: "Early, mid & late buys",
            },
            {
              id: "shop-check",
              label: "Five-second shop check",
            },
          ]}
          relatedLinks={[
            {
              href: "/how-many-dudes",
              label: "How Many Dudes Guide Hub",
            },
            {
              href: "/how-many-dudes/best-builds",
              label: "Best Builds & Five-Type Teams",
            },
            {
              href: "/how-many-dudes/round-100-guide",
              label: "Round 100 Guide",
            },
            {
              href: "/how-many-dudes/goat-boss-guide",
              label: "G.O.A.T. Boss Guide",
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
          <HowManyDudesRelicCombinationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}