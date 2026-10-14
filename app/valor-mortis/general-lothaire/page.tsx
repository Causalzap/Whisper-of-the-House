
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GeneralLothaireContent from "@/data/valor-mortis/general-lothaire.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/general-lothaire`;

const metadataTitle =
  "Valor Mortis General Lothaire: First Win, Rewards & Boss";

const metadataDescription =
  "Beat General Lothaire in Chapters 1 or 2, learn how early victory skips the rematch, claim Catalyst rewards, and survive both boss phases.";

const articleDescription =
  "Learn what happens if you beat or lose to General Lothaire in Chapter 1, how rewards change, and how to survive his delayed attacks, weak points, and second phase.";

const heroImage =
  "/images/valor-mortis/general-lothaire-battlefield-arena.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/valor-mortis/general-lothaire-first-win-reward.webp`,
  `${siteUrl}/images/valor-mortis/general-lothaire-commanders-catalyst-clot.webp`,
  `${siteUrl}/images/valor-mortis/general-lothaire-second-phase.webp`,
];

const toc = [
  {
    id: "first-fight",
    label: "Chapter 1 First Fight",
  },
  {
    id: "early-victory",
    label: "Early Victory Rewards",
  },
  {
    id: "normal-rematch",
    label: "Chapter 2 Rematch",
  },
  {
    id: "phase-one",
    label: "Phase 1 Attacks",
  },
  {
    id: "weak-points",
    label: "Weak Points",
  },
  {
    id: "phase-two",
    label: "Phase 2 Attacks",
  },
  {
    id: "rewards",
    label: "Rewards & What Happens Next",
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
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village & Grapple",
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
        alt: "General Lothaire boss fight in Valor Mortis",
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
          name: "General Lothaire",
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
      articleSection: "Valor Mortis Boss Guides",
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
          name: "General Lothaire",
        },
        {
          "@type": "Thing",
          name: "General Lothaire rewards",
        },
        {
          "@type": "Thing",
          name: "Torn Banner achievement",
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
          <GeneralLothaireContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
