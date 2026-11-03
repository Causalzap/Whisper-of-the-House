
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GravhoundsGuideContent from "@/data/gravhounds/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gravhounds`;

const metadataTitle =
  "Gravhounds Guide: Progression, Missions & Blueprints";

const metadataDescription =
  "Progress after your first Gravhounds shift, choose research upgrades, scan Blueprints, defend the Fuel Pump, and escort Coffee Cat to safety.";

const articleTitle =
  "Gravhounds Guide: What Should You Do After Your First Shift?";

const articleDescription =
  "Continue Gravhounds after the opening shift by choosing your next planet through Master Control, comparing research upgrades and resource requirements, and scanning Turret Blueprints. Learn how to prepare the Fuel Pump before starting its transfer, protect Coffee Cat on the way to the Collector, complete mission objectives, and extract safely.";

const imageUrls = [
  `${siteUrl}/images/gravhounds/gravhounds-planet-selection-objectives.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-research-base-turret-upgrade.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-blueprint-scan.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-fuel-pump-defense.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-coffee-cat-escort-objective.webp`,
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
    description:
      "Choose your next Gravhounds mission, manage research, scan Blueprints, defend the Fuel Pump, and bring Coffee Cat back to the Collector.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Gravhounds Yorezen Basin mission selection showing Organic Nitrate, challenge rating, and one remaining Blueprint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Plan your next Gravhounds shift, choose research upgrades, complete Fuel Pump defense, and protect Coffee Cat.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "progression",
    label: "After Your First Shift",
  },
  {
    id: "mission-objectives",
    label: "Mission Objectives & Extraction",
  },
  {
    id: "research",
    label: "Research Upgrade Priorities",
  },
  {
    id: "blueprints",
    label: "Find & Scan Blueprints",
  },
  {
    id: "fuel-pump",
    label: "Fuel Pump Defense",
  },
  {
    id: "coffee-cat",
    label: "Coffee Cat Escort",
  },
  {
    id: "next-shift",
    label: "Prepare for Your Next Shift",
  },
];

const relatedLinks = [
  {
    href: "/gravhounds/beginner-guide",
    label: "Gravhounds Beginner Guide: Complete Your First Shift",
  },
  {
    href: "/gravhounds/mod-deck-builder",
    label: "Gravhounds Mod Deck Builder: Unlock & Edit Mods",
  },
];

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
          name: "Gravhounds",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      about: [
        {
          "@type": "VideoGame",
          name: "GRAVHOUNDS",
        },
        {
          "@type": "Thing",
          name: "Planet selection and mission progression",
        },
        {
          "@type": "Thing",
          name: "Research Lab upgrades and Research Points",
        },
        {
          "@type": "Thing",
          name: "Turret Blueprints and scanning",
        },
        {
          "@type": "Thing",
          name: "Fuel Pump defense mission",
        },
        {
          "@type": "Thing",
          name: "Coffee Cat escort mission",
        },
        {
          "@type": "Thing",
          name: "Mission objectives and extraction",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description="Choose your next planet, prioritize research, scan Blueprints, defend the Fuel Pump, and bring Coffee Cat safely back to the Collector."
          gameTitle="GRAVHOUNDS"
          gameHref="/gravhounds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GravhoundsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
