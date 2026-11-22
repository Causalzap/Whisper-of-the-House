
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import KeycardsContent from "@/data/probably-stolen/keycards.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/keycards`;

const metadataTitle =
  "Probably Stolen Keycards Guide: Supply Crates & Evidence Locker";

const metadataDescription =
  "Find which Keycards open Supply Crates and Evidence Lockers in Probably Stolen. Use the Cryptographic Desequencer, compare rewards, and fix locked crates.";

const articleTitle =
  "How Do You Get Keycards and Open Supply Crates in Probably Stolen?";

const articleDescription =
  "Match Security, Engineering, Medical, Service, and Command Keycards to locked crates, make cards with the Cryptographic Desequencer, unlock Evidence Lockers, compare rewards, and use the Underground Exchange.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/keycards-command-card.webp`,
  `${siteUrl}/images/probably-stolen/keycards-security-crate-locked.webp`,
  `${siteUrl}/images/probably-stolen/keycards-thief-evidence-locker.webp`,
  `${siteUrl}/images/probably-stolen/keycards-desequencer-machine.webp`,
  `${siteUrl}/images/probably-stolen/keycards-desequencer-blank-input.webp`,
  `${siteUrl}/images/probably-stolen/keycards-security-card-output.webp`,
  `${siteUrl}/images/probably-stolen/keycards-evidence-locker-locked.webp`,
  `${siteUrl}/images/probably-stolen/keycards-underground-exchange.webp`,
];

const heroImage =
  `${siteUrl}/images/probably-stolen/keycards-security-crate-locked.webp`;

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "A locked Security Department Supply Crate in Probably Stolen showing that an Access Keycard is required",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};

const toc = [
  {
    id: "keycard-matches",
    label: "Which Keycard Opens Each Crate?",
  },
  {
    id: "get-keycards",
    label: "How to Get Keycards",
  },
  {
    id: "cryptographic-desequencer",
    label: "Cryptographic Desequencer",
  },
  {
    id: "evidence-locker",
    label: "Open the Evidence Locker",
  },
  {
    id: "crate-rewards",
    label: "Supply Crate Rewards",
  },
  {
    id: "underground-exchange",
    label: "Underground Exchange",
  },
  {
    id: "keycard-problems",
    label: "Keycard Problems & Fixes",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/factions",
    label: "Factions & Black Market Reputation",
  },
  {
    href: "/probably-stolen/security-investigation",
    label: "Security Investigation & Contraband",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "Pure Water & Filtering",
  },
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
          name: "Probably Stolen",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Keycards",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-22",
      dateModified: "2026-11-22",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Disposable Keycards",
        },
        {
          "@type": "Thing",
          name: "Security and Command Keycards",
        },
        {
          "@type": "Thing",
          name: "Department Supply Crates",
        },
        {
          "@type": "Thing",
          name: "Security Department Evidence Locker",
        },
        {
          "@type": "Thing",
          name: "Cryptographic Desequencer",
        },
        {
          "@type": "Thing",
          name: "Desequencer Chips and Keycard programming",
        },
        {
          "@type": "Thing",
          name: "Supply Crate rewards",
        },
        {
          "@type": "Thing",
          name: "Underground Exchange",
        },
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
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
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
          description={articleDescription}
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <KeycardsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
