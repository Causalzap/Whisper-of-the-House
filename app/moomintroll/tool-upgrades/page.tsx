import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollToolUpgradesContent from "@/data/moomintroll/tool-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/tool-upgrades`;

export const metadata: Metadata = {
  title: "All Tool & Upgrade Locations in Moomintroll Winter’s Warmth",
  description:
    "Part of our complete Moomintroll Winter’s Warmth walkthrough, this guide helps you find every tool and upgrade, including the shovel, dash, and axe.",
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
          name: "All Tool Upgrades",
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
      headline: "All Tool Upgrades in Moomintroll Winter’s Warmth",
      description:
        "This Moomintroll Winter’s Warmth tool upgrades guide explains how to get every major tool and upgrade, including matches, scarf, mittens, shovel, reinforced mittens, dash, axe, longer-lasting matches, sharp axe, upgraded shovel, lamp oil, whetstone, scrap metal, and Too-ticky upgrades.",
      image: [
        `${siteUrl}/images/moomintroll/moomintroll-tools-overview.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-shovel.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-axe.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-lamp-oil.webp`,
        `${siteUrl}/images/moomintroll/moomintroll-sharp-axe.webp`,
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
          name: "Moomintroll Winter’s Warmth tool upgrades",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth shovel",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth axe",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth sharp axe",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth lamp oil",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth whetstone",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth reinforced mittens",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth upgraded shovel",
        },
        {
          "@type": "Thing",
          name: "Too-ticky upgrades",
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
          name: "How many tools are in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main progression tools and abilities are matches, scarf, mittens, shovel, reinforced mittens, dash, axe, longer-lasting matches, sharp axe, and upgraded shovel.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Too-ticky?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Too-ticky is usually at or near the Bathing House on the ice, reached from the early outside route after leaving Moominhouse. Return to her when you find upgrade items such as sturdy yarn, lamp oil, whetstone, or scrap metal.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the shovel in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beat Little My in the first snowball fight near Moominhouse. After you win, you get Moominmamma’s shovel.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the axe in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get the axe during the musician and lunchbox route. After a tree blocks the path, the musician gives you Moominpappa’s axe.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t my axe break ice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You probably need the sharp axe. Get the whetstone from Fillyjonk’s children and bring it to Too-ticky.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the lamp oil in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lamp oil is found in the cave. Bring it to Too-ticky to upgrade your matches.",
          },
        },
        {
          "@type": "Question",
          name: "What does lamp oil do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lamp oil lets Too-ticky make your matches last longer.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the whetstone in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The whetstone is given by Fillyjonk’s children before the herb cave route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sharpen the axe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bring the whetstone to Too-ticky. She will sharpen Moominpappa’s axe into the sharp axe.",
          },
        },
        {
          "@type": "Question",
          name: "How do I roll large snowballs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need reinforced mittens. Get sturdy yarn from the Hemulen and bring it to Too-ticky.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after getting a new tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Return to earlier blocked routes. Many vase pieces, firewood piles, notes, winter being quests, and side paths are locked behind tools.",
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
          title="All Tool Upgrades in Moomintroll Winter’s Warmth"
          description="Find every tool and upgrade in Moomintroll Winter’s Warmth, including the shovel, axe, lamp oil, whetstone, sharp axe, reinforced mittens, upgraded shovel, and Too-ticky upgrades."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "all-tools-and-upgrades-checklist",
              label: "Tools checklist",
            },
            {
              id: "where-is-too-ticky",
              label: "Where is Too-ticky?",
            },
            {
              id: "what-too-ticky-upgrades",
              label: "Too-ticky upgrades",
            },
            {
              id: "upgrade-items",
              label: "Upgrade items",
            },
            {
              id: "how-to-get-matches",
              label: "Matches",
            },
            {
              id: "how-to-get-the-scarf",
              label: "Scarf",
            },
            {
              id: "how-to-get-mittens",
              label: "Mittens",
            },
            {
              id: "how-to-get-the-shovel",
              label: "Shovel",
            },
            {
              id: "how-to-get-reinforced-mittens",
              label: "Reinforced mittens",
            },
            {
              id: "how-to-get-dash",
              label: "Dash",
            },
            {
              id: "how-to-get-the-axe",
              label: "Axe",
            },
            {
              id: "where-to-find-lamp-oil",
              label: "Lamp oil",
            },
            {
              id: "where-to-find-the-whetstone",
              label: "Whetstone",
            },
            {
              id: "how-to-get-the-sharp-axe",
              label: "Sharp axe",
            },
            {
              id: "how-to-get-the-upgraded-shovel",
              label: "Upgraded shovel",
            },
            {
              id: "obstacles-and-tools",
              label: "Obstacles and tools",
            },
            {
              id: "why-tool-not-working",
              label: "Tool not working?",
            },
            {
              id: "cleanup-after-upgrades",
              label: "Cleanup route",
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
                href: "/moomintroll/ending-explained",
                label: "Ending Explained",
              },
            {
              href: "/moomintroll/achievements-guide",
              label: "Achievements and 100% Guide",
            },
          ]}
        >
          <MoomintrollToolUpgradesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}