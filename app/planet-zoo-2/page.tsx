
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlanetZoo2Content from "@/data/planet-zoo-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/planet-zoo-2`;

const metadataTitle =
  "Planet Zoo 2 Guide: Career Walkthrough & Progression";

const metadataDescription =
  "Follow Planet Zoo 2 Career across 18 scenarios, see what unlocks each chapter, and find help for aquariums, wildlife reserves, and achievements.";

const articleTitle =
  "Planet Zoo 2 Guide: Career Walkthrough & What to Do Next";

const articleDescription =
  "Navigate all four Career chapters, understand medal and Accreditation requirements, and decide when to move forward or return for Silver and Gold.";

const pageDescription =
  "Start at Great Rift Valley, follow the Career locations in order, and find out which medals and objectives you need to unlock your next assignment.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/career-medal-unlock-requirement.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  { id: "start-career", label: "Where to Go First" },
  { id: "career-chapters", label: "All 4 Career Chapters" },
  { id: "career-locked", label: "Why Is the Next Scenario Locked?" },
  { id: "bronze-silver-gold", label: "Bronze, Silver, or Gold?" },
  { id: "aquarium-help", label: "Aquarium Problems" },
  { id: "wildlife-reserves", label: "Wildlife Reserve Releases" },
  { id: "zoo-management", label: "Fixing Zoo Management Problems" },
  { id: "career-or-franchise", label: "Career, Franchise, or Sandbox?" },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Chapter 1: Great Rift Valley & East Africa",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Chapter 2: All 5 Scenarios",
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
      articleSection: "Planet Zoo 2 Career Guide",
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
          updatedAt="October 15, 2026"
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
