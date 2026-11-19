
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DeepRockGalacticSurvivorContent from "@/data/deep-rock-galactic-survivor/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic-survivor`;

const metadataTitle =
  "DRG Survivor Knockout Guide: Brawler, Missions & Unlocks";

const metadataDescription =
  "Start the DRG Survivor Knockout DLC, learn Brawler, survive Sandblasted Corridors, complete new objectives, and explore Update 1.2 upgrades.";

const articleTitle =
  "Deep Rock Galactic: Survivor Knockout Guide: What Should You Do First?";

const articleDescription =
  "Learn what comes with Knockout and free Update 1.2, start with Brawler, survive Sandblasted Corridors, complete new objectives, and choose your next progression goal.";

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic-survivor/sandblasted-corridors-sand-twister.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/update-1-2-overtime-upgrades.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/update-1-2-new-artifacts.webp`,
  `${siteUrl}/images/deep-rock-galactic-survivor/update-1-2-fossil-objective.webp`,
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
        alt: "Sand Twister hazard in Deep Rock Galactic Survivor Knockout",
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
  { id: "what-to-do-first", label: "What to Do First" },
  { id: "dlc-vs-update", label: "DLC vs Free Update" },
  { id: "brawler", label: "Start Playing Brawler" },
  { id: "brood-harvest", label: "Brood Harvest" },
  {
    id: "sandblasted-corridors",
    label: "Sandblasted Corridors",
  },
  {
    id: "secondary-objectives",
    label: "Fossils & Reactor Core",
  },
  { id: "overtime-upgrades", label: "Overtime Upgrades" },
  { id: "new-artifacts", label: "New Artifacts" },
  { id: "gear-management", label: "Gear Management" },
  {
    id: "update-1-2-progression",
    label: "Hazard 6 & Mastery",
  },
  { id: "common-problems", label: "Common Problems" },
  { id: "next-steps", label: "What to Do Next" },
];

const relatedLinks = [
  {
    href: "/deep-rock-galactic-survivor/brawler-build",
    label: "Brawler Builds: Crusher, Renegade & Enforcer",
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

export default function DeepRockGalacticSurvivorPage() {
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
          <DeepRockGalacticSurvivorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
