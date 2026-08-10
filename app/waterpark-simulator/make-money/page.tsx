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
    "Fix negative Daily Profit, control staff and stock costs, use Night Shift well, and expand without wrecking Hard Mode cash flow.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Money Guide: Profit on Hard Mode",
    description:
      "Separate construction spending from real operating losses, protect your reserve, use Night Shift profitably, and know when to expand or wait.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Day 1 report showing negative Daily Profit caused mainly by building expenses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Money Guide",
    description:
      "Diagnose negative Daily Profit, control staff and stock, use Night Shift, and expand without destroying Hard Mode cash flow.",
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
        "A practical Waterpark Simulator Hard Mode money guide covering negative Daily Profit, construction versus operating losses, early cash reserves, attraction upgrades, tickets, tips, Poster Marketing, vending machines, Night Shift, staff costs, Mafia cash, no-build test days, and buy-wait-turn-back expansion decisions.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-01",
      dateModified: "2026-08-10",
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
          name: "Waterpark Simulator make money",
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
          name: "Waterpark Simulator operating costs",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Night Shift",
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
          name: "Waterpark Simulator Mafia money",
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
          description="Separate building expenses from recurring losses, protect the operating reserve, use Night Shift once the park can support it, and test one normal day before making cuts."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
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
              label: "Tickets, tips & marketing",
            },
            {
              id: "vending-machines",
              label: "Vending machines",
            },
            {
              id: "night-shift",
              label: "Is Night Shift worth it?",
            },
            {
              id: "staff-costs",
              label: "Staff costs",
            },
            {
              id: "mafia-money",
              label: "Mafia money",
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
              href: "/waterpark-simulator/mafia-guide",
              label: "Mafia Loan & Sabotage Guide",
            },
            {
              href: "/waterpark-simulator/5-star-diamond-prestige-guide",
              label: "5-Star & Diamond Prestige Guide",
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