import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WeaponsGuideContent from "@/data/mortal-shell-2/weapons-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/weapons-guide`;

const metadataTitle =
  "Mortal Shell 2 Weapons Guide: Best Weapons & Infusions";

const metadataDescription =
  "Compare all 8 Mortal Shell 2 melee weapons, their locations, Tarstones and Infusions, plus which early and late weapons are worth upgrading.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-iconoclast-blood-curse.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-duality.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-running-heavy.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-frost.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-obsidian-hammer-stasis.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axatana-stasis.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-black-needle-phantom.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-clockwork-scythe-chainsaw.webp`,
];

const toc = [
  {
    id: "how-i-choose-a-weapon",
    label: "How I choose a weapon",
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
    id: "best-early-weapon",
    label: "Best early weapon",
  },
  {
    id: "later-weapons",
    label: "Which late weapon to use",
  },
  {
    id: "upgrade-rule",
    label: "My upgrade rule",
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
    href: "/mortal-shell-2/sidearms-guide",
    label: "Sidearms Guide",
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
    label: "Great Martyr's Blade & Martyr's Prison",
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
    title: "Mortal Shell 2 Weapons Guide: Which Weapons I Upgrade",
    description:
      "Compare all eight melee weapons by moveset, Tarstones, Infusions, acquisition cost, and the combat problems each one actually solves.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iconoclast applying Blood Curse to an enemy in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Weapons Guide: Which Weapons I Upgrade",
    description:
      "My picks for early and late melee weapons, with the Tarstones, Infusions, and movesets that make each weapon worth investing in.",
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
          name: "Weapons Guide",
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
        "Mortal Shell 2 Weapons Guide: All Melee Weapons, Infusions and Upgrade Choices",
      description:
        "A practical Mortal Shell 2 weapons guide covering all eight main melee weapons: Iconoclast, Axe & Dagger, Veteran's Battle Axe, Great Martyr's Blade, Obsidian Hammer, Axatana, Black Needle, and Clockwork Scythe. It compares their base movesets, running attacks, Tarstone options, unique Infusions, Resolve requirements, acquisition cost, and the situations where I think each weapon is worth upgrading instead of spending resources simply because it is a later unlock.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-18",
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
          name: "Mortal Shell 2 weapon locations",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Infusions",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Tarstones",
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
          name: "Axatana",
        },
        {
          "@type": "Thing",
          name: "Black Needle",
        },
        {
          "@type": "Thing",
          name: "Clockwork Scythe",
        },
        {
          "@type": "Thing",
          name: "Blood Curse",
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
          title="The Mortal Shell 2 Weapons I’d Actually Spend Upgrades On"
          description="I compare all eight melee weapons by how they really play, then decide which movesets, Tarstones, and Infusions are worth building around."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
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