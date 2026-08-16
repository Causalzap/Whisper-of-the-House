import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HellLetLooseVietnamContent from "@/data/hell-let-loose-vietnam/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/hell-let-loose-vietnam`;

const metadataTitle =
  "Hell Let Loose Vietnam Guide: Beginner, Tunnels & More";

const metadataDescription =
  "Start with the beginner route, then solve spawn problems, NVA Tunnels, US helicopters, leadership locks, loadouts, Commander play, and achievements.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-tactical-map.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-network-live-map.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-transport-helicopter-recon-flare.webp`,
];

const toc = [
  {
    id: "first-match",
    label: "Start your first match",
  },
  {
    id: "running-too-much",
    label: "Running too much",
  },
  {
    id: "nva-tunnels",
    label: "NVA Tunnels",
  },
  {
    id: "us-helicopters",
    label: "US Helicopters",
  },
  {
    id: "leadership",
    label: "Unlock leadership",
  },
  {
    id: "usa-commander",
    label: "USA Commander",
  },
  {
    id: "progression",
    label: "Progression & loadouts",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "how-i-choose-next-guide",
    label: "Choose your next guide",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/nva-tunnels-guide",
    label: "NVA Tunnels Guide",
  },
  {
    href: "/hell-let-loose-vietnam/tutorial-connect-tunnel-garrison",
    label: "Connect Tunnel to Garrison Tutorial",
  },
  {
    href: "/hell-let-loose-vietnam/helicopter-controls",
    label: "Helicopter Controls Guide",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
  },
  {
    href: "/hell-let-loose-vietnam/progression-loadouts",
    label: "Progression & Loadouts Guide",
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
    title: "Hell Let Loose Vietnam Guide",
    description:
      "Use this guide hub to move from your first match into spawn management, NVA Tunnels, US helicopters, progression, leadership, Commander play, and achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam Tactical Map showing sectors objectives and battlefield positions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam Guide",
    description:
      "Start with the Tactical Map, then solve spawn problems, faction mobility, leadership locks, progression, Commander play, and achievements.",
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
        "Hell Let Loose Vietnam Guide: Beginner Route, Tunnels, Helicopters, Progression and Achievements",
      description:
        "A practical Hell Let Loose: Vietnam guide hub that routes players from the first-match beginner loop into spawn and Garrison management, NVA Tunnel networks, the Connect Tunnel to Garrison tutorial blocker, US helicopter controls, Squad Leader and Commander unlock requirements, role progression and loadouts, USA Commander play, and all 49 achievements.",
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
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam guide",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam beginner guide",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam spawn guide",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam NVA Tunnels",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam helicopters",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Squad Leader",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Commander",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam progression",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam achievements",
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
          title="Hell Let Loose Vietnam Guide: Start With the Problem Blocking You"
          description="I start with the Tactical Map and basic infantry loop, then move into spawns, NVA Tunnels, US helicopters, progression, leadership, Commander play, or achievements only when that system becomes relevant."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HellLetLooseVietnamContent />
        </GuideArticlePage>

        <GameDiscoveryCta
  gameTitle="Hell Let Loose: Vietnam"
  heading="Looking for another game after Hell Let Loose: Vietnam?"
  description="Use the quick recommender to find another tactical shooter, squad-based multiplayer game, or team-focused war game that fits your platform and play style, or build a broader Gaming DNA profile from nine games you already love."
/>

      </main>

      <Footer />
    </>
  );
}