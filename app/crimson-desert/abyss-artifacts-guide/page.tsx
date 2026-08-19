import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AbyssArtifactsGuideContent from "@/data/crimson-desert/abyss-artifacts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crimson-desert`;
const pageUrl = `${hubUrl}/abyss-artifacts-guide`;

const metadataTitle =
  "Crimson Desert Abyss Artifacts Guide: What to Spend Them On";

const metadataDescription =
  "Learn what to spend Abyss Artifacts on in Crimson Desert, including Health, Stamina, Spirit, skills, Research gates, and when saving is better.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-save-21-abyss-artifacts.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-stamina-research-knowledge-gate.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-spirit-lowest-upgrade.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-health-11-abyss-artifact-cost.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-abyss-artifacts-check-storage.webp`,
];

const toc = [
  {
    id: "what-i-spend-them-on",
    label: "What I Spend Them On",
  },
  {
    id: "abyss-artifact-uses",
    label: "Abyss Artifact Uses",
  },
  {
    id: "stamina-first",
    label: "When I Upgrade Stamina",
  },
  {
    id: "when-i-switch-to-spirit",
    label: "When I Switch to Spirit",
  },
  {
    id: "health",
    label: "When I Upgrade Health",
  },
  {
    id: "skills-vs-stats",
    label: "Skills vs Base Stats",
  },
  {
    id: "when-i-save",
    label: "When I Save Artifacts",
  },
  {
    id: "check-storage",
    label: "Check Camp Storage",
  },
  {
    id: "sealed-abyss-artifact",
    label: "Sealed vs Abyss Artifact",
  },
  {
    id: "when-i-spend",
    label: "My Spending Rule",
  },
];

const relatedLinks = [
  {
    href: "/crimson-desert",
    label: "Crimson Desert Guide Hub",
  },
  {
    href: "/crimson-desert/side-quests-guide",
    label: "Side Quests Guide",
  },
  {
    href: "/crimson-desert/hunting-guide",
    label: "Hunting Guide",
  },
  {
    href: "/crimson-desert/farming-ranching-guide",
    label: "Farming & Ranching Guide",
  },
  {
    href: "/crimson-desert/trading-guide",
    label: "Trading Guide",
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
    title: "Crimson Desert Abyss Artifacts Guide: What to Spend Them On",
    description:
      "See how I decide between Health, Stamina, Spirit and skill upgrades, handle Research gates, and know when to save Abyss Artifacts instead.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Holding 21 Abyss Artifacts while deciding whether to upgrade a skill in Crimson Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimson Desert Abyss Artifacts Guide",
    description:
      "Health vs Stamina vs Spirit, skill upgrades, Research blockers, storage checks, and when to save Abyss Artifacts.",
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
          name: "Abyss Artifacts Guide",
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
        "Crimson Desert Abyss Artifacts Guide: Health, Stamina, Spirit and When to Save",
      description:
        "A practical Crimson Desert Abyss Artifacts guide covering what to spend Abyss Artifacts on, Health versus Stamina versus Spirit, skill upgrade decisions, Stamina Research and material gates, Spirit progression, Health upgrade costs, checking camp storage before searching for more, the difference between Abyss Artifacts and Sealed Abyss Artifact objectives, and when keeping a large Artifact reserve is better than spending it immediately.",
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
          name: "Crimson Desert Abyss Artifacts",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Health",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Stamina",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Spirit",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert skill upgrades",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Research",
        },
        {
          "@type": "Thing",
          name: "Sealed Abyss Artifact",
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
          title="What I Spend Abyss Artifacts On in Crimson Desert"
          description="I spend them when Health, Stamina, Spirit, or a skill is solving a real problem, and I save them when Research, materials, or my current build make another upgrade unnecessary."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AbyssArtifactsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}