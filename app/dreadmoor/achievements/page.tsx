
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorAchievementsContent from "@/data/dreadmoor/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dreadmoor`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "DREADMOOR Achievements: All 44 & How to Unlock Them";

const metadataDescription =
  "Track all 44 DREADMOOR Steam achievements with an interactive checklist. Find unlock requirements for fishing, story quests, boat upgrades, crafting, and exploration.";

const articleDescription =
  "Check all 44 DREADMOOR achievements, including story objectives, fishing milestones, refueling, boat modules, crafting, exploration, and hidden challenges.";

const datePublished = "2026-11-10";
const dateModified = "2026-11-10";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    publishedTime: datePublished,
    modifiedTime: dateModified,
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "DREADMOOR",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DREADMOOR Achievements",
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
      headline: metadataTitle,
      description: articleDescription,
      inLanguage: "en",
      datePublished,
      dateModified,
      about: [
        {
          "@type": "VideoGame",
          name: "DREADMOOR",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Steam achievements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR achievement unlock requirements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR story achievements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR fishing achievements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR mutated fish achievements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR boat crafting achievements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR refueling achievements",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR exploration achievements",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
      inLanguage: "en",
    },
  ],
};

const toc = [
  {
    id: "achievement-checklist",
    label: "All 44 Achievements Checklist",
  },
  {
    id: "story-achievements",
    label: "Main Story Achievements",
  },
  {
    id: "drying-fort-observatory",
    label: "Drying Fort & Observatory",
  },
  {
    id: "bone-reef-essence",
    label: "Bone Reef & Special Recipe",
  },
  {
    id: "special-story-achievements",
    label: "Special Story Achievements",
  },
  {
    id: "fishing-achievements",
    label: "Peaceful & Predatory Fish",
  },
  {
    id: "mutated-fish",
    label: "Mutated Fish Achievements",
  },
  {
    id: "boat-crafting",
    label: "Boat Modules & Crafting",
  },
  {
    id: "refueling",
    label: "Refueling Achievements",
  },
  {
    id: "hull-cleaning",
    label: "Clean Bottom",
  },
  {
    id: "fish-processing",
    label: "Waste Not — Grinder",
  },
  {
    id: "hook-gun-achievements",
    label: "Hook Gun Achievements",
  },
  {
    id: "boat-distance",
    label: "Boat Travel Distance",
  },
  {
    id: "locks-and-coral",
    label: "Lockpicks & Coral",
  },
  {
    id: "exploration-combat",
    label: "Wolf Medallion",
  },
  {
    id: "early-access-achievement",
    label: "The Early Fish Gets the Worm",
  },
  {
    id: "achievement-cleanup",
    label: "Achievements After the Story",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor",
    label: "DREADMOOR: What to Do Next",
  },
  {
    href: "/dreadmoor/walkthrough",
    label: "DREADMOOR Early Access Walkthrough",
  },
  {
    href: "/dreadmoor/fishing-guide",
    label: "DREADMOOR Fishing Guide",
  },
];

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
          title="How to Unlock All 44 DREADMOOR Achievements"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DreadmoorAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
