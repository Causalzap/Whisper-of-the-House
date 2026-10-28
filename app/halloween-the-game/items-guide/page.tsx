
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ItemsGuideContent from "@/data/halloween-the-game/items-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/items-guide`;

const metadataTitle =
  "Halloween: The Game All Items & Uses – What to Keep";

const metadataDescription =
  "Compare Halloween: The Game items and what to keep in three inventory slots, including grab-escape knives, Bolt Cutters, Flare Gun, healing, and weapons.";

const articleDescription =
  "Choose which items to carry, use, or drop in Halloween: The Game. Compare rare defensive items, grab-escape blades, escape tools, Flare Gun uses, Flashlight changes, consumables, healing, firearms, melee weapons, and inventory tradeoffs.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-lawn-darts-stack.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-ancient-amulet.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-brass-lantern-light-zone.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-ice-pick-item.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-flare-gun-police-badge.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-repair-kit-power.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-sedan-keys-car.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-bolt-cutters-cellar.webp`,
];

const toc = [
  {
    id: "three-slots",
    label: "What to keep",
  },
  {
    id: "rare-items",
    label: "Ancient Amulet, Lantern & Hourglass",
  },
  {
    id: "grab-escape-items",
    label: "Pocket Knife, Ice Pick & Butterfly Knife",
  },
  {
    id: "flare-gun",
    label: "Flare Gun: Police or combat?",
  },
  {
    id: "light-items",
    label: "Flashlights & distractions",
  },
  {
    id: "repair-kit",
    label: "Repair Kit uses",
  },
  {
    id: "sedan",
    label: "Sedan Key & Gas Can",
  },
  {
    id: "bolt-cutters",
    label: "Bolt Cutters & locks",
  },
  {
    id: "exit-gate",
    label: "Electric Fuse & Exit Gate",
  },
  {
    id: "keys-and-codes",
    label: "Keys & codes",
  },
  {
    id: "consumables",
    label: "Beer, Joint & Pop",
  },
  {
    id: "healing",
    label: "Healing Spray vs Medkit",
  },
  {
    id: "throwables",
    label: "Throwables & Lawn Darts",
  },
  {
    id: "firearms",
    label: "Magnum, Shotgun & Rifle",
  },
  {
    id: "melee-weapons",
    label: "Melee weapons & Scythe",
  },
  {
    id: "drop-first",
    label: "What to drop first",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
  },
  {
    href: "/halloween-the-game/tower-farm-map-guide",
    label: "Tower Farm Map & Sewer Escape",
  },
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/best-civilians",
    label: "Best Civilians Tier List",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression & Perks Guide",
  },
  {
    href: "/halloween-the-game/how-to-arrest-michael-myers",
    label: "How to Arrest Michael Myers",
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
    title: metadataTitle,
    description:
      "Compare Civilian items, defensive tools, escape equipment, Flare Gun uses, healing, throwables, and weapons. Decide what to keep in three inventory slots.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game inventory showing three Lawn Darts stacked in one item slot",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "What should you keep in Halloween: The Game? Compare rare items, grab-escape knives, escape tools, firearms, and melee weapons.",
    images: [heroImage],
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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Halloween: The Game",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Items & Uses",
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
        "Halloween: The Game All Items & Uses – What Should You Keep?",

      description: articleDescription,

      url: pageUrl,

      image: imageUrls,

      inLanguage: "en",

      datePublished: "2026-09-17",
      dateModified: "2026-10-28",

      articleSection:
        "Halloween: The Game Multiplayer Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game items",
        },
        {
          "@type": "Thing",
          name: "Civilian inventory",
        },
        {
          "@type": "Thing",
          name: "Ancient Amulet",
        },
        {
          "@type": "Thing",
          name: "Brass Lantern",
        },
        {
          "@type": "Thing",
          name: "Fragile Hourglass",
        },
        {
          "@type": "Thing",
          name: "Pocket Knife",
        },
        {
          "@type": "Thing",
          name: "Butterfly Knife",
        },
        {
          "@type": "Thing",
          name: "Ice Pick",
        },
        {
          "@type": "Thing",
          name: "Flare Gun",
        },
        {
          "@type": "Thing",
          name: "Flashlight",
        },
        {
          "@type": "Thing",
          name: "Repair Kit",
        },
        {
          "@type": "Thing",
          name: "Bolt Cutters",
        },
        {
          "@type": "Thing",
          name: "Sedan Key",
        },
        {
          "@type": "Thing",
          name: "Gas Can",
        },
        {
          "@type": "Thing",
          name: "Electric Fuse",
        },
        {
          "@type": "Thing",
          name: "Lawn Dart",
        },
        {
          "@type": "Thing",
          name: "Scythe",
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
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Halloween: The Game All Items & Uses – What Should You Keep?"
          description="Decide which Civilian items deserve your three carried-item slots, when to use rare defensive tools, and which escape items, healing supplies, or weapons to keep."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/halloween-the-game"
          breadcrumbBaseLabel="Halloween: The Game"
          updatedAt="October 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ItemsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
