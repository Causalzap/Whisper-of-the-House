import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RuneScapeDragonwildsFastTravelContent from "@/data/runescape-dragonwilds/fast-travel.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/runescape-dragonwilds`;
const pageUrl = `${hubUrl}/fast-travel`;

const imageUrls = [
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-lodestone-build-cost.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-vault-core-pickup.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-lodestone-law-rune-cost.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-lodestone-teleport.webp`,
  `${siteUrl}/images/runescape-dragonwilds/runescape-dragonwilds-forward-lodestone-placement.webp`,
];

export const metadata: Metadata = {
  title: "RuneScape Dragonwilds Fast Travel – Lodestones & Vault Cores",
  description:
    "Build Lodestones, get Vault Cores, manage Law Rune costs, place fast travel points efficiently, and avoid wasting resources in Dragonwilds.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "RuneScape Dragonwilds Fast Travel – Lodestones & Vault Cores",
    description:
      "Learn how Lodestones work, where Vault Cores come from, why Law Rune costs change, and when to build another fast travel point.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Lodestone build requirements in RuneScape Dragonwilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuneScape Dragonwilds Fast Travel – Lodestones & Vault Cores",
    description:
      "Build Lodestones, farm Vault Cores, manage Law Rune costs, and place fast travel points where they save the most time.",
    images: [imageUrls[0]],
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
          name: "RuneScape: Dragonwilds Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fast Travel",
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
      headline:
        "RuneScape Dragonwilds Fast Travel: Lodestones & Vault Cores",
      description:
        "A practical RuneScape: Dragonwilds fast travel guide covering Lodestone construction, Vault Core farming, Law Rune costs, placement decisions, Home Teleport, and forward travel networks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      about: [
        {
          "@type": "VideoGame",
          name: "RuneScape: Dragonwilds",
        },
        {
          "@type": "Thing",
          name: "RuneScape Dragonwilds fast travel",
        },
        {
          "@type": "Thing",
          name: "Lodestones",
        },
        {
          "@type": "Thing",
          name: "Vault Cores",
        },
        {
          "@type": "Thing",
          name: "Law Runes",
        },
        {
          "@type": "Thing",
          name: "Home Teleport",
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

const toc = [
  {
    id: "unlock-fast-travel",
    label: "How to unlock fast travel",
  },
  {
    id: "vault-cores",
    label: "Where to get Vault Cores",
  },
  {
    id: "where-to-place-lodestones",
    label: "Where to place Lodestones",
  },
  {
    id: "law-rune-cost",
    label: "Why Law Rune cost changes",
  },
  {
    id: "burrow-fast-travel",
    label: "Free burrow travel",
  },
  {
    id: "law-runes",
    label: "How to manage Law Runes",
  },
  {
    id: "home-teleport",
    label: "Home Teleport",
  },
  {
    id: "vault-core-priority",
    label: "When to spend a Vault Core",
  },
  {
    id: "forward-network",
    label: "When to build forward",
  },
];

const relatedLinks = [
  {
    href: "/runescape-dragonwilds",
    label: "RuneScape: Dragonwilds Guide",
  },
  {
    href: "/runescape-dragonwilds/beginner-guide",
    label: "RuneScape: Dragonwilds Beginner Guide",
  },
  {
    href: "/runescape-dragonwilds/starter-base",
    label: "Starter Base Location and Layout",
  },
  {
    href: "/runescape-dragonwilds/scorned-wilderness",
    label: "Scorned Wilderness Walkthrough",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="RuneScape Dragonwilds Fast Travel: Lodestones & Vault Cores"
          description="Build a useful Lodestone network, farm Vault Cores without wasting inventory space, manage Law Rune costs, and know when another forward teleport point is worth the materials."
          gameTitle="RuneScape: Dragonwilds"
          gameHref="/runescape-dragonwilds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RuneScapeDragonwildsFastTravelContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}