import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAchievementsContent from "@/data/gears-of-war-e-day/achievements.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Gears of War E-Day Achievements Guide: 55 Steam, 54 Xbox";

const metadataDescription =
  "Track all 55 Steam and 54 Xbox achievements in Gears of War E-Day, including Campaign, Co-Op, Insane, Horde Siege, Versus, and cleanup requirements.";

const articleDescription =
  "Track every Gears of War: E-Day achievement across Campaign completion, Co-Op, Insane, Horde Siege, Versus, account progression, revives, and combat-specific requirements.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-hard-case-campaign.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-campaign-supply-cache-armor-mods.webp`,
];

const toc = [
  {
    id: "achievement-tracker",
    label: "Achievement Tracker",
  },
  {
    id: "campaign",
    label: "Story Achievements",
  },
  {
    id: "campaign-completion",
    label: "Campaign Completion",
  },
  {
    id: "coop",
    label: "Co-Op",
  },
  {
    id: "insane",
    label: "Insane Difficulty",
  },
  {
    id: "horde-siege",
    label: "Horde Siege",
  },
  {
    id: "versus",
    label: "Versus",
  },
  {
    id: "progression",
    label: "Player Progression",
  },
  {
    id: "combat",
    label: "Combat Achievements",
  },
  {
    id: "final-achievements",
    label: "Final Achievements",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/weapon-mods",
    label: "Weapon Mods & Locations",
  },
  {
    href: "/gears-of-war-e-day/ending-final-boss",
    label: "Final Boss & Ending",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Gears of War E-Day Hard Case found during Campaign achievement completion",
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


export default function GearsEDayAchievementsPage() {
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
            name: "Gears of War: E-Day",
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
        headline:
          "Gears of War: E-Day Achievements Guide — 55 Steam & 54 Xbox",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        datePublished: "2026-10-01",
        dateModified: "2026-10-05",
        inLanguage: "en-US",
        image: imageUrls,
        about: {
          "@type": "VideoGame",
          name: "Gears of War: E-Day",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

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
          title="Gears of War: E-Day Achievements Guide — 55 Steam & 54 Xbox"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}