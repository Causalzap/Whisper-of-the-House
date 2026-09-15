import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethWalkthroughContent from "@/data/dimraeth/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Dimraeth Walkthrough: Main Story Route & Where to Go Next";

const metadataDescription =
  "Follow Dimraeth's Early Access story from Earlwood through Wildwood, Goblin King, Forest Path, and Forest King with clear next-step decisions.";

const articleDescription =
  "A practical Dimraeth Early Access walkthrough focused on the main story route and where to go next, from Earlwood and Northern Crossing through the Goblin Hideout, Hoard King's Fall, Goblin King, Opening the Throne Path, Crown of Thorns, Forest Path, and Aelwynor the Wildroot Father, with guidance on when to stay on the story, return to the Sanctum, or move into Deeds and Bounties.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-forest-path-start.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-lost-child-forest-entrance.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-king-defeated.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-story-end.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "main-progression",
    label: "Main story route",
  },
  {
    id: "when-to-leave-route",
    label: "When to leave the route",
  },
  {
    id: "earlwood-to-wildwood",
    label: "Earlwood to Wildwood",
  },
  {
    id: "goblin-story",
    label: "Goblin storyline",
  },
  {
    id: "goblin-king",
    label: "Goblin King",
  },
  {
    id: "blocked-forest",
    label: "Blocked forest route",
  },
  {
    id: "crown-of-thorns",
    label: "Crown of Thorns",
  },
  {
    id: "forest-king",
    label: "Forest King",
  },
  {
    id: "after-story",
    label: "What to do after the story",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/wildwood-walkthrough",
    label: "Dimraeth Wildwood Walkthrough",
  },
  {
    href: "/dimraeth/goblin-hideout",
    label: "Goblin Hideout Route",
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
    href: "/dimraeth/deeds-bounties",
    label: "Deeds & Bounties Guide",
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
        alt: "Forest Path progression during the Dimraeth Early Access main story",
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
          name: "Walkthrough",
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
        "Dimraeth Walkthrough: Main Story Route and Where to Go Next",
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
          name: "Earlwood",
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
          name: "Hoard King's Fall",
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
          title="Dimraeth Walkthrough: Main Story Route & Where to Go Next"
          description="Follow the current story from Earlwood into Wildwood, recognize which objectives actually move the campaign forward, and know when the main route ends after the Forest King."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}