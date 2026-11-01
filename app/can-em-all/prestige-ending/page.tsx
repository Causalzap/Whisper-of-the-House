
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CanEmAllPrestigeEndingContent from "@/data/can-em-all/prestige-ending.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/can-em-all`;
const pageUrl = `${hubUrl}/prestige-ending`;

const metadataTitle =
  "Can 'Em All Prestige & Ending: How to Unlock Freedom";

const metadataDescription =
  "Learn when to sell your factory in Can 'Em All, what permanent upgrades survive a reset, and how to pay your debt and leave through the upstairs exit.";

const articleDescription =
  "Compare selling your factory with working toward Freedom in Can 'Em All. Check permanent upgrade points before resetting, find out which weapons and factory upgrades must be rebuilt, choose permanent bonuses such as Shiny Shipment and Cold Storage, and complete the regular factory upgrade tree to purchase Freedom at Last for $666,666,666 and leave through the upstairs exit.";

const imageUrls = [
  `${siteUrl}/images/can-em-all/can-em-all-factory-sale-prestige-offer.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-shiny-shipment-permanent-upgrade.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-overnight-persistence-upgrade.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-freedom-unlock-requirement.webp`,
  `${siteUrl}/images/can-em-all/can-em-all-freedom-final-purchase.webp`,
];

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
    description:
      "Sell your factory for permanent upgrade points, compare Prestige rewards, and unlock Freedom at Last for $666,666,666 to reach the ending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        alt: "Freedom at Last final upgrade in Can 'Em All showing the $666,666,666 purchase cost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Discover what survives Prestige, which permanent upgrades to buy, and how to clear your debt and leave the factory in Can 'Em All.",
    images: [imageUrls[3]],
  },
};

const toc = [
  {
    id: "prestige-or-freedom",
    label: "Prestige or Pay Off Debt?",
  },
  {
    id: "how-to-prestige",
    label: "How to Sell Your Factory",
  },
  {
    id: "what-resets",
    label: "What You Keep After Prestige",
  },
  {
    id: "best-permanent-upgrades",
    label: "Best Permanent Upgrades",
  },
  {
    id: "when-to-prestige-again",
    label: "When to Prestige Again",
  },
  {
    id: "unlock-freedom",
    label: "Unlock Freedom at Last",
  },
  {
    id: "exit-key-ending",
    label: "Exit Key & Ending",
  },
];

const relatedLinks = [
  {
    href: "/can-em-all",
    label: "Can 'Em All: Factory Upgrades & Automation",
  },
  {
    href: "/can-em-all/achievements",
    label: "Can 'Em All: All 12 Achievements & Hidden Unlocks",
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
          name: "Can 'Em All",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prestige & Ending",
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
        "How Do You Prestige and Get the Ending in Can 'Em All?",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-01",
      dateModified: "2026-11-01",
      about: [
        {
          "@type": "VideoGame",
          name: "Can 'Em All",
        },
        {
          "@type": "Thing",
          name: "Can 'Em All Prestige and factory reset",
        },
        {
          "@type": "Thing",
          name: "Permanent Upgrade Points and factory sale rewards",
        },
        {
          "@type": "Thing",
          name: "Shiny Shipment permanent upgrade",
        },
        {
          "@type": "Thing",
          name: "Cold Storage permanent upgrade",
        },
        {
          "@type": "Thing",
          name: "Freedom at Last final factory upgrade",
        },
        {
          "@type": "Thing",
          name: "Debt repayment and factory exit key",
        },
        {
          "@type": "Thing",
          name: "Can 'Em All ending",
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
          title="How Do You Prestige and Get the Ending in Can 'Em All?"
          description="Compare selling your factory with finishing your current run, choose permanent upgrades, and unlock the exit by completing the factory upgrade tree."
          gameTitle="Can 'Em All"
          gameHref="/can-em-all"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CanEmAllPrestigeEndingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
