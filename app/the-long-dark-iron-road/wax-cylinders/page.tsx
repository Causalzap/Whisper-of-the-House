
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IronRoadWaxCylindersContent from "@/data/the-long-dark-iron-road/wax-cylinders.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-long-dark-iron-road`;
const pageUrl = `${hubUrl}/wax-cylinders`;

const metadataTitle =
  "Iron Road Wax Cylinders: All 16 Locations & Checklist";

const metadataDescription =
  "Find all 16 Wax Cylinders in The Long Dark: Iron Road, from the Fulmar and Port Remnant to the Train Shelter, Repair Depots, and railway cabins.";

const articleTitle =
  "Where Are All 16 Wax Cylinders in The Long Dark: Iron Road?";

const articleDescription =
  "Find every Wax Cylinder from 01 to 16, including church recordings, Train Shelter pickups, Track Section cabins, and the final Port Remnant location.";

const imageUrls = [
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-01-fulmar-cabin.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-02-port-remnant-lighthouse.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-11-port-remnant-boat.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-03-desecrated-church.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-04-05-desecrated-church.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-06-whale-bone-shrine.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-07-train-shelter-office.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-08-train-shelter-workbench.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-10-track-section-4-repair-depot.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-13-track-section-3-cabin.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-12-track-section-2-repair-depot.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-15-track-section-2-repair-depot.webp`,
  `${siteUrl}/images/the-long-dark-iron-road/wax-cylinder-16-port-remnant-locked-building.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "all-locations",
    label: "All 16 Wax Cylinder locations",
  },
  {
    id: "fulmar-port-remnant",
    label: "01, 02 & 11: Fulmar and Port Remnant",
  },
  {
    id: "church-whale-bones",
    label: "03–06: Church & Whale Bone Shrine",
  },
  {
    id: "train-shelter",
    label: "07–08: Train Shelter",
  },
  {
    id: "track-section-four",
    label: "09–10: Track Section Four",
  },
  {
    id: "track-section-three",
    label: "13: Track Section Three",
  },
  {
    id: "track-section-two",
    label: "12 & 15: Track Section Two",
  },
  {
    id: "track-section-one",
    label: "14: Track Section One",
  },
  {
    id: "return-port-remnant",
    label: "16: Return to Port Remnant",
  },
  {
    id: "missing-cylinders",
    label: "Find missing Wax Cylinders",
  },
  {
    id: "completion",
    label: "Confirm all 16 collected",
  },
];

const relatedLinks = [
  {
    href: "/the-long-dark-iron-road",
    label: "Iron Road: How to Start & Progress",
  },
  {
    href: "/the-long-dark-iron-road/anna-island-walkthrough",
    label: "Anna Island: Lighthouse to Train",
  },
  {
    href: "/the-long-dark-iron-road/prototype-train-guide",
    label: "Prototype Train: Driving & Repairs",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1346,
        height: 824,
        alt: "Wax Cylinder 01 inside the Fulmar cabin in The Long Dark: Iron Road",
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
          name: "The Long Dark: Iron Road",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wax Cylinders",
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
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      about: [
        {
          "@type": "VideoGame",
          name: "The Long Dark: Iron Road",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "All 16 Wax Cylinders",
        },
        {
          "@type": "Place",
          name: "Cauldron Island",
        },
        {
          "@type": "Place",
          name: "Port Remnant",
        },
        {
          "@type": "Place",
          name: "Desecrated Church",
        },
        {
          "@type": "Place",
          name: "Whale Bone Shrine",
        },
        {
          "@type": "Place",
          name: "Train Shelter",
        },
        {
          "@type": "Thing",
          name: "Anna Island railway",
        },
        {
          "@type": "Thing",
          name: "Wax Cylinder collection",
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
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="The Long Dark: Iron Road"
          gameHref="/the-long-dark-iron-road"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IronRoadWaxCylindersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
