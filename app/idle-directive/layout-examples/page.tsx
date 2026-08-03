import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IdleDirectiveLayoutExamplesContent from "@/data/idle-directive/layout-examples.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/idle-directive`;
const pageUrl = `${hubUrl}/layout-examples`;

const publishedDate = "2026-08-03";
const modifiedDate = "2026-08-03";

const imageUrls = [
  `${siteUrl}/images/idle-directive/idle-directive-post-reset-bootstrap-layout.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-concentrator-six-energy-cells-layout.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-power-amplifier-harvester-layout.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-dual-resource-automation-layout.webp`,
];

export const metadata: Metadata = {
  title: "IDLE_DIRECTIVE Layout Examples and Placement Guide",
  description:
    "Copy four working IDLE_DIRECTIVE layouts for early power, Energy Cells, harvesting, and dual-resource automation without blocking upgrades.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: "Four Working IDLE_DIRECTIVE Layout Examples",
    description:
      "Use practical layouts for post-reset power, Concentrator clusters, amplified harvesting, and stationary Metal and Biomass automation.",
    publishedTime: `${publishedDate}T00:00:00+08:00`,
    modifiedTime: `${modifiedDate}T00:00:00+08:00`,
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "IDLE_DIRECTIVE Power Amplifier layout with neighbouring Harvesters and Salvagers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDLE_DIRECTIVE Layout Examples",
    description:
      "Choose a layout by its current job, preserve direct connections and amplifier sides, and rebuild before temporary equipment blocks progress.",
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
          name: "Layout Examples",
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
        "IDLE_DIRECTIVE Layout Examples for Power, Harvesting and Automation",
      description:
        "This IDLE_DIRECTIVE layout guide provides four practical Body Grid examples: a compact post-reset bootstrap machine for reaching Navigation, a Concentrator and Energy Cell cluster, a Power Amplifier harvesting wing for Salvagers and Harvesters, and a stationary base combining Scrap-to-Metal and Carcass-to-Biomass production. It explains how I reserve direct-contact positions, amplifier sides, Wiring lanes and storage buffers; where I place Batteries and containers; why I remove temporary Spinner equipment; how I identify a rising or falling resource bottleneck; and when a layout should be rebuilt instead of expanded.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: publishedDate,
      dateModified: modifiedDate,
      about: [
        {
          "@type": "VideoGame",
          name: "IDLE_DIRECTIVE",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE layout examples",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Body Grid layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE post-reset layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE bootstrap layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Concentrator layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Energy Cell layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Power Amplifier layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Harvester layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Salvager layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Metal automation layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Biomass automation layout",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Battery placement",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE storage placement",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Four Layouts I Rebuild Instead of Protecting Forever"
          description="Start with a compact power bridge, reserve valuable adjacent tiles, and replace temporary equipment as soon as the next layout solves a bigger bottleneck."
          gameTitle="IDLE_DIRECTIVE"
          gameHref="/idle-directive"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 3, 2026"
          toc={[
            {
              id: "choose-a-layout",
              label: "Choose a layout",
            },
            {
              id: "bootstrap-layout",
              label: "Post-reset bootstrap",
            },
            {
              id: "concentrator-layout",
              label: "Concentrator layout",
            },
            {
              id: "harvesting-layout",
              label: "Power Amplifier wing",
            },
            {
              id: "stationary-base-layout",
              label: "Stationary resource base",
            },
            {
              id: "battery-placement",
              label: "Battery placement",
            },
            {
              id: "storage-placement",
              label: "Storage placement",
            },
            {
              id: "leave-open-space",
              label: "Reserve expansion space",
            },
            {
              id: "when-to-rebuild",
              label: "When to rebuild",
            },
            {
              id: "layout-loop",
              label: "My layout loop",
            },
          ]}
          relatedLinks={[
            {
              href: "/idle-directive/automation-machines-guide",
              label: "Automation & Machines Guide",
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
          <IdleDirectiveLayoutExamplesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}