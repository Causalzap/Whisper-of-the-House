import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShipsContent from "@/data/crimson-desert/ships.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const baseGameUrl = `${siteUrl}/crimson-desert`;
const dlcUrl = `${baseGameUrl}/charting-the-unknown`;
const pageUrl = `${dlcUrl}/ships`;

const articleTitle = "How Do You Get, Build, and Upgrade Ships in Crimson Desert?";
const metadataDescription = "Unlock and build ships in Crimson Desert. Fix Engineering requirements, compare four ship prices, assign crew, sail, and repair damaged vessels.";
const articleDescription = "Build or buy a ship in Charting the Unknown, meet Engineering and crew requirements, compare available vessels, control your first voyage, and repair a damaged ship.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-ship-manager-crew-roles.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-shipbuilding-port-missions.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-shipbuilding-engineering-requirement.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-small-shipbuilding-12-hours.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-fleetmaster-ship-purchase.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-first-voyage-sailing-controls.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-ship-repair-fleetmaster.webp`,
];

export const metadata: Metadata = {
  title: articleTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: articleTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [{ url: imageUrls[0], alt: articleTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "unlock-ships", label: "Unlock Ships" },
  { id: "build-first-ship", label: "Build Your First Ship" },
  { id: "buy-or-build", label: "Buy vs. Build" },
  { id: "fleetmaster", label: "Fleetmasters & Ship Purchases" },
  { id: "assign-crew", label: "Assign Crew" },
  { id: "first-voyage", label: "First Voyage & Controls" },
  { id: "ship-upgrades", label: "Ship Upgrades" },
  { id: "ship-combat", label: "Naval Combat" },
  { id: "repair-ship", label: "Repair & Retrieval" },
  { id: "first-island", label: "First Uncharted Island" },
];

const relatedLinks = [
  { label: "Charting the Unknown DLC", href: "/crimson-desert/charting-the-unknown" },
  { label: "Beyond the Margins Walkthrough", href: "/crimson-desert/beyond-the-margins" },
];

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
          name: "Crimson Desert",
          item: baseGameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ships",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-30",
      dateModified: "2026-10-30",
      about: [
        { "@type": "VideoGame", name: "Crimson Desert" },
        { "@type": "Thing", name: "Charting the Unknown" },
        { "@type": "Thing", name: "Shipbuilding" },
        { "@type": "Thing", name: "Ship crew" },
        { "@type": "Thing", name: "Fleetmaster" },
        { "@type": "Thing", name: "Ship repair" },
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
          title={articleTitle}
          description="Unlock shipbuilding, meet the worker and crew requirements, choose a vessel, and prepare it for the first ocean voyage."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ShipsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
