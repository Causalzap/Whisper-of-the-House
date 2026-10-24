
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MoonSweepersAchievementsContent from "@/data/moon-sweepers/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/moon-sweepers`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Moon Sweepers Achievements: All 33 & 100% Checklist";

const metadataDescription =
  "Track all 33 Moon Sweepers achievements, including the hidden Conveyor loop, Depot deposits, money milestones, and 100% Moon cleaning progress.";

const articleDescription =
  "Track all 33 Moon Sweepers achievements with a completion checklist. Unlock the first cleaning, brush upgrade, Depot deposit, container launch, and building milestones; move Dust on a Conveyor and attempt the hidden closed-loop achievement; clean while driving and play with friends; then track cumulative Dust collection, Depot deposits, successful launches, completed sections, lifetime earnings, spending, and 1%, 10%, 50%, and 100% Moon cleaning milestones.";

const imageUrls = [
  `${siteUrl}/images/moon-sweepers/moon-sweepers-depot-manual-deposit.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-section-100-percent.webp`,
  `${siteUrl}/images/moon-sweepers/moon-sweepers-moon-cleaning-progress.webp`,
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
    description:
      "Complete all 33 Moon Sweepers achievements, including the hidden Conveyor loop, 10,000 Depot deposits, and the 100% Moon cleaning milestone.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        alt: "Moon Sweepers Moon Map showing the overall cleaning percentage and completed sector counts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Track all 33 Moon Sweepers achievements, find hidden unlocks, and measure progress toward cleaning the whole Moon.",
    images: [imageUrls[2]],
  },
};

const toc = [
  {
    id: "achievement-checklist",
    label: "All 33 Achievements Checklist",
  },
  {
    id: "first-shift",
    label: "First Cleaning & Launch",
  },
  {
    id: "conveyor-achievements",
    label: "Conveyor & Hidden Loop",
  },
  {
    id: "coop-vehicle",
    label: "Multiplayer & Vehicle",
  },
  {
    id: "dust-collection",
    label: "10–10,000 kg Dust",
  },
  {
    id: "depot-launches",
    label: "Depot Deposits & Launches",
  },
  {
    id: "regions-sections",
    label: "Regions & Sections",
  },
  {
    id: "money-milestones",
    label: "Money Earned & Spent",
  },
  {
    id: "moon-percentage",
    label: "1% to 100% Moon Cleaning",
  },
  {
    id: "completion-plan",
    label: "Remaining Achievements",
  },
];

const relatedLinks = [
  {
    href: "/moon-sweepers",
    label: "Moon Sweepers Beginner Guide: Upgrades & Vehicles",
  },
  {
    href: "/moon-sweepers/automation",
    label: "Moon Sweepers Automation: Conveyors, Power & JONAS",
  },
];

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
          name: "Moon Sweepers",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
        "Moon Sweepers: All 33 Achievements, Hidden Conveyor Loop, and 100% Completion",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-24",
      dateModified: "2026-10-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Moon Sweepers",
        },
        {
          "@type": "Thing",
          name: "Moon Sweepers Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Hidden closed Conveyor loop achievement",
        },
        {
          "@type": "Thing",
          name: "Dust collection and Depot deposits",
        },
        {
          "@type": "Thing",
          name: "Multiplayer and vehicle achievements",
        },
        {
          "@type": "Thing",
          name: "Cumulative earnings and spending milestones",
        },
        {
          "@type": "Thing",
          name: "Whole Moon cleaning completion",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Moon Sweepers Achievements: All 33 & 100% Checklist"
          description="Track every achievement, unlock the hidden Conveyor loop, complete Depot and money milestones, and measure progress toward cleaning 100% of the Moon."
          gameTitle="Moon Sweepers"
          gameHref="/moon-sweepers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MoonSweepersAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
