import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesFaelindralRangerQuestContent from "@/data/monsters-and-memories/faelindral-ranger-quest.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/monsters-and-memories`;
const pageUrl = `${hubUrl}/faelindral-ranger-quest`;

const metadataTitle =
  "Monsters & Memories Faelindral Ranger Quest: Log Book & Cloak";

const metadataDescription =
  "Complete the Faelindral Ranger quest in Monsters & Memories: ruined archway, Spore Haven, Whispering Pools, Full Ranger's Log Book, and cloak reward.";

const articleDescription =
  "Complete Captain Relgen Greenblade's Faelindral Ranger quest by investigating the ruined archway, Spore Haven Karst, and Whispering Pools, combining the Full Ranger's Log Book, and claiming the Initiate Keeper's Cloak.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/ranger-quest-ruined-archway.webp`,
  `${siteUrl}/images/monsters-and-memories/ranger-quest-strange-foam.webp`,
  `${siteUrl}/images/monsters-and-memories/ranger-quest-whispering-pools-footprints.webp`,
  `${siteUrl}/images/monsters-and-memories/initiate-keepers-cloak-stats.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "start-ranger-quest",
    label: "Start the Ranger Quest",
  },
  {
    id: "ruined-archway",
    label: "Ruined Archway",
  },
  {
    id: "spore-haven",
    label: "Spore Haven Karst",
  },
  {
    id: "whispering-pools",
    label: "Whispering Pools",
  },
  {
    id: "full-log-book",
    label: "Full Ranger's Log Book",
  },
  {
    id: "keepers-cloak",
    label: "Keeper's Cloak Reward",
  },
  {
    id: "quest-not-advancing",
    label: "Quest Not Advancing",
  },
];

const relatedLinks = [
  {
    href: "/monsters-and-memories/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/monsters-and-memories/leveling-guide",
    label: "Leveling Guide 1–25",
  },
  {
    href: "/monsters-and-memories/best-solo-classes",
    label: "Best Solo Classes",
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
        alt: "Monsters & Memories Faelindral Ranger quest journal directions for the ruined archway near Keeper's Bight",
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
          name: "Faelindral Ranger Quest",
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
        "Monsters & Memories Faelindral Ranger Quest: Log Book & Cloak",
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
          name: "Faelindral Ranger Quest",
        },
        {
          "@type": "Thing",
          name: "Captain Relgen Greenblade",
        },
        {
          "@type": "Thing",
          name: "Ranger's Log Book",
        },
        {
          "@type": "Thing",
          name: "Full Ranger's Log Book",
        },
        {
          "@type": "Thing",
          name: "Ruined Archway",
        },
        {
          "@type": "Thing",
          name: "Spore Haven Karst",
        },
        {
          "@type": "Thing",
          name: "Whispering Pools",
        },
        {
          "@type": "Thing",
          name: "Initiate Keeper's Cloak",
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
          title="Monsters & Memories Faelindral Ranger Quest: Log Book & Cloak"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesFaelindralRangerQuestContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}