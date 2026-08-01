import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorMoneyContent from "@/data/waterpark-simulator/make-money.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/make-money`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-day-1-daily-report.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-poster-marketing-posters.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-inflatable-vending-machine-demand.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-94-percent-satisfaction-103-guests.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Money Guide: Profit on Hard Mode",
  description:
    "Separate building costs from real losses, control staff and stock, and use a tested Hard Mode route to keep your waterpark profitable.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Make Money in Waterpark Simulator",
    description:
      "Read negative Daily Profit correctly, protect your operating reserve, control wages and expand only after a no-build test day.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Day 1 report showing negative profit caused mainly by building expenses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Money Guide",
    description:
      "Diagnose negative Daily Profit, control staff and stock costs, and expand without destroying Hard Mode cash flow.",
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
          name: "Money Guide",
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
        "Waterpark Simulator Money Guide: How to Make Profit on Hard Mode",
      description:
        "This Waterpark Simulator money guide explains how to separate temporary construction losses from recurring operating losses, read the Daily Report, protect a restock and wage reserve, upgrade attractions that already earn, increase ticket and tip income, use Poster Marketing safely, decide when vending machines and Restockers are worth buying, control staff salaries and Staff Overflow costs, evaluate the Mafia loan, and run a no-build test day before expanding or deleting facilities.",
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
          name: "Waterpark Simulator money",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator negative Daily Profit",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator building expenses",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator staff costs",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Staff Overflow",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Poster Marketing",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator vending machines",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia loan",
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
          title="How I Make Money and Diagnose Negative Daily Profit"
          description="Separate expansion spending from recurring losses, protect wages and stock, and test one normal operating day before cutting staff or selling attractions."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 1, 2026"
          toc={[
            {
              id: "read-daily-report",
              label: "Why Daily Profit is negative",
            },
            {
              id: "early-game-money",
              label: "Early-game money route",
            },
            {
              id: "upgrade-existing-attractions",
              label: "What to buy first",
            },
            {
              id: "tickets-tips-and-marketing",
              label: "Tickets, tips and marketing",
            },
            {
              id: "vending-machines",
              label: "Vending machines",
            },
            {
              id: "staff-costs",
              label: "Staff costs",
            },
            {
              id: "mafia-loan",
              label: "Mafia loan",
            },
            {
              id: "construction-loss-vs-operating-loss",
              label: "Construction vs operating loss",
            },
            {
              id: "when-to-expand",
              label: "Buy, wait or turn back",
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
          <WaterparkSimulatorMoneyContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}