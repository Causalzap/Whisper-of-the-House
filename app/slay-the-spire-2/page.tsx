
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SlayTheSpire2GuideContent from "@/data/slay-the-spire-2/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2`;

const metadataTitle =
  "Slay the Spire 2 Guide: Beginner, Ascension & Builds";

const metadataDescription =
  "Get your first Slay the Spire 2 win, climb A1–A10, learn Regent, Necrobinder and The Fool, beat Aeonglass, and unlock Blitz and Dread.";

const articleTitle =
  "Slay the Spire 2 Guide: How to Win and What to Play Next";

const articleDescription =
  "Find out why your Slay the Spire 2 runs keep failing, from early card choices and Ascension modifiers to character-specific builds. Learn when to try Blitz or Dread, how to handle Aeonglass, and what changes when playing with friends.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-guide-ancient-boon-start.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-guide-coop-party.webp`,
];

const toc = [
  {
    id: "where-to-start",
    label: "Which guide should you start with?",
  },
  {
    id: "first-win",
    label: "Why early runs die in Act 1",
  },
  {
    id: "ascension",
    label: "Why higher Ascension feels harder",
  },
  {
    id: "regent",
    label: "Regent: Stars & Sovereign Blade",
  },
  {
    id: "necrobinder",
    label: "Necrobinder: Osty & Doom",
  },
  {
    id: "the-fool",
    label: "The Fool: Arrows & Melody",
  },
  {
    id: "blitz-vs-dread",
    label: "Blitz vs Dread: Which mode?",
  },
  {
    id: "aeonglass",
    label: "Aeonglass: Wither & Artifact",
  },
  {
    id: "multiplayer",
    label: "Playing co-op with friends",
  },
  {
    id: "exact-data",
    label: "Checking cards, relics & enemies",
  },
  {
    id: "what-to-play-next",
    label: "Unlocking The Fool, Blitz & Dread",
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
    href: "/slay-the-spire-2/regent-guide",
    label: "Slay the Spire 2 Regent Guide",
  },
  {
    href: "/slay-the-spire-2/necrobinder-guide",
    label: "Slay the Spire 2 Necrobinder Guide",
  },
  {
    href: "/slay-the-spire-2/the-fool",
    label: "Slay the Spire 2 The Fool Guide",
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
    href: "/slay-the-spire-2/aeonglass",
    label: "Slay the Spire 2 Aeonglass Boss Guide",
  },
  {
    href: "/slay-the-spire-2/multiplayer-guide",
    label: "Slay the Spire 2 Multiplayer Guide",
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
      "Start your first Slay the Spire 2 run, climb Ascension, learn Regent, Necrobinder and The Fool, survive Aeonglass, and take on Blitz or Dread.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Slay the Spire 2 Ancient offering Max HP, a card and potion, or 333 Gold with Greed",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Slay the Spire 2 tips for first wins, A1–A10, Regent, Necrobinder, The Fool, Aeonglass, co-op, Blitz and Dread.",

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
        "Learn how to win in Slay the Spire 2 by choosing early card rewards, managing HP and Gold, preparing for Elites, and climbing Ascension A1–A10. Understand Regent's Stars and Sovereign Blade, Necrobinder's Osty and Doom, and The Fool's Arrows and Melody. Compare Blitz and Dread, survive Aeonglass's Wither and Artifact mechanics, coordinate co-op battles, and check the November 2026 beta requirements for new characters and modes.",

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
          name: "Slay the Spire 2 strategy",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 Ascension",
        },
        {
          "@type": "Thing",
          name: "Slay the Spire 2 public beta",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Ancient rewards",
        },
        {
          "@type": "Thing",
          name: "Ascension 1 through Ascension 10",
        },
        {
          "@type": "Thing",
          name: "Regent",
        },
        {
          "@type": "Thing",
          name: "Stars",
        },
        {
          "@type": "Thing",
          name: "Sovereign Blade",
        },
        {
          "@type": "Thing",
          name: "Necrobinder",
        },
        {
          "@type": "Thing",
          name: "Osty",
        },
        {
          "@type": "Thing",
          name: "Doom",
        },
        {
          "@type": "Thing",
          name: "The Fool",
        },
        {
          "@type": "Thing",
          name: "Aim",
        },
        {
          "@type": "Thing",
          name: "Melody",
        },
        {
          "@type": "Thing",
          name: "Blitz Mode",
        },
        {
          "@type": "Thing",
          name: "Dread Mode",
        },
        {
          "@type": "Thing",
          name: "Boss Dominions",
        },
        {
          "@type": "Thing",
          name: "Aeonglass",
        },
        {
          "@type": "Thing",
          name: "Wither",
        },
        {
          "@type": "Thing",
          name: "Artifact",
        },
        {
          "@type": "Thing",
          name: "Multiplayer",
        },
        {
          "@type": "Thing",
          name: "Co-op",
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
          <SlayTheSpire2GuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
