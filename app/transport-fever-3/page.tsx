import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3Content from "@/data/transport-fever-3/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = hubUrl;

const metadataTitle =
  "Transport Fever 3 Guide: Beginner, Cargo, Rail & City Growth";

const metadataDescription =
  "Build your first Transport Fever 3 network, manage money and cargo, fix road and rail bottlenecks, grow towns, and clear the first campaign missions.";

const articleDescription =
  "Start with one working town, decide whether money or cargo flow is limiting expansion, move from roads to rail when demand proves it, respond to town growth, and handle the opening campaign missions.";

const toc = [
  {
    id: "first-network",
    label: "Build the first network",
  },
  {
    id: "money-or-flow",
    label: "Money problem or transport problem?",
  },
  {
    id: "road-or-rail",
    label: "Road capacity or rail?",
  },
  {
    id: "town-changes",
    label: "When the town changes",
  },
  {
    id: "campaign",
    label: "Campaign missions",
  },
  {
    id: "later-network",
    label: "Use later unlocks well",
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
    href: "/transport-fever-3/rail-signals-guide",
    label: "Rail & Signals Guide",
  },
  {
    href: "/transport-fever-3/traffic-road-guide",
    label: "Traffic & Road Guide",
  },
  {
    href: "/transport-fever-3/city-growth-guide",
    label: "City Growth Guide",
  },
  {
    href: "/transport-fever-3/campaign-walkthrough",
    label: "Campaign Walkthrough",
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
    description: articleDescription,
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
      dateModified: "2026-09-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Transport Fever 3",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 beginner guide",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 cargo",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 rail",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 city growth",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Guide: What to Build and Fix Next"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 26, 2026"
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