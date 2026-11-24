
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import StellarisWillpowerContent from "@/data/stellaris-willpower/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/stellaris-willpower`;
const pageUrl = hubUrl;

const metadataTitle =
  "Stellaris Willpower Guide: Ideologies, Origins & Civics";

const metadataDescription =
  "Explore Stellaris Willpower DLC and 4.6: choose Origins and Civics, establish Ideologies, unlock Tenets and Galactic Halls, and pursue Force of Will.";

const articleTitle =
  "How Do You Play and Progress in Stellaris Willpower?";

const articleDescription =
  "Compare three Origins and five Fanatic Civics, establish your Ideology, plan early progression, unlock new systems, and choose your next objective.";

const toc = [
  { id: "willpower-content", label: "Willpower DLC & Stellaris 4.6" },
  { id: "best-origin", label: "Choose Your Origin" },
  { id: "fanatic-civics", label: "Five Fanatic Civics" },
  { id: "early-progression", label: "Early Progression" },
  { id: "ideological-reach", label: "Ideology Not Spreading" },
  { id: "tenets-progression", label: "When to Unlock Tenets" },
  { id: "galactic-hall", label: "Galactic Hall Decisions" },
  { id: "absolute-ethics", label: "Absolute Ethics" },
  { id: "late-game", label: "Should You Choose Force of Will?" },
  { id: "common-problems", label: "Progression Problems" },
  { id: "next-goal", label: "Choose Your Next Goal" },
];

const relatedLinks = [
    {
      href: "/stellaris-willpower/ideologies",
      label: "Ideologies: Reach, Strength, Momentum & Adoption",
    },
    {
      href: "/stellaris-willpower/tenets",
      label: "All 95 Tenets: Intensities, Effects & Rerolls",
    },
    {
      href: "/stellaris-willpower/force-of-will",
      label: "Force of Will: Five Stages & Utopia Victory",
    },
  ];
  
export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
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
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          name: "Stellaris: Willpower",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-24",
      about: {
        "@type": "VideoGame",
        name: "Stellaris: Willpower",
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function StellarisWillpowerPage() {
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
          description={articleDescription}
          gameTitle="Stellaris: Willpower"
          gameHref="/stellaris-willpower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <StellarisWillpowerContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
