import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantEvacuationZoneContent from "@/data/control-resonant/evacuation-zone.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/evacuation-zone`;

const metadataTitle =
  "CONTROL Resonant Evacuation Procedures: Hiss Orbs & Arish";

const metadataDescription =
  "Destroy the three Hiss Orbs outside the Evac Building, reach Floors 12 and 15, find Arish, get Level 2 clearance, and restore the elevator.";

const articleDescription =
  "Reach the Evac Building from Central, destroy the three exterior Hiss Orbs, identify the source of the tremors, find Arish, obtain Security Clearance Level 2, and clear the elevator route.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-evacuation-civilians-source.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-evacuation-arish-found.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-evacuation-elevator-blocked.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "how-to-reach-evacuation-zone",
    label: "How to reach the Evacuation Zone",
  },
  {
    id: "three-hiss-orbs",
    label: "Three exterior Hiss Orbs",
  },
  {
    id: "enter-evac-building",
    label: "Enter the Evac Building",
  },
  {
    id: "floor-12-route",
    label: "Floor 12 route",
  },
  {
    id: "find-source-of-tremors",
    label: "Source of the tremors",
  },
  {
    id: "find-arish",
    label: "Find Arish",
  },
  {
    id: "get-arish-out",
    label: "Get Arish to the elevator",
  },
  {
    id: "level-2-keycard",
    label: "Level 2 Keycard",
  },
  {
    id: "escape-building",
    label: "Escape the Evac Building",
  },
  {
    id: "what-happens-next",
    label: "What happens next",
  },
  {
    id: "rewards",
    label: "Evacuation Procedures rewards",
  },
  {
    id: "evac-building-problems",
    label: "Doors, floors & elevator problems",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/into-the-sinkhole",
    label: "Into the Sinkhole",
  },
  {
    href: "/control-resonant/power-lines",
    label: "Power Lines",
  },
  {
    href: "/control-resonant/quests",
    label: "Main Missions & Side Stories",
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
          name: "Evacuation Procedures",
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
        "CONTROL Resonant Evacuation Procedures: Hiss Orbs & Arish",
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
          name: "Evacuation Procedures",
        },
        {
          "@type": "Thing",
          name: "Evacuation Zone",
        },
        {
          "@type": "Thing",
          name: "Evac Building",
        },
        {
          "@type": "Thing",
          name: "Hiss Orbs",
        },
        {
          "@type": "Thing",
          name: "Hiss resonance tremors",
        },
        {
          "@type": "Thing",
          name: "Simon Arish",
        },
        {
          "@type": "Thing",
          name: "Security Clearance Level 2",
        },
        {
          "@type": "Thing",
          name: "Level 2 Keycard",
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
          title="CONTROL Resonant Evacuation Procedures: Hiss Orbs, Arish & Level 2 Keycard"
          description="Reach the Evac Building, destroy all three exterior Hiss Orbs, climb through Floors 12 and 15, find Arish, and restore the elevator with Level 2 clearance."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantEvacuationZoneContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}