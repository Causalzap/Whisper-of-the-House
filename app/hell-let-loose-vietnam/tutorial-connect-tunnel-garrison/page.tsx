import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TutorialConnectTunnelGarrisonContent from "@/data/hell-let-loose-vietnam/tutorial-connect-tunnel-garrison.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/tutorial-connect-tunnel-garrison`;

const metadataTitle =
  "Hell Let Loose Vietnam Connect Tunnel to Garrison Guide";

const metadataDescription =
  "Stuck connecting the E5 Tunnel to a Garrison? Open the Tactical Map, select the Tunnel first, then the Garrison and finish Squad Leader Training.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tutorial-tunnel-e5.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tutorial-connect-tunnel-garrison.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tutorial-tunnel-fast-travel.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-tutorial-dismantle-friendly-tunnel.webp`,
];

const toc = [
  {
    id: "connect-tunnel-garrison",
    label: "Connect Tunnel to Garrison",
  },
  {
    id: "why-it-feels-stuck",
    label: "Why the tutorial feels stuck",
  },
  {
    id: "use-e5-tunnel",
    label: "Use the E5 Tunnel",
  },
  {
    id: "enter-garrison",
    label: "Enter the Garrison",
  },
  {
    id: "dismantle-friendly-tunnel",
    label: "Dismantle Friendly Tunnel",
  },
  {
    id: "connection-does-not-work",
    label: "Connection not working",
  },
  {
    id: "finish-squad-leader-training",
    label: "Finish Squad Leader Training",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/nva-tunnels-guide",
    label: "NVA Tunnels Guide",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/beginner-guide",
    label: "Beginner Guide",
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
    title: "Hell Let Loose Vietnam: Connect Tunnel to Garrison",
    description:
      "Use the E5 Tunnel already placed by Command, connect it from the Tactical Map, then move through Fast Travel and the Dismantle Friendly Tunnel step.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam Squad Leader tutorial explaining how to connect the E5 Tunnel to a Garrison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam: Connect Tunnel to Garrison",
    description:
      "Open the Tactical Map, select the E5 Tunnel first, then select your Garrison to clear this Squad Leader tutorial blocker.",
    images: [imageUrls[1]],
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
          name: "Connect Tunnel to Garrison",
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
        "Hell Let Loose Vietnam Connect Tunnel to Garrison Tutorial Guide",
      description:
        "A player-focused Hell Let Loose: Vietnam Squad Leader tutorial guide for the Connect a Tunnel to a Garrison objective. It explains how to open the Tactical Map, find the Tunnel Command placed in E5, select the Tunnel before the Garrison, confirm the connection through the Fast Travel objective, switch back to the Field Pad for Dismantle Friendly Tunnel, and troubleshoot the common reasons the training objective does not advance.",
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
          name: "Hell Let Loose Vietnam Connect Tunnel to Garrison",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Squad Leader tutorial",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam E5 Tunnel",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Tactical Map",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Fast Travel",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Dismantle Friendly Tunnel",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Tunnel tutorial stuck",
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
          title="Connect the E5 Tunnel to the Garrison Without Getting Stuck"
          description="Open the Tactical Map, use the Tunnel Command already placed in E5, connect it to your Garrison, then finish the Fast Travel and dismantle steps."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TutorialConnectTunnelGarrisonContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}