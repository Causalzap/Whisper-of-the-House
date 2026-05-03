import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MagicalPrincessGoldenEndingGuideContent from "@/data/magical-princess/golden-ending-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/magical-princess/golden-ending-guide`;

export const metadata: Metadata = {
  title: "Magical Princess Golden Ending Guide",
  description:
    "Get the Golden Ending in Magical Princess: defeat Blackburn, get Cornet's necklace, unlock Forbidden Research, and follow the Labyrinth route.",
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
          name: "Magical Princess Endings Guide",
          item: `${siteUrl}/magical-princess/endings-guide`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Golden Ending Guide",
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
      headline: "Magical Princess Golden Ending Guide",
      description:
        "This Magical Princess guide explains how to get the Golden Ending by following the Red Moon route, defeating Blackburn, receiving Cornet's necklace, unlocking Forbidden Research, and entering the Infinite Mirror Labyrinth route.",
      image: [
        `${siteUrl}/images/magical-princess/ng-plus-replay-blessings.webp`,
        `${siteUrl}/images/magical-princess/forbidden-research-library-option.webp`,
        `${siteUrl}/images/magical-princess/royal-library-secret-room.webp`,
        `${siteUrl}/images/magical-princess/golden-ending-special-route.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
      about: [
        {
          "@type": "VideoGame",
          name: "Magical Princess",
        },
        {
          "@type": "Thing",
          name: "Magical Princess Golden Ending",
        },
        {
          "@type": "Thing",
          name: "Golden Ending",
        },
        {
          "@type": "Thing",
          name: "Cornet",
        },
        {
          "@type": "Thing",
          name: "Cornet's necklace",
        },
        {
          "@type": "Thing",
          name: "Cornelia",
        },
        {
          "@type": "Thing",
          name: "Blackburn",
        },
        {
          "@type": "Thing",
          name: "Red Moon",
        },
        {
          "@type": "Thing",
          name: "Crimson Moon",
        },
        {
          "@type": "Thing",
          name: "Forbidden Research",
        },
        {
          "@type": "Thing",
          name: "Decipher Literature",
        },
        {
          "@type": "Thing",
          name: "Royal Library",
        },
        {
          "@type": "Thing",
          name: "Infinite Mirror Labyrinth",
        },
        {
          "@type": "Thing",
          name: "Heir of the Stargazer",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Golden Ending a normal graduation ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Golden Ending does not appear as a normal career, partner, or marriage ending on the standard graduation screen.",
          },
        },
        {
          "@type": "Question",
          name: "What starts the Golden Ending route?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The route starts from the Red Moon or Crimson Moon secret story chain, then moves through Blackburn, Cornet, Cornet's necklace, NG+, Forbidden Research, and the Labyrinth route.",
          },
        },
        {
          "@type": "Question",
          name: "What is the earliest loop for Golden Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The earliest Golden Ending attempt is usually Loop 3 or NG+2 on a very fast route, assuming you complete the required true-ending or key-item setup in Loop 2. If you get Cornet's necklace later, Golden Ending shifts later too.",
          },
        },
        {
          "@type": "Question",
          name: "Who gives the necklace for Golden Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cornet gives the necklace. Do not confuse this with Cornelia, who is tied to Two Queens and the Inheritance Fragment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Cornelia required for Golden Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cornelia is mainly tied to Two Queens and Heir of the Stargazer. Golden Ending is tied to Cornet's necklace, Forbidden Research, and the Labyrinth special route.",
          },
        },
        {
          "@type": "Question",
          name: "Does Golden Ending use the same Labyrinth as Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Both routes use the Forbidden Research to Anna to Infinite Mirror Labyrinth gateway, but the payoff depends on your active route state. Make a save before entering if your file has multiple secret-route flags.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Labyrinth fight have allies?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Player reports suggest allies or alternate-time lovers can appear during the hidden boss route. Treat allies as helpful support, but still prepare Alice properly before entering.",
          },
        },
        {
          "@type": "Question",
          name: "Does Golden Ending block career endings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Once you commit to Golden Ending, you do not get the normal career ending flow from that loop.",
          },
        },
        {
          "@type": "Question",
          name: "Does Golden Ending block marriage or partner endings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Treat Golden Ending as a separate special route. Do partner and marriage endings on another save or cleanup loop.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Golden Ending before Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. I recommend doing Heir of the Stargazer first, then Golden Ending later with a separate save.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make a backup save before Golden Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Make a separate save before the Labyrinth special route so you can return to normal ending cleanup if needed.",
          },
        },
      ],
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
          title="Magical Princess Golden Ending Guide"
          description="Get the Golden Ending by defeating Blackburn, receiving Cornet's necklace, unlocking Forbidden Research, and following the Infinite Mirror Labyrinth route."
          gameTitle="Magical Princess"
          gameHref="/magical-princess/endings-guide"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "golden-ending-route-overview",
              label: "Route overview",
            },
            {
              id: "earliest-golden-ending-loop",
              label: "Earliest loop",
            },
            {
              id: "cornet-vs-cornelia",
              label: "Cornet vs Cornelia",
            },
            {
              id: "blackburn-and-cornet-necklace",
              label: "Blackburn & necklace",
            },
            {
              id: "ng-plus-necklace-trigger",
              label: "NG+ trigger",
            },
            {
              id: "forbidden-research-step",
              label: "Forbidden Research",
            },
            {
              id: "forbidden-research-time-cost",
              label: "Research planning",
            },
            {
              id: "labyrinth-route-branch",
              label: "Labyrinth branch",
            },
            {
              id: "can-heir-and-golden-coexist",
              label: "Same save?",
            },
            {
              id: "infinite-mirror-labyrinth",
              label: "Labyrinth prep",
            },
            {
              id: "golden-ending-consequences",
              label: "Consequences",
            },
            {
              id: "golden-ending-vs-heir-of-the-stargazer",
              label: "Golden vs Heir",
            },
            {
              id: "why-golden-ending-is-not-unlocking",
              label: "Troubleshooting",
            },
            {
              id: "related-guides-table",
              label: "Related guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/magical-princess/endings-guide",
              label: "Magical Princess Endings Guide",
            },
            {
              href: "/magical-princess/forbidden-research-guide",
              label: "Forbidden Research Guide",
            },
            {
              href: "/magical-princess/true-ending-heir-of-the-stargazer",
              label: "True Ending / Heir of the Stargazer Guide",
            },
            {
              href: "/magical-princess/two-queens-ending-guide",
              label: "Two Queens Ending Guide",
            },
            {
              href: "/magical-princess/career-endings-requirements",
              label: "Career Endings Requirements Guide",
            },
          ]}
        >
          <MagicalPrincessGoldenEndingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}