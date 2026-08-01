import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorAchievementsGuideContent from "@/data/waterpark-simulator/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/waterpark-simulator`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-three-star-beach-achievements.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-four-star-achievement.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-94-percent-satisfaction-103-guests.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-end-of-day-research-loop.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-pool-poop-cleanup.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-six-worker-staff-setup.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-zipline-ride.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-custom-slide-editor.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-trumpet-solo.webp`,
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-yogi-wooden-hot-tub-quest.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator 1.0 Achievements: All 71 Unlocks",
  description:
    "Unlock all 71 achievements with a Beach and Hard Mode route for stars, maps, Yogi quests, long grinds, Security, Zipline and Custom Slides.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator 1.0 Achievements Guide",
    description:
      "Route all 71 achievements through one Beach save, a separate City run, Yogi quests, long maintenance counters and the new 1.0 systems.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Beach Map reaching three-star Prestige",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator: All 71 Achievements",
    description:
      "Use one long Beach and Hard Mode save for most achievements, then finish City Map, Yogi, Diamond, Zipline and Custom Slide unlocks.",
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
          name: "Achievements Guide",
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
        "Waterpark Simulator 1.0 Achievements Guide: All 71 Unlocks and a 100% Route",
      description:
        "This Waterpark Simulator achievements guide covers all 71 achievements available in version 1.0. It explains how to combine general Prestige, Beach Map and Hard Mode achievements in one long-running save, when to create a separate City Map park, and how to plan cleaning, repair, puddle, trash, visitor, revenue, food-sale and staff counters before employees automate the required actions. It also covers Diamond Prestige, Security removals, Yogi's three-, four- and five-star achievements, the hidden Enlightenment Isn't Cheap condition, Zipline riding, Custom Slide creation, character customization and the new 1.0 map achievements.",
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
          name: "Waterpark Simulator achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator 1.0 achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator 71 achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator City Map",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Diamond Prestige",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Yogi achievements",
        },
        {
          "@type": "Thing",
          name: "Enlightenment Isn't Cheap achievement",
        },
        {
          "@type": "Thing",
          name: "Order Restored achievement",
        },
        {
          "@type": "Thing",
          name: "High Above the Park achievement",
        },
        {
          "@type": "Thing",
          name: "Slide Architect achievement",
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
          title="How I Route All 71 Achievements in Version 1.0"
          description="Use one developed Beach and Hard Mode park for the long counters, keep manual jobs away from staff when they matter, then finish City Map, Yogi, Diamond and the remaining one-action unlocks."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 1, 2026"
          toc={[
            {
              id: "achievement-roadmap",
              label: "100% achievement route",
            },
            {
              id: "version-1-achievements",
              label: "New 1.0 achievements",
            },
            {
              id: "progression-achievements",
              label: "Prestige and maps",
            },
            {
              id: "maintenance-achievements",
              label: "Cleaning and safety",
            },
            {
              id: "money-sales-staff-achievements",
              label: "Money, sales and staff",
            },
            {
              id: "one-off-achievements",
              label: "One-off achievements",
            },
            {
              id: "yogi-achievements",
              label: "Yogi achievements",
            },
            {
              id: "achievement-checklist",
              label: "Final 100% checklist",
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
              href: "/waterpark-simulator/staff-guide",
              label: "Staff Hiring & Employee Limits",
            },
            {
              href: "/waterpark-simulator/museum-guide",
              label: "Museum Quests & Theme Rewards",
            },
            {
              href: "/waterpark-simulator/increase-satisfaction",
              label: "Increase Satisfaction",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
          ]}
        >
          <WaterparkSimulatorAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}