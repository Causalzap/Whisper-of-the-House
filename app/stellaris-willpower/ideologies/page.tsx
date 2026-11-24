
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import StellarisWillpowerIdeologiesContent from "@/data/stellaris-willpower/ideologies.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/stellaris-willpower`;
const pageUrl = `${hubUrl}/ideologies`;

const metadataTitle =
  "Stellaris Willpower Ideologies Guide: Reach, Strength & Adoption";

const metadataDescription =
  "Create Ideologies in Stellaris Willpower, increase Reach and Strength, manage Momentum, gain Authority, spread beliefs, and unlock Galactic Halls.";

const articleTitle =
  "How Do Ideologies Work in Stellaris Willpower?";

const articleDescription =
  "Establish an Ideology through factions, expand its Reach, maintain Strength and Momentum, influence foreign empires, and use Galactic Halls.";

const imageUrl =
  `${siteUrl}/images/stellaris-willpower/willpower-ideological-reach.webp`;

const toc = [
  { id: "create-ideology", label: "Create Your First Ideology" },
  { id: "ideology-interface", label: "Read the Ideologies Screen" },
  { id: "ideological-reach", label: "Increase Ideological Reach" },
  { id: "strength", label: "Increase Ideological Strength" },
  { id: "momentum", label: "Ideological Momentum" },
  { id: "ideology-adoption", label: "Foreign Empire Adoption" },
  { id: "ideological-authority", label: "Become Ideological Authority" },
  { id: "ideological-wars", label: "Impose Ideology & Wars" },
  { id: "ideological-espionage", label: "Ideological Espionage" },
  { id: "galactic-halls", label: "Galactic Halls & Buildings" },
  { id: "gestalt-nomads", label: "Gestalt & Nomadic Empires" },
  { id: "galactic-community", label: "Galactic Community" },
  { id: "absolute-ethics", label: "Unlock Absolute Ethics" },
  { id: "ideology-problems", label: "Fix Ideology Problems" },
  { id: "next-goal", label: "What to Do Next" },
];

const relatedLinks = [
    {
      href: "/stellaris-willpower",
      label: "Stellaris Willpower Guide: Origins, Civics & Progression",
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
    images: [
      {
        url: imageUrl,
        alt: "Stellaris Willpower Ideology Map Mode showing Ideological Reach across neighboring systems",
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
          name: "Ideologies",
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

export default function StellarisWillpowerIdeologiesPage() {
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
          <StellarisWillpowerIdeologiesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
