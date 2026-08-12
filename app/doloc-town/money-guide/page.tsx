import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownMoneyGuideContent from "@/data/doloc-town/money-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/money-guide`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-money-mixed-seed-pack-100g.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-money-first-bag-upgrade-500g.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-money-quest-cash-reward.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-copper-pickaxe-upgrade.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-money-scrap-recycle-or-sell.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Money Guide: Gold, Spending & Early Priorities",
  description:
    "Make and protect Gold in Doloc Town with early spending priorities, bag upgrades, quests, selling vs recycling, crop income and broke recovery.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Money Guide",
    description:
      "A practical Doloc Town money route covering early Gold, bag upgrades, side quests, progression spending, scrap decisions, crop income and recovery after overspending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "Doloc Town first bigger bag upgrade costing 500G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Money Guide",
    description:
      "Early Gold priorities, 500G and 4,000G bag decisions, quests, sell-versus-recycle choices, progression spending and broke recovery.",
    images: [imageUrls[1]],
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Money Guide",
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
        "Doloc Town Money Guide: Early Gold, Bag Upgrades, Spending Priorities, Selling, Recycling, and Recovery",
      description:
        "A player-focused Doloc Town money guide covering the 100G mixed seed pack gamble, the first 500G bag upgrade, side-quest income, saving 1,500G for progression-critical tools, sell-versus-recycle decisions, materials I refuse to liquidate, crop income handoffs, fishing and processing decisions, the 4,000G bag tier, and a one-day recovery route after overspending.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Doloc Town",
        },
        {
          "@type": "Thing",
          name: "Doloc Town money",
        },
        {
          "@type": "Thing",
          name: "Gold",
        },
        {
          "@type": "Thing",
          name: "Bag upgrade",
        },
        {
          "@type": "Thing",
          name: "Side quests",
        },
        {
          "@type": "Thing",
          name: "Selling and recycling",
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
  { id: "first-money", label: "Protect early Gold" },
  { id: "first-bag", label: "First 500G bag upgrade" },
  { id: "side-quests", label: "Side-quest income" },
  { id: "progression-spending", label: "Progression spending" },
  { id: "scavenging", label: "Sell or recycle scrap" },
  { id: "what-not-to-sell", label: "What not to sell" },
  { id: "crop-money", label: "Crop income" },
  { id: "fish-and-processing", label: "Fishing and processing" },
  { id: "second-bag", label: "4,000G bag upgrade" },
  { id: "broke-recovery", label: "Broke recovery route" },
  { id: "money-priority", label: "Money priority rule" },
];

const relatedLinks = [
  { href: "/doloc-town", label: "Doloc Town Guide Hub" },
  { href: "/doloc-town/best-crops", label: "Best Crops and Profit Calculator" },
  { href: "/doloc-town/walkthrough", label: "Doloc Town Walkthrough" },
  { href: "/doloc-town/fishing-guide", label: "Doloc Town Fishing Guide" },
  { href: "/doloc-town/farming-automation", label: "Farming Automation Guide" },
  { href: "/doloc-town/environmental-modifier", label: "Environmental Modifier Guide" },
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
          title="Doloc Town Money Guide"
          description="I protect early Gold from bad purchases, stack quests with normal travel, save for real progression gates, keep scarce materials out of the sell box, and spend only when the purchase removes the current bottleneck."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownMoneyGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}