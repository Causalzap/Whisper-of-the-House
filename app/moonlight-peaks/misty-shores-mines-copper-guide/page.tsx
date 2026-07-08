import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MistyShoresMinesCopperContent from "@/data/moonlight-peaks/misty-shores-mines-copper-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moonlight-peaks/misty-shores-mines-copper-guide`;

const imageUrls = [
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-a-bridge-too-far-cursed-misty-shores.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-map-character-locations.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-noel-fishing-competition-three-fish.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-cave-of-echoes-copper-route.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-mine-large-ore-node-six-ore.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-inventory-upgrade-2000-gold.webp`,
];

const toc = [
  {
    id: "moonlight-peaks-misty-shores-mines-copper-guide",
    label: "Misty Shores guide",
  },
  {
    id: "misty-shores-route-checkpoints",
    label: "Route checkpoints",
  },
  {
    id: "a-bridge-too-far",
    label: "A Bridge Too Far",
  },
  {
    id: "ambrosia-and-death",
    label: "Ambrosia and Death",
  },
  {
    id: "noel-fishing-competition",
    label: "Noel fishing",
  },
  {
    id: "cave-of-echoes-copper",
    label: "Cave of Echoes",
  },
  {
    id: "how-to-make-copper-bars",
    label: "Copper Bars",
  },
  {
    id: "mining-priority",
    label: "Mining priority",
  },
  {
    id: "inventory-before-mining",
    label: "Inventory prep",
  },
  {
    id: "when-to-leave-mines",
    label: "When to leave",
  },
  {
    id: "common-route-fixes",
    label: "Route fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/moonlight-peaks",
    label: "Moonlight Peaks Guide Hub",
  },
  {
    href: "/moonlight-peaks/beginner-guide",
    label: "Moonlight Peaks Beginner Guide",
  },
  {
    href: "/moonlight-peaks/early-resources-tool-upgrades-guide",
    label: "Early Resources and Tool Upgrades Guide",
  },
  {
    href: "/moonlight-peaks/barn-animals-guide",
    label: "Barn and Animals Guide",
  },
  {
    href: "/moonlight-peaks/feature-unlocks-guide",
    label: "Feature Unlocks Guide",
  },
];

export const metadata: Metadata = {
  title: "Moonlight Peaks Misty Shores Mines & Copper Guide",
  description:
    "Unlock Misty Shores in Moonlight Peaks with A Bridge Too Far, Noel's fishing challenge, Cave of Echoes copper, Copper Bars and mine prep.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Moonlight Peaks Misty Shores, Mines and Copper Guide: A Bridge Too Far, Fishing and Cave of Echoes",
    description:
      "Follow the Moonlight Peaks route for Orlock's Wine Scheme, A Bridge Too Far, Noel's 3-fish challenge, Cave of Echoes, Copper Ore, Copper Bars, Furnace use, mining priorities and mine prep.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Moonlight Peaks A Bridge Too Far quest with Misty Shores bridge curse.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Peaks Misty Shores Guide",
    description:
      "Unlock Misty Shores, finish A Bridge Too Far, get Noel's fishing rod, find Cave of Echoes copper and make Copper Bars.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "How do I unlock Misty Shores in Moonlight Peaks?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Follow Orlock's Wine Scheme into A Bridge Too Far. The cursed bridge route then sends you through Orlock, Fiona, Sabrina, Luna, Noel, and the bridge cutscene.",
    },
  },
  {
    "@type": "Question",
    name: "What is A Bridge Too Far?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "A Bridge Too Far is the quest that resolves the cursed bridge leading toward Misty Shores and the Ambrosia side.",
    },
  },
  {
    "@type": "Question",
    name: "Why is the Misty Shores bridge still blocked?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "You are probably missing a character step in A Bridge Too Far. Check Orlock, Fiona, Sabrina, Luna, Noel, and your quest log.",
    },
  },
  {
    "@type": "Question",
    name: "Where do I get the fishing rod?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The beginner fishing rod comes from Noel's fishing competition route.",
    },
  },
  {
    "@type": "Question",
    name: "How many fish do I need for Noel's challenge?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Noel's early competition asks for 3 fish.",
    },
  },
  {
    "@type": "Question",
    name: "Is Noel's fishing competition a 250 gold bet?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Some routes frame Noel's challenge as a 250 gold wager, so do not start it without time and inventory space.",
    },
  },
  {
    "@type": "Question",
    name: "Why did my rod break on a big fish?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The beginner rod is not strong enough for giant fish shadows. Leave those fish for a later rod upgrade.",
    },
  },
  {
    "@type": "Question",
    name: "Where is Copper Ore in Moonlight Peaks?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Copper Ore is found in Cave of Echoes on the lower-left side of Misty Shores.",
    },
  },
  {
    "@type": "Question",
    name: "Where is Cave of Echoes?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Cave of Echoes is on the lower-left side of Misty Shores. If you cannot reach it yet, finish the bridge route first.",
    },
  },
  {
    "@type": "Question",
    name: "How do I make Copper Bars?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use the Furnace with 4 Copper Ore and 1 Charcoal.",
    },
  },
  {
    "@type": "Question",
    name: "Should I sell Copper Ore?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Not early. Copper Ore becomes Copper Bars, and bars are needed for quests, crafting, and tool upgrades.",
    },
  },
  {
    "@type": "Question",
    name: "What ore nodes should I mine first?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Mine large ore clusters first. They can drop 6 ore, while regular nodes usually drop 1 ore.",
    },
  },
  {
    "@type": "Question",
    name: "Should I buy the inventory upgrade before mining?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Buy it if inventory space is ending mine runs early. The first upgrade costs 2,000 gold and adds 10 slots.",
    },
  },
];

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
          name: "Moonlight Peaks Guide",
          item: `${siteUrl}/moonlight-peaks`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Misty Shores, Mines and Copper Guide",
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
        "Moonlight Peaks Misty Shores, Mines and Copper Guide: A Bridge Too Far, Noel Fishing, Cave of Echoes and Copper Bars",
      description:
        "A player-focused Moonlight Peaks Misty Shores, mines and copper guide covering Orlock's Wine Scheme, A Bridge Too Far, The Broken Lamp, Fiona's cursed bridge, Sabrina, Luna, Noel, Misty Shores, Ambrosia, Noel's fishing competition, 250 gold wager, 3 fish route, Cave of Echoes on the lower-left side of Misty Shores, Copper Ore, Copper Bars, Furnace recipes, Charcoal, large ore clusters, inventory prep, mine route timing, and common route blockers.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Moonlight Peaks" },
        { "@type": "Thing", name: "Moonlight Peaks Misty Shores" },
        { "@type": "Thing", name: "Moonlight Peaks mines" },
        { "@type": "Thing", name: "Moonlight Peaks copper" },
        { "@type": "Thing", name: "A Bridge Too Far" },
        { "@type": "Thing", name: "Orlock's Wine Scheme" },
        { "@type": "Thing", name: "The Broken Lamp" },
        { "@type": "Thing", name: "Fiona" },
        { "@type": "Thing", name: "Sabrina" },
        { "@type": "Thing", name: "Luna" },
        { "@type": "Thing", name: "Noel" },
        { "@type": "Thing", name: "Moonlight Peaks fishing rod" },
        { "@type": "Thing", name: "Noel fishing competition" },
        { "@type": "Thing", name: "Cave of Echoes" },
        { "@type": "Thing", name: "Moonlight Peaks Copper Ore" },
        { "@type": "Thing", name: "Moonlight Peaks Copper Bar" },
        { "@type": "Thing", name: "Moonlight Peaks Furnace" },
        { "@type": "Thing", name: "Moonlight Peaks Charcoal" },
        { "@type": "Thing", name: "Moonlight Peaks inventory upgrade" },
        { "@type": "Thing", name: "Moonlight Peaks large ore cluster" },
        { "@type": "Thing", name: "Misty Shores Ambrosia" },
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
      mainEntity: faqEntities,
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
          title="Moonlight Peaks Misty Shores, Mines and Copper Guide"
          description="Open Misty Shores through A Bridge Too Far, finish Noel's fishing route, find Cave of Echoes copper, make Copper Bars and plan the first mine runs."
          gameTitle="Moonlight Peaks"
          gameHref="/moonlight-peaks"
          breadcrumbBaseHref="/moonlight-peaks"
          breadcrumbBaseLabel="Moonlight Peaks Guide"
          updatedAt="July 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MistyShoresMinesCopperContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}