import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeAchievementsContent from "@/data/servant-of-the-lake/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Servant of the Lake Achievements: All 49 & Hidden Guide";

const metadataDescription =
  "Track all 49 Servant of the Lake achievements, including 24 hidden tasks, Notebook replay, 100% cleanup, and the You've found him! secret route.";

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-achievements-notebook.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-tickling-william.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-perfect-hunt-achievement.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-all-additional-tasks-complete.webp`,
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
      "Track all 49 achievements with a checklist, then use Notebook replay to clear all 24 hidden achievements and the final post-game secret.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-15",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Servant of the Lake Notebook showing task and hidden achievement progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Track all 49 Servant of the Lake achievements, clear the 24 hidden tasks with Notebook replay, and finish the post-game secret.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "all-achievements-checklist",
    label: "All 49 achievements",
  },
  {
    id: "best-100-percent-route",
    label: "Best 100% route",
  },
  {
    id: "story-achievements",
    label: "24 story achievements",
  },
  {
    id: "day-1-hidden-achievements",
    label: "Day 1 hidden achievements",
  },
  {
    id: "day-2-hidden-achievements",
    label: "Day 2 hidden achievements",
  },
  {
    id: "day-3-hidden-achievements",
    label: "Day 3 hidden achievements",
  },
  {
    id: "post-game-replay",
    label: "Notebook replay",
  },
  {
    id: "youve-found-him",
    label: "You've found him!",
  },
  {
    id: "missing-achievement",
    label: "Missing an achievement?",
  },
  {
    id: "achievement-cleanup-rule",
    label: "49/49 cleanup rule",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/walkthrough",
    label: "Full Walkthrough",
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
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "Servant of the Lake Achievements Guide: All 49, Hidden Achievements and 100% Cleanup",
      description:
        "A complete Servant of the Lake achievement guide covering all 49 achievements: 24 story task achievements, 24 task-linked hidden achievements, the You've found him! secret achievement, Notebook chapter replay, 100% cleanup, and difficult triggers including Serving Matcha Latte, A Perfect Hunt, Checking the Furniture, Finishing Touch, Safety Test, and First Aid.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake achievements",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake 100% completion",
        },
        {
          "@type": "Thing",
          name: "Notebook chapter replay",
        },
        {
          "@type": "Thing",
          name: "Serving Matcha Latte",
        },
        {
          "@type": "Thing",
          name: "A Perfect Hunt",
        },
        {
          "@type": "Thing",
          name: "Checking the Furniture",
        },
        {
          "@type": "Thing",
          name: "Finishing Touch",
        },
        {
          "@type": "Thing",
          name: "First Aid",
        },
        {
          "@type": "Thing",
          name: "You've found him!",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Servant of the Lake Achievements & Hidden Achievements Guide"
          description="I track all 49 achievements with the checklist, finish the three-day story first, then use Notebook replay to clear the 24 hidden tasks and the final post-game secret."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
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