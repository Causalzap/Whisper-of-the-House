import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgAchievementsContent from "@/data/wanderburg/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wanderburg`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-first-achievements-100-vehicles-10km.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-first-win-game-won.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-dark-forest-unlocked.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-tankenburg-unlocked.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Achievements Guide: All 26 & Completion Order",
  description:
    "Complete all 26 Wanderburg achievements with an efficient order for Lands, vehicles, distance, consumed units, bosses, Spiderburg, and Tankenburg.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Achievements Guide: All 26 & What to Farm Last",
    description:
      "See all 26 Wanderburg achievements, finish progression first, then clean up distance, vehicle kills, consumed units, and boss totals efficiently.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Wanderburg achievement notifications for 100 vehicles destroyed and 10 kilometers travelled.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderburg Achievements Guide: All 26",
    description:
      "Finish Wanderburg's progression achievements first, then clean up distance, vehicles, units, and bosses in the right order.",
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
          name: "Achievements",
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
        "Wanderburg Achievements Guide: All 26 Achievements and the Best Completion Order",
      description:
        "A Wanderburg achievement guide covering all 26 Early Access achievements, six progression milestones, four cumulative achievement chains for distance, vehicles, consumed units and bosses, the All Lands won requirement, efficient cleanup order, Overtime use for achievement progress, and the final 500-boss grind.",
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
          name: "Wanderburg achievements",
        },
        {
          "@type": "Thing",
          name: "Wanderburg achievement guide",
        },
        {
          "@type": "Thing",
          name: "All 26 achievements",
        },
        {
          "@type": "Thing",
          name: "All Lands won!",
        },
        {
          "@type": "Thing",
          name: "You won!",
        },
        {
          "@type": "Thing",
          name: "Spiderburg unlocked",
        },
        {
          "@type": "Thing",
          name: "Tankenburg unlocked",
        },
        {
          "@type": "Thing",
          name: "10,000 kilometers travelled",
        },
        {
          "@type": "Thing",
          name: "10,000 vehicles destroyed",
        },
        {
          "@type": "Thing",
          name: "100,000 units consumed",
        },
        {
          "@type": "Thing",
          name: "500 bosses destroyed",
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
          title="Wanderburg Achievements: Fastest Route to All 26"
          description="Finish progression while the long counters rise naturally, then clean up distance, vehicles, consumed units, and bosses without wasting early runs."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
          toc={[
            {
              id: "achievement-roadmap",
              label: "Achievement roadmap",
            },
            {
              id: "all-achievements",
              label: "All 26 achievements",
            },
            {
              id: "progression-achievements",
              label: "Progression achievements",
            },
            {
              id: "all-lands",
              label: "All Lands won!",
            },
            {
              id: "cumulative-achievements",
              label: "Cumulative achievements",
            },
            {
              id: "overtime-for-achievements",
              label: "Overtime for achievements",
            },
            {
              id: "completion-order",
              label: "Completion order",
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
              href: "/wanderburg/bosses",
              label: "Wanderburg Boss Guide",
            },
            {
              href: "/wanderburg/best-builds",
              label: "Wanderburg Best Builds",
            },
            {
              href: "/wanderburg/how-to-unlock-spiderburg",
              label: "How to Unlock Spiderburg",
            },
            {
              href: "/wanderburg/captains-tier-list",
              label: "Wanderburg Captains Tier List",
            },
          ]}
        >
          <WanderburgAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}