import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BroadwayWalkthroughContent from "@/data/no-more-room-in-hell-2/broadway-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/broadway-walkthrough`;

const metadataTitle =
  "No More Room in Hell 2 Broadway Walkthrough";

const metadataDescription =
  "Broadway walkthrough for hard drives, CRC upload, Grocery Store objectives, Courthouse C4, bonfire timer, route variants, and extraction.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-escape-plans.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-sewer-route.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-safe-house.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-grocery-store-windows.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-courthouse-c4.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-timed-wood-objective.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-broadway-rooftop-extraction.webp`,
];

const toc = [
  {
    id: "broadway-route",
    label: "Broadway route",
  },
  {
    id: "escape-plans",
    label: "Escape plans",
  },
  {
    id: "sewer-route",
    label: "Sewer route",
  },
  {
    id: "crc-safe-zone",
    label: "CRC Safe Zone",
  },
  {
    id: "upload-crc-files",
    label: "Upload CRC files",
  },
  {
    id: "grocery-store",
    label: "Grocery Store",
  },
  {
    id: "grocery-store-priority",
    label: "Grocery Store priority",
  },
  {
    id: "courthouse",
    label: "Courthouse C4",
  },
  {
    id: "subway-variant",
    label: "Subway route variant",
  },
  {
    id: "timed-wood-objective",
    label: "Timed wood objective",
  },
  {
    id: "signal-extraction",
    label: "Signal extraction",
  },
  {
    id: "broadway-extraction",
    label: "Broadway extraction",
  },
  {
    id: "broadway-stuck",
    label: "If Broadway is stuck",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/combat-survival-guide",
    label: "Combat & Survival Guide",
  },
  {
    href: "/no-more-room-in-hell-2/pottsville-walkthrough",
    label: "Pottsville Walkthrough",
  },
  {
    href: "/no-more-room-in-hell-2/lewiston-walkthrough",
    label: "Lewiston Walkthrough",
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
    title: "No More Room in Hell 2 Broadway Walkthrough",
    description:
      "Follow Broadway through the CRC hard drives, Grocery Store, Courthouse C4, timed bonfire objective, route variations, and final extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Broadway escape plans objective in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No More Room in Hell 2 Broadway Walkthrough",
    description:
      "Broadway route guide for hard drives, Grocery Store objectives, Courthouse C4, the bonfire timer, route variants, and extraction.",
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
          name: "Broadway Walkthrough",
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
        "No More Room in Hell 2 Broadway Walkthrough",
      description:
        "A player-focused Broadway walkthrough for No More Room in Hell 2 covering escape plans, the sewer route, CRC Safe Zone hard drives, the 3-file CRC upload, Grocery Store security and first-floor objectives, the four Courthouse C4 placements, the subway route variant, the timed bonfire objective, extraction signaling, and Broadway's variable final extraction routes.",
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
          name: "Broadway",
        },
        {
          "@type": "Thing",
          name: "Broadway CRC Safe Zone",
        },
        {
          "@type": "Thing",
          name: "Broadway Grocery Store",
        },
        {
          "@type": "Thing",
          name: "Broadway Courthouse C4",
        },
        {
          "@type": "Thing",
          name: "Broadway subway route",
        },
        {
          "@type": "Thing",
          name: "Broadway extraction",
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
          title="Broadway Walkthrough: Grocery Store, C4, Bonfire & Extraction"
          description="Broadway can change its middle route between runs. This is how I follow the current objective through the CRC hard drives, Grocery Store, Courthouse or subway branch, timed bonfire, and final extraction without forcing the route from my previous clear."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BroadwayWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}