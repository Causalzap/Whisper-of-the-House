import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FactionsContent from "@/data/probably-stolen/factions.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/factions`;

const metadataTitle = "Probably Stolen Factions: Reputation Perks & Penalties";
const metadataDescription = "Compare all six Probably Stolen factions, their reputation thresholds, perks and penalties. Learn how to raise standing and avoid Security conflicts.";
const articleDescription = "Compare reputation thresholds for Lower Levels, Security, Black Market, Upper Levels, Revolution and Sector 13 Cartel. See how trading and criminal reports change standing, how difficulty changes gains and losses, and which Starting Perks affect faction relationships.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/factions-reputation-panel.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: "Explore six factions, their reputation thresholds, rewards, penalties, and ways to improve standing.",
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: "Probably Stolen faction reputation overview showing standings and perks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: "Compare Lower Levels, Security, Black Market, Upper Levels, Revolution, and Cartel reputation.",
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "how-reputation-works", label: "How Reputation Works" },
  { id: "raise-reputation", label: "Increase Faction Reputation" },
  { id: "security-black-market-conflict", label: "Security vs Black Market" },
  { id: "lower-levels", label: "Lower Levels Perks" },
  { id: "security", label: "Security Perks" },
  { id: "black-market", label: "Black Market Perks" },
  { id: "upper-levels", label: "Upper Levels Perks" },
  { id: "revolution", label: "Revolution Perks" },
  { id: "cartel", label: "Sector 13 Cartel Perks" },
  { id: "reputation-difficulty", label: "Difficulty & Reputation" },
  { id: "starting-perks-reputation", label: "Starting Perks & Factions" },
  { id: "reputation-priorities", label: "Which Faction to Support" },
];

const relatedLinks = [
  { href: "/probably-stolen", label: "Probably Stolen: Shop Basics & Starting Perks" },
  { href: "/probably-stolen/chemist", label: "Cartel Dream Dust Delivery" },
  { href: "/probably-stolen/augs", label: "Aug Encounters & Security" },
  { href: "/probably-stolen/achievements", label: "Faction & Reporting Achievements" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Probably Stolen", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Faction Reputation", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "How Does Faction Reputation Work in Probably Stolen?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-29",
      dateModified: "2026-10-29",
      about: [
        { "@type": "VideoGame", name: "Probably Stolen" },
        { "@type": "Thing", name: "Faction reputation thresholds" },
        { "@type": "Thing", name: "Lower Levels and Upper Levels" },
        { "@type": "Thing", name: "Security and Black Market" },
        { "@type": "Thing", name: "Revolution faction" },
        { "@type": "Thing", name: "Sector 13 Cartel reputation" },
        { "@type": "Thing", name: "Reputation starting perks" },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function Page() {
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
          title="How Does Faction Reputation Work in Probably Stolen?"
          description="Check all six reputation tracks, their bonuses and penalties, and how trading, reports and Starting Perks affect standing."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FactionsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
