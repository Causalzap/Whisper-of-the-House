import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkPuzzlesContent from "@/data/big-walk/puzzles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/puzzles`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-timed-maze-object.png`,
  `${siteUrl}/images/big-walk/big-walk-five-pose-telescopes.png`,
  `${siteUrl}/images/big-walk/big-walk-green-path-order-checkpoint.png`,
  `${siteUrl}/images/big-walk/big-walk-green-path-order-complete.png`,
  `${siteUrl}/images/big-walk/big-walk-counting-puzzle-symbol-values.png`,
  `${siteUrl}/images/big-walk/big-walk-blindfold-mask.png`,
  `${siteUrl}/images/big-walk/big-walk-blindfold-symbol-panels.png`,
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
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
    href: "/big-walk/purple-puzzles",
    label: "All 7 Big Walk Purple Puzzles",
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
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and Big Game Guide",
  },
];

const faqEntities = [
  {
    question:
      "Is the colored Peg Puzzle the same as the five-pose telescope puzzle?",
    answer:
      "No. The telescope puzzle asks one player to observe five distant poses and communicate their order. The colored Peg Puzzle uses loose colored pieces to reproduce the surrounding landscape on a Pegboard.",
  },
  {
    question: "Should I activate a timed puzzle as soon as I find it?",
    answer:
      "Usually no. First identify the destination and place every required player in position, then activate the timed object.",
  },
  {
    question: "Is it worth waiting for daylight in Big Walk puzzles?",
    answer:
      "Yes when a challenge depends on distant poses, small objects, terrain, or color differences. Indoor puzzles with clearly visible controls usually do not need daylight.",
  },
  {
    question:
      "Should both players experiment with puzzle controls at the same time?",
    answer:
      "Usually no. Communication and sequence puzzles are easier to troubleshoot when one player operates the controls and another observes the result.",
  },
  {
    question:
      "Are Big Walk puzzle layouts identical in every player-count world?",
    answer:
      "No. The central mechanic can remain the same while different player-count worlds add or change roles, controls, and interactions.",
  },
  {
    question: "Where should I go if a Big Walk puzzle is not covered here?",
    answer:
      "Use the main Big Walk Hub for progression questions, or the dedicated Peg Puzzle, 4166 and 1899 coordinate puzzle, and Purple Puzzles guides for those larger challenge routes.",
  },
];

export const metadata: Metadata = {
  title: "Big Walk Puzzle Solutions: Counting, Blindfold & Timed Puzzles",
  description:
    "Solve Big Walk's communication, timed maze, basketball, relay, five-pose, Green Path, counting-symbol, and blindfold puzzles with practical fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Puzzle Solutions",
    description:
      "Solve eight Big Walk puzzle mechanics with practical role setups, communication systems, reset rules, sequence logic, and troubleshooting.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 806,
        height: 616,
        alt: "Big Walk green path-order puzzle completed with the Head reward available",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Puzzle Solutions",
    description:
      "Solve the timed maze, five-pose telescope, Green Path, counting-symbol, blindfold, basketball, relay, and communication puzzles.",
    images: [imageUrls[3]],
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Puzzle Solutions",
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
        "Big Walk Puzzle Solutions: Communication, Timed, Pose, Path, Counting, and Blindfold Puzzles",
      description:
        "A Big Walk puzzle guide covering the green communication room, timed maze, basketball challenge, projectile relay, five-pose telescope puzzle, green path-order field, counting-symbol room, and blindfold panel building.",
      image: imageUrls,
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
          name: "Big Walk puzzle solutions",
        },
        {
          "@type": "Thing",
          name: "Big Walk green communication room",
        },
        {
          "@type": "Thing",
          name: "Big Walk timed maze puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk basketball puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk projectile relay puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk five-pose telescope puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk green path-order puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk counting and symbols puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk blindfold panel puzzle",
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

const toc = [
  {
    id: "green-communication-room",
    label: "Green communication room",
  },
  {
    id: "timed-maze",
    label: "Timed maze",
  },
  {
    id: "basketball-puzzle",
    label: "Basketball puzzle",
  },
  {
    id: "projectile-relay",
    label: "Projectile relay",
  },
  {
    id: "five-pose",
    label: "Five-pose telescope puzzle",
  },
  {
    id: "green-path-order",
    label: "Green path-order puzzle",
  },
  {
    id: "counting-symbols",
    label: "Counting and symbols",
  },
  {
    id: "blindfold-puzzle",
    label: "Blindfold panel puzzle",
  },
  {
    id: "dedicated-puzzle-guides",
    label: "More puzzle guides",
  },
  {
    id: "stuck",
    label: "Puzzle fixes",
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
          title="Big Walk Puzzle Solutions"
          description="Solve eight common Big Walk puzzle mechanics with practical role setups, communication systems, timing rules, sequence logic, and troubleshooting."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkPuzzlesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}