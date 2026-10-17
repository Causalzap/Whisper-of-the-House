import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MrpFarmContent from "@/data/ace-combat-8/mrp-farm.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mrp-farm`;

const metadataTitle =
  "Ace Combat 8 MRP Farm: How to Earn 25 Million MRP";

const metadataDescription =
  "Farm MRP in Ace Combat 8 with Missions 16, 27, and 28. Compare guns-only bonuses, Su-34 bombing, rewards, loadouts, and the 25 million MRP goal.";

const articleDescription =
  "Compare Mission 16 guns-only, Mission 27 Su-34 bombing, and Mission 28 air-defense farming in Ace Combat 8, including example MRP rewards, loadouts, farming risks, and the cumulative 25 million MRP goal.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-28-sema-island-resupply-ready.webp`,
  `${siteUrl}/images/ace-combat-8/mission-28-harmonius-tu160-bombers.webp`,
];

const heroImage =
  "/images/ace-combat-8/mission-28-sema-island-resupply-ready.webp";


  const toc = [
    {
      id: "when-to-farm-mrp",
      label: "When to Start Farming MRP",
    },
    {
      id: "best-mrp-routes",
      label: "Mission 16 vs 27 vs 28",
    },
    {
      id: "mission-16-farm",
      label: "Mission 16 MRP Farm",
    },
    {
      id: "mission-27-farm",
      label: "Mission 27 MRP Farm",
    },
    {
      id: "why-mission-28",
      label: "When to Farm Mission 28",
    },
    {
      id: "mission-28-priority",
      label: "Mission 28 Target Priority",
    },
    {
      id: "when-to-resupply",
      label: "When to Resupply",
    },
    {
      id: "loadout-for-farming",
      label: "Mission 28 Loadout",
    },
    {
      id: "spend-or-save-mrp",
      label: "Spend or Save MRP",
    },
    {
      id: "combine-mrp-goals",
      label: "Combine MRP With Other Goals",
    },
    {
      id: "finish-25-million",
      label: "Finish the 25 Million MRP Goal",
    },
  ];
  

const relatedLinks = [
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
  },
  {
    href: "/ace-combat-8/assault-records",
    label: "Assault Records",
  },
  {
    href: "/ace-combat-8/walkthrough",
    label: "All Missions Walkthrough",
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
    publishedTime: "2026-09-30",
    modifiedTime: "2026-10-17",
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function AceCombat8MrpFarmPage() {
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
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "MRP Farm",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Ace Combat 8 MRP Farm: How to Earn 25 Million MRP",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-09-30",
        dateModified: "2026-10-17",
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
          title="Ace Combat 8 MRP Farm: How to Earn 25 Million MRP"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="October 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MrpFarmContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}