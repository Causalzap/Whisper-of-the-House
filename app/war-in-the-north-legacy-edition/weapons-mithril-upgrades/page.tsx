import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionWeaponsMithrilContent from "@/data/war-in-the-north-legacy-edition/weapons-mithril-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/weapons-mithril-upgrades`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-truesilver-mithril-return.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-mithril-weapon-or-armor-choice.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-andriel-staff-two-sockets.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-orc-bonus-25000-headshot.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-work-of-westernesse-angmir.webp`,
];

const toc = [
  {
    id: "unlock-mithril-upgrades",
    label: "Unlock Mithril Upgrades",
  },
  {
    id: "weapon-or-armor",
    label: "Weapon or Armor?",
  },
  {
    id: "what-makes-weapon-worth-upgrading",
    label: "Weapons Worth Upgrading",
  },
  {
    id: "sockets-vs-mithril",
    label: "Sockets vs Mithril",
  },
  {
    id: "damage-test",
    label: "25,671 vs 11,000 Test",
  },
  {
    id: "species-damage",
    label: "Species Damage Bonuses",
  },
  {
    id: "orc-damage-first",
    label: "Why I Prioritize Orc Damage",
  },
  {
    id: "when-spend-mithril",
    label: "When I Spend Mithril",
  },
  {
    id: "when-upgrade-armor",
    label: "When I Upgrade Armor",
  },
  {
    id: "when-save-mithril",
    label: "When I Save Mithril",
  },
  {
    id: "work-of-westernesse",
    label: "Work of Westernesse",
  },
  {
    id: "legendary-weapons",
    label: "Legendary Weapons",
  },
  {
    id: "vendor-gear",
    label: "When I Buy Gear",
  },
  {
    id: "my-upgrade-order",
    label: "My Upgrade Order",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/best-character-builds",
    label: "Best Character & Builds",
  },
  {
    href: "/war-in-the-north-legacy-edition/side-quests",
    label: "Side Quests & Missables",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Weapons & Mithril Guide",
  description:
    "Choose weapons, sockets, jewels and Mithril upgrades with my 25,671 vs 11,000 damage test, species bonuses, armor choices, and upgrade priorities.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Weapons & Mithril Guide",
    description:
      "Decide which weapons are worth keeping, when sockets beat raw Mithril upgrades, which species bonuses matter, and when armor is the better investment.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Two-socket Staff compared with a Mithril-upgraded Staff in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Weapons & Mithril Guide",
    description:
      "Choose weapons, sockets, species bonuses and Mithril investments with a tested 25,671 vs 11,000 damage comparison.",
    images: [imageUrls[2]],
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
          name: "War in the North Legacy Edition Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Weapons & Mithril",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Weapons & Mithril Guide",
      description:
        "A practical equipment guide covering weapon selection, sockets, jewels, species-specific damage, Mithril investment, weapon-versus-armor upgrades, Work of Westernesse gear, Legendary equipment, and vendor buying decisions.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      mainEntityOfPage: pageUrl,
      about: {
        "@type": "VideoGame",
        name: "The Lord of the Rings: War in the North - Legacy Edition",
        url: hubUrl,
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="War in the North Legacy Edition Weapons & Mithril Guide"
          description="Choose which weapons are worth keeping, compare sockets with raw Mithril upgrades, use enemy-specific damage intelligently, and spend rare upgrades only when the item solves a real long-term problem."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionWeaponsMithrilContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}