
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BrawlerBuildContent from "@/data/deep-rock-galactic-survivor/brawler-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/deep-rock-galactic-survivor`;
const pageUrl = `${hubUrl}/brawler-build`;

const metadataTitle =
  "DRG Survivor Brawler Builds: Crusher, Renegade & Enforcer";

const metadataDescription =
  "Compare Crusher, Renegade, and Enforcer Brawler builds in DRG Survivor. Learn Bonk, weapon combinations, Plasma upgrades, Overclocks, and range fixes.";

const articleTitle =
  "Deep Rock Galactic: Survivor Brawler Builds: Which Class Mod?";

const articleDescription =
  "Choose Crusher for survivability and wide attacks, Renegade for Plasma and Dodge, or Enforcer for aggressive Melee damage. Compare weapons, Overclocks, and build fixes.";

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-crusher-class-selection.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-renegade-class-bonuses.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-enforcer-class-bonuses.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-crusher-shockwave-damage.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-renegade-diffractor-spike-overclocks.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-renegade-hellcat-bombardier-overclocks.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/brawler-enforcer-damage-results.webp`,
];

const heroImage = imageUrls[0];

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
        alt: "Crusher Brawler Class Mod and Shockwave Emitter starting weapon",
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
  { id: "unlock-brawler", label: "Unlock Brawler Mods" },
  { id: "best-class-mod", label: "Best Class Mod" },
  { id: "bonk-melee", label: "Bonk & Melee Upgrades" },
  { id: "crusher-build", label: "Crusher Build" },
  { id: "renegade-plasma-build", label: "Renegade Plasma Build" },
  { id: "enforcer-build", label: "Enforcer Build" },
  { id: "weapon-upgrades", label: "Upgrade Priorities" },
  { id: "gear-and-artifacts", label: "Gear & Artifacts" },
  { id: "common-mistakes", label: "Build Problems" },
  {
    id: "where-to-use-builds",
    label: "Brood Harvest & Hazard 6",
  },
  { id: "next-steps", label: "What to Do Next" },
];

const relatedLinks = [
  {
    href: "/deep-rock-galactic-survivor",
    label: "Knockout Beginner Guide",
  },
  {
    href: "/deep-rock-galactic-survivor/brood-harvest",
    label: "Brood Harvest Walkthrough",
  },
  {
    href: "/deep-rock-galactic-survivor/hazard-6-ultraclock",
    label: "Hazard 6 & UltraClock Unlocks",
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
          name: "Brawler Builds",
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

export default function BrawlerBuildPage() {
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
          gameHref="/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BrawlerBuildContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
