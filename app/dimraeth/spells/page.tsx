import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethSpellsContent from "@/data/dimraeth/spells.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${siteUrl}/dimraeth/spells`;

const metadataTitle =
  "Dimraeth Spells & Spellbooks – Unlock, Craft & Use";

const metadataDescription =
  "Learn how spells and Spellbooks work in Dimraeth, including recipe unlocks, crafting, attribute requirements, vendors, world finds and boss spells.";

const articleDescription =
  "How to unlock, craft and use spells in Dimraeth, with practical Spellbook routes, recipe requirements, vendor choices, boss unlocks and common progression blockers.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-alaric-first-spellbook.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-shockwave-recipe-unlock.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-shockwave-spellbook-crafting.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-meteorite-spellbook-recipe.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-black-hole-spellbook.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-spell-vendor-options.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-forest-king-spell-unlocks.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-spells",
    label: "How to Unlock Spells",
  },
  {
    id: "spell-recipe",
    label: "What to Do With Spell Recipes",
  },
  {
    id: "attribute-requirements",
    label: "Spell Attribute Requirements",
  },
  {
    id: "world-spellbooks",
    label: "Finding Spellbooks",
  },
  {
    id: "vendor-spells",
    label: "Which Vendor Spells to Buy",
  },
  {
    id: "boss-spells",
    label: "Boss Spell Unlocks",
  },
  {
    id: "confirmed-spells",
    label: "Confirmed Spells & Spellbooks",
  },
  {
    id: "spells-and-builds",
    label: "Choosing Spells for a Build",
  },
  {
    id: "spellbook-vs-skill-tree",
    label: "Spellbooks vs Skill Tree",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/skill-tree",
    label: "Dimraeth Skill Tree Guide",
  },
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/classes",
    label: "Dimraeth Classes Guide",
  },
  {
    href: "/dimraeth/forest-king",
    label: "Forest King Boss Guide",
  },
  {
    href: "/dimraeth",
    label: "Dimraeth Guide Hub",
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
        alt: "Alaric giving the player a Spellbook in Dimraeth",
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
          name: "Spells & Spellbooks",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "Dimraeth Spells: How to Unlock, Craft & Use Spellbooks",
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      dateModified: "2026-09-18",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function DimraethSpellsPage() {
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
          title="Dimraeth Spells: How to Unlock, Craft & Use Spellbooks"
          description={articleDescription}
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/dimraeth"
          breadcrumbBaseLabel="Dimraeth"
          updatedAt="September 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethSpellsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}