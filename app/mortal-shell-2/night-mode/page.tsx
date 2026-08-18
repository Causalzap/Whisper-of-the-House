import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NightModeContent from "@/data/mortal-shell-2/night-mode.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/night-mode`;

const metadataTitle =
  "Mortal Shell 2 Night Mode Guide: Thestus, Changes & Rewards";

const metadataDescription =
  "Learn how to unlock Night Mode with Thestus in Mortal Shell 2, what changes at Night, why enemies feel harder, and when the better rewards are worth it.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-thestus-night-mode.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-night-mode-tougher-enemies.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-night-mode-bear-trap.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-night-mode-progress-too-early.webp`,
];

const toc = [
  {
    id: "what-night-mode-is",
    label: "What Night Mode is",
  },
  {
    id: "unlock-night-mode",
    label: "How to unlock Night Mode",
  },
  {
    id: "when-i-turn-night-on",
    label: "When I turn Night on",
  },
  {
    id: "what-changes",
    label: "What changes at Night",
  },
  {
    id: "night-encounters",
    label: "Harder Night encounters",
  },
  {
    id: "night-traps",
    label: "Extra traps",
  },
  {
    id: "night-damage",
    label: "Does Night increase damage?",
  },
  {
    id: "when-i-turn-night-off",
    label: "When I turn Night off",
  },
  {
    id: "night-for-farming",
    label: "Night for farming",
  },
  {
    id: "build-ready-for-night",
    label: "When my build is ready",
  },
  {
    id: "night-does-not-change-progression",
    label: "Night vs progression",
  },
  {
    id: "is-night-mode-worth-it",
    label: "Is Night Mode worth it?",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/difficulty-settings",
    label: "Difficulty Settings Guide",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
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
    title: "Mortal Shell 2 Night Mode: How to Unlock It & What Changes",
    description:
      "Find Thestus, unlock Night Mode, see how encounters and traps change, and decide when the better rewards justify the extra difficulty.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Thestus offering Night Mode in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Night Mode: Thestus, Changes & Rewards",
    description:
      "How I unlock Night Mode with Thestus, what changes in the world, and when I think the harder fights are worth the better rewards.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Night Mode Guide",
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
        "Mortal Shell 2 Night Mode Guide: Thestus, Changes, Traps and Rewards",
      description:
        "A practical Mortal Shell 2 Night Mode guide explaining how I unlock Night with Thestus near Mother's Mill, what changes in the harder world state, why ordinary enemies can take much longer to defeat, how encounter composition and environmental traps increase pressure, when I turn Night off during progression, and when the better rewards make it worthwhile for farming or testing a mature build.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-18",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Night Mode",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Night",
        },
        {
          "@type": "Thing",
          name: "Thestus",
        },
        {
          "@type": "Thing",
          name: "Mother's Mill",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Night Mode rewards",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Night Mode traps",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Night Mode enemies",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 farming",
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
          title="When I Actually Use Night Mode in Mortal Shell 2"
          description="I unlock Night with Thestus, learn how the harder world changes enemies and routes, then use it when I want better rewards rather than normal progression."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NightModeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}