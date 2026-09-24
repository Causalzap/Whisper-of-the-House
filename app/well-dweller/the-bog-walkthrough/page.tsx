import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheBogWalkthroughContent from "@/data/well-dweller/the-bog-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/the-bog-walkthrough`;

const metadataTitle =
  "Well Dweller The Bog Walkthrough: Swarm, Climb & Tent Travel";

const metadataDescription =
  "Beat the Swarm, unlock Climb and Tent Travel, check Queen's Castle's 7-Feather gate, and continue from The Bog to The Drains.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-bog-yilda-map.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-queens-castle-seven-feathers-required.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-climb-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-fast-travel-unlock.webp`,
];

const toc = [
  {
    id: "enter-the-bog",
    label: "Enter The Bog",
  },
  {
    id: "ilda-camp",
    label: "Ilda's Camp",
  },
  {
    id: "queen-castle-gate",
    label: "Queen's Castle Gate",
  },
  {
    id: "golden-gates",
    label: "Golden Gates",
  },
  {
    id: "ground-dash",
    label: "Ground Dash",
  },
  {
    id: "swarm",
    label: "Defeat the Swarm",
  },
  {
    id: "climb",
    label: "Unlock Climb",
  },
  {
    id: "after-climb",
    label: "After Getting Climb",
  },
  {
    id: "tent-travel",
    label: "Unlock Tent Travel",
  },
  {
    id: "blocked-bog-routes",
    label: "Blocked Bog Routes",
  },
  {
    id: "where-next",
    label: "Go to The Drains",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller",
    label: "Well Dweller Guide",
  },
  {
    href: "/well-dweller/walkthrough",
    label: "Well Dweller Walkthrough",
  },
  {
    href: "/well-dweller/night-garden-hunters-cabin-walkthrough",
    label: "Night Garden & Hunter's Cabin Walkthrough",
  },
  {
    href: "/well-dweller/the-drains-walkthrough",
    label: "The Drains Walkthrough",
  },
  {
    href: "/well-dweller/golden-feathers-locations",
    label: "All 7 Golden Feather Locations",
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
    title: "Well Dweller The Bog Walkthrough",
    description:
      "Meet Ilda, check the Queen's Castle gate, defeat the Swarm, unlock Climb and Tent Travel, and continue into The Drains.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1600,
        height: 900,
        alt: "Well Dweller Climb ability unlocked after defeating the Swarm in The Bog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller The Bog Walkthrough",
    description:
      "Defeat the Swarm, unlock Climb and Tent Travel, and continue from The Bog into The Drains.",
    images: [imageUrls[2]],
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
          name: "The Bog Walkthrough",
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
        "Well Dweller The Bog Walkthrough: Swarm, Climb, Tent Travel, and Queen's Castle Gate",
      description:
        "A Well Dweller walkthrough for The Bog covering Ilda's camp, the Queen's Castle seven-Golden-Feather requirement, golden gates, the ground dash obstacle, the Swarm fight, Climb, Tent Travel, and the route into The Drains.",
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
          name: "Well Dweller The Bog",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Swarm",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Climb",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Tent Travel",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Queen's Castle",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Golden Feathers",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Ilda",
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
          title="Well Dweller The Bog Walkthrough: Swarm, Climb & Tent Travel"
          description="Meet Ilda, reach the early Queen's Castle gate, defeat the Swarm, unlock Climb and Tent Travel, and continue toward The Drains."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheBogWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}