import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethAchievementsContent from "@/data/dimraeth/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Dimraeth Achievements Guide: All 37 & Tracker";

const metadataDescription =
  "Track all 37 Dimraeth achievements and see requirements for quests, levels, pets, Sanctum recruits, Deeds, bosses, buildings, and cleanup goals.";

const articleDescription =
  "A complete Dimraeth achievements guide and progress tracker covering all 37 achievements, including quest and level milestones, Sanctum building and recruitment goals, pets, Deeds, mini-bosses, equipment upgrades, side quests, and an efficient cleanup route.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-sanctum-workshop-stations.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-carrion-parrot-unlock.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-earlwood-deed-board.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-tracker",
    label: "37-achievement tracker",
  },
  {
    id: "story-leveling",
    label: "Quests and level milestones",
  },
  {
    id: "sanctum-building",
    label: "Sanctum achievements",
  },
  {
    id: "upgrades",
    label: "Upgrade achievements",
  },
  {
    id: "pets",
    label: "Pet achievements",
  },
  {
    id: "deeds-bounties",
    label: "Deeds and mini-bosses",
  },
  {
    id: "side-quests",
    label: "25 side quests",
  },
  {
    id: "bosses",
    label: "Boss achievements",
  },
  {
    id: "cleanup-order",
    label: "37 / 37 cleanup route",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
  },
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets Guide",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/goblin-king",
    label: "Dimraeth Goblin King Guide",
  },
  {
    href: "/dimraeth/forest-king",
    label: "Dimraeth Forest King Guide",
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
        alt: "Dimraeth Sanctum Workbench and crafting progression",
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
          name: "Achievements",
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
        "Dimraeth Achievements Guide: All 37 Achievements and Tracker",
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
          name: "Achievements",
        },
        {
          "@type": "Thing",
          name: "Achievement Tracker",
        },
        {
          "@type": "Thing",
          name: "Level 25",
        },
        {
          "@type": "Thing",
          name: "Side Quests",
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
          name: "Tiered Deeds",
        },
        {
          "@type": "Thing",
          name: "Mini-Bosses",
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
      "@type": "WebApplication",
      "@id": `${pageUrl}#tracker`,
      name: "Dimraeth Achievement Tracker",
      url: pageUrl,
      applicationCategory: "GameApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      description:
        "An interactive browser-based checklist for tracking all 37 Dimraeth achievements and filtering unfinished achievement goals.",
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
          title="Dimraeth Achievements: All 37 Requirements & Tracker"
          description="Track all 37 achievements, clear the automatic quest and level milestones first, then finish the longer pet, Sanctum, Deed, side-quest, upgrade, and mini-boss goals."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}