import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostWalkthroughContent from "@/data/permafrost/main-quests-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/main-quests-walkthrough`;

const metadataTitle =
  "Permafrost Walkthrough: Main Quests to Logan's Camp";

const metadataDescription =
  "Follow Permafrost main quests through Horizon, Bone Cave, New Home, Hunter's Glade, House Camp, Finn's tower, and Logan's Camp, with key quest requirements.";

const articleDescription =
  "Follow Permafrost's main quest route from the opening through Logan's Camp, including Dog Days, New Home, High Frequency, The Way Home, House Camp Flipper, and the radio towers.";

const heroImage =
  "/images/permafrost/permafrost-new-home-building-objectives.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-horizon-robin.webp`,
  `${siteUrl}/images/permafrost/permafrost-bone-cave-dog-location.webp`,
  `${siteUrl}/images/permafrost/permafrost-radio-station-bench-requirements.webp`,
  `${siteUrl}/images/permafrost/permafrost-hunters-glade-radio-repair.webp`,
  `${siteUrl}/images/permafrost/permafrost-tailoring-bench-requirements.webp`,
  `${siteUrl}/images/permafrost/permafrost-house-camp-wall-requirements.webp`,
  `${siteUrl}/images/permafrost/permafrost-house-camp-electrical-box.webp`,
  `${siteUrl}/images/permafrost/permafrost-stove-requirements.webp`,
  `${siteUrl}/images/permafrost/permafrost-church-tower-key.webp`,
  `${siteUrl}/images/permafrost/permafrost-solar-radio-tower-finn.webp`,
];

const toc = [
  {
    id: "opening-to-horizon",
    label: "Opening & Horizon",
  },
  {
    id: "dog-days-bone-cave",
    label: "Dog Days: Bone Cave",
  },
  {
    id: "new-home",
    label: "New Home: Build a Shelter",
  },
  {
    id: "new-home-radio",
    label: "New Home: Radio Station",
  },
  {
    id: "the-outpost",
    label: "The Outpost: Hunter's Glade",
  },
  {
    id: "high-frequency",
    label: "High Frequency: 13 Repairs",
  },
  {
    id: "the-way-home",
    label: "The Way Home: Tribal Clothes",
  },
  {
    id: "house-camp",
    label: "House Camp: Scrap Tools",
  },
  {
    id: "house-camp-walls",
    label: "House Camp: Four Defenses",
  },
  {
    id: "house-camp-stove",
    label: "Stove & Cooking Objective",
  },
  {
    id: "church-radio",
    label: "Breaking the Radio Silence",
  },
  {
    id: "next-radio-tower",
    label: "Tower of Finn",
  },
  {
    id: "solar-fields",
    label: "Solar Fields & Logan",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Copper, Coal & Wire",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Zones & Heaters",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Classes & Skill Bonuses",
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
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function PermafrostWalkthroughPage() {
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
            name: "Permafrost",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Main Quests Walkthrough",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Permafrost Walkthrough: Main Quests to Logan's Camp",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
        dateModified: "2026-10-09",
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
          title="Permafrost Walkthrough: Main Quests to Logan's Camp"
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/permafrost"
          breadcrumbBaseLabel="Permafrost"
          updatedAt="October 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PermafrostWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}