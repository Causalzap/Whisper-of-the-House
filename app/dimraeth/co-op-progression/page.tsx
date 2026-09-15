import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethCoopProgressionContent from "@/data/dimraeth/co-op-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/co-op-progression`;

const metadataTitle =
  "Dimraeth Co-op Progression: Characters, Worlds & Hosting";

const metadataDescription =
  "Learn how Dimraeth co-op progression works: what follows your character, what stays with the host world, 8-player hosting, support builds, and Deeds.";

const articleDescription =
  "A practical Dimraeth co-op progression guide covering character versus world saves, portable levels, equipment, inventory and spells, world-bound story progress, recruited allies and Sanctum buildings, eight-player hosting, host availability, bringing established characters into new worlds, support spells, and higher-Deed multiplayer.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-coop-server-settings.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-combat-medic-heal-spell.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-coop-barrier-support-spell.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "character-vs-world",
    label: "Character vs world progress",
  },
  {
    id: "hosting",
    label: "Choose a main host",
  },
  {
    id: "what-carries-over",
    label: "What carries over",
  },
  {
    id: "what-stays-in-world",
    label: "What stays in the world",
  },
  {
    id: "joining-new-world",
    label: "Join an early world",
  },
  {
    id: "host-offline",
    label: "When the host is offline",
  },
  {
    id: "support-builds",
    label: "Co-op support builds",
  },
  {
    id: "deeds-coop",
    label: "Co-op for higher Deeds",
  },
  {
    id: "solo-and-coop",
    label: "Solo and co-op together",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
  },
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Dimraeth multiplayer world settings for an eight-player co-op game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Dimraeth",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Co-op Progression",
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
        "Dimraeth Co-op Progression: Characters, Worlds and Hosting",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Co-op",
        },
        {
          "@type": "Thing",
          name: "Multiplayer",
        },
        {
          "@type": "Thing",
          name: "Character Progression",
        },
        {
          "@type": "Thing",
          name: "World Progression",
        },
        {
          "@type": "Thing",
          name: "Multiplayer Hosting",
        },
        {
          "@type": "Thing",
          name: "Sanctum",
        },
        {
          "@type": "Thing",
          name: "Combat Medic",
        },
        {
          "@type": "Thing",
          name: "Barrier",
        },
        {
          "@type": "Thing",
          name: "Deeds",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Dimraeth Co-op Progression: What Carries Over Between Worlds?"
          description="Your character and the host world do not share the same progression. Know what travels with you, what stays behind, how hosting works, and when co-op starts making higher Deeds easier."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethCoopProgressionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}