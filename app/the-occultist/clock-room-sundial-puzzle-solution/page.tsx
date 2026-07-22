import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ClockRoomSundialPuzzleContent from "@/data/the-occultist/clock-room-sundial-puzzle-solution.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/clock-room-sundial-puzzle-solution`;

export const metadata: Metadata = {
  title: "The Occultist Clock Room and Sundial Puzzle Solution",
  description:
    "Stuck on the Clock Room and Sundial Puzzle in The Occultist? Here is the exact solution, how to set the door to 10:00, and how to get Codex Lumina Fragment 1.",
  alternates: {
    canonical: pageUrl,
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
          name: "The Occultist",
          item: `${siteUrl}/the-occultist`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Clock Room and Sundial Puzzle Solution",
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
      headline: "The Occultist Clock Room and Sundial Puzzle Solution",
      description:
        "This guide explains how to solve the Clock Room and Sundial Puzzle in The Occultist, where to find it in Redler Manor, how to set the clock-faced door to 10:00, and how to get Codex Lumina Fragment 1.",
      image: [
        `${siteUrl}/images/the-occultist/puzzles/clock-room-sundial-panel.webp`,
        `${siteUrl}/images/the-occultist/puzzles/clock-room-sundial-clue.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-10",
      about: [
        {
          "@type": "VideoGame",
          name: "The Occultist",
        },
        {
          "@type": "Thing",
          name: "Clock Room and Sundial Puzzle",
        },
        {
          "@type": "Thing",
          name: "Redler Manor",
        },
        {
          "@type": "Thing",
          name: "Tempus Fugit",
        },
        {
          "@type": "Thing",
          name: "Vera Visio",
        },
        {
          "@type": "Thing",
          name: "Codex Lumina Fragment 1",
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
          title="The Occultist Clock Room and Sundial Puzzle Solution"
          description="Need the Clock Room and Sundial Puzzle answer in The Occultist? Here is the exact solution, how to open the clock-faced door, and how to get Codex Lumina Fragment 1."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "where-is-the-clock-room-sundial-puzzle",
              label: "Where the Clock Room puzzle is",
            },
            {
              id: "clock-room-sundial-puzzle-solution",
              label: "Clock Room puzzle solution",
            },
            {
              id: "clock-room-puzzle-step-1-door-time",
              label: "Step 1: Set the door to 10:00",
            },
            {
              id: "clock-room-puzzle-step-2-match-the-shadow",
              label: "Step 2: Match the shadow",
            },
            {
              id: "clock-room-puzzle-step-3-adjust-the-minute-hand",
              label: "Step 3: Adjust the minute hand",
            },
            {
              id: "does-the-clock-room-puzzle-have-to-be-done-in-order",
              label: "Does it have to be done in order?",
            },
            {
              id: "what-do-you-get-from-the-clock-room-puzzle",
              label: "Reward: Codex Lumina Fragment 1",
            },
            {
              id: "why-players-get-stuck-on-the-clock-room-puzzle",
              label: "Why players get stuck",
            },
            {
              id: "clock-room-puzzle-at-a-glance",
              label: "Puzzle at a glance",
            },
            {
              id: "what-to-do-if-the-clock-room-puzzle-is-not-working",
              label: "What to do if it is not working",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-occultist",
              label: "The Occultist Guide Hub",
            },
            {
              href: "/the-occultist/codex-lumina-fragments",
              label: "Codex Lumina Fragments",
            },
            {
              href: "/the-occultist/planetarium-star-moon-puzzle-solution",
              label: "Planetarium Star and Moon Puzzle Solution",
            },
          ]}
        >
          <ClockRoomSundialPuzzleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}