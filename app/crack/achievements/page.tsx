
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CrackAchievementsContent from "@/data/crack/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crack`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "CRACK Achievements: All 40 & 100% Checklist";

const metadataDescription =
  "Track all 40 CRACK Steam achievements, including six hidden unlocks, both endings, workplace events, arcade scores, and multiplayer challenges.";

const articleDescription =
  "Track all 40 CRACK Steam achievements with a saved interactive checklist. Find the conditions for six hidden achievements, both specimen endings, Well Rested, productivity audits, Workbot repairs and upgrades, Eggsteroids, Snake Whisperer, Arcade Master, multiplayer interactions, specimen hazards, and the remaining Paper Trail collectibles. Plan a practical route toward 100% completion.";

const imageUrls = [
  `${siteUrl}/images/crack/crack-achievements-productivity-audit.webp`,
  `${siteUrl}/images/crack/crack-achievements-slot-jackpot.webp`,
  `${siteUrl}/images/crack/crack-achievements-sleep-gas-fall.webp`,
  `${siteUrl}/images/crack/crack-achievements-pill-dispenser.webp`,
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
      "Complete all 40 CRACK Steam achievements with a saved checklist, hidden unlock conditions, arcade targets, and a 100% completion plan.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "CRACK productivity audit interface showing the earnings target and deadline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Track CRACK's 40 achievements, hidden secrets, both endings, arcade scores, and multiplayer goals.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "achievement-checklist",
    label: "All 40 Achievements Checklist",
  },
  {
    id: "work-orders",
    label: "Story & Work Order Achievements",
  },
  {
    id: "workplace-events",
    label: "Audits, Shifts & Inspections",
  },
  {
    id: "workbots-achievements",
    label: "Workbot Achievements",
  },
  {
    id: "arcade-achievements",
    label: "Arcade & Slot Achievements",
  },
  {
    id: "multiplayer-achievements",
    label: "Multiplayer Achievements",
  },
  {
    id: "hazards-achievements",
    label: "Hazards & Specimen Reactions",
  },
  {
    id: "hidden-achievements",
    label: "Hidden Rooms & Paper Trail",
  },
  {
    id: "endings-achievements",
    label: "Both Ending Achievements",
  },
  {
    id: "misc-achievements",
    label: "Pills, Coats & Earnings",
  },
  {
    id: "completion-plan",
    label: "100% Completion Plan",
  },
];

const relatedLinks = [
  {
    href: "/crack/walkthrough",
    label: "CRACK Walkthrough: All Work Orders",
  },
  {
    href: "/crack/endings",
    label: "CRACK: How to Get Both Endings",
  },
  {
    href: "/crack/redacted-door-code",
    label: "CRACK Redacted Room: All UV Code Clues",
  },
  {
    href: "/crack/workbots",
    label: "CRACK Workbots: Repairs & Level 5 Upgrades",
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
          name: "CRACK",
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
        "CRACK Achievements: All 40, Hidden Unlocks, and 100% Checklist",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-27",
      dateModified: "2026-10-27",
      about: [
        {
          "@type": "VideoGame",
          name: "CRACK",
        },
        {
          "@type": "Thing",
          name: "Steam achievements and 100% completion",
        },
        {
          "@type": "Thing",
          name: "Six hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Workplace inspections, audits, and Well Rested",
        },
        {
          "@type": "Thing",
          name: "Eggsteroids, Snake, and arcade achievements",
        },
        {
          "@type": "Thing",
          name: "Workbot upgrades and repairs",
        },
        {
          "@type": "Thing",
          name: "Multiplayer and specimen reaction achievements",
        },
        {
          "@type": "Thing",
          name: "Paper Trail and both endings",
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
          title="CRACK Achievements: All 40, Hidden Unlocks, and 100% Checklist"
          description="Track all 40 Steam achievements, find hidden unlock conditions, and plan multiplayer, arcade, and full-run completion goals."
          gameTitle="CRACK"
          gameHref="/crack"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CrackAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
