
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisPrisonEscapeContent from "@/data/valor-mortis/prison-escape.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/prison-escape`;

const metadataTitle =
  "Valor Mortis Prison Escape: Armoury Key & The Choir";

const metadataDescription =
  "Escape Napoleon's Prison in Valor Mortis: find the Armoury Key, recover your weapons, unlock the chapel, complete The Choir, and reach the sewer exit.";

const articleTitle =
  "Valor Mortis Prison Escape: Armoury Key, The Choir & Exit";

const articleDescription =
  "Escape Napoleon's Prison without your weapons, find the Armoury Key, recover your equipment, locate the Chapel Key, finish The Choir, and leave through the sewers without missing important items.";

const imageUrls = [
  `${siteUrl}/images/valor-mortis/prison-escape-armoury-key.webp`,
  `${siteUrl}/images/valor-mortis/prison-escape-equipment-chest.webp`,
  `${siteUrl}/images/valor-mortis/prison-escape-chapel-key.webp`,
  `${siteUrl}/images/valor-mortis/prison-escape-choir-notice-board.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "starting-cell",
    label: "Starting cell & Silver Lockpick",
  },
  {
    id: "armoury-key",
    label: "Where to find Armoury Key",
  },
  {
    id: "recover-equipment",
    label: "Recover your weapons",
  },
  {
    id: "the-choir",
    label: "The Choir & Chapel Key",
  },
  {
    id: "prison-secrets",
    label: "Hidden chests & upgrades",
  },
  {
    id: "sewer-exit",
    label: "Find the sewer exit",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "Valor Mortis Walkthrough: All 11 Chapters",
  },
  {
    href: "/valor-mortis/fortress",
    label: "Fortress: Signal Fires, Keys & Boss",
  },
  {
    href: "/valor-mortis/achievements",
    label: "All 39 Achievements & 100% Roadmap",
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
        alt: "Red equipment chest inside Napoleon's Prison Armoury in Valor Mortis",
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
          name: "Prison Escape",
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
          name: "Valor Mortis Chapter 10 Shackled",
        },
        {
          "@type": "Thing",
          name: "Napoleon's Prison escape",
        },
        {
          "@type": "Thing",
          name: "Prison Armoury Key",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis equipment recovery",
        },
        {
          "@type": "Thing",
          name: "The Choir investigation",
        },
        {
          "@type": "Thing",
          name: "Key to the Chapel",
        },
        {
          "@type": "Thing",
          name: "The Forgotten Fortune",
        },
        {
          "@type": "Thing",
          name: "Silver Lockpick",
        },
        {
          "@type": "Thing",
          name: "Burning City notice board",
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
          <ValorMortisPrisonEscapeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
