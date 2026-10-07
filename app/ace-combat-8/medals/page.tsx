import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MedalsContent from "@/data/ace-combat-8/medals.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/medals`;

const metadataTitle =
  "Ace Combat 8 Medals Guide: All 29 & Easiest 10 to Get";

const metadataDescription =
  "All 29 Ace Combat 8 Campaign Medals, the easiest 10 to earn, mission-specific requirements, S-Rank medals, and full-campaign restrictions.";

const articleDescription =
  "Find all 29 Campaign Medals in Ace Combat 8, choose the fastest medals for Meritorious Service, and avoid the easy-to-miss conditions in Missions 25, 27, and 30.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/ace-combat-8-campaign-medals.webp`,
  `${siteUrl}/images/ace-combat-8/mission-27-support-pillar-deck-collapse.webp`,
  `${siteUrl}/images/ace-combat-8/mission-30-laser-guidance-uavs.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "campaign-medals",
    label: "All 29 Campaign Medals",
  },
  {
    id: "fast-ten-medals",
    label: "Easiest 10 Medals",
  },
  {
    id: "all-medal-requirements",
    label: "All Medal Requirements",
  },
  {
    id: "cumulative-medals",
    label: "Cumulative Medals",
  },
  {
    id: "s-rank-medals",
    label: "S-Rank Medals",
  },
  {
    id: "mission-medals",
    label: "Mission Medals",
  },
  {
    id: "mission-25-medal",
    label: "Mission 25 Medal",
  },
  {
    id: "mission-27-medal",
    label: "Mission 27 Medal",
  },
  {
    id: "mission-30-medal",
    label: "Mission 30 Medal",
  },
  {
    id: "campaign-restriction-medals",
    label: "Campaign Restriction Medals",
  },
  {
    id: "when-to-stop",
    label: "When to Stop at 10",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/trophies-achievements/",
    label: "Trophies & Achievements",
  },
  {
    href: "/ace-combat-8/mission-27-fatsia-ocean-fortress/",
    label: "Mission 27: Fatsia",
  },
  {
    href: "/ace-combat-8/mission-30-song-of-wings/",
    label: "Mission 30: Song of Wings",
  },
  {
    href: "/ace-combat-8/walkthrough/",
    label: "Campaign Walkthrough",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        alt: "All 29 Campaign Medals in Ace Combat 8 Wings of Theve",
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

export default function AceCombat8MedalsPage() {
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
            name: "Ace Combat 8",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Campaign Medals",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        url: pageUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-07",
        dateModified: "2026-10-07",
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
          title="Ace Combat 8 Medals: All 29 Requirements and Easiest 10"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MedalsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}