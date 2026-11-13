import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NineKingsJokerModeContent from "@/data/9-kings/joker-mode.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/9-kings/joker-mode`;

const metadataTitle = "9 Kings Joker Mode Guide: Unlock & Custom Deck Setup";
const metadataDescription = "Unlock Joker Mode in 9 Kings 1.0, choose a custom nine-card deck, arrange Perks, configure Conditions and starting enemies, and fix setup mistakes.";
const articleTitle = "How Do You Unlock and Set Up Joker Mode in 9 Kings?";
const articleDescription = "Unlock all nine regular kings, build a custom nine-card deck, arrange your Perks, choose Conditions and opponents, and resolve common Joker setup problems.";

const imageUrls = [
  `${siteUrl}/images/9-kings/9-kings-joker-character-selection.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-custom-deck-selection.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-perks-configuration.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-conditions-settings.webp`,
  `${siteUrl}/images/9-kings/9-kings-joker-enemy-king-selection.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "9 Kings Joker Mode custom deck selection screen showing nine card slots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "unlock-joker", label: "Unlock the Joker" },
  { id: "build-custom-deck", label: "Choose Your Nine Cards" },
  { id: "joker-perks", label: "Arrange Joker Perks" },
  { id: "joker-conditions", label: "Set Starting Conditions" },
  { id: "first-joker-run", label: "Test a Joker Deck" },
  { id: "joker-problems", label: "Fix Setup Problems" },
];

const relatedLinks = [
  { href: "/9-kings", label: "Beginner Guide: Unlocks & Game Modes" },
  { href: "/9-kings/best-builds", label: "Joker Builds: Leech & Lab Rat Poison" },
  { href: "/9-kings/achievements", label: "99 Achievements & Checklist" },
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
          name: "9 Kings",
          item: `${siteUrl}/9-kings`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Joker Mode",
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
      datePublished: "2026-11-13",
      dateModified: "2026-11-13",
      about: [
        { "@type": "VideoGame", name: "9 Kings" },
        { "@type": "Thing", name: "Joker Mode unlock condition" },
        { "@type": "Thing", name: "Custom nine-card deck and starting base" },
        { "@type": "Thing", name: "Joker Perks and slot positioning" },
        { "@type": "Thing", name: "Starting Conditions, Decrees, and enemy kings" },
        { "@type": "Thing", name: "Joker deck testing and troubleshooting" },
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="9 Kings"
          gameHref="/9-kings"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NineKingsJokerModeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
