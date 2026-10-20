
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
  "Prepare Release Groups, fix invalid ecosystems and blocked animal releases, build research networks, and improve Biodiversity Rating in Planet Zoo 2.";

const articleTitle =
  "Planet Zoo 2 Wildlife Reserves: Release Groups & Ecosystems";

const articleDescription =
  "Prepare animals for conservation releases, establish suitable ecosystems, resolve blocked transfers, build Research Networks, and improve Wildlife Reserve Biodiversity Ratings.";

const pageDescription =
  "Move animals from your zoo into Wildlife Reserves, fix Invalid Ecosystems, restore missing environmental requirements, and improve biodiversity through research and conservation.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-biodiversity-rating.webp`,
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-giraffe-storage.webp`,
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-valid-ecosystem-filter.webp`,
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-dense-forest-requirements.webp`,
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-research-network-requirements.webp`,
  `${siteUrl}/images/planet-zoo-2/wildlife-reserve-species-roles.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "How to Release Animals",
  },
  {
    id: "release-groups",
    label: "Release Groups & Eligible Animals",
  },
  {
    id: "ecosystems",
    label: "Establish Ecosystems",
  },
  {
    id: "release-blocked",
    label: "Fix Blocked Animal Releases",
  },
  {
    id: "research-network",
    label: "Research Outposts & Monitoring",
  },
  {
    id: "biodiversity-rating",
    label: "Biodiversity Rating & 3–5 Stars",
  },
  {
    id: "sumatra",
    label: "Fix Sumatra River Ecosystem",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2: Career & Franchise Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Career Chapter 1: Great Rift Valley & East Africa",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Career Chapter 2: Scottish Highlands & More",
  },
  {
    href: "/planet-zoo-2/career-chapter-3",
    label: "Career Chapter 3: Sumatra & Sweden",
  },
  {
    href: "/planet-zoo-2/franchise-accreditation",
    label: "Franchise Accreditation: All 5 Tiers",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Water Filtration",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
  },
  {
    href: "/planet-zoo-2/career-chapter-4",
    label: "Career Chapter 4: Poland & Maluku",
  },
  {
    href: "/planet-zoo-2/franchise-breeding",
    label: "Franchise Breeding & Inbreeding",
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
    images: [heroImage],
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-20",
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
      dateModified: "2026-10-20",
      articleSection: "Planet Zoo 2 Wildlife Reserves",
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
          updatedAt="October 20, 2026"
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
