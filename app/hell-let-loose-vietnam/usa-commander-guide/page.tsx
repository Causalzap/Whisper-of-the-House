import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UsaCommanderGuideContent from "@/data/hell-let-loose-vietnam/usa-commander-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/usa-commander-guide`;

const metadataTitle =
  "Hell Let Loose Vietnam USA Commander Guide: Nodes & Abilities";

const metadataDescription =
  "Run USA Commander with better Nodes, backup Garrisons, helicopter jobs, 150-Munition Supply Drops, Napalm, Reinforce, Recon and Artillery timing.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-usa-commander-layered-garrisons.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-commander-resource-nodes.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-commander-outpost.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-usa-supply-drop-150-munitions.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-commander-reinforce-artillery.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-usa-commander-napalm-strike.webp`,
];

const toc = [
  {
    id: "first-three-minutes",
    label: "First three minutes",
  },
  {
    id: "get-nodes-up",
    label: "Build Resource Nodes",
  },
  {
    id: "assign-helicopters",
    label: "Assign helicopter jobs",
  },
  {
    id: "defense-before-offense",
    label: "Defense before offense",
  },
  {
    id: "watch-for-tunnel-pressure",
    label: "Watch for Tunnel pressure",
  },
  {
    id: "commander-outpost",
    label: "Commander Outpost",
  },
  {
    id: "commander-mobility",
    label: "Commander mobility",
  },
  {
    id: "manage-munitions",
    label: "150-Munition Supply Drop",
  },
  {
    id: "convert-resources",
    label: "Convert resources",
  },
  {
    id: "ability-timing",
    label: "Commander ability timing",
  },
  {
    id: "use-recon",
    label: "Recon",
  },
  {
    id: "reinforce",
    label: "Reinforce",
  },
  {
    id: "napalm",
    label: "Napalm",
  },
  {
    id: "artillery-strike",
    label: "Artillery Strike",
  },
  {
    id: "when-defense-collapses",
    label: "When defense collapses",
  },
  {
    id: "commander-priority-loop",
    label: "Commander priority loop",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/helicopter-controls",
    label: "Helicopter Controls Guide",
  },
  {
    href: "/hell-let-loose-vietnam/nva-tunnels-guide",
    label: "NVA Tunnels Guide",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
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
    title: "Hell Let Loose Vietnam USA Commander Guide",
    description:
      "Build the resource economy, assign useful helicopter jobs, protect the defensive spawn network, manage Munitions, and time Commander abilities around infantry pushes.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam USA Commander tactical map showing multiple friendly spawn routes around the defensive area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam USA Commander Guide",
    description:
      "Run USA Commander with better Nodes, spawn redundancy, helicopter assignments, resource spending, Napalm, Reinforce, Recon and Artillery timing.",
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
          name: "USA Commander Guide",
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
        "Hell Let Loose Vietnam USA Commander Guide: Nodes, Resources and Ability Timing",
      description:
        "A practical Hell Let Loose: Vietnam USA Commander guide covering the opening Commander loop, Resource Nodes, helicopter assignments, layered defensive Garrisons, NVA Tunnel pressure, the Commander Outpost, the 150-Munition USA Supply Drop, resource conversion, Recon, Reinforce, Napalm, Artillery Strike timing, and how to rebuild the defensive route when the spawn network collapses.",
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
          name: "Hell Let Loose Vietnam USA Commander",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Commander guide",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Resource Nodes",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Commander Outpost",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam USA Supply Drop",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam 150 Munitions Supply Drop",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Napalm",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Reinforce",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Commander Recon",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Artillery Strike",
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
          title="How I Run USA Commander Without Wasting Spawns or Munitions"
          description="I build the resource economy first, give helicopters real jobs, keep a second defensive route alive, and only spend Commander abilities when the infantry can turn them into map control."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UsaCommanderGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}