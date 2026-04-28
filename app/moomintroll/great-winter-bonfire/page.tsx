import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollGreatWinterBonfireContent from "@/data/moomintroll/great-winter-bonfire.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/great-winter-bonfire`;

export const metadata: Metadata = {
  title: "Great Winter Bonfire Guide in Moomintroll Winter’s Warmth",
  description:
    "Learn how to prepare the Great Winter Bonfire in Moomintroll Winter’s Warmth. Find all 125 firewood, invite every guest, and complete the final cleanup.",
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
          name: "Great Winter Bonfire Guide",
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
      headline: "Great Winter Bonfire Guide in Moomintroll Winter’s Warmth",
      description:
        "This Moomintroll Winter’s Warmth Great Winter Bonfire guide explains how to prepare the bonfire, collect 125 firewood, invite five guests, find the musician, help three winter beings, progress Little My and Sorry-oo, troubleshoot missing bonfire requirements, and finish cleanup before lighting the bonfire.",
      image: [
        `${siteUrl}/images/moomintroll/great-winter-bonfire-site.webp`,
        `${siteUrl}/images/moomintroll/great-winter-bonfire-requirements.webp`,
        `${siteUrl}/images/moomintroll/firewood-collection.webp`,
        `${siteUrl}/images/moomintroll/musician-lunchbox.webp`,
        `${siteUrl}/images/moomintroll/winter-being-quest.webp`,
        `${siteUrl}/images/moomintroll/five-guests-invited.webp`,
        `${siteUrl}/images/moomintroll/bonfire-final-cleanup.webp`,
        `${siteUrl}/images/moomintroll/great-winter-bonfire-lit.webp`,
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
          name: "Great Winter Bonfire",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth firewood",
        },
        {
          "@type": "Thing",
          name: "125 firewood",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth guests",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth musician",
        },
        {
          "@type": "Thing",
          name: "winter beings",
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
          name: "Moomintroll Winter’s Warmth ending",
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
          name: "What does the Great Winter Bonfire require?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Great Winter Bonfire requires 125 firewood, five guests, one musician, and three winter being tasks.",
          },
        },
        {
          "@type": "Question",
          name: "Where does the Great Winter Bonfire quest start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It starts at the old bonfire site after Too-ticky asks you to meet her east of Moominhouse.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get enough firewood in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Follow the 125 firewood table in the guide: collect early loose wood first, then use the shovel, axe, sharp axe, and side quests for the remaining cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I light the Great Winter Bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are probably missing one tracked requirement: firewood, guests, musician progress, or winter being progress. Check the quest objective and finish the missing requirement.",
          },
        },
        {
          "@type": "Question",
          name: "How do I invite guests to the Great Winter Bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finish the character’s problem, then return for the follow-up conversation. Some guest routes do not count immediately after the first interaction.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the musician in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The musician is recruited through the music and lunchbox route. Follow the bird toward the Bathing House or beach route and recover the lunchbox.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Little My for the bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The first Little My fight gives the shovel, but the later pond fights move her Great Winter Bonfire involvement forward.",
          },
        },
        {
          "@type": "Question",
          name: "How many winter beings do I need to help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main Great Winter Bonfire objective asks you to help three winter beings.",
          },
        },
        {
          "@type": "Question",
          name: "What do I do with Sorry-oo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Follow the forest and rescue route, help him through the wind section, then continue until you can get the whetstone, sharpen the axe, enter the herb cave, and gather herbs.",
          },
        },
        {
          "@type": "Question",
          name: "Should I collect all vase pieces before lighting the bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, that is the safest route if you care about completion.",
          },
        },
        {
          "@type": "Question",
          name: "Does lighting the Great Winter Bonfire start the ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It starts the celebration and pushes the story toward the ending stretch, so finish important cleanup first.",
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
          title="Great Winter Bonfire Guide in Moomintroll Winter’s Warmth"
          description="Prepare the Great Winter Bonfire in Moomintroll Winter’s Warmth by collecting 125 firewood, inviting five guests, finding the musician, helping three winter beings, and finishing final cleanup."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "great-winter-bonfire-requirements",
              label: "Bonfire requirements",
            },
            {
              id: "how-to-collect-firewood",
              label: "125 firewood",
            },
            {
              id: "bonfire-route",
              label: "Bonfire route",
            },
            {
              id: "how-to-invite-guests",
              label: "Invite guests",
            },
            {
              id: "how-to-find-the-musician",
              label: "Find the musician",
            },
            {
              id: "how-to-get-little-my-to-help",
              label: "Little My",
            },
            {
              id: "how-to-help-winter-beings",
              label: "Winter beings",
            },
            {
              id: "sorry-oo-and-the-bonfire-route",
              label: "Sorry-oo route",
            },
            {
              id: "bonfire-not-ready-troubleshooting",
              label: "Bonfire not ready?",
            },
            {
              id: "what-to-do-before-lighting-the-bonfire",
              label: "Before lighting",
            },
            {
              id: "does-lighting-the-bonfire-start-the-ending",
              label: "Starts the ending?",
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
              href: "/moomintroll/tool-upgrades",
              label: "All Tool Upgrades Guide",
            },
            {
                href: "/moomintroll/ending-explained",
                label: "Ending Explained",
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
              href: "/moomintroll/achievements-guide",
              label: "Achievements and 100% Guide",
            },
          ]}
        >
          <MoomintrollGreatWinterBonfireContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
