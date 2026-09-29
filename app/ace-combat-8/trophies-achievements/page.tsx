import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8TrophiesAchievementsContent from "@/data/ace-combat-8/trophies-achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/trophies-achievements`;

const metadataTitle =
  "Ace Combat 8 Trophies & Achievements: All 55 Requirements";

const metadataDescription =
  "Track all 55 Ace Combat 8 achievements, including ACE S ranks, Assault Records, medals, MRP, aircraft collection, wingman tasks, and campaign goals.";

const articleDescription =
  "Complete every Ace Combat 8 trophy and achievement with a 55-item tracker covering the campaign, ACE difficulty, S ranks, Assault Records, medals, MRP, aircraft, and combat counters.";

const toc = [
  {
    id: "achievement-tracker",
    label: "55-Achievement Tracker",
  },
  {
    id: "first-campaign",
    label: "First Campaign",
  },
  {
    id: "wingman-and-misc",
    label: "Wingman & Quick Tasks",
  },
  {
    id: "aircraft-mrp",
    label: "Aircraft & MRP",
  },
  {
    id: "long-counters",
    label: "Kill Counters",
  },
  {
    id: "records-medals",
    label: "Assault Records & Medals",
  },
  {
    id: "ace-and-s-ranks",
    label: "ACE & S Ranks",
  },
  {
    id: "final-cleanup",
    label: "Final Cleanup",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8",
    label: "Ace Combat 8 Guide",
  },
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/mission-9-land-battleship-blockade",
    label: "Mission 9 Land Battleship",
  },
  {
    href: "/ace-combat-8/mission-11-maximum-payload",
    label: "Mission 11 Maximum Payload",
  },
  {
    href: "/ace-combat-8/mission-27-fatsia-ocean-fortress",
    label: "Mission 27 Fatsia",
  },
  {
    href: "/ace-combat-8/mission-30-song-of-wings",
    label: "Mission 30 Song of Wings",
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
    title: metadataTitle,
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
          name: "Ace Combat 8 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Trophies & Achievements",
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
        "Ace Combat 8 Trophies & Achievements: All 55 Requirements",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-09-29",
      dateModified: "2026-09-29",
      articleSection: "Ace Combat 8 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Ace Combat 8: Wings of Theve",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 achievements",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 trophies",
        },
        {
          "@type": "Thing",
          name: "ACE difficulty",
        },
        {
          "@type": "Thing",
          name: "S ranks",
        },
        {
          "@type": "Thing",
          name: "Assault Records",
        },
        {
          "@type": "Thing",
          name: "Medals",
        },
        {
          "@type": "Thing",
          name: "MRP",
        },
        {
          "@type": "Thing",
          name: "Aircraft Tree",
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
          title="Ace Combat 8 Trophies & Achievements: All 55 Requirements"
          description="Track every shared achievement requirement, protect the campaign-long tasks on your first run, then finish ACE ranks, Assault Records, medals, MRP, aircraft collection, and long combat counters."
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8TrophiesAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}