
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EnshroudedAchievementsContent from "@/data/enshrouded/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/enshrouded`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Enshrouded 58 Achievements: 100% Completion Guide";

const metadataDescription =
  "Track all 58 Enshrouded achievements with a completion checklist, regional cleanup route, Obelisk tips, Shroud Roots, and six new 1.0 goals.";

const articleDescription =
  "Track all 58 Steam achievements and finish each region's Obelisks, Flame Shrines, Shroud Roots, mining discoveries, boss fights, and Level 50 milestone.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-achievements-obelisk-map-reveal.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-achievements-veilwater-underwater-obelisk.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-tracker",
    label: "All 58 achievements",
  },
  {
    id: "completion-route",
    label: "Best completion order",
  },
  {
    id: "flame-shrines",
    label: "Avoid missing Flame Shrines",
  },
  {
    id: "springlands",
    label: "Springlands",
  },
  {
    id: "revelwoods",
    label: "Revelwoods",
  },
  {
    id: "nomad-highlands",
    label: "Nomad Highlands",
  },
  {
    id: "kindlewastes",
    label: "Kindlewastes",
  },
  {
    id: "albaneve-summits",
    label: "Albaneve Summits",
  },
  {
    id: "veilwater-basin",
    label: "Veilwater Basin",
  },
  {
    id: "cinders-cradle",
    label: "Six new 1.0 achievements",
  },
  {
    id: "leveling",
    label: "Level 40, 45 & 50",
  },
  {
    id: "special-achievements",
    label: "Equipment achievements",
  },
  {
    id: "boss-achievements",
    label: "Boss achievements",
  },
  {
    id: "final-cleanup",
    label: "Finish 58/58",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded",
    label: "Enshrouded 1.0 Guide & Walkthrough",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1540,
        height: 1000,
        alt: "Enshrouded Springlands map with Flame locations and player markers near Braelyn Bridge",
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
          name: "Enshrouded",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All 58 Achievements",
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
      headline:
        "Enshrouded All 58 Achievements & 100% Roadmap",
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      image: imageUrls,
      datePublished: "2026-10-16",
      dateModified: "2026-10-16",
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Enshrouded Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Enshrouded 100% completion",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Flame Shrines and Sanctums",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Shroud Roots",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Obelisks",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Cinder's Cradle achievements",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Enshrouded All 58 Achievements & 100% Roadmap"
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EnshroudedAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
