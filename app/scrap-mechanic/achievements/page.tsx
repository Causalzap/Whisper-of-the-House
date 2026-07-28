import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ScrapMechanicAchievementsContent from "@/data/scrap-mechanic/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/scrap-mechanic`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Scrap Mechanic Achievements Guide: All 34 & 100% Route";

const metadataDescription =
  "Complete all 34 Scrap Mechanic achievements with a practical 100% route, Level 5 raid prep, Vault goals, multiplayer checks, and unlock fixes.";

const imageUrls = [
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-complete.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-first-grow-lab-carrot-seed-bot.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-farmbot-warehouse-key-drop.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-hubert-watchtower-material-list.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-vault-10000-quota.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-craftbot-locked-recipes.webp`,
  `${siteUrl}/images/scrap-mechanic/scrap-mechanic-mining-elevator-floor-selection.webp`,
];

const toc = [
  {
    id: "secret-achievements",
    label: "Secret achievements",
  },
  {
    id: "early-achievements",
    label: "Early achievements",
  },
  {
    id: "combine-counters",
    label: "Combine achievement counters",
  },
  {
    id: "master-of-defence",
    label: "Master of Defence",
  },
  {
    id: "combat-achievements",
    label: "Combat achievements",
  },
  {
    id: "builder-achievements",
    label: "Builder achievements",
  },
  {
    id: "mining-achievements",
    label: "Mining achievements",
  },
  {
    id: "multiplayer-achievements",
    label: "Multiplayer achievement credit",
  },
  {
    id: "all-achievements",
    label: "All 34 achievements",
  },
  {
    id: "achievement-not-unlocking",
    label: "Achievement not unlocking",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/scrap-mechanic",
    label: "Scrap Mechanic 1.0 Guide Hub",
  },
  {
    href: "/scrap-mechanic/first-grow-lab-walkthrough",
    label: "First Grow Lab Walkthrough",
  },
  {
    href: "/scrap-mechanic/hubert-watchtower-small-tank",
    label: "Hubert Watchtower & Small Tank",
  },
  {
    href: "/scrap-mechanic/mining-guide",
    label: "Plasma Drill & Mining Guide",
  },
  {
    href: "/scrap-mechanic/ore-processing-guide",
    label: "Ore Processing, Ingots & Vault",
  },
  {
    href: "/scrap-mechanic/warehouse-key",
    label: "Warehouse Key Guide",
  },
  {
    href: "/scrap-mechanic/warehouse-walkthrough",
    label: "Warehouse Walkthrough",
  },
  
];

const faqEntities = [
  {
    question: "Does Scrap Mechanic have secret achievements?",
    answer:
      "Steam currently exposes the names and basic requirements of all 34 achievements. Some descriptions still hide their practical route or location, but they should not be labeled officially secret without a verified Steam hidden flag.",
  },
  {
    question:
      "Do all players receive the same achievement in Scrap Mechanic multiplayer?",
    answer:
      "Do not rely on automatic shared credit. The safest approach is for the player seeking the achievement to perform the final interaction, delivery, kill, revival, or Mining Hub Station activation.",
  },
  {
    question: "Are all 0.1% Scrap Mechanic achievements extremely difficult?",
    answer:
      "No. The achievement set was introduced around the 1.0 launch, so many percentages remain low because players have not reached the later systems. Some are long grinds, while others are short combinations or hidden-location tasks.",
  },
  {
    question: "Does Growlab champion require the Carrot Seed?",
    answer:
      "No. Growlab champion is tied to completing the first Grow Lab. The Carrot Seed is a separate progression pickup that can be collected before reaching the final Large Chest.",
  },
  {
    question:
      "Does Schematic collector club require every Craftbot recipe?",
    answer:
      "No. The official condition specifies all block Schematics. Unknown block recipes should be tracked separately from tools, furniture, consumables, and recipes locked only by Craftbot level.",
  },
  {
    question:
      "Can I spend Vault Credits while working on Bank mechanic?",
    answer:
      "It is safer to keep the Vault balance intact while working toward 2,000,000. Withdrawing Credits creates additional value that must be deposited again before the achievement can register.",
  },
  {
    question: "Does Spectacular Mechanic need a separate trigger?",
    answer:
      "No. Spectacular Mechanic is the final achievement for obtaining every other achievement. When it remains locked, identify which of the other 33 achievements is still missing.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "Scrap Mechanic Achievements Guide: All 34 and My 100% Route",
    description:
      "Follow a practical Scrap Mechanic 1.0 achievement route covering Grow Labs, raids, combat, Builder quests, Mining Hub progression, Vault goals, multiplayer credit, and unlock troubleshooting.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Scrap Mechanic first Grow Lab completion and Large Chest achievement progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Plan all 34 achievements, combine long counters, prepare a Level 5 raid, progress the Vault and Mining Hub, and fix missing unlocks.",
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
          name: "Scrap Mechanic Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
        "Scrap Mechanic Achievements Guide: All 34 Achievements and 100% Route",
      description:
        "A complete Scrap Mechanic 1.0 achievement guide covering all 34 Steam achievements, an efficient 100% progression route, the first Grow Lab, Builder and Challenge objectives, combined Bot-kill and farming counters, Level 5 raid preparation for Master of defence, combat and combination achievements, Hubert's Watchtower material requirements, Mining Site 01 progression, the 2,000,000 Vault target, block Schematics, Mining Hub Stations, multiplayer achievement ownership, current completion-rate context, and troubleshooting for achievements that fail to unlock.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-28",
      dateModified: "2026-07-28",
      about: [
        {
          "@type": "VideoGame",
          name: "Scrap Mechanic",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic achievements",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic 100 percent route",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Growlab champion",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Master of defence",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Level 5 raid",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Bot splat",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Lethal snack",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Helpful builder",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Blocks for days",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Bank mechanic",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Schematic collector club",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Up and running",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic Mining Hub",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic multiplayer achievements",
        },
        {
          "@type": "Thing",
          name: "Scrap Mechanic achievement not unlocking",
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
          title="How I Work Through All 34 Scrap Mechanic Achievements"
          description="I combine the long counters with normal progression, prepare controlled setups for the awkward unlocks, and leave the Vault, Schematics, outfits, and final cleanup for late game."
          gameTitle="Scrap Mechanic"
          gameHref="/scrap-mechanic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ScrapMechanicAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}