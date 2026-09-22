import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethCoopProgressionContent from "@/data/dimraeth/co-op-progression.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/co-op-progression`;

const metadataTitle =
  "Dimraeth Co-op: Progression, Hosting & What Carries Over";

const metadataDescription =
  "Learn what carries between Dimraeth co-op worlds, what stays with the host, how 8-player hosting works, chest access settings, and what happens offline.";

const articleDescription =
  "A practical Dimraeth co-op guide covering character and world progression, eight-player hosting, chest privacy and build access, host availability, existing characters, Sanctum investment, support tools, and harder Deeds.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-coop-server-settings.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-combat-medic-heal-spell.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-coop-barrier-support-spell.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "how-multiplayer-works",
    label: "How co-op progression works",
  },
  {
    id: "hosting",
    label: "Who should host?",
  },
  {
    id: "what-carries-over",
    label: "What carries over",
  },
  {
    id: "what-stays-in-world",
    label: "What stays with the world",
  },
  {
    id: "chest-permissions",
    label: "Chest privacy and access",
  },
  {
    id: "existing-character",
    label: "Use an existing character?",
  },
  {
    id: "host-offline",
    label: "When the host goes offline",
  },
  {
    id: "sanctum-coop",
    label: "Which Sanctum to build",
  },
  {
    id: "support-builds",
    label: "Healing and support",
  },
  {
    id: "deeds-coop",
    label: "Co-op for harder Deeds",
  },
  {
    id: "solo-and-coop",
    label: "Combine solo and co-op",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/classes",
    label: "Dimraeth Classes Guide",
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
        alt: "Dimraeth multiplayer server settings for an eight-player co-op world",
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
        "Dimraeth Co-op: What Carries Over Between Worlds and How Hosting Works",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-22",
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
          name: "Eight-Player Co-op",
        },
        {
          "@type": "Thing",
          name: "Chest Privacy",
        },
        {
          "@type": "Thing",
          name: "Storage Access",
        },
        {
          "@type": "Thing",
          name: "LockBuildtoOwner",
        },
        {
          "@type": "Thing",
          name: "Sanctum",
        },
        {
          "@type": "Thing",
          name: "Support Spells",
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
          title="Dimraeth Co-op: What Carries Over & How Hosting Works"
          description="Know what follows your character into another world, what stays with the host, how chest privacy and build access work, and how to keep one shared campaign from becoming several half-finished saves."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 22, 2026"
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