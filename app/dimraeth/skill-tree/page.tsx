import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethSkillTreeContent from "@/data/dimraeth/skill-tree.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/skill-tree`;

const metadataTitle =
  "Dimraeth Skill Tree Guide: Skill Points, Search & Respec";

const metadataDescription =
  "Learn how Dimraeth Skill Points work, how training gives levels, how to search the Skill Tree, plan node paths, avoid wasted points, and respec.";

const articleDescription =
  "A practical Dimraeth Skill Tree guide explaining how XP training awards Skill Points, how race and class affect the tree, how connecting nodes and active skills work, how to search for mechanics such as Bleed, how to count route costs, coordinate attributes with unlocks, and use respec when an early path no longer fits the character.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-skill-tree-overview.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-skill-tree-skills-modifiers.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-skill-tree-search.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-skill-tree-respec.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-skill-points-work",
    label: "How to get Skill Points",
  },
  {
    id: "tree-layout",
    label: "Skill Tree layout",
  },
  {
    id: "race-class-tree",
    label: "Race and class effects",
  },
  {
    id: "nodes",
    label: "Skills and node types",
  },
  {
    id: "search",
    label: "How to use Search",
  },
  {
    id: "route-cost",
    label: "Count the full path",
  },
  {
    id: "attributes",
    label: "Attributes and unlocks",
  },
  {
    id: "build-route",
    label: "Build route timing",
  },
  {
    id: "respec",
    label: "How to respec",
  },
  {
    id: "when-to-respec",
    label: "When to respec",
  },
  {
    id: "early-priority",
    label: "First Skill Points",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/classes",
    label: "Dimraeth Classes Guide",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
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
        alt: "Dimraeth full Skill Tree with connected race and class branches",
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Skill Tree Guide",
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
        "Dimraeth Skill Tree Guide: Skill Points, Search, Paths and Respec",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-17",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Skill Tree",
        },
        {
          "@type": "Thing",
          name: "Skill Points",
        },
        {
          "@type": "Thing",
          name: "Respec",
        },
        {
          "@type": "Thing",
          name: "Attributes",
        },
        {
          "@type": "Thing",
          name: "Training",
        },
        {
          "@type": "Thing",
          name: "Skill Tree Search",
        },
        {
          "@type": "Thing",
          name: "Active Skills",
        },
        {
          "@type": "Thing",
          name: "Skill Modifiers",
        },
        {
          "@type": "Thing",
          name: "Race and Class",
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
          title="Dimraeth Skill Tree: How Skill Points, Search & Respec Work"
          description="Turn XP into Skill Points, find the nodes you actually need, count the real cost of a route, and fix a bad path without restarting your character."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethSkillTreeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}