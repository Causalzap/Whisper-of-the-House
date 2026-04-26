import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Shapez2GuideContent from "@/data/shapez-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/shapez-2`;
const pageUrl = gameUrl;

export const metadata: Metadata = {
  title:
    "Shapez 2 Guide: 1.0 Beginner Tips, Manufacture Mode, Wires, MAM and Logistics",
  description:
    "A complete Shapez 2 1.0 guide covering beginner progression, Manufacture Mode, Trade Stations, Wires, Belt Filters, MAMs, Space Belts, Trains, logistics, and common mistakes.",
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
        "Shapez 2 Guide: 1.0 Beginner Tips, Manufacture Mode, Wires, MAM and Logistics",
      description:
        "This Shapez 2 guide explains how to start in 1.0, what to build first, when to play Manufacture Mode, how Trade Stations and Trading Rockets fit into progression, why Wires and Belt Filters matter, when to build your first MAM, and how to think about Space Belts, Trains, and logistics.",
      image: [
        `${siteUrl}/images/shapez-2/shapez-2-guide.webp`,
        `${siteUrl}/images/shapez-2/manufacture-mode-trade-station.webp`,
        `${siteUrl}/images/shapez-2/wires-belt-filter.webp`,
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
          name: "Shapez 2 Guide",
        },
        {
          "@type": "Thing",
          name: "Shapez 2 1.0",
        },
        {
          "@type": "Thing",
          name: "Manufacture Mode",
        },
        {
          "@type": "Thing",
          name: "Trade Stations",
        },
        {
          "@type": "Thing",
          name: "Trading Rockets",
        },
        {
          "@type": "Thing",
          name: "Wires",
        },
        {
          "@type": "Thing",
          name: "Belt Filters",
        },
        {
          "@type": "Thing",
          name: "Make Anything Machine",
        },
        {
          "@type": "Thing",
          name: "Space Belts",
        },
        {
          "@type": "Thing",
          name: "Trains",
        },
        {
          "@type": "Thing",
          name: "Factory Automation",
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
          title="Shapez 2 Guide: 1.0 Beginner Tips, Manufacture Mode, Wires, MAM and Logistics"
          description="Learn how to start in Shapez 2 1.0, what to build first, when to try Manufacture Mode, and how Trade Stations, Wires, Belt Filters, MAMs, Space Belts, Trains, and logistics fit together."
          gameTitle="Shapez 2"
          gameHref="/shapez-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 26, 2026"
          toc={[
            {
              id: "shapez-2-1-0-at-a-glance",
              label: "1.0 at a glance",
            },
            {
              id: "recommended-reading-order",
              label: "Reading order",
            },
            {
              id: "beginner-route",
              label: "Beginner route",
            },
            {
              id: "what-to-build-first",
              label: "What to build first",
            },
            {
              id: "classic-vs-manufacture-mode",
              label: "Classic vs Manufacture",
            },
            {
              id: "manufacture-mode-basics",
              label: "Manufacture Mode basics",
            },
            {
              id: "trade-stations-and-trading-rockets",
              label: "Trade Stations",
            },
            {
              id: "wires-belt-filters-and-shape-readers",
              label: "Wires and filters",
            },
            {
              id: "first-mam-basics",
              label: "First MAM",
            },
            {
              id: "space-belts-trains-and-logistics",
              label: "Space Belts and Trains",
            },
            {
              id: "common-beginner-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/shapez-2/manufacture-mode-guide",
              label: "Shapez 2 Manufacture Mode Guide",
            },
            {
              href: "/shapez-2/trade-station-guide",
              label: "Shapez 2 Trade Station Guide",
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
          <Shapez2GuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
