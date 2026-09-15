import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethHubContent from "@/data/dimraeth/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dimraeth`;

const metadataTitle =
  "Dimraeth Guide Hub: Walkthrough, Builds, Pets & Deeds";

const metadataDescription =
  "Find the right Dimraeth guide for story progression, Wildwood routes, bosses, builds, pets, Sanctum, co-op, Deeds, Bounties, and what to do next.";

const articleDescription =
  "A Dimraeth Early Access guide hub for choosing the right next step, including the main story walkthrough, Wildwood routes, Goblin King and Forest King, Shadow and Brawler builds, pets and companions, Sanctum progression, co-op world rules, Deeds and Bounties, plus emerging questions around races, classes, maps, achievements, and bosses.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-forest-path-start.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-king-defeated.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-story-end.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-attribute-training-memory-intelligence.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-fangra-cub-companion.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-deeds-unlocked-deed-board.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "where-to-start",
    label: "Where to start",
  },
  {
    id: "main-progression",
    label: "Main story progression",
  },
  {
    id: "wildwood",
    label: "Wildwood routes",
  },
  {
    id: "bosses",
    label: "Goblin King & Forest King",
  },
  {
    id: "builds",
    label: "Builds",
  },
  {
    id: "pets",
    label: "Pets & companions",
  },
  {
    id: "sanctum",
    label: "Sanctum",
  },
  {
    id: "coop",
    label: "Co-op progression",
  },
  {
    id: "deeds",
    label: "Deeds & Bounties",
  },
  {
    id: "classes-races",
    label: "Classes & races",
  },
  {
    id: "map-locations",
    label: "Map & locations",
  },
  {
    id: "achievements",
    label: "Achievements & missables",
  },
  {
    id: "all-bosses",
    label: "Bosses",
  },
  {
    id: "after-story",
    label: "After the story",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/wildwood-walkthrough",
    label: "Dimraeth Wildwood Walkthrough",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds",
  },
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
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
        width: 600,
        height: 300,
        alt: "Forest Path during Dimraeth Early Access progression",
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
          name: "Dimraeth",
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
        "Dimraeth Guide Hub: Walkthrough, Builds, Pets, Co-op and Deeds",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Dimraeth Walkthrough",
        },
        {
          "@type": "Thing",
          name: "Wildwood",
        },
        {
          "@type": "Thing",
          name: "Goblin King",
        },
        {
          "@type": "Thing",
          name: "Aelwynor the Wildroot Father",
        },
        {
          "@type": "Thing",
          name: "Dimraeth Builds",
        },
        {
          "@type": "Thing",
          name: "Pets and Companions",
        },
        {
          "@type": "Thing",
          name: "Sanctum",
        },
        {
          "@type": "Thing",
          name: "Co-op Progression",
        },
        {
          "@type": "Thing",
          name: "Deeds",
        },
        {
          "@type": "Thing",
          name: "Bounties",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
          title="Dimraeth Guide Hub: What to Do Next"
          description="Use the current blocker to choose the right route: story progression, Wildwood navigation, boss fights, build upgrades, companions, Sanctum work, co-op, or post-story Deeds."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}