import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import KingSlayerContent from "@/data/sovereign-tower/king-slayer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/king-slayer`;

const metadataTitle =
  "Sovereign Tower King Slayer: Purification, Glass Blade & Eye";

const metadataDescription =
  "Choose the King Slayer resolution, prepare the 4-Knight purification route, handle 2–5 Damage Risk, use Glass Blade, and earn Spectral Eye.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-five-turn-warning.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-undead-emergency.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-purification-choice.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-final-party-setup.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-glass-blade.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-king-slayer-spectral-eye.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-demon-power-act-2-checkpoint.webp`,
];

const toc = [
  {
    id: "king-slayer-route",
    label: "King Slayer route",
  },
  {
    id: "five-circles",
    label: "Five-circle countdown",
  },
  {
    id: "king-slayer-support",
    label: "Sorceress support",
  },
  {
    id: "late-emergencies",
    label: "Late emergencies",
  },
  {
    id: "king-slayer-final-choice",
    label: "Final King Slayer choice",
  },
  {
    id: "kingslayer-purification",
    label: "Purification route",
  },
  {
    id: "king-slayer-repair",
    label: "Repair for 2–5 damage",
  },
  {
    id: "king-slayer-stats",
    label: "Final stat setup",
  },
  {
    id: "glass-blade",
    label: "Glass Blade",
  },
  {
    id: "final-party",
    label: "Final party",
  },
  {
    id: "resolve-king-slayer",
    label: "Resolve King Slayer",
  },
  {
    id: "act-2-point-of-no-return",
    label: "Act 2 point of no return",
  },
  {
    id: "king-slayer-stuck",
    label: "King Slayer troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
  },
  {
    href: "/sovereign-tower/golden-key",
    label: "Golden Key Guide",
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
    title: "Sovereign Tower King Slayer Guide",
    description:
      "Handle the five-circle countdown, compare the final King Slayer resolutions, prepare the four-Knight purification route, earn the Spectral Eye, and stop at the Act 2 checkpoint.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "King Slayer warning that it will return in five circles in Sovereign Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower King Slayer Guide",
    description:
      "Compare King Slayer resolutions, prepare purification, manage 2–5 Damage Risk, and claim the Spectral Eye.",
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
          name: "Sovereign Tower Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "King Slayer Guide",
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
        "Sovereign Tower King Slayer Guide: Purification, Final Choice, Glass Blade, and Spectral Eye",
      description:
        "A player-focused Sovereign Tower King Slayer guide covering the five-circle countdown, when I stop starting long Act 2 quests, the optional sorceress preparation route, late Army of the Dead pressure, the final King Slayer resolution choice, why I selected the four-Knight purification route over a visible six-Knight alternative, the 2–5 Damage Risk that determines my repair threshold, how I build the final party around the actual assignment requirements, why I preserve the Glass Blade for supernatural encounters, the Spectral Eye +3 MAG reward, and the final Demon now-or-never checkpoint before Act 3.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-09",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer guide",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower five circles",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer choice",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower King Slayer purification",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower four Knight purification",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower six Knight King Slayer route",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Glass Blade",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Spectral Eye",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Army of the Dead",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Belelladana",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Act 2 point of no return",
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
          title="Choose the King Slayer Resolution Before You Build the Final Party"
          description="Use the five-circle warning to clear your roster, compare the final King Slayer options, prepare the four-Knight purification route, then stop at the Demon checkpoint before Act 3."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <KingSlayerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}