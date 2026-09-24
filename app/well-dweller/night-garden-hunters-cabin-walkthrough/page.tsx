import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NightGardenHuntersCabinWalkthroughContent from "@/data/well-dweller/night-garden-hunters-cabin-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/night-garden-hunters-cabin-walkthrough`;

const metadataTitle =
  "Well Dweller Night Garden & Hunter's Cabin Walkthrough";

const metadataDescription =
  "Beat the Groundskeeper, get the Flaming Vessel and Slingshot, find the berries, return home, and escape the Hunter in Well Dweller.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-oil-vial-healing.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-groundskeeper-defeated.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-flaming-vessel-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-hunters-locket.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-slingshot-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-hunter-first-encounter.webp`,
];

const toc = [
  {
    id: "leave-the-well",
    label: "Leave the Well",
  },
  {
    id: "groundskeeper",
    label: "Beat the Groundskeeper",
  },
  {
    id: "help-looter",
    label: "Help Looter",
  },
  {
    id: "hunters-locket",
    label: "Hunter's Locket",
  },
  {
    id: "get-slingshot",
    label: "Unlock Slingshot",
  },
  {
    id: "get-the-food",
    label: "Get the Berries",
  },
  {
    id: "optional-challenge",
    label: "Optional Challenge",
  },
  {
    id: "return-home",
    label: "Return Home",
  },
  {
    id: "hunter-escape",
    label: "Escape the Hunter",
  },
  {
    id: "where-next",
    label: "Where to Go Next",
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
    href: "/well-dweller/the-bog-walkthrough",
    label: "The Bog Walkthrough",
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
    title: "Well Dweller Night Garden & Hunter's Cabin Walkthrough",
    description:
      "Cross Night Garden, beat the Groundskeeper, explore the Hunter's Cabin, unlock Slingshot, bring the berries home, and survive the Hunter escape.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[5],
        width: 1600,
        height: 900,
        alt: "Glimmer encountering the Hunter after returning home in Well Dweller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller Night Garden & Hunter's Cabin Walkthrough",
    description:
      "Beat the Groundskeeper, unlock Slingshot, get the berries, return home, and escape the Hunter.",
    images: [imageUrls[5]],
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
          name: "Night Garden & Hunter's Cabin",
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
        "Well Dweller Night Garden & Hunter's Cabin Walkthrough",
      description:
        "A Well Dweller walkthrough for the opening route through Night Garden and the Hunter's Cabin, including Oil Vials, the Groundskeeper, Looter, Flaming Vessel, Hunter's Locket, Slingshot, the berries, and the Hunter escape.",
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
          name: "Well Dweller Night Garden",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Hunter's Cabin",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Groundskeeper",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Flaming Vessel",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Hunter's Locket",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Slingshot",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Hunter",
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
          title="Well Dweller Night Garden & Hunter's Cabin Walkthrough"
          description="Cross Night Garden, defeat the Groundskeeper, get the Flaming Vessel and Slingshot, bring the berries home, and escape the Hunter."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NightGardenHuntersCabinWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}