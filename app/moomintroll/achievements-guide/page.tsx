import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollAchievementsGuideContent from "@/data/moomintroll/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/achievements-guide`;

export const metadata: Metadata = {
  title: "All Achievements in Moomintroll Winter’s Warmth",
  description:
    "Complete every achievement in Moomintroll Winter’s Warmth with our 100% guide. Unlock all 23 trophies, find every vase piece, and light the Great Bonfire.",
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
          name: "Achievements and 100% Guide",
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
      headline: "All Achievements in Moomintroll Winter’s Warmth",
      description:
        "This Moomintroll Winter’s Warmth achievements and 100% guide covers all 23 achievements, including story achievements, vase pieces, letters, cave candles, small bonfires, winter beings, all tool upgrades, Great Shot snowball targets, Moominmamma’s Favorite, and Snufkin Would Be Proud.",
      image: [
        `${siteUrl}/images/moomintroll/achievements-overview.webp`,
        `${siteUrl}/images/moomintroll/first-match-achievement.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-vase-pieces-complete.webp`,
        `${siteUrl}/images/moomintroll/all-tools-upgraded.webp`,
        `${siteUrl}/images/moomintroll/all-candles-cave.webp`,
        `${siteUrl}/images/moomintroll/all-bonfires-lit.webp`,
        `${siteUrl}/images/moomintroll/great-winter-bonfire.webp`,
        `${siteUrl}/images/moomintroll/ending-achievement.webp`,
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
          name: "Moomintroll Winter’s Warmth achievements",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth 100% completion",
        },
        {
          "@type": "Thing",
          name: "Snufkin Would Be Proud",
        },
        {
          "@type": "Thing",
          name: "Great Shot achievement",
        },
        {
          "@type": "Thing",
          name: "You've Got Mail achievement",
        },
        {
          "@type": "Thing",
          name: "Spelunker achievement",
        },
        {
          "@type": "Thing",
          name: "All Fired Up achievement",
        },
        {
          "@type": "Thing",
          name: "Friend of Winter achievement",
        },
        {
          "@type": "Thing",
          name: "Moominmamma's Favorite achievement",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth vase pieces",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth letters",
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
          name: "How many achievements are in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 23 achievements in Moomintroll Winter’s Warmth.",
          },
        },
        {
          "@type": "Question",
          name: "Are any achievements missable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most achievements are safe if you do completion cleanup before the ending stretch, but Great Shot, Friend of Winter, You've Got Mail, Spelunker, All Fired Up, Upgrades, and Moominmamma's Favorite are the easiest to overlook.",
          },
        },
        {
          "@type": "Question",
          name: "What is the hardest achievement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The hardest achievement is likely Snufkin Would Be Proud, because it requires every other achievement. The most annoying individual check is usually Great Shot, because you need to snowball every valid character or character group.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Moominmamma’s Favorite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Collect all 25 vase pieces, return to the vase objective, and fix Moominmamma’s vase.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Friend of Winter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Help every winter being. The Great Winter Bonfire only needs three winter being tasks, but this achievement requires full winter being cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock You’ve Got Mail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Follow the full letter chain: mailbox, water or bottle route, mountain note, icy pond note, forest note, cave depths note, return mailbox, and late letter follow-ups.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Improve every tool by bringing upgrade materials to Too-ticky, including sturdy yarn, lamp oil, whetstone, and scrap metal.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Spelunker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Light every candle in the cave and underground routes. Recheck side rooms, bridge exits, ice-block paths, and cave exits if it does not unlock.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock All Fired Up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Light every bonfire, including smaller winter being bonfires and fire spots, not only the Great Winter Bonfire.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Great Shot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Throw a snowball at every valid character or character group. Use the 14-target snowball checklist and do a final sweep during the Great Winter Bonfire celebration.",
          },
        },
        {
          "@type": "Question",
          name: "What does Snufkin Would Be Proud require?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Snufkin Would Be Proud requires completing all other achievements.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check if I am missing one final achievement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check snowball targets, letters, winter beings, cave candles, small bonfires, tool upgrades, and vase piece side quest rewards first.",
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
          title="Moomintroll Winter’s Warmth Achievements and 100% Guide"
          description="Complete all 23 achievements in Moomintroll Winter’s Warmth, including vase pieces, letters, cave candles, bonfires, winter beings, tool upgrades, Great Shot, and Snufkin Would Be Proud."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "all-achievements-checklist",
              label: "Achievements checklist",
            },
            {
              id: "are-any-achievements-missable",
              label: "Missable achievements",
            },
            {
              id: "hundred-percent-completion-checklist",
              label: "100% checklist",
            },
            {
              id: "story-achievements",
              label: "Story achievements",
            },
            {
              id: "collectible-achievements",
              label: "Collectibles",
            },
            {
              id: "letters-achievement",
              label: "Letters",
            },
            {
              id: "tool-upgrade-achievement",
              label: "Tool upgrades",
            },
            {
              id: "cave-candles-achievement",
              label: "Cave candles",
            },
            {
              id: "all-bonfires-achievement",
              label: "All bonfires",
            },
            {
              id: "snowball-achievements",
              label: "Great Shot",
            },
            {
              id: "best-order-for-100-percent",
              label: "Best 100% order",
            },
            {
              id: "before-ending-checklist",
              label: "Before ending",
            },
            {
              id: "missing-achievement-checklist",
              label: "Missing one?",
            },
            {
              id: "ending-achievement",
              label: "Ending achievement",
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
              href: "/moomintroll/vase-piece-locations",
              label: "All 25 Vase Piece Locations",
            },
            {
              href: "/moomintroll/side-quests",
              label: "All Side Quests Guide",
            },
            {
              href: "/moomintroll/tool-upgrades",
              label: "All Tool Upgrades Guide",
            },
            {
              href: "/moomintroll/great-winter-bonfire",
              label: "Great Winter Bonfire Guide",
            },
            {
              href: "/moomintroll/little-my-snowball-fight",
              label: "Little My Snowball Fight Guide",
            },
            {
              href: "/moomintroll/ending-explained",
              label: "Ending Explained",
            },
          ]}
        >
          <MoomintrollAchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}