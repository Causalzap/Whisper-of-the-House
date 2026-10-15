
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisCursedHollowContent from "@/data/valor-mortis/cursed-hollow.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/cursed-hollow`;

const metadataTitle =
  "Valor Mortis Cursed Hollow Walkthrough: Keys & Claymore";

const metadataDescription =
  "Complete Valor Mortis Cursed Hollow with the Bride boss, Headman's Key, Sleeping Beauty choices, Seamus Diggory, Claymore, and Red Ribbon quest.";

const articleDescription =
  "Follow the Chapter 6 route from Eerie View to Village Church, defeat the Bride, find Headman's Key, resolve Sleeping Beauty and Seamus Diggory, collect Claymore, and complete Till Death.";

const imageUrls = [
  `${siteUrl}/images/valor-mortis/cursed-hollow-headmans-key.webp`,
  `${siteUrl}/images/valor-mortis/cursed-hollow-sleeping-beauty-wheel.webp`,
  `${siteUrl}/images/valor-mortis/cursed-hollow-seamus-pig-blood.webp`,
  `${siteUrl}/images/valor-mortis/cursed-hollow-church-claymore.webp`,
  `${siteUrl}/images/valor-mortis/cursed-hollow-red-ribbon-grave.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "eerie-view",
    label: "Eerie View to the Bride",
  },
  {
    id: "the-bride",
    label: "How to defeat the Bride",
  },
  {
    id: "sleeping-beauty",
    label: "Sleeping Beauty & Headman's Key",
  },
  {
    id: "deep-water",
    label: "Deep Water & shortcuts",
  },
  {
    id: "seamus-diggory",
    label: "Seamus Diggory: Blood or Wine",
  },
  {
    id: "village-church",
    label: "Village Church & Claymore",
  },
  {
    id: "till-death",
    label: "Red Ribbon & Till Death",
  },
  {
    id: "chapter-exit",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "Valor Mortis Walkthrough: All 11 Chapters",
  },
  {
    href: "/valor-mortis/achievements",
    label: "All 39 Achievements & 100% Roadmap",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village: Grapple & Louis",
  },
  {
    href: "/valor-mortis/sewers-keys",
    label: "Sewers Key & Master Key Locations",
  },
  {
    href: "/valor-mortis/the-emissary",
    label: "The Emissary: Shield Return & Rewards",
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
        alt: "Sleeping Beauty spinning wheel in Cursed Hollow, Valor Mortis",
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
          name: "Cursed Hollow Walkthrough",
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
          name: "Valor Mortis Cursed Hollow",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Chapter 6 Punishment",
        },
        {
          "@type": "Thing",
          name: "The Bride boss",
        },
        {
          "@type": "Thing",
          name: "Headman's Key",
        },
        {
          "@type": "Thing",
          name: "Sleeping Beauty quest",
        },
        {
          "@type": "Thing",
          name: "Sleeping Beauty spinning wheel choices",
        },
        {
          "@type": "Thing",
          name: "The Curious Case of Seamus Diggory",
        },
        {
          "@type": "Thing",
          name: "Blood-Filled Bottle and Bottle of Wine",
        },
        {
          "@type": "Thing",
          name: "Village Church Claymore",
        },
        {
          "@type": "Thing",
          name: "Red Ribbon and Till Death quest",
        },
        {
          "@type": "Thing",
          name: "Cursed Hollow Eternal Guardist",
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
          title="Valor Mortis Cursed Hollow Walkthrough: All Keys, Quests & Claymore"
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ValorMortisCursedHollowContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
