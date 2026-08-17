import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GhostReconWildlandsContent from "@/data/ghost-recon-wildlands/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/ghost-recon-wildlands`;

const metadataTitle =
  "Ghost Recon Wildlands Guide: Last Rites & Predator";

const metadataDescription =
  "Use this 2026 Ghost Recon Wildlands guide for Last Rites, Intel, the ending, Predator, Ghost Parameters, settings, and the Definitive Edition.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-hub.webp`,
];

const guidePages = [
  {
    name: "Last Rites Walkthrough",
    url: `${pageUrl}/last-rites-walkthrough`,
    description:
      "Complete all six Last Rites missions, including the Data Server defense, drone objective, tripwires, final mine, and Ines extraction.",
  },
  {
    name: "Last Rites Intel Locations",
    url: `${pageUrl}/last-rites-intel-locations`,
    description:
      "Find the mission-required Unidad intel, Vargas evidence, hidden Data Server, cultist clues, and stronghold investigation triggers.",
  },
  {
    name: "Last Rites Ending Explained",
    url: `${pageUrl}/last-rites-ending-explained`,
    description:
      "Understand Ines Cortez, La Llorona, Emily Price, the martyr problem, the exfiltration order, and the final debrief.",
  },
  {
    name: "Predator Mission Guide",
    url: `${pageUrl}/predator-mission`,
    description:
      "Start The Jungle Moved in Caimanes, complete the investigation, beat Predator, escape the self-destruct, and unlock the Biomask.",
  },
  {
    name: "Ghost Parameters & Settings Guide",
    url: `${pageUrl}/ghost-parameters`,
    description:
      "Choose One Primary, Tactical Reload, Difficulty, HUD, squad, survival, and World settings for a 2026 replay.",
  },
  {
    name: "Ghost Recon Wildlands 2026 Update",
    url: `${pageUrl}/2026-update`,
    description:
      "See what changed in the free 2026 update and how it differs from the separate Definitive Edition bundle.",
  },
];

const toc = [
  {
    id: "start-here",
    label: "Where I start in 2026",
  },
  {
    id: "choose-guide",
    label: "Choose the right guide",
  },
  {
    id: "returning-player-route",
    label: "My returning-player route",
  },
  {
    id: "last-rites",
    label: "Last Rites",
  },
  {
    id: "last-rites-ending",
    label: "Last Rites ending",
  },
  {
    id: "predator",
    label: "Predator",
  },
  {
    id: "settings",
    label: "Ghost Parameters & settings",
  },
  {
    id: "update-vs-definitive",
    label: "Free update vs Definitive",
  },
  {
    id: "what-i-would-do-next",
    label: "What I would do next",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands/last-rites-walkthrough",
    label: "Last Rites Walkthrough",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-ending-explained",
    label: "Last Rites Ending Explained",
  },
  {
    href: "/ghost-recon-wildlands/predator-mission",
    label: "Predator Mission Guide",
  },
  {
    href: "/ghost-recon-wildlands/ghost-parameters",
    label: "Ghost Parameters & Settings",
  },
  {
    href: "/ghost-recon-wildlands/2026-update",
    label: "Ghost Recon Wildlands 2026 Update",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Ghost Recon Wildlands 2026 Guide Hub",
    description:
      "Start with Last Rites, solve its intel and ending, return to the regular campaign for Predator, then tune Ghost Parameters and the wider 2026 settings.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ghost Recon Wildlands 2026 free update with new and returning content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands 2026 Guide Hub",
    description:
      "Last Rites, Intel, ending explained, Predator, Ghost Parameters, settings, and the 2026 update in one returning-player guide hub.",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Ghost Recon Wildlands 2026 Guide Hub",
      description:
        "A returning-player Ghost Recon Wildlands guide hub for the 2026 update, Last Rites story and investigation, Last Rites ending, Predator mission, Ghost Parameters, gameplay settings, and the difference between the free update and Definitive Edition.",
      inLanguage: "en",
      image: imageUrls[0],
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: {
        "@type": "VideoGame",
        name: "Tom Clancy's Ghost Recon Wildlands",
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      hasPart: guidePages.map((guide) => ({
        "@type": "WebPage",
        name: guide.name,
        url: guide.url,
        description: guide.description,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guides`,
      name: "Ghost Recon Wildlands Guides",
      numberOfItems: guidePages.length,
      itemListElement: guidePages.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: guide.name,
          url: guide.url,
          description: guide.description,
        },
      })),
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
          title="My Ghost Recon Wildlands Returning-Player Route for 2026"
          description="I start with Last Rites, return to the regular campaign for Predator, then change only the settings that make the old Bolivia campaign worth playing again."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GhostReconWildlandsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}