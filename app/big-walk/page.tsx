import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import BigWalkGuideHubContent from "@/data/big-walk/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/big-walk`;

const socialImageUrl =
  `${siteUrl}/images/big-walk/big-walk-map-room-completion-flags.png`;

const relatedLinks = [
  {
    href: "/big-walk/beginner-guide",
    label: "Big Walk Beginner Guide",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Chairlift Guide",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/black-tower",
    label: "Black Tower and Black Key Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/peg-puzzle",
    label: "Big Walk Peg Puzzle Solution",
  },
  {
    href: "/big-walk/4166-1899-puzzle",
    label: "4166 1899 Puzzle Solution",
  },
  {
    href: "/big-walk/how-to-get-shiny",
    label: "How to Get Shiny",
  },
  {
    href: "/big-walk/purple-puzzles",
    label: "All 7 Purple Puzzles",
  },
  {
    href: "/big-walk/achievements",
    label: "All 12 Big Walk Achievements",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and Big Game Guide",
  },
];

const faqEntities = [
  {
    question: "What is the best tower order for a first Big Walk playthrough?",
    answer:
      "This walkthrough uses Red, Green, Yellow, Blue, then Black. Red unlocks the Map Room first, while Green, Yellow, and Blue progressively add the Chairlift, Tunnel, and Train. The colored-tower order is a routing preference rather than a mandatory sequence.",
  },
  {
    question: "When should I return to the Map Room in Big Walk?",
    answer:
      "Return when the group no longer knows which puzzle is worth doing next, after a major transport unlock if players have become scattered, and again during full-completion cleanup. There is no need to return after every puzzle.",
  },
  {
    question:
      "Should I complete every side puzzle before entering the Black Tower?",
    answer:
      "Not necessarily. For the normal Big Goodbye route, prioritize the progression the Black route currently requires. Full normal-puzzle and Purple Puzzle cleanup matters when continuing toward Big Game.",
  },
  {
    question: "Is Shiny required for the main Big Walk ending?",
    answer:
      "No. Shiny is treated as an optional achievement route rather than a required step in the normal tower-to-Big-Goodbye progression.",
  },
  {
    question: "Are the seven Purple Puzzles the final seven puzzles in Big Walk?",
    answer:
      "Not necessarily. They are seven new post-game challenges, but normal puzzles skipped before Big Goodbye can still remain unfinished.",
  },
  {
    question: "Should I start a new save after Big Goodbye?",
    answer:
      "No. Continue the same active save to complete the seven Purple Puzzles, remaining normal challenges, final-key route, and Big Game ending.",
  },
];

export const metadata: Metadata = {
  title: "Big Walk Walkthrough & Guide: Towers, Puzzles & Endings",
  description:
    "Follow Big Walk from the tutorial through every tower, Map Room, Chairlift, Tunnel, Train, Black Tower, puzzles, Big Goodbye, and Big Game.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Walkthrough and Guide Hub",
    description:
      "Follow the full progression route through the colored towers, transport network, Black Tower, puzzles, Big Goodbye, Purple cleanup, and Big Game.",
    siteName: "Whisper of the House",
    images: [
      {
        url: socialImageUrl,
        width: 1856,
        height: 824,
        alt: "Big Walk Map Room island model showing towers, routes, and puzzle completion flags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Walkthrough and Guide Hub",
    description:
      "Follow the full Big Walk route from the tutorial and colored towers through the Black Tower, endings, Purple Puzzles, and Big Game.",
    images: [socialImageUrl],
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
          name: "Big Walk Guide",
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
        "Big Walk Walkthrough and Guide: Towers, Puzzles, Transport, Big Goodbye, and Big Game",
      description:
        "A Big Walk progression hub covering the tutorial, Red Tower and Map Room, Green Chairlift, Yellow Tunnel, Blue Train, Black Tower and Wall, main ending, post-game Purple Puzzles, optional puzzle routes, achievements, and Big Game completion.",
      image: [socialImageUrl],
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk walkthrough",
        },
        {
          "@type": "Thing",
          name: "Big Walk progression",
        },
        {
          "@type": "Thing",
          name: "Big Walk Red Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Map Room",
        },
        {
          "@type": "Thing",
          name: "Big Walk Green Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Chairlift",
        },
        {
          "@type": "Thing",
          name: "Big Walk Yellow Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Tunnel",
        },
        {
          "@type": "Thing",
          name: "Big Walk Blue Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Train",
        },
        {
          "@type": "Thing",
          name: "Big Walk Black Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Black Key",
        },
        {
          "@type": "Thing",
          name: "Big Walk Purple Puzzles",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Goodbye",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Game",
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
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Big Walk Guides",
      numberOfItems: relatedLinks.length,
      itemListElement: relatedLinks.map((link, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: link.label,
          url: `${siteUrl}${link.href}`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

const toc = [
  {
    id: "choose-a-guide",
    label: "Choose your guide",
  },
  {
    id: "progression",
    label: "How progression works",
  },
  {
    id: "opening-route",
    label: "Tutorial and drawbridge",
  },
  {
    id: "red-tower-route",
    label: "Red Tower and Map Room",
  },
  {
    id: "map-room",
    label: "When to use the Map Room",
  },
  {
    id: "green-route",
    label: "Green Tower and Chairlift",
  },
  {
    id: "yellow-route",
    label: "Yellow Tower and Tunnel",
  },
  {
    id: "blue-route",
    label: "Blue Tower and Train",
  },
  {
    id: "black-route",
    label: "Black Tower and Wall",
  },
  {
    id: "ending-route",
    label: "Black Sphere and Big Goodbye",
  },
  {
    id: "post-game-route",
    label: "Post-game Purple Puzzles",
  },
  {
    id: "optional-puzzles",
    label: "Optional puzzle routes",
  },
  {
    id: "achievement-route",
    label: "Achievement checkpoints",
  },
  {
    id: "multiplayer",
    label: "Multiplayer roles",
  },
  {
    id: "stuck",
    label: "What to do when stuck",
  },
  {
    id: "faq",
    label: "FAQ",
  },
  {
    id: "complete-route",
    label: "Full progression route",
  },
];

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
          title="Big Walk Walkthrough and Guide"
          description="Follow the practical progression route from the tutorial and Map Room through the Chairlift, Tunnel, Train, Black Tower, Big Goodbye, Purple Puzzles, and Big Game."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkGuideHubContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Big Walk"
          heading="Looking for another game after Big Walk?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}