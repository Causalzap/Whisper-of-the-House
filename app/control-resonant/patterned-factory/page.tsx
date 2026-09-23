import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantPatternedFactoryContent from "@/data/control-resonant/patterned-factory.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/patterned-factory`;

const metadataTitle =
  "CONTROL Resonant Deserter Guide: Patterned Factory Boss";

const metadataDescription =
  "Enter the Patterned Factory, clear three heat tumors, beat the Deserter, stop its four magma sacs, and choose Ignite or Inferno.";

const articleDescription =
  "Reach the Patterned Factory in Central, follow the heat trail through the cooling tunnels, destroy all three pipe obstructions, defeat the Deserter, handle its four magma sacs, and choose between Ignite and Inferno.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-patterned-factory-heat-trail.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-patterned-factory-pipe-blockage.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-patterned-factory-empty-cooling-pool.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "enter-patterned-factory",
    label: "How to enter the Patterned Factory",
  },
  {
    id: "follow-heat",
    label: "Follow the heat trail",
  },
  {
    id: "clear-heat-tumors",
    label: "Destroy the three heat tumors",
  },
  {
    id: "cooling-pool",
    label: "Empty cooling pool",
  },
  {
    id: "service-tunnels",
    label: "Navigate the service tunnels",
  },
  {
    id: "reach-furnace",
    label: "Return to the furnace",
  },
  {
    id: "deserter",
    label: "The Central Resonant: Deserter",
  },
  {
    id: "beat-deserter",
    label: "How to beat the Deserter",
  },
  {
    id: "deserter-projectiles",
    label: "Deserter projectile attacks",
  },
  {
    id: "four-magma-sacs",
    label: "Destroy the four magma sacs",
  },
  {
    id: "deserter-rewards",
    label: "Ignite or Inferno",
  },
  {
    id: "lighter",
    label: "Lighter Artifact recipe",
  },
  {
    id: "required",
    label: "Is the Deserter required?",
  },
  {
    id: "factory-complete",
    label: "When the factory is complete",
  },
  {
    id: "stuck",
    label: "Factory & Deserter stuck fixes",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/central-checkpoint",
    label: "Central Checkpoint",
  },
];

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
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Patterned Factory & Deserter",
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
        "CONTROL Resonant Deserter Guide: Patterned Factory & Boss Fight",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-23",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Central Resonant",
        },
        {
          "@type": "Thing",
          name: "The Deserter",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant Patterned Factory",
        },
        {
          "@type": "Thing",
          name: "Patterned Factory heat tumors",
        },
        {
          "@type": "Thing",
          name: "Patterned Factory cooling pool",
        },
        {
          "@type": "Thing",
          name: "Deserter magma sacs",
        },
        {
          "@type": "Thing",
          name: "Ignite",
        },
        {
          "@type": "Thing",
          name: "Inferno",
        },
        {
          "@type": "Thing",
          name: "Lighter Artifact",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="CONTROL Resonant Deserter Guide: Patterned Factory & Boss Fight"
          description="Enter the Patterned Factory, clear the overheating route, destroy all three heat tumors, beat the Deserter, stop its four magma sacs from restoring health, and choose Ignite or Inferno."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantPatternedFactoryContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}