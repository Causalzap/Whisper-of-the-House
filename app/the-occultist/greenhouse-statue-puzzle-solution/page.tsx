import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GreenhouseStatuePuzzleContent from "@/data/the-occultist/greenhouse-statue-puzzle-solution.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/greenhouse-statue-puzzle-solution`;

export const metadata: Metadata = {
  title: "The Occultist Greenhouse Statue Puzzle Solution",
  description:
    "Stuck on the Greenhouse Statue Puzzle in The Occultist? Here is the exact statue placement answer, how to match Raven, Rat, Pig, and Wolf, and how to get Medallion 14/15.",
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
          name: "Greenhouse Statue Puzzle Solution",
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
      headline: "The Occultist Greenhouse Statue Puzzle Solution",
      description:
        "This guide explains how to solve the Greenhouse Statue Puzzle in The Occultist, where to find it in Redler Manor, how to match the four animal statues, and how to get Medallion 14/15.",
      image: [
        `${siteUrl}/images/the-occultist/puzzles/greenhouse-statue-panel.webp`,
        `${siteUrl}/images/the-occultist/puzzles/greenhouse-statue-clue.webp`,
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
          name: "Greenhouse Statue Puzzle",
        },
        {
          "@type": "Thing",
          name: "Redler Manor",
        },
        {
          "@type": "Thing",
          name: "Raven Death puzzle",
        },
        {
          "@type": "Thing",
          name: "Medallion 14/15",
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
          title="The Occultist Greenhouse Statue Puzzle Solution"
          description="Need the Greenhouse Statue Puzzle answer in The Occultist? Use this if you need the exact Raven / Rat / Pig / Wolf statue placements and want to clear the room fully for the nearby Medallion."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "where-is-the-greenhouse-statue-puzzle",
              label: "Where the Greenhouse puzzle is",
            },
            {
              id: "greenhouse-statue-puzzle-solution",
              label: "Greenhouse puzzle solution",
            },
            {
              id: "what-each-greenhouse-statue-represents",
              label: "What each statue represents",
            },
            {
              id: "does-the-greenhouse-statue-puzzle-have-an-order",
              label: "Does it have an order?",
            },
            {
              id: "what-do-you-get-from-the-greenhouse-statue-puzzle",
              label: "Reward and Medallion 14/15",
            },
            {
              id: "why-players-get-stuck-on-the-greenhouse-puzzle",
              label: "Why players get stuck",
            },
            {
              id: "greenhouse-puzzle-at-a-glance",
              label: "Puzzle at a glance",
            },
            {
              id: "what-to-do-if-the-greenhouse-puzzle-is-not-working",
              label: "What to do if it is not working",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-occultist/",
              label: "The Occultist Guide Hub",
            },
            {
              href: "/the-occultist/all-medallion-locations/",
              label: "All Medallion Locations",
            },
            {
              href: "/the-occultist/codex-lumina-fragments/",
              label: "Codex Lumina Fragments",
            },
          ]}
        >
          <GreenhouseStatuePuzzleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}