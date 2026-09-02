import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GauntletOfValorContent from "@/data/neverness-to-everness/gauntlet-of-valor-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl =
  `${siteUrl}/neverness-to-everness/gauntlet-of-valor-guide`;

const imageUrls = [
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-of-valor-entrance.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-floor-20-dragons.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-floor-50-ice-dragons.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-floor-80-double-boss.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-floor-81-one-minute.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-floor-90-boss.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-floor-99-boss-rush.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-infinity-mode.webp`,
  `${siteUrl}/images/neverness-to-everness/nte-gauntlet-rewards-profile-frame.webp`,
];

const toc = [
  {
    id: "unlock-gauntlet-of-valor",
    label: "Where to find Gauntlet",
  },
  {
    id: "normal-structure",
    label: "Normal mode structure",
  },
  {
    id: "floors-1-20",
    label: "Floors 1–20",
  },
  {
    id: "floors-21-50",
    label: "Floors 21–50",
  },
  {
    id: "floors-51-80",
    label: "Floors 51–80",
  },
  {
    id: "floors-81-89",
    label: "Floors 81–89",
  },
  {
    id: "inventory",
    label: "Inventory before Floor 90",
  },
  {
    id: "floors-90-98",
    label: "Floors 90–98",
  },
  {
    id: "floor-99",
    label: "Floor 99",
  },
  {
    id: "infinity",
    label: "Infinity",
  },
  {
    id: "rewards",
    label: "Gauntlet rewards",
  },
  {
    id: "worth-it",
    label: "Is Gauntlet worth it?",
  },
  {
    id: "when-to-stop-upgrading",
    label: "When to stop upgrading",
  },
];

const relatedLinks: {
  href: string;
  label: string;
}[] = [];

export const metadata: Metadata = {
  title: "NTE Gauntlet of Valor Guide: Floor 1–99, Infinity & Rewards",
  description:
    "Clear NTE Gauntlet of Valor from Floor 1–99, unlock Infinity, fix late-floor walls, and claim 5.5M Gold Coins plus 5,500 Mystery Buttons.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "NTE Gauntlet of Valor Guide: Floor 1–99, Infinity & Rewards",
    description:
      "Push Gauntlet of Valor through Floor 99, diagnose late-floor failures, unlock Infinity, and decide whether the rewards are worth the climb.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Gauntlet of Valor entrance on the Warren Continent in Neverness to Everness.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NTE Gauntlet of Valor Guide: Floor 1–99 & Infinity",
    description:
      "Clear Floors 1–99, survive the late boss climb, unlock Infinity, and check the Gauntlet of Valor rewards.",
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
          name: "Neverness to Everness",
          item: `${siteUrl}/neverness-to-everness`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gauntlet of Valor Guide",
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
        "NTE Gauntlet of Valor Guide: Floor 1–99, Infinity & Rewards",
      description:
        "A complete Neverness to Everness Gauntlet of Valor guide covering the 99-floor Normal climb, timer and boss breakpoints, Floor 81, the boss-heavy Floors 90–98, Floor 99's multi-enemy finish, Infinity unlock and farming behavior, mission rewards, Mystery Buttons, Warren Gold Coins, and when further Gauntlet investment stops being worthwhile.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      articleSection: "Neverness to Everness Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Neverness to Everness",
        },
        {
          "@type": "Thing",
          name: "Gauntlet of Valor",
        },
        {
          "@type": "Thing",
          name: "999 Nights",
        },
        {
          "@type": "Thing",
          name: "Gauntlet of Valor Normal",
        },
        {
          "@type": "Thing",
          name: "Gauntlet of Valor Floor 99",
        },
        {
          "@type": "Thing",
          name: "Infinite Floor",
        },
        {
          "@type": "Thing",
          name: "Mystery Buttons",
        },
        {
          "@type": "Thing",
          name: "Warren Gold Coins",
        },
        {
          "@type": "Thing",
          name: "Crimson Castle",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Gauntlet of Valor: Floors 1–99, Infinity and Rewards"
          description="Push through Normal without wasting upgrades, read the late-floor failure correctly, clear Floor 99, then decide whether Infinity is worth continuing."
          gameTitle="Neverness to Everness"
          gameHref="/neverness-to-everness"
          updatedAt="September 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GauntletOfValorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}