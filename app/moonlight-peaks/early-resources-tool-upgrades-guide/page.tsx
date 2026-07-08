import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EarlyResourcesToolUpgradesContent from "@/data/moonlight-peaks/early-resources-tool-upgrades-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moonlight-peaks/early-resources-tool-upgrades-guide`;

const imageUrls = [
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-howling-hammer-well-barn-mill-costs.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-mine-large-ore-node-six-ore.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-cave-of-echoes-copper-route.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-inventory-upgrade-2000-gold.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-chester-town-hall-shipping-bin.webp`,
];

const toc = [
  {
    id: "moonlight-peaks-tool-upgrades-guide",
    label: "Tool upgrades guide",
  },
  {
    id: "how-to-upgrade-tools",
    label: "How to upgrade",
  },
  {
    id: "best-tool-upgrade-order",
    label: "Best order",
  },
  {
    id: "tool-upgrade-costs",
    label: "Upgrade costs",
  },
  {
    id: "ore-tiers-and-pickaxe-gates",
    label: "Ore tiers",
  },
  {
    id: "misty-shores-cave-of-echoes",
    label: "Cave of Echoes",
  },
  {
    id: "furnace-bars",
    label: "Furnace bars",
  },
  {
    id: "early-purchase-priority",
    label: "Purchase priority",
  },
  {
    id: "inventory-upgrade",
    label: "Inventory upgrade",
  },
  {
    id: "resources-to-prioritize",
    label: "Resources",
  },
  {
    id: "what-not-to-sell",
    label: "What not to sell",
  },
  {
    id: "when-to-stop-upgrading",
    label: "When to stop",
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
    href: "/moonlight-peaks/misty-shores-mines-copper-guide",
    label: "Misty Shores, Mines and Copper Guide",
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
  title: "Moonlight Peaks Tool Upgrades Guide: Costs & Bars",
  description:
    "Upgrade Moonlight Peaks tools with Howling Hammer hours, Ridge menu, pickaxe-first order, tool costs, Copper/Iron/Gold Bars and Furnace recipes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Moonlight Peaks Tool Upgrades Guide: Costs, Bars, Howling Hammer and Best Order",
    description:
      "Plan Moonlight Peaks tool upgrades with Howling Hammer hours, Ridge's menu path, pickaxe-first logic, Copper/Iron/Gold tool costs, Furnace bar recipes, inventory timing and sell-or-keep rules.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Moonlight Peaks Howling Hammer shop showing Well, Barn and Mill costs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Peaks Tool Upgrades Guide",
    description:
      "Use Howling Hammer hours, Ridge's menu, tool costs, Copper/Iron/Gold Bars and pickaxe-first logic to upgrade tools in Moonlight Peaks.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "Where do I upgrade tools in Moonlight Peaks?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Upgrade tools at Howling Hammer by talking to Ridge. Choose Shop, choose I want to buy something, then scroll to the third tab.",
    },
  },
  {
    "@type": "Question",
    name: "What are Howling Hammer's hours?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Howling Hammer is open Monday to Friday from 6:00 p.m. to midnight.",
    },
  },
  {
    "@type": "Question",
    name: "What is the best first tool upgrade?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The pickaxe is usually the best first tool upgrade because better pickaxes unlock better mining, and mining supplies the bars needed for later upgrades.",
    },
  },
  {
    "@type": "Question",
    name: "How much does a Copper tool upgrade cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Most Copper tool upgrades cost 1,000 coins, the Rusty version of that tool, and 3 Copper Bars.",
    },
  },
  {
    "@type": "Question",
    name: "How much does an Iron tool upgrade cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Most Iron upgrades cost 2,000 coins, the Copper version of that tool, and 3 Iron Bars. The Iron Scythe is different: it costs 2,500 coins, the Copper Scythe, and 3 Iron Bars.",
    },
  },
  {
    "@type": "Question",
    name: "How much does a Gold tool upgrade cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Most Gold upgrades cost 3,500 coins, the Iron version of that tool, and 3 Gold Bars. The scythe does not have a Gold tier.",
    },
  },
  {
    "@type": "Question",
    name: "How do I make Copper Bars?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use the Furnace with 4 Copper Ore and 1 Charcoal to make a Copper Bar.",
    },
  },
  {
    "@type": "Question",
    name: "Where do I get Copper Ore?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Copper Ore comes from the Cave of Echoes route in Misty Shores, which opens through A Bridge Too Far.",
    },
  },
  {
    "@type": "Question",
    name: "Should I sell ore or bars?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Not early. Ore becomes bars, and bars pay for tool upgrades. Keep them until the upgrade and quest route is clear.",
    },
  },
  {
    "@type": "Question",
    name: "When should I buy the inventory upgrade?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Buy the first inventory upgrade before repeated long resource runs. It costs 2,000 gold and adds 10 slots.",
    },
  },
  {
    "@type": "Question",
    name: "Should I buy the well or upgrade tools first?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Buy based on the bottleneck. If watering wastes time every night, buy the well. If ore is blocking upgrades, prioritize the pickaxe and mining.",
    },
  },
  {
    "@type": "Question",
    name: "Should I buy the barn before tool upgrades?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Not usually. The barn costs 4,000 gold and starts the animal route, so check the Barn and Animals Guide before spending that money.",
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
          name: "Early Resources and Tool Upgrades Guide",
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
        "Moonlight Peaks Tool Upgrades Guide: Howling Hammer Hours, Tool Costs, Copper Bars, Iron Bars, Gold Bars and Best Upgrade Order",
      description:
        "A player-focused Moonlight Peaks early resources and tool upgrades guide covering Howling Hammer hours, Ridge's upgrade menu, Copper/Iron/Gold tool costs, pickaxe-first upgrade order, ore tiers, Cave of Echoes, Copper Ore, Copper Bars, Iron Bars, Gold Bars, Furnace recipes, inventory upgrade timing, early purchase priority, what not to sell, and when to stop upgrading.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Moonlight Peaks" },
        { "@type": "Thing", name: "Moonlight Peaks tool upgrades" },
        { "@type": "Thing", name: "Moonlight Peaks upgrade costs" },
        { "@type": "Thing", name: "Howling Hammer" },
        { "@type": "Thing", name: "Ridge" },
        { "@type": "Thing", name: "Moonlight Peaks pickaxe" },
        { "@type": "Thing", name: "Moonlight Peaks axe" },
        { "@type": "Thing", name: "Moonlight Peaks watering can" },
        { "@type": "Thing", name: "Moonlight Peaks shovel" },
        { "@type": "Thing", name: "Moonlight Peaks scythe" },
        { "@type": "Thing", name: "Moonlight Peaks Fishing Rod" },
        { "@type": "Thing", name: "Moonlight Peaks Copper Ore" },
        { "@type": "Thing", name: "Moonlight Peaks Copper Bar" },
        { "@type": "Thing", name: "Moonlight Peaks Iron Ore" },
        { "@type": "Thing", name: "Moonlight Peaks Iron Bar" },
        { "@type": "Thing", name: "Moonlight Peaks Gold Ore" },
        { "@type": "Thing", name: "Moonlight Peaks Gold Bar" },
        { "@type": "Thing", name: "Cave of Echoes" },
        { "@type": "Thing", name: "Moonlight Peaks Furnace" },
        { "@type": "Thing", name: "Moonlight Peaks Charcoal" },
        { "@type": "Thing", name: "Moonlight Peaks inventory upgrade" },
        { "@type": "Thing", name: "Moonlight Peaks well" },
        { "@type": "Thing", name: "Moonlight Peaks barn" },
        { "@type": "Thing", name: "Moonlight Peaks Mill" },
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
          title="Moonlight Peaks Early Resources and Tool Upgrades Guide"
          description="Upgrade tools with Howling Hammer hours, Ridge's menu path, pickaxe-first logic, Copper/Iron/Gold tool costs, Furnace bars, inventory timing and sell-or-keep rules."
          gameTitle="Moonlight Peaks"
          gameHref="/moonlight-peaks"
          breadcrumbBaseHref="/moonlight-peaks"
          breadcrumbBaseLabel="Moonlight Peaks Guide"
          updatedAt="July 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EarlyResourcesToolUpgradesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}