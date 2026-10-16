
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisFortressContent from "@/data/valor-mortis/fortress.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/fortress`;

const metadataTitle =
  "Valor Mortis Fortress Walkthrough: Signal Fires & Keys";

const metadataDescription =
  "Clear Valor Mortis Fortress in Chapter 9: light both signal fires, find Captain's Key and Fortress Armory Key, solve the Stasis gate, and defeat Raphael.";

const articleTitle =
  "Valor Mortis Fortress Walkthrough: Signal Fires, Keys & Boss";

const articleDescription =
  "Find the Fortress entrance, light both signal fires, open the main gate, locate Captain's Key and Fortress Armory Key, and reach Captain Raphael in High Tower.";

const imageUrls = [
  `${siteUrl}/images/valor-mortis/fortress-ruined-castle-approach.webp`,
  `${siteUrl}/images/valor-mortis/fortress-second-signal-fire.webp`,
  `${siteUrl}/images/valor-mortis/fortress-armory-stasis-gate-open.webp`,
  `${siteUrl}/images/valor-mortis/fortress-captain-raphael-boss.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "fortress-entrance",
    label: "Fortress entrance",
  },
  {
    id: "signal-fires",
    label: "Light both signal fires",
  },
  {
    id: "fortress-upgrades",
    label: "Quintessential material",
  },
  {
    id: "fortress-keys",
    label: "Captain's Key & Armory Key",
  },
  {
    id: "chapel-courtyard",
    label: "Chapel, Ramparts & Courtyard",
  },
  {
    id: "high-tower",
    label: "Reach High Tower",
  },
  {
    id: "captain-raphael",
    label: "Captain Raphael boss fight",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "Valor Mortis Walkthrough: All 11 Chapters",
  },
  {
    href: "/valor-mortis/prison-escape",
    label: "Prison Escape: Armoury Key & The Choir",
  },
  {
    href: "/valor-mortis/achievements",
    label: "All 39 Achievements & 100% Roadmap",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns: Stasis & Mining Shaft Key",
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
        alt: "Second signal fire burning on a tower in Valor Mortis Fortress",
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
          name: "Fortress Walkthrough",
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
      datePublished: "2026-10-16",
      dateModified: "2026-10-16",
      about: [
        {
          "@type": "VideoGame",
          name: "Valor Mortis",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Chapter 9 In Ruins",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Fortress walkthrough",
        },
        {
          "@type": "Thing",
          name: "Fortress signal fires",
        },
        {
          "@type": "Thing",
          name: "Captain's Key",
        },
        {
          "@type": "Thing",
          name: "Fortress Armory Key",
        },
        {
          "@type": "Thing",
          name: "Fortress Stasis gear mechanism",
        },
        {
          "@type": "Thing",
          name: "Quintessential Transmutation Material",
        },
        {
          "@type": "Thing",
          name: "Captain Raphael of the Nephtis Superioris",
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ValorMortisFortressContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
