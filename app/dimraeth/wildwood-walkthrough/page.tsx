import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethWildwoodWalkthroughContent from "@/data/dimraeth/wildwood-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/wildwood-walkthrough`;

const metadataTitle =
  "Dimraeth Wildwood Walkthrough: Northern Crossing & Forest King";

const metadataDescription =
  "Follow the Dimraeth Wildwood route from Northern Crossing and Goblin Hideout through the Throne Path, Forest Path, and Forest King without wasting time.";

const articleDescription =
  "A practical Dimraeth Wildwood progression walkthrough covering the Lost Child and Northern Crossing route, the Goblin Hideout and Goblin King transition, Opening the Throne Path requirements, Crown of Thorns, Forest Path readiness, and how to reach the Forest King without confusing optional Wildwood activity with required story progression.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-forest-path-start.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-lost-child-forest-entrance.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-opening-throne-path-requirements.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-confront-forest-king.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "wildwood-route",
    label: "Wildwood route",
  },
  {
    id: "lost-child",
    label: "Lost Child & Northern Crossing",
  },
  {
    id: "wildwood-quest-log",
    label: "Required vs optional quests",
  },
  {
    id: "goblin-hideout",
    label: "Goblin Hideout",
  },
  {
    id: "goblin-king",
    label: "After the Goblin King",
  },
  {
    id: "opening-throne-path",
    label: "Open the Throne Path",
  },
  {
    id: "crown-of-thorns",
    label: "Crown of Thorns",
  },
  {
    id: "before-forest-path",
    label: "Before the Forest Path",
  },
  {
    id: "forest-path",
    label: "Forest Path",
  },
  {
    id: "forest-king",
    label: "Reach the Forest King",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/goblin-hideout",
    label: "Goblin Hideout Guide",
  },
  {
    href: "/dimraeth/goblin-king",
    label: "Goblin King Guide",
  },
  {
    href: "/dimraeth/forest-king",
    label: "Forest King Guide",
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
        alt: "Entering the Forest Path during Dimraeth Wildwood progression",
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
          name: "Wildwood Walkthrough",
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
        "Dimraeth Wildwood Walkthrough: Northern Crossing to Forest King",
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
          name: "Wildwood",
        },
        {
          "@type": "Thing",
          name: "Northern Crossing",
        },
        {
          "@type": "Thing",
          name: "Goblin Hideout",
        },
        {
          "@type": "Thing",
          name: "Goblin King",
        },
        {
          "@type": "Thing",
          name: "Opening the Throne Path",
        },
        {
          "@type": "Thing",
          name: "Crown of Thorns",
        },
        {
          "@type": "Thing",
          name: "Forest Path",
        },
        {
          "@type": "Thing",
          name: "Forest King",
        },
        {
          "@type": "Thing",
          name: "Aelwynor the Wildroot Father",
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
          title="Dimraeth Wildwood Walkthrough: Northern Crossing to Forest King"
          description="Get through Wildwood without clearing everything on the map: find the Northern Crossing, follow the goblin route, open the Throne Path, and know when the Forest King route is finally ready."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethWildwoodWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}