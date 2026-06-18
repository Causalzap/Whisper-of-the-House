import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GuideHubContent from "@/data/the-adventures-of-elliot/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot`;

const imageUrls = [
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-fay-revival.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-guidepost-southern-caves.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-ignite-magic-trial.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-hammer-unlock.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-golden-bell.webp`,
];

const toc = [
  { id: "the-adventures-of-elliot-guide", label: "Guide hub" },
  { id: "what-to-do-first", label: "What to do first" },
  { id: "beginner-route", label: "Beginner route" },
  { id: "magic-and-abilities", label: "Magic and abilities" },
  { id: "magicite-and-weapons", label: "Magicite and weapons" },
  { id: "cats-and-golden-bell", label: "Cats and Golden Bell" },
  { id: "shards-of-life-and-health", label: "Shards and health" },
  { id: "time-travel-and-ages", label: "Time travel and ages" },
  { id: "completion-roadmap", label: "Completion roadmap" },
  { id: "which-guide-next", label: "Which guide next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
  },
  {
    href: "/the-adventures-of-elliot/walkthrough",
    label: "The Adventures of Elliot Walkthrough",
  },
  {
    href: "/the-adventures-of-elliot/cat-locations",
    label: "The Adventures of Elliot Cat Locations",
  },
  {
    href: "/the-adventures-of-elliot/shards-of-life-locations",
    label: "The Adventures of Elliot Shards of Life Locations",
  },
  {
    href: "/the-adventures-of-elliot/achievements-guide",
    label: "The Adventures of Elliot Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "The Adventures of Elliot Guide: Walkthrough, Cats & Shards",
  description:
    "Start The Adventures of Elliot with Faie, Southern Caves, Ignite, Golden Bell, cats, Shards/Shrines, Secret Treasure Routes, time travel and trophies.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Adventures of Elliot Guide Hub: Walkthrough, Cats, Shards, Shrines and Achievements",
    description:
      "Use this The Adventures of Elliot guide hub to start the route, find the right walkthrough, track cats, understand Shards of Life, Shrines of Life, Secret Treasure Routes, time travel, Magicite, and trophy planning.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Faie revives Elliot at the start of The Adventures of Elliot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adventures of Elliot Guide Hub",
    description:
      "Start with Faie, Southern Caves, Ignite, cats, Shards, Shrines, Secret Treasure Routes, time travel and trophies.",
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
          name: "The Adventures of Elliot Guide",
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
        "The Adventures of Elliot Guide Hub: Beginner Route, Walkthrough, Cats, Shards of Life, Shrines of Life, Secret Treasure Routes and Achievements",
      description:
        "A player-focused guide hub for The Adventures of Elliot: The Millennium Tales covering what to do first, Faie, Hurick, Southern Caves, guideposts, Ignite, Hammer, bombs, Magicite, weapons, cats, Golden Bell, Cat Needle, Shards of Life, Shrines of Life, Secret Treasure Routes, cracked walls, time travel, ages, completion planning, achievements, and which dedicated guide to read next.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Adventures of Elliot: The Millennium Tales",
        },
        { "@type": "Thing", name: "The Adventures of Elliot guide" },
        { "@type": "Thing", name: "The Adventures of Elliot walkthrough" },
        { "@type": "Thing", name: "The Adventures of Elliot beginner guide" },
        { "@type": "Thing", name: "The Adventures of Elliot cats" },
        { "@type": "Thing", name: "The Adventures of Elliot Cat Needle" },
        { "@type": "Thing", name: "The Adventures of Elliot Shards of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot Shrines of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot Secret Treasure Routes" },
        { "@type": "Thing", name: "The Adventures of Elliot achievements" },
        { "@type": "Thing", name: "The Adventures of Elliot Magicite" },
        { "@type": "Thing", name: "The Adventures of Elliot time travel" },
        { "@type": "Thing", name: "Faie" },
        { "@type": "Thing", name: "Southern Caves" },
        { "@type": "Thing", name: "Ignite" },
        { "@type": "Thing", name: "Golden Bell" },
        { "@type": "Thing", name: "Moon Mirror" },
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
          name: "What should I do first in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the story until Faie joins you, meet Hurick, head toward Southern Caves, touch guideposts, learn Ignite, and return to the village route. Do not waste too much time forcing blocked chests before you have more tools.",
          },
        },
        {
          "@type": "Question",
          name: "Is Faie only a story character?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Faie is part of the early revival setup, but she also matters for magic, hints, combat support, puzzles, and route progression.",
          },
        },
        {
          "@type": "Question",
          name: "When do I get Ignite in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ignite comes from an early magic trial. After that, you can light objects and solve routes that were not possible before.",
          },
        },
        {
          "@type": "Question",
          name: "Should I explore every side path immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Check side paths that are easy to reach, but leave clearly blocked routes for later. Many paths need Hammer, bombs, another ability, story progress, or a different age.",
          },
        },
        {
          "@type": "Question",
          name: "Are cats important in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cats are tied to rewards and completion. Bring found cats to the cat-loving traveler beside the Kingdom of Huther fountain, listen for meows while exploring, and use Cat Needle for cleanup after it unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "What are Shards of Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shards of Life are health-upgrade fragments. Collecting 4 Shards of Life gives Elliot a max HP increase.",
          },
        },
        {
          "@type": "Question",
          name: "Are Shards of Life and Shrines of Life the same thing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Shards of Life are collectible fragments, while Shrines of Life are separate challenge-style locations with combat, puzzles, and rewards.",
          },
        },
        {
          "@type": "Question",
          name: "What are Secret Treasure Routes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Secret Treasure Routes are hidden treasure areas opened by bombing cracked walls. Track cracked walls separately from ordinary bomb rocks.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make a final Magicite build early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Collect Magicite and test weapon effects first. A real best-build page needs more weapons, Magicite options, and boss testing than the opening route alone can provide.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a trophy guide for The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Use the Achievements Guide for trophy categories, endings, cats, weapons, Magicite, quests, manuscripts, and completion planning.",
          },
        },
        {
          "@type": "Question",
          name: "Are PS5, Switch, Xbox, and PC routes different?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The route and collectibles should be treated as the same unless a platform-specific issue is confirmed. Platform differences are mostly performance, image clarity, controls, and save-related details, not separate guide routes.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after this guide hub?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Beginner Guide if you are still in the opening hours, or the Walkthrough if you want the early route in order.",
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
          title="Start The Adventures of Elliot With the Right Guide"
          description="Use this hub to pick the right next guide for Faie, Southern Caves, cats, Shards, Shrines, Secret Treasure Routes, time travel and completion."
          gameTitle="The Adventures of Elliot"
          gameHref="/the-adventures-of-elliot"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

