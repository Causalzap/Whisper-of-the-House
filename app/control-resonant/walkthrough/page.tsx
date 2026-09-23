import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantWalkthroughContent from "@/data/control-resonant/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "CONTROL Resonant Walkthrough: Main Story & Progression";

const metadataDescription =
  "Follow CONTROL Resonant's main story from Manhattan and the CFD to the Underpass and Hedron, with fixes for Resonants, Jesse Faults and story gates.";

const articleDescription =
  "Follow the CONTROL Resonant main story from Orientation and Central through Evacuation Procedures, CFD preparation, Power Lines, the Sinkhole, required Resonants, the Underpass, Jesse Faults, and the Hedron crisis.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-zone-overview-watchtower.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-cfd-multi-objective-briefing.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-hedron-final-objective.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-progression-works",
    label: "How story progression works",
  },
  {
    id: "main-route",
    label: "Main story route at a glance",
  },
  {
    id: "opening",
    label: "Orientation & Manhattan",
  },
  {
    id: "central-checkpoint",
    label: "Central Checkpoint",
  },
  {
    id: "central-field-office",
    label: "Central Field Office",
  },
  {
    id: "evacuation-procedures",
    label: "Evacuation Procedures",
  },
  {
    id: "cfd-gate",
    label: "CFD progression gate",
  },
  {
    id: "power-lines",
    label: "Power Lines",
  },
  {
    id: "into-the-sinkhole",
    label: "Into the Sinkhole",
  },
  {
    id: "required-resonants",
    label: "Required Resonants",
  },
  {
    id: "cfd-test",
    label: "CFD test",
  },
  {
    id: "underpass",
    label: "Underpass",
  },
  {
    id: "jesse-progression",
    label: "Jesse Fault progression",
  },
  {
    id: "late-game",
    label: "Late-game progression",
  },
  {
    id: "hedron",
    label: "Hedron links",
  },
  {
    id: "ending",
    label: "After the final fight",
  },
  {
    id: "stuck",
    label: "Main story stuck fixes",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/quests",
    label: "Main Missions & Side Stories",
  },
  {
    href: "/control-resonant/resonants",
    label: "All Resonants",
  },
  {
    href: "/control-resonant/search-for-jesse",
    label: "Search for Jesse",
  },
  {
    href: "/control-resonant/underpass",
    label: "Underpass Walkthrough",
  },
  {
    href: "/control-resonant/hedron-link",
    label: "Hedron Link",
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
          name: "Main Story Walkthrough",
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
        "CONTROL Resonant Walkthrough: Main Story & Progression",
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
          name: "CONTROL Resonant walkthrough",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant main story",
        },
        {
          "@type": "Thing",
          name: "Orientation",
        },
        {
          "@type": "Thing",
          name: "Central Checkpoint",
        },
        {
          "@type": "Thing",
          name: "Evacuation Procedures",
        },
        {
          "@type": "Thing",
          name: "Cancellation Field Device",
        },
        {
          "@type": "Thing",
          name: "Power Lines",
        },
        {
          "@type": "Thing",
          name: "Into the Sinkhole",
        },
        {
          "@type": "Thing",
          name: "Enemy of My Enemy",
        },
        {
          "@type": "Thing",
          name: "Recursions and Iterations",
        },
        {
          "@type": "Thing",
          name: "Search for Jesse",
        },
        {
          "@type": "Thing",
          name: "The Hedron Link",
        },
        {
          "@type": "Thing",
          name: "Sever the Hedron Links",
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
          title="CONTROL Resonant Walkthrough: Main Story & Progression"
          description="Follow the story from Manhattan and the Central Field Office through the CFD, required Resonants, the Underpass, Jesse Faults, Unknown and the Hedron crisis, with fixes for the major progression gates."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}