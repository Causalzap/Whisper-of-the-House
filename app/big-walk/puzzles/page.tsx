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

export const metadata: Metadata = {
  title: "Big Walk Puzzle Solutions: Path, Counting & Blindfold",
  description:
    "Solve Big Walk's timed maze, basketball, projectile, five-pose, green path, counting-symbol, and blindfold panel puzzles with two-player steps.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Puzzle Solutions",
    description:
      "Step-by-step solutions for the timed maze, five-pose platforms, green path order, counting-symbol room, blindfold panels, and more.",
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
      "Solve the green path, counting-symbol, blindfold, timed maze, five-pose, basketball, and projectile relay puzzles.",
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
        "Big Walk Puzzle Solutions: Green Communication Room, Timed Maze, Basketball, Projectile Relay, Five-Pose Platforms, Green Path, Counting Symbols, and Blindfold Panels",
      description:
        "This Big Walk puzzle guide explains the two-player solutions for the green communication room, timed maze handoff, basketball challenge, timed projectile relay, five-pose platforms, green path-order field, counting and symbol room, and blindfold panel building. It also covers role assignments, communication methods, reset rules, daylight decisions, and fixes for lost Head rewards or changing sequence results.",
      image: imageUrls,
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
          name: "Big Walk five-pose puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk green path-order puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk counting and symbol puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk blindfold puzzle",
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
  ],
};

const toc = [
  {
    id: "green-communication-room",
    label: "Green communication room",
  },
  {
    id: "timed-maze",
    label: "Timed maze puzzle",
  },
  {
    id: "basketball-puzzle",
    label: "Basketball puzzle",
  },
  {
    id: "projectile-relay",
    label: "Projectile relay puzzle",
  },
  {
    id: "five-pose",
    label: "Five-pose platform puzzle",
  },
  {
    id: "green-path-order",
    label: "Green path-order puzzle",
  },
  {
    id: "counting-symbols",
    label: "Counting and symbol puzzle",
  },
  {
    id: "blindfold-puzzle",
    label: "Blindfold panel puzzle",
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

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/beginner-guide",
    label: "Big Walk Beginner Guide",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
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
    href: "/big-walk/how-to-unlock-map",
    label: "How to Unlock the Map Room",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
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
          description="Solve the green communication room, timed maze, basketball, projectile relay, five-pose, green path, counting-symbol, and blindfold puzzles."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
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