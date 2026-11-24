
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import StellarisWillpowerTenetsContent from "@/data/stellaris-willpower/tenets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/stellaris-willpower`;
const pageUrl = `${hubUrl}/tenets`;

const metadataTitle =
  "Stellaris Willpower Tenets Guide: All 95, Intensities & Rerolls";

const metadataDescription =
  "Compare all 95 Stellaris Willpower Tenets, unlock Intensity I–III, check Ethic and Origin requirements, and learn Reformulate and Amend costs.";

const articleTitle =
  "How Do You Unlock and Choose Tenets in Stellaris Willpower?";

const articleDescription =
  "Compare Tenet effects across Ethics and Intensities, check special unlock requirements, and decide when to reformulate or amend your choices.";

const imageUrl =
  `${siteUrl}/images/stellaris-willpower/willpower-tenet-selection.webp`;

const toc = [
  { id: "tenet-unlocks", label: "Tenet Unlocks & Intensities" },
  { id: "tenet-selection", label: "How to Choose Tenets" },
  { id: "reformulate-tenets", label: "Reformulate & Amend Tenets" },
  { id: "all-tenets", label: "All 95 Tenets by Ethic" },
  { id: "special-tenets", label: "Origin & Civic Tenets" },
  { id: "gestalt-tenets", label: "Gestalt Tenet Differences" },
  { id: "nomad-tenets", label: "Nomadic Empire Tenets" },
  { id: "propagandism", label: "Propagandism Bonuses" },
  { id: "strategism", label: "Strategism Bonuses" },
  { id: "best-tenets", label: "Best Tenets for Your Empire" },
  { id: "tenet-mistakes", label: "Tenet Selection Problems" },
  { id: "next-step", label: "Check Your Tenet Results" },
];

const relatedLinks = [
    {
      href: "/stellaris-willpower",
      label: "Stellaris Willpower Guide: Origins, Civics & Progression",
    },
    {
      href: "/stellaris-willpower/ideologies",
      label: "Ideologies: Reach, Strength, Momentum & Adoption",
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
    images: [
      {
        url: imageUrl,
        alt: "Stellaris Willpower Ideologies interface displaying unlocked Tenet slots and Intensity levels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrl],
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tenets",
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
      image: [imageUrl],
      about: {
        "@type": "VideoGame",
        name: "Stellaris: Willpower",
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function StellarisWillpowerTenetsPage() {
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
          <StellarisWillpowerTenetsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
