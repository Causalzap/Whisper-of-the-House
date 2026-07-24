import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TearsOfMetalCoOpGuideContent from "@/data/tears-of-metal/co-op-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tears-of-metal`;
const pageUrl = `${hubUrl}/co-op-guide`;

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-co-op-lobby-friends-code.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-co-op-shared-village-cursors.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-co-op-route-vote-flag.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-co-op-shared-paid-chest.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-co-op-revive-cost-350.webp`,
];

const toc = [
  {
    id: "start-co-op",
    label: "Start a co-op Campaign",
  },
  {
    id: "choose-host",
    label: "Choose the Host",
  },
  {
    id: "shared-village",
    label: "Shared Village",
  },
  {
    id: "route-voting",
    label: "Route confirmation",
  },
  {
    id: "shared-loot",
    label: "Shared loot & Coins",
  },
  {
    id: "revives",
    label: "Revives & costs",
  },
  {
    id: "battlefield-roles",
    label: "Battlefield roles",
  },
  {
    id: "co-op-plan",
    label: "Campaign plan",
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
    href: "/tears-of-metal/village-upgrades",
    label: "Village Upgrades & Progression",
  },
  {
    href: "/tears-of-metal/boss-guide",
    label: "Gilles & Iseult Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Tears of Metal Co-op Guide: Host, Loot & Revives",
  description:
    "Choose the right Host, confirm routes, split loot and Coins, assign healing, manage revive costs, and divide roles in Tears of Metal co-op.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Tears of Metal Co-op Guide: Host Rules, Shared Loot and Revives",
    description:
      "Set up a two-player Campaign, choose the Host item pool, confirm routes, assign pickups, preserve revive Coins, and split battlefield roles.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Tears of Metal multiplayer lobby with Friends visibility, four-player limit, and Lobby Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tears of Metal Co-op Guide: Loot, Coins & Revives",
    description:
      "Learn Host rules, route confirmation, shared Chest behavior, separate Coin balances, healing assignment, revive costs, and team roles.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "How many players does Tears of Metal co-op support?",
    answer:
      "The lobby displays a maximum-player setting of four. The detailed loot, Coin, route, and revive observations in this guide come from a two-player Campaign.",
  },
  {
    question: "Does accepting an invitation start a Tears of Metal Campaign?",
    answer:
      "Not in the tested session. The Guest accepted the invitation but remained in the menu until the Host pressed Start Game.",
  },
  {
    question: "Does the Host affect the available items in Tears of Metal co-op?",
    answer:
      "Yes in the tested lobby. The Guest received a warning that the Campaign used items owned by the Host, so the account with the stronger owned-item pool should Host.",
  },
  {
    question: "Do all players need to confirm the route?",
    answer:
      "The tested route screen displayed a flag and a waiting state while another player had not confirmed. Use that pause to compare both health bars, Coin balances, Threat, and the next reward.",
  },
  {
    question: "Is all Tears of Metal co-op loot shared?",
    answer:
      "No single rule covers every interaction. A free battlefield pickup behaved as personal in one tested case, while one payment opened a 75-Coin Chest for both players.",
  },
  {
    question: "Are Coins shared in Tears of Metal co-op?",
    answer:
      "No. Players maintain separate balances. Each player needs an individual reserve for healing, purchases, or a revive they may need to perform.",
  },
  {
    question: "Can players transfer Coins in Tears of Metal?",
    answer:
      "No direct Coin-transfer option was available in the tested Campaign. Team spending must be planned around the balance held by the player who will make the payment.",
  },
  {
    question: "Can healing be given to another player after collection?",
    answer:
      "The collected healing could not be handed back in the tested interaction. Assign the healing before anyone picks it up.",
  },
  {
    question: "Who pays for a revive in Tears of Metal co-op?",
    answer:
      "The surviving player pays the displayed cost. Do not rely on Coins held by the downed player.",
  },
  {
    question: "Does a revive always cost 350 Coins?",
    answer:
      "The displayed cost changed during the tested Campaign. One revive showed 250 Coins and a later revive showed 350, so read the current prompt every time.",
  },
  {
    question: "What happens when a player is not revived?",
    answer:
      "The downed player could spectate after the revive opportunity ended in the tested session. The surviving player then continued without the second active hero.",
  },
  {
    question: "Should both players use the same build?",
    answer:
      "No. Complementary roles are easier to manage. One player should provide frontal control and single-target pressure while the other handles structures, rescues, ranged threats, or fast crowd clearing.",
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
          name: "Co-op Guide",
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
        "Tears of Metal Co-op Guide: Host Rules, Shared Loot, Coins and Revives",
      description:
        "This Tears of Metal co-op guide explains how to start a multiplayer Campaign, choose the Host based on the owned-item pool, use the Friends lobby and Lobby Code, divide Village preparation, confirm map routes, and compare both players' health and Coin balances before continuing. It documents observed two-player behavior for personal battlefield pickups, a shared 75-Coin paid Chest, separate Coin balances, healing that cannot be handed back after collection, and revive prompts that changed from 250 to 350 Coins. It also covers safe revive order, Commander rescues, frontline and mobile roles, Wallace and Brienne role combinations, boss preparation, spectator behavior after a missed revive, and a stage-by-stage co-op Campaign plan.",
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
          name: "Tears of Metal co-op guide",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal multiplayer",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Host item pool",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Lobby Code",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal route confirmation",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal shared loot",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal separate Coin balances",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal healing assignment",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal revive cost",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal spectator mode",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal two-player roles",
        },
        {
          "@type": "Thing",
          name: "Wallace and Brienne co-op",
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
          title="How I Run a Tears of Metal Co-op Campaign"
          description="Choose the stronger Host item pool, compare both health and Coin balances before voting, assign pickups and healing, preserve individual revive reserves, and divide frontline and mobile roles."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TearsOfMetalCoOpGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}