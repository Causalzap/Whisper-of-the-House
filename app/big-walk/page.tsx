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
    label: "Green Tower and Green Key Guide",
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
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/achievements",
    label: "All 12 Big Walk Achievements",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and True Ending Guide",
  },
];

const faqEntities = [
  {
    question: "Is there one fixed colored-tower order in Big Walk?",
    answer:
      "No. This guide uses Green, then Yellow, then Blue because the Yellow Tunnel shortens the route toward the Blue region.",
  },
  {
    question: "Are Head rewards locked to a tower color?",
    answer:
      "No. Any completed physical Head can be inserted into the active receiver.",
  },
  {
    question: "Do I need to solve every puzzle near a tower?",
    answer:
      "No. Each receiver requires a fixed number of Heads while additional challenge sites remain available.",
  },
  {
    question: "Does the Map Room activate the Tram, Tunnel, or Train?",
    answer:
      "No. The Map Room provides route and completion information. Each transport system has its own progression route.",
  },
  {
    question: "Can the group continue without the original Host?",
    answer:
      "The Host owns the save and world progress. The same Host needs to start that save again.",
  },
  {
    question: "Can Big Walk be played solo?",
    answer:
      "The selectable world versions begin at two players, and the progression is built around cooperative roles.",
  },
];

export const metadata: Metadata = {
  title: "Big Walk Guide: Towers, Map, Train, Tunnel & Puzzles",
  description:
    "Follow Big Walk from the tutorial through Red, Green, Yellow and Blue Towers, the Map Room, Tunnel, Train, puzzles, multiplayer, and achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Guide and Walkthrough Hub",
    description:
      "Choose the right guide for the tutorial, colored towers, Map Room, Yellow Tunnel, Blue Train, puzzle solutions, multiplayer, and achievements.",
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
      "Complete the tutorial, unlock the Map Room, finish the colored towers, open the Tunnel, activate the Train, and track all achievements.",
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
        "Big Walk Guide and Walkthrough Hub: Towers, Map Room, Yellow Tunnel, Blue Train, Puzzles, Multiplayer, and Achievements",
      description:
        "This Big Walk guide hub connects the four-Head tutorial, Red Tower and Map Room, Green receiver route, Yellow Tower and Tunnel, Blue Tower and Train, puzzle solutions, multiplayer planning, reconnect recovery, and all 12 achievements.",
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
          name: "Big Walk Yellow Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Yellow Tunnel",
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
          name: "Big Walk puzzle solutions",
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
    label: "Receiver counts and Heads",
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
    id: "yellow-route",
    label: "Yellow Tower and Tunnel",
  },
  {
    id: "blue-route",
    label: "Blue Tower and Train",
  },
  {
    id: "late-game-endings",
    label: "Wall and endings",
  },
  {
    id: "multiplayer",
    label: "Multiplayer roles and recovery",
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
          description="Follow the practical route from the four-Head tutorial through the Red, Green, Yellow and Blue Towers, Map Room, Tunnel, Train, multiplayer systems, and all 12 achievements."
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