import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PotatoPleaseAchievementsContent from "@/data/potato-please/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/potato-please`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle = "Potato Please Achievements: All 20 & 100% Checklist";
const metadataDescription =
  "Track all 20 Potato Please achievements, including hand-peeling milestones, Good Boy, automation, No Escape, train endings, and two difficult hidden goals.";

const articleTitle = "How Do You Unlock All 20 Achievements in Potato Please?";
const articleDescription =
  "Use a 20-achievement checklist to track first-shift goals, manual peeling totals, Good Boy, automation milestones, No Escape, and the three train-route endings.";

const imageFilenames = [
  "potato-please-good-boy-achievement.webp",
  "potato-please-no-escape-achievement.webp",
];
const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/potato-please/${file}`,
);

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Puppy recovering after being fed in Potato Please during the Good Boy achievement sequence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "achievement-checklist", label: "20-Achievement Checklist" },
  { id: "first-shift", label: "First-Shift Achievements" },
  { id: "kindness", label: "Good Boy & A Heart of Gold" },
  { id: "peeling-counts", label: "Hand-Peeling Milestones" },
  { id: "automation-achievements", label: "Automation Achievements" },
  { id: "rank-completion", label: "Employee of the Month" },
  { id: "quota-escape", label: "The Quota & No Escape" },
  { id: "endings-achievements", label: "Three Ending Achievements" },
  { id: "unresolved-achievements", label: "Two Hidden Achievements" },
  { id: "completion-plan", label: "Finish Remaining Achievements" },
];

const relatedLinks = [
  { href: "/potato-please", label: "Progression: First Shift to Final Quota" },
  { href: "/potato-please/automation", label: "Automation: Machines & Crane Autopilot" },
  { href: "/potato-please/endings", label: "All Endings: Train Routes & Hidden Key" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Potato Please", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Unlock All 20 Achievements", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      about: [
        { "@type": "VideoGame", name: "Potato Please" },
        { "@type": "Thing", name: "Steam achievements and progress tracking" },
        { "@type": "Thing", name: "500 and 1000 manual peels" },
        { "@type": "Thing", name: "Good Boy and other story achievements" },
        { "@type": "Thing", name: "Automation-related achievements" },
        { "@type": "Thing", name: "Quota and No Escape" },
        { "@type": "Thing", name: "Three train-ending achievements" },
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
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
          title={articleTitle}
          description="Check off all 20 Potato Please achievements, with hand-peeling totals, puppy and machine milestones, the Quota, hidden interactions, and train endings."
          gameTitle="Potato Please"
          gameHref="/potato-please"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PotatoPleaseAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
