import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2AchievementsContent from "@/data/endless-legend-2/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "ENDLESS Legend 2 Achievements – All 59 & Hidden Goals";

const metadataDescription =
  "Track all 59 ENDLESS Legend 2 achievements, including hidden goals, faction requirements, victory paths, difficulty wins, combat setups, and 59/59 cleanup.";

const articleDescription =
  "Track all 59 ENDLESS Legend 2 achievements and plan the faction runs, victory paths, difficulty settings, quest outcomes, combat triggers, and empire states that need deliberate setup.";

const toc = [
  {
    id: "achievement-tracker",
    label: "All 59 achievements",
  },
  {
    id: "campaign-plan",
    label: "Plan your campaigns",
  },
  {
    id: "victory-and-difficulty",
    label: "Victory & difficulty",
  },
  {
    id: "faction-achievements",
    label: "Faction achievements",
  },
  {
    id: "hero-achievements",
    label: "Hero achievements",
  },
  {
    id: "combat-and-map",
    label: "Combat & map",
  },
  {
    id: "city-economy",
    label: "City & economy",
  },
  {
    id: "cleanup",
    label: "59 / 59 cleanup",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/victory-conditions",
    label: "Victory Conditions",
  },
  {
    href: "/endless-legend-2/factions",
    label: "All 8 Factions",
  },
  {
    href: "/endless-legend-2/kin-of-sheredyn",
    label: "Kin of Sheredyn",
  },
  {
    href: "/endless-legend-2/last-lords",
    label: "Last Lords",
  },
  {
    href: "/endless-legend-2/sandshapers",
    label: "Sandshapers",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "ENDLESS Legend 2 Achievements – All 59 Requirements & Checklist",
    description: articleDescription,
    siteName: "Whisper of the House",
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
          name: "ENDLESS Legend 2",
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
        "ENDLESS Legend 2 Achievements – All 59 Requirements & Checklist",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ENDLESS Legend 2",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 achievements",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 hidden achievements",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 faction achievements",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 victory achievements",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 difficulty achievements",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Hero achievements",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 combat achievements",
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
          title="ENDLESS Legend 2 Achievements – All 59 Requirements & Checklist"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2AchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}