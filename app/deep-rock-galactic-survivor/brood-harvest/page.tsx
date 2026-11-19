
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BroodHarvestContent from "@/data/deep-rock-galactic-survivor/brood-harvest.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/deep-rock-galactic-survivor`;
const pageUrl = `${hubUrl}/brood-harvest`;

const metadataTitle =
  "DRG Survivor Brood Harvest Walkthrough: Empress & Kytoplasm";

const metadataDescription =
  "Complete all four Brood Harvest stages in DRG Survivor. Find Broodlings, collect Kytoplasm, manage Threat Level, beat the Empress, and extract safely.";

const articleTitle =
  "How Do You Complete Brood Harvest in Deep Rock Galactic: Survivor?";

const articleDescription =
  "Hunt Broodlings for Kytoplasm, earn extra Supply Pods, manage rising threat, survive all four stages, defeat the Dreadnought Empress, and reach extraction.";

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic-survivor/brood-harvest-broodling-target.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brood-harvest-kytoplasm-supply.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brood-harvest-empress-encounter.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brood-harvest-empress-acid-attack.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brood-harvest-extraction-countdown.webp`,
];

const heroImage = imageUrls[2];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: heroImage,
        alt: "Dreadnought Empress encounter in Brood Harvest Stage 4",
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

const toc = [
  { id: "how-to-start", label: "Start Brood Harvest" },
  { id: "collect-kytoplasm", label: "Broodlings & Kytoplasm" },
  { id: "supply-pods", label: "Supply Pods & Threat Level" },
  { id: "four-stages", label: "All Four Stages" },
  { id: "empress-preparation", label: "Prepare for Stage 4" },
  { id: "dreadnought-empress", label: "Beat the Empress" },
  { id: "extraction", label: "Extraction" },
  {
    id: "brood-harvest-problems",
    label: "Common Problems",
  },
  { id: "next-steps", label: "What to Do Next" },
];

const relatedLinks = [
  {
    href: "/deep-rock-galactic-survivor",
    label: "Knockout Beginner Guide",
  },
  {
    href: "/deep-rock-galactic-survivor/brawler-build",
    label: "Brawler Builds",
  },
  {
    href: "/deep-rock-galactic-survivor/hazard-6-ultraclock",
    label: "Hazard 6 & UltraClock",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
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
          name: "Deep Rock Galactic: Survivor Knockout",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Brood Harvest Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: pageUrl,
      image: imageUrls,
      datePublished: "2026-11-19",
      dateModified: "2026-11-19",
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: {
        "@type": "VideoGame",
        name: "Deep Rock Galactic: Survivor",
      },
    },
  ],
};

export default function BroodHarvestPage() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Deep Rock Galactic: Survivor — Knockout"
          gameHref="/deep-rock-galactic-survivor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BroodHarvestContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
