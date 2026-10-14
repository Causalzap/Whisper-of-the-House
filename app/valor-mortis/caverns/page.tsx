
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CavernsContent from "@/data/valor-mortis/caverns.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/caverns`;

const metadataTitle =
  "Valor Mortis Caverns Walkthrough: Stasis & Mining Shaft Key";

const metadataDescription =
  "Unlock Stasis, solve the Old Mine machinery and minecart tracks, find the Mining Shaft Key, and defeat Sphinx in Valor Mortis.";

const articleDescription =
  "Explore Caverns and the Salt Mine, complete Homesick, unlock Stasis, operate the minecarts, locate the Mining Shaft Key, and defeat Sphinx to finish Chapter 4.";

const heroImage =
  "/images/valor-mortis/caverns-stasis-control.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/valor-mortis/caverns-old-mine-suspended-crate.webp`,
  `${siteUrl}/images/valor-mortis/caverns-minecart-track-switch.webp`,
  `${siteUrl}/images/valor-mortis/caverns-mining-shaft-key.webp`,
  `${siteUrl}/images/valor-mortis/caverns-sphinx-arena.webp`,
];

const toc = [
  {
    id: "cave-entrance",
    label: "How to Enter Caverns",
  },
  {
    id: "last-sunlight",
    label: "Last Sunlight & Homesick",
  },
  {
    id: "weeping-ledge",
    label: "Unlock Stasis",
  },
  {
    id: "old-mine",
    label: "Old Mine Machinery",
  },
  {
    id: "minecart-tracks",
    label: "Minecart Track Switch",
  },
  {
    id: "mining-shaft-key",
    label: "Mining Shaft Key",
  },
  {
    id: "lower-shaft",
    label: "Lower Mine Rewards",
  },
  {
    id: "final-minecart",
    label: "Final Machinery Sequence",
  },
  {
    id: "sphinx",
    label: "Sphinx Boss",
  },
  {
    id: "after-sphinx",
    label: "Where to Go After Sphinx",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "All 11 Chapters Walkthrough",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village & Grapple",
  },
  {
    href: "/valor-mortis/valley-of-ashes",
    label: "Valley of Ashes Upgrades",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Stasis machinery control inside Valor Mortis Caverns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImageUrl],
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
          name: "Valor Mortis",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Caverns",
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
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
      articleSection: "Valor Mortis Walkthroughs",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Valor Mortis",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Caverns and Salt Mine",
        },
        {
          "@type": "Thing",
          name: "Stasis Transmutation",
        },
        {
          "@type": "Thing",
          name: "Mining Shaft Key",
        },
        {
          "@type": "Thing",
          name: "Sphinx boss",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CavernsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
