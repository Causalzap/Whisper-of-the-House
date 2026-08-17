import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LastRitesWalkthroughContent from "@/data/ghost-recon-wildlands/last-rites-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ghost-recon-wildlands`;
const pageUrl = `${hubUrl}/last-rites-walkthrough`;

const metadataTitle =
  "Ghost Recon Wildlands Last Rites Walkthrough";

const metadataDescription =
  "Complete all 6 Last Rites missions, including the Data Server defense, drone cultist objective, tripwires, old gold mine, and Ines extraction.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-briefing-la-llorona.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-data-upload-defense.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-drone-listen-cultist.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-tripwire-compound.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-old-gold-mine-exfiltrate.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-extract-ines-cortez.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-lead-ghost-reward.webp`,
];

const toc = [
  {
    id: "how-i-start-last-rites",
    label: "How I start Last Rites",
  },
  {
    id: "operation-lazarus",
    label: "1. Operation: Lazarus",
  },
  {
    id: "deadly-obsession",
    label: "2. Deadly Obsession",
  },
  {
    id: "ines-cortez",
    label: "Who Ines Cortez is",
  },
  {
    id: "and-your-enemies-closer",
    label: "3. And Your Enemies Closer",
  },
  {
    id: "vow-of-silence",
    label: "4. Vow of Silence",
  },
  {
    id: "with-extreme-prejudice",
    label: "5. With Extreme Prejudice",
  },
  {
    id: "the-price-of-freedom",
    label: "6. The Price of Freedom",
  },
  {
    id: "extract-ines-cortez",
    label: "Extract Ines Cortez",
  },
  {
    id: "last-rites-ending",
    label: "Last Rites ending",
  },
  {
    id: "last-rites-completion-reward",
    label: "Completion reward",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands",
    label: "Ghost Recon Wildlands Guide Hub",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-intel-locations",
    label: "Last Rites Intel Locations",
  },
  {
    href: "/ghost-recon-wildlands/ghost-parameters",
    label: "Ghost Parameters Guide",
  },
  {
    href: "/ghost-recon-wildlands/2026-update",
    label: "Ghost Recon Wildlands 2026 Update",
  },
  {
    href: "/ghost-recon-wildlands/predator-mission",
    label: "Predator Mission Guide",
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
    title: "Ghost Recon Wildlands Last Rites Walkthrough",
    description:
      "Follow all six Last Rites missions from Operation: Lazarus through The Price of Freedom, with the major objective traps, Data Server defense, and final extraction.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ghost Recon Wildlands Last Rites opening briefing with Emily Price and the La Llorona target",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands Last Rites Walkthrough",
    description:
      "Complete the 6 Last Rites missions, survive the Data Server upload, handle the drone and tripwire objectives, and extract Ines Cortez.",
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
          name: "Ghost Recon Wildlands Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Last Rites Walkthrough",
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
        "Ghost Recon Wildlands Last Rites Walkthrough: All 6 Missions",
      description:
        "A complete player-focused walkthrough for all six Ghost Recon Wildlands Last Rites missions: Operation: Lazarus, Deadly Obsession, And Your Enemies Closer, Vow of Silence, With Extreme Prejudice, and The Price of Freedom. It covers the Data Server upload defense, drone eavesdrop objective, tripwire compounds, Ines Cortez and La Llorona reveal, the change from terminate to exfiltrate, final extraction, approximately 1 hour clean-run completion time, and the Ghost Lead (REDACTED) completion unlock.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      articleSection: "Ghost Recon Wildlands Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tom Clancy's Ghost Recon Wildlands",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Last Rites",
        },
        {
          "@type": "Thing",
          name: "Last Rites walkthrough",
        },
        {
          "@type": "Thing",
          name: "Operation: Lazarus",
        },
        {
          "@type": "Thing",
          name: "Deadly Obsession",
        },
        {
          "@type": "Thing",
          name: "And Your Enemies Closer",
        },
        {
          "@type": "Thing",
          name: "Vow of Silence",
        },
        {
          "@type": "Thing",
          name: "With Extreme Prejudice",
        },
        {
          "@type": "Thing",
          name: "The Price of Freedom",
        },
        {
          "@type": "Thing",
          name: "Ines Cortez",
        },
        {
          "@type": "Thing",
          name: "La Llorona",
        },
        {
          "@type": "Thing",
          name: "Last Rites Data Server defense",
        },
        {
          "@type": "Thing",
          name: "Ghost Lead (REDACTED)",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Finish All 6 Last Rites Missions"
          description="I follow the investigation from the first Unidad intel through the Data Server defense, drone eavesdrop, tripwire compounds, old gold mine, and the final extraction of Ines Cortez."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LastRitesWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}