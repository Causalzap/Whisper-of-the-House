import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FarFarWestSecretMissionsContent from "@/data/far-far-west/secret-missions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/far-far-west/secret-missions`;

export const metadata: Metadata = {
  title: "Far Far West All Secret Missions & Secret Jokers Guide",
  description:
    "Find every secret mission in Far Far West, including Ghost Bells, Canyon Medallions, Cactus Day, Mushroom Sequence, Snowman Parts, Area 41 Symbols, and all secret Joker rewards.",
  alternates: {
    canonical: pageUrl,
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
          name: "Far Far West Guide",
          item: `${siteUrl}/far-far-west`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Secret Missions & Secret Jokers",
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
      headline: "Far Far West All Secret Missions & Secret Jokers Guide",
      description:
        "This Far Far West secret missions guide covers every hidden map objective, including Ghost Bells, Canyon Medallions, Cactus Day, Mushroom Sequence, Snowman Parts, and Area 41 Symbols. It also compares Bellshot, Pigpick, Cactus Day, Shroom Grave, Anti-Gravity Falls, the Elder Pickaxe, and the Far Far North skin reward.",
      image: [
        `${siteUrl}/images/far-far-west/secret-missions-overview.webp`,
        `${siteUrl}/images/far-far-west/bellshot-great-bell.webp`,
        `${siteUrl}/images/far-far-west/canyon-secret-medallion-door.webp`,
        `${siteUrl}/images/far-far-west/cactus-day-locations-map.webp`,
        `${siteUrl}/images/far-far-west/woodlands-mushroom-sequence-map.webp`,
        `${siteUrl}/images/far-far-west/far-far-north-snowman-parts-map.webp`,
        `${siteUrl}/images/far-far-west/area-41-symbol-order.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-04-30",
      dateModified: "2026-04-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Far Far West",
        },
        {
          "@type": "Thing",
          name: "Far Far West secret missions",
        },
        {
          "@type": "Thing",
          name: "Far Far West secret Jokers",
        },
        {
          "@type": "Thing",
          name: "Ghost Bells",
        },
        {
          "@type": "Thing",
          name: "Bellshot",
        },
        {
          "@type": "Thing",
          name: "Canyon Medallions",
        },
        {
          "@type": "Thing",
          name: "Pigpick Joker",
        },
        {
          "@type": "Thing",
          name: "Pick Pick Joker",
        },
        {
          "@type": "Thing",
          name: "Elder Pickaxe",
        },
        {
          "@type": "Thing",
          name: "Cactus Day Joker",
        },
        {
          "@type": "Thing",
          name: "Shroom Grave Joker",
        },
        {
          "@type": "Thing",
          name: "Area 41 Symbol Order",
        },
        {
          "@type": "Thing",
          name: "Anti-Gravity Falls Joker",
        },
        {
          "@type": "Thing",
          name: "Far Far North Snowman Parts",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the fastest useful secret mission to do first in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do Ghost Bells first. It is one of the easiest secrets once the bell locations are marked, and it unlocks Bellshot, which gives useful healing value in normal missions.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I want the highest-value secret in one run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do Canyon Medallions if you have enough time. It takes longer than Ghost Bells, but it gives Pigpick or Pick Pick, the Elder Pickaxe, and extra cave rewards.",
          },
        },
        {
          "@type": "Question",
          name: "Which secret mission takes the longest in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cactus Day and Canyon Medallions usually take the longest. Cactus Day requires matching all cactus children with their parents, while Canyon requires several mini-puzzles.",
          },
        },
        {
          "@type": "Question",
          name: "Which secret mission is hardest in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Canyon Medallions is the hardest because the Hawkeye section requires shooting 10 targets, and missing one target keeps the safe locked.",
          },
        },
        {
          "@type": "Question",
          name: "Which secret reward should I choose for survival, damage, or AoE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose Bellshot for survival, Pigpick or Pick Pick for damage, and Cactus Day for AoE clearing. Shroom Grave is backup healing, while Anti-Gravity Falls is mostly for fun.",
          },
        },
        {
          "@type": "Question",
          name: "Which Far Far West secret reward is only cosmetic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Far Far North snowman secret gives a skin instead of a weapon Joker.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Area 41 early in Far Far West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Area 41 is worth doing for completion, but Anti-Gravity Falls is not a high-priority combat Joker.",
          },
        },
        {
          "@type": "Question",
          name: "Are the secret mission rewards weapon Jokers or character Jokers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most secret mission rewards are weapon Jokers, not character Jokers. Far Far North is the exception because it gives a skin.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my Far Far West secret mission not complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most secrets need a final interaction. Ghost Bells requires returning to the great bell, Canyon requires inserting all four medallions, Woodlands requires returning to the cave stone, and Area 41 requires pressing the button after entering the symbols.",
          },
        },
      ],
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
          title="Far Far West All Secret Missions & Secret Jokers Guide"
          description="Find every secret mission in Far Far West, compare all secret Joker rewards, and learn which hidden objectives to complete first."
          gameTitle="Far Far West"
          gameHref="/far-far-west"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 30, 2026"
          toc={[
            {
              id: "all-secret-missions-checklist",
              label: "Secret checklist",
            },
            {
              id: "screenshot-markers",
              label: "Screenshot markers",
            },
            {
              id: "best-secret-missions-to-do-first",
              label: "Best order",
            },
            {
              id: "secret-joker-rewards",
              label: "Reward comparison",
            },
            {
              id: "far-west-ghost-bells-bellshot",
              label: "Ghost Bells",
            },
            {
              id: "canyon-medallions-pigpick",
              label: "Canyon Medallions",
            },
            {
              id: "desert-cactus-day",
              label: "Cactus Day",
            },
            {
              id: "woodlands-mushroom-sequence",
              label: "Mushroom Sequence",
            },
            {
              id: "far-far-north-snowman-parts",
              label: "Snowman Parts",
            },
            {
              id: "area-41-symbol-order",
              label: "Area 41 Symbols",
            },
            {
              id: "which-secret-joker-is-best",
              label: "Best Joker by goal",
            },
            {
              id: "secret-mission-troubleshooting",
              label: "Troubleshooting",
            },
            {
              id: "related-guides",
              label: "Related guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/far-far-west/ghost-bell-shard-locations",
              label: "Ghost Bell Shard Locations",
            },
            {
              href: "/far-far-west/canyon-secret-medallion-locations",
              label: "Canyon Secret: All 4 Medallion Locations",
            },
            {
              href: "/far-far-west/cactus-day-joker-locations",
              label: "Cactus Day Joker Locations",
            },
            {
              href: "/far-far-west/woodlands-mushroom-sequence",
              label: "Woodlands Mushroom Sequence Guide",
            },
            {
              href: "/far-far-west/snowman-parts-locations",
              label: "Snowman Parts Locations",
            },
            {
              href: "/far-far-west/area-41-symbol-order",
              label: "Area 41 Symbol Order Guide",
            },
          ]}
        >
          <FarFarWestSecretMissionsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}