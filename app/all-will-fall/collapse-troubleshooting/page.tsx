import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllWillFallCollapseTroubleshootingContent from "@/data/all-will-fall/collapse-troubleshooting.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-will-fall/collapse-troubleshooting`;

export const metadata: Metadata = {
  title:
  "All Will Fall Collapse Guide: How to Fix Falling Buildings",
description:
  "Buildings keep falling in All Will Fall? Learn how to fix missing bottom support, decode 70% stability warnings, and stop collapses before the timer ends.",
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
          name: "All Will Fall",
          item: `${siteUrl}/all-will-fall`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Collapse Troubleshooting",
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
        "All Will Fall Collapse Troubleshooting Guide: Why Buildings Fall and How to Fix Them",
      description:
        "This All Will Fall collapse troubleshooting guide covers collapse warnings, timers, bottom support failures, unstable spans, railing direction mistakes, pathing confusion, and practical step-by-step fixes.",
      image: [
        `${siteUrl}/images/all-will-fall/collapse-warning-70-percent.webp`,
        `${siteUrl}/images/all-will-fall/collapse-timer-wooden-path-with-railing.webp`,
        `${siteUrl}/images/all-will-fall/bottom-support-fix-100-percent.webp`,
        `${siteUrl}/images/all-will-fall/railing-direction-pathing-fix.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-08",
      about: [
        {
          "@type": "VideoGame",
          name: "All Will Fall",
        },
        {
          "@type": "Thing",
          name: "Collapse Troubleshooting",
        },
        {
          "@type": "Thing",
          name: "Structural Support",
        },
        {
          "@type": "Thing",
          name: "Bottom Support",
        },
        {
          "@type": "Thing",
          name: "Railing Direction",
        },
        {
          "@type": "Thing",
          name: "Wooden Path with Railing",
        },
        {
          "@type": "Thing",
          name: "Pathing",
        },
        {
          "@type": "Thing",
          name: "Explosives",
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
          title="All Will Fall Collapse Troubleshooting Guide: Why Buildings Fall and How to Fix Them"
          description="Learn how to diagnose and fix unstable structures in All Will Fall. This guide explains why buildings collapse, how bottom support and segment support actually fail, why railing direction matters, how pathing can imitate structural errors, and what to do when a span still shows 70% or a collapse timer."
          gameTitle="All Will Fall"
          gameHref="/all-will-fall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 8, 2026"
          toc={[
            {
              id: "why-buildings-collapse-in-all-will-fall",
              label: "Why buildings collapse",
            },
            {
              id: "collapse-symptoms-players-actually-see",
              label: "Collapse symptoms players actually see",
            },
            {
              id: "all-will-fall-collapse-causes",
              label: "The 5 mistakes that matter most",
            },
            {
              id: "how-to-fix-collapse-step-by-step",
              label: "How to fix collapse step by step",
            },
            {
              id: "wooden-path-with-railing",
              label: "Why wooden path with railing matters",
            },
            {
              id: "support-values-and-what-the-run-actually-proves",
              label: "What the run actually proves",
            },
            {
              id: "when-the-problem-is-pathing-not-support",
              label: "When the problem is pathing, not support",
            },
            {
              id: "explosives-and-collapse-risk",
              label: "Explosives and collapse risk",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/all-will-fall/",
              label: "All Will Fall guide hub",
            },
            {
              href: "/all-will-fall/beginner-guide/",
              label: "All Will Fall beginner guide",
            },
            {
              href: "/all-will-fall/oil-rig-guide/",
              label: "All Will Fall Oil Rig guide",
            },
            {
              href: "/all-will-fall/broken-tanker-guide/",
              label: "All Will Fall Broken Tanker guide",
            },
          ]}
        >
          <AllWillFallCollapseTroubleshootingContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
