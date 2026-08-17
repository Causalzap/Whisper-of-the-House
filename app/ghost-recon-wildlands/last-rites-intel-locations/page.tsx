import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LastRitesIntelLocationsContent from "@/data/ghost-recon-wildlands/last-rites-intel-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ghost-recon-wildlands`;
const pageUrl = `${hubUrl}/last-rites-intel-locations`;

const metadataTitle =
  "Ghost Recon Wildlands Last Rites Intel Locations Guide";

const metadataDescription =
  "Find every Last Rites intel trigger, including Unidad, Vargas, the hidden Data Server, drone clue, and final Penitentes stronghold intel.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-unidad-outpost-intel.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-black-site-intel.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-victor-vargas-bodycam.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-secret-room-data-server.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-drone-listen-cultist.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-last-rites-stronghold-intel.webp`,
];

const toc = [
  {
    id: "what-counts-as-intel",
    label: "What counts as intel",
  },
  {
    id: "unidad-outpost-intel",
    label: "Unidad outpost intel",
  },
  {
    id: "black-site-intel",
    label: "Black site intel",
  },
  {
    id: "vargas-bodycam",
    label: "Vargas bodycam & laptop",
  },
  {
    id: "villa-data-server",
    label: "Hidden Data Server",
  },
  {
    id: "cultist-drone-intel",
    label: "Drone cultist clue",
  },
  {
    id: "high-level-cultist",
    label: "High-level cultist",
  },
  {
    id: "stronghold-intel",
    label: "Penitentes stronghold intel",
  },
  {
    id: "intel-not-progressing",
    label: "Intel not progressing",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands",
    label: "Ghost Recon Wildlands Guide Hub",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-walkthrough",
    label: "Last Rites Walkthrough",
  },
  {
    href: "/ghost-recon-wildlands/ghost-parameters",
    label: "Ghost Parameters Guide",
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
    title: "Ghost Recon Wildlands Last Rites Intel Locations",
    description:
      "Follow the Last Rites investigation chain from the Unidad outpost to Victor Vargas, the hidden Data Server, cultist clues, and final Penitentes intel.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Operation Lazarus Collect Intel objective inside the Unidad outpost in Ghost Recon Wildlands Last Rites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands Last Rites Intel Locations",
    description:
      "Find the Unidad intel, Vargas bodycam, hidden Data Server, drone clue, and final Penitentes stronghold intel without searching every room.",
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
          name: "Last Rites Intel Locations",
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
        "Ghost Recon Wildlands Last Rites Intel Locations and Investigation Triggers",
      description:
        "A practical Ghost Recon Wildlands Last Rites intel locations guide covering the mission-required investigation chain from the Operation: Lazarus Unidad outpost and black site to Victor Vargas' bodycam and laptop, the hidden Data Server in Deadly Obsession, the drone eavesdrop objective in And Your Enemies Closer, the Vow of Silence high-level cultist interrogation, and the final Penitentes stronghold intel in With Extreme Prejudice. It also explains how to identify which investigation trigger was missed when Last Rites stops progressing.",
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
          name: "Last Rites intel locations",
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
          name: "Victor Vargas",
        },
        {
          "@type": "Thing",
          name: "Last Rites Data Server",
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
          name: "Penitentes stronghold intel",
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
          title="Where I Find Every Last Rites Intel Trigger"
          description="I follow each clue until it creates the next destination, from the first Unidad documents to Vargas' hidden Data Server, the drone eavesdrop, and the final Penitentes stronghold intel."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LastRitesIntelLocationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}