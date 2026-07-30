import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BillsMustBePaidBestUpgradesSkillTreeContent from "@/data/bills-must-be-paid/best-upgrades-skill-tree.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/bills-must-be-paid`;
const pageUrl = `${hubUrl}/best-upgrades-skill-tree`;

const imageUrls = [
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-spawn-bottleneck-empty-desk.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-new-hammer-seven-damage.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-super-jackpot-skill-tree-node.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-king-piggy-skill-tree-branch.webp`,
  `${siteUrl}/images/bills-must-be-paid/bills-must-be-paid-maxed-out-achievement.webp`,
];

const toc = [
  {
    id: "best-upgrade-order",
    label: "Best upgrade order",
  },
  {
    id: "diagnose-bottleneck",
    label: "Read the desk bottleneck",
  },
  {
    id: "damage-before-speed",
    label: "Damage before Attack Speed",
  },
  {
    id: "spawn-bottleneck",
    label: "Starting Piggies & Spawn",
  },
  {
    id: "stamina-upgrades",
    label: "Stamina upgrades",
  },
  {
    id: "hammer-upgrades",
    label: "When to buy a Hammer",
  },
  {
    id: "loot-luck-midas",
    label: "Loot, Luck & Midas Touch",
  },
  {
    id: "super-jackpot-upgrade",
    label: "Super Jackpot",
  },
  {
    id: "late-game-upgrades",
    label: "Late-game priorities",
  },
  {
    id: "hidden-skill-tree-branches",
    label: "Hidden King Piggy branches",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/bills-must-be-paid",
    label: "Bills Must Be Paid Guide Hub",
  },
  {
    href: "/bills-must-be-paid/achievements-guide",
    label: "All 27 Achievements",
  },
  {
    href: "/bills-must-be-paid/prestige-rings-bracelets",
    label: "Prestige, Rings & Bracelets",
  },
  {
    href: "/bills-must-be-paid/bills-loans-bankruptcy",
    label: "Bills, Loans & Bankruptcy",
  },
  {
    href: "/bills-must-be-paid/100-percent-walkthrough",
    label: "100% Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "Bills Must Be Paid Best Upgrades & Skill Tree Guide",
  description:
    "Use desk bottlenecks to choose Damage, Spawn, Stamina, Hammers, Loot, Super Jackpot, and the hidden King Piggy Skill Tree branches.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Bills Must Be Paid Best Upgrades & Skill Tree Order",
    description:
      "Diagnose an empty, overcrowded, or underpowered desk and buy the upgrade that fixes the current Damage, Spawn, Stamina, Hammer, or income bottleneck.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Bills Must Be Paid desk with no Piggies remaining while usable Stamina is still available",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Must Be Paid Best Upgrades & Skill Tree",
    description:
      "Choose upgrades by reading the desk, fix Damage and Spawn bottlenecks, time Hammer purchases, and find the late King Piggy branches.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Does Maxed Out require every Piggy level in Bills Must Be Paid?",
    answer:
      "No. Maxed Out checks whether every Skill Tree upgrade has been purchased. Piggy levels affect progression and income, but they are not part of the achievement requirement.",
  },
  {
    question:
      "Do Skill Tree upgrades survive bankruptcy in Bills Must Be Paid?",
    answer:
      "No. Current cash, Hammers, normal Skill Tree progress, gadgets and current-cycle Piggy progression reset after bankruptcy. Coins and purchased Rings and Bracelets remain.",
  },
  {
    question:
      "Does a 0.5% Super Jackpot chance guarantee one payout every 200 Piggies?",
    answer:
      "No. Each destroyed Piggy receives an independent roll. Two hundred kills represent a long-run expectation at 0.5%, not a guaranteed trigger point, so dry streaks and closely grouped payouts are both possible.",
  },
  {
    question:
      "Should I buy every cheap Skill Tree node before saving for a major upgrade?",
    answer:
      "Only when the inexpensive nodes solve different active bottlenecks. Several small upgrades can outperform one expensive purchase when they improve Damage, Stamina, Spawn and Loot together. I save for the major purchase when it creates a clear Hammer or kill breakpoint.",
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
          name: "Bills Must Be Paid Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Upgrades and Skill Tree",
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
        "Bills Must Be Paid Best Upgrades, Skill Tree Order and Bottleneck Guide",
      description:
        "This Bills Must Be Paid upgrade guide explains how I choose Skill Tree purchases by reading the desk instead of following one fixed node order. An empty desk points toward Starting Piggies or Spawn Rate, a crowded desk of surviving targets points toward Damage, Crit or a stronger Hammer, and a run ending with killable targets points toward Stamina. The guide also explains when Attack Speed becomes useful, when additional Spawn becomes harmful, and why Loot, Luck, Glowing Chance and Midas Touch should usually come after the build can already kill consistently. It includes the $1,000 Toy Hammer breakpoint, which raised displayed Base Damage from 7 to 9, Attack Speed from 1.20 to 1.76 per second and Hit Radius from 2 to 2.30. Late-game sections cover the $2 million Super Jackpot node, its independent 0.5% trigger chance, high-HP Piggy bottlenecks and the additional King Piggy Skill Tree branches that must be completed before Maxed Out can unlock.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-30",
      dateModified: "2026-07-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Bills Must Be Paid",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid best upgrades",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid Skill Tree",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid upgrade order",
        },
        {
          "@type": "Thing",
          name: "Base Damage upgrades",
        },
        {
          "@type": "Thing",
          name: "Attack Speed upgrades",
        },
        {
          "@type": "Thing",
          name: "Starting Piggies and Spawn Rate",
        },
        {
          "@type": "Thing",
          name: "Stamina upgrades",
        },
        {
          "@type": "Thing",
          name: "Bills Must Be Paid best Hammer",
        },
        {
          "@type": "Thing",
          name: "Toy Hammer",
        },
        {
          "@type": "Thing",
          name: "Loot and Luck upgrades",
        },
        {
          "@type": "Thing",
          name: "Midas Touch",
        },
        {
          "@type": "Thing",
          name: "Super Jackpot Skill Tree node",
        },
        {
          "@type": "Thing",
          name: "King Piggy Skill Tree branches",
        },
        {
          "@type": "Thing",
          name: "Maxed Out achievement",
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
          title="How I Choose Upgrades by Reading the Desk"
          description="I buy Damage when Piggies stop dying, Spawn when the desk empties, Stamina when runs end with targets left, and Loot only after the build clears reliably."
          gameTitle="Bills Must Be Paid"
          gameHref="/bills-must-be-paid"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BillsMustBePaidBestUpgradesSkillTreeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}