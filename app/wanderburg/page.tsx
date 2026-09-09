import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgGuideContent from "@/data/wanderburg/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/wanderburg`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-overworld-full-map.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-archer-ballista-turret-build.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-gameplay.webp`,
];

export const metadata: Metadata = {
  title: "Wanderburg Guide: Progression, Builds, Captains & Unlocks",
  description:
    "Start Wanderburg with a clear route through progression, builds, Captains, vehicles, Silver, bosses, module unlocks, Overtime, and achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Guide: What to Do, Unlock and Build Next",
    description:
      "Learn what to do first in Wanderburg, how permanent progression works, why runs stall, and when to change your build, Captain, vehicle, or route.",
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
      "Understand Wanderburg progression, builds, Captains, vehicles, bosses, Silver, module unlocks, and what to fix when a run stops progressing.",
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
        "A Wanderburg guide explaining what to do first, how the overworld, permanent loadout, current-run build and vehicle chassis interact, how to diagnose stalled progression, when boss failures are really build problems, how Captains and vehicles fit into the account, when Silver and Overtime are useful, and what changes as the permanent account becomes stronger.",
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
          name: "Silver",
        },
        {
          "@type": "Thing",
          name: "Module unlocks",
        },
        {
          "@type": "Thing",
          name: "Overtime",
        },
        {
          "@type": "Thing",
          name: "Wanderburg achievements",
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
          description="Use each run to move the permanent account forward, identify whether the next blocker is progression, build strength, movement, or vehicle compatibility, and choose the next objective deliberately."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 9, 2026"
          toc={[
            {
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "how-wanderburg-progression-works",
              label: "How progression works",
            },
            {
              id: "build-or-progression",
              label: "Build or progression problem?",
            },
            {
              id: "bosses",
              label: "Boss progression",
            },
            {
              id: "captains",
              label: "Choosing a Captain",
            },
            {
              id: "vehicles",
              label: "Vehicle progression",
            },
            {
              id: "silver-overtime",
              label: "Silver and Overtime",
            },
            {
              id: "module-unlocks",
              label: "Module unlocks",
            },
            {
              id: "achievements",
              label: "Achievements",
            },
            {
              id: "what-changes-later",
              label: "What changes later",
            },
            {
              id: "next-run",
              label: "What to do next",
            },
          ]}
          relatedLinks={[
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