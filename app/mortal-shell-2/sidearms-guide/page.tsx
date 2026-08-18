import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SidearmsGuideContent from "@/data/mortal-shell-2/sidearms-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/sidearms-guide`;

const metadataTitle =
  "Mortal Shell 2 Sidearms Guide: All Locations & Best First Pick";

const metadataDescription =
  "Find all 8 Mortal Shell 2 Sidearms, where to get each one, how Resolve affects ranged combat, and which Sidearms are worth spending Coin on first.";

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
    id: "how-sidearms-work",
    label: "How Sidearms work",
  },
  {
    id: "sidearm-upgrade-rule",
    label: "When I upgrade Sidearms",
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
    id: "caged-hystrix",
    label: "Caged Hystrix",
  },
  {
    id: "cursed-child",
    label: "Cursed Child",
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
    id: "which-sidearm-first",
    label: "Which Sidearm I get first",
  },
  {
    id: "resolve-economy",
    label: "Resolve economy",
  },
  {
    id: "slayer-seal-sidearms",
    label: "Slayer Seal & Sidearms",
  },
  {
    id: "when-i-spend-coin",
    label: "When I spend Coin",
  },
  {
    id: "my-sidearm-rule",
    label: "My Sidearm rule",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/difficulty-settings",
    label: "Difficulty Settings Guide",
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
    title: "Mortal Shell 2 Sidearms: All 8 Locations & Which I Get First",
    description:
      "Find Naylshotte, Troubadour's Lute, Forgotten Crossbow, Caged Hystrix, Ballistazooka and every other Sidearm, then decide which are worth upgrading.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Sidearm Resolve tutorial in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Sidearms: All Locations & Best First Pick",
    description:
      "Where I find all eight Sidearms, which ones are cheap early pickups, and when I finally spend Coin upgrading one.",
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
          name: "Sidearms Guide",
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
        "Mortal Shell 2 Sidearms Guide: All 8 Locations and Which Sidearm to Get First",
      description:
        "A practical Mortal Shell 2 Sidearms guide covering all eight ranged weapons — Naylshotte, Troubadour's Lute, Forgotten Crossbow, Salvaged Trebuchaxe, Caged Hystrix, Cursed Child, Triarch Repeater, and Ballistazooka — including where each one is found, how difficult its acquisition route is, how Sidearms spend Resolve, useful Tarstone interactions, Slayer Seal Break Damage, and when I think a Sidearm is worth spending Coin on.",
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
          name: "Mortal Shell 2 Sidearms",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Sidearm locations",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 Resolve",
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
          name: "Salvaged Trebuchaxe",
        },
        {
          "@type": "Thing",
          name: "Caged Hystrix",
        },
        {
          "@type": "Thing",
          name: "Cursed Child",
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
          name: "Wounding Stone",
        },
        {
          "@type": "Thing",
          name: "Ember Seed Stone",
        },
        {
          "@type": "Thing",
          name: "Slayer Seal",
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
          title="All 8 Mortal Shell 2 Sidearms and Which I Get First"
          description="I start with Naylshotte, pick up cheap optional Sidearms when they fit my route, and only spend Coin once a ranged weapon actually works with my Resolve economy."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
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