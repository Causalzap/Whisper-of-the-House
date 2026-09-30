import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AssaultRecordsContent from "@/data/ace-combat-8/assault-records.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/assault-records`;

const metadataTitle =
  "Ace Combat 8 Assault Records: All 83 & Ace Spawns";

const metadataDescription =
  "Find all 83 Ace Combat 8 Assault Records, including conditional Ace spawn requirements, mission triggers, difficulty rules, and cross-mission unlocks.";

const articleDescription =
  "Track all 83 Assault Records in Ace Combat 8, including the 31 conditional Aces, their spawn requirements, mission triggers, and important cross-mission conditions.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-16-currus-uav-launch.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-fatsia-eight-spokes-layout.webp`,
  `${siteUrl}/images/ace-combat-8/mission-28-harmonius-tu160-bombers.webp`,
];

const heroImage =
  "/images/ace-combat-8/mission-16-currus-uav-launch.webp";

const toc = [
  {
    id: "how-assault-records-work",
    label: "How Assault Records Work",
  },
  {
    id: "automatic-records",
    label: "52 Campaign Unit Records",
  },
  {
    id: "conditional-aces",
    label: "31 Conditional Ace Spawns",
  },
  {
    id: "mission-18-chain",
    label: "Mission 18 to Mission 28",
  },
  {
    id: "counterintuitive-triggers",
    label: "Unusual Spawn Conditions",
  },
  {
    id: "route-triggers",
    label: "Flight-Path Triggers",
  },
  {
    id: "timed-triggers",
    label: "Timed Ace Triggers",
  },
  {
    id: "final-cleanup",
    label: "Final Cleanup",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
  },
  {
    href: "/ace-combat-8/mission-16-singer",
    label: "Mission 16: Singer",
  },
  {
    href: "/ace-combat-8/mission-18-moonlight-and-shadows",
    label: "Mission 18: Moonlight and Shadows",
  },
  {
    href: "/ace-combat-8/mrp-farm",
    label: "MRP Farming",
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

export default function AceCombat8AssaultRecordsPage() {
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
            name: "Assault Records",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Ace Combat 8 Assault Records: All 83 Records & Ace Spawn Conditions",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-09-30",
        dateModified: "2026-09-30",
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
          title="Ace Combat 8 Assault Records: All 83 Records & Ace Spawn Conditions"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="September 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AssaultRecordsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}