import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgCaptainsTierListContent from "@/data/wanderburg/captains-tier-list.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wanderburg`;
const pageUrl = `${hubUrl}/captains-tier-list`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-racer-ruth-captain.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-tankbert-high-hp-run.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-dieter-the-drunk-captain.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Captains Tier List: Best Captains Ranked",
  description:
    "Rank Wanderburg Captains for progression, survival and specialist builds, with Racer Ruth and Tankbert in S Tier and clear first-buy advice.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Captains Tier List: Racer Ruth, Tankbert & More",
    description:
      "See which Wanderburg Captains are worth your Silver, how their bonuses and drawbacks change real runs, and when specialist picks become stronger.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Wanderburg Racer Ruth Captain with increased boost speed and reduced normal driving speed.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderburg Captains Tier List",
    description:
      "Racer Ruth and Tankbert lead the Wanderburg Captain rankings, with specialist picks for Cannons, summons, Auto Attacks and faster clears.",
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
          name: "Wanderburg Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Captains Tier List",
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
        "Wanderburg Captains Tier List: Best Captains for Progression",
      description:
        "A Wanderburg Captain tier list for normal progression and full-run survival, with Racer Ruth and Tankbert in S Tier, Dieter the Drunk and Patchy in A Tier, specialist picks for summons, Cannons and Auto Attacks, and advice on which Captain to buy first.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-09",
      dateModified: "2026-09-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Wanderburg",
        },
        {
          "@type": "Thing",
          name: "Wanderburg Captains",
        },
        {
          "@type": "Thing",
          name: "Wanderburg Captain tier list",
        },
        {
          "@type": "Thing",
          name: "Racer Ruth",
        },
        {
          "@type": "Thing",
          name: "Tankbert",
        },
        {
          "@type": "Thing",
          name: "Dieter the Drunk",
        },
        {
          "@type": "Thing",
          name: "Patchy",
        },
        {
          "@type": "Thing",
          name: "Empress",
        },
        {
          "@type": "Thing",
          name: "The Count",
        },
        {
          "@type": "Thing",
          name: "Huntress",
        },
        {
          "@type": "Thing",
          name: "Lumberjack",
        },
        {
          "@type": "Thing",
          name: "Pyromaniac",
        },
        {
          "@type": "Thing",
          name: "Kapitalistus Maximus",
        },
        {
          "@type": "Thing",
          name: "Time Witch",
        },
        {
          "@type": "Thing",
          name: "Sire Jonah",
        },
        {
          "@type": "Thing",
          name: "Norbert the Normal",
        },
        {
          "@type": "Thing",
          name: "Duelist",
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
          title="Wanderburg Captains Tier List: Who Is Worth Your Silver?"
          description="Compare Wanderburg Captains by progression value, survival and build fit, then choose the one that actually solves the problem ending your current runs."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 13, 2026"
          toc={[
            {
              id: "tier-list",
              label: "Captain tier list",
            },
            {
              id: "racer-ruth",
              label: "Racer Ruth",
            },
            {
              id: "tankbert",
              label: "Tankbert",
            },
            {
              id: "s-tier-choice",
              label: "Ruth vs Tankbert",
            },
            {
              id: "a-tier",
              label: "A Tier Captains",
            },
            {
              id: "b-tier",
              label: "B Tier Captains",
            },
            {
              id: "c-tier",
              label: "C Tier Captains",
            },
            {
              id: "d-tier",
              label: "D Tier Captains",
            },
            {
              id: "duelist",
              label: "Duelist",
            },
            {
              id: "which-captain-to-buy",
              label: "Which Captain to buy",
            },
          ]}
          relatedLinks={[
            {
              href: "/wanderburg",
              label: "Wanderburg Guide Hub",
            },
            {
              href: "/wanderburg/best-builds",
              label: "Wanderburg Best Builds",
            },
            {
              href: "/wanderburg/progression-unlocks",
              label: "Wanderburg Progression & Unlocks",
            },
            {
              href: "/wanderburg/how-to-unlock-spiderburg",
              label: "How to Unlock Spiderburg",
            },
            {
              href: "/wanderburg/bosses",
              label: "Wanderburg Boss Guide",
            },
            {
              href: "/wanderburg/achievements",
              label: "Wanderburg Achievements Guide",
            },
          ]}
        >
          <WanderburgCaptainsTierListContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}