
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainSequenceContent from "@/data/main-sequence/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/main-sequence`;

const metadataTitle =
  "Main Sequence Guide: Beginner, Automation, Research & Ships";

const metadataDescription =
  "Start Main Sequence, build your first station, automate factory production, unlock new Science types, design ships, and set up cargo routes.";

const articleTitle =
  "Main Sequence Guide: How Do You Start and Progress?";

const articleDescription =
  "Build your Starter Station, unlock Mining Drones, fix factory production, progress through research, upgrade ships, and automate cargo deliveries.";

const imageUrls = [
  `${siteUrl}/images/main-sequence/main-sequence-starter-station-placement.webp`,
  `${siteUrl}/images/main-sequence/main-sequence-first-resource-scanner.webp`,
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
        alt: "Main Sequence Starter Station construction preview in an asteroid field",
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
    id: "first-steps",
    label: "What to Do First",
  },
  {
    id: "first-mining-trip",
    label: "First Mining Trip",
  },
  {
    id: "ship-crafting",
    label: "Craft Your First Materials",
  },
  {
    id: "starter-station",
    label: "Starter Station Location",
  },
  {
    id: "first-power-and-research",
    label: "First Power & Research",
  },
  {
    id: "first-automation",
    label: "First Automated Production",
  },
  {
    id: "mining-drones",
    label: "Unlock Mining Drones",
  },
  {
    id: "first-working-factory",
    label: "First Working Factory",
  },
  {
    id: "silica-and-circuits",
    label: "Silica & Basic Circuits",
  },
  {
    id: "ship-and-transport",
    label: "Shipyard & Cargo Transport",
  },
  {
    id: "beginner-troubleshooting",
    label: "Tutorial Troubleshooting",
  },
  {
    id: "where-to-go-next",
    label: "Where to Go Next",
  },
];

const relatedLinks = [
  {
    href: "/main-sequence/factory-automation",
    label: "Factory Automation: Power, Belts & Production",
  },
  {
    href: "/main-sequence/research-progression",
    label: "Research Progression: What to Unlock Next",
  },
  {
    href: "/main-sequence/ship-design",
    label: "Ship Design: Shipyard, Modules & Upgrades",
  },
  {
    href: "/main-sequence/ship-logistics",
    label: "Ship Logistics: Autopilot & Cargo Routes",
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
          name: "Starter Station construction",
        },
        {
          "@type": "Thing",
          name: "Titanium, Nickel and Water Ice mining",
        },
        {
          "@type": "Thing",
          name: "Hydrogen Fuel and station power",
        },
        {
          "@type": "Thing",
          name: "Logistics I and Mining Drones",
        },
        {
          "@type": "Thing",
          name: "Basic factory production and progression",
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
          <MainSequenceContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
