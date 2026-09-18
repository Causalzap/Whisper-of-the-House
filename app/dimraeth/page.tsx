import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethHubContent from "@/data/dimraeth/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dimraeth`;

const metadataTitle =
  "Dimraeth Guide: Walkthrough, Classes, Builds & Progression";

const metadataDescription =
  "Find Dimraeth walkthroughs, classes, Skill Tree help, spells, builds, bosses, pets, co-op, Deeds, difficulty, achievements, and what to do next.";

const articleDescription =
  "A practical Dimraeth guide for deciding what to do next, from Earlwood and Wildwood story progression to Goblin King and Aelwynor, classes and races, world difficulty, Skill Points, Spellbooks, builds, pets, Sanctum development, co-op, Deeds, Bounties, achievements, and post-story activities.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-forest-path-start.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-human-magician-elemental-ranger.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-skill-tree-overview.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-alaric-first-spellbook.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-king-defeated.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-story-end.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-workshop-stations.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "where-to-start",
    label: "What to do next",
  },
  {
    id: "main-progression",
    label: "Main story order",
  },
  {
    id: "wildwood",
    label: "Stuck in Wildwood",
  },
  {
    id: "bosses",
    label: "Story bosses",
  },
  {
    id: "classes",
    label: "Classes & races",
  },
  {
    id: "difficulty",
    label: "Difficulty",
  },
  {
    id: "skill-tree",
    label: "Skill Tree & Skill Points",
  },
  {
    id: "spells",
    label: "Spells & Spellbooks",
  },
  {
    id: "builds",
    label: "When to fix your build",
  },
  {
    id: "pets",
    label: "Pets",
  },
  {
    id: "sanctum",
    label: "Sanctum",
  },
  {
    id: "coop",
    label: "Co-op progression",
  },
  {
    id: "deeds",
    label: "Deeds & Bounties",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "map-locations",
    label: "Map & locations",
  },
  {
    id: "all-bosses",
    label: "Other bosses",
  },
  {
    id: "after-story",
    label: "After Aelwynor",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/classes",
    label: "Dimraeth Classes",
  },
  {
    href: "/dimraeth/skill-tree",
    label: "Dimraeth Skill Tree",
  },
  {
    href: "/dimraeth/spells",
    label: "Dimraeth Spells & Spellbooks",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Forest Path during Dimraeth story progression",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Dimraeth",
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
        "Dimraeth Guide: Walkthrough, Classes, Builds and Progression",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-18",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Walkthrough",
        },
        {
          "@type": "Thing",
          name: "Wildwood",
        },
        {
          "@type": "Thing",
          name: "Classes",
        },
        {
          "@type": "Thing",
          name: "Races",
        },
        {
          "@type": "Thing",
          name: "Difficulty",
        },
        {
          "@type": "Thing",
          name: "Skill Tree",
        },
        {
          "@type": "Thing",
          name: "Spells",
        },
        {
          "@type": "Thing",
          name: "Spellbooks",
        },
        {
          "@type": "Thing",
          name: "Builds",
        },
        {
          "@type": "Thing",
          name: "Goblin King",
        },
        {
          "@type": "Thing",
          name: "Aelwynor the Wildroot Father",
        },
        {
          "@type": "Thing",
          name: "Pets",
        },
        {
          "@type": "Thing",
          name: "Sanctum",
        },
        {
          "@type": "Thing",
          name: "Co-op",
        },
        {
          "@type": "Thing",
          name: "Achievements",
        },
        {
          "@type": "Thing",
          name: "Deeds",
        },
        {
          "@type": "Thing",
          name: "Bounties",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Dimraeth Guide: Walkthrough, Classes, Builds & What to Do Next"
          description="Find the next step when you are stuck: follow the story through Wildwood, choose a class, understand difficulty, spend Skill Points, unlock Spellbooks, fix a weak build, prepare the Sanctum, or move into Deeds and post-story progress."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}