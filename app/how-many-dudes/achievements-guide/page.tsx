import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowManyDudesAchievementsGuideContent from "@/data/how-many-dudes/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-many-dudes`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/how-many-dudes/how-many-dudes-five-gold-stars-unlock-tier-2.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-meteor-consumable-card.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-copper-bolts-stash.webp`,
  `${siteUrl}/images/how-many-dudes/how-many-dudes-collectibles-earned-board.webp`,
];

export const metadata: Metadata = {
  title: "How Many Dudes Achievements Guide: All 69 Unlocks",
  description:
    "Track all 69 How Many Dudes achievements, find exact unlock conditions, and follow efficient routes for bosses, stats, Families, Tier 2 and Tier 3.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How Many Dudes Achievements Guide: All 69 Conditions",
    description:
      "Search and track every achievement, then use dedicated routes for progression, consumables, stat stacks, Family-only wins, fixed teams, Tier 2 and Tier 3.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1064,
        height: 444,
        alt: "How Many Dudes Gold Star progress and Tier 2 unlock requirement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Dudes Achievements Guide: All 69 Unlocks",
    description:
      "Track all 69 achievements and find the right route for bosses, consumables, stat stacks, Family wins, fixed teams and late-tier progression.",
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
          name: "Achievements Guide",
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
        "How Many Dudes Achievements Guide: All 69 Achievement Conditions and Routes",
      description:
        "This complete How Many Dudes achievements guide covers all 69 achievement conditions and organizes them into efficient progression, challenge, consumable, stat-stacking, summon, healing, economy, Family-only, fixed-team, collection, Tier 2 and Tier 3 routes. It includes a searchable progress checklist, completion-rate snapshot, recommended timing, cleanup risk, Round 80 and G.O.A.T. challenges, Meteor and Bottled Lightning conditions, Gold-Star collection goals, and clearly marked achievements whose fastest methods still require further targeted testing.",
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
          name: "How Many Dudes achievements",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes achievement checklist",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes 100% completion",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Gold Stars",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Tier 2",
        },
        {
          "@type": "Thing",
          name: "How Many Dudes Tier 3",
        },
        {
          "@type": "Thing",
          name: "The G.O.A.T. achievement",
        },
        {
          "@type": "Thing",
          name: "G.O.A.T. Crusher achievement",
        },
        {
          "@type": "Thing",
          name: "Thirsty Dudes achievement",
        },
        {
          "@type": "Thing",
          name: "Iron Dude achievement",
        },
        {
          "@type": "Thing",
          name: "Juggler achievement",
        },
        {
          "@type": "Thing",
          name: "You In Particular achievement",
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
          title="All 69 How Many Dudes Achievements and the Best Routes"
          description="Search every unlock condition, mark completed achievements, and use a separate route for boss clears, challenge runs, stat stacks, Family teams and late-tier cleanup."
          gameTitle="How Many Dudes?"
          gameHref="/how-many-dudes"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 31, 2026"
          toc={[
            {
              id: "all-achievements-checklist",
              label: "All 69 achievements",
            },
            {
              id: "best-route",
              label: "Best route order",
            },
            {
              id: "progression-achievements",
              label: "Progression achievements",
            },
            {
              id: "challenge-runs",
              label: "Challenge runs",
            },
            {
              id: "consumable-achievements",
              label: "Consumable achievements",
            },
            {
              id: "stat-stacking-achievements",
              label: "Stat-stacking achievements",
            },
            {
              id: "summon-healing-achievements",
              label: "Summon & healing",
            },
            {
              id: "economy-achievements",
              label: "Economy achievements",
            },
            {
              id: "family-and-fixed-team-achievements",
              label: "Family & fixed teams",
            },
            {
              id: "collection-and-tier-achievements",
              label: "Collections & Tiers",
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
              href: "/how-many-dudes/goat-boss-guide",
              label: "G.O.A.T. Boss Guide",
            },
            {
              href: "/how-many-dudes/relic-combinations",
              label: "Best Relic Combinations",
            },
            {
              href: "/how-many-dudes/tier-2-progression",
              label: "Tier 2 Progression Guide",
            },
            {
                href: "/how-many-dudes/round-100-guide",
                label: "Round 100 Guide",
              },
          ]}
        >
          <HowManyDudesAchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}