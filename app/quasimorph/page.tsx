import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphHubContent from "@/data/quasimorph/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/quasimorph`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-conveyor-first-ship-upgrade.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-barter-station-wanted-goods.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-faction-power-tech-reputation.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-ancom-pcpu-recipient-choice.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Guide: Beginner Route, Contracts and Upgrades",
  description:
    "Build a stable Quasimorph 1.0 campaign with the right contracts, loot priorities, Magnum upgrades, healing decisions, faction choices and story routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Quasimorph 1.0 Guide for a Stable Early Campaign",
    description:
      "Choose the next contract, upgrade, faction and extraction decision by the problem currently blocking your campaign.",
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
    title: "Quasimorph 1.0 Guide Hub",
    description:
      "Follow a stable campaign loop and open the guide that matches your current contract, loot, healing, upgrade or story problem.",
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
        "Quasimorph Guide: A Stable Campaign Route for Contracts, Loot, Magnum Upgrades, Healing, Factions, Quasimorphosis, and Story Progress",
      description:
        "This Quasimorph 1.0 guide hub explains the stable early campaign loop, how to reset the Magnum after extraction, choose contracts the current roster can survive, reserve inventory space for objectives and permanent progress, spend the haul on the bottleneck that caused the last inefficient mission, open the dedicated guide for contracts, ship upgrades, loot priority, wounds, Quasimorphosis or the RealWare storyline, use barter to target named progression components, read faction Power, Technology and Reputation as separate signals, choose the opening AnCom data recipient before trading it, delay minor corporations, pacts and long-range travel until the core loop works, and decide when to buy, wait or turn back.",
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
          name: "Quasimorph guide",
        },
        {
          "@type": "Thing",
          name: "Quasimorph beginner guide",
        },
        {
          "@type": "Thing",
          name: "Quasimorph contracts",
        },
        {
          "@type": "Thing",
          name: "Quasimorph loot priority",
        },
        {
          "@type": "Thing",
          name: "Quasimorph ship upgrades",
        },
        {
          "@type": "Thing",
          name: "Quasimorph wounds and infection",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Quasimorphosis",
        },
        {
          "@type": "Thing",
          name: "Quasimorph factions",
        },
        {
          "@type": "Thing",
          name: "Quasimorph barter",
        },
        {
          "@type": "Thing",
          name: "Quasimorph RealWare storyline",
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
          title="How I Keep a Quasimorph Campaign Stable"
          description="Turn contracts into permanent progress without risking the entire working economy on every launch."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "campaign-loop",
              label: "Stable campaign loop",
            },
            {
              id: "guide-router",
              label: "Choose the right guide",
            },
            {
              id: "barter",
              label: "Use barter for progression",
            },
            {
              id: "faction-signals",
              label: "Power, Technology and Reputation",
            },
            {
              id: "story-choice",
              label: "Choose the opening story route",
            },
            {
              id: "leave-for-later",
              label: "Systems to leave for later",
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
              href: "/quasimorph/ship-upgrades",
              label: "Best Ship Upgrades",
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
          ]}
        >
          <QuasimorphHubContent />

          
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Quasimorph"
          heading="Looking for another game after Quasimorph?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}