
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DreadmoorContent from "@/data/dreadmoor/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dreadmoor`;

const metadataTitle =
  "DREADMOOR: What Should You Do Next in Early Access?";

const metadataDescription =
  "Stuck in DREADMOOR Early Access? Find your next step at Betsy and Sons, fix boat problems, get past The Throat, and discover what to do after the story.";

const articleDescription =
  "Find what to do next in DREADMOOR, from the Trading Post and boat upgrades to Drying Fort, the Observatory, the Early Access story ending, and Free Roam.";

const lastUpdated = "2026-11-10";

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
          name: "DREADMOOR",
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
      headline: metadataTitle,
      description: articleDescription,
      inLanguage: "en",
      dateModified: lastUpdated,
      about: [
        {
          "@type": "VideoGame",
          name: "DREADMOOR",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Early Access progression",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR boat upgrades",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR The Throat",
        },
        {
          "@type": "Thing",
          name: "DREADMOOR Free Roam",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
    },
  ],
};

const toc = [
  {
    id: "where-to-go-next",
    label: "What to do next",
  },
  {
    id: "trading-post",
    label: "Stuck at Betsy and Sons",
  },
  {
    id: "fishing-stuck",
    label: "Trouble catching fish",
  },
  {
    id: "dry-dock-locked",
    label: "Unlock the Dry Dock",
  },
  {
    id: "boat-repaired",
    label: "Boat repaired but still stuck",
  },
  {
    id: "carburetor",
    label: "Get the Carburetor",
  },
  {
    id: "beaver-blocking",
    label: "Get past the Beaver",
  },
  {
    id: "throat-gate",
    label: "Open The Throat gate",
  },
  {
    id: "after-throat",
    label: "What happens after The Throat",
  },
  {
    id: "drying-fort",
    label: "Drying Fort Control Room",
  },
  {
    id: "observatory",
    label: "Find Junior's Essence recipe",
  },
  {
    id: "essence-stuck",
    label: "Finish the Essence quest",
  },
  {
    id: "what-to-do-first",
    label: "Fishing, repairs, or exploration",
  },
  {
    id: "boat-upgrades",
    label: "Which boat upgrades to get",
  },
  {
    id: "storage-or-speed",
    label: "Storage or boat speed",
  },
  {
    id: "boat-module-storage",
    label: "Find crafted boat modules",
  },
  {
    id: "fishing-gear",
    label: "When to upgrade fishing gear",
  },
  {
    id: "demo-ending",
    label: "Early Access story ending",
  },
  {
    id: "after-story",
    label: "What to do after the story",
  },
  {
    id: "old-saves",
    label: "Demo and Playtest saves",
  },
];

const relatedLinks = [
  {
    href: "/dreadmoor/walkthrough",
    label: "DREADMOOR Walkthrough",
  },
  {
    href: "/dreadmoor/fishing-guide",
    label: "DREADMOOR Fishing Guide",
  },
  {
    href: "/dreadmoor/achievements",
    label: "DREADMOOR Achievements Checklist",
  },
];

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
          title="DREADMOOR: What Should You Do Next in Early Access?"
          description={articleDescription}
          gameTitle="DREADMOOR"
          gameHref="/dreadmoor"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DreadmoorContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
