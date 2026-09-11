
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustCargoTerminalContent from "@/data/the-crust/cargo-terminal.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-crust/cargo-terminal`;

const metadataTitle =
  "The Crust Cargo Terminal Guide – Rover LPS & Location";

const metadataDescription =
  "Find the Cargo Terminal in The Crust with the Rover LPS, use the outer and inner scan correctly, investigate the site, and reach the Expedition Center step.";

const articleDescription =
  "A The Crust Version 1.0 Cargo Terminal guide covering the approximate coordinates, Rover Lunar Proximity Scanner, outer and inner LPS ranges, hidden-object search, Cargo Terminal investigation, Rover battery limits, and the Expedition Center progression that follows.";

const heroImage =
  `${siteUrl}/images/the-crust/the-crust-cargo-terminal-rover-lps.webp`;

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
    id: "investigate-cargo-terminal",
    label: "Investigate the terminal",
  },
  {
    id: "after-cargo-terminal",
    label: "What to do next",
  },
  {
    id: "rover-power",
    label: "Rover battery & power",
  },
];

const relatedLinks = [
  {
    href: "/the-crust/hope-2-choice",
    label: "Hope-2 Choice Guide",
  },
  {
    href: "/the-crust/beginners-guide",
    label: "The Crust Beginner Guide",
  },
  {
    href: "/the-crust/living-quarters",
    label: "Living Quarters Guide",
  },
  {
    href: "/the-crust/contracts-guide",
    label: "Contracts & Online Market Guide",
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
        width: 1600,
        height: 900,
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadataTitle,
    description: articleDescription,
    image: [heroImage],
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    dateModified: "2026-09-11",
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
      url: siteUrl,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  },
  {
    "@context": "https://schema.org",
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
        item: `${siteUrl}/the-crust`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cargo Terminal",
        item: pageUrl,
      },
    ],
  },
];

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
          title="The Crust Cargo Terminal Guide – Rover LPS & Location"
          description="Use the Rover LPS to turn the Cargo Terminal's approximate coordinates into an exact location, finish the investigation, and move cleanly into the Expedition Center step."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/the-crust"
          breadcrumbBaseLabel="The Crust"
          updatedAt="September 11, 2026"
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