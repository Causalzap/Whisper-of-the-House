import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CodexLuminaFragmentsContent from "@/data/the-occultist/codex-lumina-fragments.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/codex-lumina-fragments`;

export const metadata: Metadata = {
  title: "The Occultist Codex Lumina Fragments: All 4 Page Locations in Redler Manor",
  description:
    "Find all four Codex Lumina fragments in The Occultist. This guide covers the clock room, Gabriel’s hidden chamber, the painting-symbol puzzle, and the final star-and-moon chamber in Redler Manor.",
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
          name: "Codex Lumina Fragments",
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
        "The Occultist Codex Lumina Fragments: All 4 Page Locations in Redler Manor",
      description:
        "This guide explains where to find all four Codex Lumina fragments in The Occultist, how the Redler Manor page sequence works, and what the completed Codex reveals about the ritual.",
      image: [
        `${siteUrl}/images/the-occultist/redler-manor/codex-fragment-clock-room.webp`,
        `${siteUrl}/images/the-occultist/redler-manor/gabriel-childhood-room.webp`,
        `${siteUrl}/images/the-occultist/redler-manor/codex-fragment-star-moon-room.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-09",
      about: [
        {
          "@type": "VideoGame",
          name: "The Occultist",
        },
        {
          "@type": "CreativeWork",
          name: "Codex Lumina",
        },
        {
          "@type": "Thing",
          name: "Redler Manor",
        },
        {
          "@type": "Thing",
          name: "Amelia Redler",
        },
        {
          "@type": "Thing",
          name: "Gabriel Rebels",
        },
        {
          "@type": "Thing",
          name: "Bloodline sacrifice",
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
          title="The Occultist Codex Lumina Fragments: All 4 Page Locations in Redler Manor"
          description="Looking for all Codex Lumina fragments in The Occultist? This guide covers the four missing pages in Redler Manor, including the clock room, Gabriel’s hidden chamber, the painting puzzle, and the final star-and-moon chamber."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 9, 2026"
          toc={[
            {
              id: "how-the-codex-lumina-fragments-work",
              label: "How the fragments work",
            },
            {
              id: "how-many-codex-lumina-fragments-are-there",
              label: "How many fragments there are",
            },
            {
              id: "where-to-find-all-codex-lumina-fragments",
              label: "All fragment locations",
            },
            {
              id: "fragment-1-clock-and-portrait-room",
              label: "Fragment 1: Clock room",
            },
            {
              id: "fragment-2-gabriels-hidden-childhood-chamber",
              label: "Fragment 2: Gabriel’s chamber",
            },
            {
              id: "fragment-3-painting-symbol-puzzle",
              label: "Fragment 3: Painting puzzle",
            },
            {
              id: "fragment-4-star-and-moon-chamber",
              label: "Fragment 4: Star-and-moon chamber",
            },
            {
              id: "what-the-completed-codex-reveals",
              label: "What the Codex reveals",
            },
            {
              id: "why-players-get-stuck-on-the-codex-fragments",
              label: "Why players get stuck",
            },
            {
              id: "best-way-to-track-codex-progress",
              label: "How to track progress",
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
              href: "/the-occultist/all-altar-locations/",
              label: "All Altar Locations",
            },
          ]}
        >
          <CodexLuminaFragmentsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}