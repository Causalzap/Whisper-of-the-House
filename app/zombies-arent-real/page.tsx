
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZombiesArentRealContent from "@/data/zombies-arent-real/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zombies-arent-real`;

const metadataTitle =
  "Zombies Aren't Real Beginner Guide: What to Build First";

const metadataDescription =
  "Start Zombies Aren't Real with Safe Zones, Garrisons, Mortars, special buildings, battle abilities, budget tips, and Campaign progression.";

const articleTitle =
  "Zombies Aren't Real Beginner Guide: What Should You Build First?";

const articleDescription =
  "Build your first Safe Zone, position Garrisons to defend its perimeter, unlock Mortars and battle support, use special buildings, and prepare for larger Campaign scenarios.";

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
    description: metadataDescription,
    siteName: "Whisper of the House",
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const toc = [
  {
    id: "first-scenario",
    label: "First Scenario",
  },
  {
    id: "garrison-placement",
    label: "Garrison Placement",
  },
  {
    id: "best-early-units",
    label: "Best Early Units",
  },
  {
    id: "budget-and-ammo",
    label: "Budget & Ammunition",
  },
  {
    id: "special-buildings",
    label: "Special Buildings",
  },
  {
    id: "battle-abilities",
    label: "Battle Abilities",
  },
  {
    id: "campaign-progression",
    label: "Campaign Progression",
  },
  {
    id: "why-losing",
    label: "Why You Keep Losing",
  },
  {
    id: "badges-and-achievements",
    label: "Badges & Progression",
  },
  {
    id: "next-steps",
    label: "What to Do Next",
  },
];

const relatedLinks = [
  {
    href: "/zombies-arent-real/safe-zones",
    label: "Safe Zones: Gates, Broadcast, Hold & Evac Corridors",
  },
  {
    href: "/zombies-arent-real/achievements",
    label: "Achievements: All 14 Unlock Requirements",
  },
];

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
          name: "Zombies Aren't Real",
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
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Zombies Aren't Real",
        },
        {
          "@type": "Thing",
          name: "First Scenario and Safe Zone deployment",
        },
        {
          "@type": "Thing",
          name: "Garrison positioning and firing coverage",
        },
        {
          "@type": "Thing",
          name: "Mortars, Snipers, and Turrets",
        },
        {
          "@type": "Thing",
          name: "Defense budget and ammunition",
        },
        {
          "@type": "Thing",
          name: "Special buildings and battle abilities",
        },
        {
          "@type": "Thing",
          name: "Campaign progression",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Zombies Aren't Real"
          gameHref="/zombies-arent-real"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZombiesArentRealContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
