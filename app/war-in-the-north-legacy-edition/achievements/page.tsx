import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionAchievementsContent from "@/data/war-in-the-north-legacy-edition/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-friend-to-ring-bearer.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-complete.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-glorihirin-rescue.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-beleram-final-warning.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-agandaur-final-battle.webp`,
];

const toc = [
  {
    id: "how-many-playthroughs",
    label: "How many playthroughs?",
  },
  {
    id: "normal-run-priorities",
    label: "Run 1: Normal priorities",
  },
  {
    id: "fornost-achievements",
    label: "Fornost achievements",
  },
  {
    id: "rivendell-achievements",
    label: "Rivendell achievements",
  },
  {
    id: "lidless-eye-achievement",
    label: "The Lidless Eye",
  },
  {
    id: "combat-achievements",
    label: "Combat achievements",
  },
  {
    id: "gear-skill-achievements",
    label: "Gear & skill achievements",
  },
  {
    id: "three-player-achievement",
    label: "Three-player achievement",
  },
  {
    id: "final-boss-eagle-savior",
    label: "Eagle Savior",
  },
  {
    id: "heroic-run",
    label: "Run 2: Heroic",
  },
  {
    id: "legendary-run",
    label: "Run 3: Legendary",
  },
  {
    id: "my-final-100-percent-check",
    label: "Final 100% check",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
  {
    href: "/war-in-the-north-legacy-edition/side-quests",
    label: "Side Quests & Missables",
  },
  {
    href: "/war-in-the-north-legacy-edition/secrets",
    label: "All Secrets Checklist",
  },
  {
    href: "/war-in-the-north-legacy-edition/lidless-eye-scrolls",
    label: "All Lidless Eye Scroll Locations",
  },
  {
    href: "/war-in-the-north-legacy-edition/co-op-crossplay-troubleshooting",
    label: "Co-op & Crossplay Guide",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Achievements: 100% Roadmap",
  description:
    "Get all 46 Legacy Edition achievements with my 3-run Normal to Legendary route, single-run counters, missables, co-op, and Eagle Savior.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Achievements: 100% Roadmap",
    description:
      "Plan all 46 achievements across Normal, Heroic, and Legendary while protecting single-playthrough counters, missables, co-op goals, and Eagle Savior.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Speaking with Frodo in Rivendell for Friend to the Ring-bearer in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Achievements: 100% Roadmap",
    description:
      "Plan all 46 achievements with a Normal to Heroic to Legendary route, missables, single-run counters, co-op, and Eagle Savior.",
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
          name: "War in the North Legacy Edition Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements & 100% Roadmap",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Achievements: 100% Roadmap",
      description:
        "A practical roadmap for all 46 War in the North Legacy Edition achievements, including the Normal to Heroic to Legendary progression, single-playthrough requirements, Secrets, quests, Lidless Eye Scrolls, co-op, and Eagle Savior.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      mainEntityOfPage: pageUrl,
      about: [
        {
          "@type": "VideoGame",
          name: "The Lord of the Rings: War in the North - Legacy Edition",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "War in the North Legacy Edition achievements",
        },
        {
          "@type": "Thing",
          name: "War in the North Legacy Edition New Game Plus",
        },
        {
          "@type": "Thing",
          name: "Heroic difficulty",
        },
        {
          "@type": "Thing",
          name: "Legendary difficulty",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="War in the North Legacy Edition Achievements & 100% Roadmap"
          description="Plan all 46 achievements across three campaign clears, protect the single-playthrough requirements, handle the important missables, and finish Normal, Heroic, and Legendary efficiently."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}