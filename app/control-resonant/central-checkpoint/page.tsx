import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantCentralCheckpointContent from "@/data/control-resonant/central-checkpoint.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/central-checkpoint`;

const metadataTitle =
  "CONTROL Resonant Central Checkpoint: Power Core Route";

const metadataDescription =
  "Move the electrical charge to Central Checkpoint by relaying it through Power Cores, find Baker, reach the rooftop Core, and stop the charge expiring.";

const articleDescription =
  "Restore the Central Checkpoint by transferring the electrical charge through each Power Core relay, finding Baker at the loading dock, reaching the rooftop Core, and completing the final run.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-central-checkpoint-servicing-diagram.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-central-checkpoint-baker-loading-dock.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-central-checkpoint-powered.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "why-charge-disappears",
    label: "Why the charge disappears",
  },
  {
    id: "how-power-core-charge-works",
    label: "How Power Core relays work",
  },
  {
    id: "first-relay",
    label: "First Power Core relay",
  },
  {
    id: "loading-dock",
    label: "Loading dock & Baker",
  },
  {
    id: "rooftop-core",
    label: "Rooftop Power Core",
  },
  {
    id: "fourth-core",
    label: "Final intermediate Core",
  },
  {
    id: "power-up-checkpoint",
    label: "Power the Central Checkpoint",
  },
  {
    id: "charge-keeps-disappearing",
    label: "Charge disappearing fixes",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/map",
    label: "Map & Mapping Pylons",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/power-lines",
    label: "Power Lines",
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
          name: "Central Checkpoint",
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
        "CONTROL Resonant Central Checkpoint: Power Core Route",
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
          name: "Central Checkpoint",
        },
        {
          "@type": "Thing",
          name: "Move the Charge to Central Checkpoint",
        },
        {
          "@type": "Thing",
          name: "Power Cores",
        },
        {
          "@type": "Thing",
          name: "Electrical charge",
        },
        {
          "@type": "Thing",
          name: "Baker",
        },
        {
          "@type": "Thing",
          name: "Downtown",
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
          title="CONTROL Resonant Central Checkpoint: Power Core Route"
          description="Relay the electrical charge through the Downtown Power Cores, find Baker, reach the rooftop Core, and deliver the final charge to Central Checkpoint."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantCentralCheckpointContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}