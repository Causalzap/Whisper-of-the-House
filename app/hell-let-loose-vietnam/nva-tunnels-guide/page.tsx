import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NvaTunnelsGuideContent from "@/data/hell-let-loose-vietnam/nva-tunnels-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/nva-tunnels-guide`;

const metadataTitle =
  "Hell Let Loose Vietnam NVA Tunnels Guide: Range & Limits";

const metadataDescription =
  "Build NVA Tunnel networks with 5-minute cooldowns, 100m spacing, 400m links, five connections, fast travel, relays, and safer routes.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-placement-rules.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-network-five-connections.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-network-live-map.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tutorial-tunnel-fast-travel.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-enemy-near.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tunnel-collapsed-redeploy.webp`,
];

const toc = [
  {
    id: "tunnel-vs-garrison",
    label: "Tunnel vs. Garrison",
  },
  {
    id: "place-tunnel",
    label: "Where to place a Tunnel",
  },
  {
    id: "tunnel-supplies",
    label: "Do Tunnels need supplies?",
  },
  {
    id: "tunnel-cooldown",
    label: "5-minute Tunnel cooldown",
  },
  {
    id: "tunnel-limits",
    label: "Spacing, range and limits",
  },
  {
    id: "connect-tunnels",
    label: "Connect the Tunnel network",
  },
  {
    id: "five-connections",
    label: "Five connection limit",
  },
  {
    id: "tunnel-distance",
    label: "400m connection range",
  },
  {
    id: "when-to-use-relay",
    label: "When to build a relay",
  },
  {
    id: "fast-travel",
    label: "Tunnel fast travel",
  },
  {
    id: "enemy-near",
    label: "Enemy Near warning",
  },
  {
    id: "destroyed-while-traveling",
    label: "Tunnel destroyed during travel",
  },
  {
    id: "dismantling-tunnels",
    label: "When to dismantle",
  },
  {
    id: "safe-anchor",
    label: "Safe anchor strategy",
  },
  {
    id: "when-not-to-push-tunnel",
    label: "When to stop extending",
  },
  {
    id: "enemy-tunnels",
    label: "Destroy enemy Tunnels",
  },
  {
    id: "tunnel-troubleshooting",
    label: "Tunnel troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/tutorial-connect-tunnel-garrison",
    label: "Connect Tunnel to Garrison Tutorial",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
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
    title: "Hell Let Loose Vietnam NVA Tunnels Guide",
    description:
      "Learn how I place, connect, extend, protect, and troubleshoot NVA Tunnel networks using spacing, range, cooldown, relay, and fast-travel rules.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam NVA Tunnel placement rules showing cooldown spacing range and Tunnel limits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam NVA Tunnels Guide",
    description:
      "Plan NVA Tunnel routes with the 5-minute cooldown, 100m spacing, 400m connection range, five connections, relays, and fast travel.",
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
          name: "NVA Tunnels Guide",
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
        "Hell Let Loose Vietnam NVA Tunnels Guide: Range, Connections, Cooldown and Fast Travel",
      description:
        "A practical Hell Let Loose: Vietnam NVA Tunnel guide covering Tunnel placement, the five-minute placement cooldown, 100-meter minimum spacing, 400-meter connection range, 12-Tunnel team limit and 15-Tunnel Commander upgrade, five network connections, Tunnel-to-Tunnel and Tunnel-to-Garrison links, relay planning, fast travel, Enemy Near warnings, dismantling, destroyed routes, and live-match troubleshooting.",
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
          name: "Hell Let Loose Vietnam NVA Tunnels",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel network",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel fast travel",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel 400 meter connection range",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel 100 meter spacing",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel five minute cooldown",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel five connections",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel relay",
        },
        {
          "@type": "Thing",
          name: "NVA Tunnel troubleshooting",
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
          title="How I Build NVA Tunnel Networks That Actually Stay Useful"
          description="I use the 5-minute cooldown, 100m spacing, 400m connection range, relay Tunnels, and five available links to keep the NVA route connected as the front moves."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NvaTunnelsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}