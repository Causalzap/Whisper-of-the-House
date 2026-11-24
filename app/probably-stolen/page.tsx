
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProbablyStolenContent from "@/data/probably-stolen/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/probably-stolen`;

const metadataTitle =
  "Probably Stolen Walkthrough & Guides Hub";

const metadataDescription =
  "Probably Stolen walkthrough and guides for all 9 starting scenarios, Day 1, rent, shop progression, Hydroponics, Aquaculture, and Store Buyout.";

const articleTitle =
  "Probably Stolen Walkthrough & Guides Hub: Start to Store Buyout";

const articleDescription =
  "Start and progress in Probably Stolen. Choose a scenario, survive rent, trade with customers, expand your shop, and find guides for farming, crafting, Security, achievements, and buying the Store Deed.";

const publishedDate = "2026-10-26";
const modifiedDate = "2026-11-22";

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
  },

  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const toc = [
  {
    id: "starting-scenarios",
    label: "Best Starting Scenarios",
  },
  {
    id: "first-day",
    label: "Day 1 & Trading Walkthrough",
  },
  {
    id: "display-case",
    label: "Display Case & Buyers",
  },
  {
    id: "rent",
    label: "Rent & Difficulty Settings",
  },
  {
    id: "perks",
    label: "Starting Perks",
  },
  {
    id: "appraisal",
    label: "Appraisal & Counterfeit Goods",
  },
  {
    id: "security",
    label: "Security & Contraband",
  },
  {
    id: "after-closing",
    label: "What to Do After Closing",
  },
  {
    id: "next-business",
    label: "Shop Progression & Upgrades",
  },
  {
    id: "shop-buyout",
    label: "Store Deed, Buyout & Mortgage",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen/furnace",
    label: "Furnace: Perfect Ingots, Quality & Blast Module",
  },
  {
    href: "/probably-stolen/wine-making",
    label: "Wine Making: Master Vintage, Recipes & Aging",
  },
  {
    href: "/probably-stolen/water-merchant-guide",
    label: "Water Merchant: Starting Route & Progression",
  },
  {
    href: "/probably-stolen/water-purification",
    label: "Water Purification: How to Make Pure Water",
  },
  {
    href: "/probably-stolen/hydroponics",
    label: "Hydroponics: Huge Nutrifruit & Gene Editing",
  },
  {
    href: "/probably-stolen/aquaculture",
    label: "Aquaculture: Fish Breeding, RAS & Caviar",
  },
  {
    href: "/probably-stolen/chemist",
    label: "Chemist: Dream Dust & Chemistry Recipes",
  },
  {
    href: "/probably-stolen/gunsmith",
    label: "Gunsmith: Custom Gun Orders & Modifications",
  },
  {
    href: "/probably-stolen/rat-breeding",
    label: "Rat Breeding: Food, Growth & Genetics",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money Making: Profit & Cash-Flow Planner",
  },
  {
    href: "/probably-stolen/security-investigation",
    label: "Security Investigations & Evidence",
  },
  {
    href: "/probably-stolen/factions",
    label: "Factions & Reputation Rewards",
  },
  {
    href: "/probably-stolen/keycards",
    label: "Keycards & Supply Crates",
  },
  {
    href: "/probably-stolen/achievements",
    label: "Achievements & 100% Checklist",
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
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#guide-collection`,

      url: pageUrl,
      name: metadataTitle,
      description: metadataDescription,
      inLanguage: "en",

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },

      mainEntity: {
        "@id": `${pageUrl}#article`,
      },

      hasPart: relatedLinks.map((link) => ({
        "@type": "WebPage",
        name: link.label,
        url: `${siteUrl}${link.href}`,
      })),

      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
    },

    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,

      mainEntityOfPage: {
        "@id": `${pageUrl}#guide-collection`,
      },

      headline: articleTitle,
      description: articleDescription,

      inLanguage: "en",

      datePublished: publishedDate,
      dateModified: modifiedDate,

      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Probably Stolen walkthrough",
        },
        {
          "@type": "Thing",
          name: "Starting scenarios and beginner progression",
        },
        {
          "@type": "Thing",
          name: "Day 1 shop trading and customer negotiation",
        },
        {
          "@type": "Thing",
          name: "Display Case and attracting buyers",
        },
        {
          "@type": "Thing",
          name: "Rent and difficulty settings",
        },
        {
          "@type": "Thing",
          name: "Starting Perks",
        },
        {
          "@type": "Thing",
          name: "Shop progression and upgrades",
        },
        {
          "@type": "Thing",
          name: "Counterfeit goods and appraisal",
        },
        {
          "@type": "Thing",
          name: "Security and contraband",
        },
        {
          "@type": "Thing",
          name: "Store Deed, buyout and mortgage",
        },
      ],

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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
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
          <ProbablyStolenContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
