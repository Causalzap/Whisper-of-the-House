import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WalkthroughContent from "@/data/well-dweller/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Well Dweller Walkthrough: Full Progression & Where to Go Next";

const metadataDescription =
  "Follow Well Dweller from Night Garden through The Bog, The Drains, Golden Feathers, Queen's Castle, and the post-Queen route.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-slingshot-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-climb-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-fast-travel-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-water-vessels-unlocked.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-seven-golden-feathers-complete.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-queens-castle-entry.webp`,
];

const toc = [
  {
    id: "night-garden-opening",
    label: "Night Garden & Hunter's Cabin",
  },
  {
    id: "bog-progression",
    label: "The Bog",
  },
  {
    id: "drains-progression",
    label: "The Drains",
  },
  {
    id: "graven-valley",
    label: "Graven Valley",
  },
  {
    id: "dollmaker-house",
    label: "Dollmaker's House",
  },
  {
    id: "upper-routes",
    label: "Seven Sons & Starsinger",
  },
  {
    id: "docks",
    label: "The Docks",
  },
  {
    id: "late-game-feathers",
    label: "Finish the Golden Feathers",
  },
  {
    id: "queens-castle",
    label: "Queen's Castle",
  },
  {
    id: "after-queen",
    label: "After the Queen",
  },
  {
    id: "where-to-go-next",
    label: "Where to Go Next",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller",
    label: "Well Dweller Guide",
  },
  {
    href: "/well-dweller/night-garden-hunters-cabin-walkthrough",
    label: "Night Garden & Hunter's Cabin Walkthrough",
  },
  {
    href: "/well-dweller/the-bog-walkthrough",
    label: "The Bog Walkthrough",
  },
  {
    href: "/well-dweller/the-drains-walkthrough",
    label: "The Drains Walkthrough",
  },
  {
    href: "/well-dweller/golden-feathers-locations",
    label: "All 7 Golden Feather Locations",
  },
  {
    href: "/well-dweller/true-ending",
    label: "Well Dweller True Ending",
  },
  {
    href: "/well-dweller/100-percent-completion",
    label: "Well Dweller 100% Completion",
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
    title: "Well Dweller Walkthrough: Full Progression Route",
    description:
      "Go from Night Garden and The Bog through The Drains, family objectives, seven Golden Feathers, Queen's Castle, and the route after the Queen.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        width: 1600,
        height: 900,
        alt: "Well Dweller Golden Feather total reaching seven out of seven before Queen's Castle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller Walkthrough: Where to Go Next",
    description:
      "Follow the main progression route through movement upgrades, family objectives, Golden Feathers, Queen's Castle, and the post-Queen sequence.",
    images: [imageUrls[4]],
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
          name: "Well Dweller Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
        "Well Dweller Walkthrough: Full Progression and Where to Go Next",
      description:
        "A Well Dweller walkthrough from Night Garden and the Hunter's Cabin through The Bog, The Drains, Graven Valley, Dollmaker's House, the Lookout Tower, The Docks, seven Golden Feathers, Queen's Castle, and the post-Queen route.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      articleSection: "Well Dweller Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Well Dweller",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Well Dweller walkthrough",
        },
        {
          "@type": "Thing",
          name: "Well Dweller progression",
        },
        {
          "@type": "Thing",
          name: "Well Dweller where to go next",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Night Garden",
        },
        {
          "@type": "Thing",
          name: "Well Dweller The Bog",
        },
        {
          "@type": "Thing",
          name: "Well Dweller The Drains",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Graven Valley",
        },
        {
          "@type": "Thing",
          name: "Well Dweller The Docks",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Golden Feathers",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Queen's Castle",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Well Dweller Walkthrough: Full Progression & Where to Go Next"
          description="Follow the main route from Night Garden through each major movement unlock, family objective, Golden Feather stage, Queen's Castle, and the sequence after the Queen."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}