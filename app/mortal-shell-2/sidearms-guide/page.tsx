import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SidearmsGuideContent from "@/data/mortal-shell-2/sidearms-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/sidearms-guide`;

const metadataTitle =
  "Mortal Shell 2 All 8 Sidearm Locations & Best Sidearm";

const metadataDescription =
  "Find all 8 Mortal Shell 2 Sidearms, their exact dungeons and requirements, the best Sidearm for each role, and how to unlock ranged upgrades.";

const articleDescription =
  "A complete Mortal Shell 2 Sidearm guide covering all eight ranged weapons — Naylshotte, Troubadour's Lute, Forgotten Crossbow, Salvaged Trebuchaxe, Triarch Repeater, Ballistazooka, Cursed Child, and Caged Hystrix — with exact acquisition routes, key requirements, the best Sidearms for sustained damage, burst and early progression, Resolve interactions, Obsidian Lathe upgrades, and the Guns. Lots of Guns achievement.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sidearm-resolve-tutorial.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-naylshotte-pickup.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-troubadours-lute-location.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-forgotten-crossbow-locked-door.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-caged-hystrix-pickup.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-cursed-child-revered-beacon-eye.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-ballistazooka-sentrys-grave.webp`,
];

const toc = [
  {
    id: "best-sidearm",
    label: "Best Sidearm",
  },
  {
    id: "all-sidearm-locations",
    label: "All 8 Sidearm locations",
  },
  {
    id: "how-sidearms-work",
    label: "How Sidearms work",
  },
  {
    id: "naylshotte",
    label: "Naylshotte",
  },
  {
    id: "troubadours-lute",
    label: "Troubadour's Lute",
  },
  {
    id: "forgotten-crossbow",
    label: "Forgotten Crossbow",
  },
  {
    id: "salvaged-trebuchaxe",
    label: "Salvaged Trebuchaxe",
  },
  {
    id: "triarch-repeater",
    label: "Triarch Repeater",
  },
  {
    id: "ballistazooka",
    label: "Ballistazooka",
  },
  {
    id: "cursed-child",
    label: "Cursed Child",
  },
  {
    id: "caged-hystrix",
    label: "Caged Hystrix",
  },
  {
    id: "sidearm-build-synergy",
    label: "Sidearm build synergy",
  },
  {
    id: "how-to-upgrade-sidearms",
    label: "How to upgrade Sidearms",
  },
  {
    id: "guns-lots-of-guns",
    label: "Guns. Lots of Guns",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Weapon Tier List",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/heart-of-vatra-gragu",
    label: "Heart of Vatra & Gragu",
  },
  {
    href: "/mortal-shell-2/sariel-boss-guide",
    label: "Sariel Boss Guide",
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
      "Find every Mortal Shell 2 Sidearm, including the Damp Key Crossbow route, Sariel's Caged Hystrix, Sentry's Grave Ballistazooka, and the best Sidearm for each role.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
    images: [
      {
        url: imageUrls[4],
        width: 1600,
        height: 900,
        alt: "Caged Hystrix Sidearm pickup in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "All 8 Sidearm locations, best overall and early picks, Resolve mechanics, Obsidian Lathe upgrades, and Guns. Lots of Guns.",
    images: [imageUrls[4]],
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
          name: "Sidearm Locations & Best Sidearm",
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
        "Mortal Shell 2 All 8 Sidearm Locations & Best Sidearm",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Sidearms",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Sidearm locations",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 best Sidearm",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 ranged weapons",
        },
        {
          "@type": "Thing",
          name: "Naylshotte",
        },
        {
          "@type": "Thing",
          name: "Troubadour's Lute",
        },
        {
          "@type": "Thing",
          name: "Forgotten Crossbow",
        },
        {
          "@type": "Thing",
          name: "Damp Key",
        },
        {
          "@type": "Thing",
          name: "Salvaged Trebuchaxe",
        },
        {
          "@type": "Thing",
          name: "Triarch Repeater",
        },
        {
          "@type": "Thing",
          name: "Ballistazooka",
        },
        {
          "@type": "Thing",
          name: "Subjugated Guardian",
        },
        {
          "@type": "Thing",
          name: "Cursed Child",
        },
        {
          "@type": "Thing",
          name: "Caged Hystrix",
        },
        {
          "@type": "Thing",
          name: "Resolve",
        },
        {
          "@type": "Thing",
          name: "Obsidian Lathe",
        },
        {
          "@type": "Thing",
          name: "Guns. Lots of Guns",
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
          title="All 8 Sidearm Locations & Best Sidearm in Mortal Shell 2"
          description="I track down all eight Sidearms, explain the key or boss that blocks each pickup, and compare Caged Hystrix, Forgotten Crossbow, Salvaged Trebuchaxe, and the best early ranged options."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SidearmsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}