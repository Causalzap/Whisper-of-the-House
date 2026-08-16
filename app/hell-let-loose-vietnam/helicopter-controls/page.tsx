import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HelicopterControlsContent from "@/data/hell-let-loose-vietnam/helicopter-controls.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/helicopter-controls`;

const metadataTitle =
  "Hell Let Loose Vietnam Helicopter Controls & Landing Guide";

const metadataDescription =
  "Learn pitch, roll, yaw, Collective, takeoff, landing, Transport and Supply Helicopters, recon flares, Helipad repair, and common flight fixes.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-helicopter-controls-keybinds.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-helicopter-pitch-roll-yaw.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-helicopter-landing-hover-collective.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-helicopter-copilot-supply-drop.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-helicopter-helipad-engine-off.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-transport-helicopter-recon-flare.webp`,
];

const toc = [
  {
    id: "helicopter-controls",
    label: "Helicopter controls",
  },
  {
    id: "takeoff",
    label: "How I take off",
  },
  {
    id: "pitch-roll-yaw",
    label: "Pitch, roll & yaw",
  },
  {
    id: "collective",
    label: "How Collective works",
  },
  {
    id: "how-to-land",
    label: "How I land",
  },
  {
    id: "landing-too-fast",
    label: "Fix landing overshoots",
  },
  {
    id: "hot-landing-zone",
    label: "Landing under fire",
  },
  {
    id: "supply-helicopter",
    label: "Supply Helicopter",
  },
  {
    id: "helipad-resupply",
    label: "Helipad repair & resupply",
  },
  {
    id: "transport-helicopter",
    label: "Transport Helicopter",
  },
  {
    id: "recon-flare",
    label: "Recon Flare",
  },
  {
    id: "hq-helicopter-spawn",
    label: "HQ helicopter spawn",
  },
  {
    id: "dont-hover-too-long",
    label: "When I leave the area",
  },
  {
    id: "helicopter-not-working",
    label: "Helicopter troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/usa-commander-guide",
    label: "USA Commander Guide",
  },
  {
    href: "/hell-let-loose-vietnam/achievements",
    label: "Achievements Guide",
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
    title: "Hell Let Loose Vietnam Helicopter Controls & Landing Guide",
    description:
      "Learn the helicopter controls I use for takeoff, landing, Collective, Supply and Transport work, Recon Flares, Helipad recovery, and common flight problems.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam helicopter controls showing pitch roll yaw and Collective bindings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam Helicopter Controls Guide",
    description:
      "Learn pitch, roll, yaw and Collective, then practice safer takeoffs, landings, supply runs, Transport flights, Recon Flares, and Helipad recovery.",
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
          name: "Hell Let Loose: Vietnam Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Helicopter Controls Guide",
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
        "Hell Let Loose Vietnam Helicopter Controls Guide: Takeoff, Landing, Collective and Recon",
      description:
        "A practical Hell Let Loose: Vietnam helicopter guide covering pitch, roll, yaw, Collective, default PC flight bindings, safe takeoff, hover and landing technique, landing overshoots, tree clearance, hot landing zones, Supply and Transport Helicopters, co-pilot supply drops, Recon Flares, HQ helicopter spawning, Helipad repair and resupply, pilot communication, and common helicopter troubleshooting.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-16",
      dateModified: "2026-08-16",
      articleSection: "Hell Let Loose: Vietnam Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Hell Let Loose: Vietnam",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam helicopter controls",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam helicopter landing",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam helicopter takeoff",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Collective",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam pitch roll yaw",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Transport Helicopter",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Supply Helicopter",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Recon Flare",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Helipad",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam helicopter repair",
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
          title="How I Fly and Land Helicopters Without Fighting the Controls"
          description="I separate pitch, roll, yaw, and Collective first, slow the helicopter before descending, and give every Transport or Supply flight a clear job before leaving the Helipad."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HelicopterControlsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}