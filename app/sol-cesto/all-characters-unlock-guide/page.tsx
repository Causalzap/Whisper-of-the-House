import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllCharactersUnlockGuideContent from "@/data/sol-cesto/all-characters-unlock-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sol-cesto/all-characters-unlock-guide`;

export const metadata: Metadata = {
  title: "Sol Cesto All Characters Unlock Guide",
  description:
    "Learn how character unlocks work in Sol Cesto: which characters come from normal progression, which ones use the character tree, and how to unlock Lizard and Huntress.",
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
          name: "Sol Cesto",
          item: `${siteUrl}/sol-cesto`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Characters Unlock Guide",
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
      headline: "Sol Cesto All Characters Unlock Guide",
      description:
        "This guide explains how character unlocks work in Sol Cesto, including which characters unlock naturally, which ones use the character tree, and how hidden unlocks like Lizard fit into the roster.",
      inLanguage: "en",
      dateModified: "2026-04-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Sol Cesto",
        },
        {
          "@type": "Thing",
          name: "Character Unlocks",
        },
        {
          "@type": "Thing",
          name: "Lizard",
        },
        {
          "@type": "Thing",
          name: "Huntress",
        },
        {
          "@type": "Thing",
          name: "Vampire",
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
          title="Sol Cesto All Characters Unlock Guide"
          description="Need the full character unlock overview in Sol Cesto? This guide explains which characters unlock through normal progression, which ones belong to the character tree, and how hidden unlocks like Lizard work."
          gameTitle="Sol Cesto"
          gameHref="/sol-cesto"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "how-many-characters-are-in-sol-cesto",
              label: "How many characters are in Sol Cesto",
            },
            {
              id: "all-characters-unlock-summary",
              label: "All characters unlock summary",
            },
            {
              id: "starting-and-early-characters",
              label: "Starting and early characters",
            },
            {
              id: "character-tree-and-meta-progression-unlocks",
              label: "Character-tree and meta-progression unlocks",
            },
            {
              id: "clear-based-unlocks",
              label: "Clear-based unlocks",
            },
            {
              id: "hidden-character-unlocks",
              label: "Hidden character unlocks",
            },
            {
              id: "which-unlocks-are-fully-confirmed",
              label: "Which unlocks are fully confirmed",
            },
            {
              id: "what-matters-most-for-unlock-planning",
              label: "What matters most for unlock planning",
            },
            {
              id: "natural-vs-hidden-unlocks",
              label: "Natural vs hidden unlocks",
            },
            {
              id: "which-guide-should-you-read-next",
              label: "Which guide should you read next",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/sol-cesto/how-to-unlock-lizard/",
              label: "How to Unlock Lizard",
            },
            {
              href: "/sol-cesto/how-to-unlock-huntress/",
              label: "How to Unlock Huntress",
            },
            {
              href: "/sol-cesto/flute-guide/",
              label: "Flute Guide",
            },
            {
              href: "/sol-cesto",
              label: "Sol Cesto Guide Hub",
            },
          ]}
        >
          <AllCharactersUnlockGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}