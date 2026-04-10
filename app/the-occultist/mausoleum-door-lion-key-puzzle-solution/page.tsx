import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MausoleumDoorLionKeyPuzzleContent from "@/data/the-occultist/mausoleum-door-lion-key-puzzle-solution.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/mausoleum-door-lion-key-puzzle-solution`;

export const metadata: Metadata = {
  title: "The Occultist Mausoleum Door Puzzle Solution (Lion Key Path)",
  description:
    "Stuck on the Mausoleum Door puzzle in The Occultist? Here is how to use the Lion Key, combine the Cemetery Medallion paths, and open the Mausoleum route to Redler Manor.",
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
          name: "Mausoleum Door Puzzle Solution (Lion Key Path)",
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
      headline: "The Occultist Mausoleum Door Puzzle Solution (Lion Key Path)",
      description:
        "This guide explains how to solve the Mausoleum Door Lion Key Path Puzzle in The Occultist, where to find it in Godstone Cemetery, how the Medallion route clue works, and how to open the way to Redler Manor.",
      image: [
        `${siteUrl}/images/the-occultist/puzzles/mausoleum-door-lion-key-clue.webp`,
        `${siteUrl}/images/the-occultist/puzzles/mausoleum-door-lion-key-panel.webp`,
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
          name: "Mausoleum Door Lion Key Path Puzzle",
        },
        {
          "@type": "Thing",
          name: "Godstone Cemetery",
        },
        {
          "@type": "Thing",
          name: "Lion Key",
        },
        {
          "@type": "Thing",
          name: "Redler Manor",
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
          title="The Occultist Mausoleum Door Puzzle Solution (Lion Key Path)"
          description="Need the Mausoleum Door answer in The Occultist? Here is how to use the Lion Key, combine the path Medallions, and open the Cemetery route to Redler Manor."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "where-is-the-mausoleum-door-lion-key-puzzle",
              label: "Where the Mausoleum puzzle is",
            },
            {
              id: "mausoleum-door-lion-key-puzzle-solution",
              label: "Mausoleum puzzle solution",
            },
            {
              id: "how-the-medallion-clue-works",
              label: "How the Medallion clue works",
            },
            {
              id: "does-the-mausoleum-door-puzzle-have-an-order",
              label: "Does it have an order?",
            },
            {
              id: "what-do-you-get-from-the-mausoleum-door-puzzle",
              label: "What it unlocks",
            },
            {
              id: "why-players-get-stuck-on-the-mausoleum-door-puzzle",
              label: "Why players get stuck",
            },
            {
              id: "mausoleum-door-puzzle-at-a-glance",
              label: "Puzzle at a glance",
            },
            {
              id: "what-to-do-if-the-mausoleum-door-puzzle-is-not-working",
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
          <MausoleumDoorLionKeyPuzzleContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}