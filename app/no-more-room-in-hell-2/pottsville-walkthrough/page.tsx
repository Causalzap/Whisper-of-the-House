import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PottsvilleWalkthroughContent from "@/data/no-more-room-in-hell-2/pottsville-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/pottsville-walkthrough`;

const metadataTitle =
  "No More Room in Hell 2 Pottsville Walkthrough";

const metadataDescription =
  "Pottsville walkthrough for Shady Pines, CRC tools, transformer repair, Gym holdout, Town Square research, water samples, and City Hall extraction.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-transformer-repair.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-community-center.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-gym-holdout.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-downtown-research.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-research-drive.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-city-hall-rooftop.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-pottsville-rooftop-extraction.webp`,
];

const toc = [
  {
    id: "pottsville-route",
    label: "Pottsville route",
  },
  {
    id: "shady-pines",
    label: "Shady Pines",
  },
  {
    id: "community-center",
    label: "Community Center",
  },
  {
    id: "gym-holdout",
    label: "Gymnasium holdout",
  },
  {
    id: "go-downtown",
    label: "Go downtown",
  },
  {
    id: "midtown-gate",
    label: "Midtown Gate",
  },
  {
    id: "town-square-research",
    label: "Town Square research",
  },
  {
    id: "scientist-and-research-drives",
    label: "Scientist & Research Drives",
  },
  {
    id: "water-samples",
    label: "Water Samples",
  },
  {
    id: "finish-research",
    label: "Finish research",
  },
  {
    id: "city-hall",
    label: "City Hall",
  },
  {
    id: "city-hall-extraction",
    label: "City Hall extraction",
  },
  {
    id: "pottsville-stuck",
    label: "If Pottsville is stuck",
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
    href: "/no-more-room-in-hell-2/power-plant-walkthrough",
    label: "Power Plant Walkthrough",
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
      "Follow Pottsville from Shady Pines and the Community Center rescue through the Gym holdout, Town Square research objectives, and City Hall rooftop extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Pottsville Shady Pines transformer objective in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Pottsville route for Shady Pines, the Gym holdout, Town Square research, Water Samples, Research Drives, and City Hall extraction.",
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
          name: "Pottsville Walkthrough",
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
        "No More Room in Hell 2 Pottsville Walkthrough",
      description:
        "A player-focused Pottsville walkthrough for No More Room in Hell 2 covering the Shady Pines Search Neighborhoods objective, CRC body tool search, transformer repair, Community Center survivor evacuation, Gymnasium holdout, Midtown Gate, Town Square research, Scientist search, Research Drives, two Water Samples, and City Hall rooftop helicopter extraction.",
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
          name: "Pottsville",
        },
        {
          "@type": "Thing",
          name: "Pottsville Shady Pines",
        },
        {
          "@type": "Thing",
          name: "Pottsville CRC tools",
        },
        {
          "@type": "Thing",
          name: "Pottsville transformer repair",
        },
        {
          "@type": "Thing",
          name: "Pottsville Community Center",
        },
        {
          "@type": "Thing",
          name: "Pottsville Gymnasium",
        },
        {
          "@type": "Thing",
          name: "Pottsville Midtown Gate",
        },
        {
          "@type": "Thing",
          name: "Pottsville Town Square research",
        },
        {
          "@type": "Thing",
          name: "Pottsville Research Drives",
        },
        {
          "@type": "Thing",
          name: "Pottsville Water Samples",
        },
        {
          "@type": "Thing",
          name: "Pottsville City Hall extraction",
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
          title="Pottsville Walkthrough: Gym, Research & City Hall"
          description="Pottsville starts with the Shady Pines rescue route, then turns into a downtown research mission. This is how I move through the CRC tools and transformer, Gym evacuation, Midtown Gate, Town Square research, and City Hall rooftop extraction without going to City Hall too early."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PottsvilleWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}