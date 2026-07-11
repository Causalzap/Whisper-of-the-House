import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ForestEscapeLastTrainHubContent from "@/data/forest-escape-last-train/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/forest-escape-last-train`;

const beginnerGuideUrl = `${pageUrl}/beginner-guide`;
const puzzleGuideUrl = `${pageUrl}/locations-puzzle-guide`;
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
    label: "Puzzle Guide",
  },
  {
    href: "/forest-escape-last-train/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Forest Escape Last Train Guide Hub",
  description:
    "Start here for beginner survival, four verified puzzle solutions, all 41 achievements, Warden Keys, newspapers, and final-route planning.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Forest Escape Last Train Guide Hub",
    description:
      "Choose the right Forest Escape: Last Train guide for first-run survival, puzzle solutions, Warden Keys, newspapers, and all 41 achievements.",
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
      "Find the beginner guide, four verified puzzle solutions, and the complete 41-achievement checklist.",
    images: [heroImageUrl],
  },
};

const faqEntities = [
  {
    question: "Which Forest Escape Last Train guide should I read first?",
    answer:
      "Start with the Beginner Guide when you are new or cannot keep the train and team alive. Use the Puzzle Guide for Music Rails, Iris Lake, Carousel, and Trippy Grid. Use the Achievements Guide for Warden Keys, newspapers, one-run counters, and 100% completion planning.",
  },
  {
    question: "What does the Forest Escape Last Train guide hub cover?",
    answer:
      "The guide cluster covers first-run train survival, four verified puzzle locations, and all 41 Early Access launch achievements.",
  },
  {
    question: "Is this Forest Escape Last Train guide updated for Early Access?",
    answer:
      "Yes. The hub and its three detailed guides were last verified on July 11, 2026 using the Early Access launch build.",
  },
  {
    question:
      "Does this hub contain the full puzzle and achievement solutions?",
    answer:
      "The hub summarizes progression and directs players to the correct detailed guide. Full puzzle routes, screenshots, achievement requirements, calculations, and cleanup strategies are kept on the dedicated pages.",
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
        "A navigation hub for Forest Escape: Last Train guides covering first-run survival, train controls, coal and shops, four verified puzzle locations, all 41 achievements, Warden Keys, newspapers, and final-route planning.",
      image: heroImageUrl,
      inLanguage: "en",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
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
      numberOfItems: 3,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forest Escape Last Train Beginner Guide",
          url: beginnerGuideUrl,
          item: {
            "@type": "Article",
            "@id": `${beginnerGuideUrl}#article`,
            name: "Forest Escape Last Train Beginner Guide",
            url: beginnerGuideUrl,
            description:
              "First-run guidance for train parts, controls, difficulty, coal, shops, revives, checkpoints, solo play, and co-op roles.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Forest Escape Last Train Puzzle Guide",
          url: puzzleGuideUrl,
          item: {
            "@type": "Article",
            "@id": `${puzzleGuideUrl}#article`,
            name: "Forest Escape Last Train Puzzle Guide",
            url: puzzleGuideUrl,
            description:
              "Verified solutions for Music Rails, Iris Lake, Carousel, and Trippy Grid.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Forest Escape Last Train Achievements Guide",
          url: achievementsGuideUrl,
          item: {
            "@type": "Article",
            "@id": `${achievementsGuideUrl}#article`,
            name: "Forest Escape Last Train Achievements Guide",
            url: achievementsGuideUrl,
            description:
              "All 41 achievements with Warden-key rewards, newspaper tracking, one-run counters, resource calculations, and cleanup planning.",
          },
        },
      ],
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
          description="Choose the right guide for first-run survival, four verified puzzle solutions, all 41 achievements, Warden Keys, newspapers, and final-route planning."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ForestEscapeLastTrainHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}