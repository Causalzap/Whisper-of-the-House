import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostAchievementsContent from "@/data/permafrost/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Permafrost Achievements Guide: All 42 & How to Unlock";

const metadataDescription =
  "Track all 42 Permafrost achievements with a checklist, including Station Specialist, Archer, hidden achievements, Hell Runner, and 100% completion tips.";

const articleDescription =
  "Track all 42 Permafrost Steam achievements, learn how to unlock special challenges, plan White Hell and minimum-temperature runs, and finish remaining goals.";

const heroImage =
  "/images/permafrost/permafrost-station-specialist-weapons-bench.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-connoisseurs-bargain-whiskey.webp`,
];

const toc = [
  {
    id: "achievement-tracker",
    label: "All 42 Achievements Tracker",
  },
  {
    id: "station-specialist",
    label: "Station Specialist",
  },
  {
    id: "whiskey-and-flare",
    label: "Rare Whiskey & S.O.S.",
  },
  {
    id: "archer",
    label: "Archer: 55-Yard Bow Kill",
  },
  {
    id: "moonrock-and-exploration",
    label: "Moonrock & Exploration",
  },
  {
    id: "skills-and-workstations",
    label: "Skill Achievements",
  },
  {
    id: "survival-achievements",
    label: "Cold, Alcohol & Parasites",
  },
  {
    id: "hidden-achievements",
    label: "Memory Collector",
  },
  {
    id: "story-challenges",
    label: "Hell Runner & Frozen",
  },
  {
    id: "cumulative-achievements",
    label: "Cumulative Achievements",
  },
  {
    id: "combat-cleanup",
    label: "Killing Spree",
  },
  {
    id: "completion-order",
    label: "42/42 Completion Order",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests Walkthrough",
  },
  {
    href: "/permafrost/classes-skills",
    label: "Classes & Skill Progression",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Copper, Moonrock & Mining",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Resistance & Survival",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function PermafrostAchievementsPage() {
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
            name: "Permafrost",
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
        headline:
          "Permafrost Achievements Guide: All 42 & How to Unlock Them",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-11",
        dateModified: "2026-10-11",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          title="Permafrost Achievements Guide: All 42 & How to Unlock Them"
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PermafrostAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}