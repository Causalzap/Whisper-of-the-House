import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AchievementsTrophiesContent from "@/data/star-wars-zero-company/achievements-trophies.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/achievements-trophies`;

const metadataTitle =
  "STAR WARS Zero Company Trophy Guide & 53 Achievements";

const metadataDescription =
  "Track all 53 Zero Company achievements with a 100% roadmap for Bonds, 50 Optional Missions, Astromechs, combat cleanup, Expert and Beskar.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-do-or-do-not-90-percent-miss.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-astromech-recruitment-unlocked.webp`,
];

const toc = [
  {
    id: "achievement-roadmap",
    label: "53-achievement roadmap",
  },
  {
    id: "start-early",
    label: "What to start early",
  },
  {
    id: "natural-achievements",
    label: "What unlocks naturally",
  },
  {
    id: "combat-cleanup",
    label: "Combat cleanup",
  },
  {
    id: "roster-cleanup",
    label: "Roster & cleanup risks",
  },
  {
    id: "difficulty-achievements",
    label: "Expert & Beskar",
  },
  {
    id: "before-finishing-campaign",
    label: "Before finishing the campaign",
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
    href: "/star-wars-zero-company/permadeath-injuries",
    label: "Injuries, Permadeath & Aurelio",
  },
  {
    href: "/star-wars-zero-company/difficulty-settings",
    label: "Best Difficulty & Beskar Mode",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Best Classes & Specializations",
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
    description:
      "Use a 53-achievement roadmap that starts long counters and Bonds early, lets story unlocks happen naturally, and saves awkward cleanup and Expert + Beskar for the right time.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "A 90 percent or higher shot missing for the Do or Do Not achievement in STAR WARS Zero Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Plan all 53 Zero Company achievements without leaving Bonds, Optional Missions, Astromechs, roster goals and Expert + Beskar until the end.",
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
        "STAR WARS Zero Company Trophy Guide and All 53 Achievements",
      description:
        "A player-focused STAR WARS Zero Company achievement and trophy roadmap for all 53 launch achievements. It covers which requirements to start early, including 50 Optional Missions, 1,138 Tactical Mission kills, 20 Operators, all Zone Rewards, Hutt Roulette, Very High Bond pairings, six Operator stories and Astromech recruitment; which story achievements unlock naturally; when to handle combat cleanup, four Weapon Mods and Operator loss; and how to prepare for the Expert plus Beskar Legend run.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-29",
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
          name: "STAR WARS Zero Company trophy guide",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company 53 achievements",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company 100 percent",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Very High Bond",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Active Duty",
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
          name: "STAR WARS Zero Company A Natural Part of Life",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Fully Geared",
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
          title="All 53 Achievements and the 100% Route I Would Use"
          description="I start the long counters, required Bonds and roster goals while the campaign still gives me useful work, let story unlocks come naturally, and leave awkward combat conditions and Expert + Beskar until the squad is ready."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
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