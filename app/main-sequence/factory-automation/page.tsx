
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainSequenceFactoryAutomationContent from "@/data/main-sequence/factory-automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/main-sequence`;
const pageUrl = `${hubUrl}/factory-automation`;

const metadataTitle =
  "Main Sequence Factory Automation: Power, Belts & Production";

const metadataDescription =
  "Fix Main Sequence power and Conveyor problems, configure Container Buffers, automate Superalloy and Coolant, and supply Advanced Circuits and Protomatter.";

const articleTitle =
  "Main Sequence Factory Automation: How Do You Fix Production Bottlenecks?";

const articleDescription =
  "Keep your station powered, connect Refineries and Assemblers, manage Containers, fix stalled Conveyors, and produce Superalloy, Superconductor Coils, Coolant, Advanced Circuits, and Silica from Protomatter.";

const imageUrls = [
  `${siteUrl}/images/main-sequence/main-sequence-expandable-factory-layout.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-superalloy-enrichment-layout.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-superconductor-coils-production.webp`,
];

const heroImage = imageUrls[0];

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
    images: [
      {
        url: heroImage,
        alt: "Main Sequence expandable factory layout with connected production equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};

const toc = [
  {
    id: "factory-layout",
    label: "Expandable Factory Layout",
  },
  {
    id: "ore-production",
    label: "Titanium, Nickel & Components",
  },
  {
    id: "power-and-fuel",
    label: "Station Power & Hydrogen Fuel",
  },
  {
    id: "conveyors-and-ports",
    label: "Conveyors & Machine Ports",
  },
  {
    id: "storage-buffer-limit",
    label: "Container Buffer & Limit",
  },
  {
    id: "superalloy-production",
    label: "Superalloy Production",
  },
  {
    id: "coolant-production",
    label: "Coolant & Superconductor Coils",
  },
  {
    id: "advanced-production",
    label: "Advanced Circuits & Frames",
  },
  {
    id: "relic-synthesis",
    label: "Protomatter & Silica",
  },
  {
    id: "production-bottlenecks",
    label: "Production Troubleshooting",
  },
  {
    id: "factory-expansion",
    label: "When to Expand Your Factory",
  },
];

const relatedLinks = [
  {
    href: "/main-sequence",
    label: "Beginner Guide: First Station & Progression",
  },
  {
    href: "/main-sequence/research-progression",
    label: "Research Progression: Science & Unlocks",
  },
  {
    href: "/main-sequence/ship-logistics",
    label: "Ship Logistics: Cargo Supply & Autopilot",
  },
  {
    href: "/main-sequence/ship-design",
    label: "Ship Design: Cargo Capacity & Propulsion",
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
          name: "Main Sequence",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Factory Automation",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-21",
      dateModified: "2026-11-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Main Sequence",
        },
        {
          "@type": "Thing",
          name: "Station power and Hydrogen Fuel",
        },
        {
          "@type": "Thing",
          name: "Conveyor and machine-port configuration",
        },
        {
          "@type": "Thing",
          name: "Container Buffers and Limits",
        },
        {
          "@type": "Thing",
          name: "Superalloy and Superconductor Coil production",
        },
        {
          "@type": "Thing",
          name: "Coolant and Advanced Circuits",
        },
        {
          "@type": "Thing",
          name: "Relic Synthesis and Protomatter",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Main Sequence"
          gameHref="/main-sequence"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MainSequenceFactoryAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
