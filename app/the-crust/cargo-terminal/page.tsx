import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustCargoTerminalContent from "@/data/the-crust/cargo-terminal.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-crust`;
const pageUrl = `${hubUrl}/cargo-terminal`;

const metadataTitle =
  "The Crust Cargo Terminal Guide: Rover LPS & Cargo Dock";

const metadataDescription =
  "Find the Cargo Terminal with the Rover LPS, fix missing-location problems, investigate it, and understand the later Cargo Dock, MDR, and Cargo Truck route.";

const articleDescription =
  "A The Crust Version 1.0 guide to finding and investigating the Cargo Terminal with the Rover Lunar Proximity Scanner, fixing common search and battery problems, distinguishing the Cargo Terminal from the Cargo Dock, and setting up later MDR and Cargo Truck logistics.";

const imageUrls = [
  `${siteUrl}/images/the-crust/the-crust-cargo-terminal-rover-lps.webp`,
  `${siteUrl}/images/the-crust/the-crust-cargo-terminal-coordinates.webp`,
  `${siteUrl}/images/the-crust/the-crust-rover-no-power-night.webp`,
  `${siteUrl}/images/the-crust/the-crust-cargo-terminal-found.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "find-cargo-terminal",
    label: "Find the Cargo Terminal",
  },
  {
    id: "lps-scanner",
    label: "How the Rover LPS works",
  },
  {
    id: "cargo-terminal-not-showing",
    label: "Cargo Terminal not showing",
  },
  {
    id: "rover-power",
    label: "Rover battery & power",
  },
  {
    id: "investigate-cargo-terminal",
    label: "Investigate the terminal",
  },
  {
    id: "after-cargo-terminal",
    label: "What to do next",
  },
  {
    id: "terminal-vs-dock",
    label: "Cargo Terminal vs Cargo Dock",
  },
  {
    id: "cargo-dock-mdr",
    label: "Cargo Dock & MDR route",
  },
  {
    id: "cargo-terminal-stuck",
    label: "Diagnose the blocker",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/walkthrough",
    label: "The Crust 1.0 Walkthrough",
  },
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/contracts-guide",
    label: "Contracts & Online Market Guide",
  },
  {
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Rover using the LPS to locate the Cargo Terminal in The Crust",
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
          name: "The Crust",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cargo Terminal Guide",
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
        "The Crust Cargo Terminal Guide: Rover LPS and Cargo Dock",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-13",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Crust",
        },
        {
          "@type": "Thing",
          name: "Cargo Terminal",
        },
        {
          "@type": "Thing",
          name: "Lunar Proximity Scanner",
        },
        {
          "@type": "Thing",
          name: "Rover",
        },
        {
          "@type": "Thing",
          name: "Cargo Dock",
        },
        {
          "@type": "Thing",
          name: "Mobile Drilling Rig",
        },
        {
          "@type": "Thing",
          name: "Cargo Truck",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
          title="The Crust Cargo Terminal Guide: Rover LPS & Cargo Dock"
          description="Find the hidden Cargo Terminal with the Rover LPS, finish its investigation, then separate that story location from the Cargo Dock and MDR logistics you use later."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheCrustCargoTerminalContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}