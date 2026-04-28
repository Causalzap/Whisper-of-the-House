import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollVasePieceLocationsContent from "@/data/moomintroll/vase-piece-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/vase-piece-locations`;

export const metadata: Metadata = {
  title: "All 25 Vase Piece Locations in Moomintroll Winter’s Warmth",
  description:
    "Find all 25 vase pieces in Moomintroll Winter’s Warmth, including Moominhouse pieces, bird drops, cave pieces, tool-gated pickups, and side quest rewards.",
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
          name: "All Vase Piece Locations",
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
        "All 25 Vase Piece Locations in Moomintroll Winter’s Warmth",
      description:
        "This Moomintroll Winter’s Warmth vase piece locations guide shows where to find all 25 pieces of Moominmamma’s broken vase, including Moominhouse pickups, Bathing House cleanup, mountain pieces, Joxter camp pieces, forest pieces, Sorry-oo route pieces, herb cave pieces, bird drops, and side quest reward pieces.",
      image: [
        `${siteUrl}/images/moomintroll/moomintroll-all-vase-pieces.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-01.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-02.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-03.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-04.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-05.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-06.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-07.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-08.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-09.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-10.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-11.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-12.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-13.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-14.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-15.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-16.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-17.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-18.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-19.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-20.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-21.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-22.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-23.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-24.webp`,
        `${siteUrl}/images/moomintroll/vase-piece-25.webp`,
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
          name: "Moomintroll Winter’s Warmth vase piece locations",
        },
        {
          "@type": "Thing",
          name: "Moominmamma vase pieces",
        },
        {
          "@type": "Thing",
          name: "broken vase quest",
        },
        {
          "@type": "Thing",
          name: "all 25 vase pieces",
        },
        {
          "@type": "Thing",
          name: "bird-held vase pieces",
        },
        {
          "@type": "Thing",
          name: "side quest reward vase pieces",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth collectibles",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth 100% completion",
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
          name: "How many vase pieces are in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 25 vase pieces in Moomintroll Winter’s Warmth.",
          },
        },
        {
          "@type": "Question",
          name: "Where does the broken vase quest start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The broken vase quest starts in Moominhouse early in the story after Moominmamma’s vase is knocked over.",
          },
        },
        {
          "@type": "Question",
          name: "Are all vase pieces found on the ground?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Some are ground pickups, but others are bird drops, cave pickups, tool-gated pieces, or side quest rewards.",
          },
        },
        {
          "@type": "Question",
          name: "Which vase pieces are easiest to miss?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The easiest pieces to miss are bird-held pieces, winter being reward pieces, snow fort rewards, and sharp axe cave pieces.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check if I am missing one vase piece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check side quest rewards first, especially the diary quest, snow fort or friend quest, and winter being rewards. Then recheck bird drops, the forest route, and the sharp axe cave route.",
          },
        },
        {
          "@type": "Question",
          name: "Do birds with vase pieces come back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If a bird moves, follow the nearby route and look for its next perch. Bird-held items are recovered by hitting the bird with a snowball.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need the axe for every vase piece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You do not need the axe for every piece, but several mid-to-late cleanup pieces require the axe or sharp axe.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need the sharp axe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The sharp axe is needed for the herb cave and late ice cleanup pieces.",
          },
        },
        {
          "@type": "Question",
          name: "Can I collect vase pieces after lighting the Great Winter Bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The safest route is to collect all 25 before lighting the Great Winter Bonfire. Treat the bonfire as your final cleanup checkpoint.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an achievement for collecting all vase pieces?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This guide treats the vase as a completion objective. Check your achievement list after turning in all 25 pieces, then use the achievements guide for any remaining cleanup.",
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
          title="All 25 Vase Piece Locations in Moomintroll Winter’s Warmth"
          description="Find every vase piece in Moomintroll Winter’s Warmth, including Moominhouse pickups, bird-held pieces, cave pieces, sharp axe cleanup, and side quest reward pieces."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "all-vase-pieces-checklist",
              label: "All vase pieces checklist",
            },
            {
              id: "vase-pieces-by-tool",
              label: "By tool unlock",
            },
            {
              id: "fast-cleanup-route",
              label: "Fast cleanup route",
            },
            {
              id: "vase-pieces-by-area",
              label: "By area",
            },
            {
              id: "bird-vase-pieces",
              label: "Bird-held pieces",
            },
            {
              id: "side-quest-vase-pieces",
              label: "Side quest pieces",
            },
            {
              id: "moominhouse-vase-pieces",
              label: "Moominhouse",
            },
            {
              id: "bathing-house-and-crossroads-vase-pieces",
              label: "Bathing House",
            },
            {
              id: "fillyjonk-route-vase-piece",
              label: "Fillyjonk route",
            },
            {
              id: "mountain-vase-pieces",
              label: "Mountain",
            },
            {
              id: "joxter-camp-vase-pieces",
              label: "Joxter camp",
            },
            {
              id: "forest-vase-pieces",
              label: "Forest",
            },
            {
              id: "sorry-oo-route-vase-pieces",
              label: "Sorry-oo route",
            },
            {
              id: "herb-cave-and-late-cave-vase-pieces",
              label: "Herb cave",
            },
            {
              id: "side-quest-reward-vase-pieces",
              label: "Reward pieces",
            },
            {
              id: "what-happens-when-you-collect-all-vase-pieces",
              label: "All 25 reward",
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
              href: "/moomintroll/great-winter-bonfire",
              label: "Great Winter Bonfire Guide",
            },
            {
              href: "/moomintroll/little-my-snowball-fight",
              label: "Little My Snowball Fight Guide",
            },
            {
              href: "/moomintroll/side-quests",
              label: "All Side Quests Guide",
            },
            {
                href: "/moomintroll/ending-explained",
                label: "Ending Explained",
              },
            {
              href: "/moomintroll/achievements-guide",
              label: "Achievements and 100% Guide",
            },
          ]}
        >
          <MoomintrollVasePieceLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}