
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FallenVillageContent from "@/data/valor-mortis/fallen-village.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/fallen-village`;

const metadataTitle =
  "Valor Mortis Fallen Village Walkthrough: Keys & Grapple";

const metadataDescription =
  "Find the Weathered and Storage Keys, get the Blunderbuss, defeat Iron Marshall, unlock Grapple, and rescue Louis in Valor Mortis.";

const articleDescription =
  "Follow Fallen Village from the Abandoned Church through Fields, Marketplace, and Orchard. Complete the key puzzles, defeat Iron Marshall, unlock Grapple, and find Louis.";

const heroImage =
  "/images/valor-mortis/fallen-village-grapple-unlock.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/valor-mortis/fallen-village-scarecrow-post.webp`,
  `${siteUrl}/images/valor-mortis/fallen-village-blunderbuss-carriage.webp`,
  `${siteUrl}/images/valor-mortis/fallen-village-weathered-key.webp`,
  `${siteUrl}/images/valor-mortis/fallen-village-storage-key.webp`,
  `${siteUrl}/images/valor-mortis/fallen-village-louis-rescue.webp`,
];

const toc = [
  {
    id: "abandoned-church",
    label: "From Abandoned Church",
  },
  {
    id: "fields",
    label: "Fields & Scarecrow",
  },
  {
    id: "scarecrow",
    label: "The Scarecrow Quest",
  },
  {
    id: "blunderbuss",
    label: "Blunderbuss Location",
  },
  {
    id: "marketplace-lullaby",
    label: "Weathered Key & Lullaby",
  },
  {
    id: "marketplace-progression",
    label: "Storage Key & Plague Wall",
  },
  {
    id: "iron-marshall",
    label: "Iron Marshall Boss",
  },
  {
    id: "grapple",
    label: "How to Unlock Grapple",
  },
  {
    id: "find-louis",
    label: "Find Louis",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "All 11 Chapters Walkthrough",
  },
  {
    href: "/valor-mortis/valley-of-ashes",
    label: "Valley of Ashes & Quarry",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns & Salt Mine",
  },
  {
    href: "/valor-mortis#rapier-heavy-attacks",
    label: "Rapier Heavy Attacks",
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
        alt: "Grapple unlock and blue traversal point in Fallen Village",
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
          name: "Fallen Village",
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
          name: "Fallen Village",
        },
        {
          "@type": "Thing",
          name: "Iron Marshall",
        },
        {
          "@type": "Thing",
          name: "Grapple",
        },
        {
          "@type": "Thing",
          name: "Fallen Village keys",
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
          <FallenVillageContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
