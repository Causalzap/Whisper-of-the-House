
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheEmissaryContent from "@/data/valor-mortis/the-emissary.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/the-emissary`;

const metadataTitle =
  "Valor Mortis The Emissary: Seal, Shield & Quest Rewards";

const metadataDescription =
  "Find the Emissary's Seal and Letter, return with Shield, investigate the escort camp, finish the quest, and collect Sands of Time and Perfect Copy.";

const articleDescription =
  "Complete The Emissary across Chapters 2, 5, and 8. Find the Seal and Letter, cross the poison with Shield, investigate the hidden camp, and claim both rewards.";

const heroImage =
  "/images/valor-mortis/the-emissary-poison-gas.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/valor-mortis/the-emissary-dead-escort.webp`,
  `${siteUrl}/images/valor-mortis/the-emissary-final-investigation.webp`,
  `${siteUrl}/images/valor-mortis/the-emissary-quest-complete.webp`,
];

const toc = [
  {
    id: "first-visit",
    label: "Emissary's Seal",
  },
  {
    id: "letter",
    label: "Emissary's Letter",
  },
  {
    id: "return-with-shield",
    label: "Return With Shield",
  },
  {
    id: "investigate-camp",
    label: "Investigate the Camp",
  },
  {
    id: "blocked-route",
    label: "Blocked Carriage",
  },
  {
    id: "final-clue",
    label: "Final Investigation",
  },
  {
    id: "rewards",
    label: "Quest Rewards",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "All 11 Chapters Walkthrough",
  },
  {
    href: "/valor-mortis/valley-of-ashes",
    label: "Valley of Ashes",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns & Salt Mine",
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
        alt: "Poison gas blocking The Emissary investigation in Valley of Ashes",
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
          name: "The Emissary",
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
      articleSection: "Valor Mortis Side Quests",
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
          name: "The Emissary",
        },
        {
          "@type": "Thing",
          name: "Emissary's Seal",
        },
        {
          "@type": "Thing",
          name: "Shield Transmutation",
        },
        {
          "@type": "Thing",
          name: "Perfect Copy Amber",
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
          <TheEmissaryContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
