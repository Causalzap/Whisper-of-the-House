import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IdleDirectivePrestigeGuideContent from "@/data/idle-directive/first-prestige-best-augments.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/idle-directive`;
const pageUrl = `${hubUrl}/first-prestige-best-augments`;

const publishedDate = "2026-08-03";
const modifiedDate = "2026-08-03";

const imageUrls = [
  `${siteUrl}/images/idle-directive/idle-directive-four-point-reset-breakdown.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-first-prestige-reset-summary.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-first-prestige-augment-tree.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-later-prestige-repair-augments.webp`,
];

export const metadata: Metadata = {
  title: "IDLE_DIRECTIVE Best Augments and First Prestige Guide",
  description:
    "Choose the best early Augments, compare 4-point and 26-point resets, and decide when another Spire, Reactor, or achievement is worth the delay.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: "When I Reset and Which IDLE_DIRECTIVE Augments I Buy First",
    description:
      "Use real first-Prestige examples to choose a reset point, prioritize Signal Decryption, Tasks and Auto Explore, and avoid premature upgrades.",
    publishedTime: `${publishedDate}T00:00:00+08:00`,
    modifiedTime: `${modifiedDate}T00:00:00+08:00`,
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "IDLE_DIRECTIVE Prestige preview showing a 26-point reset from Energy, repairs and achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDLE_DIRECTIVE First Prestige and Best Augments",
    description:
      "Compare a fast four-point reset with a balanced 26-point Prestige and spend Augment Points around the next run's real bottleneck.",
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
          name: "IDLE_DIRECTIVE Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "First Prestige and Best Augments",
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
        "IDLE_DIRECTIVE Best Augments and First Prestige Reset Guide",
      description:
        "This IDLE_DIRECTIVE Prestige guide explains how I choose between a fast four-point reset and a longer 20-to-30-point first Prestige, what System Reset removes, and how a tested 26-point reset was divided between Energy, repairs and achievements. It prioritizes Signal Decryption, Tasks and Auto Explore before expensive crafting or convenience upgrades; compares Repair Speed with increased Augment Points from Spires and Reactors; explains when another visible Spire, Reactor or nearby achievement is worth delaying a reset for; and shows how Augment priorities shift from access unlocks to Auto Repair, resource multipliers, Replicator upgrades and persistent Trader progress on later Prestiges.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: publishedDate,
      dateModified: modifiedDate,
      about: [
        {
          "@type": "VideoGame",
          name: "IDLE_DIRECTIVE",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE first Prestige",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE best Augments",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE System Reset",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE four-point reset",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE 26-point Prestige",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Signal Decryption",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Tasks Augment",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Auto Explore",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Repair Speed",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Repair Augment Points",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Replicator Augment",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Spire and Reactor repairs",
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
          title="How I Choose My Reset Point and Spend Every Augment Point"
          description="I compare a quick four-point restart with a balanced first Prestige, then buy around the exact system or repair bottleneck I want to remove next."
          gameTitle="IDLE_DIRECTIVE"
          gameHref="/idle-directive"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 3, 2026"
          toc={[
            {
              id: "fast-or-balanced-reset",
              label: "Fast or balanced reset",
            },
            {
              id: "what-system-reset-removes",
              label: "What System Reset removes",
            },
            {
              id: "twenty-six-point-case",
              label: "The 26-point Prestige",
            },
            {
              id: "best-first-augments",
              label: "Best first Augments",
            },
            {
              id: "first-prestige-priority",
              label: "Priority by Prestige stage",
            },
            {
              id: "augments-i-delay",
              label: "Augments I delay",
            },
            {
              id: "delay-for-achievement",
              label: "Wait for one achievement?",
            },
            {
              id: "spires-reactors-terminals",
              label: "Spires, Reactors and Terminals",
            },
            {
              id: "later-prestige-priorities",
              label: "Later Prestige priorities",
            },
            {
              id: "restart-after-prestige",
              label: "Restart after Prestige",
            },
          ]}
          relatedLinks={[
            {
              href: "/idle-directive",
              label: "IDLE_DIRECTIVE Progression Guide",
            },
            {
              href: "/idle-directive/automation-machines-guide",
              label: "Automation & Machines Guide",
            },
            {
              href: "/idle-directive/layout-examples",
              label: "Working Layout Examples",
            },
            {
              href: "/idle-directive/achievements-guide",
              label: "All 43 Achievements",
            },
          ]}
        >
          <IdleDirectivePrestigeGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}