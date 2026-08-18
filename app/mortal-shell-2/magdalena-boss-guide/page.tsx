import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MagdalenaBossGuideContent from "@/data/mortal-shell-2/magdalena-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/magdalena-boss-guide`;

const metadataTitle =
  "Mortal Shell 2 Magdalena Boss Guide: Charge, Break & Wasps";

const metadataDescription =
  "Beat Magdalena in Mortal Shell 2 by controlling the arena edge, dodging her charge late, using Break windows, and surviving the wasp swarm and summons.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-magdalena-lady-of-the-woods-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-magdalena-edge-position.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-magdalena-fire-ring-grenade.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-magdalena-first-break.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-magdalena-wasp-swarm.webp`,
];

const toc = [
  {
    id: "why-magdalena-feels-hard",
    label: "Why Magdalena feels hard",
  },
  {
    id: "where-to-find-magdalena",
    label: "Where to find Magdalena",
  },
  {
    id: "before-the-fight",
    label: "What I prepare",
  },
  {
    id: "arena-edge",
    label: "Control the arena edge",
  },
  {
    id: "charge",
    label: "Dodge the charge",
  },
  {
    id: "dont-overcommit",
    label: "Keep melee punishes short",
  },
  {
    id: "fire-ring",
    label: "Avoid the fire ring",
  },
  {
    id: "corrosive-stone",
    label: "Corrosive Stone",
  },
  {
    id: "first-break",
    label: "Use the first Break",
  },
  {
    id: "second-break",
    label: "Second Break",
  },
  {
    id: "wasp-swarm",
    label: "Survive the wasp swarm",
  },
  {
    id: "summoned-enemies",
    label: "Handle summoned enemies",
  },
  {
    id: "finish-the-fight",
    label: "Finish the fight safely",
  },
  {
    id: "magdalenas-memento",
    label: "Magdalena's Memento",
  },
  {
    id: "what-fixed-the-fight",
    label: "What fixed the fight",
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
    href: "/mortal-shell-2/shrine-of-trials-axe-dagger",
    label: "Axe & Dagger — Shrine of Trials",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
  },
  {
    href: "/mortal-shell-2/difficulty-settings",
    label: "Difficulty Settings",
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
    title: "Mortal Shell 2 Magdalena: Charge, Break & Wasp Strategy",
    description:
      "Control Magdalena near the arena edge, punish her charge without overcommitting, use the Break window, and survive the low-Health wasp swarm.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        alt: "Magdalena the Lady of the Woods boss fight in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Magdalena Boss Guide",
    description:
      "How I handle Magdalena's charge, fire pressure, Break windows, wasp swarm, and summoned enemies without chasing her around the arena.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Magdalena Boss Guide",
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
        "Mortal Shell 2 Magdalena Boss Guide: Charge, Break Windows, Wasps and Summons",
      description:
        "A practical Mortal Shell 2 Magdalena boss guide covering the Glutted Mire location, arena-edge positioning, late charge dodges, close-range fire pressure, Corrosive Stone, the first and second Break windows, wasp swarm, summoned enemies, and Magdalena's Memento.",
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
          name: "Magdalena, the Lady of the Woods",
        },
        {
          "@type": "Thing",
          name: "Glutted Mire",
        },
        {
          "@type": "Thing",
          name: "Magdalena Break",
        },
        {
          "@type": "Thing",
          name: "Magdalena wasp swarm",
        },
        {
          "@type": "Thing",
          name: "Magdalena's Memento",
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
          title="How I Beat Magdalena Without Chasing Her Around the Arena"
          description="I keep Magdalena closer to the arena edge, dodge her charge late, keep melee punishes short, burst during Break, and stop attacking when the wasp swarm appears."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MagdalenaBossGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}