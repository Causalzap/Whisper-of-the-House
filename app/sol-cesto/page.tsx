import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SolCestoHubContent from "@/data/sol-cesto/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sol-cesto`;

export const metadata: Metadata = {
  title: "Sol Cesto Guide Hub",
  description:
    "The main Sol Cesto guide hub for character unlocks, hidden systems, and roster navigation, including Lizard, Huntress, Flute, and all character unlocks.",
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
      headline: "Sol Cesto Guide Hub",
      description:
        "This hub organizes the most useful Sol Cesto guides, including character unlocks, hidden systems, and roster overview pages.",
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
          name: "Hidden Systems",
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
          name: "Flute",
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
          title="Sol Cesto Guide Hub"
          description="Use this Sol Cesto guide hub to find the right page fast: character unlocks, hidden systems, roster overview, and the current strongest live guides."
          gameTitle="Sol Cesto"
          gameHref="/sol-cesto"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "what-this-sol-cesto-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "start-here-if-you-are-new",
              label: "Start here if you are new",
            },
            {
              id: "character-unlock-guides",
              label: "Character unlock guides",
            },
            {
              id: "hidden-systems-and-advanced-guides",
              label: "Hidden systems and advanced guides",
            },
            {
              id: "what-to-read-first-based-on-your-problem",
              label: "What to read first based on your problem",
            },
            {
              id: "current-guide-map",
              label: "Current guide map",
            },
            {
              id: "what-is-still-missing",
              label: "What is still missing",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/sol-cesto/how-to-unlock-lizard",
              label: "How to Unlock Lizard",
            },
            {
              href: "/sol-cesto/how-to-unlock-huntress",
              label: "How to Unlock Huntress",
            },
            {
              href: "/sol-cesto/flute-guide",
              label: "Flute Guide",
            },
            {
              href: "/sol-cesto/all-characters-unlock-guide",
              label: "All Characters Unlock Guide",
            },
          ]}
        >
          <SolCestoHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}