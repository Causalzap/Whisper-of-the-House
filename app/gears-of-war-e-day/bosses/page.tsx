import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayBossesContent from "@/data/gears-of-war-e-day/bosses.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/bosses`;

const metadataTitle =
  "Gears of War E-Day Boss Guide: Weak Points & How to Beat Them";

const metadataDescription =
  "Beat the Brumak, Corpser, Weaponized Brumak, Scoria and Vraahk with key fight mechanics, weak points and positioning in Gears of War: E-Day.";

const articleDescription =
  "Beat the major Gears of War: E-Day Campaign bosses, including the Brumak, Corpser, Weaponized Brumak, Scoria and Vraahk, with the mechanics and positioning that matter in each fight.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-weaponized-brumak-armor.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-brumak-boss-fight.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-enemy-lines-pillar-boss.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-scoria-pair.webp`,
];

const toc = [
  {
    id: "first-brumak",
    label: "First Brumak",
  },
  {
    id: "corpser",
    label: "Corpser",
  },
  {
    id: "weaponized-brumak",
    label: "Weaponized Brumak",
  },
  {
    id: "second-brumak",
    label: "Later Brumak",
  },
  {
    id: "scoria",
    label: "Scoria",
  },
  {
    id: "second-corpser",
    label: "Later Corpser",
  },
  {
    id: "vraahk",
    label: "Vraahk",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/act-3-walkthrough/",
    label: "Act 3 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-4-walkthrough/",
    label: "Act 4 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/ending-final-boss/",
    label: "Vraahk Final Boss & Ending",
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
        alt: "Weaponized Brumak armor during a major boss fight in Gears of War E-Day",
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


export default function GearsEDayBossesPage() {
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
            name: "Boss Guide",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Boss Guide — Weak Points & How to Beat Them",
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
        datePublished: "2026-10-05",
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
          title="Gears of War: E-Day Boss Guide — Weak Points & How to Beat Them"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayBossesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}