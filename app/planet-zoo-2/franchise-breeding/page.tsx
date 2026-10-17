
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FranchiseBreedingContent from "@/data/planet-zoo-2/franchise-breeding.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/franchise-breeding`;

const metadataTitle =
  "Planet Zoo 2 Breeding: Stop Inbreeding & Overcrowding";

const metadataDescription =
  "Stop inbreeding and overcrowding in Planet Zoo 2. Use contraception, manage Toucan and Wildebeest offspring, and restore habitat welfare.";

const articleTitle =
  "Planet Zoo 2: How to Stop Inbreeding and Overcrowding";

const articleDescription =
  "Control unwanted breeding, manage contraception, choose unrelated breeding partners, and prevent overcrowding in Franchise Mode habitats.";

const pageDescription =
  "Manage animal breeding in Franchise Mode, prevent relatives from reproducing, and fix overcrowded habitats using real Toucan and Black Wildebeest examples.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/franchise-breeding-contraception.webp`,
  `${siteUrl}/images/planet-zoo-2/franchise-breeding-toucan-offspring.webp`,
  `${siteUrl}/images/planet-zoo-2/franchise-breeding-wildebeest-space.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "Stop Inbreeding & Overcrowding",
  },
  {
    id: "stop-inbreeding",
    label: "How to Prevent Inbreeding",
  },
  {
    id: "toucan-breeding",
    label: "Too Many Toucans",
  },
  {
    id: "habitat-overcrowding",
    label: "Fix Low Habitat Welfare",
  },
  {
    id: "breeding-wolves-deer",
    label: "Grey Wolf & Red Deer Offspring",
  },
  {
    id: "surplus-animals",
    label: "What to Do With Surplus Animals",
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
    href: "/planet-zoo-2/franchise-accreditation",
    label: "Franchise Accreditation: All 5 Tiers",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves & Conservation Releases",
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
          name: "Franchise Breeding",
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
      articleSection: "Planet Zoo 2 Franchise Breeding",
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

export default function PlanetZoo2FranchiseBreedingPage() {
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
          <FranchiseBreedingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
