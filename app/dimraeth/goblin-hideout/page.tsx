import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethGoblinHideoutContent from "@/data/dimraeth/goblin-hideout.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/goblin-hideout`;

const metadataTitle =
  "Dimraeth Goblin Hideout Location: Wildwood Center Route";

const metadataDescription =
  "Find the Goblin Hideout in Dimraeth from Wildwood Center, avoid the Wildwood Caverns wrong turn, use the Farmstead, and reach Clear the Raid.";

const articleDescription =
  "A route-focused Dimraeth guide to Find the Goblin Hideout in Wildwood, using Wildwood Center and the Farmstead as navigation landmarks, avoiding the misleading Wildwood Caverns branch, and confirming the correct location when the objective changes to Clear the Raid.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-find-goblin-hideout-quest.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-hideout-wildwood-center.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-wildwood-caverns-wrong-turn.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-hideout-clear-the-raid.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "find-goblin-hideout",
    label: "Find the Goblin Hideout",
  },
  {
    id: "wildwood-center",
    label: "Start at Wildwood Center",
  },
  {
    id: "wildwood-caverns",
    label: "Avoid Wildwood Caverns",
  },
  {
    id: "farmstead-general",
    label: "Use the Farmstead",
  },
  {
    id: "route-from-farmstead",
    label: "Route north from Farmstead",
  },
  {
    id: "clear-the-raid",
    label: "Clear the Raid confirmation",
  },
  {
    id: "raid-trouble",
    label: "If the raid is the problem",
  },
  {
    id: "after-hideout",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/wildwood-walkthrough",
    label: "Dimraeth Wildwood Walkthrough",
  },
  {
    href: "/dimraeth/goblin-king",
    label: "Dimraeth Goblin King Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
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
        url: heroImage,
        width: 600,
        height: 300,
        alt: "Find the Goblin Hideout objective in Wildwood in Dimraeth",
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
          name: "Dimraeth",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Goblin Hideout",
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
        "Dimraeth Goblin Hideout Location: Wildwood Center Route",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Goblin Hideout",
        },
        {
          "@type": "Thing",
          name: "Wildwood",
        },
        {
          "@type": "Thing",
          name: "Wildwood Center",
        },
        {
          "@type": "Thing",
          name: "Wildwood Caverns",
        },
        {
          "@type": "Thing",
          name: "Farmstead",
        },
        {
          "@type": "Thing",
          name: "Clear the Raid",
        },
      ],
      author: {
        "@id": `${siteUrl}#organization`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
          title="Dimraeth Goblin Hideout: How to Find the Right Route"
          description="Use Wildwood Center as your anchor, avoid the convincing Wildwood Caverns wrong turn, then use the Farmstead route to reach the goblins and trigger Clear the Raid."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethGoblinHideoutContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}