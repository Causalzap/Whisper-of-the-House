import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Breathedge2AttendantPartsContent from "@/data/breathedge-2/attendant-parts.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/breathedge-2`;
const pageUrl = `${hubUrl}/attendant-parts`;

const imageUrls = [
  `${siteUrl}/images/breathedge-2/breathedge-2-broken-attendant.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-attendant-body-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-attendant-head-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-attendant-arm-bridge-landmark.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-attendant-arm-location.webp`,
  `${siteUrl}/images/breathedge-2/breathedge-2-attendant-completed.webp`,
];

export const metadata: Metadata = {
  title: "Breathedge 2 Attendant Parts: Body, Head & Arm Locations",
  description:
    "Find the Attendant body, head and hidden arm in the Outskirts, including the blue machinery bridge and three-orange-ball landmark.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Where to Find Every Attendant Part in Breathedge 2",
    description:
      "Find the body below the platform, the head near the train benches and the tiny missing arm beside the blue machinery bridge.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "Blue machinery bridge landmark used to find the missing Attendant arm in Breathedge 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathedge 2 Attendant Parts Locations",
    description:
      "Find the Attendant body, head and hidden arm and finish Assemble the Attendant in the Outskirts.",
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
          name: "Breathedge 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Attendant Parts Locations",
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
        "Breathedge 2 Attendant Parts Locations: Body, Head and Hidden Arm",
      description:
        "A Breathedge 2 Assemble the Attendant guide showing where to find the body, head and tiny missing arm in the Station Outskirts, including the blue machinery bridge and three orange balls landmark.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-31",
      dateModified: "2026-08-31",
      about: [
        {
          "@type": "VideoGame",
          name: "Breathedge 2",
        },
        {
          "@type": "Thing",
          name: "Assemble the Attendant",
        },
        {
          "@type": "Thing",
          name: "Attendant Body",
        },
        {
          "@type": "Thing",
          name: "Attendant Head",
        },
        {
          "@type": "Thing",
          name: "Attendant Arm",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Where I Find Every Attendant Part in the Outskirts"
          description="Find the body below the station platform, the head near the train benches and the tiny arm beside the blue machinery bridge."
          gameTitle="Breathedge 2"
          gameHref="/breathedge-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 31, 2026"
          toc={[
            {
              id: "assemble-attendant",
              label: "All three Attendant parts",
            },
            {
              id: "attendant-body",
              label: "Attendant body location",
            },
            {
              id: "attendant-head",
              label: "Attendant head location",
            },
            {
              id: "attendant-arm",
              label: "Attendant arm location",
            },
            {
              id: "cant-find-arm",
              label: "If the arm is still missing",
            },
            {
              id: "complete-attendant",
              label: "Complete the Attendant",
            },
          ]}
          relatedLinks={[
            {
              href: "/breathedge-2",
              label: "Breathedge 2 Guide Hub",
            },
            {
              href: "/breathedge-2/outskirts-walkthrough",
              label: "Outskirts Walkthrough",
            },
            {
              href: "/breathedge-2/antenna-locations",
              label: "Three Antennas & Debris Locations",
            },
            {
              href: "/breathedge-2/oxygen-guide",
              label: "Oxygen Guide",
            },
          ]}
        >
          <Breathedge2AttendantPartsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}