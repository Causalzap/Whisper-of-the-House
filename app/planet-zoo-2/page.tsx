
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlanetZoo2Content from "@/data/planet-zoo-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/planet-zoo-2`;

const metadataTitle =
  "Planet Zoo 2 Guide: Career Walkthrough & Franchise";

const metadataDescription =
  "Follow all 18 Planet Zoo 2 Career scenarios, unlock chapters, start a Franchise Zoo, and solve aquarium, Wildlife Reserve, and achievement challenges.";

const articleTitle =
  "Planet Zoo 2 Guide: Career Walkthrough & Franchise";

const articleDescription =
  "Navigate all four Career chapters, understand medal requirements, build your first Franchise Zoo, and find help with aquariums, Wildlife Reserves, and achievements.";

const pageDescription =
  "Find your next Career objective, unlock new locations, or start a Franchise Zoo. Follow the chapter routes and solve animal care, aquarium, and conservation problems.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/career-medal-unlock-requirement.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "Where Should You Start?",
  },
  {
    id: "game-modes",
    label: "Career, Franchise, or Sandbox?",
  },
  {
    id: "start-career",
    label: "How to Unlock Nordic Fjords",
  },
  {
    id: "career-chapters",
    label: "All 4 Career Chapters",
  },
  {
    id: "career-locked",
    label: "Why Is the Next Scenario Locked?",
  },
  {
    id: "bronze-silver-gold",
    label: "Bronze, Silver, or Gold?",
  },
  {
    id: "aquarium-help",
    label: "Aquarium Problems",
  },
  {
    id: "wildlife-reserves",
    label: "Wildlife Reserve Releases",
  },
  {
    id: "achievements",
    label: "All 39 Achievements",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2/career-chapter-4",
    label: "Career Chapter 4: All 6 Scenarios",
  },
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Career Chapter 1: Great Rift Valley & East Africa",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Career Chapter 2: All 5 Scenarios",
  },
  {
    href: "/planet-zoo-2/career-chapter-3",
    label: "Career Chapter 3: All 5 Scenarios",
  },
  {
    href: "/planet-zoo-2/franchise-guide",
    label: "Franchise: How to Start a Zoo & Make Money",
  },
  {
    href: "/planet-zoo-2/franchise-accreditation",
    label: "Franchise Accreditation: All 5 Tiers",
  },
  {
    href: "/planet-zoo-2/franchise-breeding",
    label: "Franchise: Inbreeding & Overcrowding",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Filtration",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves & Ecosystems",
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
    publishedTime: "2026-10-15",
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
      dateModified: "2026-10-17",
      articleSection: "Planet Zoo 2 Career & Franchise",
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

export default function PlanetZoo2Page() {
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
          <PlanetZoo2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
