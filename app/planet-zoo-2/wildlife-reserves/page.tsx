
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WildlifeReservesContent from "@/data/planet-zoo-2/wildlife-reserves.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/wildlife-reserves`;

const metadataTitle =
  "Planet Zoo 2 Wildlife Reserves: Releases & Ecosystems";

const metadataDescription =
  "Prepare release groups, establish ecosystems, build research networks, and improve biodiversity in Planet Zoo 2 wildlife reserves.";

const articleTitle =
  "Planet Zoo 2 Wildlife Reserves: Release Groups & Ecosystems";

const articleDescription =
  "Learn how to prepare and transport Release Groups, establish suitable ecosystems, resolve blocked animal releases, build Research Networks, and improve Wildlife Reserve Biodiversity Ratings.";

const pageDescription =
  "Release animals into suitable ecosystems, fix Invalid habitat conditions, and improve your reserve's environmental restoration and research ratings.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-biodiversity-rating.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "release-groups",
    label: "Prepare and Transport Release Groups",
  },
  {
    id: "ecosystems",
    label: "Establish Ecosystems",
  },
  {
    id: "release-blocked",
    label: "Why Animal Releases Are Blocked",
  },
  {
    id: "research-network",
    label: "Build a Research Network",
  },
  {
    id: "biodiversity-rating",
    label: "Increase Biodiversity Rating",
  },
  {
    id: "sumatra",
    label: "Sumatra: River and Peatland",
  },
  {
    id: "before-next-release",
    label: "Before Your Next Release",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2 Career Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Great Rift Valley & East Africa",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Scottish Highlands & Chapter 2",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Filtration",
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
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-15",
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
          name: "Wildlife Reserves",
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
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      articleSection: "Wildlife Reserves and Conservation",
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

export default function PlanetZoo2WildlifeReservesPage() {
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
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WildlifeReservesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
