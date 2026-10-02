import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayContent from "@/data/gears-of-war-e-day/index.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gears-of-war-e-day`;

const metadataTitle =
  "Gears of War E-Day Guide: Walkthrough, Acts & Achievements";

const metadataDescription =
  "Gears of War E-Day guide with Act 1–5 walkthroughs, Hard Cases, Secondary Objectives, Supply Caches, upgrades, final boss, and achievements.";

const articleDescription =
  "Follow Gears of War: E-Day from the Prologue through all five Acts and the Epilogue, with routes for major blockers plus Hard Cases, Secondary Objectives, Collectibles, Supply Caches, equipment upgrades, Co-Op, Insane, and achievement completion.";

const toc = [
  {
    id: "walkthrough",
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
    label: "Final Boss & Epilogue",
  },
  {
    id: "exploration",
    label: "Before Leaving an Area",
  },
  {
    id: "hard-cases",
    label: "Hard Cases",
  },
  {
    id: "secondary-objectives",
    label: "Secondary Objectives",
  },
  {
    id: "collectibles",
    label: "Collectibles",
  },
  {
    id: "supply-caches",
    label: "Supply Caches",
  },
  {
    id: "equipment-upgrades",
    label: "Equipment Upgrades",
  },
  {
    id: "co-op-insane",
    label: "Co-Op & Insane",
  },
  {
    id: "achievements",
    label: "Achievements",
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
  {
    href: "/gears-of-war-e-day/ending-final-boss",
    label: "Final Boss & Ending",
  },
  {
    href: "/gears-of-war-e-day/achievements",
    label: "Achievements",
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
    card: "summary_large_image",
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
          "Gears of War: E-Day Guide — Walkthrough, Acts & Achievements",
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
          title="Gears of War: E-Day Guide — Walkthrough, Acts & Achievements"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
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