import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayContent from "@/data/gears-of-war-e-day/index.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gears-of-war-e-day`;

const metadataTitle =
  "Gears of War E-Day Guide: Walkthrough, Bosses & Achievements";

const metadataDescription =
  "Gears of War E-Day guide with all five Acts, major route blockers, bosses, weapon mods, final boss and ending, and all 55 Steam achievements.";

const articleDescription =
  "Follow Gears of War: E-Day through all five Acts, major Campaign blockers, boss fights, optional weapon upgrades, the final operation, and achievement completion.";

const toc = [
  {
    id: "campaign",
    label: "Campaign Walkthrough",
  },
  {
    id: "act-1",
    label: "Act 1",
  },
  {
    id: "act-2",
    label: "Act 2",
  },
  {
    id: "act-3",
    label: "Act 3",
  },
  {
    id: "act-4",
    label: "Act 4",
  },
  {
    id: "act-5",
    label: "Act 5",
  },
  {
    id: "final-boss-ending",
    label: "Final Boss & Ending",
  },
  {
    id: "bosses",
    label: "Bosses",
  },
  {
    id: "weapon-mods",
    label: "Weapon Mods",
  },
  {
    id: "before-leaving-area",
    label: "Before Leaving an Area",
  },
  {
    id: "campaign-completion",
    label: "Campaign Completion",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough/",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/bosses/",
    label: "Boss Guide",
  },
  {
    href: "/gears-of-war-e-day/weapon-mods/",
    label: "Weapon Mods & Locations",
  },
  {
    href: "/gears-of-war-e-day/ending-final-boss/",
    label: "Final Boss & Ending",
  },
  {
    href: "/gears-of-war-e-day/achievements/",
    label: "Achievement Tracker",
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
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};


export default function GearsEDayPage() {
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
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Guide — Walkthrough, Bosses & Achievements",
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
          title="Gears of War: E-Day Guide — Walkthrough, Bosses & Achievements"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}