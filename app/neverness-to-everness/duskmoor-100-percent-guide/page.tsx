import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Duskmoor100Content from "@/data/neverness-to-everness/duskmoor-100-percent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl =
  `${siteUrl}/neverness-to-everness/duskmoor-100-percent-guide`;

const imageUrls = [
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-tower-start.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-check-in-80-kmh.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-fawn-alone-night-route.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-sunken-door-boat.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-mountain-last-stone.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-duskmoor-final-bridge-stone.webp`,
];

const toc = [
  {
    id: "duskmoor-100-route",
    label: "Start the 100% route",
  },
  {
    id: "oracle-stones",
    label: "All 50 Oracle Stones",
  },
  {
    id: "tower-city-loop",
    label: "Tower and city loop",
  },
  {
    id: "80-kmh-check-in",
    label: "80 km/h check-in",
  },
  {
    id: "eastern-night-loop",
    label: "Eastern night loop",
  },
  {
    id: "lake-crossroad-loop",
    label: "Crossroad and lake route",
  },
  {
    id: "teardrop-lake",
    label: "Teardrop Lake",
  },
  {
    id: "central-road",
    label: "Central Duskmoor",
  },
  {
    id: "finale-lantern-road",
    label: "Finale and Lantern road",
  },
  {
    id: "western-jumps",
    label: "Western jumps",
  },
  {
    id: "western-lake",
    label: "Western lake",
  },
  {
    id: "mountain-cleanup",
    label: "Mountain cleanup",
  },
  {
    id: "final-road",
    label: "Final road and bridge",
  },
  {
    id: "missing-oracle-stone",
    label: "Missing Oracle Stone",
  },
  {
    id: "stuck-below-100",
    label: "Still below 100%",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [
  {
    href: "/neverness-to-everness/duskmoor-anomaly-commissions",
    label: "Duskmoor Anomaly Commissions Guide",
  },
];

export const metadata: Metadata = {
  title: "NTE Duskmoor 100% Guide: All 50 Oracle Stones & Check-Ins",
  description:
    "Clear Duskmoor 100% in NTE 1.3 with all 50 Oracle Stones, check-ins, the 80 km/h speed check, road routing, and missing-progress fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "NTE Duskmoor 100% Guide: All 50 Oracle Stones & Check-Ins",
    description:
      "Follow a full Duskmoor route for all 50 Oracle Stones, check-ins, Teardrop Lake, western jumps, mountain cleanup, and the final bridge.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Wertheimer Tower starting point for the Duskmoor 100 percent exploration route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NTE Duskmoor 100% Guide: All 50 Oracle Stones & Check-Ins",
    description:
      "Clear all 50 Duskmoor Oracle Stones, check-ins, jumps, lake routes, and the common objectives that leave the map below 100%.",
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
          name: "Neverness to Everness",
          item: `${siteUrl}/neverness-to-everness`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Duskmoor 100% Guide",
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
        "NTE Duskmoor 100% Guide: All 50 Oracle Stones & Check-Ins",
      description:
        "A complete Neverness to Everness Duskmoor exploration route covering all 50 Oracle Stones, Wertheimer Tower, ReroRero Phone Booths, check-ins and jumps, the verified motorcycle speed requirement above 80 km/h, Teardrop Lake, the western roads, mountain cleanup, and the checks to make when Duskmoor still does not reach 100%.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      articleSection: "Neverness to Everness Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Neverness to Everness",
        },
        {
          "@type": "Thing",
          name: "Duskmoor",
        },
        {
          "@type": "Thing",
          name: "Duskmoor exploration",
        },
        {
          "@type": "Thing",
          name: "Duskmoor Oracle Stones",
        },
        {
          "@type": "Thing",
          name: "50 Oracle Stones",
        },
        {
          "@type": "Thing",
          name: "Wertheimer Tower",
        },
        {
          "@type": "Thing",
          name: "ReroRero Phone Booth",
        },
        {
          "@type": "Thing",
          name: "Duskmoor check-ins",
        },
        {
          "@type": "Thing",
          name: "Teardrop Lake",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Duskmoor 100% Guide: Clear All 50 Oracle Stones"
          description="Follow one Duskmoor road loop for all 50 Oracle Stones, check-ins and jumps, then use the final checks to find whatever is still keeping the district below 100%."
          gameTitle="Neverness to Everness"
          gameHref="/neverness-to-everness"
          updatedAt="September 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Duskmoor100Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}