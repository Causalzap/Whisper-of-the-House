import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethClassesContent from "@/data/dimraeth/classes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/classes`;

const metadataTitle =
  "Dimraeth Classes Guide: Best Class, Races & Archetypes";

const metadataDescription =
  "Compare Dimraeth classes, races, weapons, starting stats, and archetypes. See why Minotaur Brawler is a strong first pick and when to choose Human or Elf.";

const articleDescription =
  "A practical Dimraeth classes guide explaining how Magician, Brawler, and Shadow change when paired with Human, Minotaur, or Elf, including confirmed archetypes, starting weapons and stats, Elemental Ranger, Earthshaker, Horned Vanguard, Night's Whisper, and which race-class combination fits different combat styles.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-human-magician-elemental-ranger.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-minotaur-magician-earthshaker.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-minotaur-brawler-start.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-elf-shadow-starting-skills.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "current-classes",
    label: "Classes and races",
  },
  {
    id: "same-class-different-race",
    label: "Same class, different race",
  },
  {
    id: "best-starting-class",
    label: "Best starting class",
  },
  {
    id: "human",
    label: "When to choose Human",
  },
  {
    id: "minotaur",
    label: "When to choose Minotaur",
  },
  {
    id: "elf",
    label: "When to choose Elf",
  },
  {
    id: "class-differences",
    label: "Which class to pair",
  },
  {
    id: "skill-tree-impact",
    label: "Race and Skill Tree",
  },
  {
    id: "which-class",
    label: "Which class should you choose?",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/skill-tree",
    label: "Dimraeth Skill Tree Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/pets",
    label: "Dimraeth Pets Guide",
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
        alt: "Dimraeth Human Magician Elemental Ranger character creation",
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
          name: "Classes Guide",
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
        "Dimraeth Classes Guide: Best Starting Class, Races and Archetypes",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-17",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Classes",
        },
        {
          "@type": "Thing",
          name: "Races",
        },
        {
          "@type": "Thing",
          name: "Archetypes",
        },
        {
          "@type": "Thing",
          name: "Magician",
        },
        {
          "@type": "Thing",
          name: "Brawler",
        },
        {
          "@type": "Thing",
          name: "Shadow",
        },
        {
          "@type": "Thing",
          name: "Human",
        },
        {
          "@type": "Thing",
          name: "Minotaur",
        },
        {
          "@type": "Thing",
          name: "Elf",
        },
        {
          "@type": "Thing",
          name: "Horned Vanguard",
        },
        {
          "@type": "Thing",
          name: "Elemental Ranger",
        },
        {
          "@type": "Thing",
          name: "Earthshaker",
        },
        {
          "@type": "Thing",
          name: "Night's Whisper",
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
          title="Dimraeth Classes: Best Starting Class, Races & Archetypes"
          description="Magician, Brawler, and Shadow can play very differently depending on race. Compare the confirmed archetypes, starting weapons and stats, and choose a Human, Minotaur, or Elf combination that fits how you want to fight."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethClassesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}