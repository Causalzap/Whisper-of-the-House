import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownFarmingAutomationContent from "@/data/doloc-town/farming-automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/farming-automation`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-manual-to-automatic-sprinkler.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-simple-generator-recipe.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-generator-battery-power-advice.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-automatic-sprinkler-insufficient-power.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-rubber-from-old-tires.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Farming Automation: Sprinklers, Power & Drones",
  description:
    "Automate farming in Doloc Town with sprinklers, generators, power storage, Rubber, Drone Stations, Farming Drones and troubleshooting.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Farming Automation Guide",
    description:
      "Build a reliable Doloc Town farm automation route from sprinklers and generators to Drone Stations, Farming Drones, and specialized logistics.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1280,
        height: 720,
        alt: "Doloc Town Automatic Sprinkler showing an insufficient power warning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Farming Automation Guide",
    description:
      "Sprinklers, generators, power, Rubber, Drone Stations, Farming Drones and automation troubleshooting in one practical route.",
    images: [imageUrls[3]],
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
          name: "Farming Automation",
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
        "Doloc Town Farming Automation Guide: Sprinklers, Generators, Power, Drone Stations, and Farming Drones",
      description:
        "A practical Doloc Town farming automation guide covering Manual and Automatic Sprinklers, the Simple Generator, farm power troubleshooting, Rubber production, the Automation Workbench, Basic Drone, Small and Large Automated Drone Stations, Farming Drones, specialized drones, and when automation is worth the material cost.",
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
          name: "Doloc Town farming automation",
        },
        {
          "@type": "Thing",
          name: "Automatic Sprinkler",
        },
        {
          "@type": "Thing",
          name: "Simple Generator",
        },
        {
          "@type": "Thing",
          name: "Farming Drone",
        },
        {
          "@type": "Thing",
          name: "Automated Drone Station",
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
    id: "manual-sprinkler",
    label: "Manual Sprinkler",
  },
  {
    id: "simple-generator",
    label: "Simple Generator",
  },
  {
    id: "fuel-and-battery",
    label: "Power and storage",
  },
  {
    id: "automatic-sprinkler",
    label: "Automatic Sprinkler",
  },
  {
    id: "rubber",
    label: "Make Rubber",
  },
  {
    id: "automation-workbench",
    label: "Automation Workbench",
  },
  {
    id: "basic-drone",
    label: "Basic Drone",
  },
  {
    id: "small-drone-station",
    label: "Small Drone Station",
  },
  {
    id: "farming-drone",
    label: "Farming Drone",
  },
  {
    id: "specialized-drones",
    label: "Specialized Drones",
  },
  {
    id: "large-drone-station",
    label: "Large Drone Station",
  },
  {
    id: "troubleshooting",
    label: "Automation troubleshooting",
  },
  {
    id: "when-to-stop",
    label: "When to stop expanding",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
  {
    href: "/doloc-town/acid-rain",
    label: "Acid Rain and Crop Protection",
  },
  {
    href: "/doloc-town/crop-genetics",
    label: "Crop Genetics Guide",
  },
  {
    href: "/doloc-town/environmental-modifier",
    label: "Environmental Modifier Guide",
  },
  {
    href: "/doloc-town/walkthrough",
    label: "Doloc Town Walkthrough",
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
          title="Doloc Town Farming Automation Guide"
          description="I automate only the chore that is actually wasting time: sprinklers first, then reliable power, then Drone Stations and specialized drones once the farm is large enough to justify them."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownFarmingAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}