import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IdleDirectiveAutomationGuideContent from "@/data/idle-directive/automation-machines-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/idle-directive`;
const pageUrl = `${hubUrl}/automation-machines-guide`;

const imageUrls = [
  `${siteUrl}/images/idle-directive/idle-directive-spinner-repeater-early-power.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-biogenerator-direct-biocell-connection.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-scrap-furnace-metal-chain.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-carcass-biomass-biogenerator-chain.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-auto-explore-settings.webp`,
];

export const metadata: Metadata = {
  title: "IDLE_DIRECTIVE Automation Guide: Machines and Resource Chains",
  description:
    "Fix machine connections, automate Metal and Biomass, balance storage, use the Replicator, and configure Auto Explore in IDLE_DIRECTIVE.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How IDLE_DIRECTIVE Automation and Machine Connections Work",
    description:
      "Troubleshoot inactive machines, build sustainable Metal and Biomass chains, compare real output rates, and configure Auto Explore safely.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "IDLE_DIRECTIVE automated Scrap storage and Furnace II Metal production chain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDLE_DIRECTIVE Automation and Machines Guide",
    description:
      "Fix Repeaters and Biogenerators, balance resource chains, use the Replicator, and stop Auto Explore from breaking the machine.",
    images: [imageUrls[2]],
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
          name: "IDLE_DIRECTIVE Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automation and Machines Guide",
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
        "IDLE_DIRECTIVE Automation Guide: Machine Connections, Resource Chains and Auto Explore",
      description:
        "This IDLE_DIRECTIVE automation guide explains why powered machines can remain inactive and how to build reliable production chains. It covers direct Spinner and Repeater connections, Biogenerator and Biocell fuel requirements, Collector, Grabber, Salvager and Harvester roles, automated Scrap-to-Metal and Carcass-to-Biomass production, real source and processing rates, amplifier adjacency, storage bottlenecks, Replicator decisions, Taskmaster return, Auto Explore settings and the checks I use before leaving a machine unattended.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-03",
      dateModified: "2026-08-03",
      about: [
        {
          "@type": "VideoGame",
          name: "IDLE_DIRECTIVE",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE automation guide",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE machine connections",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Spinner and Repeater",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Biogenerator and Biocell",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Collector",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Grabber",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Salvager",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Harvester",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE automated Metal",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE automated Biomass",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Furnace II",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Decomposer II",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Replicator",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Taskmaster",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Auto Explore",
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
          title="How I Make Every Machine Work Before I Automate the Map"
          description="Check direct connections, valid POIs and storage first, then balance Metal, Biomass and Energy before leaving Auto Explore unattended."
          gameTitle="IDLE_DIRECTIVE"
          gameHref="/idle-directive"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 3, 2026"
          toc={[
            {
              id: "connection-rules",
              label: "Connection rules",
            },
            {
              id: "spinner-repeater",
              label: "Spinner and Repeater",
            },
            {
              id: "biogenerator-not-working",
              label: "Fix the Biogenerator",
            },
            {
              id: "collection-machines",
              label: "Collection machines",
            },
            {
              id: "automated-metal",
              label: "Automated Metal",
            },
            {
              id: "automated-biomass",
              label: "Automated Biomass",
            },
            {
              id: "amplifiers",
              label: "Amplifiers",
            },
            {
              id: "upgrade-duplicate-replace",
              label: "Upgrade or replace",
            },
            {
              id: "storage-bottlenecks",
              label: "Storage bottlenecks",
            },
            {
              id: "replicator-taskmasters",
              label: "Replicator and Taskmasters",
            },
            {
              id: "auto-explore",
              label: "Auto Explore settings",
            },
            {
              id: "automation-readiness",
              label: "Unattended automation",
            },
          ]}
          relatedLinks={[
            {
              href: "/idle-directive/layout-examples",
              label: "Working Layout Examples",
            },
            {
              href: "/idle-directive/first-prestige-best-augments",
              label: "Best Augments & First Prestige",
            },
            {
              href: "/idle-directive/achievements-guide",
              label: "All 43 Achievements",
            },
            {
              href: "/idle-directive",
              label: "IDLE_DIRECTIVE Progression Guide",
            },
          ]}
        >
          <IdleDirectiveAutomationGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}