import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeAchievementsContent from "@/data/servant-of-the-lake/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-achievements-notebook.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-tickling-william.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-perfect-hunt-achievement.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-all-additional-tasks-complete.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Achievements: 49 & 100% Guide",
  description:
    "Track all 49 Servant of the Lake achievements, use chapter replay for 25 optional tasks, get A Perfect Hunt, and plan your post-game 100% cleanup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Achievements: 49 & 100% Guide",
    description:
      "Use the three-day achievement list and post-game Notebook replay to clean up all 49 achievements without restarting the full story.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Servant of the Lake Notebook showing tasks and achievement progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Achievements: 49 & 100% Guide",
    description:
      "All 49 achievements, 25 optional tasks, chapter-replay cleanup, A Perfect Hunt, and the Secret Location achievement route.",
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
          name: "Servant of the Lake Guide",
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
        "Servant of the Lake Achievements Guide: All 49 Achievements and 100% Cleanup",
      description:
        "A Servant of the Lake achievement guide covering all 49 achievements, the 24 main story task achievements, 25 optional achievements, Notebook chapter replay, Tickling Mr. William, A Perfect Hunt, You've found him!, and post-game additional-task cleanup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake achievements",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake 100% completion",
        },
        {
          "@type": "Thing",
          name: "A Perfect Hunt",
        },
        {
          "@type": "Thing",
          name: "Tickling Mr. William",
        },
        {
          "@type": "Thing",
          name: "You've found him!",
        },
        {
          "@type": "Thing",
          name: "Additional tasks",
        },
        {
          "@type": "Thing",
          name: "Notebook chapter replay",
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

const toc = [
  {
    id: "my-100-percent-route",
    label: "My 100% route",
  },
  {
    id: "day-1-achievements",
    label: "Day 1 achievements",
  },
  {
    id: "day-2-achievements",
    label: "Day 2 achievements",
  },
  {
    id: "tickling-william",
    label: "Tickling Mr. William",
  },
  {
    id: "perfect-hunt",
    label: "A Perfect Hunt",
  },
  {
    id: "day-3-achievements",
    label: "Day 3 achievements",
  },
  {
    id: "seasoning-the-soup",
    label: "Seasoning the Soup",
  },
  {
    id: "youve-found-him",
    label: "You've found him!",
  },
  {
    id: "post-game-cleanup",
    label: "Post-game cleanup",
  },
  {
    id: "achievement-priority",
    label: "Achievements to finish last",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/walkthrough",
    label: "Servant of the Lake Walkthrough",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "Puzzle Solutions & Codes",
  },
  {
    href: "/servant-of-the-lake/secret-ending",
    label: "Secret Ending & You've Found Him",
  },
];

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
          title="Servant of the Lake Achievements & 100% Guide"
          description="I finish the three-day story first, then use Notebook chapter replay to clean up the 25 optional achievements, including A Perfect Hunt and the post-game Secret Location route."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}