import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FindTheNeedleAchievementsContent from "@/data/find-the-needle/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/find-the-needle`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle = "Find The Needle Achievements: All 60 & Hidden Checklist";
const metadataDescription =
  "Track all 60 Find The Needle achievements with a checklist, including eight hidden goals, 24 needles, 20 orders, Old School, Haste Makes Hay, and more.";

const articleTitle = "How Do You Unlock All 60 Find The Needle Achievements?";
const articleDescription =
  "Track all 60 achievements with a saved checklist, including eight hidden achievements, needle collections, all 20 orders, production milestones, and special runs.";

const toc = [
  { id: "achievement-checklist", label: "All 60 Achievements Checklist" },
  { id: "opening-milestones", label: "Opening Achievements" },
  { id: "production-milestones", label: "Production Achievements" },
  { id: "orders-stages", label: "Orders & Book Closed" },
  { id: "needle-collection", label: "Needle & Cabinet Collections" },
  { id: "hidden-achievements", label: "Eight Hidden Achievements" },
  { id: "yard-machinery", label: "Building, Tools & Customization" },
  { id: "money-playtime", label: "Money, Hay & Playtime" },
  { id: "special-runs", label: "Special Runs & Pile Sizes" },
  { id: "completion-plan", label: "All 60: Final Checks" },
];

const relatedLinks = [
  { href: "/find-the-needle", label: "Start, Orders & Production" },
  { href: "/find-the-needle/scanner", label: "Scanner & Needle Detection" },
  { href: "/find-the-needle/automation", label: "Conveyors & Machine Troubleshooting" },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
  },
  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
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
          name: "Find The Needle",
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
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-07",
    },
  ],
};

export default function FindTheNeedleAchievementsPage() {
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
          description={articleDescription}
          gameTitle="Find The Needle"
          gameHref="/find-the-needle"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FindTheNeedleAchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
