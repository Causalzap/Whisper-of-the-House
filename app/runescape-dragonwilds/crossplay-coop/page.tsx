import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsCrossplayCoopContent from "@/data/runescape-dragonwilds/crossplay-coop.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/crossplay-coop`;

const metadataTitle =
  "RuneScape Dragonwilds Crossplay – PS5, Xbox, Switch 2 & Co-op";

const metadataDescription =
  "Use RuneScape Dragonwilds crossplay on PC, PS5, Xbox and Switch 2, join friends with Invite Codes, compare hosted worlds and Dedicated Servers, and check cross-save.";

const articleDescription =
  "Enable crossplay, join friends with Invite Codes, compare 4-player hosted worlds with 6-player Dedicated Servers, and fix common multiplayer connection problems.";

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-enable-crossplay-world.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-coop-world-options.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-dedicated-server-option.webp`,
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Enable Crossplay option for a RuneScape Dragonwilds multiplayer world",
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
        "RuneScape Dragonwilds Crossplay: PS5, Xbox, Switch 2 & Co-op",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-16",
      dateModified: "2026-09-22",
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
          name: "PlayStation 5",
        },
        {
          "@type": "Thing",
          name: "Xbox Series X|S",
        },
        {
          "@type": "Thing",
          name: "Nintendo Switch 2",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Invite Codes",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds Dedicated Server",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds cross-save",
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
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

const toc = [
  {
    id: "does-dragonwilds-have-crossplay",
    label: "Does Dragonwilds have crossplay?",
  },
  {
    id: "how-many-players",
    label: "How many players?",
  },
  {
    id: "enable-crossplay",
    label: "Enable crossplay",
  },
  {
    id: "how-to-play-with-friends",
    label: "Join friends",
  },
  {
    id: "solo-world-to-coop",
    label: "Use a solo world for co-op",
  },
  {
    id: "hosted-vs-dedicated",
    label: "Hosted vs Dedicated Server",
  },
  {
    id: "cross-save",
    label: "Cross-save and cross-progression",
  },
  {
    id: "epic-online-services",
    label: "Epic Online Services",
  },
  {
    id: "dedicated-server-setup",
    label: "Dedicated Server setup",
  },
  {
    id: "find-dedicated-server",
    label: "Find and join a server",
  },
  {
    id: "move-world-to-dedicated-server",
    label: "Move an existing world",
  },
  {
    id: "dedicated-server-logs",
    label: "Server logs",
  },
  {
    id: "crossplay-not-working",
    label: "Crossplay not working",
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
    href: "/runescape-dragonwilds/starter-base",
    label: "Best Base Locations & Starter Base Layout",
  },
  {
    href: "/runescape-dragonwilds/progression",
    label: "RuneScape: Dragonwilds Progression Guide",
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
          title="RuneScape Dragonwilds Crossplay: PS5, Xbox, Switch 2 & Co-op"
          description="Play across PC, PS5, Xbox Series X|S and Nintendo Switch 2, join friends with Invite Codes, compare hosted worlds with Dedicated Servers, and troubleshoot multiplayer problems."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 22, 2026"
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