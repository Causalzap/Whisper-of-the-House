
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValorMortisGuideContent from "@/data/valor-mortis/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/valor-mortis`;

const metadataTitle =
  "Valor Mortis Walkthrough: All 11 Chapters & Where to Go";

const metadataDescription =
  "Valor Mortis walkthrough for all 11 chapters, main bosses, Grapple, Stasis and Shield unlocks, sewer keys, blocked routes, and when to return to earlier areas.";

const articleDescription =
  "Follow all 11 Valor Mortis chapters from the Battlefield to the Ancient Lair. Find your next objective, track important ability unlocks, and learn when to return to previously blocked areas.";

const imageUrls = [
  `${siteUrl}/images/valor-mortis/cursed-hollow-church-claymore.webp`,
  `${siteUrl}/images/valor-mortis/sewers-master-key-pickup.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "chapter-order",
    label: "All 11 chapters in order",
  },
  {
    id: "chapters-1-2",
    label: "Chapters 1–2: Battlefield & Valley",
  },
  {
    id: "chapters-3-4",
    label: "Chapters 3–4: Louis & Salt Mine",
  },
  {
    id: "chapters-5-6",
    label: "Chapters 5–6: Vale & Cursed Hollow",
  },
  {
    id: "chapters-7-8",
    label: "Chapters 7–8: City & University",
  },
  {
    id: "chapters-9-11",
    label: "Chapters 9–11: Fortress to Finale",
  },
  {
    id: "ability-unlocks",
    label: "Grapple, Stasis & Shield unlocks",
  },
  {
    id: "return-later",
    label: "When to return to earlier areas",
  },
  {
    id: "abyssal-eviction",
    label: "Abyssal Eviction preparation",
  },
  {
    id: "rapier-heavy-attacks",
    label: "Rapier heavy attack combo",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis/general-lothaire",
    label: "General Lothaire: First Fight & Rematch",
  },
  {
    href: "/valor-mortis/valley-of-ashes",
    label: "Valley of Ashes Walkthrough",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village: Keys, Grapple & Louis",
  },
  {
    href: "/valor-mortis/caverns",
    label: "Caverns: Stasis, Mining Shaft Key & Sphinx",
  },
  {
    href: "/valor-mortis/cursed-hollow",
    label: "Cursed Hollow: Bride, Quests & Claymore",
  },
  {
    href: "/valor-mortis/sewers-keys",
    label: "Sewers Key & Master Key Locations",
  },
  {
    href: "/valor-mortis/the-emissary",
    label: "The Emissary: All Clues & Rewards",
  },
  {
    href: "/valor-mortis/achievements",
    label: "All 39 Achievements & 100% Roadmap",
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
        alt: "Claymore weapon instructions in Valor Mortis",
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
          name: "Valor Mortis Walkthrough",
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
      dateModified: "2026-10-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Valor Mortis",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Valor Mortis walkthrough",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis all 11 chapters",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis chapter progression",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis General Lothaire",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Valley of Ashes",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Fallen Village",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Caverns and Salt Mine",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Cursed Hollow",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis City of Orphans",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Sewers Key and Sewers Master Key",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis University",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis Fortress",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis prison escape",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis final boss The Entity",
        },
        {
          "@type": "Thing",
          name: "Grapple, Stasis and Shield Transmutation",
        },
        {
          "@type": "Thing",
          name: "Valor Mortis achievements",
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
          title="Valor Mortis Walkthrough: All 11 Chapters & Where to Go Next"
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ValorMortisGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
