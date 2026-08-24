
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PowerPlantWalkthroughContent from "@/data/no-more-room-in-hell-2/power-plant-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/power-plant-walkthrough`;

const metadataTitle =
  "No More Room in Hell 2 Power Plant Walkthrough";

const metadataDescription =
  "Power Plant walkthrough for both security overrides, Field Hospital, plant gate, Control Center, main console, Black Start, and extraction.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-east-gate.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-first-security-override.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-field-hospital.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-control-center.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-main-console.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-black-start-complete.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-power-plant-extraction.webp`,
];

const toc = [
  {
    id: "power-plant-route",
    label: "Power Plant route",
  },
  {
    id: "perimeter",
    label: "Perimeter gear",
  },
  {
    id: "first-security-override",
    label: "First security override",
  },
  {
    id: "field-hospital",
    label: "Field Hospital",
  },
  {
    id: "second-security-override",
    label: "Second security override",
  },
  {
    id: "plant-gate",
    label: "Plant gate",
  },
  {
    id: "control-center",
    label: "Control Center",
  },
  {
    id: "main-console",
    label: "Main console",
  },
  {
    id: "black-start",
    label: "Black Start",
  },
  {
    id: "power-plant-extraction",
    label: "Helicopter extraction",
  },
  {
    id: "power-plant-stuck",
    label: "If Power Plant is stuck",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/broadway-walkthrough",
    label: "Broadway Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/beaulieu-hospital-walkthrough",
    label: "Beaulieu Hospital Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/raven-rock-walkthrough",
    label: "Raven Rock Walkthrough",
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
    description:
      "Follow Power Plant through both security overrides, the Field Hospital virus-data upload, plant access, Control Center, main console, Black Start, and helicopter extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Power Plant access showing the Filtration Gate open in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Power Plant route for both security overrides, Field Hospital, Control Center, Black Start, and helicopter extraction.",
    images: [imageUrls[0]],
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
          name: "No More Room in Hell 2 Guide",
          item: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Power Plant Walkthrough",
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
        "No More Room in Hell 2 Power Plant Walkthrough",
      description:
        "A player-focused Power Plant walkthrough for No More Room in Hell 2 covering both required security overrides, the Field Hospital power and HERA virus-data upload, the East Gate and Filtration Gate access transition, Control Center, main console, Black Start restart sequence, and final helicopter extraction.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      articleSection: "No More Room in Hell 2 Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "Thing",
          name: "Power Plant",
        },
        {
          "@type": "Thing",
          name: "Power Plant security overrides",
        },
        {
          "@type": "Thing",
          name: "Power Plant Field Hospital",
        },
        {
          "@type": "Thing",
          name: "Power Plant Filtration Gate",
        },
        {
          "@type": "Thing",
          name: "Power Plant Control Center",
        },
        {
          "@type": "Thing",
          name: "Power Plant main console",
        },
        {
          "@type": "Thing",
          name: "Power Plant Black Start",
        },
        {
          "@type": "Thing",
          name: "Power Plant helicopter extraction",
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
          title="Power Plant Walkthrough: Overrides, Black Start & Extraction"
          description="The plant stays locked until both security overrides are complete. This is the route I use through the Field Hospital, plant gate, Control Center, main console, Black Start, and final helicopter extraction."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PowerPlantWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}