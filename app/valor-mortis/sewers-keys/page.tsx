
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisSewersKeysContent from "@/data/valor-mortis/sewers-keys.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/sewers-keys`;

const metadataTitle =
  "Valor Mortis Sewers Key & Master Key: Locations & Doors";

const metadataDescription =
  "Find both Valor Mortis sewer keys, open the locked gates, cross the pull-out platform, and reach the Shrike through the City of Orphans sewers.";

const articleDescription =
  "Find the Sewers Key chest, unlock the first gate, cross the flooded platform puzzle for the Sewers Master Key, and open the remaining doors in the City of Orphans.";

const imageUrls = [
  `${siteUrl}/images/valor-mortis/sewers-key-chest.webp`,
  `${siteUrl}/images/valor-mortis/sewers-master-key-locked-door.webp`,
  `${siteUrl}/images/valor-mortis/sewers-master-key-pickup.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "enter-sewers",
    label: "Reach the Sewers Lantern",
  },
  {
    id: "sewers-key-location",
    label: "Sewers Key location",
  },
  {
    id: "first-locked-gate",
    label: "Which door does it open?",
  },
  {
    id: "master-key-location",
    label: "Sewers Master Key location",
  },
  {
    id: "master-key-doors",
    label: "Master Key doors & rewards",
  },
  {
    id: "reach-shrike",
    label: "Leave the sewers",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "Valor Mortis Walkthrough & Progression",
  },
  {
    href: "/valor-mortis/achievements",
    label: "All 39 Achievements & 100% Roadmap",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village: Grapple & Louis",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns: Stasis & Mining Shaft Key",
  },
  {
    href: "/valor-mortis/the-emissary",
    label: "The Emissary: Shield Return & Rewards",
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
        url: heroImage,
        alt: "Locked sewer gate requiring the Sewers Master Key in Valor Mortis",
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
          name: "Valor Mortis Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sewers Key & Master Key",
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
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Valor Mortis",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Sewers Key",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Sewers Master Key",
        },
        {
          "@type": "Thing",
          name: "City of Orphans sewers",
        },
        {
          "@type": "Thing",
          name: "Sewers Lantern",
        },
        {
          "@type": "Thing",
          name: "Sewers Master Key locked doors",
        },
        {
          "@type": "Thing",
          name: "Nephtoglobin platform puzzle",
        },
        {
          "@type": "Thing",
          name: "Masterwork Firearm Parts",
        },
        {
          "@type": "Thing",
          name: "Shrike and Laboratory Key",
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
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Where to Find the Sewers Key & Master Key in Valor Mortis"
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ValorMortisSewersKeysContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
