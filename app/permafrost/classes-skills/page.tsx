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
  "Compare Hunter, Survivor, Smuggler, and all 4 Specializations in Permafrost. Find starting gear, skill bonuses, the best combinations, and blueprint tips.";

const articleDescription =
  "Choose your Permafrost Background and Specialization with starting equipment, Engineer, Tracker, Scavenger, and Marksman bonuses, recommended combinations, and skill progression.";

const heroImage =
  "/images/permafrost/permafrost-hunter-starting-gear.webp";

const imageUrls = [
  `${siteUrl}${heroImage}`,
  `${siteUrl}/images/permafrost/permafrost-survivor-starting-gear.webp`,
  `${siteUrl}/images/permafrost/permafrost-engineer-specialization.webp`,
  `${siteUrl}/images/permafrost/permafrost-scavenger-specialization.webp`,
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
    label: "How Skills Level Up",
  },
  {
    id: "blueprint-points",
    label: "Skills vs. Blueprint Points",
  },
  {
    id: "difficulty-settings",
    label: "Class & World Difficulty",
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
        headline:
          "Permafrost Best Starting Class: Backgrounds & Skills",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-09",
        dateModified: "2026-10-09",
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
          title="Permafrost Best Starting Class: Backgrounds & Skills"
          description={articleDescription}
          gameTitle="Permafrost"
          gameHref="/permafrost"
          breadcrumbBaseHref="/permafrost"
          breadcrumbBaseLabel="Permafrost"
          updatedAt="October 9, 2026"
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