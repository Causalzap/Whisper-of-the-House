import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostWalkthroughContent from "@/data/permafrost/main-quests-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/main-quests-walkthrough`;

const metadataTitle =
  "Permafrost Walkthrough: Main Quests to White Hell Prep";

const metadataDescription =
  "Follow Permafrost main quests from Horizon to Crow's Nest: Bone Cave, New Home, House Camp, Logan, Parking Zoo, Solar Facility, and White Hell armor.";

const articleDescription =
  "Follow Permafrost's main quest route from Horizon and Bone Cave through New Home, Hunter's Glade, House Camp, Logan's assignments, Solar Facility, and Crow's Nest, then prepare the armor needed before heading to Last Stand.";

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
    label: "Logan's Warehouse in New Town",
  },
  {
    id: "parking-zoo",
    label: "Parking Zoo & Rat Queen",
  },
  {
    id: "doctor-clinic",
    label: "Logan's Doctor Assignment",
  },
  {
    id: "solar-facility",
    label: "Solar Facility Radio",
  },
  {
    id: "crows-nest",
    label: "Urban District & Crow's Nest",
  },
  {
    id: "jeremiah-supplies",
    label: "Jeremiah's Supplies Container",
  },
  {
    id: "dressed-for-white-hell",
    label: "Dressed for White Hell",
  },
  {
    id: "last-stand",
    label: "Go to the Last Stand",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Copper, Coal, Moonrock & Mining",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Zones & Heaters",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Classes & Skill Progression",
  },
  {
    href: "/permafrost/achievements",
    label: "All 42 Achievements",
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
        headline: metadataTitle,
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
        dateModified: "2026-10-11",
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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
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