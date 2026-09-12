import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/slay-the-spire-2/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/beginner-guide`;

const metadataTitle =
  "Slay the Spire 2 Beginner Guide – How to Get Your First Win";

const metadataDescription =
  "Get your first Slay the Spire 2 win with better route, card, shop, Elite, potion, Rest, and Smith decisions instead of forcing a build too early.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-map-branching-route.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-lethal-before-block.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-card-reward-skip.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-shop-remove-strike.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-beginner-rest-or-smith.webp`,
];

const toc = [
  {
    id: "first-win-plan",
    label: "Start with the map",
  },
  {
    id: "solve-the-next-fight",
    label: "Build for the next fight",
  },
  {
    id: "check-lethal",
    label: "Check lethal before blocking",
  },
  {
    id: "skip-card-rewards",
    label: "When to skip card rewards",
  },
  {
    id: "when-to-commit",
    label: "When to commit to synergy",
  },
  {
    id: "shops",
    label: "When a shop is worth it",
  },
  {
    id: "rest-or-smith",
    label: "Rest or Smith?",
  },
  {
    id: "elite-readiness",
    label: "When to fight an Elite",
  },
  {
    id: "enemy-priority",
    label: "Which enemy to kill first",
  },
  {
    id: "potions",
    label: "When to use potions",
  },
  {
    id: "act-one-check",
    label: "What Act 1 should prove",
  },
  {
    id: "act-two-reset",
    label: "Reset your plan in Act 2",
  },
  {
    id: "after-first-win",
    label: "What to do after your first win",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/regent-guide",
    label: "Slay the Spire 2 Regent Guide",
  },
  {
    href: "/slay-the-spire-2/necrobinder-guide",
    label: "Slay the Spire 2 Necrobinder Guide",
  },
  {
    href: "/slay-the-spire-2/multiplayer-guide",
    label: "Slay the Spire 2 Multiplayer Guide",
  },
  {
    href: "/slay-the-spire-2",
    label: "Slay the Spire 2 Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,

  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: metadataTitle,

    description:
      "Learn how to plan a route, judge card rewards, spend Gold, use potions, choose Rest or Smith, and decide when an Elite is actually worth the risk.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 map with branching routes between Rest Sites, Elites, enemies, and a Merchant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Plan the Act, take cards with a real job, skip weak rewards, spend Gold with a purpose, and reach your first Slay the Spire 2 win more consistently.",

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
          name: "Slay the Spire 2 Guide",
          item: `${siteUrl}/slay-the-spire-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Slay the Spire 2 Beginner Guide",
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
        "Slay the Spire 2 Beginner Guide: How to Get Your First Win",

      description:
        "A player-focused Slay the Spire 2 beginner guide for getting a first clear by reading the full Act map before committing to a path, choosing cards that solve immediate combat problems, using Skip to protect draw quality, judging Merchant purchases against current Gold, deciding between Rest and Smith based on the next dangerous stretch, spending potions when they preserve a run, evaluating Elite risk from deck strength rather than HP alone, prioritizing enemies by their next threat, and resetting the route plan when entering a new Act.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-12",

      articleSection: "Slay the Spire 2 Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Slay the Spire 2",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 beginner strategy",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 first win",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Slay the Spire 2 map pathing",
        },
        {
          "@type": "Thing",
          name: "Card rewards",
        },
        {
          "@type": "Thing",
          name: "Elite enemies",
        },
        {
          "@type": "Thing",
          name: "Merchants",
        },
        {
          "@type": "Thing",
          name: "Rest Sites",
        },
        {
          "@type": "Thing",
          name: "Potions",
        },
        {
          "@type": "Thing",
          name: "Card removal",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Slay the Spire 2 Beginner Guide: How to Get Your First Win"
          description="My first win gets much easier when I stop forcing a build and start solving the next problem: choose a route with an exit, take cards with a real job, spend Gold where it changes the run, and only take the risks the current deck can actually support."
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="September 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}