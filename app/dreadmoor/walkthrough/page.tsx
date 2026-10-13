
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorWalkthroughContent from "@/data/dreadmoor/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dreadmoor`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "DREADMOOR Demo Walkthrough: All Quests & The Throat Gate";

const metadataDescription =
  "Complete the DREADMOOR demo from Betsy and Sons to The Throat. Repair the Dry Dock, get the Carburetor, upgrade your engine, and open the gate.";

const articleDescription =
  "Follow every main quest from the Trading Post through fishing contracts, Dry Dock repairs, Hull Protection, the upgraded engine, and The Throat waterway.";

const heroImage =
  `${siteUrl}/images/dreadmoor/dreadmoor-the-throat-waterway-controls.webp`;

const imageUrls = [
  `${siteUrl}/images/dreadmoor/dreadmoor-bunkhouse-wall-repair.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-five-snapper-contract.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-moonshine-still-materials.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-dry-dock-power-switch.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-boat-cleaning-water-cannon.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-hull-protection-module-storage.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-carburetor-merchant.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-standard-engine-removal.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-the-throat-repair-parts.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-the-throat-waterway-controls.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-demo-complete.webp`,
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
        url: heroImage,
        alt: "DREADMOOR The Throat waterway controls used to direct water toward both wheels.",
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
          name: "DREADMOOR Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DREADMOOR Walkthrough",
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
        "DREADMOOR Demo Walkthrough: All Quests and The Throat Gate",
      description:
        "Complete the DREADMOOR demo story quests, including the Trading Post, fishing contracts, John the Fifth's Moonshine Still, Dry Dock repairs, Hull Protection, Carburetor, Upgraded Engine, and The Throat waterway gate.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-13",
      dateModified: "2026-10-13",
      about: [
        {
          "@type": "VideoGame",
          name: "DREADMOOR",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR demo walkthrough",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Dry Dock",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR boat repairs",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Hull Protection",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Carburetor",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Upgraded Engine",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR The Throat waterway",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
      inLanguage: "en",
    },
  ],
};

const toc = [
  {
    id: "leave-the-abandoned-house-and-reach-the-trading-post",
    label: "Reach the Trading Post",
  },
  {
    id: "take-the-chest-to-the-bunkhouse-and-repair-the-wall",
    label: "Repair the Bunkhouse",
  },
  {
    id: "catch-5-snappers-for-gill-and-bozur",
    label: "Catch 5 Snappers",
  },
  {
    id: "get-the-dry-dock-key-from-john-the-fifth",
    label: "Get the Dry Dock Key",
  },
  {
    id: "process-fish-meat-and-refuel-the-motorboat",
    label: "Make Fuel and Refuel",
  },
  {
    id: "repair-the-dry-dock-fuse-box-and-restore-power",
    label: "Restore Dry Dock Power",
  },
  {
    id: "clean-the-boat-with-the-pressure-pump-and-water-cannon",
    label: "Clean and Repair the Boat",
  },
  {
    id: "catch-3-softgrazers-and-obtain-chromatic-scales",
    label: "Get Chromatic Scales",
  },
  {
    id: "research-weak-hull-protection-and-the-upgraded-engine",
    label: "Research and Install Hull Protection",
  },
  {
    id: "get-the-carburetor-from-gill-and-bozur",
    label: "Get the Carburetor",
  },
  {
    id: "remove-the-standard-engine-and-install-the-upgraded-engine",
    label: "Install the Upgraded Engine",
  },
  {
    id: "sail-to-the-throat",
    label: "Sail to The Throat",
  },
  {
    id: "find-a-fuel-can-and-start-the-throat-generator",
    label: "Start The Throat Generator",
  },
  {
    id: "find-the-thermal-coil-gear-and-two-buckets",
    label: "Repair The Throat Machinery",
  },
  {
    id: "repair-the-water-pump-do-not-craft-a-new-one",
    label: "Repair the Water Pump",
  },
  {
    id: "configure-the-water-flow-to-both-water-wheels",
    label: "Configure Both Water Wheels",
  },
  {
    id: "open-the-throat-gate",
    label: "Open The Throat Gate",
  },
  {
    id: "set-out-and-finish-the-dreadmoor-demo",
    label: "Set Out and Finish the Demo",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor",
    label: "DREADMOOR Guide",
  },
  {
    href: "/dreadmoor/fishing-guide",
    label: "DREADMOOR Fishing Guide",
  },
];

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
          title="DREADMOOR Demo Walkthrough: All Quests & The Throat"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DreadmoorWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
