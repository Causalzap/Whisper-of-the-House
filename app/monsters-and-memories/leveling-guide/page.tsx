import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesLevelingGuideContent from "@/data/monsters-and-memories/leveling-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/monsters-and-memories`;
const pageUrl = `${hubUrl}/leveling-guide`;

const metadataTitle =
  "Monsters & Memories Leveling Guide: 1–25 Zones & Camps";

const metadataDescription =
  "Level from 1–25 in Monsters & Memories with early camps, Wyrmsbane, Blacktide Bay, River Pirates, group XP checks, Rested XP, and solo advice.";

const articleDescription =
  "Level from 1 to 25 in Monsters & Memories by choosing efficient camps, using Rested XP, moving through Wyrmsbane, Blacktide Bay and River Pirates, checking party XP, and knowing when to solo, group, or change zones.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/level-1-dryads-faelindral.webp`,
  `${siteUrl}/images/monsters-and-memories/necromancer-pet-tanking.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "how-to-level",
    label: "How to Level",
  },
  {
    id: "levels-1-4",
    label: "Levels 1–4",
  },
  {
    id: "levels-4-10",
    label: "Levels 4–10",
  },
  {
    id: "levels-10-15",
    label: "Levels 10–15",
  },
  {
    id: "levels-15-20",
    label: "Levels 15–20",
  },
  {
    id: "levels-20-25",
    label: "Levels 20–25",
  },
  {
    id: "solo-or-group",
    label: "Solo or Group",
  },
  {
    id: "when-to-leave",
    label: "When to Leave a Camp",
  },
];

const relatedLinks = [
  {
    href: "/monsters-and-memories/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/monsters-and-memories/best-solo-classes",
    label: "Best Solo Classes",
  },
  {
    href: "/monsters-and-memories/tradeskills",
    label: "Tradeskills Guide",
  },
  {
    href: "/monsters-and-memories/corpse-recovery",
    label: "Corpse Recovery",
  },
  {
    href: "/monsters-and-memories",
    label: "Monsters & Memories Guide",
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
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 900,
        alt: "Monsters & Memories level 1 characters fighting Dryads near Faelindral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [ogImage],
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
          name: "Monsters & Memories",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Leveling Guide 1–25",
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
        "Monsters & Memories Leveling Guide: 1–25 Zones & Camps",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-06",
      dateModified: "2026-10-06",
      articleSection: "Monsters & Memories Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Monsters & Memories",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Leveling",
        },
        {
          "@type": "Thing",
          name: "Levels 1–25",
        },
        {
          "@type": "Thing",
          name: "Wyrmsbane",
        },
        {
          "@type": "Thing",
          name: "Blacktide Bay",
        },
        {
          "@type": "Thing",
          name: "River Pirates",
        },
        {
          "@type": "Thing",
          name: "Glass Flats",
        },
        {
          "@type": "Thing",
          name: "Rested XP",
        },
        {
          "@type": "Thing",
          name: "Party Experience",
        },
        {
          "@type": "Thing",
          name: "Solo Leveling",
        },
      ],
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
      publisher: {
        "@id": `${siteUrl}#organization`,
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
          title="Monsters & Memories Leveling Guide: 1–25 Zones & Camps"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesLevelingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}