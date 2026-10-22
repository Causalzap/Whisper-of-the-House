
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WeWereHereTomorrowAchievementsContent from "@/data/we-were-here-tomorrow/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/we-were-here-tomorrow`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "We Were Here Tomorrow: All 37 Achievements Checklist";

const metadataDescription =
  "Track all 37 We Were Here Tomorrow achievements with a checklist, optional challenges, plushie locations, and both Rift Zero endings.";

const articleDescription =
  "Track all 37 achievements in We Were Here Tomorrow with an interactive checklist. Find story milestones, optional Hook Gun and Goop Gun challenges, Many Ways, Christmas Riot, unique plushie examples, later research objectives, and both Rift Zero ending achievements.";

const imageUrls = [
  `${siteUrl}/images/we-were-here-tomorrow/plushie-bunk-bed.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/plushie-office-cabinet.webp`,
  `${siteUrl}/images/we-were-here-tomorrow/plushie-xenobotany-table.webp`,
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
    images: imageUrls,
  },

  twitter: {
    card: "summary",
    title: metadataTitle,
    description: metadataDescription,
  },
};

const toc = [
  {
    id: "achievement-roadmap",
    label: "All 37 Achievements Checklist",
  },
  {
    id: "story-milestones",
    label: "Story Achievements",
  },
  {
    id: "early-optional",
    label: "Early Optional Achievements",
  },
  {
    id: "prototype-achievements",
    label: "Hook Gun & Goop Gun",
  },
  {
    id: "many-ways",
    label: "Many Ways",
  },
  {
    id: "christmas-riot",
    label: "Christmas Riot",
  },
  {
    id: "plushies",
    label: "Class 1 Hoarder & Plushies",
  },
  {
    id: "late-research",
    label: "Late Research Achievements",
  },
  {
    id: "rift-zero-endings",
    label: "Rift Zero Ending Achievements",
  },
  {
    id: "achievement-cleanup",
    label: "Achievement Cleanup",
  },
];

const relatedLinks = [
  {
    href: "/we-were-here-tomorrow",
    label: "We Were Here Tomorrow Guide & Progression",
  },
  {
    href: "/we-were-here-tomorrow/walkthrough",
    label: "We Were Here Tomorrow Walkthrough & Puzzle Solutions",
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
          name: "We Were Here Tomorrow",
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

      headline: metadataTitle,
      description: articleDescription,

      inLanguage: "en",

      datePublished: "2026-10-22",
      dateModified: "2026-10-22",

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },

      image: imageUrls,

      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },

      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },

      isPartOf: {
        "@type": "WebSite",
        name: "Whisper of the House",
        url: siteUrl,
      },

      about: [
        {
          "@type": "VideoGame",
          name: "We Were Here Tomorrow",
        },
        {
          "@type": "Thing",
          name: "Video Game Achievements",
        },
        {
          "@type": "Thing",
          name: "Achievement Checklist",
        },
      ],

      keywords: [
        "We Were Here Tomorrow achievements",
        "We Were Here Tomorrow 37 achievements",
        "We Were Here Tomorrow achievement checklist",
        "Many Ways achievement",
        "Christmas Riot achievement",
        "Class 1 Hoarder plushies",
        "Rift Zero endings",
      ].join(", "),

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

export default function WeWereHereTomorrowAchievementsPage() {
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
          title="We Were Here Tomorrow: All 37 Achievements & Checklist"
          description="Track all 37 achievements, find optional objectives and unique plushies, and complete the Hook Gun, Goop Gun, and Rift Zero challenges."
          gameTitle="We Were Here Tomorrow"
          gameHref="/we-were-here-tomorrow"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WeWereHereTomorrowAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
