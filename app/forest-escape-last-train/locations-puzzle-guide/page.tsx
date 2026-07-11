import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ForestEscapeLastTrainLocationsPuzzleGuideContent from "@/data/forest-escape-last-train/locations-puzzle-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/forest-escape-last-train`;
const pageUrl = `${hubUrl}/locations-puzzle-guide`;

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
];

const toc = [
  {
    id: "locations-puzzle-overview",
    label: "Four puzzle solutions",
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
    href: "/forest-escape-last-train/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Forest Escape Last Train Puzzle Guide: 4 Solutions",
  description:
    "Solve Music Rails, Iris Lake, Carousel, and Trippy Grid with the chime sequence, six-torch route, horse-pose matching, and all four colored keys.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Forest Escape Last Train Puzzle Guide: 4 Solutions",
    description:
      "Get verified solutions for Music Rails, Iris Lake, Carousel, and Trippy Grid, including six torches and all four colored maze keys.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Forest Escape Last Train Music Rails five-chime puzzle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Escape Last Train Puzzle Guide: 4 Solutions",
    description:
      "Solve Music Rails, Iris Lake, Carousel, and Trippy Grid with verified routes and screenshots.",
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
      "The tested Iris Lake route requires six torches, one for each holder at the cave entrance.",
  },
  {
    question: "Is gambling required to complete Carousel?",
    answer:
      "No. Complete Carousel by matching the pose symbols on the horses with the corresponding emotes. The gambling wheel is optional.",
  },
  {
    question: "What keys are required in Trippy Grid?",
    answer:
      "Trippy Grid requires the Blue, Green, Red, and Yellow Keys. Blue is behind a lever-opened hidden wall, Green and Yellow are found by following sound cues, and Red is collected in the guarded red section.",
  },
  {
    question: "Can Trippy Grid clowns be killed?",
    answer:
      "No. The clowns can be knocked down or disabled temporarily, but they recover. Use rocks, crouching, and narrow side rooms to move around them.",
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
          name: "Puzzle Guide",
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
        "Forest Escape: Last Train Puzzle Guide — Four Verified Solutions",
      description:
        "This Forest Escape: Last Train puzzle guide provides verified solutions for Music Rails, Iris Lake, Carousel, and Trippy Grid. It covers the fixed 1-2-5-4-3 Music Rails chime sequence, the six-torch Iris Lake route and Watcher-Carrier strategy, the Carousel horse-symbol and emote puzzle, and the confirmed routes for the Blue, Green, Red, and Yellow Keys inside Trippy Grid.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Forest Escape: Last Train",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train puzzle guide",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Music Rails solution",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Iris Lake torches",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Carousel emotes",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Trippy Grid keys",
        },
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
          title="Forest Escape: Last Train Puzzle Guide"
          description="Solve Music Rails, Iris Lake, Carousel, and Trippy Grid with verified sequences, six-torch routing, horse-emote clues, and all four colored maze keys."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 11, 2026"
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