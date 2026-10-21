
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CareerChapter4Content from "@/data/planet-zoo-2/career-chapter-4.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/career-chapter-4`;

const metadataTitle =
  "Planet Zoo 2 Career Chapter 4 Walkthrough: All 6 Scenarios";

const metadataDescription =
  "Planet Zoo 2 Chapter 4 walkthrough for all 6 scenarios: Maluku aquariums, Swiss Alps breeding, Poland wetlands, Tanzania ecosystems, and medal goals.";

const articleTitle =
  "Planet Zoo 2 Chapter 4 Walkthrough: All 6 Scenarios";

const articleDescription =
  "Work through all six FENtastic Opportunity scenarios, from Maluku Islands aquarium welfare and Channel Islands protests to Singapore Komodo Dragons, Swiss Alps breeding, Poland wetlands, and Tanzania conservation.";

const pageDescription =
  "Unlock Chapter 4 and tackle all six Career scenarios, with Bronze, Silver, and Gold requirements, animal welfare fixes, release groups, ecosystem restoration, and zoo reputation.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-maluku-sunfish-temperature.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-channel-terrestrial-exhibits.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-channel-gold-medal.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-singapore-komodo-appeal.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-swiss-trade-center-path.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-swiss-gold-medal.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-4-tanzania-savannah-too-small.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "How to Complete Chapter 4",
  },
  {
    id: "unlock-chapter-4",
    label: "Unlock Chapter 4 & All 6 Locations",
  },
  {
    id: "maluku-islands",
    label: "Maluku Islands: Aquariums & Sunfish",
  },
  {
    id: "channel-islands",
    label: "Channel Islands: Species & Protests",
  },
  {
    id: "singapore",
    label: "Singapore: Komodo Dragon & Appeal",
  },
  {
    id: "poland-reserve",
    label: "Poland: Fen Wetland & Releases",
  },
  {
    id: "swiss-alps",
    label: "Swiss Alps: Wild Boar Breeding",
  },
  {
    id: "tanzania-reserve",
    label: "Tanzania: Ecosystems & Wildlife",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2: Career & Franchise Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-3",
    label: "Career Chapter 3: Sumatra to Sweden",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Water Filtration",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves: Releases & Ecosystems",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
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
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    images: imageUrls,
    publishedTime: "2026-10-19",
    modifiedTime: "2026-10-21",
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
          name: "Planet Zoo 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Career Chapter 4",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-19",
      dateModified: "2026-10-21",
      articleSection: "Planet Zoo 2 Career Chapter 4",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "VideoGame",
        name: "Planet Zoo 2",
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
      inLanguage: "en",
    },
  ],
};

export default function PlanetZoo2CareerChapter4Page() {
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
          description={pageDescription}
          gameTitle="Planet Zoo 2"
          gameHref="/planet-zoo-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CareerChapter4Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
