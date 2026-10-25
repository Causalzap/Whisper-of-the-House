
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DontStarveTogetherContent from "@/data/dont-starve-together/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dont-starve-together`;

const metadataTitle =
  "Don't Starve Together Shadow Progression & Final Boss";

const metadataDescription =
  "Follow Don't Starve Together's Shadow progression: Ancient Gateway, 5 Dreadstone, Shadow Rifts, Sanctum, Keystone, and the final bosses.";

const articleDescription =
  "Find your next step in Don't Starve Together's Shadow storyline, from Ancient Fuelweaver and the first Dreadstone offering to Shadow Rifts, the Sanctum, Charlie's ritual, and the final confrontation.";

const toc = [
  {
    id: "shadow-progression",
    label: "Shadow Progression",
  },
  {
    id: "shadow-rift-decision",
    label: "When to Activate Shadow Rifts",
  },
  {
    id: "dreadstone",
    label: "How to Get 5 Dreadstone",
  },
  {
    id: "beckoning-hand-missing",
    label: "Missing Beckoning Hand",
  },
  {
    id: "shadow-vs-lunar",
    label: "Shadow vs Lunar Progression",
  },
  {
    id: "when-to-enter-sanctum",
    label: "When to Enter Sanctum",
  },
  {
    id: "after-finale",
    label: "After the Shadow Finale",
  },
];

const relatedLinks = [
  {
    href: "/dont-starve-together/sanctum-walkthrough",
    label: "Sanctum Walkthrough & Keystone",
  },
  {
    href: "/dont-starve-together/cursed-confrontation-part-2-walkthrough",
    label: "Cursed Confrontation Part 2 Walkthrough",
  },
  {
    href: "/dont-starve-together/shrouded-queen",
    label: "Shrouded Queen & Umbral Abomination",
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
    publishedTime: "2026-10-25",
    modifiedTime: "2026-10-25",
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
          name: "Don't Starve Together",
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
      url: pageUrl,
      inLanguage: "en",
      datePublished: "2026-10-25",
      dateModified: "2026-10-25",
      articleSection: "Don't Starve Together Guides",
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
      about: [
        {
          "@type": "VideoGame",
          name: "Don't Starve Together",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Don't Starve Together Shadow progression",
        },
        {
          "@type": "Thing",
          name: "Shadow Rifts",
        },
        {
          "@type": "Thing",
          name: "Cursed Confrontation Part 2",
        },
        {
          "@type": "Thing",
          name: "Ancient Gateway",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title="Don't Starve Together Shadow Progression: What to Do Next"
          description={articleDescription}
          gameTitle="Don't Starve Together"
          gameHref="/dont-starve-together"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DontStarveTogetherContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
