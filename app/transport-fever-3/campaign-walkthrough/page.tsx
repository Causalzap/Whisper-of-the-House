import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TransportFever3CampaignWalkthroughContent from "@/data/transport-fever-3/campaign-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/transport-fever-3`;
const pageUrl = `${hubUrl}/campaign-walkthrough`;

const metadataTitle =
  "Transport Fever 3 Campaign Walkthrough: All 8 Missions";

const metadataDescription =
  "Complete all 8 Transport Fever 3 campaign missions with star requirements, special awards, objective order, cargo targets, and Final Countdown launch tips.";

const articleDescription =
  "Complete all eight Transport Fever 3 campaign missions from Saving Mardi Gras through Final Countdown, with required quantities, star conditions, special awards, timed objectives, and the mission-specific problems that can stop progress.";

const imageUrls = [
  `${siteUrl}/images/transport-fever-3/transport-fever-3-mardi-gras-alligators.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-mardi-gras-wood-delivery.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-mardi-gras-parade-route.webp`,

  `${siteUrl}/images/transport-fever-3/transport-fever-3-alpine-crossing-signals.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-alpine-crossing-zermatt.webp`,

  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-maintenance-camp.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-truck-condition.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-remains.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-desert-excavation.webp`,

  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-sewage-line.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-instruments.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-public-transport.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-festival-helicopter.webp`,

  `${siteUrl}/images/transport-fever-3/transport-fever-3-oil-people-prospecting.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-oil-people-steel-dry-dock.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-oil-people-lighthouse-rescue.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-oil-people-oil-race.webp`,

  `${siteUrl}/images/transport-fever-3/transport-fever-3-island-expansion-objectives.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-trans-philippine-railroad.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-island-expansion-yacht-oil.webp`,

  `${siteUrl}/images/transport-fever-3/transport-fever-3-big-city-problems-objectives.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-big-city-five-districts.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-big-city-cheers.webp`,
  `${siteUrl}/images/transport-fever-3/transport-fever-3-big-city-election.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "mission-1-saving-mardi-gras",
    label: "Mission 1: Saving Mardi Gras",
  },
  {
    id: "mission-2-alpine-crossing",
    label: "Mission 2: Alpine Crossing",
  },
  {
    id: "mission-3-desert-adventure",
    label: "Mission 3: Desert Adventure",
  },
  {
    id: "mission-4-biggest-festival-ever",
    label: "Mission 4: Biggest Festival Ever",
  },
  {
    id: "mission-5-oil-for-the-people",
    label: "Mission 5: Oil for the People",
  },
  {
    id: "mission-6-island-expansion",
    label: "Mission 6: Island Expansion",
  },
  {
    id: "mission-7-big-city-problems",
    label: "Mission 7: Big City Problems",
  },
  {
    id: "mission-8-final-countdown",
    label: "Mission 8: Final Countdown",
  },
];

const relatedLinks = [
  {
    href: "/transport-fever-3",
    label: "Transport Fever 3 Guide",
  },
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

    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Transport Fever 3 Saving Mardi Gras campaign mission at the New Orleans logging camp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Campaign Walkthrough",
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
        "Transport Fever 3 Campaign Walkthrough: All 8 Missions",

      description: articleDescription,

      image: imageUrls,

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
          name: "Saving Mardi Gras",
        },
        {
          "@type": "Thing",
          name: "Alpine Crossing",
        },
        {
          "@type": "Thing",
          name: "Desert Adventure",
        },
        {
          "@type": "Thing",
          name: "Biggest Festival Ever",
        },
        {
          "@type": "Thing",
          name: "Oil for the People",
        },
        {
          "@type": "Thing",
          name: "Island Expansion",
        },
        {
          "@type": "Thing",
          name: "Big City Problems",
        },
        {
          "@type": "Thing",
          name: "Final Countdown",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 campaign star requirements",
        },
        {
          "@type": "Thing",
          name: "Transport Fever 3 special awards",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Transport Fever 3 Campaign Walkthrough: All 8 Missions"
          description={articleDescription}
          gameTitle="Transport Fever 3"
          gameHref="/transport-fever-3"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TransportFever3CampaignWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}