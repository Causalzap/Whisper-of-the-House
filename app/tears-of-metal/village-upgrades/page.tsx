import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TearsOfMetalVillageUpgradesContent from "@/data/tears-of-metal/village-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tears-of-metal`;
const pageUrl = `${hubUrl}/village-upgrades`;

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-gems-currency.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-barracks-upgrades.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-market-special-discount.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-cartographer-shrine-upgrades.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-ally-moniker-lasting-buff.webp`,
];

const toc = [
  {
    id: "currency-priority",
    label: "Currency priority",
  },
  {
    id: "first-wallace-upgrades",
    label: "First Wallace upgrades",
  },
  {
    id: "hero-or-army",
    label: "Hero or army first",
  },
  {
    id: "barracks-upgrades",
    label: "Barracks upgrades",
  },
  {
    id: "marriott-companion",
    label: "Marriott & Tools of the Trade",
  },
  {
    id: "market-or-cartographer",
    label: "Market or Cartographer",
  },
  {
    id: "ally-monikers",
    label: "Ally Monikers",
  },
  {
    id: "what-persists",
    label: "What persists",
  },
  {
    id: "first-three-returns",
    label: "First three returns",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tears-of-metal",
    label: "Tears of Metal Guide Hub",
  },
  {
    href: "/tears-of-metal/beginner-guide",
    label: "Beginner Guide & Act 1 Route",
  },
  {
    href: "/tears-of-metal/best-builds",
    label: "Wallace & Brienne Builds",
  },
  {
    href: "/tears-of-metal/co-op-guide",
    label: "Co-op Host, Loot & Revives",
  },
  {
    href: "/tears-of-metal/boss-guide",
    label: "Gilles & Iseult Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Tears of Metal Village Upgrades: Best Early Order",
  description:
    "Follow an early Tears of Metal Village upgrade order covering Wallace stats, Barracks priorities, currencies, Market vs Cartographer, Monikers, and carryover.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Tears of Metal Village Upgrades: Best Early Upgrade Order",
    description:
      "Use failed Campaigns to choose Wallace stats, Barracks training, Market or Cartographer investments, Ally Monikers, and permanent currency spending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "Tears of Metal Barracks with Commander, Companion, roster, and Ally Command upgrades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tears of Metal Village Upgrade Order",
    description:
      "Choose the right Wallace stat, Barracks command, Market or Cartographer investment, and permanent currency purchase after each Campaign.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "What should I upgrade first in Tears of Metal?",
    answer:
      "For Wallace, unlock special soldier commands for 50 Triskeles. Then choose Max HP, Block Stamina, or Heavy Damage based on the previous Campaign failure.",
  },
  {
    question: "Is Hardy Constitution always the best first stat?",
    answer:
      "No. Hardy Constitution is best after a low-health failure. Block Stamina fits repeated guard breaks, while Heavy Damage fits safe Finishers that still lack damage.",
  },
  {
    question: "Should I spread Triskeles across every hero?",
    answer:
      "Not early. Strengthen the hero being used for the next clear. Brienne and Ruadh have different action loops, so Wallace's Heavy-focused order should not be copied into their trees without testing their options.",
  },
  {
    question: "Which Ally Command should I upgrade first?",
    answer:
      "Upgrade the troop type already reaching its intended target. Infantry fits central groups, Spearmen fit protected enemies, and Archers fit ranged pressure or damage while repositioning.",
  },
  {
    question: "Should I build the Market or Cartographer first?",
    answer:
      "Build the Market when merchants are reachable with Coins but their item options are weak. Build the Cartographer when Shrine and encounter availability keep limiting the route.",
  },
  {
    question: "Do my Village upgrades work when I join another player?",
    answer:
      "The tested multiplayer warning stated that the Host's owned items were active during the Campaign. Choose the Host based on the stronger relevant progression and item pool.",
  },
  {
    question: "What should I buy with my first Dragonstone Shard?",
    answer:
      "Save it until a specific weapon, equipment item, skill, hero option, or trial is the intended unlock. Do not spend the first Shard only to clear a notification.",
  },
  {
    question: "Are Ally Monikers permanent?",
    answer:
      "The game describes the selected Ally Moniker as a lasting buff on the chosen Commander. Assign it to a Commander that will remain part of future army selections.",
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
          name: "Tears of Metal Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Village Upgrades",
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
        "Tears of Metal Village Upgrades and Best Early Upgrade Order",
      description:
        "This Tears of Metal Village upgrade guide explains how to choose permanent progression after a failed Campaign. It covers the 50-Triskeles Wallace soldier-command unlock, Hardy Constitution for 20 percent Max HP, 25 additional Max Block Stamina, Brute Force for 5 percent Heavy Damage, and how to decide whether the hero, army, or route caused the failure. It also covers Triskeles, Statues, Gems, Scrolls, Coins, Dragonstone Shards, Recruitment Drive, Military Advantage, Companion capacity, 20 percent Ally Command Damage upgrades, Marriott and Tools of the Trade, Special Discount I, Pilgrim's Itinerary, Ally Monikers, permanent carryover, and a practical first-three-returns upgrade order.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-24",
      dateModified: "2026-07-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Tears of Metal",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Village upgrades",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal upgrade order",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal permanent progression",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal currencies",
        },
        {
          "@type": "Thing",
          name: "Triskeles",
        },
        {
          "@type": "Thing",
          name: "Statues",
        },
        {
          "@type": "Thing",
          name: "Gems",
        },
        {
          "@type": "Thing",
          name: "Scrolls",
        },
        {
          "@type": "Thing",
          name: "Dragonstone Shards",
        },
        {
          "@type": "Thing",
          name: "Hardy Constitution",
        },
        {
          "@type": "Thing",
          name: "Brute Force",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Barracks",
        },
        {
          "@type": "Thing",
          name: "Recruitment Drive",
        },
        {
          "@type": "Thing",
          name: "Military Advantage",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Market",
        },
        {
          "@type": "Thing",
          name: "Special Discount I",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Cartographer",
        },
        {
          "@type": "Thing",
          name: "Pilgrim's Itinerary",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Ally Monikers",
        },
        {
          "@type": "Thing",
          name: "Marriott",
        },
        {
          "@type": "Thing",
          name: "Tools of the Trade",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="Best Early Village Upgrade Order in Tears of Metal"
          description="Use the last Campaign failure to choose Wallace stats, Barracks training, Market or Cartographer investments, Ally Monikers, and the next permanent currency purchase."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TearsOfMetalVillageUpgradesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}