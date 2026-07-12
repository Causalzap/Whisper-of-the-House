import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ForestEscapeLastTrainGuideContent from "@/data/forest-escape-last-train/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/forest-escape-last-train`;

const beginnerGuideUrl = `${pageUrl}/beginner-guide`;
const puzzleGuideUrl = `${pageUrl}/locations-puzzle-guide`;
const wardenBossGuideUrl = `${pageUrl}/warden-boss-guide`;
const achievementsGuideUrl = `${pageUrl}/achievements-guide`;

const heroImageUrl = `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-map-boss-door-keys.webp`;

const toc = [
  {
    id: "choose-the-right-guide",
    label: "Choose the right guide",
  },
  {
    id: "progression",
    label: "Game progression",
  },
  {
    id: "find-your-problem",
    label: "Find your problem",
  },
  {
    id: "latest-guide-coverage",
    label: "Latest coverage",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/forest-escape-last-train/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/forest-escape-last-train/locations-puzzle-guide",
    label: "Locations and Puzzle Guide",
  },
  {
    href: "/forest-escape-last-train/warden-boss-guide",
    label: "Warden Boss Guide",
  },
  {
    href: "/forest-escape-last-train/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Forest Escape Last Train Guide: Boss, Puzzles & Achievements",
  description:
    "Find Forest Escape Last Train guides for train survival, puzzle solutions, the Warden boss, Cannon Carriage, all 41 achievements, and Warden Keys.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Forest Escape Last Train Guide Hub",
    description:
      "Choose the right guide for first-run survival, four verified puzzles, the complete Warden boss route, and all 41 achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Forest Escape Last Train objective page showing train upgrades newspapers Warden Keys and the Boss Door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Escape Last Train Guide Hub",
    description:
      "Find survival help, puzzle solutions, the complete Warden boss route, Warden Keys, newspapers, and all 41 achievements.",
    images: [heroImageUrl],
  },
};

const faqEntities = [
  {
    question: "Which Forest Escape Last Train guide should I read first?",
    answer:
      "Start with the Beginner Guide when you are new or cannot keep the train and team alive. Use the Locations and Puzzle Guide for Music Rails, Iris Lake, Carousel, and Trippy Grid. Use the Warden Boss Guide for The Depot, the Cannon Carriage, poison, platform puzzles, and the final fight. Use the Achievements Guide for all 41 achievements and cleanup planning.",
  },
  {
    question: "How do I unlock the Warden boss?",
    answer:
      "Collect all six global Warden Keys, attach the Cannon Carriage at The Depot, prepare Coal and Rock, and insert the keys at the final barrier.",
  },
  {
    question: "Is the train safe during the Warden poison attack?",
    answer:
      "No. Poison can cover the entire stopped carriage. Keep the Engineer near the controls and start moving as soon as the gas appears.",
  },
  {
    question: "How much does the mounted cannon cost to fire?",
    answer:
      "Each mounted-cannon shot costs 1 Coal and 2 Rock. Coal is also required to move the locomotive.",
  },
  {
    question: "What does the Forest Escape Last Train guide hub cover?",
    answer:
      "The guide cluster covers first-run survival, train controls, four verified location puzzles, the complete Warden final route, and all 41 launch achievements.",
  },
  {
    question: "Is this Forest Escape Last Train guide updated for Early Access?",
    answer:
      "Yes. The hub and its four detailed guides were last verified on July 12, 2026 using the Early Access launch build.",
  },
  {
    question: "Does this hub contain every full solution?",
    answer:
      "The hub summarizes progression and directs players to the correct detailed guide. Full puzzle routes, Warden phases, screenshots, achievement requirements, and cleanup strategies remain on the dedicated pages.",
  },
];

const guideItems = [
  {
    position: 1,
    name: "Forest Escape Last Train Beginner Guide",
    url: beginnerGuideUrl,
    description:
      "First-run survival help for train parts, controls, difficulty, Coal, shops, revives, checkpoints, solo play, and co-op roles.",
  },
  {
    position: 2,
    name: "Forest Escape Last Train Locations and Puzzle Guide",
    url: puzzleGuideUrl,
    description:
      "Verified solutions for Music Rails, Iris Lake, Carousel, and Trippy Grid.",
  },
  {
    position: 3,
    name: "Forest Escape Last Train Warden Boss Guide",
    url: wardenBossGuideUrl,
    description:
      "Complete Warden strategy covering The Depot, Cannon Carriage, six-key Boss Door, cannon costs, poison, platform puzzles, and the final Ear.",
  },
  {
    position: 4,
    name: "Forest Escape Last Train Achievements Guide",
    url: achievementsGuideUrl,
    description:
      "All 41 achievements with Warden-key tracking, newspapers, one-run counters, resource goals, and cleanup planning.",
  },
];

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
          name: "Forest Escape Last Train Guide Hub",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Forest Escape: Last Train Guide Hub",
      headline: "Forest Escape: Last Train Guide Hub",
      description:
        "A navigation hub for Forest Escape: Last Train guides covering first-run survival, train controls, four verified puzzle locations, The Depot, the Cannon Carriage, the complete Warden boss route, all 41 achievements, Warden Keys, and newspapers.",
      image: heroImageUrl,
      inLanguage: "en",
      datePublished: "2026-07-11",
      dateModified: "2026-07-12",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
      hasPart: guideItems.map((guide) => ({
        "@id": `${guide.url}#article`,
      })),
      about: {
        "@type": "VideoGame",
        name: "Forest Escape: Last Train",
        url: pageUrl,
      },
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
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "Forest Escape Last Train Guides",
      numberOfItems: guideItems.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: guideItems.map((guide) => ({
        "@type": "ListItem",
        position: guide.position,
        item: {
          "@type": "Article",
          "@id": `${guide.url}#article`,
          name: guide.name,
          headline: guide.name,
          url: guide.url,
          description: guide.description,
          inLanguage: "en",
          isPartOf: {
            "@id": `${pageUrl}#webpage`,
          },
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
          title="Forest Escape: Last Train Guide Hub"
          description="Choose the right guide for first-run survival, four verified puzzle solutions, the complete Warden boss route, all 41 achievements, Warden Keys, newspapers, and final progression."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ForestEscapeLastTrainGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}