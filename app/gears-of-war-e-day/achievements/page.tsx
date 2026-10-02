import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAchievementsContent from "@/data/gears-of-war-e-day/achievements.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Gears of War E-Day Achievements Guide: All 55 on Steam";

const metadataDescription =
  "Track all Gears of War E-Day achievements: 55 on Steam and 54 on Xbox, with Campaign, Insane, Co-Op, Horde Siege, Versus, and cleanup tips.";

const articleDescription =
  "Track every Gears of War: E-Day achievement across Campaign, Co-Op, Insane, Horde Siege, Versus, progression, revives, and combat-specific requirements.";

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
    label: "Campaign Achievements",
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
    id: "revives",
    label: "Revive Achievements",
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
    href: "/gears-of-war-e-day/act-1-walkthrough",
    label: "Act 1 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-3-walkthrough",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-4-walkthrough",
    label: "Act 4 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-5-walkthrough",
    label: "Act 5 Walkthrough",
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
        alt: "Gears of War E-Day Campaign Hard Case discovered during exploration",
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
          "Gears of War: E-Day Achievements Guide — All 55 on Steam",
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
        dateModified: "2026-10-02",
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
          title="Gears of War: E-Day Achievements Guide — All 55 on Steam"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
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