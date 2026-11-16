
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NecrobinderGuideContent from "@/data/slay-the-spire-2/necrobinder-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/necrobinder-guide`;

const metadataTitle =
  "Slay the Spire 2 Necrobinder Guide – Osty, Doom & Builds";

const metadataDescription =
  "Learn Necrobinder builds in Slay the Spire 2 with Osty, Summon, Unleash, Doom, Souls, Banshee's Cry, Forbidden Grimoire, and Eradicate strategies.";

const articleTitle =
  "Slay the Spire 2 Necrobinder Guide: How to Win With Osty, Doom & Eradicate";

const articleDescription =
  "Build around Osty's HP and Unleash damage, survive until Doom finishes enemies, and use Souls or Ethereal cards when they support your deck. Learn when to remove Strikes, use Forbidden Grimoire, and convert stored Energy into Eradicate damage.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-necrobinder-remove-two-strikes.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-necrobinder-forbidden-grimoire-remove.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-necrobinder-shop-four-elites-route.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-necrobinder-eradicate-192-damage.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-necrobinder-533-damage-unleash.webp`,
];

const toc = [
  {
    id: "reach-real-cards",
    label: "Should you remove Strikes early?",
  },
  {
    id: "first-floors",
    label: "Osty: Defend or attack?",
  },
  {
    id: "do-not-force-doom",
    label: "When Doom beats direct damage",
  },
  {
    id: "souls-and-ethereal",
    label: "Souls, Ethereal & Banshee's Cry",
  },
  {
    id: "remove-until-it-hurts",
    label: "Forbidden Grimoire & card removal",
  },
  {
    id: "route-around-power",
    label: "Surviving a four-Elite route",
  },
  {
    id: "osty-buys-time",
    label: "Why Pull Aggro helps Osty",
  },
  {
    id: "second-kill-condition",
    label: "When to take Eradicate",
  },
  {
    id: "energy-needs-an-outlet",
    label: "Borrowed Time & Ice Cream",
  },
  {
    id: "when-the-deck-is-finished",
    label: "533-damage Unleash",
  },
  {
    id: "why-necrobinder-runs-collapse",
    label: "Why Necrobinder builds fail",
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
      "Learn how Osty protects Necrobinder, when Doom can finish enemies, how Souls and Ethereal cards work, and how to build powerful Unleash or Eradicate attacks.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[4],
        alt: "Slay the Spire 2 Necrobinder using Unleash for 533 damage after strengthening Osty",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Play Necrobinder with Osty, Doom, Souls, Forge-free card removal through Forbidden Grimoire, and high-damage Eradicate or Unleash combinations.",

    images: [imageUrls[4]],
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
          name: "Slay the Spire 2 Necrobinder Guide",
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
        "Learn how to play Necrobinder in Slay the Spire 2. Strengthen Osty with Summon, increase Unleash damage, survive until Doom defeats enemies, generate Souls for card draw, reduce Banshee's Cry's cost with played Ethereal cards, remove unwanted cards using Forbidden Grimoire, and combine Eradicate with Borrowed Time, Lethality, and Ice Cream for powerful finishing attacks.",

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
          name: "Necrobinder",
        },
        {
          "@type": "Thing",
          name: "Necrobinder builds",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "Osty",
        },
        {
          "@type": "Thing",
          name: "Summon",
        },
        {
          "@type": "Thing",
          name: "Unleash",
        },
        {
          "@type": "Thing",
          name: "Doom",
        },
        {
          "@type": "Thing",
          name: "Souls",
        },
        {
          "@type": "Thing",
          name: "Ethereal",
        },
        {
          "@type": "Thing",
          name: "Banshee's Cry",
        },
        {
          "@type": "Thing",
          name: "Forbidden Grimoire",
        },
        {
          "@type": "Thing",
          name: "Pull Aggro",
        },
        {
          "@type": "Thing",
          name: "Eradicate",
        },
        {
          "@type": "Thing",
          name: "Borrowed Time",
        },
        {
          "@type": "Thing",
          name: "Ice Cream",
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
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="November 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NecrobinderGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
