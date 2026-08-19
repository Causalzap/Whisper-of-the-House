import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FarmingRanchingGuideContent from "@/data/crimson-desert/farming-ranching-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crimson-desert`;
const pageUrl = `${hubUrl}/farming-ranching-guide`;

const metadataTitle =
  "Crimson Desert Farming Guide: Crops, Ranching & Livestock";

const metadataDescription =
  "Run your Crimson Desert farm and ranch efficiently. Learn watering, fertilizer, Rubber Trees, livestock breeding, feed, capacity, and when to cull.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-fertilizer-water-crops.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-cacao-camp-crop.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-ranch-20-slot-capacity.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-ranch-expanded-35-capacity.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-ranch-feed-livestock.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-howling-hill-ranch-built-10000-camp-funds.webp`,
];

const toc = [
  {
    id: "howling-hill-ranch",
    label: "Howling Hill Ranch",
  },
  {
    id: "my-farm-routine",
    label: "My Farm Routine",
  },
  {
    id: "water-and-fertilizer",
    label: "Water & Fertilizer",
  },
  {
    id: "water-backpack",
    label: "Water Backpack",
  },
  {
    id: "rubber-tree",
    label: "Rubber Trees",
  },
  {
    id: "cacao-and-replanting",
    label: "Cacao & Replanting",
  },
  {
    id: "ranch-capacity",
    label: "Ranch Capacity",
  },
  {
    id: "what-i-slaughter",
    label: "What I Slaughter",
  },
  {
    id: "when-babies-appear",
    label: "Breeding & Newborns",
  },
  {
    id: "feed-bin",
    label: "Livestock Feed",
  },
  {
    id: "slow-breeding",
    label: "Slow Breeding",
  },
  {
    id: "my-camp-order",
    label: "My Farm & Ranch Loop",
  },
];

const relatedLinks = [
  {
    href: "/crimson-desert",
    label: "Crimson Desert Guide Hub",
  },
  {
    href: "/crimson-desert/trading-guide",
    label: "Trading Guide",
  },
  {
    href: "/crimson-desert/hunting-guide",
    label: "Hunting Guide",
  },
  {
    href: "/crimson-desert/side-quests-guide",
    label: "Side Quests Guide",
  },
  {
    href: "/crimson-desert/abyss-artifacts-guide",
    label: "Abyss Artifacts Guide",
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
    title: "Crimson Desert Farming & Ranching Guide",
    description:
      "See how I manage crops, watering, fertilizer, Rubber Trees, ranch capacity, breeding pairs, livestock feed, and overcrowding at camp.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Using fertilizer and water on crops in Crimson Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimson Desert Farming & Ranching Guide",
    description:
      "My practical farm and ranch routine for crops, Rubber Trees, watering, fertilizer, livestock breeding, feed, and capacity.",
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
          name: "Crimson Desert Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Farming and Ranching Guide",
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
        "Crimson Desert Farming and Ranching Guide: Crops, Livestock, Feed and Breeding",
      description:
        "A practical Crimson Desert farming and ranching guide covering the Howling Hill Ranch requirements, crop watering and fertilizer decisions, Water Backpack durability, slow-growing Rubber Trees, Cacao production, when to replant crops, Ranch capacity progression, livestock breeding pairs, slaughter decisions, newborn animals, Feed Bin management, and what I check when breeding feels too slow.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Crimson Desert Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Crimson Desert farming",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert ranching",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert livestock",
        },
        {
          "@type": "Thing",
          name: "Howling Hill Ranch",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert fertilizer",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert watering",
        },
        {
          "@type": "Thing",
          name: "Water Backpack",
        },
        {
          "@type": "Thing",
          name: "Rubber Tree",
        },
        {
          "@type": "Thing",
          name: "Cacao",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert livestock breeding",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Ranch capacity",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert livestock feed",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Run My Farm and Ranch in Crimson Desert"
          description="I grow around the resources I actually need, water the crops that fall behind, protect useful breeding pairs, and stop wasting Ranch space on animals I do not need."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FarmingRanchingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}