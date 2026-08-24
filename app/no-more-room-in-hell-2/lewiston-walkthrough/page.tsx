import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LewistonWalkthroughContent from "@/data/no-more-room-in-hell-2/lewiston-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/lewiston-walkthrough`;

const metadataTitle =
  "No More Room in Hell 2 Lewiston Walkthrough";

const metadataDescription =
  "Lewiston walkthrough for Library and Catacombs, HERA bodies, Research Drives, Train Yard tracks, underground power, fuel, and extraction.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston-library-catacombs.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston-research-drives.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston-train-yard-objectives.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston-track-repair.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston-underground-power.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-lewiston-train-extraction.webp`,
];

const toc = [
  {
    id: "lewiston-route",
    label: "Lewiston route",
  },
  {
    id: "opening-route",
    label: "Opening route",
  },
  {
    id: "funeral-home",
    label: "Funeral Home",
  },
  {
    id: "catacombs-access-code",
    label: "Catacombs access code",
  },
  {
    id: "research-drives",
    label: "Research Drives",
  },
  {
    id: "train-or-boat",
    label: "Train or boat",
  },
  {
    id: "train-yard",
    label: "Train Yard objectives",
  },
  {
    id: "repair-tracks",
    label: "Repair train tracks",
  },
  {
    id: "underground-power",
    label: "Underground power",
  },
  {
    id: "train-fueling",
    label: "Train fueling",
  },
  {
    id: "prepare-train",
    label: "Prepare the train",
  },
  {
    id: "train-extraction",
    label: "Train extraction",
  },
  {
    id: "lewiston-stuck",
    label: "If Lewiston is stuck",
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
      "Follow Lewiston through the Library and Catacombs, HERA access-code search, four Research Drives, Train Yard repairs, underground power, fueling, and train or boat extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Lewiston Library and Catacombs objective in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Lewiston route for HERA bodies, Research Drives, Train Yard tracks, power, fuel, and the train or boat extraction branch.",
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
          name: "Lewiston Walkthrough",
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
        "No More Room in Hell 2 Lewiston Walkthrough",
      description:
        "A player-focused Lewiston walkthrough for No More Room in Hell 2 covering the Funeral Home, Library and Catacombs branch, Search HERA Bodies for Access Code 0/3, four Research Drives, the train or boat extraction split, Train Yard track repair, underground power, Train Fuel Valve, Train Fueling, Prepare Train for Extraction, and final train extraction.",
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
          name: "Lewiston",
        },
        {
          "@type": "Thing",
          name: "Lewiston Library",
        },
        {
          "@type": "Thing",
          name: "Lewiston Catacombs",
        },
        {
          "@type": "Thing",
          name: "Lewiston HERA access code",
        },
        {
          "@type": "Thing",
          name: "Lewiston Research Drives",
        },
        {
          "@type": "Thing",
          name: "Lewiston Train Yard",
        },
        {
          "@type": "Thing",
          name: "Lewiston underground power",
        },
        {
          "@type": "Thing",
          name: "Lewiston train fueling",
        },
        {
          "@type": "Thing",
          name: "Lewiston boat extraction",
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
          title="Lewiston Walkthrough: Library, Train Yard & Extraction"
          description="Lewiston can end by train or boat, so I wait for the current run to reveal its extraction branch. This route covers the Library and Catacombs, HERA access-code search, Research Drives, Train Yard tracks, underground power, fueling, and the final train extraction."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LewistonWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}