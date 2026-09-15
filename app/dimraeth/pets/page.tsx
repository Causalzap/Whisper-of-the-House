import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DimraethPetsContent from "@/data/dimraeth/pets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dimraeth`;
const pageUrl = `${hubUrl}/pets`;

const metadataTitle =
  "Dimraeth Pets Guide: Unlocks, Best Pets, Levels & Courier";

const metadataDescription =
  "Unlock Dimraeth pets through Myrll, compare Fangra Cub, Moon Cat, Carrion Parrot and Ember Hound, and learn levels, Pet Pen, inventory and Courier.";

const articleDescription =
  "A practical Dimraeth pets and companions guide covering how Myrll unlocks the companion system, the Alpha Wolf route to Fangra Cub, Moon Cat Concentration support, Carrion Parrot Bleed synergy, Ember Hound Fire damage, companion levels, the observed Level 4 max indicator, pet inventory, Courier chest transfers, and the Pet Pen.";

const imageUrls = [
  `${siteUrl}/images/dimraeth/dimraeth-fangra-cub-companion.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-moon-cat-astral-purr.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-carrion-parrot-bleed.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-ember-hound-fire-pet.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-pet-courier-chest-list.webp`,
  `${siteUrl}/images/dimraeth/dimraeth-pet-pen.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-pets",
    label: "How to unlock pets",
  },
  {
    id: "fangra-cub",
    label: "Fangra Cub",
  },
  {
    id: "choose-pet",
    label: "How to choose a pet",
  },
  {
    id: "moon-cat",
    label: "Moon Cat",
  },
  {
    id: "carrion-parrot",
    label: "Carrion Parrot",
  },
  {
    id: "ember-hound",
    label: "Ember Hound",
  },
  {
    id: "pet-levels",
    label: "Pet levels",
  },
  {
    id: "pet-inventory",
    label: "Inventory & Courier",
  },
  {
    id: "pet-pen",
    label: "Pet Pen",
  },
  {
    id: "which-pet",
    label: "Which pet to use",
  },
];

const relatedLinks = [
  {
    href: "/dimraeth/builds",
    label: "Dimraeth Builds Guide",
  },
  {
    href: "/dimraeth/sanctum",
    label: "Dimraeth Sanctum Guide",
  },
  {
    href: "/dimraeth/walkthrough",
    label: "Dimraeth Walkthrough",
  },
  {
    href: "/dimraeth/deeds-bounties",
    label: "Dimraeth Deeds & Bounties",
  },
  {
    href: "/dimraeth/co-op-progression",
    label: "Dimraeth Co-op Progression",
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
        alt: "Fangra Cub companion in Dimraeth",
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
          name: "Pets Guide",
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
        "Dimraeth Pets Guide: Unlocks, Companion Abilities, Levels and Courier",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-15",
      articleSection: "Game Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dimraeth",
        },
        {
          "@type": "Thing",
          name: "Pets",
        },
        {
          "@type": "Thing",
          name: "Companions",
        },
        {
          "@type": "Thing",
          name: "Myrll",
        },
        {
          "@type": "Thing",
          name: "Fangra Cub",
        },
        {
          "@type": "Thing",
          name: "Moon Cat",
        },
        {
          "@type": "Thing",
          name: "Carrion Parrot",
        },
        {
          "@type": "Thing",
          name: "Ember Hound",
        },
        {
          "@type": "Thing",
          name: "Pet Pen",
        },
        {
          "@type": "Thing",
          name: "Courier",
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
          title="Dimraeth Pets: How to Unlock Them & Which Companion to Use"
          description="Unlock companions through Myrll, compare Fangra Cub, Moon Cat, Carrion Parrot and Ember Hound, then use levels, inventory and Courier to get more from the pet system."
          gameTitle="Dimraeth"
          gameHref="/dimraeth"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DimraethPetsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}