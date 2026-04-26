import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SpaceBeltsTrainsGuideContent from "@/data/shapez-2/space-belts-trains-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/shapez-2`;
const pageUrl = `${gameUrl}/space-belts-trains-guide`;

export const metadata: Metadata = {
  title: "Shapez 2 Logistics Guide: Space Belts, Trains & Throughput",
  description:
    "Master logistics in Shapez 2 1.0! Learn when to use Space Belts vs. Trains, maximize throughput, manage loaders, and fix frustrating bottlenecks.",
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
          name: "Shapez 2 Space Belts and Trains Guide",
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
        "Shapez 2 Space Belts and Trains Guide: Throughput, Bottlenecks & Logistics",
      description:
        "This Shapez 2 Space Belts and Trains guide explains when to use Space Belts or trains, how to plan Space Belt throughput from tooltips, why Space Belts clog, how to extract full output, how Train Loaders, Unloaders, Wagons and Train Launcher work, why trains get stuck, what cargo trains should carry, and how logistics fit into Manufacture Mode.",
      image: [
        `${siteUrl}/images/shapez-2/space-belts-trains-guide.webp`,
        `${siteUrl}/images/shapez-2/space-belts-vs-trains.webp`,
        `${siteUrl}/images/shapez-2/space-belt-basic-connection.webp`,
        `${siteUrl}/images/shapez-2/space-belt-throughput-layers.webp`,
        `${siteUrl}/images/shapez-2/space-belt-bottleneck.webp`,
        `${siteUrl}/images/shapez-2/train-unlock.webp`,
        `${siteUrl}/images/shapez-2/train-route-overview.webp`,
        `${siteUrl}/images/shapez-2/train-loading-unloading.webp`,
        `${siteUrl}/images/shapez-2/train-bottleneck.webp`,
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
          name: "Space Belts",
        },
        {
          "@type": "Thing",
          name: "Trains",
        },
        {
          "@type": "Thing",
          name: "Train Loader",
        },
        {
          "@type": "Thing",
          name: "Train Unloader",
        },
        {
          "@type": "Thing",
          name: "Train Wagon",
        },
        {
          "@type": "Thing",
          name: "Train Launcher",
        },
        {
          "@type": "Thing",
          name: "Vortex Delivery",
        },
        {
          "@type": "Thing",
          name: "Throughput",
        },
        {
          "@type": "Thing",
          name: "Bottlenecks",
        },
        {
          "@type": "Thing",
          name: "Bulk Logistics",
        },
        {
          "@type": "Thing",
          name: "Manufacture Mode",
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
          title="Shapez 2 Space Belts and Trains Guide: Throughput, Bottlenecks & Logistics"
          description="Learn when to use Space Belts or trains in Shapez 2 1.0, how to plan throughput from tooltips, why Space Belts clog, how Train Loaders and Unloaders work, what trains should carry, and how to fix logistics bottlenecks."
          gameTitle="Shapez 2"
          gameHref="/shapez-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 26, 2026"
          toc={[
            {
              id: "logistics-at-a-glance",
              label: "Logistics at a glance",
            },
            {
              id: "space-belts-vs-trains",
              label: "Space Belts vs Trains",
            },
            {
              id: "what-are-space-belts",
              label: "What are Space Belts?",
            },
            {
              id: "space-belt-throughput",
              label: "Space Belt throughput",
            },
            {
              id: "why-space-belt-clogged",
              label: "Space Belt clogged",
            },
            {
              id: "extract-full-space-belt-throughput",
              label: "Extract full throughput",
            },
            {
              id: "what-are-trains",
              label: "What are Trains?",
            },
            {
              id: "train-logistics-basics",
              label: "Train basics",
            },
            {
              id: "train-loading-unloading",
              label: "Loading and unloading",
            },
            {
              id: "why-train-not-working",
              label: "Train not working",
            },
            {
              id: "best-cargo-for-trains",
              label: "Best train cargo",
            },
            {
              id: "space-belts-and-trains-in-manufacture-mode",
              label: "Manufacture Mode logistics",
            },
            {
              id: "common-logistics-mistakes",
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
          ]}
        >
          <SpaceBeltsTrainsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
