import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GameDiscoveryCta from "@/components/game-recommender/GameDiscoveryCta";

import WaterparkSimulatorContent from "@/data/waterpark-simulator/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/waterpark-simulator`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-first-star-objectives.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-one-star-clear-trash-objective.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-three-star-beach-achievements.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-museum-unlocked.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-three-and-a-half-star-objectives.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-four-star-achievement.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Guide: Hard Mode Beach Map Walkthrough",
  description:
    "Follow a Hard Mode Beach Map route from tutorial to four stars, then continue to five stars and Diamond with focused progression guides.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Hard Mode Beach Map Guide",
    description:
      "Follow the tutorial-to-four-star route, stabilise each expansion, then continue into five stars and Diamond through focused late-game guides.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator first-star objectives requiring 15 ticket sales, one trash bin and two showers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Guide",
    description:
      "Follow a tested Hard Mode Beach Map route through four stars, then continue into five-star and Diamond progression.",
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
        "Waterpark Simulator Guide: Hard Mode Beach Map Progression Route",
      description:
        "A practical Waterpark Simulator Hard Mode Beach Map guide covering the continuous route from the tutorial through four stars, first-star objectives, early upgrades and staff timing, the daily operating loop, two- and three-star progression, Museum integration, the Ocean pool-and-slide gate, expansion decisions, guest capacity and smaller systems, with focused handoffs for five-star and Diamond Prestige, Custom Slides, Mafia, staff, Research, money, Satisfaction and achievements.",
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
          name: "Waterpark Simulator guide",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator walkthrough",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator star progression",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator tutorial",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator one star",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator three stars",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator four stars",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator five stars",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Diamond Prestige",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Museum",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Park Size",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator guest capacity",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Chlorine",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Poster Marketing",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Night Shift",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Security",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Mafia",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Zipline",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Custom Slides",
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
          title="My Hard Mode Beach Map Route from Tutorial to Four Stars"
          description="Build one stable service loop, complete each Prestige gate without overexpanding, then use the focused late-game guides once five stars, Diamond or a specific system becomes the bottleneck."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={[
            {
              id: "choose-your-problem",
              label: "Choose the right guide",
            },
            {
              id: "tutorial-to-one-star",
              label: "Tutorial to one star",
            },
            {
              id: "one-to-two-stars",
              label: "One to two stars",
            },
            {
              id: "daily-operating-loop",
              label: "Daily operating loop",
            },
            {
              id: "two-to-three-stars",
              label: "Two to three stars",
            },
            {
              id: "museum-after-three-stars",
              label: "Museum after three stars",
            },
            {
              id: "three-to-four-stars",
              label: "Three to four stars",
            },
            {
              id: "after-four-stars",
              label: "Five stars and Diamond",
            },
            {
              id: "when-to-buy",
              label: "Buy, hire or turn back",
            },
            {
              id: "guest-capacity",
              label: "Guest capacity",
            },
            {
              id: "small-systems",
              label: "Smaller systems",
            },
            {
              id: "hub-faq",
              label: "Progression questions",
            },
            {
              id: "final-checklist",
              label: "Before leaving four stars",
            },
          ]}
          relatedLinks={[
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
              href: "/waterpark-simulator/custom-slides-guide",
              label: "Custom Slides Guide",
            },
            {
              href: "/waterpark-simulator/mafia-guide",
              label: "Mafia Loan & Sabotage Guide",
            },
            {
              href: "/waterpark-simulator/achievements-guide",
              label: "All 71 Achievements",
            },
          ]}
        >
          <WaterparkSimulatorContent />
        </GuideArticlePage>

        <GameDiscoveryCta
          gameTitle="Waterpark Simulator"
          heading="Looking for another game after Waterpark Simulator?"
          description="Use the quick recommender to find something that fits your current mood, platform, and play mode, or build a broader Gaming DNA profile from nine games you already love."
        />
      </main>

      <Footer />
    </>
  );
}