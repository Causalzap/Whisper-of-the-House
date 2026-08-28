import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsTrophiesContent from "@/data/star-wars-zero-company/achievements-trophies.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/achievements-trophies`;

const metadataTitle =
  "STAR WARS Zero Company Achievements & Trophies Guide";

const metadataDescription =
  "Plan all 53 Zero Company achievements, including Bonds, 50 Optional Missions, 20 Operators, Astromechs, combat cleanup, Expert, and Beskar Mode.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-do-or-do-not-90-percent-miss.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-astromech-recruitment-unlocked.webp`,
];

const toc = [
    {
      id: "all-achievements",
      label: "All 53 achievements",
    },
    {
      id: "achievement-roadmap",
      label: "Achievement roadmap",
    },
    {
      id: "natural-achievements",
      label: "Natural achievements",
    },
    {
      id: "long-term-achievements",
      label: "Long-term requirements",
    },
    {
      id: "bond-achievements",
      label: "Very High Bonds",
    },
    {
      id: "character-stories",
      label: "Character stories",
    },
    {
      id: "astromechs",
      label: "Astromechs",
    },
    {
      id: "combat-cleanup",
      label: "Combat cleanup",
    },
    {
      id: "permadeath-achievement",
      label: "Operator loss",
    },
    {
      id: "weapon-mods",
      label: "Weapon Mods",
    },
    {
      id: "difficulty-achievements",
      label: "Difficulty achievements",
    },
  ];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
  },
  {
    href: "/star-wars-zero-company/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Classes & Specializations Guide",
  },
  {
    href: "/star-wars-zero-company/smugglers-den-walkthrough",
    label: "Smuggler's Den & Tel-Rea Guide",
  },
  {
    href: "/star-wars-zero-company/permadeath-injuries",
    label: "Permadeath & Injuries Guide",
  },
  {
    href: "/star-wars-zero-company/difficulty-settings",
    label: "Difficulty Settings Guide",
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
    title: "STAR WARS Zero Company Achievements & Trophies",
    description:
      "Use a 53-achievement checklist with timing advice for Bonds, character stories, Optional Missions, Astromechs, combat cleanup, and Expert + Beskar.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "A 90 percent shot for the Do or Do Not achievement in STAR WARS Zero Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR WARS Zero Company Achievements & Trophies",
    description:
      "Plan all 53 achievements without leaving Bonds, roster goals, Optional Missions, Astromechs, and Beskar cleanup until the end.",
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
          name: "STAR WARS Zero Company Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements & Trophies",
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
        "STAR WARS Zero Company Achievements & Trophies Guide: All 53 Achievements",
      description:
        "A player-focused STAR WARS Zero Company achievement guide covering all 53 launch achievements and when I handle them during a campaign. It separates natural story unlocks from long-term requirements such as 50 Optional Missions, 20 Operators in one campaign, 1,138 Tactical Mission kills, all Zone Rewards, Very High Bond pairings, character stories, four-Astromech squad requirements, Hutt Roulette prizes, four Weapon Mods on one weapon, specific combat challenges, and the dedicated Expert plus Beskar Mode run.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company achievements",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company trophies",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company all 53 achievements",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company achievement guide",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Very High Bond",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company 50 Optional Missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Full Roster",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Astromechs",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Weapon Mods",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Expert",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Beskar Mode",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Legend achievement",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Plan All 53 Achievements Without Creating a Late-Game Grind"
          description="I let the easy and story achievements happen naturally, start Bonds and long campaign counters early, then save awkward combat goals and Expert + Beskar for deliberate cleanup."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsTrophiesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}