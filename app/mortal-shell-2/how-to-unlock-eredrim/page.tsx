import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EredrimContent from "@/data/mortal-shell-2/how-to-unlock-eredrim.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/how-to-unlock-eredrim`;

const metadataTitle =
  "Mortal Shell 2 Eredrim Guide: How to Unlock Him Early";

const metadataDescription =
  "Unlock Eredrim through Gloomshade Grove and the Citadel Lever, or use the faster wall-bag shortcut, then activate the Beacon and defeat the Warden.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-eredrim-gloomshade-grove-start.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-citadel-lever.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-eredrim-citadel-entrance.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-eredrim-citadel-bag-shortcut.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-eredrim-citadel-location.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-eredrim-warden-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-eredrim-warden-arena.webp`,
];

const toc = [
  {
    id: "eredrim-unlock-route",
    label: "Eredrim unlock route",
  },
  {
    id: "why-eredrim-is-not-an-early-pickup",
    label: "Why Eredrim is gated",
  },
  {
    id: "normal-route",
    label: "Normal Gloomshade route",
  },
  {
    id: "citadel-lever",
    label: "Get the Citadel Lever",
  },
  {
    id: "use-citadel-lever",
    label: "Open the Citadel",
  },
  {
    id: "citadel-shortcut",
    label: "Early wall-bag shortcut",
  },
  {
    id: "inside-citadel",
    label: "Inside the Citadel",
  },
  {
    id: "beacon-before-warden",
    label: "Activate the Beacon",
  },
  {
    id: "warden",
    label: "Defeat the Warden",
  },
  {
    id: "eredrim-location",
    label: "Unlock Eredrim",
  },
  {
    id: "after-unlocking-eredrim",
    label: "After unlocking Eredrim",
  },
  {
    id: "worth-unlocking-early",
    label: "Is Eredrim worth rushing?",
  },
  {
    id: "eredrim-route-summary",
    label: "Route summary",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova & Gloom Siphon Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
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
    title: "Mortal Shell 2 Eredrim: Citadel Route, Shortcut & Warden",
    description:
      "Follow the normal Citadel Lever route or use the faster wall-bag shortcut, activate the nearby Beacon, defeat the Warden, and unlock Eredrim.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[3],
        alt: "Wall-bag shortcut into the Citadel on the Eredrim unlock route in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Eredrim: How to Unlock Him Early",
    description:
      "Use the Citadel Lever route or the faster wall-bag shortcut, save at the Beacon, and beat the Warden to unlock Eredrim.",
    images: [imageUrls[3]],
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Unlock Eredrim",
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
        "Mortal Shell 2 Eredrim Guide: Citadel Lever, Shortcut and Warden Unlock Route",
      description:
        "A practical Mortal Shell 2 Eredrim unlock guide covering the normal route from Gloomshade Grove, the Citadel Lever, the lower Citadel entrance, the faster wall-bag shortcut near the One-Legged Wolf, the Beacon before the Warden, the Warden fight, and when I think rushing Eredrim early is worth it.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-08-18",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Eredrim",
        },
        {
          "@type": "Thing",
          name: "Citadel Lever",
        },
        {
          "@type": "Thing",
          name: "Citadel",
        },
        {
          "@type": "Thing",
          name: "Warden",
        },
        {
          "@type": "Thing",
          name: "Gloomshade Grove",
        },
        {
          "@type": "Thing",
          name: "One-Legged Wolf",
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
          title="How I Unlock Eredrim and Rush the Citadel Early"
          description="I use the normal Citadel Lever route when progressing naturally, or the wall-bag shortcut when I want Eredrim early. Either way, the Warden is still the real gate."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EredrimContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}