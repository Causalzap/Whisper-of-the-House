
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisAchievementsContent from "@/data/valor-mortis/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Valor Mortis Achievements: All 39 & 100% Roadmap";

const metadataDescription =
  "Track all 39 Valor Mortis achievements with an interactive checklist, chapter-by-chapter roadmap, Shield Bash requirements, and combat challenge tips.";

const articleDescription =
  "Complete all 39 Valor Mortis achievements with a progress checklist, an 11-chapter roadmap, missable Shield Bash preparation, quest and collectible goals, and practical combat setups.";

const imageUrls = [
  `${siteUrl}/images/valor-mortis/general-lothaire-battlefield-arena.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "achievement-checklist",
    label: "All 39 achievements checklist",
  },
  {
    id: "achievement-roadmap",
    label: "100% roadmap by chapter",
  },
  {
    id: "abyssal-eviction",
    label: "Abyssal Eviction & Shield Bash",
  },
  {
    id: "quests-and-collections",
    label: "Ambers, Monster Hunt & Guardists",
  },
  {
    id: "combat-achievements",
    label: "Multi-kill combat achievements",
  },
  {
    id: "precision-and-stasis",
    label: "Precision, parry & Stasis",
  },
  {
    id: "upgrade-achievements",
    label: "Maximum upgrade achievements",
  },
  {
    id: "final-cleanup",
    label: "Final 100% cleanup",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "Valor Mortis Walkthrough & Progression",
  },
  {
    href: "/valor-mortis/general-lothaire",
    label: "General Lothaire: First Fight & Rematch",
  },
  {
    href: "/valor-mortis/valley-of-ashes",
    label: "Valley of Ashes: Scouts & Quarry",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village: Keys, Grapple & Louis",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns: Mining Shaft Key & Sphinx",
  },
  {
    href: "/valor-mortis/the-emissary",
    label: "The Emissary Quest & Perfect Copy",
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
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "General Lothaire battlefield encounter in Valor Mortis",
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
          name: "Valor Mortis Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All 39 Achievements & 100% Roadmap",
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
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Valor Mortis",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Valor Mortis achievements",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis 100% completion roadmap",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis 39 Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Abyssal Eviction and Shield Bash",
        },
        {
          "@type": "Thing",
          name: "Quintessential Transmutation Material",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Ambersmith",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Monster Hunt",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Eternal Guardists",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Jack-knife",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Scattershot",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Hoodsnatcher",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis equipment upgrades",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
          title="Valor Mortis Achievements: All 39 & 100% Roadmap"
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ValorMortisAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
