import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionGuideContent from "@/data/war-in-the-north-legacy-edition/index.mdx";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/war-in-the-north-legacy-edition`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-urgost-deal.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-nordinbad-siege.webp`,
];

const toc = [
  {
    id: "how-i-use-this-hub",
    label: "How I use this guide",
  },
  {
    id: "legacy-edition",
    label: "Legacy Edition changes",
  },
  {
    id: "first-playthrough",
    label: "First-playthrough rule",
  },
  {
    id: "walkthrough",
    label: "Walkthrough & progression",
  },
  {
    id: "character-and-gear",
    label: "Characters & gear",
  },
  {
    id: "optional-content",
    label: "Optional content",
  },
  {
    id: "achievements",
    label: "Achievements & 100%",
  },
  {
    id: "coop",
    label: "Co-op",
  },
  {
    id: "my-guide-rule",
    label: "Guide ownership",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
  {
    href: "/war-in-the-north-legacy-edition/best-character-builds",
    label: "Best Character & Builds",
  },
  {
    href: "/war-in-the-north-legacy-edition/weapons-mithril-upgrades",
    label: "Weapons & Mithril Guide",
  },
  {
    href: "/war-in-the-north-legacy-edition/secrets",
    label: "All Secrets Checklist",
  },
  {
    href: "/war-in-the-north-legacy-edition/side-quests",
    label: "Side Quests & Missables",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Guide: Walkthrough & Builds",
  description:
    "War in the North Legacy Edition guide hub for walkthroughs, builds, weapons, Mithril, Secrets, side quests, achievements, co-op, and Legacy changes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "War in the North Legacy Edition Guide: Walkthrough & Builds",
    description:
      "Find the right War in the North Legacy Edition guide for campaign progression, characters, weapons, Secrets, side quests, achievements, co-op, and version changes.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Eradan, Farin, and Andriel meeting Urgost in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Guide: Walkthrough & Builds",
    description:
      "Use my walkthrough, character builds, weapons and Mithril guide, Secrets, side quests, achievements, co-op help, and Legacy Edition changes.",
    images: [imageUrls[0]],
  },
};

const guideItems = [
  {
    position: 1,
    name: "War in the North Legacy Edition Walkthrough",
    url: `${pageUrl}/walkthrough`,
    description:
      "Follow the campaign from Bree and Fornost through the Barrow-downs, Ettenmoors, Mount Gundabad, Mirkwood, Nordinbad, Carn Dum, and the Agandaur finale.",
  },
  {
    position: 2,
    name: "War in the North Legacy Edition Changes",
    url: `${pageUrl}/legacy-edition-changes`,
    description:
      "See what changed in Legacy Edition, including character hot-swapping, the updated party interface, refined target locking, autosave, co-op support, and modern platform changes.",
  },
  {
    position: 3,
    name: "War in the North Legacy Edition Best Character and Builds",
    url: `${pageUrl}/best-character-builds`,
    description:
      "Compare Eradan, Farin, and Andriel for solo play, skill priorities, stat investment, Evasion, Sanctuary, War-cry, respec decisions, and harder difficulties.",
  },
  {
    position: 4,
    name: "War in the North Legacy Edition Weapons and Mithril Guide",
    url: `${pageUrl}/weapons-mithril-upgrades`,
    description:
      "Choose weapons, sockets, enemy-specific bonuses, jewels, and Mithril upgrades while deciding when a weapon or armor investment is actually worth keeping.",
  },
  {
    position: 5,
    name: "War in the North Legacy Edition Secrets Guide",
    url: `${pageUrl}/secrets`,
    description:
      "Find the Secret triggers, Ranger caches, breakable walls, magical hidden routes, and backup locations needed for a reliable 25-Secret run.",
  },
  {
    position: 6,
    name: "War in the North Legacy Edition Side Quests and Missables",
    url: `${pageUrl}/side-quests`,
    description:
      "Complete the fifteen main optional quest chains efficiently by accepting them before the correct trip, keeping required items, and using hub returns for hand-ins.",
  },
  {
    position: 7,
    name: "War in the North Legacy Edition Lidless Eye Scroll Locations",
    url: `${pageUrl}/lidless-eye-scrolls`,
    description:
      "Find all seven Cult of the Lidless Eye Scrolls in campaign order and finish the investigation with Elrond.",
  },
  {
    position: 8,
    name: "War in the North Legacy Edition Achievements and 100% Roadmap",
    url: `${pageUrl}/achievements`,
    description:
      "Plan all 46 achievements across Normal, Heroic, and Legendary while protecting single-playthrough counters, missables, multiplayer requirements, and Eagle Savior.",
  },
  {
    position: 9,
    name: "War in the North Legacy Edition Co-op and Crossplay Guide",
    url: `${pageUrl}/co-op-crossplay-troubleshooting`,
    description:
      "Set up online or split-screen co-op, understand Remote Play Together, test save persistence, and troubleshoot joining and multiplayer progression problems.",
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
          name: "War in the North Legacy Edition Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "War in the North Legacy Edition Guide",
      headline:
        "War in the North Legacy Edition Guide: Walkthrough, Builds and 100%",
      description:
        "A focused War in the North Legacy Edition guide hub covering campaign progression, Legacy Edition changes, Eradan, Farin and Andriel builds, weapons and Mithril upgrades, Secrets, side quests, Cult of the Lidless Eye Scrolls, achievements, and multiplayer troubleshooting.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: {
        "@type": "VideoGame",
        name: "The Lord of the Rings: War in the North - Legacy Edition",
        url: pageUrl,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
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
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "War in the North Legacy Edition Guides",
      numberOfItems: guideItems.length,
      itemListElement: guideItems.map(
        ({ position, name, url, description }) => ({
          "@type": "ListItem",
          position,
          item: {
            "@type": "Article",
            name,
            url,
            description,
          },
        }),
      ),
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
          title="War in the North Legacy Edition Guide"
          description="Find the right guide for campaign progression, Legacy Edition changes, Eradan, Farin and Andriel builds, weapons and Mithril, Secrets, side quests, achievements, and co-op."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionGuideContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="The Lord of the Rings: War in the North™ - Legacy Edition"
          heading="Looking for another game after The Lord of the Rings: War in the North™ - Legacy Edition?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}