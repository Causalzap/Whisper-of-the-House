import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorStaffContent from "@/data/waterpark-simulator/staff-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/staff-guide`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-first-ticket-worker-brock.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-first-janitor-hiring-stats.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-two-janitors-mopping-puddles.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-vendor-assigned-to-stall.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-inflatable-vending-machine-demand.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-staff-overflow-200-percent-limit.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-six-worker-staff-setup.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Staff Guide: Best Hiring Order",
  description:
    "Choose who to hire first, compare staff stats, fix idle workers, manage Staff Overflow and build a roster that matches your park.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Staff Guide and Best Hiring Order",
    description:
      "Choose Ticket Workers, Janitors, Maintenance, Vendors and Restockers by real bottlenecks, then manage assignments, breaks and staff limits.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Hiring List comparing candidates before hiring the first Ticket Worker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Staff Guide",
    description:
      "Choose the best first hire, compare employee stats and solve staff-limit, assignment and break problems.",
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
          name: "Staff Guide",
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
        "Waterpark Simulator Staff Guide: Best Hiring Order and Employee Fixes",
      description:
        "This Waterpark Simulator staff guide explains who to hire first based on the park's current bottleneck, how to compare Efficiency, Precision, Movement Speed, Endurance, Recovery Time and Pay, and when Ticket Workers, Janitors, Maintenance Workers, Vendors, Restockers, Security and Mascots become useful. It also covers stall assignments, employee breaks, workers starting on the next day, Hiring Level Up, Staff Overflow and its recurring tax, a tested six-worker Hard Mode roster, and a checklist for diagnosing employees who appear idle or stop working.",
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
          name: "Waterpark Simulator staff",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator best hiring order",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Ticket Worker",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Janitor",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Maintenance Worker",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Vendor",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Restocker",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Security",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mascot",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hiring Level Up",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Staff Overflow",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator employees not working",
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
          title="How I Choose Staff, Compare Candidates and Fix Idle Workers"
          description="Hire for the bottleneck that already exists, compare the stats that matter for each role, and solve assignments, breaks and staff-cap problems before adding another employee."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 1, 2026"
          toc={[
            {
              id: "who-to-hire-first",
              label: "Who to hire first",
            },
            {
              id: "how-staff-stats-work",
              label: "Staff stats and pay",
            },
            {
              id: "ticket-worker",
              label: "Ticket Worker",
            },
            {
              id: "janitor-or-maintenance",
              label: "Janitor or Maintenance",
            },
            {
              id: "vendors-and-restocker",
              label: "Vendors and Restocker",
            },
            {
              id: "security-and-mascot",
              label: "Security and Mascot",
            },
            {
              id: "staff-limit",
              label: "Staff limit and Overflow",
            },
            {
              id: "six-worker-setup",
              label: "Six-worker setup",
            },
            {
              id: "employees-not-working",
              label: "Employees not working",
            },
            {
              id: "staff-checklist",
              label: "Hiring and firing checklist",
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
              href: "/waterpark-simulator/increase-satisfaction",
              label: "Increase Satisfaction",
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
          <WaterparkSimulatorStaffContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}