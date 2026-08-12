import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownEnvironmentalModifierContent from "@/data/doloc-town/environmental-modifier.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/environmental-modifier`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-core-extractor.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-core-sample-coordinates.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-environmental-modifier-machine.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-environmental-modifier-broken-wires.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-environmental-modifier-repair-instructions.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-basic-power-storage.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Environmental Modifier: Battery & Repair Guide",
  description:
    "Fix the Doloc Town Environmental Modifier with the Core Sample, 2 Small Batteries, 5 Electric Wires, circuit repair steps, and 30 Energy Phase 1.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Environmental Modifier Repair Guide",
    description:
      "Find the Core Extractor, craft the correct Small Batteries, repair the Environmental Modifier circuit, and finish Phase 1 at 30 Energy.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        width: 1280,
        height: 720,
        alt: "Doloc Town Environmental Modifier repair instructions requiring two Small Batteries and five Electric Wires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Environmental Modifier Repair Guide",
    description:
      "Core Extractor, Small Batteries, circuit troubleshooting, Core Sample, and Phase 1 in one progression route.",
    images: [imageUrls[4]],
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
          name: "Environmental Modifier",
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
        "Doloc Town Environmental Modifier Guide: Core Extractor, Small Batteries, Circuit Repair, and Phase 1",
      description:
        "A practical Doloc Town Environmental Modifier walkthrough covering the Core Extractor and Core Sample, how to locate the four-pillar machine, why normal Batteries do not satisfy the repair, how to unlock and craft Small Batteries, what to check when the rear-panel repair will not progress, and how to complete Phase 1 after the machine reaches 30 Energy.",
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
          name: "Environmental Modifier",
        },
        {
          "@type": "Thing",
          name: "Core Extractor",
        },
        {
          "@type": "Thing",
          name: "Small Battery",
        },
        {
          "@type": "Thing",
          name: "Environmental Modifier circuit repair",
        },
        {
          "@type": "Thing",
          name: "Environmental Modifier Phase 1",
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
  {
    id: "find-core-extractor",
    label: "Find the Core Extractor",
  },
  {
    id: "find-modifier",
    label: "Find the Environmental Modifier",
  },
  {
    id: "ask-modi",
    label: "Get Modi's repair instructions",
  },
  {
    id: "small-batteries",
    label: "Craft the Small Batteries",
  },
  {
    id: "repair-system",
    label: "Repair the electrical system",
  },
  {
    id: "repair-troubleshooting",
    label: "Repair troubleshooting",
  },
  {
    id: "phase-one",
    label: "Finish Phase 1",
  },
  {
    id: "next",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/walkthrough",
    label: "Doloc Town Walkthrough",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
  {
    href: "/doloc-town/acid-rain",
    label: "Acid Rain and Crop Protection",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
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
          title="Doloc Town Environmental Modifier Repair Guide"
          description="I follow the Core Extractor to the hidden Modifier, bring the correct Small Batteries, repair the rear circuit, then finish Phase 1 at 30 Energy without making extra return trips."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownEnvironmentalModifierContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}