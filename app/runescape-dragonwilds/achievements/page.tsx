import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsAchievementsContent from "@/data/runescape-dragonwilds/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-achievements-regicide.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-achievements-gold-medal.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-achievements-eye-of-oculus.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dragon-slayer-rewards.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Achievements Guide — All 50",
  description:
    "Complete all 50 RuneScape: Dragonwilds achievements, including bosses, regional quests, ability challenges, Agility Gold medals, and Level 99 skills.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Achievements Guide — All 50",
    description:
      "Track all 50 achievements from early progression and boss kills to regional quests, ability challenges, Agility medals, and Level 99 skills.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Queen Kuldra defeated for the Regicide achievement in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Achievements Guide — All 50",
    description:
      "A practical checklist for all 50 achievements, including bosses, Secondary Quests, ability challenges, Gold medals, and Level 99 skills.",
    images: [imageUrls[0]],
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
          name: "RuneScape: Dragonwilds Guide",
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
        "RuneScape: Dragonwilds Achievements Guide: All 50",
      description:
        "A complete guide to all 50 RuneScape: Dragonwilds achievements, including early progression, boss kills, regional Secondary Quests, ability challenges, Agility Gold medals, and every Level 99 skill requirement.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-16",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds achievements",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds achievement guide",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Regicide",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Agility Gold medals",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Secondary Quests",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Level 99 skills",
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

const toc = [
  {
    id: "all-achievements",
    label: "All 50 achievements",
  },
  {
    id: "early-achievements",
    label: "Early achievements",
  },
  {
    id: "ability-achievements",
    label: "Ability challenges",
  },
  {
    id: "boss-achievements",
    label: "Boss achievements",
  },
  {
    id: "regicide",
    label: "Regicide",
  },
  {
    id: "regional-quests",
    label: "Regional Secondary Quests",
  },
  {
    id: "agility-achievements",
    label: "Agility achievements",
  },
  {
    id: "level-99-achievements",
    label: "Level 99 skills",
  },
  {
    id: "completion-order",
    label: "Completion order",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer and Velgar Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/scorned-wilderness",
    label: "Scorned Wilderness Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/kuldra",
    label: "Queen Kuldra Boss Walkthrough",
  },
];

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
          title="RuneScape: Dragonwilds Achievements Guide: All 50"
          description="Track all 50 achievements, clear the boss and regional requirements, finish the one-off ability challenges, earn Gold on every Agility course, and close out the 12 Level 99 skills."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}