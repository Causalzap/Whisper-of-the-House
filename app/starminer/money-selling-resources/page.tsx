import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoneySellingResourcesContent from "@/data/starminer/money-selling-resources.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer/money-selling-resources`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-trade-sell-resources.webp`,
  `${siteUrl}/images/starminer/starminer-reclamation-9-close-trade-range.webp`,
  `${siteUrl}/images/starminer/starminer-cargo-pods-transfer-short-trip.webp`,
  `${siteUrl}/images/starminer/starminer-silicates-repair-objective.webp`,
  `${siteUrl}/images/starminer/starminer-build-menu-solar-battery.webp`,
  `${siteUrl}/images/starminer/starminer-sell-price-perk-advanced-trade.webp`,
  `${siteUrl}/images/starminer/starminer-merchant-buy-water.webp`,
];

const toc = [
  { id: "money-loop", label: "Early money loop" },
  { id: "how-to-sell", label: "Sell at Reclamation 9" },
  { id: "wait-for-transfer", label: "Cargo transfer" },
  { id: "trade-values", label: "Resource values" },
  { id: "what-to-sell", label: "What to sell first" },
  { id: "do-not-sell-silicates", label: "Keep silicates" },
  { id: "storage-and-mass", label: "Storage and mass" },
  { id: "spend-credits", label: "Spend credits" },
  { id: "missions", label: "Missions for credits" },
  { id: "sell-price-perk", label: "Sell price perk" },
  { id: "buying-supplies", label: "Buying supplies" },
  { id: "trade-problems", label: "Trade problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/starminer", label: "Starminer Guide Hub" },
  {
    href: "/starminer/beginner-first-hour",
    label: "Beginner First Hour Guide",
  },
  {
    href: "/starminer/how-to-mine-scanner-laser",
    label: "Mining, Scanner and Laser Guide",
  },
  {
    href: "/starminer/controls-dampeners-ship-spinning",
    label: "Controls, Dampeners and Ship Spinning Guide",
  },
  {
    href: "/starminer/power-heat-low-energy",
    label: "Power, Heat and Low Energy Guide",
  },
  {
    href: "/starminer/early-research-progression",
    label: "Early Research Progression Guide",
  },
];

export const metadata: Metadata = {
  title: "Starminer Money Guide: Sell Resources & Get Credits",
  description:
    "Learn how to make credits in Starminer: sell resources at Reclamation 9, choose what to keep, use missions, spend credits, and avoid trade mistakes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Money Guide: Sell Resources, Missions and Early Credits",
    description:
      "A practical Starminer money guide covering Reclamation 9 selling, resource values, what to keep, missions, sell price perks, emergency supplies and early credit spending.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer trade screen at Reclamation 9 showing resource prices and sell options.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Money Guide: Sell Resources & Get Credits",
    description:
      "Make credits in Starminer without selling the wrong materials: trade resources, use missions, keep repair materials and spend credits safely.",
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
          name: "Starminer Guide",
          item: `${siteUrl}/starminer`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Money and Selling Resources",
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
        "Starminer Money Guide: How to Sell Resources, Make Credits, Use Missions, Keep Key Materials and Spend Early Money Safely",
      description:
        "A player-focused Starminer money guide for Early Access. It explains how to make credits by mining useful loads, selling surplus resources at Reclamation 9, waiting for cargo transfer, reading early trade values, deciding what to sell or keep, avoiding mistakes with silicates, cobalt and research materials, using missions and side quests for credits and XP, choosing sell price perks such as Advanced Trade Negotiation, buying emergency supplies, and spending early credits on power, batteries, storage, hauler support, useful licenses and bottleneck fixes instead of risky overexpansion.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Money Guide" },
        { "@type": "Thing", name: "Starminer Credits" },
        { "@type": "Thing", name: "Selling Resources" },
        { "@type": "Thing", name: "Reclamation 9" },
        { "@type": "Thing", name: "Trade Screen" },
        { "@type": "Thing", name: "Eonite" },
        { "@type": "Thing", name: "Iron" },
        { "@type": "Thing", name: "Silicates" },
        { "@type": "Thing", name: "Cobalt" },
        { "@type": "Thing", name: "Thorium" },
        { "@type": "Thing", name: "Nuclear Fuel Cell" },
        { "@type": "Thing", name: "Missions" },
        { "@type": "Thing", name: "Side Quests" },
        { "@type": "Thing", name: "Advanced Trade Negotiation" },
        { "@type": "Thing", name: "Sell Price Perk" },
        { "@type": "Thing", name: "Emergency Supplies" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I sell resources in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Return to Reclamation 9 or a valid trade target, get close enough, open Trade, choose Sell, select the resource and amount, confirm the trade, then wait for the transfer to finish.",
          },
        },
        {
          "@type": "Question",
          name: "Why is nothing transferring after I sell in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may be too far away, using the wrong trade target, on the wrong tab, or not waiting long enough for cargo movement. Move closer and confirm the correct Sell order.",
          },
        },
        {
          "@type": "Question",
          name: "What should I sell first in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sell surplus or high-value resources you do not need soon. Keep enough iron, silicates and rare materials for repairs, blueprints and Research Lab preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell silicates in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not sell all of them. Silicates can be needed for repairs and construction, so keep a reserve before selling extras.",
          },
        },
        {
          "@type": "Question",
          name: "Is Eonite good to sell in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Eonite is a strong credit resource when you need money. In one shown trade, 20 Eonite sells for 2,400 credits. Make sure it is not needed for your current objective or next build before selling.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell Cobalt in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Be careful. Cobalt can be tied to more advanced module costs and Research Lab preparation, so check your next blueprint or research plan before selling it.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my ship handle worse after mining in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cargo adds mass. A heavier ship takes longer to move and stop, so return slowly and unload or sell before taking risky maneuvers.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make credits faster in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mine deliberately, sell surplus high-value resources, avoid wasting materials you need later, take suitable missions for credits and XP, and consider sell price perks if credits are your current bottleneck.",
          },
        },
        {
          "@type": "Question",
          name: "Do missions give credits in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, missions and side quests can be another credit and XP route. Use them when you need variety or rank progress, but check travel distance, combat risk, power and cargo space before accepting.",
          },
        },
        {
          "@type": "Question",
          name: "Is the sell price perk worth it in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you are credit-blocked. A sell price perk improves future sales, but it should not come before power or survival if your ship is already unstable.",
          },
        },
        {
          "@type": "Question",
          name: "What should I buy first with credits in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spend early credits on the bottleneck that blocks your next loop: power, battery capacity, storage, licenses, hauler support, emergency water or missing materials.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy water in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy water if your crew or ship operation needs it and you cannot safely solve the problem by mining or hauling. Keep enough credits for emergency supplies.",
          },
        },
        {
          "@type": "Question",
          name: "Should I hoard every resource in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Hoarding makes your ship heavy and slows progression. Keep useful reserves, then sell surplus to fund upgrades.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Make Credits Without Selling the Wrong Resources"
          description="Learn what to sell, what to keep, how Reclamation 9 trades work, when missions are worth doing, and how to spend early credits safely."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoneySellingResourcesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

