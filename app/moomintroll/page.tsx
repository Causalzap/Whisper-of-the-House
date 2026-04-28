import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollGuideContent from "@/data/moomintroll/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll`;

export const metadata: Metadata = {
  title: "Moomintroll Winter’s Warmth Complete Walkthrough & Guide",
  description:
    "Complete Moomintroll Winter’s Warmth walkthrough covering the main story, Great Winter Bonfire, tools, upgrades, vase pieces, side quests, achievements, and ending.",
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
        "Moomintroll Winter’s Warmth Complete Walkthrough & Guide",
      description:
        "This Moomintroll Winter’s Warmth complete walkthrough and guide explains the full main story route, what to do first in Moominhouse, how to get the mittens and shovel, how the Great Winter Bonfire works, where tool upgrades fit into progression, how vase pieces and side quests work, and what to do before the final ending sequence.",
      image: [
        `${siteUrl}/images/moomintroll/moomintroll-winters-warmth-guide.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-moominhouse-opening.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-great-winter-bonfire.webp`,
        `${siteUrl}/images/moomintroll/little-my-snowball-fight.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-tool-upgrades.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-vase-pieces.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-final-ice-ending.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-spring-snufkin.webp`,
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
          name: "Moomintroll Winter’s Warmth walkthrough",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth guide",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth complete walkthrough",
        },
        {
          "@type": "Thing",
          name: "Great Winter Bonfire",
        },
        {
          "@type": "Thing",
          name: "Moominmamma vase pieces",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth vase piece locations",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth tool upgrades",
        },
        {
          "@type": "Thing",
          name: "Little My snowball fight",
        },
        {
          "@type": "Thing",
          name: "Too-ticky",
        },
        {
          "@type": "Thing",
          name: "Snufkin",
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
          name: "Moomintroll Winter’s Warmth ending explained",
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
          name: "Is this a complete Moomintroll Winter’s Warmth walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This walkthrough covers the main story route from the Moominhouse opening to the Great Winter Bonfire, final ice sequence, spring ending, and Snufkin’s return.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by finding the matches, lighting lamps, closing the open windows, checking the broken vase, restarting the furnace, and following the squirrel outside.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the mittens in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get the mittens in the Bathing House. The ancestor runs away with them, and you need to follow it until it drops them. After that, Too-ticky teaches you how to throw snowballs.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the shovel in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beat Little My in the first snowball fight near Moominhouse. After you win, you can use Moominmamma’s shovel to clear deep snow.",
          },
        },
        {
          "@type": "Question",
          name: "How many vase pieces are there in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 25 vase pieces in Moomintroll Winter’s Warmth. Some are found during the main route, while others require side quests, birds, caves, snow piles, or later tools.",
          },
        },
        {
          "@type": "Question",
          name: "Should I collect all vase pieces before the ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, that is the safest route. Before lighting the Great Winter Bonfire, check your vase piece count and finish any obvious cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the axe in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get the axe during the musician quest after recovering the lunchbox near the Bathing House. A fallen tree blocks the route, and the musician gives you Moominpappa’s axe.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sharpen the axe in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get the whetstone from Fillyjonk’s children, then bring it to Too-ticky. The sharp axe lets you break stronger ice obstacles.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Great Winter Bonfire require?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main bonfire preparation asks you to gather firewood, invite guests, find a musician, and help winter beings around Moominvalley.",
          },
        },
        {
          "@type": "Question",
          name: "Can I play Moomintroll Winter’s Warmth without playing Snufkin first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The story references Snufkin and Moominvalley, but this is a standalone Moomintroll adventure. Playing Snufkin first helps with character context, but it is not required.",
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
          title="Moomintroll Winter’s Warmth Complete Walkthrough & Guide"
          description="Follow this Moomintroll Winter’s Warmth walkthrough from the Moominhouse opening to the Great Winter Bonfire, tool upgrades, vase pieces, side quests, final ice sequence, and spring ending."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "walkthrough-route",
              label: "Walkthrough route",
            },
            {
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "opening-moominhouse",
              label: "Opening: Moominhouse",
            },
            {
              id: "mittens-and-snowballs",
              label: "Mittens and snowballs",
            },
            {
              id: "shovel-and-little-my",
              label: "Shovel and Little My",
            },
            {
              id: "great-winter-bonfire",
              label: "Great Winter Bonfire",
            },
            {
              id: "tools-and-upgrades",
              label: "Tools and upgrades",
            },
            {
              id: "vase-pieces",
              label: "Vase pieces",
            },
            {
              id: "side-quests",
              label: "Side quests",
            },
            {
              id: "recommended-guide-order",
              label: "Guide order",
            },
            {
              id: "achievements-and-100-percent",
              label: "Achievements and 100%",
            },
            {
              id: "ending-explained",
              label: "Ending explained",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
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
            {
              href: "/moomintroll/ending-explained",
              label: "Ending Explained Guide",
            },
          ]}
        >
          <MoomintrollGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}