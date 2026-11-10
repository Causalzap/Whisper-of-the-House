
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorWalkthroughContent from "@/data/dreadmoor/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dreadmoor`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "DREADMOOR Walkthrough: All Main Quests & Early Access Ending";

const metadataDescription =
  "Follow DREADMOOR's Early Access story from Church Settlement and The Throat to Drying Fort, the Observatory, Bone Reef, and the final Essence batch.";

const articleDescription =
  "Complete DREADMOOR's main quests, repair your boat, pass The Throat, find Junior's Essence recipe, and reach the current Early Access ending.";

const datePublished = "2026-10-13";
const dateModified = "2026-11-10";

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
  `${siteUrl}/images/dreadmoor/dreadmoor-crude-lockpick-crafting-recipe.webp`,
  `${siteUrl}/images/dreadmoor/dreadmoor-early-access-story-end-screen.webp`,
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
    publishedTime: datePublished,
    modifiedTime: dateModified,
    images: [
      {
        url: heroImage,
        alt: "DREADMOOR The Throat waterway controls used to route water to both wheels.",
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
          name: "DREADMOOR",
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
      headline: metadataTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished,
      dateModified,
      about: [
        {
          "@type": "VideoGame",
          name: "DREADMOOR",
        },
        {
          "@type": "Thing",
          name: "Church Settlement and Betsy and Sons",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Dry Dock and boat repairs",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Beaver and Tuning Forks",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR The Throat waterway",
        },
        {
          "@type": "Thing",
          name: "Drying Fort and Observatory",
        },
        {
          "@type": "Thing",
          name: "Estelle and Bone Reef recordings",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Essence recipe",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
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
    id: "how-to-leave-church-settlement-and-get-the-boat",
    label: "Church Settlement and boat",
  },
  {
    id: "how-to-open-the-first-river-gate",
    label: "Open the first river gate",
  },
  {
    id: "reach-betsy-and-sons-and-get-your-first-essence",
    label: "Reach Betsy and Sons",
  },
  {
    id: "catch-five-snappers-and-repay-the-initial-debt",
    label: "Catch 5 Snappers",
  },
  {
    id: "how-to-get-the-dry-dock-key-from-john-the-fifth",
    label: "Get the Dry Dock Key",
  },
  {
    id: "process-fish-and-refuel-the-motorboat",
    label: "Make fuel and refuel",
  },
  {
    id: "repair-the-dry-dock-fuse-box-and-restore-power",
    label: "Restore Dry Dock power",
  },
  {
    id: "clean-the-boat-and-repair-its-hull",
    label: "Clean and repair the boat",
  },
  {
    id: "catch-three-softgrazers-for-chromatic-scales",
    label: "Get Chromatic Scales",
  },
  {
    id: "research-and-install-weak-hull-protection",
    label: "Install Hull Protection",
  },
  {
    id: "get-the-carburetor-and-install-the-upgraded-engine",
    label: "Get the Carburetor and engine",
  },
  {
    id: "how-to-get-past-the-beaver-blocking-the-throat",
    label: "Get past the Beaver",
  },
  {
    id: "find-and-restore-all-three-tuning-forks",
    label: "Restore the Tuning Forks",
  },
  {
    id: "find-keeper-lilo-s-signal-horn",
    label: "Get the Signal Horn",
  },
  {
    id: "how-to-restore-the-throat-generator-and-waterway-machinery",
    label: "Repair The Throat machinery",
  },
  {
    id: "how-to-get-both-water-wheels-turning",
    label: "Get both water wheels turning",
  },
  {
    id: "what-happens-after-you-pass-through-the-throat",
    label: "After The Throat",
  },
  {
    id: "cure-the-fuel-larva-at-the-new-trading-post",
    label: "Cure the Fuel Larva",
  },
  {
    id: "how-to-get-lockpicks-for-drying-fort",
    label: "Craft Lockpicks",
  },
  {
    id: "how-to-enter-drying-fort-and-clear-the-blight",
    label: "Clear Drying Fort",
  },
  {
    id: "how-to-help-jacqueline-at-the-grotto",
    label: "Help Jacqueline at the Grotto",
  },
  {
    id: "how-to-enter-the-observatory-and-find-junior-s-trail",
    label: "Investigate the Observatory",
  },
  {
    id: "return-the-missing-essence-recipe-to-gill-and-bozur",
    label: "Return the Essence recipe",
  },
  {
    id: "speak-to-estelle-about-the-failed-essence-recipe",
    label: "Speak to Estelle",
  },
  {
    id: "how-to-restore-the-recordings-at-bone-reef",
    label: "Restore Bone Reef recordings",
  },
  {
    id: "which-fish-does-estelle-need-for-the-special-essence",
    label: "Special Essence fish",
  },
  {
    id: "prepare-the-final-essence-batch-for-the-baron",
    label: "Prepare the final Essence",
  },
  {
    id: "what-happens-at-the-early-access-story-ending",
    label: "Early Access story ending",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor",
    label: "DREADMOOR: What to Do Next",
  },
  {
    href: "/dreadmoor/fishing-guide",
    label: "DREADMOOR Fishing Guide",
  },
  {
    href: "/dreadmoor/achievements",
    label: "DREADMOOR 44 Achievements Checklist",
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
          title="DREADMOOR Walkthrough: All Main Quests & Early Access Ending"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
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
