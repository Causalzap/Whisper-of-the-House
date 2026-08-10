import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WaterparkSimulatorAchievementsContent from "@/data/waterpark-simulator/achievements-guide.mdx";

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
  `${siteUrl}/images/waterpark-simulator/waterpark-simulator-trumpet-solo.webp`,
];

export const metadata: Metadata = {
  title: "Waterpark Simulator Achievements Guide: All 71 Unlocks",
  description:
    "Track all 71 Waterpark Simulator achievements with exact conditions, efficient counter routes, Beach and City goals, Hard Mode, Diamond, Yogi and 1.0 unlocks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Waterpark Simulator Achievements Guide: All 71 Unlocks",
    description:
      "Complete all 71 achievements with a practical route for Prestige, Beach and City maps, maintenance counters, sales, Yogi, Security and one-off actions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Waterpark Simulator Beach Map reaching three-star Prestige and unlocking progression achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterpark Simulator Achievements Guide",
    description:
      "Track all 71 achievements, long counters, map requirements, Prestige milestones and one-off cleanup triggers.",
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
        "Waterpark Simulator Achievements Guide: All 71 Unlock Conditions",
      description:
        "A practical Waterpark Simulator achievement guide covering all 71 version 1.0 achievements, Beach and City Map requirements, Normal and Hard Prestige milestones, long cleaning and repair counters, revenue and sales goals, Security, Yogi, Diamond Prestige, Custom Slides, Ziplines and final 100% cleanup planning.",
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
          name: "Waterpark Simulator achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator all 71 achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Beach Map achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator City Map achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Hard Mode achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Diamond achievement",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Yogi achievements",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Security achievement",
        },
        {
          "@type": "Thing",
          name: "Waterpark Simulator Slide Architect",
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
          title="How I Route All 71 Waterpark Simulator Achievements"
          description="Use one long-running Hard Mode Beach save for most counters, combine overlapping Prestige goals, then switch to City and short cleanup sessions only when the achievement actually requires it."
          gameTitle="Waterpark Simulator"
          gameHref="/waterpark-simulator"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={[
            {
              id: "achievement-roadmap",
              label: "My achievement route",
            },
            {
              id: "version-1-achievements",
              label: "1.0 achievement additions",
            },
            {
              id: "progression-achievements",
              label: "Prestige & map achievements",
            },
            {
              id: "maintenance-achievements",
              label: "Cleaning, repair & safety",
            },
            {
              id: "money-sales-staff-achievements",
              label: "Revenue, sales & staff",
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
              label: "100% cleanup checklist",
            },
            {
              id: "achievement-owner-guides",
              label: "Related Owner guides",
            },
          ]}
          relatedLinks={[
            {
              href: "/waterpark-simulator",
              label: "Waterpark Simulator Guide Hub",
            },
            {
              href: "/waterpark-simulator/5-star-diamond-prestige-guide",
              label: "5-Star & Diamond Prestige Guide",
            },
            {
              href: "/waterpark-simulator/custom-slides-guide",
              label: "Custom Slides Guide",
            },
            {
              href: "/waterpark-simulator/museum-guide",
              label: "Museum Quests & Theme Rewards",
            },
            {
              href: "/waterpark-simulator/staff-guide",
              label: "Staff Hiring & Employee Limits",
            },
            {
              href: "/waterpark-simulator/research-points",
              label: "Research Points & Unlock Order",
            },
            {
              href: "/waterpark-simulator/make-money",
              label: "Hard Mode Money Guide",
            },
          ]}
        >
          <WaterparkSimulatorAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}