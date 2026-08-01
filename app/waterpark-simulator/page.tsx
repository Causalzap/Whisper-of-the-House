import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

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
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-editor.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Guide: Hard Mode Beach Map Route",
  description:
    "Progress from the tutorial to four stars on Hard Mode Beach Map with tested routes for building, staff, Research, Museum quests and expansion.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Hard Mode Beach Map Guide",
    description:
      "Follow a tested tutorial-to-four-star route, stabilise each service area before expanding and use focused guides for money, staff, Research and Museum progression.",
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
      "A tested Hard Mode Beach Map route from the tutorial through four stars, including expansion, staff, Research and Museum decisions.",
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
        "This Waterpark Simulator guide follows one continuous Hard Mode Beach Map save from the tutorial through four stars. It covers the opening pool-and-slide route, the first-star ticket, trash-bin and shower objectives, early upgrades and staff timing, the daily operating loop, the route from two to three stars, Museum progression after three stars, the expensive Ocean pool-and-slide gate before four stars, buy-or-wait decisions, guest capacity, Chlorine, Poster Marketing, Night Shift, Zipline, Custom Slides and preparation for later five-star and Diamond progression.",
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
          title="My Hard Mode Beach Map Route from the Tutorial to Four Stars"
          description="Build one stable entrance-to-pool loop, complete each star gate without overexpanding, and use the focused guides when money, staff, Research, Satisfaction or Museum progression becomes the bottleneck."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 1, 2026"
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
              label: "Before pushing past four stars",
            },
          ]}
          relatedLinks={[
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
              href: "/waterpark-simulator/achievements-guide",
              label: "All 71 Achievements",
            },
          ]}
        >
          <WaterparkSimulatorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}