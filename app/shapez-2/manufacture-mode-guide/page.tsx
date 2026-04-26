import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ManufactureModeGuideContent from "@/data/shapez-2/manufacture-mode-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/shapez-2`;
const pageUrl = `${gameUrl}/manufacture-mode-guide`;

export const metadata: Metadata = {
  title: "Shapez 2 Manufacture Mode Guide: Trade Stations & Vortex",
  description:
    "Master Manufacture Mode in Shapez 2 1.0! Learn to manage Dimensional Waste, optimize Trade Stations, and build the Grand Vortex Assembler.",
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
          name: "Shapez 2 Manufacture Mode Guide",
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
        "Shapez 2 Manufacture Mode Guide: Dimensional Waste, Trade Stations & Grand Vortex Assembler",
      description:
        "This Shapez 2 Manufacture Mode guide explains what to build first, whether to play Manufacture Mode or Classic Mode, how Dimensional Waste and Polishing Stations work, how Trade Stations fit into the 1.0 progression chain, what Donation Stations and Research Stations do, when to use alternate recipes, how to fix bottlenecks, and how the Grand Vortex Assembler works.",
      image: [
        `${siteUrl}/images/shapez-2/manufacture-mode-guide.webp`,
        `${siteUrl}/images/shapez-2/dimensional-waste-receiver.webp`,
        `${siteUrl}/images/shapez-2/polishing-station.webp`,
        `${siteUrl}/images/shapez-2/first-real-trade-station.webp`,
        `${siteUrl}/images/shapez-2/donation-station.webp`,
        `${siteUrl}/images/shapez-2/research-station.webp`,
        `${siteUrl}/images/shapez-2/grand-vortex-assembler.webp`,
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
          name: "Manufacture Mode",
        },
        {
          "@type": "Thing",
          name: "Dimensional Waste",
        },
        {
          "@type": "Thing",
          name: "Polishing Station",
        },
        {
          "@type": "Thing",
          name: "Trade Station",
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
          name: "Alternate Recipes",
        },
        {
          "@type": "Thing",
          name: "Grand Vortex Assembler",
        },
        {
          "@type": "Thing",
          name: "Classic Mode",
        },
        {
          "@type": "Thing",
          name: "Space Belts",
        },
        {
          "@type": "Thing",
          name: "Throughput",
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
          title="Shapez 2 Manufacture Mode Guide: Dimensional Waste, Trade Stations & Grand Vortex Assembler"
          description="Learn how to start Manufacture Mode in Shapez 2 1.0, what to build first, how Dimensional Waste and Polishing Stations work, when to add Trade Stations and research infrastructure, and how to scale toward the Grand Vortex Assembler."
          gameTitle="Shapez 2"
          gameHref="/shapez-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 26, 2026"
          toc={[
            {
              id: "manufacture-mode-at-a-glance",
              label: "Mode at a glance",
            },
            {
              id: "what-is-manufacture-mode",
              label: "What is Manufacture Mode?",
            },
            {
              id: "manufacture-mode-vs-classic-mode",
              label: "Manufacture vs Classic",
            },
            {
              id: "first-60-minutes",
              label: "First 60 minutes",
            },
            {
              id: "manufacture-mode-progression-map",
              label: "Progression map",
            },
            {
              id: "dimensional-waste-receiver",
              label: "Dimensional Waste",
            },
            {
              id: "polishing-station",
              label: "Polishing Stations",
            },
            {
              id: "trade-stations-in-manufacture-mode",
              label: "Trade Stations",
            },
            {
              id: "donation-station-and-research-station",
              label: "Donation and Research",
            },
            {
              id: "alternate-recipes",
              label: "Alternate recipes",
            },
            {
              id: "avoid-early-bottlenecks",
              label: "Bottleneck fixes",
            },
            {
              id: "grand-vortex-assembler",
              label: "Grand Vortex Assembler",
            },
            {
              id: "common-manufacture-mode-mistakes",
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
          <ManufactureModeGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
