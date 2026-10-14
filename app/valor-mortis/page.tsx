
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisGuideContent from "@/data/valor-mortis/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = hubUrl;

const metadataTitle =
  "Valor Mortis Walkthrough: All 11 Chapters & Progression";

const metadataDescription =
  "Follow all 11 Valor Mortis chapters, find your next objective, unlock Grapple, Stasis and Shield, and return for upgrades and side quests.";

const articleDescription =
  "Follow all 11 Valor Mortis chapters in order, find your next destination after major bosses, and learn when to return for Grapple, Stasis and Shield routes.";

const heroImage =
  "/images/valor-mortis/general-lothaire-battlefield-arena.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [heroImageUrl];

const toc = [
  {
    id: "chapter-order",
    label: "All 11 Chapters",
  },
  {
    id: "chapters-1-2",
    label: "Chapters 1–2",
  },
  {
    id: "chapters-3-4",
    label: "Chapters 3–4",
  },
  {
    id: "chapters-5-6",
    label: "Chapters 5–6",
  },
  {
    id: "chapters-7-8",
    label: "Chapters 7–8",
  },
  {
    id: "chapters-9-11",
    label: "Chapters 9–11",
  },
  {
    id: "ability-unlocks",
    label: "Grapple, Stasis & Shield",
  },
  {
    id: "return-later",
    label: "When to Return",
  },
  {
    id: "abyssal-eviction",
    label: "Abyssal Eviction",
  },
  {
    id: "rapier-heavy-attacks",
    label: "Rapier Heavy Attacks",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis/general-lothaire",
    label: "General Lothaire Boss Guide",
  },
  {
    href: "/valor-mortis/valley-of-ashes",
    label: "Valley of Ashes Walkthrough",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village Walkthrough",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns & Salt Mine Walkthrough",
  },
  {
    href: "/valor-mortis/the-emissary",
    label: "The Emissary Quest",
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
        alt: "General Lothaire boss encounter in Valor Mortis",
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
      articleSection: "Valor Mortis Guides",
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
          name: "Valor Mortis walkthrough",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis chapter progression",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Transmutation abilities",
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
          <ValorMortisGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
