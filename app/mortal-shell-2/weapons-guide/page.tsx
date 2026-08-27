import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WeaponsGuideContent from "@/data/mortal-shell-2/weapons-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/weapons-guide`;

const metadataTitle =
  "Mortal Shell 2 Best Weapons Tier List: All 8 Ranked";

const metadataDescription =
  "Axatana is my best overall Mortal Shell 2 weapon. See all 8 melee weapons ranked, plus the best early picks, builds, Infusions, Tarstones, and locations.";

const articleDescription =
  "A practical Mortal Shell 2 weapon tier list ranking all eight melee weapons, with Axatana as the best overall pick plus early-game choices, acquisition locations, Infusions, Tarstones, Frost, Stasis, Blood Curse, Trauma, Phantom, and upgrade decisions.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axatana-stasis.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-frost.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-clockwork-scythe-chainsaw.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-running-heavy.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-duality.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-iconoclast-blood-curse.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-obsidian-hammer-stasis.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-black-needle-phantom.webp`,
];

const toc = [
  {
    id: "best-weapon",
    label: "Best weapon overall",
  },
  {
    id: "weapon-tier-list",
    label: "All 8 weapons ranked",
  },
  {
    id: "best-early-weapon",
    label: "Best early weapons",
  },
  {
    id: "axatana",
    label: "Axatana",
  },
  {
    id: "great-martyrs-blade",
    label: "Great Martyr's Blade",
  },
  {
    id: "clockwork-scythe",
    label: "Clockwork Scythe",
  },
  {
    id: "veterans-battle-axe",
    label: "Veteran's Battle Axe",
  },
  {
    id: "axe-and-dagger",
    label: "Axe & Dagger",
  },
  {
    id: "iconoclast",
    label: "Iconoclast",
  },
  {
    id: "obsidian-hammer",
    label: "Obsidian Hammer",
  },
  {
    id: "black-needle",
    label: "Black Needle",
  },
  {
    id: "best-status-weapons",
    label: "Best status weapons",
  },
  {
    id: "upgrade-rule",
    label: "Which weapon to upgrade",
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
    label: "Great Martyr's Blade & Warden's Stone",
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
      "Axatana is my best overall pick. Compare all eight Mortal Shell 2 melee weapons, including the best early, Frost, Stasis, heavy, and high-investment choices.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
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
      "Axatana leads my Mortal Shell 2 weapon tier list. Compare all 8 melee weapons, early picks, locations, Infusions, Tarstones, and status builds.",
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
          name: "Best Weapons Tier List",
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
        "Mortal Shell 2 Best Weapons Tier List: All 8 Ranked",
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
          name: "Mortal Shell 2 best weapons",
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
          name: "Mortal Shell 2 melee weapons",
        },
        {
          "@type": "Thing",
          name: "Axatana",
        },
        {
          "@type": "Thing",
          name: "Great Martyr's Blade",
        },
        {
          "@type": "Thing",
          name: "Warden's Stone",
        },
        {
          "@type": "Thing",
          name: "Clockwork Scythe",
        },
        {
          "@type": "Thing",
          name: "Veteran's Battle Axe",
        },
        {
          "@type": "Thing",
          name: "Axe & Dagger",
        },
        {
          "@type": "Thing",
          name: "Iconoclast",
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
          name: "Frost",
        },
        {
          "@type": "Thing",
          name: "Stasis",
        },
        {
          "@type": "Thing",
          name: "Blood Curse",
        },
        {
          "@type": "Thing",
          name: "Phantom",
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
          title="Mortal Shell 2 Best Weapons Tier List: All 8 Ranked"
          description="Axatana is my best overall melee weapon, but Great Martyr's Blade, Clockwork Scythe, and the early-game options all win in specific builds. I rank all eight by moveset, acquisition timing, Infusions, Tarstones, and practical use."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
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