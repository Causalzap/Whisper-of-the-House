import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowManyDudesRound100Content from "@/data/how-many-dudes/round-100-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-many-dudes`;
const pageUrl = `${hubUrl}/round-100-guide`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-business-dude-baller-package-15-rounds.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-round-60-separator-boss.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cyborg-round-80-77k-damage.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-round-82-heavy-losses.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-round-94-avoid-ravens.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-round-100-frenzied-gorilla-boss.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-round-100-meteor-vulnerability.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-cyborg-round-100-202k-damage.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes Round 100 Guide: Gorilla Boss Route",
  description:
    "Reach Round 100 in How Many Dudes with a tested route for team jobs, Business Dude timing, safer fights, Gorilla packs, Meteor and Dude Juice.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Round 100 Guide: Route and Gorilla Boss",
    description:
      "Build five useful Types, time 15-round investments and 11-round Relic loans, protect the roster through Rounds 81–99, and beat the Round 100 Gorilla pack.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        width: 1280,
        height: 720,
        alt: "How Many Dudes Round 100 Gorilla boss fight with Silverbacks and Diamondbacks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes Round 100 Guide",
    description:
      "Follow the full Round 1–100 route, avoid costly late fights, prepare recovery items, and beat the Gorilla boss pack.",
    images: [imageUrls[5]],
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
          name: "Round 100 Guide",
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
        "How Many Dudes Round 100 Guide: Full Route and Gorilla Boss Strategy",
      description:
        "This How Many Dudes Round 100 guide follows the full progression route from the opening draft to the Gorilla boss. It explains how to establish five roster jobs, when a 15-round Business Dude investment or 11-round Scavenger Relic loan can still return in time, how to react to Separator at Round 60, when to choose lower-payout battles after Round 61, why Rounds 81–99 should prioritize safe arrival over profit, and how to handle the Round 100 group of 30 Silverback Gorillas, 2 Diamondback Gorillas and 1 Toddler. It also covers Frenzied scaling, early Meteor placement, Dude Juice timing and why successful Cyborg damage numbers are reference points rather than universal requirements.",
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
          name: "How Many Dudes Round 100",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Round 100 boss",
        },
        {
          "@type": "Thing",
          name: "Silverback Gorillas",
        },
        {
          "@type": "Thing",
          name: "Diamondback Gorillas",
        },
        {
          "@type": "Thing",
          name: "Frenzied modifier",
        },
        {
          "@type": "Thing",
          name: "Separator modifier",
        },
        {
          "@type": "Thing",
          name: "Business Dude Baller Package",
        },
        {
          "@type": "Thing",
          name: "Scavenger Dude Relic loan",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Meteor",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Dude Juice",
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
          title="How to Reach and Beat Round 100 in How Many Dudes"
          description="Build five roster jobs, time investments before they expire, stop trading core Dudes for small payouts, and enter the Gorilla fight with the damage, healing and recovery tools needed to finish it."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "route-overview",
              label: "What Round 100 tests",
            },
            {
              id: "rounds-1-40",
              label: "Rounds 1–40",
            },
            {
              id: "rounds-41-60",
              label: "Rounds 41–60",
            },
            {
              id: "rounds-61-80",
              label: "Rounds 61–80",
            },
            {
              id: "rounds-81-99",
              label: "Rounds 81–99",
            },
            {
              id: "round-100-boss",
              label: "Round 100 Gorilla boss",
            },
            {
              id: "final-check",
              label: "Final readiness check",
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
              href: "/how-many-dudes/relic-combinations",
              label: "Relic Combinations & Shop Choices",
            },
            {
              href: "/how-many-dudes/goat-boss-guide",
              label: "G.O.A.T. Round 105 Boss Guide",
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
          <HowManyDudesRound100Content />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}