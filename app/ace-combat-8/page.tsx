import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8GuideContent from "@/data/ace-combat-8/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/ace-combat-8`;

const metadataTitle =
  "Ace Combat 8 Guide & Walkthrough: All 30 Missions";

const metadataDescription =
  "Ace Combat 8 guide for all 30 missions, Aircraft Tree progression, trophies, Assault Records, MRP farming, and post-game completion.";

const articleDescription =
  "Start the Ace Combat 8 campaign, follow all 30 missions, find focused routes for major mission blockers, plan Aircraft Tree progression, and choose the right post-game path for trophies, Assault Records, ranks, and MRP.";

const toc = [
  {
    id: "first-campaign",
    label: "30-Mission Campaign",
  },
  {
    id: "mission-guides",
    label: "Mission-Specific Guides",
  },
  {
    id: "aircraft-progression",
    label: "Aircraft Progression",
  },
  {
    id: "first-clear",
    label: "First Clear Priorities",
  },
  {
    id: "after-campaign",
    label: "After Mission 30",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/aircraft-guide",
    label: "Aircraft Guide",
  },
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
  },
  {
    href: "/ace-combat-8/assault-records",
    label: "Assault Records",
  },
  {
    href: "/ace-combat-8/mrp-farm",
    label: "MRP Farming",
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
          name: "Ace Combat 8: Wings of Theve",
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
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-09-29",
      dateModified: "2026-10-03",
      articleSection: "Ace Combat 8 Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Ace Combat 8: Wings of Theve",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 guide",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 walkthrough",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 missions",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 campaign",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 aircraft",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Aircraft Tree",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 trophies and achievements",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Assault Records",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 MRP",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title="Ace Combat 8 Guide & Walkthrough: All 30 Missions"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}