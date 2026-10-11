
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheLastCaretakerContent from "@/data/the-last-caretaker/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker`;

const metadataTitle =
  "The Last Caretaker Guide: Walkthrough & North Bastion";

const metadataDescription =
  "Find what to do next in The Last Caretaker, from Lazarus and Exodus to Project Crossing, North Bastion, Project Eden, MOSES, human growth, and power fixes.";

const articleTitle =
  "The Last Caretaker Guide: What Should You Do Next?";

const articleDescription =
  "Start with Beacon 49, Lazarus, Human Seeds and Exodus, or pick up your current objective in Project Crossing, North Bastion, Project Eden, Theta 9, MOSES or Transposium. Find the right route when power, fuel or Human growth stops your progress.";

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-exodus-time-to-let-go-soon.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-transfer-gate-north-bastion.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-new-horizons-pishon-marker.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-moses-field-reserve-program-locked.webp`,
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        alt: "The Last Caretaker Time to Let Go Soon objective leading toward Exodus Station.",
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
  {
    id: "where-to-go-next",
    label: "What to Do Next",
  },
  {
    id: "core-progression",
    label: "Beacon 49 to Exodus",
  },
  {
    id: "update-6-project-crossing",
    label: "Update 6: North Bastion",
  },
  {
    id: "returning-new-horizons",
    label: "New Horizons Routes",
  },
  {
    id: "update-55",
    label: "MOSES, Aaron & Transposium",
  },
  {
    id: "system-blockers",
    label: "Power, Fuel & Human Growth",
  },
  {
    id: "unfinished-searches",
    label: "Unresolved Objectives",
  },
  {
    id: "when-to-turn-back",
    label: "When to Return to the Boat",
  },
];

const relatedLinks = [
  {
    href: "/the-last-caretaker/walkthrough",
    label: "Walkthrough & North Bastion",
  },
  {
    href: "/the-last-caretaker/power-fuel-wall-outlets",
    label: "Power, Fuel & Wall Outlets",
  },
  {
    href: "/the-last-caretaker/human-growth-professions-guide",
    label: "Human Growth & Professions",
  },
  {
    href: "/the-last-caretaker/exodus-launch-guide",
    label: "Exodus Launch",
  },
  {
    href: "/the-last-caretaker/new-horizons-guide",
    label: "New Horizons",
  },
  {
    href: "/the-last-caretaker/project-eden-guide",
    label: "Project Eden",
  },
  {
    href: "/the-last-caretaker/research-outpost-theta-9-guide",
    label: "Research Outpost Theta 9",
  },
  {
    href: "/the-last-caretaker/moses-warehouse-alpha-guide",
    label: "MOSES Warehouse Alpha",
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
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Last Caretaker Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@id": pageUrl,
      },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-10-11",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Walkthrough",
        },
        {
          "@type": "Thing",
          name: "Beacon 49",
        },
        {
          "@type": "Thing",
          name: "Lazarus Complex",
        },
        {
          "@type": "Thing",
          name: "Human Growth",
        },
        {
          "@type": "Thing",
          name: "Exodus Station",
        },
        {
          "@type": "Thing",
          name: "Project Crossing",
        },
        {
          "@type": "Thing",
          name: "Transfer Gate",
        },
        {
          "@type": "Thing",
          name: "North Bastion",
        },
        {
          "@type": "Thing",
          name: "Project Eden",
        },
        {
          "@type": "Thing",
          name: "Pishon",
        },
        {
          "@type": "Thing",
          name: "Oil Whale",
        },
        {
          "@type": "Thing",
          name: "Research Outpost Theta 9",
        },
        {
          "@type": "Thing",
          name: "MOSES Field Reserve Program",
        },
        {
          "@type": "Thing",
          name: "Central Warehouse Alpha",
        },
        {
          "@type": "Thing",
          name: "Memory for Aaron",
        },
        {
          "@type": "Thing",
          name: "Transposium Room 998",
        },
      ],
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: `${siteUrl}/`,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: `${siteUrl}/`,
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheLastCaretakerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
