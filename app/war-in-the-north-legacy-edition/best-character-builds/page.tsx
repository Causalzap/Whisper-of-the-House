import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionBestCharacterBuildsContent from "@/data/war-in-the-north-legacy-edition/best-character-builds.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/best-character-builds`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-fornost-ranger-cache.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-andriel-sanctuary.webp`,
];

const toc = [
  {
    id: "legacy-character-choice",
    label: "Choosing a character",
  },
  {
    id: "switching-characters",
    label: "When I switch characters",
  },
  {
    id: "character-comparison",
    label: "Eradan vs Farin vs Andriel",
  },
  {
    id: "eradan-build",
    label: "Eradan build",
  },
  {
    id: "andriel-build",
    label: "Andriel build",
  },
  {
    id: "farin-build",
    label: "Farin build",
  },
  {
    id: "gear-for-build",
    label: "Gear for each build",
  },
  {
    id: "when-i-respec",
    label: "When I respec",
  },
  {
    id: "best-character-solo",
    label: "Best for solo",
  },
  {
    id: "best-character-hard-difficulty",
    label: "Harder difficulties",
  },
  {
    id: "which-character-i-pick",
    label: "Which character I pick",
  },
  {
    id: "best-build-rule",
    label: "My build rule",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/weapons-mithril-upgrades",
    label: "Weapons & Mithril Guide",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
  {
    href: "/war-in-the-north-legacy-edition/secrets",
    label: "All Secrets Checklist",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Best Character & Builds",
  description:
    "Pick Eradan, Farin or Andriel with practical solo builds, skill priorities, stat rules, Evasion, Sanctuary, War-cry, and switching advice.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Best Character & Builds",
    description:
      "Compare Eradan, Farin, and Andriel for solo play, then build around Evasion, Sanctuary, War-cry, stats, survival, and the problem each hero solves.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Eradan finding a Ranger cache in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Best Character & Builds",
    description:
      "Compare Eradan, Farin, and Andriel with practical solo builds, skill priorities, stat rules, survival choices, and character switching.",
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
          name: "War in the North Legacy Edition Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Character & Builds",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Best Character & Builds",
      description:
        "A practical character and build guide comparing Eradan, Farin, and Andriel for solo play, Evasion, Sanctuary, War-cry, skill priorities, stat allocation, respec decisions, character switching, and harder difficulties.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      mainEntityOfPage: pageUrl,
      about: [
        {
          "@type": "VideoGame",
          name: "The Lord of the Rings: War in the North - Legacy Edition",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Eradan build",
        },
        {
          "@type": "Thing",
          name: "Andriel build",
        },
        {
          "@type": "Thing",
          name: "Farin build",
        },
        {
          "@type": "Thing",
          name: "War in the North best character",
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
          title="War in the North Legacy Edition Best Character & Builds"
          description="Choose between Eradan, Farin, and Andriel based on the problem you actually need to solve, then build around the skills and stats that support that role."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionBestCharacterBuildsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}