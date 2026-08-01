import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorSatisfactionContent from "@/data/waterpark-simulator/increase-satisfaction.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/increase-satisfaction`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-60-percent-satisfaction-no-water.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-day-1-daily-report.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-trash-bin-shower-placement.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-guest-left-waiting-too-long.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-vomit-ticket-refund.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-94-percent-satisfaction-103-guests.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Satisfaction Guide: Fix Low Ratings",
  description:
    "Fix low or stuck Satisfaction by repairing empty pools, queues, trash, showers and staff routes. Follow a tested 60%-to-94% recovery plan.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Increase Satisfaction in Waterpark Simulator",
    description:
      "Read guest complaints, repair the failing service route and test one change at a time instead of wasting money on random decoration.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator report showing 60 percent Satisfaction after 32 complaints about a pool with no water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Satisfaction Guide",
    description:
      "Fix empty pools, queues, trash and missing services with a practical route that raised Satisfaction from 60% to 94%.",
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
          name: "Waterpark Simulator Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Satisfaction Guide",
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
        "Waterpark Simulator Satisfaction Guide: Fix Low or Stuck Guest Ratings",
      description:
        "This Waterpark Simulator Satisfaction guide explains how to diagnose low or apparently stuck guest ratings through the Daily Report instead of treating Satisfaction as a decoration score. It provides a tested Hard Mode Beach Map route for fixing pools with no water, dirty water and physical trash, broken attractions, ticket and food queues, empty vending machines, unassigned or resting employees, missing showers and trash bins, visible vomit, overcrowded pools and premature expansion. It also explains why Satisfaction differs from Park Prestige and how to run a controlled one-day recovery test without changing marketing, capacity and staffing at the same time.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-01",
      dateModified: "2026-08-01",
      about: [
        {
          "@type": "VideoGame",
          name: "Waterpark Simulator",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Satisfaction",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Satisfaction stuck at 80%",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator low Satisfaction",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator guest happiness",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator bad reviews",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator pool has no water",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator waiting for service",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator I saw something disgusting",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator trash bins",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator showers",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator ticket refunds",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator guest capacity",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator decoration",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator staff assignments",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map",
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
          title="How I Raise Satisfaction Without Rebuilding the Park"
          description="Read the complaints before spending, repair the failing entrance-to-pool route, and test one targeted change before adding more guests, staff or attractions."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 1, 2026"
          toc={[
            {
              id: "read-satisfaction-report",
              label: "Why Satisfaction is stuck",
            },
            {
              id: "fix-satisfaction-losses",
              label: "What to fix first",
            },
            {
              id: "satisfaction-check-route",
              label: "Pre-opening check",
            },
            {
              id: "waiting-for-service",
              label: "Waiting for service",
            },
            {
              id: "trash-and-disgusting-complaints",
              label: "Disgusting complaints",
            },
            {
              id: "capacity-and-satisfaction",
              label: "Capacity and Satisfaction",
            },
            {
              id: "decoration-and-boredom",
              label: "When decoration helps",
            },
            {
              id: "recover-low-satisfaction",
              label: "One-day recovery test",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/research-points",
              label: "Research Points & Unlock Order",
            },
            {
              href: "/waterpark-simulator/staff-guide",
              label: "Staff Hiring & Employee Limits",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
            {
              href: "/waterpark-simulator/museum-guide",
              label: "Museum Quests & Theme Rewards",
            },
            {
              href: "/waterpark-simulator/achievements-guide",
              label: "All 71 Achievements",
            },
          ]}
        >
          <WaterparkSimulatorSatisfactionContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}