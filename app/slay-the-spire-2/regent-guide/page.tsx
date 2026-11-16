
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RegentGuideContent from "@/data/slay-the-spire-2/regent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/regent-guide`;

const metadataTitle =
  "Slay the Spire 2 Regent Guide: Stars, Forge & Sovereign Blade";

const metadataDescription =
  "Learn Regent in Slay the Spire 2 with Stars, Orbit, Forge, Sovereign Blade, card creation, defensive choices, and strategies for difficult fights.";

const articleTitle =
  "Slay the Spire 2 Regent Guide: How to Use Stars, Forge & Sovereign Blade";

const articleDescription =
  "Learn when Regent needs more Stars or Energy, how Orbit supports expensive turns, and when to build around Sovereign Blade. Compare Forge, Block, and card-creation rewards to keep your deck effective against Elites and bosses.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-orbit-card-pick.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-underdocks-route.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-block-over-stars.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-regent-rest-before-dangerous-fight.webp`,
];

const toc = [
  {
    id: "stars-vs-energy",
    label: "When Regent needs Stars or Energy",
  },
  {
    id: "orbit-energy",
    label: "When to take or upgrade Orbit",
  },
  {
    id: "sovereign-blade-forge",
    label: "Building around Sovereign Blade",
  },
  {
    id: "regent-act-one",
    label: "Preparing for early Elites",
  },
  {
    id: "block-versus-stars",
    label: "Choosing Block over Stars",
  },
  {
    id: "regent-card-creation",
    label: "Card Creation & CHARGE!!",
  },
  {
    id: "regent-removal",
    label: "When to stop adding Star generators",
  },
  {
    id: "regent-rest-upgrade",
    label: "Pale Blue Dot: Upgrade or Rest?",
  },
  {
    id: "regent-boss-matchups",
    label: "BEGONE! against Soul Fysh",
  },
  {
    id: "regent-run-problems",
    label: "Why Regent builds stop working",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
  },
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/necrobinder-guide",
    label: "Slay the Spire 2 Necrobinder Guide",
  },
  {
    href: "/slay-the-spire-2/multiplayer-guide",
    label: "Slay the Spire 2 Multiplayer Guide",
  },
  {
    href: "/slay-the-spire-2/blitz",
    label: "Slay the Spire 2 Blitz Mode Guide",
  },
  {
    href: "/slay-the-spire-2/dread",
    label: "Slay the Spire 2 Dread Mode Guide",
  },
  {
    href: "/slay-the-spire-2",
    label: "Slay the Spire 2 Guide",
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

    description:
      "Learn when Regent needs Stars or Energy, how Orbit and Forge support Sovereign Blade, and why card creation or defensive rewards can change a difficult fight.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Regent considering Orbit at a Merchant to improve Energy availability in Slay the Spire 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Build Regent around Stars, Orbit, Forge, Sovereign Blade, and card creation while keeping enough Energy and Block for dangerous fights.",

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
          name: "Slay the Spire 2 Guide",
          item: `${siteUrl}/slay-the-spire-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Slay the Spire 2 Regent Guide",
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

      headline: articleTitle,

      description:
        "Learn how to play Regent in Slay the Spire 2. Manage persistent Stars and Energy, use Orbit to support expensive turns, increase Sovereign Blade damage with Forge, and combine card creation with Arsenal, Pillar of Creation, or other useful effects. Compare Star generation with Block, prepare for early Elites, use BEGONE! against Soul Fysh, and recognize when an established build needs defense or card access instead of more setup.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-11-16",

      articleSection: "Slay the Spire 2 Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Slay the Spire 2",
        },
        {
          "@type": "Thing",
          name: "Regent",
        },
        {
          "@type": "Thing",
          name: "Regent builds",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Stars",
        },
        {
          "@type": "Thing",
          name: "Divine Right",
        },
        {
          "@type": "Thing",
          name: "Orbit",
        },
        {
          "@type": "Thing",
          name: "Forge",
        },
        {
          "@type": "Thing",
          name: "Sovereign Blade",
        },
        {
          "@type": "Thing",
          name: "Summon Forth",
        },
        {
          "@type": "Thing",
          name: "Refine Blade",
        },
        {
          "@type": "Thing",
          name: "Venerate",
        },
        {
          "@type": "Thing",
          name: "Bulwark",
        },
        {
          "@type": "Thing",
          name: "Card Creation",
        },
        {
          "@type": "Thing",
          name: "Arsenal",
        },
        {
          "@type": "Thing",
          name: "Pillar of Creation",
        },
        {
          "@type": "Thing",
          name: "CHARGE!!",
        },
        {
          "@type": "Thing",
          name: "BEGONE!",
        },
        {
          "@type": "Thing",
          name: "Soul Fysh",
        },
        {
          "@type": "Thing",
          name: "Underdocks",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Home"
          gameHref="/"
          updatedAt="November 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RegentGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
