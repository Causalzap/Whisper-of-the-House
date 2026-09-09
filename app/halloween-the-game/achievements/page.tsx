import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HalloweenAchievementsContent from "@/data/halloween-the-game/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/halloween-the-game/halloween-collector-final-recording.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-put-him-away-michael-downed.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-i-found-the-car-sedan-setup.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-pumpkin-smasher-achievement.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-achievements-five-star-story-chapter.webp`,
];

export const metadata: Metadata = {
  title: "Halloween: The Game Achievements Guide — All 50",
  description:
    "Unlock all 50 Halloween: The Game achievements with a roadmap for Story Mode, Michael, Civilians, Loomis, hidden achievements, Collector, and cleanup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Halloween: The Game Achievements Guide — All 50",
    description:
      "Track all 50 achievements and plan Story Mode, Civilian, Michael, Loomis, hidden achievements, Collector, and late progression cleanup.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1254,
        height: 708,
        alt: "Nurse Chambers's Recording being collected for the Collector achievement in Halloween The Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Achievements Guide — All 50",
    description:
      "A practical roadmap for all 50 achievements, including Collector, hidden achievements, Civilian escapes, Michael objectives, and Loomis.",
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
          name: "Halloween: The Game Guide",
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
        "Halloween: The Game Achievements Guide: All 50 & Roadmap",
      description:
        "A practical guide to all 50 Halloween: The Game achievements, with a Story Mode and multiplayer roadmap, all 14 Collector recordings, Civilian and Michael objectives, Loomis achievements, hidden achievements, and late progression cleanup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-09",
      dateModified: "2026-09-09",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game achievements",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game achievement guide",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Collector achievement",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game The Perfect Killer achievement",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game I found the Car achievement",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Risky Escape achievement",
        },
        {
          "@type": "Thing",
          name: "Halloween The Game Put him away achievement",
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
    id: "achievement-roadmap",
    label: "All 50 achievement roadmap",
  },
  {
    id: "story-mode-achievements",
    label: "Story Mode achievements",
  },
  {
    id: "collector",
    label: "Collector: all 14 recordings",
  },
  {
    id: "civilian-achievements",
    label: "Civilian achievements",
  },
  {
    id: "michael-achievements",
    label: "Michael achievements",
  },
  {
    id: "loomis-achievements",
    label: "Loomis achievements",
  },
  {
    id: "hidden-achievements",
    label: "Hidden achievements",
  },
  {
    id: "progression-cleanup",
    label: "Progression cleanup",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game",
    label: "Halloween: The Game Guide Hub",
  },
  {
    href: "/halloween-the-game/walkthrough",
    label: "Halloween: The Game Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Halloween: The Game Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression and Perks Guide",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "Prologue Challenges Guide",
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
          title="Halloween: The Game Achievements Guide: All 50 & Roadmap"
          description="Track all 50 achievements in a practical order, collect all 14 Story recordings, bundle Civilian and Michael objectives into normal matches, and save the rare Loomis, hidden, and progression conditions for the right setup."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HalloweenAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}