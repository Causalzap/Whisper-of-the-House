import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3Content from "@/data/transport-fever-3/index.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = hubUrl;

const metadataTitle =
  "Transport Fever 3 Guide: Beginner, Cargo, Rail & Campaign";

const metadataDescription =
  "Start Transport Fever 3, fix money, cargo, production, road and rail problems, grow towns, complete all 8 campaign missions, and track achievements.";

const articleDescription =
  "Start with one working route, then diagnose money, cargo, production, road, rail, and town-growth problems before expanding into the campaign and achievement goals.";


const toc = [
  {
    id: "first-network",
    label: "Start Your First Network",
  },
  {
    id: "money-or-profit",
    label: "Money & Route Profit",
  },
  {
    id: "cargo-not-moving",
    label: "Cargo Not Moving",
  },
  {
    id: "production-problems",
    label: "Industry Not Producing",
  },
  {
    id: "road-capacity",
    label: "Road Capacity",
  },
  {
    id: "road-to-rail",
    label: "When to Use Rail",
  },
  {
    id: "town-growth",
    label: "Town Growth",
  },
  {
    id: "campaign",
    label: "All 8 Campaign Missions",
  },
  {
    id: "achievement-progress",
    label: "41 Achievements",
  },
  {
    id: "later-network",
    label: "Later Transport Options",
  },
];


const relatedLinks = [
  {
    href: "/transport-fever-3/beginner-guide",
    label: "Transport Fever 3 Beginner Guide",
  },
  {
    href: "/transport-fever-3/economy-money-guide",
    label: "Money & Economy Guide",
  },
  {
    href: "/transport-fever-3/cargo-industry-guide",
    label: "Cargo & Industry Guide",
  },
  {
    href: "/transport-fever-3/production-chains",
    label: "Production Chains & Industries",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
  },
  {
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
  },
  {
    href: "/transport-fever-3/campaign-walkthrough",
    label: "Campaign Walkthrough: All 8 Missions",
  },
  {
    href: "/transport-fever-3/achievements",
    label: "All 41 Achievements",
  },
];


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
          name: "Transport Fever 3 Guide",
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

      headline: "Transport Fever 3 Guide: What to Build and Fix Next",

      description: articleDescription,

      datePublished: "2026-09-26",
      dateModified: "2026-10-03",

      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 beginner gameplay",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 money and economy",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo transport",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 production chains and industries",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 traffic and roads",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 rail and signals",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 city growth",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 campaign",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 achievements",
        },
      ],

      isPartOf: {
        "@id": `${siteUrl}#website`,
      },

      author: {
        "@id": `${siteUrl}#organization`,
      },

      publisher: {
        "@id": `${siteUrl}#organization`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,

      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Transport Fever 3 Guide: What to Build and Fix Next"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}