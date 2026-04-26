import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TradeStationGuideContent from "@/data/shapez-2/trade-station-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/shapez-2`;
const pageUrl = `${gameUrl}/trade-station-guide`;

export const metadata: Metadata = {
  title: "Shapez 2 Trade Station Guide: Ratios, Rockets & Recipes",
  description:
    "Master Trade Stations in Shapez 2 1.0. Learn optimal ratios, Trading Rocket mechanics, alternate recipes, and how to feed the Grand Vortex Assembler.",
  alternates: {
    canonical: pageUrl,
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
          name: "Shapez 2 Guide",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shapez 2 Trade Station Guide",
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
        "Shapez 2 Trade Station Guide: Ratios, Rockets & Alternate Recipes",
      description:
        "This Shapez 2 Trade Station guide explains how Trade Stations work in 1.0, how to supply them, how to read ratios and throughput, why Trading Rockets may not launch, how alternate recipes work, what Donation Stations and Research Stations do, and why the Grand Vortex Assembler is the final destination of the refined-shape chain.",
      image: [
        `${siteUrl}/images/shapez-2/trade-station-guide.webp`,
        `${siteUrl}/images/shapez-2/trade-station-supply-line.webp`,
        `${siteUrl}/images/shapez-2/trade-station-space-belt-ratio.webp`,
        `${siteUrl}/images/shapez-2/trade-station-bottleneck.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-26",
      about: [
        {
          "@type": "VideoGame",
          name: "shapez 2",
        },
        {
          "@type": "Thing",
          name: "Trade Station",
        },
        {
          "@type": "Thing",
          name: "Trading Rocket",
        },
        {
          "@type": "Thing",
          name: "Manufacture Mode",
        },
        {
          "@type": "Thing",
          name: "Trade Station Ratios",
        },
        {
          "@type": "Thing",
          name: "Throughput",
        },
        {
          "@type": "Thing",
          name: "Refined Shapes",
        },
        {
          "@type": "Thing",
          name: "Alternate Recipes",
        },
        {
          "@type": "Thing",
          name: "Donation Station",
        },
        {
          "@type": "Thing",
          name: "Research Station",
        },
        {
          "@type": "Thing",
          name: "Grand Vortex Assembler",
        },
        {
          "@type": "Thing",
          name: "Space Belts",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Shapez 2 Trade Station Guide: Ratios, Rockets & Alternate Recipes"
          description="Learn how Trade Stations work in Shapez 2 1.0, including input and output ratios, Space Belt throughput, Trading Rockets, alternate recipes, Donation Stations, Research Stations, refined shapes, and the Grand Vortex Assembler."
          gameTitle="Shapez 2"
          gameHref="/shapez-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 26, 2026"
          toc={[
            {
              id: "trade-station-system-at-a-glance",
              label: "System at a glance",
            },
            {
              id: "key-ratios-and-throughput-numbers",
              label: "Ratios and throughput",
            },
            {
              id: "manufacture-mode-progression-map",
              label: "Progression map",
            },
            {
              id: "when-do-trade-stations-unlock",
              label: "Unlock order",
            },
            {
              id: "how-to-supply-a-trade-station",
              label: "How to supply stations",
            },
            {
              id: "alternate-recipes-and-when-to-use-them",
              label: "Alternate recipes",
            },
            {
              id: "donation-station-and-research-station",
              label: "Donation and Research Stations",
            },
            {
              id: "trade-stations-and-trading-rockets",
              label: "Trading Rocket not launching",
            },
            {
              id: "grand-vortex-assembler",
              label: "Grand Vortex Assembler",
            },
            {
              id: "common-trade-station-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/shapez-2",
              label: "Shapez 2 Guide Hub",
            },
            {
              href: "/shapez-2/manufacture-mode-guide",
              label: "Shapez 2 Manufacture Mode Guide",
            },
            {
              href: "/shapez-2/wires-belt-filter-guide",
              label: "Shapez 2 Wires and Belt Filter Guide",
            },
            {
              href: "/shapez-2/mam-guide",
              label: "Shapez 2 MAM Guide",
            },
            {
              href: "/shapez-2/space-belts-trains-guide",
              label: "Shapez 2 Space Belts and Trains Guide",
            },
          ]}
        >
          <TradeStationGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
