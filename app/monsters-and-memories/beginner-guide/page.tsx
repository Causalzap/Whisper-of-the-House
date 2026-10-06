import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesBeginnerGuideContent from "@/data/monsters-and-memories/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/monsters-and-memories`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Monsters & Memories Beginner Guide: What to Do First";

const metadataDescription =
  "Start Monsters & Memories with the Starter Note, class guild, abilities, first fights, merchants, supplies, navigation, and early death recovery.";

const articleDescription =
  "Learn what to do during your first hours in Monsters & Memories, from reading the Starter Note and finding your class guild to learning abilities, choosing early fights, managing money and loot, carrying supplies, and preparing for your first corpse run.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/starter-note-class-guild.webp`,
  `${siteUrl}/images/monsters-and-memories/starting-ability-scroll-spellbook.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "starter-note",
    label: "Starter Note",
  },
  {
    id: "guards-and-journal",
    label: "Guards & Journal",
  },
  {
    id: "starter-quest",
    label: "Starter Quest",
  },
  {
    id: "starting-abilities",
    label: "Starting Abilities",
  },
  {
    id: "first-combat",
    label: "First Combat",
  },
  {
    id: "quests-and-leveling",
    label: "Quests & Leveling",
  },
  {
    id: "money-and-loot",
    label: "Money & Loot",
  },
  {
    id: "leave-town-prepared",
    label: "Food, Light & Weight",
  },
  {
    id: "death",
    label: "First Death",
  },
  {
    id: "first-trip",
    label: "Before Leaving Town",
  },
];

const relatedLinks = [
  {
    href: "/monsters-and-memories/leveling-guide",
    label: "Leveling Guide 1–25",
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
        alt: "Monsters & Memories Starter Note with directions to the character's class guild",
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
          name: "Beginner Guide",
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
        "Monsters & Memories Beginner Guide: What to Do First",
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
          name: "Starter Note",
        },
        {
          "@type": "Thing",
          name: "Class Guilds",
        },
        {
          "@type": "Thing",
          name: "Journal",
        },
        {
          "@type": "Thing",
          name: "Starting Abilities",
        },
        {
          "@type": "Thing",
          name: "Merchants",
        },
        {
          "@type": "Thing",
          name: "Early Leveling",
        },
        {
          "@type": "Thing",
          name: "Corpse Recovery",
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
          title="Monsters & Memories Beginner Guide: What to Do First"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}