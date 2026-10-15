
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsContent from "@/data/planet-zoo-2/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Planet Zoo 2 Achievements: All 39 & 100% Checklist";

const metadataDescription =
  "Track all 39 Planet Zoo 2 achievements, plan your 100% completion route, and avoid missed goals across zoos, aquariums, and reserves.";

const articleTitle =
  "Planet Zoo 2 Achievements: All 39 & 100% Checklist";

const articleDescription =
  "An interactive checklist for all 39 Planet Zoo 2 Steam achievements, with completion planning for Career medals, breeding, research, aquatic habitats, and Wildlife Reserves.";

const pageDescription =
  "Check off all 39 achievements and plan which goals to complete together, which to start early, and which to leave until your zoo network is developed.";

const toc = [
  { id: "achievement-checklist", label: "All 39 Achievements" },
  { id: "roadmap", label: "100% Completion Roadmap" },
  { id: "same-location", label: "Achievements in the Same Zoo" },
  { id: "thriving", label: "Thriving Achievements" },
  { id: "aquarium-planning", label: "Aquarium Achievements" },
  { id: "reserve-cleanup", label: "Wildlife Reserve Achievements" },
  { id: "career-gold", label: "Career Bronze, Gold & Accreditation" },
  { id: "long-term", label: "Long-Term Goals" },
  { id: "final-cleanup", label: "Final Achievement Cleanup" },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2 Career & Progression",
  },
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Chapter 1 Walkthrough",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Chapter 2 Walkthrough",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Filtration",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves & Ecosystems",
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
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-15",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Achievements",
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
      inLanguage: "en",
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      articleSection: "Achievements and 100% Completion",
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

export default function PlanetZoo2AchievementsPage() {
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
          <AchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
