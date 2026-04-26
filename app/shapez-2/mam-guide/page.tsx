import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MamGuideContent from "@/data/shapez-2/mam-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/shapez-2`;
const pageUrl = `${gameUrl}/mam-guide`;

export const metadata: Metadata = {
  title: "Shapez 2 MAM Guide: Global Receivers & Simulated Buildings",
  description:
    "Build your first MAM in Shapez 2 1.0! Master Global Receivers, simulated buildings, target signals, and complex shape logic with pins and crystals.",
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
          name: "Shapez 2 MAM Guide",
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
        "Shapez 2 MAM Guide: Global Receivers, Simulated Buildings & First MAM",
      description:
        "This Shapez 2 1.0 MAM guide explains how to build your first Make Anything Machine, how Global Sender and Global Receiver target signals work, what simulated buildings do, why NE orientation matters, how to use Belt Filters and Displays, how to handle pins, crystals and null logic, how to copy multiple MAMs safely, and how to troubleshoot common MAM problems.",
      image: [
        `${siteUrl}/images/shapez-2/mam-guide.webp`,
        `${siteUrl}/images/shapez-2/mam-blueprint-rebuild-1-0.webp`,
        `${siteUrl}/images/shapez-2/mam-control-panel-channels.webp`,
        `${siteUrl}/images/shapez-2/mam-pin-shape-logic.webp`,
        `${siteUrl}/images/shapez-2/mam-wrong-output-debug.webp`,
        `${siteUrl}/images/shapez-2/mam-throughput-train-load.webp`,
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
          name: "MAM",
        },
        {
          "@type": "Thing",
          name: "Make Anything Machine",
        },
        {
          "@type": "Thing",
          name: "Shapez 2 1.0",
        },
        {
          "@type": "Thing",
          name: "Global Receiver",
        },
        {
          "@type": "Thing",
          name: "Global Sender",
        },
        {
          "@type": "Thing",
          name: "Simulated Buildings",
        },
        {
          "@type": "Thing",
          name: "Simulated Unstacker",
        },
        {
          "@type": "Thing",
          name: "Simulated Rotator",
        },
        {
          "@type": "Thing",
          name: "NE Orientation",
        },
        {
          "@type": "Thing",
          name: "Target Signal",
        },
        {
          "@type": "Thing",
          name: "Display",
        },
        {
          "@type": "Thing",
          name: "Belt Filter",
        },
        {
          "@type": "Thing",
          name: "Pins",
        },
        {
          "@type": "Thing",
          name: "Crystals",
        },
        {
          "@type": "Thing",
          name: "Multiple MAMs",
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
          title="Shapez 2 MAM Guide: Global Receivers, Simulated Buildings & First MAM"
          description="Learn how to build your first Make Anything Machine in Shapez 2 1.0, including Global Receivers, simulated buildings, NE orientation, target signals, Belt Filters, pins, crystals, multiple MAMs, and troubleshooting."
          gameTitle="Shapez 2"
          gameHref="/shapez-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 26, 2026"
          toc={[
            {
              id: "mam-at-a-glance",
              label: "MAM at a glance",
            },
            {
              id: "what-is-a-mam",
              label: "What is a MAM?",
            },
            {
              id: "shapez-2-1-0-mam-notes",
              label: "1.0 MAM notes",
            },
            {
              id: "when-to-build-first-mam",
              label: "When to build one",
            },
            {
              id: "first-mam-vs-ultimate-mam",
              label: "First vs ultimate MAM",
            },
            {
              id: "first-mam-roadmap",
              label: "First MAM roadmap",
            },
            {
              id: "core-mam-components",
              label: "Core components",
            },
            {
              id: "global-receiver-target-signal",
              label: "Global Receiver",
            },
            {
              id: "simulated-buildings",
              label: "Simulated buildings",
            },
            {
              id: "target-signals-and-routing",
              label: "Target signals",
            },
            {
              id: "one-layer-or-one-quadrant-first",
              label: "First target scope",
            },
            {
              id: "pins-crystals-and-null-logic",
              label: "Pins and crystals",
            },
            {
              id: "why-your-mam-is-not-working",
              label: "MAM not working",
            },
            {
              id: "copying-and-multiple-mams",
              label: "Multiple MAMs",
            },
            {
              id: "scaling-mam-throughput",
              label: "Scaling throughput",
            },
            {
              id: "mam-in-manufacture-mode",
              label: "Manufacture Mode uses",
            },
            {
              id: "common-mam-mistakes",
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
              href: "/shapez-2/wires-belt-filter-guide",
              label: "Shapez 2 Wires and Belt Filter Guide",
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
              href: "/shapez-2/space-belts-trains-guide",
              label: "Shapez 2 Space Belts and Trains Guide",
            },
          ]}
        >
          <MamGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
