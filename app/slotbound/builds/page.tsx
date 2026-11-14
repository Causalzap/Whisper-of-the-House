
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlotboundBuildsContent from "@/data/slotbound/builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/slotbound`;
const pageUrl = `${hubUrl}/builds`;

const metadataTitle =
  "Slotbound Best Builds: Hard Mode Teams & Evolutions";

const metadataDescription =
  "Compare Slotbound Hard Mode builds for Open Forest, Deep Cave, Wasteland, and Lost Ruins using Ent Lord, Arch-Shaman, Apocalypse, Flare, and Gaze.";

const articleTitle =
  "What Are the Best Builds for Slotbound Hard Mode?";

const articleDescription =
  "Compare four Hard Mode victories: Ent Lord and Arch-Shaman in Open Forest, Apocalypse in Deep Cave, Flare's Burn skills in Wasteland, and Skull Fighter evolving into Gaze in Lost Ruins.";

const imageUrls = [
  `${siteUrl}/images/slotbound/slotbound-open-forest-arch-shaman.webp`,
  `${siteUrl}/images/slotbound/slotbound-open-forest-hard-victory.webp`,
  `${siteUrl}/images/slotbound/slotbound-nightmare-moon-priestess-promotion.webp`,
  `${siteUrl}/images/slotbound/slotbound-apocalypse-cataclysm-flurry.webp`,
  `${siteUrl}/images/slotbound/slotbound-apocalypse-cave-basilisk-damage.webp`,
  `${siteUrl}/images/slotbound/slotbound-flare-combustion-blast.webp`,
  `${siteUrl}/images/slotbound/slotbound-flare-blazing-blade-awakening.webp`,
  `${siteUrl}/images/slotbound/slotbound-skull-fighter-earthquake.webp`,
  `${siteUrl}/images/slotbound/slotbound-forest-one-type-away.webp`,
  `${siteUrl}/images/slotbound/slotbound-lost-ruins-hard-victory.webp`,
];

const socialImage =
  `${siteUrl}/images/slotbound/slotbound-apocalypse-cataclysm-flurry.webp`;

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
        url: socialImage,
        alt: "Slotbound Apocalypse Class Promotion showing the Cataclysm Flurry ability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [socialImage],
  },
};

const toc = [
  { id: "best-builds", label: "Best Hard Mode Builds" },
  { id: "open-forest-hard", label: "Open Forest Hard" },
  { id: "apocalypse-build", label: "Deep Cave: Apocalypse" },
  { id: "wasteland-burn", label: "Wasteland: Flare Burn" },
  {
    id: "lost-ruins-legendary",
    label: "Lost Ruins: Skull Fighter & Gaze",
  },
  {
    id: "unit-investment",
    label: "Absorb, Promote or Keep?",
  },
  {
    id: "faction-synergies",
    label: "Faction Synergies",
  },
];

const relatedLinks = [
  {
    href: "/slotbound",
    label: "Beginner Guide: First Upgrades & Progression",
  },
  {
    href: "/slotbound/cores",
    label: "Cores & Items: Effects and Choices",
  },
  {
    href: "/slotbound/jester",
    label: "Jester: Unlock & Evolutions",
  },
  {
    href: "/slotbound/achievements",
    label: "Hard Clears & All 64 Achievements",
  },
];

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
          name: "Slotbound",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Builds",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-14",
      dateModified: "2026-11-14",
      about: [
        { "@type": "VideoGame", name: "Slotbound" },
        { "@type": "Thing", name: "Hard Mode builds" },
        { "@type": "Thing", name: "Open Forest Hard" },
        { "@type": "Thing", name: "Ent Lord and Arch-Shaman" },
        { "@type": "Thing", name: "Dread Cavalry, Nightmare and Apocalypse" },
        { "@type": "Thing", name: "Flare and Burn damage" },
        { "@type": "Thing", name: "Skull Fighter and Gaze" },
        { "@type": "Thing", name: "Class Promotion and Imprints" },
        { "@type": "Thing", name: "Forest Regeneration faction synergy" },
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Slotbound"
          gameHref="/slotbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SlotboundBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
