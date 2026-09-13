import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WanderburgSpiderburgContent from "@/data/wanderburg/how-to-unlock-spiderburg.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/wanderburg`;
const pageUrl = `${hubUrl}/how-to-unlock-spiderburg`;

const imageUrls = [
  `${siteUrl}/images/wanderburg/wanderburg-green-plains-biome-quests.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-dark-forest-unlocked.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-loadout-slots.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-needs-two-top-modules.webp`,
  `${siteUrl}/images/wanderburg/wanderburg-spiderburg-gameplay.webp`,
];

export const metadata: Metadata = {
  title: "How to Unlock Spiderburg in Wanderburg",
  description:
    "Beat all four Golden Dunes bosses to unlock Spiderburg, then fix the two-Top-Module requirement if the vehicle still cannot start a run.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Wanderburg Spiderburg Unlock, Slots & First Run",
    description:
      "Unlock Spiderburg through Golden Dunes, fix the two-Top-Module blocker, understand its slot layout, and decide when the chassis is worth using.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Wanderburg Spiderburg unlock message after completing the Golden Dunes boss objective.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Unlock Spiderburg in Wanderburg",
    description:
      "Clear Golden Dunes, fix Spiderburg's two-Top-Module requirement, and understand the chassis before your first run.",
    images: [imageUrls[1]],
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
          name: "How to Unlock Spiderburg",
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
        "How to Unlock Spiderburg in Wanderburg and Fix the Two-Top-Module Requirement",
      description:
        "A Wanderburg Spiderburg guide covering the Golden Dunes four-boss unlock, the two-Top-Module loadout blocker, module slots, compatible Top options, chassis handling, terrain immunity, double-Top scaling, and what to check when Spiderburg is unlocked but cannot start.",
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
          name: "Spiderburg",
        },
        {
          "@type": "Thing",
          name: "Golden Dunes",
        },
        {
          "@type": "Thing",
          name: "Spiderburg unlock",
        },
        {
          "@type": "Thing",
          name: "Spiderburg loadout",
        },
        {
          "@type": "Thing",
          name: "Top Modules",
        },
        {
          "@type": "Thing",
          name: "Spiderburg module slots",
        },
        {
          "@type": "Thing",
          name: "Wanderburg vehicles",
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
          title="How to Unlock Spiderburg — and Why It May Still Be Unusable"
          description="Clear the Golden Dunes boss gate, fix the second Top Module requirement after the unlock, and decide whether Spiderburg's slot layout actually fits your permanent setup."
          gameTitle="Wanderburg"
          gameHref="/wanderburg"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 13, 2026"
          toc={[
            {
              id: "unlock-spiderburg",
              label: "How to unlock Spiderburg",
            },
            {
              id: "unlock-popup",
              label: "After the unlock",
            },
            {
              id: "two-top-modules",
              label: "Two Top Modules required",
            },
            {
              id: "what-to-buy",
              label: "What to buy",
            },
            {
              id: "spiderburg-chassis",
              label: "Spiderburg handling",
            },
            {
              id: "double-top",
              label: "Double-Top scaling",
            },
            {
              id: "is-spiderburg-good",
              label: "Is Spiderburg good?",
            },
            {
              id: "spiderburg-not-working",
              label: "Spiderburg not working",
            },
            {
              id: "after-spiderburg",
              label: "First Spiderburg run",
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
              href: "/wanderburg/captains-tier-list",
              label: "Wanderburg Captains Tier List",
            },
            {
              href: "/wanderburg/achievements",
              label: "Wanderburg Achievements Guide",
            },
          ]}
        >
          <WanderburgSpiderburgContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}