import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RavenRockWalkthroughContent from "@/data/no-more-room-in-hell-2/raven-rock-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/raven-rock-walkthrough`;

const metadataTitle =
  "No More Room in Hell 2 Raven Rock Walkthrough";

const metadataDescription =
  "Raven Rock walkthrough for West Gate, 2B-1B-2C panels, Expansion Tunnel, Central Command, NEXRAD power, and Fast Rope extraction.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-west-gate-blast-door.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-blast-door-panels.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-central-command.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-green-lights-zipline.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-power-fuses.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-raven-rock-extraction.webp`,
];

const toc = [
  {
    id: "raven-rock-route",
    label: "Raven Rock route",
  },
  {
    id: "west-gate",
    label: "West Gate",
  },
  {
    id: "blast-door-controls",
    label: "Blast-door controls",
  },
  {
    id: "expansion-tunnel",
    label: "Expansion Tunnel",
  },
  {
    id: "objective-distance",
    label: "Objective distance",
  },
  {
    id: "reservoir-tunnel",
    label: "Reservoir Tunnel",
  },
  {
    id: "central-command",
    label: "Central Command",
  },
  {
    id: "expansion-tunnel-code",
    label: "Expansion Tunnel code",
  },
  {
    id: "green-lights",
    label: "Green-light route",
  },
  {
    id: "topside-power",
    label: "NEXRAD power",
  },
  {
    id: "final-extraction",
    label: "Fast Rope extraction",
  },
  {
    id: "raven-rock-stuck",
    label: "If Raven Rock is stuck",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/power-plant-walkthrough",
    label: "Power Plant Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/beaulieu-hospital-walkthrough",
    label: "Beaulieu Hospital Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/broadway-walkthrough",
    label: "Broadway Walkthrough",
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
      "Follow Raven Rock from West Gate through the blast-door controls, Expansion Tunnel, Central Command, green-light escape route, NEXRAD power, and Fast Rope extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Raven Rock West Gate and bunker blast-door objective in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Raven Rock route for West Gate, blast-door panels, Expansion Tunnel, Central Command, NEXRAD power, and Fast Rope extraction.",
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
          name: "Raven Rock Walkthrough",
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
        "No More Room in Hell 2 Raven Rock Walkthrough",
      description:
        "A player-focused Raven Rock multiplayer walkthrough for No More Room in Hell 2 covering West Gate, the 2B to 1B to 2C blast-door sequence, the Expansion Tunnel and water-pressure route, objective-distance navigation, Reservoir Tunnel, Central Command server and Bio-Scanner objectives, the run-specific PPJ Beta code example, green-light escape route, NEXRAD Station power restoration, and final Fast Rope extraction.",
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
          name: "Raven Rock",
        },
        {
          "@type": "Thing",
          name: "Raven Rock West Gate",
        },
        {
          "@type": "Thing",
          name: "Raven Rock blast-door controls",
        },
        {
          "@type": "Thing",
          name: "Raven Rock Expansion Tunnel",
        },
        {
          "@type": "Thing",
          name: "Raven Rock Reservoir Tunnel",
        },
        {
          "@type": "Thing",
          name: "Raven Rock Central Command",
        },
        {
          "@type": "Thing",
          name: "Raven Rock PPJ Beta code",
        },
        {
          "@type": "Thing",
          name: "Raven Rock NEXRAD Station",
        },
        {
          "@type": "Thing",
          name: "Raven Rock Fast Rope extraction",
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
          title="Raven Rock Walkthrough: Bunker, Central Command & Extraction"
          description="Raven Rock is easiest when I follow each bunker state change instead of memorizing the corridors. This route covers West Gate, the 2B → 1B → 2C controls, Expansion Tunnel, Central Command, the run-specific code step, NEXRAD power, and final Fast Rope."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RavenRockWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}