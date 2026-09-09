import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgBossesContent from "@/data/wanderburg/bosses.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wanderburg`;
const pageUrl = `${hubUrl}/bosses`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-first-boss-ram-mistake.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-second-boss-movement-block.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-third-boss-mine-field.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-dark-tower-fire-tornado.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Boss Guide: All Four Bosses & Dark Tower",
  description:
    "Beat all four Wanderburg bosses with better preparation, sustained damage, Nitro use, between-fight upgrades, and counters for Dark Tower's Fire Tornado.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Boss Guide: Four-Boss Clears & Dark Tower",
    description:
      "Prepare each boss spawn, diagnose late-run failures, survive bosses three and four, and counter Dark Tower's Fire Tornado and inward pull.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "Wanderburg Dark Tower fourth boss using its Fire Tornado attack.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderburg Boss Guide: All Four Fights",
    description:
      "Prepare each boss fight, fix late-run failures, save Nitro for Dark Tower, and survive the full four-boss Wanderburg clear.",
    images: [imageUrls[3]],
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
          name: "Wanderburg Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Boss Guide",
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
        "Wanderburg Boss Guide: How to Survive All Four Boss Fights and Beat Dark Tower",
      description:
        "A Wanderburg boss guide covering the full four-boss run, pre-boss preparation, early boss mistakes, third-boss sustained damage, Dark Tower's Fire Tornado and inward pull, between-boss upgrade decisions, late-run failure diagnosis, and what happens after the fourth boss.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-09",
      dateModified: "2026-09-09",
      about: [
        {
          "@type": "VideoGame",
          name: "Wanderburg",
        },
        {
          "@type": "Thing",
          name: "Wanderburg bosses",
        },
        {
          "@type": "Thing",
          name: "Wanderburg boss guide",
        },
        {
          "@type": "Thing",
          name: "Four-boss clear",
        },
        {
          "@type": "Thing",
          name: "Dark Tower",
        },
        {
          "@type": "Thing",
          name: "Fire Tornado",
        },
        {
          "@type": "Thing",
          name: "Boss preparation",
        },
        {
          "@type": "Thing",
          name: "Nitro",
        },
        {
          "@type": "Thing",
          name: "Between-boss upgrades",
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
          title="Wanderburg Boss Guide: How to Survive All Four Fights"
          description="Prepare each boss spawn, read what the previous fight exposed, keep enough Nitro for late-run escapes, and counter Dark Tower's Fire Tornado without rebuilding the same failed run."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
          toc={[
            {
              id: "four-boss-run",
              label: "How the four-boss run works",
            },
            {
              id: "before-boss",
              label: "Prepare before each boss",
            },
            {
              id: "early-bosses",
              label: "Bosses one and two",
            },
            {
              id: "third-boss",
              label: "Boss three",
            },
            {
              id: "dark-tower",
              label: "Dark Tower",
            },
            {
              id: "between-boss-upgrades",
              label: "Between-boss upgrades",
            },
            {
              id: "boss-builds",
              label: "Build and Captain problems",
            },
            {
              id: "boss-four-wall",
              label: "Why late bosses end runs",
            },
            {
              id: "after-final-boss",
              label: "After boss four",
            },
          ]}
          relatedLinks={[
            {
              href: "/wanderburg",
              label: "Wanderburg Guide Hub",
            },
            {
              href: "/wanderburg/progression-unlocks",
              label: "Wanderburg Progression & Unlocks",
            },
            {
              href: "/wanderburg/best-builds",
              label: "Wanderburg Best Builds",
            },
            {
              href: "/wanderburg/captains-tier-list",
              label: "Wanderburg Captains Tier List",
            },
            {
              href: "/wanderburg/how-to-unlock-spiderburg",
              label: "How to Unlock Spiderburg",
            },
            {
              href: "/wanderburg/achievements",
              label: "Wanderburg Achievements Guide",
            },
          ]}
        >
          <WanderburgBossesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}