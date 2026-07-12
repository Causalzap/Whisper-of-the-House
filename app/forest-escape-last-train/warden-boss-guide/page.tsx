import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GuideContent from "@/data/forest-escape-last-train/warden-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";

const pageUrl = `${siteUrl}/forest-escape-last-train/warden-boss-guide`;

const imageUrls = [
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-warden-boss-door-six-keys.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-depot-cannon-carriage.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-warden-mouth-weak-point.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-warden-final-ear-phase.webp`,
];

const toc = [
  {
    id: "warden-fight-overview",
    label: "Warden fight overview",
  },
  {
    id: "unlock-boss-door",
    label: "Unlock the Boss Door",
  },
  {
    id: "the-depot-cannon-carriage",
    label: "The Depot Cannon Carriage",
  },
  {
    id: "warden-preparation",
    label: "Preparation and resources",
  },
  {
    id: "warden-team-roles",
    label: "Co-op roles",
  },
  {
    id: "warden-core-loop",
    label: "Boss fight loop",
  },
  {
    id: "poison-attack",
    label: "Poison attack",
  },
  {
    id: "owl-statue-puzzle",
    label: "Owl Statue puzzle",
  },
  {
    id: "maze-board-puzzle",
    label: "Maze board puzzle",
  },
  {
    id: "egg-nest-puzzle",
    label: "Egg and Nest puzzle",
  },
  {
    id: "final-ear-phase",
    label: "Final Ear phase",
  },
  {
    id: "warden-achievements",
    label: "Warden achievements",
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
    label: "Forest Escape Last Train Beginner Guide",
  },
  {
    href: "/forest-escape-last-train/locations-puzzle-guide",
    label: "Forest Escape Last Train Locations and Puzzle Guide",
  },
  {
    href: "/forest-escape-last-train/achievements-guide",
    label: "Forest Escape Last Train Achievements Guide",
  },
];

const faqEntities = [
  {
    "@type": "Question",
    name: "How do I unlock the Warden Boss Door in Forest Escape Last Train?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Collect all six global Warden Keys and insert them at the barrier south of The Depot. The colored Trippy Grid keys are local puzzle items and are not separate Warden Keys.",
    },
  },
  {
    "@type": "Question",
    name: "How do I get the Cannon Carriage in Forest Escape Last Train?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Complete The Depot railway puzzle by opening the gates, changing the switches, and reversing the locomotive into the Cannon Carriage.",
    },
  },
  {
    "@type": "Question",
    name: "How much does one Warden cannon shot cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Each mounted cannon shot costs 1 Coal and 2 Rock. Coal is used both for moving the train and firing the cannon.",
    },
  },
  {
    "@type": "Question",
    name: "Is the train safe during the Warden poison attack?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Poison can cover the entire stopped carriage. Move the train immediately instead of waiting inside the carriage.",
    },
  },
  {
    "@type": "Question",
    name: "Why does the Warden stop taking damage?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The glowing weak point may have closed, the current phase may require a platform puzzle, or the cannon may be hitting a protected body part.",
    },
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
          item: `${siteUrl}/forest-escape-last-train`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Warden Boss Guide",
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
        "Forest Escape Last Train Warden Boss Guide: Cannon, Poison, Puzzles & Final Fight",
      description:
        "A complete Forest Escape Last Train Warden Boss guide covering the six Warden Keys, The Depot Cannon Carriage, cannon resources, poison attacks, Eye and Ear phases, platform puzzles, team roles, and the final Ear weak point.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-12",
      dateModified: "2026-07-12",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Forest Escape: Last Train",
        },
        {
          "@type": "Thing",
          name: "Warden Boss",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Boss Door",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Cannon Carriage",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train Warden Keys",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train final boss",
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
      mainEntity: faqEntities,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Forest Escape Last Train Warden Boss Guide: Cannon & Poison",
  description:
    "Beat the Warden in Forest Escape Last Train with Cannon Carriage, six Keys, poison tips, platform puzzles, resources, and final Ear strategy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Forest Escape Last Train Warden Boss Guide: Cannon & Poison",
    description:
      "Complete Warden boss strategy with Cannon Carriage setup, poison attacks, puzzles, resources, and final weak points.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "Forest Escape Last Train Warden Boss Door with six Warden Keys.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Forest Escape Last Train Warden Boss Guide: Cannon & Poison",
    description:
      "Learn the Warden fight loop, Cannon Carriage setup, poison response, puzzle phases, and final Ear strategy.",
    images: [imageUrls[0]],
  },
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
          title="Forest Escape Last Train Warden Boss Guide: Cannon, Poison & Final Fight"
          description="Learn how to unlock the Warden route, prepare the Cannon Carriage, manage Coal and Rock, survive poison attacks, solve platform phases, and finish the final Ear weak point."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/forest-escape-last-train"
          breadcrumbBaseLabel="Forest Escape Last Train Guide"
          updatedAt="July 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}