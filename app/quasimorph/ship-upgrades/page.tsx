import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphShipUpgradesContent from "@/data/quasimorph/ship-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/ship-upgrades`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-conveyor-first-ship-upgrade.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-monitoring-upgrade-tree.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-floor-scanner-upgrade-tree.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-hangar-capsule-four-slots.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-scavenger-supply-upgrades.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-clone-rank-upgrade.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-engineering-cost-optimization.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Ship Upgrades Guide: Best Magnum Order",
  description:
    "Choose the best Magnum upgrades in Quasimorph 1.0, from Conveyor and Monitoring to Scanner, Capsule, Scavengers, Clone Rank and Engineering.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Best Magnum Upgrade Order in Quasimorph 1.0",
    description:
      "Build the Magnum around your actual bottleneck: contracts, navigation, extraction, supplies, operator strength or sustainable Engineering.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph Supply upgrade tree showing the first Conveyor with one production slot and one queue slot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph Ship Upgrades Guide",
    description:
      "Choose Monitoring, Scanner, Capsule and other Magnum upgrades based on the problem that is slowing your campaign.",
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
          name: "Quasimorph Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ship Upgrades Guide",
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
        "Quasimorph Ship Upgrades Guide: Best Magnum Order for Conveyor, Monitoring, Scanner, Capsule, Scavengers, Clone Rank, and Engineering",
      description:
        "This Quasimorph 1.0 ship upgrades guide explains how to use the Conveyor as the opening production foundation, choose Monitoring when the contract board is the bottleneck, choose the Scanner when blind floor navigation is wasting food and medical supplies, buy the Capsule when rare progress keeps dying with the operator, use Scavengers and Recycling to reduce routine shortages, improve Clone Rank when Health and Calorie use remain the main mission problem, delay Engineering until weapon and armour projects are sustainable, leave Travel, Augmentation, Pact and proxy branches until a real campaign route needs them, and decide when to buy, wait or turn back from the next Magnum node.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-02",
      dateModified: "2026-08-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Quasimorph",
        },
        {
          "@type": "Thing",
          name: "Quasimorph ship upgrades",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Magnum",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Conveyor",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Monitoring",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Scanner",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Capsule",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Scavengers",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Clone Rank",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Engineering",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Magnum upgrade order",
        },
        {
          "@type": "Thing",
          name: "Quasimorph 1.0",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Choose the Next Magnum Upgrade"
          description="Build the branch that removes the problem you keep paying for: weak contract access, blind navigation, lost loot, unstable supplies or fragile operators."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "conveyor-foundation",
              label: "Conveyor foundation",
            },
            {
              id: "monitoring",
              label: "When to buy Monitoring",
            },
            {
              id: "scanner",
              label: "When to buy the Scanner",
            },
            {
              id: "capsule",
              label: "When to buy the Capsule",
            },
            {
              id: "scavengers-recycling",
              label: "Scavengers and Recycling",
            },
            {
              id: "clone-rank",
              label: "When to buy Clone Rank",
            },
            {
              id: "engineering",
              label: "When Engineering is worth it",
            },
            {
              id: "late-branches",
              label: "Branches to leave for later",
            },
            {
              id: "buy-wait-turn-back",
              label: "Buy, wait or turn back",
            },
          ]}
          relatedLinks={[
            {
              href: "/quasimorph/beginner-guide",
              label: "Quasimorph Beginner Guide",
            },
            {
              href: "/quasimorph/contracts-guide",
              label: "Contracts, Rewards & Mission Choice",
            },
            {
              href: "/quasimorph/loot-priority",
              label: "Early-Game Loot Priority",
            },
            {
              href: "/quasimorph/wounds-infection-medicine",
              label: "Wounds, Infection & Medicine",
            },
            {
              href: "/quasimorph/quasimorphosis-guide",
              label: "Quasimorphosis, Ecolapse & Barons",
            },
            {
              href: "/quasimorph/start-realware-storyline",
              label: "Start the RealWare Storyline",
            },
            {
              href: "/quasimorph",
              label: "Quasimorph Guide Hub",
            },
          ]}
        >
          <QuasimorphShipUpgradesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}