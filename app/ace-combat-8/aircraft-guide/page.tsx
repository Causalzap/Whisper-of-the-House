import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AceCombat8AircraftGuideContent from "@/data/ace-combat-8/aircraft-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ace-combat-8`;
const pageUrl = `${hubUrl}/aircraft-guide`;

const metadataTitle =
  "Ace Combat 8 Aircraft Guide: All Planes, Unlocks & Tree";

const metadataDescription =
  "All 34 Ace Combat 8 aircraft with roles, MRP costs, unlocks, Aircraft Tree routes, early-game upgrades, late-game picks, and post-game planes.";

const articleDescription =
  "See all 34 aircraft in Ace Combat 8, how the Aircraft Tree works, what each plane costs, which routes unlock key upgrades, and what to buy from the first campaign through post-game.";

const heroImage =
  "/images/ace-combat-8/aircraft-tree-early-game.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/ace-combat-8/aircraft-tree-parts-and-weapons.webp`,
  `${siteUrl}/images/ace-combat-8/aircraft-tree-ew-branch.webp`,
  `${siteUrl}/images/ace-combat-8/aircraft-tree-f35c-late-game.webp`,
  `${siteUrl}/images/ace-combat-8/aircraft-tree-post-game-branch.webp`,
];

const toc = [
  {
    id: "aircraft-tree",
    label: "Aircraft Tree",
  },
  {
    id: "best-progression-route",
    label: "Best Progression Route",
  },
  {
    id: "late-game-aircraft",
    label: "Su-57 vs F-22A",
  },
  {
    id: "all-aircraft",
    label: "All 34 Aircraft",
  },
  {
    id: "post-game",
    label: "Post-Game Aircraft",
  },
  {
    id: "what-to-buy-first",
    label: "What to Buy First",
  },
  {
    id: "mrp-and-completion",
    label: "MRP & Completion",
  },
];

const relatedLinks = [
  {
    href: "/ace-combat-8/walkthrough",
    label: "All 30 Missions Walkthrough",
  },
  {
    href: "/ace-combat-8/mrp-farm",
    label: "MRP Farming Guide",
  },
  {
    href: "/ace-combat-8/trophies-achievements",
    label: "Trophies & Achievements",
  },
  {
    href: "/ace-combat-8/assault-records",
    label: "Assault Records",
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
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Ace Combat 8 Aircraft Tree showing aircraft, weapons, parts, and connected unlock paths",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImageUrl],
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Aircraft Guide",
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
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-03",
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
          url: hubUrl,
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
          name: "Ace Combat 8 aircraft unlocks",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 aircraft MRP costs",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Fighter aircraft",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Multirole aircraft",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Attacker aircraft",
        },
        {
          "@type": "Thing",
          name: "Ace Combat 8 Electronic Warfare aircraft",
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
          title="Ace Combat 8 Aircraft Guide: All Planes, Unlocks & Tree"
          description={articleDescription}
          gameTitle="Ace Combat 8: Wings of Theve"
          gameHref="/ace-combat-8"
          breadcrumbBaseHref="/ace-combat-8"
          breadcrumbBaseLabel="Ace Combat 8"
          updatedAt="October 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AceCombat8AircraftGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}