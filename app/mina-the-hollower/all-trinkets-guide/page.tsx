import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllTrinketsGuideContent from "@/data/mina-the-hollower/all-trinkets-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/all-trinkets-guide`;

const imageUrls = [
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-proto-spark-duke.webp`,
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-crypt-red-carpet-room.webp`,
  `${siteUrl}/images/mina-the-hollower/mina-the-hollower-drillhardt-map-purchase.webp`,
];

const toc = [
  { id: "best-trinkets-first", label: "Best Trinkets first" },
  { id: "find-trinkets-by-problem", label: "Find by problem" },
  { id: "best-trinket-builds", label: "Best Trinket builds" },
  { id: "easy-to-miss-trinkets", label: "Easy-to-miss Trinkets" },
  { id: "all-trinkets-checklist", label: "All Trinkets checklist" },
  { id: "trinkets-by-region", label: "Trinkets by region" },
  { id: "trinkets-by-acquisition-type", label: "Acquisition type" },
  { id: "which-trinkets-are-worth-using", label: "Worth using?" },
  { id: "late-cleanup-trinkets", label: "Late cleanup Trinkets" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/mina-the-hollower", label: "Mina the Hollower Beginner Guide" },
  {
    href: "/mina-the-hollower/best-early-trinkets",
    label: "Best Early Trinkets in Mina the Hollower",
  },
  {
    href: "/mina-the-hollower/bones-farming",
    label: "How to Farm Bones Fast in Mina the Hollower",
  },
  {
    href: "/mina-the-hollower/fast-travel",
    label: "How to Unlock Fast Travel in Mina the Hollower",
  },
  {
    href: "/mina-the-hollower/how-to-get-map",
    label: "How to Get the Map in Mina the Hollower",
  },
  {
    href: "/mina-the-hollower/where-to-go-first",
    label: "Where to Go First in Mina the Hollower",
  },
  {
    href: "/mina-the-hollower/best-starting-weapon",
    label: "Best Starting Weapon in Mina the Hollower",
  },
];

export const metadata: Metadata = {
  title: "Mina the Hollower All Trinkets Guide: Best Builds & Checklist",
  description:
    "Find every Mina the Hollower Trinket with all 60 effects, best Trinket builds, easy-to-miss rewards, region cleanup, acquisition types and a complete checklist.",

  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Mina the Hollower All Trinkets Guide: Best Builds, Effects and Checklist",
    description:
      "A complete Mina the Hollower Trinkets guide covering the best Trinkets to get first, build recommendations, easy-to-miss rewards, region cleanup and where to get all 60 Trinkets.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 456,
        height: 342,
        alt: "Mina the Hollower Proto Spark reward from the Duke, one of the best early Trinkets.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina the Hollower All Trinkets Guide",
    description:
      "All 60 Trinkets, best builds, easy-to-miss rewards, region cleanup and checklist for Mina the Hollower.",
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
          name: "Mina the Hollower Guide",
          item: `${siteUrl}/mina-the-hollower`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Trinkets Guide",
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
        "Mina the Hollower All Trinkets Guide: Best Trinkets, Builds, Effects and Checklist",
      description:
        "A player-focused Mina the Hollower Trinkets guide covering all 60 Trinkets, what each one does, where to get each Trinket, the best Trinkets to get first, recommended Trinket builds for survival, bosses, farming, Sidearms and exploration, easy-to-miss Trinkets, region cleanup, acquisition types and a complete 100% checklist.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-30",
      dateModified: "2026-05-30",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Mina the Hollower" },
        { "@type": "Thing", name: "Trinkets" },
        { "@type": "Thing", name: "All Trinkets" },
        { "@type": "Thing", name: "Trinket locations" },
        { "@type": "Thing", name: "Trinket builds" },
        { "@type": "Thing", name: "Trinket checklist" },
        { "@type": "Thing", name: "Easy-to-miss Trinkets" },
        { "@type": "Thing", name: "Proto Spark" },
        { "@type": "Thing", name: "Deboning Wand" },
        { "@type": "Thing", name: "Stolenoid" },
        { "@type": "Thing", name: "Uranium Bracelet" },
        { "@type": "Thing", name: "Bridge Weaver" },
        { "@type": "Thing", name: "Dodging Pendulum" },
        { "@type": "Thing", name: "Joule Syringe" },
        { "@type": "Thing", name: "Thermal Pack" },
        { "@type": "Thing", name: "Ossex" },
        { "@type": "Thing", name: "Queensbury Crypt" },
        { "@type": "Thing", name: "Nox's Bayou" },
        { "@type": "Thing", name: "Backwaters" },
        { "@type": "Thing", name: "Western Wilds" },
        { "@type": "Thing", name: "Coltrane Peak" },
        { "@type": "Thing", name: "Astral Orrery" },
        { "@type": "Thing", name: "Radiant Manor" },
        { "@type": "Thing", name: "Sandfalls" },
        { "@type": "Thing", name: "Bone Beach" },
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
          name: "How many Trinkets are in Mina the Hollower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 60 Trinkets in Mina the Hollower.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best Trinkets to get first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For most players, the best early Trinkets are Proto Spark, Plasma Funnel, Deboning Wand, Stolenoid, Primed Vial Pouch, Keri the Wisp, Pit Preserver and Steady Soles.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Trinket for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Proto Spark is one of the best beginner Trinkets because it saves Mina from death once and gives you more time to learn routes and bosses.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Trinket for farming Bones?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Deboning Wand is the main Bone farming Trinket. Pair it with Stolenoid to pull bouncing Bones toward you, and use Watchful Eye later if you can defeat enemies cleanly without getting hit.",
          },
        },
        {
          "@type": "Question",
          name: "Are any Trinkets missable?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Some Trinkets are easy to miss because they come from events, NPC quest chains, optional bosses, hidden routes or fallback shops. Uranium Bracelet, Lace Glove, Bell of Grace, Dead Leaf, Thermal Pack and Joule Syringe are examples you should double-check.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get Uranium Bracelet if I missed the Nether Kraken reward?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. If you missed the early Nether Kraken reward, Uranium Bracelet can be bought later after the Trinket Bazaar expands.",
          },
        },
        {
          "@type": "Question",
          name: "Which Trinkets are best for boss fights?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For safer boss fights, use Proto Spark, Plasma Funnel, Bubble Ring, Vascular Syrup and Bell of Grace. For faster kills, use Chain Capacitor, Uranium Bracelet, Lightning Grip or Reckless Beastium if you can handle the risk.",
          },
        },
        {
          "@type": "Question",
          name: "Which Trinkets are best for exploration?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keri the Wisp, Pit Preserver, Steady Soles, Spring Heels, Bellows Bustle and Bridge Weaver are the strongest exploration-focused Trinkets.",
          },
        },
        {
          "@type": "Question",
          name: "Should I collect Trinkets by number or by region?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the numbered checklist when you want 100% completion, but use region cleanup when you are missing only a few. Region cleanup is usually faster once the island is open.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Panino in Mina the Hollower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Panino's shop is in the Ossex Station Underpass. You need the Drill Driver Sidearm to cross the gap and reach him.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need screenshots for every Trinket?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Screenshots are most useful for random events, hidden routes, dig spots, Mimic encounters and NPC rewards. Shop items can usually be covered with a single merchant screenshot.",
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
          title="All Trinkets Guide"
          description="Find all 60 Trinkets in Mina the Hollower, then use the build tables, easy-to-miss list and region cleanup sections to decide which ones to get first and which ones are worth using."
          gameTitle="Mina the Hollower"
          gameHref="/mina-the-hollower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AllTrinketsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
