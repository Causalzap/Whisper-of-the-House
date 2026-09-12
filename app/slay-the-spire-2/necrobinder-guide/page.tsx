import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import NecrobinderGuideContent from "@/data/slay-the-spire-2/necrobinder-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/necrobinder-guide`;

const metadataTitle =
  "Slay the Spire 2 Necrobinder Guide – Doom, Osty & Runs";

const metadataDescription =
  "Win more Necrobinder runs with better Strike removals, Osty defense, Doom timing, Elite routes, energy storage, Eradicate, and finisher decisions.";

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
    label: "Reach the good cards faster",
  },
  {
    id: "first-floors",
    label: "What Osty should do early",
  },
  {
    id: "do-not-force-doom",
    label: "When Doom is actually worth it",
  },
  {
    id: "remove-until-it-hurts",
    label: "How far to push card removal",
  },
  {
    id: "when-to-stop-removing",
    label: "When to stop removing",
  },
  {
    id: "route-around-power",
    label: "When an aggressive route works",
  },
  {
    id: "greed-has-a-number",
    label: "When HP greed is worth it",
  },
  {
    id: "osty-buys-time",
    label: "Use Osty to buy useful turns",
  },
  {
    id: "second-kill-condition",
    label: "When to add a second finisher",
  },
  {
    id: "energy-needs-an-outlet",
    label: "Turn stored Energy into damage",
  },
  {
    id: "potions-preserve-lines",
    label: "When to spend potions",
  },
  {
    id: "temporary-relic-plan",
    label: "Route around temporary relic value",
  },
  {
    id: "rest-when-engine-is-done",
    label: "When HP beats another upgrade",
  },
  {
    id: "when-the-deck-is-finished",
    label: "Know when the deck is finished",
  },
  {
    id: "why-necrobinder-runs-collapse",
    label: "Why Necrobinder runs collapse",
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
      "Learn when to remove starter cards, what job Osty should perform, when Doom deserves more support, and how Necrobinder turns energy and consistency into a finisher.",

    url: pageUrl,

    siteName: "Whisper of the House",

    type: "article",

    images: [
      {
        url: imageUrls[0],
        alt: "Necrobinder removing two Strike cards early in a Slay the Spire 2 run",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: metadataTitle,

    description:
      "Build more consistent Necrobinder runs around removal, Osty, Doom, stored Energy, Elite routing, and finishers that the deck can actually support.",

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

      headline:
        "Slay the Spire 2 Necrobinder Guide: Doom, Osty and Winning Runs",

      description:
        "A player-focused Slay the Spire 2 Necrobinder guide built around consistent run decisions rather than a fixed build. It covers why early Strike removal can improve draw quality, how Osty changes defense and buys setup turns, when Doom has enough support to matter, how far to push card removal, when aggressive Elite routes become reasonable, how to price HP greed against a known reward, when stored Energy needs a second kill condition such as Eradicate, how potions protect a winning line, when temporary relic value should change pathing, and why a finished Necrobinder engine often benefits more from HP and consistency than another speculative card.",

      image: imageUrls,

      inLanguage: "en",

      dateModified: "2026-09-12",

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
          name: "Necrobinder strategy",
        },
      ],

      mentions: [
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
          name: "Eradicate",
        },
        {
          "@type": "Thing",
          name: "Unleash",
        },
        {
          "@type": "Thing",
          name: "Forbidden Grimoire",
        },
        {
          "@type": "Thing",
          name: "Card removal",
        },
        {
          "@type": "Thing",
          name: "Energy storage",
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
          title="Slay the Spire 2 Necrobinder: How to Win More Runs"
          description="Necrobinder becomes much more reliable when I clear weak draws before chasing a payoff, give Osty a real job, and only commit to Doom, Eradicate, or another finisher after the deck has enough defense, draw, and Energy to support it."
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="September 12, 2026"
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