import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsKuldraContent from "@/data/runescape-dragonwilds/kuldra.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/kuldra`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-kuldra-hyper-beam.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-kuldra-water-anima-dragon.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-enter-kuldra-final-phase.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-kuldra-heart-phase.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-kuldra-dragon-kite-shield-reward.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Kuldra Boss Guide – All Phases",
  description:
    "Beat Queen Kuldra with the Anima and Resonator mechanics, beam counters, Heart phase strategy, escape route, rewards, and repeat farming.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Kuldra Boss Guide – All Phases",
    description:
      "Defeat Queen Kuldra through all Resonator phases, survive the beam, destroy the Heart, escape, and collect the first-clear rewards.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Queen Kuldra firing the main beam during the boss fight in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Kuldra Boss Guide – All Phases",
    description:
      "Learn every Kuldra phase, Resonator mechanic, beam counter, Heart strategy, escape step, and reward.",
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
          name: "RuneScape: Dragonwilds Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Queen Kuldra",
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
      headline: "RuneScape: Dragonwilds Kuldra Boss Guide: All Phases",
      description:
        "A complete Queen Kuldra boss walkthrough covering gear preparation, Harmonic Resonator mechanics, elemental phases, the main beam, the Heart phase, escape, first-clear rewards, and repeat kills.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-16",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "Queen Kuldra",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Kuldra boss",
        },
        {
          "@type": "Thing",
          name: "Harmonic Resonator",
        },
        {
          "@type": "Thing",
          name: "Kuldra Heart",
        },
        {
          "@type": "Thing",
          name: "Regicide",
        },
        {
          "@type": "Thing",
          name: "Queen Slayer Pack",
        },
        {
          "@type": "Thing",
          name: "Dragon Kite Shield",
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

const toc = [
  {
    id: "gear",
    label: "Gear and preparation",
  },
  {
    id: "resonator",
    label: "Harmonic Resonator",
  },
  {
    id: "hyper-beam",
    label: "Main beam attack",
  },
  {
    id: "phase-one",
    label: "Phase 1",
  },
  {
    id: "phase-two",
    label: "Phase 2",
  },
  {
    id: "phase-three",
    label: "Phase 3",
  },
  {
    id: "inside-kuldra",
    label: "Enter Kuldra",
  },
  {
    id: "heart-phase",
    label: "Heart phase",
  },
  {
    id: "escape",
    label: "Escape after the Heart",
  },
  {
    id: "rewards",
    label: "Kuldra rewards",
  },
  {
    id: "farm-kuldra",
    label: "Repeat kills and Dragon gear",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/scorned-wilderness",
    label: "Scorned Wilderness Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/achievements",
    label: "All 50 Achievements",
  },
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="RuneScape: Dragonwilds Kuldra Boss Guide: All Phases"
          description="Beat Queen Kuldra through the Anima and Harmonic Resonator phases, survive the main beam, destroy the Heart, escape, and collect the Dragon rewards."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsKuldraContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}