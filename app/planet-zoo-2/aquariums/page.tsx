
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AquariumsContent from "@/data/planet-zoo-2/aquariums.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/aquariums`;

const metadataTitle =
  "Planet Zoo 2 Aquarium Guide: Build, Fill & Filter";

const metadataDescription =
  "Build a working aquarium in Planet Zoo 2. Fix missing water, connect filtration and power, set salinity and temperature, and introduce aquatic animals.";

const articleTitle =
  "Planet Zoo 2 Aquarium Guide: How to Build, Fill & Filter";

const articleDescription =
  "Learn to construct Aquarium enclosures, use Aquarium Staff Gates, connect powered filtration networks, set salinity and temperature, and prepare habitats for fish and sea turtles.";

const pageDescription =
  "Get your aquarium filled and working, then fix water filtration, power, temperature, and animal-care problems before moving aquatic species in.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/aquarium-staff-gate-water-fill.webp`,
  `${siteUrl}/images/planet-zoo-2/aquarium-underwater-tunnel-guest-gates.webp`,
  `${siteUrl}/images/planet-zoo-2/aquarium-shallow-pond-deep-staff-gate.webp`,
  `${siteUrl}/images/planet-zoo-2/aquarium-filtration-network.webp`,
  `${siteUrl}/images/planet-zoo-2/aquarium-water-temperature.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "build-aquarium",
    label: "Build and Fill an Aquarium",
  },
  {
    id: "editing-aquarium",
    label: "Edit an Aquarium & Add Tunnels",
  },
  {
    id: "gate-water-level",
    label: "Fix Gate Above Water Level",
  },
  {
    id: "filtration-network",
    label: "Connect a Filtration Network",
  },
  {
    id: "power-temperature",
    label: "Power & Water Temperature",
  },
  {
    id: "aquatic-animals",
    label: "Add Aquatic Animals",
  },
  {
    id: "shallow-aquarium",
    label: "Build Shallow Aquariums",
  },
  {
    id: "animal-health",
    label: "Fix Unhappy Aquatic Animals",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2 Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Nordic Fjords & Chapter 2 Walkthrough",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves & Ecosystems",
  },
  {
    href: "/planet-zoo-2/career-chapter-4",
    label: "Maluku Islands & Chapter 4 Walkthrough",
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
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    images: imageUrls,
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-20",
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
          name: "Planet Zoo 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Aquariums",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-15",
      dateModified:  "2026-10-20",
      articleSection: "Aquarium Construction and Management",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "VideoGame",
        name: "Planet Zoo 2",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
    },
  ],
};

export default function PlanetZoo2AquariumsPage() {
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
          description={pageDescription}
          gameTitle="Planet Zoo 2"
          gameHref="/planet-zoo-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AquariumsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
