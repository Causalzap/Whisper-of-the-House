import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DolocTownAchievementsContent from "@/data/doloc-town/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/doloc-town`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/doloc-town/doloc-town-achievements-trash-bin.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-achievements-lank-wrong-gift.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-achievements-fishing.webp`,
  `${siteUrl}/images/doloc-town/doloc-town-achievements-festival-calendar.webp`,
];

export const metadata: Metadata = {
  title: "Doloc Town Achievements: Hidden, Rare & 100% Guide",
  description:
    "Complete all 80 Doloc Town achievements with hidden triggers, rare achievements, cleanup order, fishing, genes, factions, festivals and late-game goals.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Doloc Town Achievements and 100% Completion Guide",
    description:
      "Track all 80 Doloc Town achievements with hidden triggers, completion percentages, late-game cleanup priorities, and links to each system's dedicated guide.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Doloc Town player checking a trash bin while working toward hidden achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doloc Town Achievements and 100% Completion Guide",
    description:
      "Hidden achievements, rare triggers, fishing, genes, factions, festivals, automation and a practical 100% cleanup order.",
    images: [imageUrls[0]],
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
          name: "Doloc Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
        "Doloc Town Achievements Guide: Hidden Triggers, Rare Goals, and 100% Completion Order",
      description:
        "A player-focused Doloc Town achievements guide covering all 80 achievements, hidden one-action triggers, trash and Lank achievements, exploration secrets, fishing and farm counters, gene and research goals, animals, automation, guild and faction progress, festivals, combat targets, A False Heir, and a practical final 100% cleanup order.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-12",
      dateModified: "2026-08-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Doloc Town",
        },
        {
          "@type": "Thing",
          name: "Doloc Town achievements",
        },
        {
          "@type": "Thing",
          name: "Doloc Town hidden achievements",
        },
        {
          "@type": "Thing",
          name: "Doloc Town 100% completion",
        },
        {
          "@type": "Thing",
          name: "A False Heir",
        },
        {
          "@type": "Thing",
          name: "Laid-back Farmer",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

const toc = [
  {
    id: "story-achievements",
    label: "Story achievements",
  },
  {
    id: "trash-hidden-achievements",
    label: "Trash and Lank achievements",
  },
  {
    id: "easy-hidden-achievements",
    label: "Easy hidden achievements",
  },
  {
    id: "exploration-hidden-achievements",
    label: "Exploration secrets",
  },
  {
    id: "fishing-achievements",
    label: "Fishing achievements",
  },
  {
    id: "farm-achievements",
    label: "Farm and money achievements",
  },
  {
    id: "genes-and-research",
    label: "Genes and research",
  },
  {
    id: "animals",
    label: "Animal achievements",
  },
  {
    id: "automation-achievements",
    label: "Automation achievements",
  },
  {
    id: "guild-relationships-factions",
    label: "Guild, relationships and factions",
  },
  {
    id: "cooking-festivals-combat",
    label: "Cooking, festivals and combat",
  },
  {
    id: "a-false-heir",
    label: "A False Heir",
  },
  {
    id: "completion-order",
    label: "100% cleanup order",
  },
];

const relatedLinks = [
  {
    href: "/doloc-town",
    label: "Doloc Town Guide Hub",
  },
  {
    href: "/doloc-town/walkthrough",
    label: "Doloc Town Walkthrough",
  },
  {
    href: "/doloc-town/best-crops",
    label: "Best Crops and Profit Calculator",
  },
  {
    href: "/doloc-town/fish-breeding",
    label: "Fish Breeding Guide",
  },
  {
    href: "/doloc-town/crop-genetics",
    label: "Crop Genetics Guide",
  },
  {
    href: "/doloc-town/animals",
    label: "Animals and Livestock Guide",
  },
  {
    href: "/doloc-town/farming-automation",
    label: "Farming Automation Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Doloc Town Achievements and 100% Completion Guide"
          description="I let story and system achievements unlock naturally, clean up hidden triggers when they are convenient, and leave long counters and rare late-game goals for the final 100% pass."
          gameTitle="Doloc Town"
          gameHref="/doloc-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 12, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DolocTownAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}