import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphContractsGuideContent from "@/data/quasimorph/contracts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/contracts-guide`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-contract-beneficiary-victim-comparison.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-contract-change-side-reputation-minus-10.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-first-contract-one-skull-travel-time.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-network-center-power-concentration.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-first-pcpu-mission-objective.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-mission-event-no-medical-supplies.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Contracts Guide: Rewards, Loot and Missions",
  description:
    "Read Beneficiary, Victim, travel time, Floors and Power Concentration to choose safer Quasimorph contracts and avoid wasting operators and supplies.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Choose Contracts in Quasimorph 1.0",
    description:
      "Compare faction costs, travel, objectives, station types and floor loot before risking an operator on the wrong contract.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph Siren's Song contract comparing Beneficiary, Victim, Reward, Power Concentration and Floors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph Contracts Guide",
    description:
      "Choose contracts by objective, faction cost, travel, Floors and station value instead of taking the largest Reward.",
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
          name: "Contracts Guide",
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
        "Quasimorph Contracts Guide: How to Read Rewards, Objectives, Travel, Floors, and Power Concentration",
      description:
        "This Quasimorph 1.0 contracts guide explains how to compare Beneficiary and Victim, judge the reputation cost of changing sides, compare travel time with Time remains, read Difficulty and Floors together, prepare for Elimination and Control objectives, use station type and Power Concentration to predict the value of optional floor loot, separate completion Reward from extracted loot, read the Briefing and evacuation condition, prepare for mission events that remove medical supplies, decide what to do when the local contract board is bad, and choose when to take, wait or turn back before launch.",
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
          name: "Quasimorph contracts",
        },
        {
          "@type": "Thing",
          name: "Quasimorph mission rewards",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Beneficiary and Victim",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Power Concentration",
        },
        {
          "@type": "Thing",
          name: "Quasimorph station types",
        },
        {
          "@type": "Thing",
          name: "Quasimorph contract travel time",
        },
        {
          "@type": "Thing",
          name: "Quasimorph mission Floors",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Espionage",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Elimination",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Control missions",
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
          title="How I Choose Contracts Without Wasting an Operator"
          description="Compare the faction cost, route, Floors, objective and station value before committing your loadout to the largest Reward."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "read-contract-card",
              label: "Read the whole contract card",
            },
            {
              id: "beneficiary-victim",
              label: "Beneficiary and Victim",
            },
            {
              id: "travel-and-expiration",
              label: "Travel and Time remains",
            },
            {
              id: "difficulty-and-floors",
              label: "Difficulty, Floors and objective",
            },
            {
              id: "power-concentration",
              label: "Station type and Power",
            },
            {
              id: "read-objective",
              label: "Read the Briefing",
            },
            {
              id: "mission-events",
              label: "Mission events",
            },
            {
              id: "bad-contract-board",
              label: "When the board is bad",
            },
            {
              id: "take-wait-turn-back",
              label: "Take, wait or turn back",
            },
          ]}
          relatedLinks={[
            {
              href: "/quasimorph/beginner-guide",
              label: "Quasimorph Beginner Guide",
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
            {
              href: "/quasimorph",
              label: "Quasimorph Guide Hub",
            },
          ]}
        >
          <QuasimorphContractsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}