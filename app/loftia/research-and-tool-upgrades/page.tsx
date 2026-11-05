import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LoftiaResearchAndToolUpgradesContent from "@/data/loftia/research-and-tool-upgrades.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/loftia`;
const pageUrl = `${hubUrl}/research-and-tool-upgrades`;

const metadataTitle =
  "Loftia Research Guide: Hammer & Pruners Lv.2 Upgrades";

const metadataDescription =
  "Unlock Loftia Research Stations and Central Lake bundles, upgrade the Project Station, and craft Hammer Lv.2 and Pruners Lv.2 with the right materials.";

const articleTitle =
  "How Do You Unlock Research and Upgrade Tools in Loftia?";

const articleDescription =
  "Unlock research with Kassim, complete Anadromous Odyssey, Heavy-Weight Titans, and Murky Waters, then upgrade your crafting stations to make Hammer Lv.2 and Pruners Lv.2.";

const imageUrls = [
  `${siteUrl}/images/loftia/loftia-central-lake-anadromous-odyssey.webp`,
  `${siteUrl}/images/loftia/loftia-project-station-level-two-upgrade.webp`,
  `${siteUrl}/images/loftia/loftia-heavy-weight-titans-hammer-research.webp`,
  `${siteUrl}/images/loftia/loftia-murky-waters-pruners-research.webp`,
  `${siteUrl}/images/loftia/loftia-pruners-level-two-crafting.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-research",
    label: "Unlock Research Stations",
  },
  {
    id: "central-lake",
    label: "Central Lake Bundles",
  },
  {
    id: "anadromous-odyssey",
    label: "Project Station Lv.2",
  },
  {
    id: "hammer-level-two",
    label: "Hammer Lv.2",
  },
  {
    id: "hammer-research",
    label: "Heavy-Weight Titans",
  },
  {
    id: "pruners-level-two",
    label: "Pruners Lv.2",
  },
  {
    id: "murky-waters",
    label: "Murky Waters",
  },
  {
    id: "refining-station-two",
    label: "Refining Station Lv.2",
  },
  {
    id: "other-research",
    label: "Other Research Rewards",
  },
  {
    id: "which-upgrade-first",
    label: "Which Tool First?",
  },
  {
    id: "locked-upgrades",
    label: "Locked Upgrade Fixes",
  },
  {
    id: "later-upgrades",
    label: "Later Tool Upgrades",
  },
];

const relatedLinks = [
  {
    href: "/loftia",
    label: "Loftia Guide",
  },
  {
    href: "/loftia/beginner-guide",
    label: "Beginner: First Quests & Glider",
  },
  {
    href: "/loftia/money-making",
    label: "Make Dew: Crops & Cooking",
  },
  {
    href: "/loftia/pets",
    label: "Pets: First Dog Rescue",
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
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
    images: [
      {
        url: heroImage,
        alt: "Anadromous Odyssey fish bundle at Loftia Central Lake Research Station",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Loftia",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Research & Tool Upgrades",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-05",
      dateModified: "2026-11-05",
      author: {
        "@id": `${siteUrl}/#organization`,
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
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function LoftiaResearchAndToolUpgradesPage() {
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
          gameTitle="Loftia"
          gameHref="/loftia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LoftiaResearchAndToolUpgradesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
