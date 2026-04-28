import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollLittleMySnowballFightContent from "@/data/moomintroll/little-my-snowball-fight.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/little-my-snowball-fight`;

export const metadata: Metadata = {
  title: "Moomintroll Winter’s Warmth Little My Snowball Fight Guide",
  description:
    "Learn how to beat Little My in Moomintroll Winter’s Warmth, win the shovel snowball fight, handle the pond rematches, and get Moominmamma’s shovel.",
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
          name: "Moomintroll Winter’s Warmth Guide",
          item: `${siteUrl}/moomintroll`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Little My Snowball Fight Guide",
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
        "Moomintroll Winter’s Warmth Little My Snowball Fight Guide",
      description:
        "This Moomintroll Winter’s Warmth Little My snowball fight guide explains how to beat the first shovel fight, how many hits Little My takes, how the pond rematch and final pond round differ, what to do if you keep losing, and what beating Little My unlocks.",
      image: [
        `${siteUrl}/images/moomintroll/little-my-snowball-fight.webp`,
        `${siteUrl}/images/moomintroll/little-my-first-fight.webp`,
        `${siteUrl}/images/moomintroll/little-my-shovel-reward.webp`,
        `${siteUrl}/images/moomintroll/little-my-pond-rematch.webp`,
        `${siteUrl}/images/moomintroll/little-my-final-round.webp`,
        `${siteUrl}/images/moomintroll/little-my-bonfire-snowball.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      about: [
        {
          "@type": "VideoGame",
          name: "Moomintroll Winter’s Warmth",
        },
        {
          "@type": "Thing",
          name: "Little My snowball fight",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth shovel",
        },
        {
          "@type": "Thing",
          name: "Moominmamma’s shovel",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth pond snowball fight",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth Little My",
        },
        {
          "@type": "Thing",
          name: "Great Winter Bonfire",
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
          name: "How do I beat Little My in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wait for Little My to move into open space, throw one snowball, then reposition. Do not chase her nonstop or hold your aim for too long.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Little My?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You first meet Little My near Moominhouse after the route to Fillyjonk is blocked by deep snow. Later, you find her again around the pond and slide route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the shovel in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beat Little My in the first snowball fight. She gives back Moominmamma’s shovel after you win.",
          },
        },
        {
          "@type": "Question",
          name: "How many times do I need to hit Little My?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first fight takes about three clean hits. Later pond fights take more hits, with the final round taking the longest.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I need the shovel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The shovel clears deep snow, opens the route to Fillyjonk, reveals firewood, and helps with collectible cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the pond fight harder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The pond arena is more open, has fewer cover spots, and includes slide or ice movement. It also requires more hits than the first shovel fight.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to beat the later Little My fights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you want to progress Little My’s Great Winter Bonfire involvement. The later fights are part of convincing Little My to help bring spring back.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I keep missing Little My?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hold a stable position, wait for Little My to cross open space, then throw slightly ahead of her path.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use the shovel immediately after the fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After winning the first fight, you can use the shovel to clear deep snow and continue toward Fillyjonk.",
          },
        },
        {
          "@type": "Question",
          name: "Does Little My give a vase piece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main reward from the first fight is the shovel. Some vase pieces require the shovel later, so use the All 25 Vase Piece Locations guide for cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Is the bonfire snowball moment another fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The bonfire snowball moment is a short character interaction after the Great Winter Bonfire, not a required progression fight.",
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
          title="Moomintroll Winter’s Warmth Little My Snowball Fight Guide"
          description="Learn how to beat Little My, win the shovel snowball fight, handle the pond rematches, and unlock Moominmamma’s shovel in Moomintroll Winter’s Warmth."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "little-my-snowball-fight-checklist",
              label: "Fight checklist",
            },
            {
              id: "fight-differences",
              label: "Fight differences",
            },
            {
              id: "where-to-find-little-my",
              label: "Where to find Little My",
            },
            {
              id: "first-snowball-fight",
              label: "First snowball fight",
            },
            {
              id: "how-to-win-little-my-fight",
              label: "How to win",
            },
            {
              id: "shovel-reward",
              label: "Shovel reward",
            },
            {
              id: "later-little-my-rematches",
              label: "Later rematches",
            },
            {
              id: "pond-snowball-fight-strategy",
              label: "Pond fight",
            },
            {
              id: "final-little-my-round",
              label: "Final round",
            },
            {
              id: "why-do-i-keep-losing",
              label: "Why you keep losing",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "what-beating-little-my-unlocks",
              label: "What it unlocks",
            },
            {
              id: "bonfire-snowball-moment",
              label: "Bonfire moment",
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
              href: "/moomintroll",
              label: "Complete Walkthrough & Guide",
            },
            {
              href: "/moomintroll/tool-upgrades",
              label: "All Tool Upgrades Guide",
            },
            {
                href: "/moomintroll/ending-explained",
                label: "Ending Explained",
              },
            {
              href: "/moomintroll/vase-piece-locations",
              label: "All 25 Vase Piece Locations",
            },
            {
              href: "/moomintroll/great-winter-bonfire",
              label: "Great Winter Bonfire Guide",
            },
            {
              href: "/moomintroll/side-quests",
              label: "All Side Quests Guide",
            },
            {
                href: "/moomintroll/achievements-guide",
                label: "Achievements and 100% Guide",
              },
          ]}
        >
          <MoomintrollLittleMySnowballFightContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}