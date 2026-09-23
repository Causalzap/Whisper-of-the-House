import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantTheParkContent from "@/data/control-resonant/the-park.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/the-park`;

const metadataTitle =
  "CONTROL Resonant Collective Guide: The Park Mold Route";

const metadataDescription =
  "Find all four Park Mold samples, open the Mold Gateway, beat the Collective, handle its tentacles and weak points, then choose Spore Burst or Growth.";

const articleDescription =
  "Reach The Park, collect the four required Mold strains from the Gateway, Minimart, Pizzeria and Gym, open the Mold Gateway, defeat the Collective, and choose between Spore Burst and Growth.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-the-park-entry.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-the-park-mold-gateway.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-the-park-final-mold.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "how-to-enter-the-park",
    label: "How to reach The Park",
  },
  {
    id: "start-park-resonant",
    label: "Start The Park Resonant",
  },
  {
    id: "minimart-mold",
    label: "Minimart Mold",
  },
  {
    id: "pizzeria-mold",
    label: "Pizzeria Mold",
  },
  {
    id: "gym-mold",
    label: "Gym Mold",
  },
  {
    id: "open-mold-gateway",
    label: "Open the Mold Gateway",
  },
  {
    id: "collective-boss",
    label: "How to beat the Collective",
  },
  {
    id: "collective-first-tentacles",
    label: "First wall tentacles",
  },
  {
    id: "collective-weak-points",
    label: "Collective weak points",
  },
  {
    id: "collective-wall-ceiling-phase",
    label: "Wall & ceiling phase",
  },
  {
    id: "collective-final-phase",
    label: "Final phase",
  },
  {
    id: "spore-burst-or-growth",
    label: "Spore Burst or Growth",
  },
  {
    id: "is-park-required",
    label: "Is The Park required?",
  },
  {
    id: "other-park-objectives",
    label: "Other Park activities",
  },
  {
    id: "stuck",
    label: "Park Resonant stuck fixes",
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
    href: "/control-resonant/search-for-jesse",
    label: "How to Find Jesse",
  },
  {
    href: "/control-resonant/last-taxi",
    label: "The Last Taxi",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
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
          name: "The Park & Collective",
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
        "CONTROL Resonant Collective Guide: The Park Mold Route & Boss Fight",
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
          name: "The Park Resonant",
        },
        {
          "@type": "Thing",
          name: "The Collective",
        },
        {
          "@type": "Thing",
          name: "CONTROL Resonant The Park",
        },
        {
          "@type": "Thing",
          name: "Mold Gateway",
        },
        {
          "@type": "Thing",
          name: "Minimart Mold",
        },
        {
          "@type": "Thing",
          name: "Pizzeria Mold",
        },
        {
          "@type": "Thing",
          name: "Gym Mold",
        },
        {
          "@type": "Thing",
          name: "Spore Burst",
        },
        {
          "@type": "Thing",
          name: "Growth",
        },
        {
          "@type": "Thing",
          name: "Infected status",
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
          title="CONTROL Resonant Collective Guide: The Park Mold Route & Boss Fight"
          description="Find all four Mold strains in The Park, open the Mold Gateway, destroy the Collective's tentacles and weak points, and choose Spore Burst or Growth after the fight."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantTheParkContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}