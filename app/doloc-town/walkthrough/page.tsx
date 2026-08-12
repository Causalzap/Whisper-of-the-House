import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownWalkthroughContent from "@/data/doloc-town/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-opening-farm-plant-basins.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-river-valley-lockdown.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-river-valley-jetpack-double-jump.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-treaty-port-night-window.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-copper-pickaxe-upgrade.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Walkthrough: Main Story & Progression Guide",
  description:
    "Follow the Doloc Town main story from the farm through River Valley, Treaty Port, Wetlands and Old City, with tool gates, time windows and progression checks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Walkthrough and Progression Guide",
    description:
      "A practical Doloc Town main-story route covering the opening farm, River Valley, Jetpack, Treaty Port, Copper Pickaxe, Wetlands, Old City and major progression handoffs.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Doloc Town Jetpack acquired in River Valley with double jump unlocked",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Walkthrough and Progression Guide",
    description:
      "Follow the main story from the starting farm through River Valley, Treaty Port, Wetlands and Old City without wasting time on the wrong blocker.",
    images: [imageUrls[2]],
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
        "Doloc Town Walkthrough and Main Story Progression Guide: River Valley, Treaty Port, Wetlands, and Old City",
      description:
        "A player-focused Doloc Town walkthrough covering the main progression order from the opening farm through River Valley, the Guild and Jetpack, the Treaty Port night meeting, Copper Pickaxe story gate, Environmental Modifier handoff, Treaty Port repair, Wetlands progression, Old City Ruins, and late Environmental Modifier stages.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Doloc Town",
        },
        {
          "@type": "Thing",
          name: "Doloc Town walkthrough",
        },
        {
          "@type": "Thing",
          name: "Doloc Town main story",
        },
        {
          "@type": "Thing",
          name: "River Valley",
        },
        {
          "@type": "Thing",
          name: "Treaty Port",
        },
        {
          "@type": "Thing",
          name: "Wetlands",
        },
        {
          "@type": "Thing",
          name: "Old City Ruins",
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

const toc = [
  {
    id: "starting-farm",
    label: "Starting farm",
  },
  {
    id: "river-valley",
    label: "Open River Valley",
  },
  {
    id: "guild-jetpack-drone",
    label: "Guild, Jetpack and Combat Drone",
  },
  {
    id: "treaty-port-night",
    label: "Treaty Port night meeting",
  },
  {
    id: "copper-pickaxe",
    label: "Copper Pickaxe story gate",
  },
  {
    id: "eden-site-plan",
    label: "Eden site plan",
  },
  {
    id: "treaty-port-repair",
    label: "Repair Treaty Port",
  },
  {
    id: "wetlands",
    label: "Wetlands progression",
  },
  {
    id: "old-city",
    label: "Old City Ruins",
  },
  {
    id: "final-route",
    label: "Later story route",
  },
  {
    id: "stuck",
    label: "Progression troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/environmental-modifier",
    label: "Environmental Modifier Guide",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
  {
    href: "/doloc-town/acid-rain",
    label: "Acid Rain and Crop Protection",
  },
  {
    href: "/doloc-town/achievements",
    label: "Doloc Town Achievements Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Doloc Town Walkthrough and Progression Guide"
          description="I follow the main story from the starting farm through River Valley, Treaty Port, the Wetlands and Old City, switching to dedicated guides whenever a specific system becomes the real blocker."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}