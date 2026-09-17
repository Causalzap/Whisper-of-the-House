import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ItemsGuideContent from "@/data/halloween-the-game/items-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${siteUrl}/halloween-the-game/items-guide`;

const metadataTitle =
  "Halloween: The Game All Items & Uses – What to Keep";

const metadataDescription =
  "See what Halloween: The Game items do, what to keep in three inventory slots, and when to use knives, rare items, escape tools, healing, guns, and weapons.";

const articleDescription =
  "A practical Halloween: The Game item guide covering three-slot inventory choices, rare items, grab escapes, escape tools, healing, consumables, throwables, firearms, melee weapons, and when to keep or drop each pickup.";

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
    label: "Rare items",
  },
  {
    id: "grab-escape-items",
    label: "Pocket Knife, Ice Pick & Butterfly Knife",
  },
  {
    id: "flare-gun",
    label: "Flare Gun",
  },
  {
    id: "light-items",
    label: "Flashlights & distractions",
  },
  {
    id: "repair-kit",
    label: "Repair Kit",
  },
  {
    id: "sedan",
    label: "Sedan Key & Gas",
  },
  {
    id: "bolt-cutters",
    label: "Bolt Cutters",
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
    label: "Consumables",
  },
  {
    id: "healing",
    label: "Healing items",
  },
  {
    id: "throwables",
    label: "Throwables",
  },
  {
    id: "firearms",
    label: "Firearms",
  },
  {
    id: "melee-weapons",
    label: "Melee weapons",
  },
  {
    id: "drop-first",
    label: "What to drop first",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/escape-helper",
    label: "Escape & Spawn Helper",
  },
  {
    href: "/halloween-the-game/multiplayer-guide",
    label: "Civilian Multiplayer Guide",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Civilian inventory showing three Lawn Darts stacked in one slot",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          item: siteUrl,
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
      dateModified: "2026-09-17",

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
          name: "Halloween: The Game inventory",
        },
        {
          "@type": "Thing",
          name: "Ancient Amulet",
        },
        {
          "@type": "Thing",
          name: "Pocket Knife",
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
          name: "Electric Fuse",
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
          description="Learn what each Civilian item does, what deserves one of your three inventory slots, and when to use or drop rare items, escape tools, healing, throwables, guns, and melee weapons."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/halloween-the-game"
          breadcrumbBaseLabel="Halloween: The Game"
          updatedAt="September 17, 2026"
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