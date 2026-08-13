import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionCoOpGuideContent from "@/data/war-in-the-north-legacy-edition/co-op-crossplay-troubleshooting.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/co-op-crossplay-troubleshooting`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-revive-companion.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-andriel-sanctuary.webp`,
];

const toc = [
  {
    id: "coop-player-count",
    label: "Co-op player count",
  },
  {
    id: "online-split-screen",
    label: "Online vs split-screen",
  },
  {
    id: "remote-play-together",
    label: "Remote Play Together",
  },
  {
    id: "crossplay",
    label: "Crossplay status",
  },
  {
    id: "save-test",
    label: "Test saves first",
  },
  {
    id: "multiplayer-save-problems",
    label: "Multiplayer save problems",
  },
  {
    id: "revive-companions",
    label: "Reviving companions",
  },
  {
    id: "sanctuary-coop",
    label: "Andriel in co-op",
  },
  {
    id: "coop-session-rule",
    label: "My co-op session rule",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/legacy-edition-changes",
    label: "What Changed in Legacy Edition",
  },
  {
    href: "/war-in-the-north-legacy-edition/best-character-builds",
    label: "Best Character & Builds",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Co-op & Crossplay Guide",
  description:
    "Set up War in the North Legacy Edition online or split-screen co-op, understand Remote Play Together, protect saves, and fix joining problems.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Co-op & Crossplay Guide",
    description:
      "Set up a three-player Fellowship online or in split-screen, understand Remote Play Together and current crossplay status, and protect multiplayer progress.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Reviving a fallen companion in War in the North Legacy Edition co-op",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Co-op & Crossplay Guide",
    description:
      "Set up online or split-screen co-op, understand Remote Play Together and crossplay status, test saves, and avoid multiplayer progression problems.",
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
          name: "War in the North Legacy Edition Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Co-op & Crossplay Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Co-op & Crossplay Guide",
      description:
        "A practical War in the North Legacy Edition multiplayer guide covering three-player co-op, online and local split-screen modes, Steam Remote Play Together, current crossplay status, host and client save precautions, joining problems, revives, and party coordination.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      mainEntityOfPage: pageUrl,
      about: [
        {
          "@type": "VideoGame",
          name: "The Lord of the Rings: War in the North - Legacy Edition",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "War in the North Legacy Edition co-op",
        },
        {
          "@type": "Thing",
          name: "War in the North Legacy Edition split-screen",
        },
        {
          "@type": "Thing",
          name: "War in the North Legacy Edition crossplay",
        },
        {
          "@type": "Thing",
          name: "Steam Remote Play Together",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="War in the North Legacy Edition Co-op & Crossplay Guide"
          description="Set up online or split-screen co-op, understand Remote Play Together and current crossplay status, test multiplayer saves before a long campaign, and recover from common joining problems."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionCoOpGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}