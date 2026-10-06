import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesGuideContent from "@/data/monsters-and-memories/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/monsters-and-memories`;

const metadataTitle =
  "Monsters & Memories Guide: Classes, Leveling & What to Do";

const metadataDescription =
  "Monsters & Memories guide for starting your character, choosing a solo class, leveling, recovering corpses, managing tradeskills, and solving early quests.";

const articleDescription =
  "Start and progress through Monsters & Memories with practical help for your first character, solo class choice, early leveling, inventory and tradeskills, corpse recovery, and the Faelindral Ranger quest.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/starter-note-class-guild.webp`,
  `${siteUrl}/images/monsters-and-memories/necromancer-pet-tanking.webp`,
  `${siteUrl}/images/monsters-and-memories/ranger-quest-ruined-archway.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "getting-started",
    label: "Getting Started",
  },
  {
    id: "choosing-a-class",
    label: "Choosing a Class",
  },
  {
    id: "leveling",
    label: "Leveling",
  },
  {
    id: "inventory-and-crafting",
    label: "Inventory & Crafting",
  },
  {
    id: "corpse-recovery",
    label: "Corpse Recovery",
  },
  {
    id: "faelindral-ranger",
    label: "Faelindral Ranger Quest",
  },
  {
    id: "what-to-do-next",
    label: "What to Do Next",
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
    href: "/monsters-and-memories/leveling-guide",
    label: "Leveling Guide 1–25",
  },
  {
    href: "/monsters-and-memories/corpse-recovery",
    label: "Corpse Recovery",
  },
  {
    href: "/monsters-and-memories/tradeskills",
    label: "Tradeskills Guide",
  },
  {
    href: "/monsters-and-memories/faelindral-ranger-quest",
    label: "Faelindral Ranger Quest",
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
        alt: "Monsters & Memories Starter Note with directions for a new character",
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
        "Monsters & Memories Guide: Classes, Leveling & What to Do",
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
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Character Progression",
        },
        {
          "@type": "Thing",
          name: "Classes",
        },
        {
          "@type": "Thing",
          name: "Solo Play",
        },
        {
          "@type": "Thing",
          name: "Leveling",
        },
        {
          "@type": "Thing",
          name: "Tradeskills",
        },
        {
          "@type": "Thing",
          name: "Corpse Recovery",
        },
        {
          "@type": "Thing",
          name: "Faelindral",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "VideoGame",
      "@id": `${pageUrl}#game`,
      name: "Monsters & Memories",
      url: pageUrl,
      genre: "MMORPG",
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
          title="Monsters & Memories Guide: Classes, Leveling & What to Do"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}