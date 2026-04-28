import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollSideQuestsContent from "@/data/moomintroll/side-quests.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/side-quests`;

export const metadata: Metadata = {
  title: "All Side Quests in Moomintroll Winter’s Warmth",
  description:
    "Find and complete all side quests in Moomintroll Winter’s Warmth. Our guide covers the diary quest, snow fort, winter beings, and all key rewards.",
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
          name: "All Side Quests",
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
      headline: "All Side Quests in Moomintroll Winter’s Warmth",
      description:
        "This Moomintroll Winter’s Warmth side quests guide covers required and optional quest chains, including winter being tasks, the diary quest, snow fort friend quest, Fillyjonk’s children, Misabel’s briefcase and lights, the musician lunchbox route, Little My rematches, Sorry-oo’s herb route, vase piece rewards, firewood rewards, and Great Winter Bonfire cleanup.",
      image: [
        `${siteUrl}/images/moomintroll/side-quests-overview.webp`,
        `${siteUrl}/images/moomintroll/winter-being-quest.webp`,
        `${siteUrl}/images/moomintroll/diary-quest.webp`,
        `${siteUrl}/images/moomintroll/snow-fort-quest.webp`,
        `${siteUrl}/images/moomintroll/sorry-oo-quest.webp`,
        `${siteUrl}/images/moomintroll/fillyjonk-children.webp`,
        `${siteUrl}/images/moomintroll/musician-lunchbox.webp`,
        `${siteUrl}/images/moomintroll/side-quest-reward.webp`,
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
          name: "Moomintroll Winter’s Warmth side quests",
        },
        {
          "@type": "Thing",
          name: "winter beings",
        },
        {
          "@type": "Thing",
          name: "diary quest",
        },
        {
          "@type": "Thing",
          name: "snow fort quest",
        },
        {
          "@type": "Thing",
          name: "Misabel briefcase and lights",
        },
        {
          "@type": "Thing",
          name: "Little My",
        },
        {
          "@type": "Thing",
          name: "Sorry-oo",
        },
        {
          "@type": "Thing",
          name: "musician lunchbox",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth vase pieces",
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
          name: "Are side quests required in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some are required for main progress, especially guest routes, winter being tasks, Little My’s route, the musician route, and Sorry-oo’s route. Others are optional but useful for vase pieces, firewood, and completion.",
          },
        },
        {
          "@type": "Question",
          name: "Which side quests can I skip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a story-focused route, you can skip most completion-only reward quests. Do not skip bonfire-required winter being tasks, guest routes, the musician lunchbox route, Little My’s later route, or Sorry-oo’s late route.",
          },
        },
        {
          "@type": "Question",
          name: "How many winter beings do I need to help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Great Winter Bonfire objective asks for three winter being tasks, but helping extra winter beings can still be useful for rewards and cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Which side quests reward vase pieces?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The diary quest, snow fort or friend quest, and some winter being reward quests can give vase pieces. If you are missing a vase piece, check quest rewards before rechecking every map route.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my side quest not complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most blockers are missing tools, unfinished follow-ups, or longer quest chains. Check the quest’s required tool, then revisit the quest-giver or nearby route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I finish the diary quest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recover the diary from the bird route, return it to the winter being, then finish the final diary interaction.",
          },
        },
        {
          "@type": "Question",
          name: "How do I complete the snow fort quest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need reinforced mittens to roll large snowballs. Place the missing snowballs, finish the light interaction if needed, then collect the reward.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Misabel hiding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After you return her briefcase and relight the house, follow the crying sound to the drawing room and check the closet.",
          },
        },
        {
          "@type": "Question",
          name: "Is Little My’s first fight a side quest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It works like a progression quest. The first fight gives you the shovel, while the later pond rematches help move her bonfire involvement forward.",
          },
        },
        {
          "@type": "Question",
          name: "What do I do with Sorry-oo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sorry-oo’s route connects forest rescue, the wind section, whetstone, sharp axe, herb cave, and herbs.",
          },
        },
        {
          "@type": "Question",
          name: "Should I finish side quests before lighting the Great Winter Bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, especially if you care about completion. Finish vase piece rewards, winter being tasks, tool-gated routes, and guest-chain follow-ups first.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check if I am stuck at the end?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Missing endgame progress is usually tied to reward quests, winter beings, firewood cleanup, guest follow-ups, Little My, or Sorry-oo.",
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
          title="All Side Quests in Moomintroll Winter’s Warmth"
          description="Complete every required and optional side quest in Moomintroll Winter’s Warmth, including winter beings, the diary quest, snow fort, Misabel, Little My, Sorry-oo, musician lunchbox, and reward cleanup."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "all-side-quests-checklist",
              label: "Side quest checklist",
            },
            {
              id: "quest-dependency-chains",
              label: "Quest dependencies",
            },
            {
              id: "quick-missing-quest-diagnosis",
              label: "Missing quest diagnosis",
            },
            {
              id: "side-quest-rewards",
              label: "Quest rewards",
            },
            {
              id: "winter-being-side-quests",
              label: "Winter beings",
            },
            {
              id: "diary-quest",
              label: "Diary quest",
            },
            {
              id: "snow-fort-friend-quest",
              label: "Snow fort quest",
            },
            {
              id: "fillyjonk-children-quest",
              label: "Fillyjonk children",
            },
            {
              id: "misabel-briefcase-and-lights",
              label: "Misabel",
            },
            {
              id: "musician-lunchbox-quest",
              label: "Musician lunchbox",
            },
            {
              id: "little-my-side-quest-chain",
              label: "Little My",
            },
            {
              id: "sorry-oo-quest-chain",
              label: "Sorry-oo",
            },
            {
              id: "best-time-to-finish-side-quests",
              label: "Best timing",
            },
            {
              id: "side-quest-troubleshooting",
              label: "Troubleshooting",
            },
            {
              id: "before-great-winter-bonfire",
              label: "Before bonfire",
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
              href: "/moomintroll/great-winter-bonfire",
              label: "Great Winter Bonfire Guide",
            },
            {
              href: "/moomintroll/vase-piece-locations",
              label: "All 25 Vase Piece Locations",
            },
            {
              href: "/moomintroll/tool-upgrades",
              label: "All Tool Upgrades Guide",
            },
            {
              href: "/moomintroll/little-my-snowball-fight",
              label: "Little My Snowball Fight Guide",
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
          <MoomintrollSideQuestsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}