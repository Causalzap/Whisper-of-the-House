import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ForestEscapeLastTrainLocationsPuzzleGuideContent from "@/data/forest-escape-last-train/locations-puzzle-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/forest-escape-last-train`;
const pageUrl = `${hubUrl}/locations-puzzle-guide`;

const beginnerGuideUrl = `${hubUrl}/beginner-guide`;
const wardenBossGuideUrl = `${hubUrl}/warden-boss-guide`;
const achievementsGuideUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-music-rails-chimes-order.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-music-rails-mission-complete.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-iris-lake-eye-rule.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-iris-lake-torch-route.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-carousel-horse-dance-symbol.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-carousel-reward-door-open.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-trippy-grid-four-color-keys.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-trippy-grid-clown-rules.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-trippy-grid-red-key.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-stepfall-bridge-safe-path.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-acid-pit-valves.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-bootball-court-goal.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-depot-cannon-carriage.webp`,
];

type TocItem = {
  id: string;
  label: string;
};

const toc: TocItem[] = [
  {
    id: "locations-puzzle-overview",
    label: "Eight location solutions",
  },
  {
    id: "music-rails-solution",
    label: "Music Rails",
  },
  {
    id: "iris-lake-solution",
    label: "Iris Lake",
  },
  {
    id: "carousel-solution",
    label: "Carousel",
  },
  {
    id: "trippy-grid-solution",
    label: "Trippy Grid",
  },
  {
    id: "stepfall-bridge-solution",
    label: "Stepfall Bridge",
  },
  {
    id: "acid-pit-solution",
    label: "Acid Pit",
  },
  {
    id: "bootball-court-solution",
    label: "Bootball Court",
  },
  {
    id: "the-depot-solution",
    label: "The Depot",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/forest-escape-last-train",
    label: "Forest Escape Last Train Guide Hub",
  },
  {
    href: "/forest-escape-last-train/beginner-guide",
    label: "Beginner Guide",
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
  title: "Forest Escape Last Train Locations Guide: 8 Solutions",
  description:
    "Solve 8 Forest Escape Last Train locations: Music Rails, Iris Lake, Carousel, Trippy Grid, Stepfall Bridge, Acid Pit, Bootball Court, and The Depot.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Forest Escape Last Train Locations Guide: 8 Solutions",
    description:
      "Eight verified routes for Music Rails, Iris Lake, Carousel, Trippy Grid, Stepfall Bridge, Acid Pit, Bootball Court, and The Depot.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Forest Escape Last Train Music Rails five-chime puzzle solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Escape Last Train Locations Guide: 8 Solutions",
    description:
      "Solutions for Music Rails, Iris Lake, Carousel, Trippy Grid, Stepfall Bridge, Acid Pit, Bootball Court, and The Depot.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "What is the Music Rails chime order?",
    answer:
      "Number the five chimes from left to right and press 1, 2, 5, 4, 3. The height of each chime does not affect its number.",
  },
  {
    question: "How many torches are required at Iris Lake?",
    answer:
      "The verified Iris Lake route requires six torches, one for each holder at the cave entrance.",
  },
  {
    question: "Is gambling required to complete Carousel?",
    answer:
      "No. Complete Carousel by matching the pose symbols displayed on the horses with the corresponding visual emotes. The gambling wheel is optional.",
  },
  {
    question: "What keys are required in Trippy Grid?",
    answer:
      "Trippy Grid requires the Blue, Green, Red, and Yellow Keys. Blue is behind a lever-opened hidden wall, Green and Yellow are found by following sound cues, and Red is in the guarded red section.",
  },
  {
    question: "Can Trippy Grid clowns be killed?",
    answer:
      "No. The clowns can be knocked down or disabled temporarily, but they recover. Use rocks, crouching, and narrow side rooms to move around them.",
  },
  {
    question: "Does Trippy Grid give four Warden Keys?",
    answer:
      "No. The Blue, Green, Red, and Yellow Keys are local maze items. Completing the full Trippy Grid location awards one global Warden Key.",
  },
  {
    question: "How do I solve Stepfall Bridge?",
    answer:
      "Send one player below the bridge to identify the safe boards and guide another player across one confirmed step at a time.",
  },
  {
    question: "How do I complete Acid Pit?",
    answer:
      "Search the upper walkways and blocked side routes for the required valves or controls. Activate them while checking the objective state and stop once the mission completion notification appears.",
  },
  {
    question: "How do I complete Bootball Court?",
    answer:
      "Approach the ball from behind, aim toward the goal, and keep scoring until the location objective completes. In co-op, keep one player near the goal to handle rebounds.",
  },
  {
    question: "How do I attach the Cannon Carriage at The Depot?",
    answer:
      "Open the railway gates, set the junction switches, create enough reversing space, and back the locomotive into the Cannon Carriage.",
  },
  {
    question: "How much does the Cannon Carriage cost to fire?",
    answer:
      "Each mounted-cannon shot costs 1 Coal and 2 Rock. Coal is also required to move the locomotive.",
  },
  {
    question: "Is The Depot the Warden boss fight?",
    answer:
      "No. The Depot is the location where the Cannon Carriage is attached. The six-key Boss Door and Warden arena come afterward.",
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
          name: "Forest Escape Last Train Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Locations and Puzzle Guide",
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
        "Forest Escape Last Train Locations Guide: Eight Verified Solutions",
      description:
        "A Forest Escape: Last Train locations and puzzle guide covering Music Rails, Iris Lake, Carousel, Trippy Grid, Stepfall Bridge, Acid Pit, Bootball Court, and The Depot. It includes the fixed Music Rails chime sequence, Iris Lake torch route, Trippy Grid colored keys, Stepfall Bridge safe boards, Acid Pit valves, Bootball scoring, and Cannon Carriage attachment.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-11",
      dateModified: "2026-07-12",
      articleSection: "Locations and Puzzle Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Forest Escape: Last Train",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train locations guide",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train puzzle solutions",
        },
        {
          "@type": "Thing",
          name: "Music Rails solution",
        },
        {
          "@type": "Thing",
          name: "Iris Lake torch puzzle",
        },
        {
          "@type": "Thing",
          name: "Carousel horse pose puzzle",
        },
        {
          "@type": "Thing",
          name: "Trippy Grid keys",
        },
        {
          "@type": "Thing",
          name: "Stepfall Bridge safe path",
        },
        {
          "@type": "Thing",
          name: "Acid Pit valves",
        },
        {
          "@type": "Thing",
          name: "Bootball Court",
        },
        {
          "@type": "Thing",
          name: "The Depot Cannon Carriage",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Blue Key",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Green Key",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Red Key",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Yellow Key",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Warden Key",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Cannon Carriage",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Warden",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Article",
          "@id": `${beginnerGuideUrl}#article`,
          name: "Forest Escape Last Train Beginner Guide",
          url: beginnerGuideUrl,
          description:
            "A first-run survival guide covering train parts, controls, Coal, shops, revives, checkpoints, solo play, and co-op roles.",
        },
        {
          "@type": "Article",
          "@id": `${wardenBossGuideUrl}#article`,
          name: "Forest Escape Last Train Warden Boss Guide",
          url: wardenBossGuideUrl,
          description:
            "A complete Warden guide covering the six-key Boss Door, Cannon Carriage resources, poison attacks, platform puzzles, weak points, and final Ear phase.",
        },
        {
          "@type": "Article",
          "@id": `${achievementsGuideUrl}#article`,
          name: "Forest Escape Last Train Achievements Guide",
          url: achievementsGuideUrl,
          description:
            "A complete guide to all 41 achievements, Warden Keys, newspapers, one-run counters, and cleanup planning.",
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
          title="Forest Escape: Last Train Locations & Puzzle Guide"
          description="Solve eight locations with fixed answers, torch routes, colored keys, safe bridge boards, Acid Pit valves, Bootball scoring, and The Depot railway switches."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ForestEscapeLastTrainLocationsPuzzleGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}