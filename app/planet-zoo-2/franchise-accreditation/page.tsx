
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FranchiseAccreditationContent from "@/data/planet-zoo-2/franchise-accreditation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/franchise-accreditation`;

const metadataTitle =
  "Planet Zoo 2 Franchise Accreditation: All 5 Tiers";

const metadataDescription =
  "Unlock Franchise Accreditation Tiers 1–5 in Planet Zoo 2. See star requirements, unlock new species, and fix locked animals or stalled progress.";

const articleTitle =
  "Planet Zoo 2 Franchise Accreditation: All 5 Tiers & Unlocks";

const articleDescription =
  "See the Zoo Reputation and Wildlife Reserve Biodiversity requirements for every Franchise Accreditation Tier, including species unlocks and ways to reach three stars.";

const pageDescription =
  "Reach three Zoo Reputation Stars for Tier 2, build qualifying zoos and Wildlife Reserves for later tiers, and find out why animals remain locked.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/franchise-accreditation-locked-animals.webp`,
  `${siteUrl}/images/planet-zoo-2/franchise-accreditation-tier-2-unlocked.webp`,
  `${siteUrl}/images/planet-zoo-2/franchise-accreditation-tier-2-animal-trading.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "How to Raise Accreditation",
  },
  {
    id: "all-tiers",
    label: "All 5 Accreditation Tiers",
  },
  {
    id: "locked-animals",
    label: "Why Animals Are Locked",
  },
  {
    id: "first-three-star-zoo",
    label: "Reach 3 Zoo Reputation Stars",
  },
  {
    id: "tier-2-unlock",
    label: "What Unlocks at Tier 2?",
  },
  {
    id: "tier-3",
    label: "How to Reach Tier 3",
  },
  {
    id: "tier-4-tier-5",
    label: "How to Reach Tiers 4 & 5",
  },
  {
    id: "progress-not-counting",
    label: "Why Accreditation Isn't Increasing",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2: Career & Franchise Guide",
  },
  {
    href: "/planet-zoo-2/franchise-guide",
    label: "How to Start a Franchise Zoo & Make Money",
  },
  {
    href: "/planet-zoo-2/franchise-breeding",
    label: "Franchise Breeding & Overcrowding",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves & Biodiversity Rating",
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
    publishedTime: "2026-10-17",
    modifiedTime: "2026-10-17",
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
          name: "Franchise Accreditation",
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
      datePublished: "2026-10-17",
      dateModified: "2026-10-17",
      articleSection: "Planet Zoo 2 Franchise Accreditation",
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

export default function PlanetZoo2FranchiseAccreditationPage() {
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
          updatedAt="October 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FranchiseAccreditationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
