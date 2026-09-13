import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgGuideContent from "@/data/wanderburg/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/wanderburg`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-overworld-full-map.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Guide: Progression, Builds, Captains & Unlocks",
  description:
    "Use this Wanderburg guide to find what is blocking progress, choose the right build or route, and reach the guide for your next unlock, boss, or vehicle.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Guide: What to Do, Unlock and Build Next",
    description:
      "Find what is blocking your next Wanderburg run, understand how permanent progression fits together, and jump to the right guide for builds, bosses, Captains, vehicles or achievements.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Wanderburg overworld showing multiple Lands and progression routes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderburg Guide: What to Do Next",
    description:
      "Diagnose stalled progression, choose the right route, and find the Wanderburg guide that solves your current build, boss, Captain or vehicle problem.",
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
        "Wanderburg Guide: Progression, Builds, Captains, Vehicles and What to Do Next",
      description:
        "A Wanderburg guide for understanding the overworld, permanent loadout, current build and vehicle layers, diagnosing stalled progression, choosing the right guide for builds, bosses, Captains and vehicles, and deciding what to do after the first win.",
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
          name: "Wanderburg guide",
        },
        {
          "@type": "Thing",
          name: "Wanderburg progression",
        },
        {
          "@type": "Thing",
          name: "Wanderburg builds",
        },
        {
          "@type": "Thing",
          name: "Wanderburg Captains",
        },
        {
          "@type": "Thing",
          name: "Wanderburg vehicles",
        },
        {
          "@type": "Thing",
          name: "Wanderburg bosses",
        },
        {
          "@type": "Thing",
          name: "Wanderburg module unlocks",
        },
        {
          "@type": "Thing",
          name: "Wanderburg achievements",
        },
        {
          "@type": "Thing",
          name: "Wanderburg endgame progression",
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
          title="Wanderburg Guide: What to Do, Unlock and Build Next"
          description="Work out whether the next blocker is the map, permanent loadout, current build, movement or vehicle layout, then use the guide that solves that problem."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 13, 2026"
          toc={[
            {
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "what-is-blocking-you",
              label: "What is blocking progress?",
            },
            {
              id: "wanderburg-guides",
              label: "Choose the right guide",
            },
            {
              id: "how-wanderburg-progression-works",
              label: "How progression fits together",
            },
            {
              id: "bosses",
              label: "Stuck on later bosses",
            },
            {
              id: "captains",
              label: "Choosing a Captain",
            },
            {
              id: "vehicles",
              label: "New vehicle or old build?",
            },
            {
              id: "module-unlocks",
              label: "Why Modules repeat",
            },
            {
              id: "achievements",
              label: "Achievement cleanup",
            },
            {
              id: "after-first-win",
              label: "After the first win",
            },
            {
              id: "later-lands",
              label: "Later Lands",
            },
            {
              id: "next-run",
              label: "Plan the next run",
            },
          ]}
          relatedLinks={[
            {
              href: "/wanderburg/progression-unlocks",
              label: "Wanderburg Progression & Unlocks",
            },
            {
              href: "/wanderburg/best-builds",
              label: "Wanderburg Best Builds",
            },
            {
              href: "/wanderburg/bosses",
              label: "Wanderburg Boss Guide",
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
          <WanderburgGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}