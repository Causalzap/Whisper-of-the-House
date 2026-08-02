import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphLootPriorityContent from "@/data/quasimorph/loot-priority.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/loot-priority`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-production-chip-shuttle-priority.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-cloning-control-system-high-value-loot.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-one-stack-rags-enough.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-full-stack-plastic-stop-looting.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-unload-ammo-before-dismantling.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-gunsmith-firearm-repair-kit.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-guardsman-clothing-barter-168.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Loot Priority Guide: What to Keep or Drop",
  description:
    "Decide what to keep, drop, dismantle or trade in Quasimorph 1.0, and know when a mission item, chip or Magnum component means it is time to extract.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "What to Keep, Drop and Extract in Quasimorph 1.0",
    description:
      "Protect mission items and permanent unlocks, cap common materials, strip duplicate weapons and leave once the loot has already won the run.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph identifying production chips and mercenary mind chips as high-priority extraction items",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph Loot Priority Guide",
    description:
      "Choose which backpack slot is worth protecting, what to dismantle and when to stop looting and extract.",
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
          name: "Loot Priority Guide",
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
        "Quasimorph Loot Priority Guide: What to Keep, Drop, Dismantle, Trade, and Extract",
      description:
        "This Quasimorph 1.0 loot priority guide explains how to reserve inventory space for mission objectives, protect production chips and mercenary mind chips, prioritize the exact Magnum components needed for the next upgrade, cap common materials such as Rags and Plastic, compare weapon condition and unload ammunition before dismantling, decide when a Gunsmith Firearm Repair Kit is worth its maximum-condition cost, separate barter goods from permanent progression items, choose what to drop when the backpack is full, leave once the loot has already secured the run, and sort the haul aboard the Magnum before selecting the next contract.",
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
          name: "Quasimorph loot priority",
        },
        {
          "@type": "Thing",
          name: "Quasimorph inventory management",
        },
        {
          "@type": "Thing",
          name: "Quasimorph mission items",
        },
        {
          "@type": "Thing",
          name: "Quasimorph production chips",
        },
        {
          "@type": "Thing",
          name: "Quasimorph mercenary mind chips",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Magnum components",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Rags and Plastic",
        },
        {
          "@type": "Thing",
          name: "Quasimorph weapon dismantling",
        },
        {
          "@type": "Thing",
          name: "Quasimorph barter",
        },
        {
          "@type": "Thing",
          name: "Quasimorph extraction",
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
          title="How I Decide What to Keep Before the Backpack Is Full"
          description="Protect mission items and permanent unlocks first, cap common materials, and leave as soon as the haul has already created permanent progress."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "reserve-objective-slot",
              label: "Reserve the objective slot",
            },
            {
              id: "permanent-unlocks",
              label: "Protect permanent unlocks",
            },
            {
              id: "upgrade-components",
              label: "Keep the next upgrade",
            },
            {
              id: "material-caps",
              label: "Cap common materials",
            },
            {
              id: "weapons-and-armor",
              label: "Weapons and armour",
            },
            {
              id: "craft-on-site",
              label: "Craft on site",
            },
            {
              id: "trade-or-keep",
              label: "Trade or keep",
            },
            {
              id: "full-backpack",
              label: "When the backpack is full",
            },
            {
              id: "when-to-leave",
              label: "When to leave",
            },
            {
              id: "sort-after-extraction",
              label: "Sort after extraction",
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
          <QuasimorphLootPriorityContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}