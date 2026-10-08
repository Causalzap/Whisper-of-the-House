
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
  "Start Transport Fever 3 with a working route, fix cargo, money, production, road and rail problems, grow towns, finish 8 missions, and track 41 achievements.";

const articleTitle =
  "Transport Fever 3 Guide: What to Build and Fix Next";

const articleDescription =
  "Start with a working passenger or cargo route, then find out what is holding your network back. Fix financial losses, cargo delivery, industry production, road traffic, railway problems, and town growth before taking on campaign and achievement goals.";

const publishedAt = "2026-09-26";
const modifiedAt = "2026-10-08";

const toc = [
  {
    id: "first-network",
    label: "What to build first",
  },
  {
    id: "money-or-profit",
    label: "Money & line profit",
  },
  {
    id: "cargo-not-moving",
    label: "Cargo not moving",
  },
  {
    id: "production-problems",
    label: "Industry not producing",
  },
  {
    id: "road-capacity",
    label: "Traffic & road problems",
  },
  {
    id: "road-to-rail",
    label: "When to build rail",
  },
  {
    id: "town-growth",
    label: "Town not growing",
  },
  {
    id: "campaign",
    label: "All 8 campaign missions",
  },
  {
    id: "achievement-progress",
    label: "41 achievements",
  },
  {
    id: "later-network",
    label: "Later upgrades",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3/beginner-guide",
    label: "Beginner Guide",
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
    label: "Production Chains",
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
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
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

      headline: articleTitle,
      description: articleDescription,

      inLanguage: "en",
      datePublished: publishedAt,
      dateModified: modifiedAt,

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
          name: "Transport Fever 3 money and line profit",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo transport",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 production chains",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 traffic and roads",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 railway signals",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 town growth",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 campaign missions",
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
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
