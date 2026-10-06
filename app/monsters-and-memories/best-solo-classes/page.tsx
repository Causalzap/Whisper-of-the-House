import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesBestSoloClassesContent from "@/data/monsters-and-memories/best-solo-classes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/monsters-and-memories`;
const pageUrl = `${hubUrl}/best-solo-classes`;

const metadataTitle =
  "Monsters & Memories Best Solo Classes: Which Class to Pick";

const metadataDescription =
  "Compare the best solo classes in Monsters & Memories, including Necromancer, Elementalist, Druid, Beastmaster, Bard, Ranger, and Rogue.";

const articleDescription =
  "Compare the strongest solo classes in Monsters & Memories, from Necromancer and Elementalist pet setups to Druid healing, Beastmaster melee, Bard charm, Ranger exploration, and Rogue positioning.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/necromancer-pet-tanking.webp`,
  `${siteUrl}/images/monsters-and-memories/elementalist-class-selection.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "best-solo-classes",
    label: "Best Solo Classes",
  },
  {
    id: "necromancer",
    label: "Necromancer",
  },
  {
    id: "elementalist",
    label: "Elementalist",
  },
  {
    id: "druid",
    label: "Druid",
  },
  {
    id: "beastmaster",
    label: "Beastmaster",
  },
  {
    id: "bard",
    label: "Bard",
  },
  {
    id: "ranger",
    label: "Ranger",
  },
  {
    id: "rogue",
    label: "Rogue",
  },
  {
    id: "when-to-group",
    label: "When to Group",
  },
];

const relatedLinks = [
  {
    href: "/monsters-and-memories/leveling-guide",
    label: "Leveling Guide 1–25",
  },
  {
    href: "/monsters-and-memories/beginner-guide",
    label: "Beginner Guide",
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
        alt: "Monsters & Memories Necromancer fighting with a summoned minion holding the target",
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
          name: "Best Solo Classes",
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
        "Monsters & Memories Best Solo Classes: Which Class to Pick",
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
          name: "Necromancer",
        },
        {
          "@type": "Thing",
          name: "Elementalist",
        },
        {
          "@type": "Thing",
          name: "Druid",
        },
        {
          "@type": "Thing",
          name: "Beastmaster",
        },
        {
          "@type": "Thing",
          name: "Bard",
        },
        {
          "@type": "Thing",
          name: "Ranger",
        },
        {
          "@type": "Thing",
          name: "Rogue",
        },
        {
          "@type": "Thing",
          name: "Solo leveling",
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
          title="Monsters & Memories Best Solo Classes: Which Class to Pick"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesBestSoloClassesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}