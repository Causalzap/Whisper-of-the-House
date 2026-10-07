import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Mission29SeleneContent from "@/data/ace-combat-8/mission-29-selene.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/mission-29-selene`;

const metadataTitle =
  "Ace Combat 8 Moon 11 Guide: Beat Selene in Mission 29";

const metadataDescription =
  "Beat Moon 11 in Ace Combat 8 Mission 29 with better attack windows, APS UAV priorities, the X-40 second phase, and S-Rank strategy.";

const articleDescription =
  "How to beat Moon 11 in Ace Combat 8 Mission 29, including when to attack Selene, how to handle the Escort UAV APS, what happens after the X-40 goes down, and how to approach S Rank without wasting time chasing every UAV.";

const imageUrls = [
  `${siteUrl}/images/ace-combat-8/mission-29-moon-11-laser-designator.webp`,
  `${siteUrl}/images/ace-combat-8/mission-29-moon-11-uav-aps.webp`,
  `${siteUrl}/images/ace-combat-8/mission-29-moon-11-neural-load.webp`,
  `${siteUrl}/images/ace-combat-8/mission-29-moon-11-x40-disassembly.webp`,
  `${siteUrl}/images/ace-combat-8/mission-29-s-rank-results.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "stop-moon-11-laser",
    label: "Stop Moon 11's Laser",
  },
  {
    id: "moon-11-turns",
    label: "Handle Moon 11's Turns",
  },
  {
    id: "uav-aps",
    label: "Escort UAVs and APS",
  },
  {
    id: "moon-11-down",
    label: "What Happens After Moon 11 Goes Down",
  },
  {
    id: "aircraft-loadout",
    label: "Aircraft and Loadout",
  },
  {
    id: "s-rank",
    label: "How to Get S Rank",
  },
  {
    id: "after-mission-29",
    label: "After Mission 29",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/walkthrough",
    label: "Ace Combat 8 Walkthrough",
  },
  {
    href: "/ace-combat-8/mission-30-song-of-wings",
    label: "Mission 30: Song of Wings",
  },
  {
    href: "/ace-combat-8/assault-records",
    label: "Assault Records",
  },
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
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
        alt: "Moon 11 guiding the Tonitra Spear during Ace Combat 8 Mission 29",
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

export default function Mission29SelenePage() {
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
            name: "Moon 11 Mission 29",
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
          title="Ace Combat 8 Moon 11: How to Beat Selene in Mission 29"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Mission29SeleneContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}