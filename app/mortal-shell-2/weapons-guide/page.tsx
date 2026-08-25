import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WeaponsGuideContent from "@/data/mortal-shell-2/weapons-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/weapons-guide`;

const metadataTitle =
  "Mortal Shell 2 Best Weapons & Weapon Tier List: All 8 Ranked";

const metadataDescription =
  "Axatana is my best overall Mortal Shell 2 weapon. See all 8 ranked, plus the best early picks, Infusions, Tarstones, locations, and when each is worth using.";

const articleDescription =
  "Axatana is my best overall Mortal Shell 2 weapon, but the strongest choice changes by progression and build. This guide ranks all eight melee weapons and compares their movesets, Infusions, Tarstones, locations, and best uses.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axatana-stasis.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-iconoclast-blood-curse.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-duality.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-running-heavy.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-frost.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-obsidian-hammer-stasis.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-black-needle-phantom.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-clockwork-scythe-chainsaw.webp`,
];

const toc = [
  {
    id: "best-weapon",
    label: "Best weapon overall",
  },
  {
    id: "weapon-tier-list",
    label: "Weapon tier list",
  },
  {
    id: "best-early-weapon",
    label: "Best early weapons",
  },
  {
    id: "iconoclast",
    label: "Iconoclast",
  },
  {
    id: "axe-and-dagger",
    label: "Axe & Dagger",
  },
  {
    id: "veterans-battle-axe",
    label: "Veteran's Battle Axe",
  },
  {
    id: "great-martyrs-blade",
    label: "Great Martyr's Blade",
  },
  {
    id: "obsidian-hammer",
    label: "Obsidian Hammer",
  },
  {
    id: "axatana",
    label: "Axatana",
  },
  {
    id: "black-needle",
    label: "Black Needle",
  },
  {
    id: "clockwork-scythe",
    label: "Clockwork Scythe",
  },
  {
    id: "best-status-weapons",
    label: "Best status weapons",
  },
  {
    id: "upgrade-rule",
    label: "Weapon upgrade rule",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/shrine-of-trials-axe-dagger",
    label: "Shrine of Trials & Axe and Dagger",
  },
  {
    href: "/mortal-shell-2/kings-crypt-veterans-battle-axe",
    label: "King's Crypt & Veteran's Battle Axe",
  },
  {
    href: "/mortal-shell-2/great-martyrs-blade",
    label: "Great Martyr's Blade Guide",
  },
  {
    href: "/mortal-shell-2/sidearms-guide",
    label: "Sidearms Guide",
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
      "Axatana is my best overall pick. Compare all eight Mortal Shell 2 melee weapons, including the best early, late-game, heavy, and status choices.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Axatana Stasis build in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Axatana leads my Mortal Shell 2 weapon tier list. See all 8 weapons ranked, plus the best early picks, Infusions, Tarstones, and status builds.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Weapons & Weapon Tier List",
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
        "Mortal Shell 2 Best Weapons & Weapon Tier List: All 8 Ranked",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-25",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 weapons",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 best weapon",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 weapon tier list",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 early weapons",
        },
        {
          "@type": "Thing",
          name: "Axatana",
        },
        {
          "@type": "Thing",
          name: "Iconoclast",
        },
        {
          "@type": "Thing",
          name: "Axe & Dagger",
        },
        {
          "@type": "Thing",
          name: "Veteran's Battle Axe",
        },
        {
          "@type": "Thing",
          name: "Great Martyr's Blade",
        },
        {
          "@type": "Thing",
          name: "Obsidian Hammer",
        },
        {
          "@type": "Thing",
          name: "Black Needle",
        },
        {
          "@type": "Thing",
          name: "Clockwork Scythe",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Mortal Shell 2 Best Weapons & Weapon Tier List: All 8 Ranked"
          description="Axatana is my best overall pick, but the right weapon changes with progression and build. I rank all eight melee weapons and explain the Infusions, Tarstones, and situations that make each one worth using."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WeaponsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}