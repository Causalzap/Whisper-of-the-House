import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PlanetariumStarMoonPuzzleContent from "@/data/the-occultist/planetarium-star-moon-puzzle-solution.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/planetarium-star-moon-puzzle-solution`;

export const metadata: Metadata = {
  title: "The Occultist Planetarium Star and Moon Puzzle Solution",
  description:
    "Stuck on the Planetarium Star and Moon Puzzle in The Occultist? Here is the exact solution, where to find the puzzle in Redler Manor, and how to get Codex Lumina Page 4.",
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
          name: "Planetarium Star and Moon Puzzle Solution",
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
      headline: "The Occultist Planetarium Star and Moon Puzzle Solution",
      description:
        "This guide explains how to solve the Planetarium Star and Moon Puzzle in The Occultist, where to find it in Redler Manor, whether the symbols have an order, and how to get Codex Lumina Page 4.",
      image: [
        `${siteUrl}/images/the-occultist/puzzles/planetarium-star-moon-panel.webp`,
        `${siteUrl}/images/the-occultist/puzzles/planetarium-star-moon-clue.webp`,
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
          name: "Planetarium Star and Moon Puzzle",
        },
        {
          "@type": "Thing",
          name: "Redler Manor",
        },
        {
          "@type": "Thing",
          name: "Caecus Corvus",
        },
        {
          "@type": "Thing",
          name: "Codex Lumina Page 4",
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
          title="The Occultist Planetarium Star and Moon Puzzle Solution"
          description="Need the Planetarium Star and Moon Puzzle answer in The Occultist? Here is the exact solution, where to find the room in Redler Manor, and how to get Codex Lumina Page 4."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "where-is-the-planetarium-star-and-moon-puzzle",
              label: "Where the Planetarium puzzle is",
            },
            {
              id: "planetarium-star-and-moon-puzzle-solution",
              label: "Planetarium puzzle solution",
            },
            {
              id: "how-the-clue-points-to-the-answer",
              label: "How the clue points to the answer",
            },
            {
              id: "does-the-star-and-moon-puzzle-have-an-order",
              label: "Does it have an order?",
            },
            {
              id: "what-do-you-get-from-the-planetarium-puzzle",
              label: "Reward: Codex Lumina Page 4",
            },
            {
              id: "why-players-get-stuck-here",
              label: "Why players get stuck",
            },
            {
              id: "planetarium-puzzle-at-a-glance",
              label: "Puzzle at a glance",
            },
            {
              id: "what-to-do-if-the-puzzle-is-not-working",
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
              href: "/the-occultist/all-altar-locations",
              label: "All Altar Locations",
            },
          ]}
        >
          <PlanetariumStarMoonPuzzleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}