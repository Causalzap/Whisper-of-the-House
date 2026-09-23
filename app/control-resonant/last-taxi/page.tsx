import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantLastTaxiContent from "@/data/control-resonant/last-taxi.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/last-taxi`;

const metadataTitle =
  "CONTROL Resonant Last Taxi: All 7 Locations & Puzzles";

const metadataDescription =
  "Find all seven Last Taxi locations, solve every taxi light, Mold repair and shadow puzzle, reach Mila, and finish the final phone call.";

const articleDescription =
  "Find the seven anomalous taxis across Manhattan, answer Mila's phone, solve each three-round taxi puzzle, and finish The Last Taxi after the final Threshold.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-last-taxi-underpass-start.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-last-taxi-mila-payphone.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-last-taxi-different-car-puzzle.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-last-taxi-works",
    label: "How The Last Taxi works",
  },
  {
    id: "mila-phone",
    label: "Mila's phone",
  },
  {
    id: "puzzles-can-change",
    label: "Why taxi puzzles can change",
  },
  {
    id: "all-locations",
    label: "All 7 taxi locations",
  },
  {
    id: "downtown-taxi",
    label: "Downtown taxi",
  },
  {
    id: "central-taxi",
    label: "Central taxi",
  },
  {
    id: "evacuation-taxi",
    label: "Evacuation Zone taxi",
  },
  {
    id: "west-incursion-taxi",
    label: "West Incursion taxi",
  },
  {
    id: "park-taxi",
    label: "The Park taxi",
  },
  {
    id: "underpass-taxi",
    label: "Underpass taxi",
  },
  {
    id: "unknown-taxi",
    label: "Unknown taxi",
  },
  {
    id: "streetlight-puzzle",
    label: "Streetlight puzzle",
  },
  {
    id: "vehicle-lights-puzzle",
    label: "Vehicle lights puzzle",
  },
  {
    id: "roof-sign-puzzle",
    label: "Taxi roof sign puzzle",
  },
  {
    id: "flashing-pattern-puzzle",
    label: "Flashing pattern puzzle",
  },
  {
    id: "blackout-puzzle",
    label: "Blackout puzzle",
  },
  {
    id: "mold-repair-puzzle",
    label: "Mold repair puzzle",
  },
  {
    id: "shadow-puzzle",
    label: "Shadow puzzle",
  },
  {
    id: "correct-or-wrong",
    label: "Correct vs wrong taxi",
  },
  {
    id: "after-seven",
    label: "After all 7 taxis",
  },
  {
    id: "taxi-problems",
    label: "Last Taxi progression problems",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/map",
    label: "All 7 Map Zones",
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
          name: "The Last Taxi",
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
        "CONTROL Resonant Last Taxi: All 7 Locations & Puzzles",
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
          name: "The Last Taxi",
        },
        {
          "@type": "Thing",
          name: "Mila",
        },
        {
          "@type": "Thing",
          name: "Anomalous taxis",
        },
        {
          "@type": "Thing",
          name: "Downtown taxi",
        },
        {
          "@type": "Thing",
          name: "Central taxi",
        },
        {
          "@type": "Thing",
          name: "Evacuation Zone taxi",
        },
        {
          "@type": "Thing",
          name: "West Incursion Zone taxi",
        },
        {
          "@type": "Thing",
          name: "The Park taxi",
        },
        {
          "@type": "Thing",
          name: "Underpass taxi",
        },
        {
          "@type": "Thing",
          name: "Unknown taxi",
        },
        {
          "@type": "Thing",
          name: "Taxi light puzzles",
        },
        {
          "@type": "Thing",
          name: "Mold repair puzzle",
        },
        {
          "@type": "Thing",
          name: "Taxi shadow puzzle",
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
          title="CONTROL Resonant Last Taxi Guide: All 7 Locations & Puzzle Solutions"
          description="Find every anomalous taxi across Manhattan, solve each three-round light, Mold and shadow puzzle, reach Mila, and finish the final phone call."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantLastTaxiContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}