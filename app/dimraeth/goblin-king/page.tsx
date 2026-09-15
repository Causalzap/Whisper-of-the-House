import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethGoblinKingContent from "@/data/dimraeth/goblin-king.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/goblin-king`;

const metadataTitle =
  "Dimraeth Goblin King Guide: Hoard King's Fall & Strategy";

const metadataDescription =
  "Unlock and beat the Goblin King in Dimraeth, finish Hoard King's Fall, manage his attack windows and adds, then continue the Wildwood story.";

const articleDescription =
  "A practical Dimraeth Goblin King guide covering Hoard King's Fall and Tamsin's explosive, boss preparation, parry and dodge decisions, safe damage windows, additional goblin pressure, healing diagnosis, the return to Corin after the fight, and how the encounter later fits into Deed and Bounty progression.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-goblin-king-collect-explosives.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-king-parry-window.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-goblin-king-defeated.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-goblin-king",
    label: "Unlock the Goblin King",
  },
  {
    id: "before-fight",
    label: "Before the fight",
  },
  {
    id: "fight",
    label: "Attack & parry timing",
  },
  {
    id: "damage-window",
    label: "Damage windows",
  },
  {
    id: "extra-goblins",
    label: "Handle extra goblins",
  },
  {
    id: "healing",
    label: "Diagnose failed attempts",
  },
  {
    id: "after-goblin-king",
    label: "What to do after",
  },
  {
    id: "repeat-fight",
    label: "Goblin King rematch",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/goblin-hideout",
    label: "Goblin Hideout Route",
  },
  {
    href: "/dimraeth/wildwood-walkthrough",
    label: "Dimraeth Wildwood Walkthrough",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/forest-king",
    label: "Dimraeth Forest King Guide",
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
        alt: "Hoard King's Fall objective before the Goblin King fight in Dimraeth",
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
          name: "Goblin King Guide",
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
        "Dimraeth Goblin King Guide: Hoard King's Fall and Boss Strategy",
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
          name: "Goblin King",
        },
        {
          "@type": "Thing",
          name: "Hoard King's Fall",
        },
        {
          "@type": "Thing",
          name: "Tamsin's explosive",
        },
        {
          "@type": "Thing",
          name: "Wildwood",
        },
        {
          "@type": "Thing",
          name: "Corin",
        },
        {
          "@type": "Thing",
          name: "Deeds",
        },
        {
          "@type": "Thing",
          name: "Bounties",
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
          title="Dimraeth Goblin King: How to Unlock & Beat the Boss"
          description="Reach the Goblin King through Hoard King's Fall, learn when to attack instead of trade, control the extra pressure in the arena, and know exactly where the story goes after the kill."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethGoblinKingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}