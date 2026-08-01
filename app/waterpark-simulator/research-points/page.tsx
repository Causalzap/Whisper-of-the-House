import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorResearchContent from "@/data/waterpark-simulator/research-points.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/research-points`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-end-of-day-research-loop.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-chlorine-research-chain.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-chlorine-unlock-description.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-park-size-research-unlock.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-two-janitors-mopping-puddles.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Research Points & Best Unlock Order",
  description:
    "Earn Research Points faster with a closing-time maintenance route, then choose Chlorine, Hiring Level, ticket, vending or Park Size upgrades.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Research Points and Unlock Order",
    description:
      "Use a tested Hard Mode maintenance loop, rush Chlorine only when dirty water is the bottleneck, and spend Research Points on the upgrade that removes the current problem.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator player cleaning and repairing attractions after closing to earn Research Point progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Research Points Guide",
    description:
      "Earn Research Points through a closing-time maintenance route and choose the best unlock for dirty water, queues, staff limits or expansion.",
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
          name: "Research Points Guide",
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
        "Waterpark Simulator Research Points Guide: Fast Route and Best Unlock Order",
      description:
        "This Waterpark Simulator Research Points guide explains how to earn progress through cleaning, repairs and puddle removal, why closing time is the most reliable maintenance window, and how to choose the next unlock according to the park's current bottleneck. It covers the Modern Toilets and Mop Upgrade route into Chlorine, Chlorine's dirty-water limitation, ticket and vending priorities, Hiring Level Up, Park Size, and the way Janitors and Maintenance Workers can reduce personal Research progress by completing available jobs first.",
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
          name: "Waterpark Simulator Research Points",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator best Research order",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Chlorine",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Modern Toilets",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mop Upgrade",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hiring Level Up",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Ticket ATM",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Vendor Training",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Restocker",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Park Size",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Janitors",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Maintenance Worker",
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
          title="How I Earn Research Points and Choose the Best Unlock"
          description="Use closing time for one full maintenance loop, then spend Research Points on the upgrade that removes the park's biggest current bottleneck."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 1, 2026"
          toc={[
            {
              id: "how-research-points-work",
              label: "How Research Points work",
            },
            {
              id: "fast-research-route",
              label: "Fast daily Research route",
            },
            {
              id: "chlorine-research-route",
              label: "When to rush Chlorine",
            },
            {
              id: "research-order",
              label: "Best unlock order",
            },
            {
              id: "staff-and-research",
              label: "Staff and Research progress",
            },
            {
              id: "research-checklist",
              label: "Before spending points",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/increase-satisfaction",
              label: "Increase Satisfaction",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
            {
              href: "/waterpark-simulator/staff-guide",
              label: "Staff Hiring & Employee Limits",
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
          <WaterparkSimulatorResearchContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}