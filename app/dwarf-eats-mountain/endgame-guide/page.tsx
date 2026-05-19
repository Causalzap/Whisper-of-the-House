import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EndgameGuideContent from "@/data/dwarf-eats-mountain/endgame-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain/endgame-guide`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-world-spire-tutorial-goal.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-ballista-laser-flamer-chaos.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-mithril-upgrades-chain-mail.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-artifact-choice-bottled-dwarf.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-upgrades-screen.webp`,
];

const toc = [
  { id: "does-it-have-an-ending", label: "Ending" },
  { id: "endgame-progression", label: "Progression" },
  { id: "mountain-50-100", label: "Mountain 50-100" },
  { id: "world-spire", label: "World Spire" },
  { id: "endgame-checklist", label: "Checklist" },
  { id: "goblin-king", label: "Goblin King" },
  { id: "endgame-units", label: "Endgame units" },
  { id: "spelunkers-guild", label: "Spelunker's Guild" },
  { id: "collection-endgame", label: "Late collection" },
  { id: "mithril-and-forge", label: "Mithril & Forge" },
  { id: "artifacts-for-endgame", label: "Artifacts" },
  { id: "t6-prestige", label: "T6 Prestige" },
  { id: "rough-thresholds", label: "Thresholds" },
  { id: "ascension", label: "Ascension" },
  { id: "true-ending-endless", label: "True Ending" },
  { id: "recommended-endgame-route", label: "Route" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/dwarf-eats-mountain", label: "Dwarf Eats Mountain Guide" },
  { href: "/dwarf-eats-mountain/build-order", label: "Beginner Build Order" },
  { href: "/dwarf-eats-mountain/runners-guide", label: "Runners Guide" },
  {
    href: "/dwarf-eats-mountain/prestige-ascension-guide",
    label: "Prestige and Ascension Guide",
  },
  {
    href: "/dwarf-eats-mountain/artifacts-mithril-guide",
    label: "Artifacts and Mithril Guide",
  },
  { href: "/dwarf-eats-mountain/best-builds", label: "Best Builds Guide" },
];

export const metadata: Metadata = {
  title: "Ultimate Endgame Guide: Mountain 100 & T6 Upgrades",
  description:
    "Reach Mountain 100 & unlock the True Ending! Conquer the Goblin King with the ultimate T6 upgrades, Ascension Ranks, and Spelunker's Guild tactics.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Endgame Guide: Goblin King & T6",
    description:
      "A practical endgame route for Goblin King, Mountain 50-100, Spelunker's Guild, late collection, T6 upgrades, Ascension and True Ending.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain tutorial goal pointing players toward the World Spire Mountain.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Endgame Guide: Goblin King & T6",
    description:
      "Know when to push Goblin King, how Mountain 50+ changes drops, and how T6, Ascension and World Spire fit together.",
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
          name: "Dwarf Eats Mountain Guide",
          item: `${siteUrl}/dwarf-eats-mountain`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endgame Guide",
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
        "Dwarf Eats Mountain Endgame Guide: Goblin King, Mountain 50-100, Spelunker's Guild, T6 Prestige, Ascension and True Ending",
      description:
        "A player-focused Dwarf Eats Mountain endgame guide that explains when endgame starts, why Mountain 50-100 changes drop quality and collection pressure, how Goblin King works as a timed damage check, what happens if the boss is failed, how Spelunker's Guild supports artifact-den-luck, Mithril-luck and rare-resource routing, when Gorilla Arms and Guzzler-style collection matter, how Mithril, Mountain Souls and artifacts support endgame builds, which T6 Prestige routes to watch, when Ascension Rank matters, and how World Spire, Mountain 100, True Ending and Endless Mode fit into long-term progression.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Endgame" },
        { "@type": "Thing", name: "Goblin King" },
        { "@type": "Thing", name: "World Spire" },
        { "@type": "Thing", name: "Mountain 100" },
        { "@type": "Thing", name: "True Ending" },
        { "@type": "Thing", name: "Endless Mode" },
        { "@type": "Thing", name: "Mountain 50" },
        { "@type": "Thing", name: "Spelunker's Guild" },
        { "@type": "Thing", name: "Gorilla Arms" },
        { "@type": "Thing", name: "Guzzler" },
        { "@type": "Thing", name: "Gyrocopter" },
        { "@type": "Thing", name: "Bulldozer" },
        { "@type": "Thing", name: "Brewmaster" },
        { "@type": "Thing", name: "T6 Prestige" },
        { "@type": "Thing", name: "Speleological Domination" },
        { "@type": "Thing", name: "Buried Heirlooms" },
        { "@type": "Thing", name: "Greyglitter Leylines" },
        { "@type": "Thing", name: "Orequake Finger" },
        { "@type": "Thing", name: "Hand of God" },
        { "@type": "Thing", name: "Yeeti Arms" },
        { "@type": "Thing", name: "Ascension Rank" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What happens if I fail Goblin King in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can keep progressing. Goblin King is a timed damage check, but failing it does not end your run. Come back when your damage route is stronger.",
          },
        },
        {
          "@type": "Question",
          name: "What does Goblin King drop?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Killing Goblin King within the time limit gives treasure and a specific artifact needed for later boss progression.",
          },
        },
        {
          "@type": "Question",
          name: "Why does progress feel worse after Mountain 50?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After Mountain 50, multi-ore outcomes become less reliable as the game moves toward Mountain 100. You need better hit quality, Luck, artifacts, Mithril, and collection instead of only more attacks.",
          },
        },
        {
          "@type": "Question",
          name: "What does Spelunker's Guild do in endgame?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spelunker's Guild supports artifact-den-luck, Mithril-luck, spelunking rewards, and rare-resource quality. It matters when rare resources and artifacts become more important than simple gold.",
          },
        },
        {
          "@type": "Question",
          name: "Are Gorilla Arms and Guzzler important?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, when normal runners cannot handle late loot fields. They help with heavy collection pressure, rare drops, and crowded endgame fields.",
          },
        },
        {
          "@type": "Question",
          name: "What are the new formal-release units to watch?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Gyrocopter, Bulldozer, and Brewmaster are formal-release units or systems to watch as runs move beyond the older Demo-era unit setup.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start caring about T6 upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start caring about T6 when ordinary Prestige upgrades no longer feel like enough and one long-term route is clearly carrying your run.",
          },
        },
        {
          "@type": "Question",
          name: "What does Ascension Rank do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ascension Rank directly buffs the power of your T6 upgrades, making future cycles stronger.",
          },
        },
        {
          "@type": "Question",
          name: "Should I Ascend as soon as it unlocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Ascend when your T6 upgrades are worth keeping, the current layer has slowed down, and the next cycle will be stronger because Ascension Rank amplifies your T6 base.",
          },
        },
        {
          "@type": "Question",
          name: "Is True Ending the end of the game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. True Ending is a major milestone. After that, Endless Mode shifts the focus toward deeper scaling and optimization.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Dwarf Eats Mountain Endgame Guide: Goblin King, World Spire and True Ending"
          description="A practical endgame route for players pushing Mountain 50+, Goblin King, Spelunker's Guild, T6 Prestige, Ascension Rank, World Spire, Mountain 100 and Endless Mode."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndgameGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}