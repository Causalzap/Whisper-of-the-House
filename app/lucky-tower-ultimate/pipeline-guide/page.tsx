import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LuckyTowerUltimatePipelineGuideContent from "@/data/lucky-tower-ultimate/pipeline-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lucky-tower-ultimate/pipeline-guide`;

export const metadata: Metadata = {
    title: "Lucky Tower Ultimate Pipeline Guide: Economy & Saving Gear",
    description:
      "Master the Pipeline economy in Lucky Tower Ultimate. Learn how to fix chutes, save your best gear across deaths, and balance gold extraction costs perfectly.",
    alternates: {
      canonical: pageUrl,
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
          name: "Lucky Tower Ultimate",
          item: `${siteUrl}/lucky-tower-ultimate`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pipeline Guide",
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
      headline: "Lucky Tower Ultimate Pipeline Guide",
      description:
        "This Lucky Tower Ultimate pipeline guide explains where to find Marisha and Louise, how the four broken pipes work, how to activate the system, how much reclaiming costs, why items remain safe after death once piped onward, and when the pipe network is better than carrying loot yourself.",
      image: [
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-pipeline-hero.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-last-pipe-near-exit.webp`,
        `${siteUrl}/images/lucky-tower-ultimate/lucky-tower-ultimate-pipeline-gasket-wrench.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Lucky Tower Ultimate",
        },
        {
          "@type": "Thing",
          name: "Pipeline System",
        },
        {
          "@type": "Thing",
          name: "Marisha",
        },
        {
          "@type": "Thing",
          name: "Louise",
        },
        {
          "@type": "Thing",
          name: "Broken Pipes",
        },
        {
          "@type": "Thing",
          name: "Connecting Ring",
        },
        {
          "@type": "Thing",
          name: "Pipe Slot",
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
          title="Lucky Tower Ultimate Pipeline Guide"
          description="Use this Lucky Tower Ultimate pipeline guide to learn where to find Marisha and Louise, how many broken pipes there are, how the pipe slot works, what the 100 gold activation and 8 gold reclaim costs mean, and when piping an item is better than carrying it yourself."
          gameTitle="Lucky Tower Ultimate"
          gameHref="/lucky-tower-ultimate"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 21, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick Answer",
            },
            {
              id: "where-to-start-the-pipeline-quest",
              label: "Where to Start the Pipeline Quest",
            },
            {
              id: "how-the-pipeline-system-works",
              label: "How the Pipeline System Works",
            },
            {
              id: "how-many-broken-pipes-are-there",
              label: "How Many Broken Pipes Are There?",
            },
            {
              id: "where-the-last-pipe-usually-gets-missed",
              label: "Where the Last Pipe Usually Gets Missed",
            },
            {
              id: "activation-cost-and-running-costs",
              label: "Activation Cost and Running Costs",
            },
            {
              id: "connecting-ring-economics",
              label: "Connecting Ring Economics",
            },
            {
              id: "pipe-system-vs-carrying-items-yourself",
              label: "Pipe System vs Carrying Items Yourself",
            },
            {
              id: "when-the-pipeline-is-most-worth-it",
              label: "When the Pipeline Is Most Worth It",
            },
            {
              id: "when-carrying-it-yourself-is-better",
              label: "When Carrying It Yourself Is Better",
            },
            {
              id: "best-items-to-send",
              label: "Best Items to Send",
            },
            {
              id: "how-to-finish-the-pipeline-quest-efficiently",
              label: "How to Finish the Pipeline Quest Efficiently",
            },
            {
              id: "pipeline-related-achievements",
              label: "Pipeline-Related Achievements",
            },
            {
              id: "plumber-slumber",
              label: "Plumber Slumber",
            },
            {
              id: "common-pipeline-mistakes",
              label: "Common Pipeline Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
            {
              id: "final-verdict",
              label: "Final Verdict",
            },
          ]}
          relatedLinks={[
            {
              href: "/lucky-tower-ultimate/companions-guide/",
              label: "Lucky Tower Ultimate companions guide",
            },
            {
              href: "/lucky-tower-ultimate/potion-recipes-and-permanent-buffs-guide/",
              label: "Lucky Tower Ultimate potion recipes and permanent buffs guide",
            },
            {
              href: "/lucky-tower-ultimate/100-achievement-guide/",
              label: "Lucky Tower Ultimate 100% achievement guide",
            },
            {
              href: "/lucky-tower-ultimate/guide-hub/",
              label: "Lucky Tower Ultimate guide hub",
            },
          ]}
        >
          <LuckyTowerUltimatePipelineGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}