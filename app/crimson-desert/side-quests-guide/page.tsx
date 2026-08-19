import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SideQuestsGuideContent from "@/data/crimson-desert/side-quests-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crimson-desert`;
const pageUrl = `${hubUrl}/side-quests-guide`;

const metadataTitle =
  "Crimson Desert Side Quests Guide: Missing & Stuck Quests";

const metadataDescription =
  "Fix missing or stuck Crimson Desert quests, Halted Research, locked Oongka, Research Institute issues, and A Special Blueprint prerequisites.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-halted-research-22-hours.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-resume-halted-research-red-seaweed.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-ongka-locked-quest.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-special-blueprint-house-roberts-prerequisite.webp`,
];

const toc = [
  {
    id: "my-side-quest-rule",
    label: "Check Quest State First",
  },
  {
    id: "chapter-12-cleanup",
    label: "Chapter 12 Cleanup",
  },
  {
    id: "research-stuck",
    label: "Research Stuck",
  },
  {
    id: "halted-research",
    label: "Halted Research",
  },
  {
    id: "research-institute",
    label: "Research Institute",
  },
  {
    id: "ongka-locked",
    label: "Oongka Locked",
  },
  {
    id: "special-blueprint",
    label: "A Special Blueprint",
  },
  {
    id: "missing-quest-prerequisites",
    label: "Missing Quest Prerequisites",
  },
  {
    id: "new-side-quests",
    label: "New Side Quests",
  },
  {
    id: "when-to-sleep",
    label: "When to Sleep",
  },
  {
    id: "when-to-progress-story",
    label: "When to Progress Story",
  },
  {
    id: "my-side-quest-check",
    label: "My Troubleshooting Order",
  },
];

const relatedLinks = [
  {
    href: "/crimson-desert",
    label: "Crimson Desert Guide Hub",
  },
  {
    href: "/crimson-desert/trading-guide",
    label: "Trading Guide",
  },
  {
    href: "/crimson-desert/farming-ranching-guide",
    label: "Farming & Ranching Guide",
  },
  {
    href: "/crimson-desert/hunting-guide",
    label: "Hunting Guide",
  },
  {
    href: "/crimson-desert/abyss-artifacts-guide",
    label: "Abyss Artifacts Guide",
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
    title: "Crimson Desert Side Quests Guide: Missing & Stuck Quests",
    description:
      "See how I troubleshoot Halted Research, missing side quests, locked Oongka, unavailable Research Institutes, and prerequisite chains.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "A 22-hour Research project stuck in Crimson Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimson Desert Side Quests Guide",
    description:
      "Fix Halted Research, missing quests, locked Oongka, Research Institute problems, and A Special Blueprint prerequisites.",
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
          name: "Crimson Desert Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Side Quests Guide",
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
        "Crimson Desert Side Quests Guide: Missing Quests, Halted Research and Locked Characters",
      description:
        "A practical Crimson Desert side quest troubleshooting guide covering missing quests, Halted Research, a 22-hour Research project remaining unfinished for more than 40 in-game hours, Red Seaweed Research interruptions, Research Institute availability, Oongka being locked by an active mission, A Special Blueprint prerequisites, House Roberts 9/10 progress, and when to wait, progress the story, or work backward through a quest chain.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Crimson Desert Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Crimson Desert side quests",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert missing quests",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert stuck quests",
        },
        {
          "@type": "Thing",
          name: "Halted Research",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Research",
        },
        {
          "@type": "Thing",
          name: "Research Institute",
        },
        {
          "@type": "Thing",
          name: "Oongka",
        },
        {
          "@type": "Thing",
          name: "The Void",
        },
        {
          "@type": "Thing",
          name: "A Special Blueprint",
        },
        {
          "@type": "Thing",
          name: "House Roberts",
        },
        {
          "@type": "Thing",
          name: "Invention of the Workshop",
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
          title="How I Fix Missing and Stuck Side Quests in Crimson Desert"
          description="When a quest disappears, Research stops, or Oongka is locked, I check the quest state and prerequisites before wasting time searching another location."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SideQuestsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}