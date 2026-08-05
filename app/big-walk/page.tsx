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
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
  },
  {
    href: "/big-walk/achievements",
    label: "All 12 Big Walk Achievements",
  },
];

const faqEntities = [
  {
    question: "Is there one fixed tower order in Big Walk?",
    answer:
      "The opening drawbridge and Red Tower provide the clearest early route. After the Map Room opens, the island offers more choice. This guide hub uses Green as the next collection route.",
  },
  {
    question: "Do I need to solve every puzzle near a tower?",
    answer:
      "No. The Red and Green receivers each need five Heads while additional challenge sites remain available.",
  },
  {
    question: "Can I play Big Walk solo?",
    answer:
      "Big Walk progression is built for cooperative roles. The selectable world versions begin at two players.",
  },
  {
    question: "Can the group continue without the original Host?",
    answer:
      "The Host owns the save and world progress. The same Host needs to start that save again.",
  },
  {
    question: "Does entering the Map Room activate the Train or Chairlift?",
    answer:
      "No. The Map Room provides navigation and completion information. The Train and Chairlift have their own progression routes.",
  },
  {
    question: "What should I do immediately after crossing the drawbridge?",
    answer:
      "Use the Train Station as the first regrouping point, locate the red blinking beacon, and begin collecting five Heads for the Red Tower.",
  },
];

export const metadata: Metadata = {
  title: "Big Walk Guide: Walkthrough, Map, Puzzles & Green Key",
  description:
    "Follow Big Walk from the four-Head tutorial through the Red Tower, Map Room, puzzle routes, five Green Heads, Green Key, multiplayer, and achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Guide and Walkthrough Hub",
    description:
      "Choose the right guide for the tutorial, Red Tower, Map Room, puzzle solutions, Green Tower, multiplayer progression, and all 12 achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: socialImageUrl,
        width: 1856,
        height: 824,
        alt: "Big Walk Map Room island model with towers, routes, and completion flags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Guide and Walkthrough Hub",
    description:
      "Start with the tutorial, unlock the Map Room, solve blocked puzzles, complete the Green receiver, and track all 12 achievements.",
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
        "Big Walk Guide and Walkthrough Hub: Tutorial, Red Tower, Map Room, Puzzles, Green Key, Multiplayer, and Achievements",
      description:
        "This Big Walk guide hub connects the four-Head tutorial and drawbridge route, five-Head Red Tower and Map Room route, individual puzzle solutions, five-Head Green Tower route, multiplayer and Host-save guidance, and all 12 achievements.",
      image: [socialImageUrl],
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
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
          name: "Big Walk tutorial",
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
          name: "Big Walk puzzle solutions",
        },
        {
          "@type": "Thing",
          name: "Big Walk Green Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Green Key",
        },
        {
          "@type": "Thing",
          name: "Big Walk multiplayer",
        },
        {
          "@type": "Thing",
          name: "Big Walk achievements",
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
    label: "Choose the right guide",
  },
  {
    id: "progression",
    label: "Progression and receiver counts",
  },
  {
    id: "opening-route",
    label: "Four-Head opening route",
  },
  {
    id: "red-tower-route",
    label: "Red Tower route",
  },
  {
    id: "map-room",
    label: "Use the Map Room",
  },
  {
    id: "green-route",
    label: "Green Tower route",
  },
  {
    id: "multiplayer",
    label: "Multiplayer and Host saves",
  },
  {
    id: "achievements",
    label: "Achievements as checkpoints",
  },
  {
    id: "stuck",
    label: "Progression fixes",
  },
  {
    id: "faq",
    label: "FAQ",
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
          title="Big Walk Guide and Walkthrough Hub"
          description="Follow the early progression route from the four-Head tutorial through the Red Tower, Map Room, Green receiver, multiplayer systems, and all 12 achievements."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
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