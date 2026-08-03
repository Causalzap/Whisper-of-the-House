import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import IdleDirectiveAchievementsGuideContent from "@/data/idle-directive/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/idle-directive`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/idle-directive/idle-directive-achievements-overview-14-of-43.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-energy-capacity-battery-4x2.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-item-upgrade-level-250-cost.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-four-trader-reputation-achievements.webp`,
  `${siteUrl}/images/idle-directive/idle-directive-omega-unlock-all-augments.webp`,
];

export const metadata: Metadata = {
  title: "IDLE_DIRECTIVE Achievements Guide: Complete All 43",
  description:
    "Complete all 43 IDLE_DIRECTIVE achievements, including 50M Energy Capacity, level 250, max Trader Reputation, Omega, Terminals, and Launch.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Complete All 43 IDLE_DIRECTIVE Achievements",
    description:
      "Plan the early milestones, automate travel and repairs, then finish 50M capacity, level 250, Trader reputation, Terminals and Omega.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 608,
        height: 327,
        alt: "IDLE_DIRECTIVE achievement list showing 14 of 43 achievements and the remaining progression requirements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDLE_DIRECTIVE Achievements Guide",
    description:
      "Work through all 43 achievements without delaying Prestige for requirements your current machine is not ready to complete.",
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
          name: "IDLE_DIRECTIVE Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
        "IDLE_DIRECTIVE Achievements Guide: How to Complete All 43 Requirements",
      description:
        "This IDLE_DIRECTIVE achievements guide covers all 43 requirements, including the five-stage Energy Efficiency, Energy Capacity, Item Upgrade, Exploration, Travel and Repair chains; contact and maximum-Reputation achievements for Habitat, Reservoir, Outpost and Enclave; Maximum Movement; Terminal Repair and Directive Complete; Omega; and the hidden Launch achievement. It explains which milestones I complete before Prestige, why Energy Capacity only checks installed Battery capacity rather than stored charge, how I approach 50 million capacity, 300 percent Energy Efficiency and a level-250 item, how I combine Auto Explore with cumulative Exploration and Travel progress, why I prioritize Spires for the repair-count achievements, and when a requirement belongs in a later run.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-03",
      dateModified: "2026-08-03",
      about: [
        {
          "@type": "VideoGame",
          name: "IDLE_DIRECTIVE",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE achievements guide",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE all 43 achievements",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Energy Capacity",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE 50 million Energy Capacity",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Energy Efficiency",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE item level 250",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Exploration achievements",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Travel achievements",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Repair achievements",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Trader Reputation",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Omega achievement",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Directive Complete",
        },
        {
          "@type": "Thing",
          name: "IDLE_DIRECTIVE Launch achievement",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Work Through All 43 Achievements Without Wasting a Run"
          description="Take cheap milestones early, automate travel and repairs, then build dedicated runs for 50M capacity, level 250, Trader reputation and Omega."
          gameTitle="IDLE_DIRECTIVE"
          gameHref="/idle-directive"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 3, 2026"
          toc={[
            {
              id: "achievement-route",
              label: "Achievement route",
            },
            {
              id: "all-achievement-thresholds",
              label: "All achievement thresholds",
            },
            {
              id: "early-achievements",
              label: "Early achievements",
            },
            {
              id: "energy-capacity",
              label: "50M Energy Capacity",
            },
            {
              id: "energy-efficiency",
              label: "300% Energy Efficiency",
            },
            {
              id: "item-level-250",
              label: "Item level 250",
            },
            {
              id: "exploration-travel",
              label: "Exploration and Travel",
            },
            {
              id: "repair-achievements",
              label: "Repair achievements",
            },
            {
              id: "trader-achievements",
              label: "Trader achievements",
            },
            {
              id: "maximum-movement",
              label: "Maximum Movement",
            },
            {
              id: "terminal-achievements",
              label: "Terminal achievements",
            },
            {
              id: "omega-achievement",
              label: "Omega",
            },
            {
              id: "launch-achievement",
              label: "Hidden Launch achievement",
            },
            {
              id: "when-to-stop",
              label: "When to stop",
            },
          ]}
          relatedLinks={[
            {
              href: "/idle-directive/first-prestige-best-augments",
              label: "Best Augments & First Prestige",
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
              href: "/idle-directive",
              label: "IDLE_DIRECTIVE Guide Hub",
            },
          ]}
        >
          <IdleDirectiveAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}