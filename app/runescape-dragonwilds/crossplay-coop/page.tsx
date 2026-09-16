import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsCrossplayCoopContent from "@/data/runescape-dragonwilds/crossplay-coop.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/crossplay-coop`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-enable-crossplay-world.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-coop-world-options.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dedicated-server-option.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Crossplay & Co-op Guide",
  description:
    "Set up RuneScape Dragonwilds crossplay and co-op, join friends with Invite Codes, understand player limits, and configure Dedicated Servers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Crossplay & Co-op Guide",
    description:
      "Learn how crossplay works, how to join friends, hosted-world player limits, Dedicated Servers, Invite Codes, cross-save, and common connection issues.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Enable Crossplay option while creating a RuneScape Dragonwilds world",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Crossplay & Co-op Guide",
    description:
      "Set up crossplay, play with friends, use Invite Codes, and configure a RuneScape Dragonwilds Dedicated Server.",
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
          name: "Crossplay & Co-op",
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
        "RuneScape: Dragonwilds Crossplay & Co-op Guide",
      description:
        "A practical RuneScape: Dragonwilds multiplayer guide covering crossplay, friend invites, hosted worlds, Dedicated Servers, player limits, cross-save, server configuration, world migration, and connection troubleshooting.",
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
          name: "RuneScape Dragonwilds crossplay",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds co-op",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds multiplayer",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Invite Codes",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Dedicated Servers",
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
    id: "crossplay",
    label: "Does Dragonwilds have crossplay?",
  },
  {
    id: "player-count",
    label: "How many players?",
  },
  {
    id: "enable-crossplay",
    label: "How to enable crossplay",
  },
  {
    id: "play-with-friends",
    label: "How to play with friends",
  },
  {
    id: "solo-to-coop",
    label: "Turn a solo world into co-op",
  },
  {
    id: "hosted-vs-dedicated",
    label: "Hosted vs Dedicated Server",
  },
  {
    id: "cross-save",
    label: "Cross-save",
  },
  {
    id: "epic-online-services",
    label: "Epic Online Services",
  },
  {
    id: "dedicated-server-requirements",
    label: "Server requirements",
  },
  {
    id: "dedicated-server-config",
    label: "Server configuration",
  },
  {
    id: "find-dedicated-server",
    label: "Find your server",
  },
  {
    id: "server-visible-cannot-join",
    label: "Server visible but cannot join",
  },
  {
    id: "move-existing-world",
    label: "Move an existing world",
  },
  {
    id: "server-logs",
    label: "Server logs",
  },
  {
    id: "crossplay-troubleshooting",
    label: "Crossplay troubleshooting",
  },
  {
    id: "offline-play",
    label: "Offline play",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/dragon-slayer",
    label: "Dragon Slayer and Velgar Walkthrough",
  },
  {
    href: "/runescape-dragonwilds/achievements",
    label: "All 50 Achievements",
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
          title="RuneScape: Dragonwilds Crossplay & Co-op Guide"
          description="Enable crossplay, join friends with Invite Codes, understand hosted-world and Dedicated Server limits, move an existing world, and fix common multiplayer connection problems."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsCrossplayCoopContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}