import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WellDwellerGuideContent from "@/data/well-dweller/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/well-dweller`;

const metadataTitle =
  "Well Dweller Guide: Walkthrough, Feathers, Ending & 100%";

const metadataDescription =
  "Find the Well Dweller walkthrough, Bog and Drains routes, all 7 Golden Feathers, the post-Queen ending, and the 41-achievement 100% checklist.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-hub.webp`,
];

const toc = [
  {
    id: "walkthrough",
    label: "Where to Go Next",
  },
  {
    id: "night-garden",
    label: "Night Garden & Hunter's Cabin",
  },
  {
    id: "the-bog",
    label: "The Bog",
  },
  {
    id: "the-drains",
    label: "The Drains",
  },
  {
    id: "golden-feathers",
    label: "7 Golden Feathers",
  },
  {
    id: "queens-castle",
    label: "Queen's Castle",
  },
  {
    id: "after-the-queen",
    label: "After the Queen",
  },
  {
    id: "completion",
    label: "100% Completion",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller/walkthrough",
    label: "Well Dweller Walkthrough",
  },
  {
    href: "/well-dweller/night-garden-hunters-cabin-walkthrough",
    label: "Night Garden & Hunter's Cabin",
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
    href: "/well-dweller/elevator-parts-locations",
    label: "All 3 Elevator Part Locations",
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
    title: "Well Dweller Guide & Walkthrough",
    description:
      "Find where to go next, finish The Bog and The Drains, collect all 7 Golden Feathers, continue after the Queen, and track 100% completion.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Well Dweller guide covering progression, Golden Feathers, Queen's Castle, and completion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller Guide & Walkthrough",
    description:
      "Follow Well Dweller progression, solve major roadblocks, collect all 7 Golden Feathers, finish the post-Queen route, and track 100%.",
    images: [imageUrls[0]],
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
        "Well Dweller Guide: Walkthrough, Golden Feathers, Ending, and 100% Completion",
      description:
        "A Well Dweller guide covering the main progression route, Night Garden, The Bog, The Drains, all seven Golden Feathers, Queen's Castle, the post-Queen sequence, and 100% completion.",
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
          url: pageUrl,
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
          name: "Well Dweller Golden Feathers",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Queen's Castle",
        },
        {
          "@type": "Thing",
          name: "Well Dweller true ending",
        },
        {
          "@type": "Thing",
          name: "Well Dweller 100 percent completion",
        },
        {
          "@type": "Thing",
          name: "Well Dweller achievements",
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
          title="Well Dweller Guide: Walkthrough, Feathers, Ending & 100%"
          description="Find your current progression stage, solve the major region roadblocks, collect all seven Golden Feathers, continue after the Queen, and finish the remaining completion requirements."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WellDwellerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}