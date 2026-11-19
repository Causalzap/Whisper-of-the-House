
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Hazard6UltraClockContent from "@/data/deep-rock-galactic-survivor/hazard-6-ultraclock.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/deep-rock-galactic-survivor`;
const pageUrl = `${hubUrl}/hazard-6-ultraclock`;

const metadataTitle =
  "DRG Survivor Hazard 6 Mastery & UltraClock Unlock Guide";

const metadataDescription =
  "Beat Hazard 6 in DRG Survivor, understand enemy carryover, complete Weapon Mastery, unlock UltraClock, and change eligible starting weapons.";

const articleTitle =
  "Deep Rock Galactic: Survivor Hazard 6 & UltraClock Guide";

const articleDescription =
  "Survive Hazard 6 enemy carryover, distinguish Weapon and Class Mod Masteries, unlock starting weapons on Hazard 5, and earn UltraClock through Hazard 6 Weapon Mastery.";

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic-survivor/hazard-six-crusher-final-boss.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/crusher-class-mod-mastery-rules.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/hazard-six-weapon-mastery-rewards.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/hazard-six-starting-weapon-selection.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/ultraclock-thunderlash-artifact.webp`,
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
        alt: "Crusher Hazard 6 Class Mod Mastery fight against the Dreadnought Twins",
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
  { id: "hazard-6-rules", label: "Hazard 6 Rules" },
  { id: "hazard-6-strategy", label: "How to Beat Hazard 6" },
  { id: "mastery-types", label: "Mastery Types" },
  { id: "weapon-mastery", label: "Hazard 6 Weapon Mastery" },
  { id: "starting-weapons", label: "Starting Weapon Unlocks" },
  { id: "ultraclock-unlock", label: "Unlock UltraClock" },
  { id: "ultraclock-effect", label: "How UltraClock Works" },
  {
    id: "ultraclock-not-appearing",
    label: "UltraClock Not Appearing",
  },
  { id: "hazard-6-problems", label: "Hazard 6 Problems" },
  { id: "gear-rewards", label: "Gear & Rewards" },
  { id: "mastery-progression", label: "Mastery Progression" },
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
    href: "/deep-rock-galactic-survivor/brood-harvest",
    label: "Brood Harvest Walkthrough",
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
          name: "Hazard 6 & UltraClock",
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

export default function Hazard6UltraClockPage() {
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
          <Hazard6UltraClockContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
