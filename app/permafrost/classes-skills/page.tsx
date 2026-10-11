
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PermafrostClassesSkillsContent from "@/data/permafrost/classes-skills.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/permafrost`;
const pageUrl = `${hubUrl}/classes-skills`;

const metadataTitle =
  "Permafrost Best Starting Class: Backgrounds & Skills";

const metadataDescription =
  "Choose the best Permafrost starting class. Compare Hunter, Survivor, Smuggler, all 4 Specializations, 16 skills, and how to earn more Blueprint Points.";

const articleDescription =
  "Compare Hunter, Survivor, and Smuggler starting equipment, choose from four Specializations, learn how all 16 skills progress, and get more Blueprint Points for crafting and building.";

const heroImage =
  "/images/permafrost/permafrost-hunter-starting-gear.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-survivor-starting-gear.webp`,
  `${siteUrl}/images/permafrost/permafrost-engineer-specialization.webp`,
  `${siteUrl}/images/permafrost/permafrost-skills-and-blueprints.webp`,
];

const toc = [
  {
    id: "best-starting-class",
    label: "Best Starting Combination",
  },
  {
    id: "starting-backgrounds",
    label: "Hunter, Survivor & Smuggler",
  },
  {
    id: "specializations",
    label: "All 4 Specializations",
  },
  {
    id: "best-combinations",
    label: "Best Class Combinations",
  },
  {
    id: "skill-progression",
    label: "How to Level All 16 Skills",
  },
  {
    id: "blueprint-points",
    label: "How to Get Blueprint Points",
  },
  {
    id: "difficulty-settings",
    label: "Background & Difficulty",
  },
  {
    id: "after-character-creation",
    label: "After Character Creation",
  },
];

const relatedLinks = [
  {
    href: "/permafrost",
    label: "Permafrost Beginner Guide",
  },
  {
    href: "/permafrost/staying-warm",
    label: "Cold Resistance & Clothing",
  },
  {
    href: "/permafrost/mining-guide",
    label: "Mining Tools & Resources",
  },
  {
    href: "/permafrost/main-quests-walkthrough",
    label: "Main Quests Walkthrough",
  },
  {
    href: "/permafrost/achievements",
    label: "All 42 Achievements",
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

export default function PermafrostClassesSkillsPage() {
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
            name: "Classes & Skills",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: metadataTitle,
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PermafrostClassesSkillsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
