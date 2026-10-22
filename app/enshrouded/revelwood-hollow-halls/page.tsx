
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RevelwoodHollowHallsContent from "@/data/enshrouded/revelwood-hollow-halls.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/enshrouded`;
const pageUrl = `${hubUrl}/revelwood-hollow-halls`;

const metadataTitle =
  "Enshrouded Revelwood Hollow Halls: Key, Runes & Cyclops";

const metadataDescription =
  "Find the Revelwood Bone Key recipe, follow the Hollow Halls route through switches and rune barriers, defeat Hollow Cyclops, and unlock Ectoplasm Press.";

const articleDescription =
  "Craft the Revelwood Bone Key, enter the Hollow Halls, follow the gates and wall switches, cross to the opposite side, clear the rune barriers, defeat Hollow Cyclops, and return to the Collector to craft the Ectoplasm Press.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-bone-key-recipe.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-first-gate.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-wall-switch.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-cave-rune.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-cyclops.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-boss-barrier.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-cyclops-loot.webp`,
];

const heroImage =
  `${siteUrl}/images/enshrouded/enshrouded-revelwood-hollow-halls-cyclops.webp`;

const toc = [
  {
    id: "quick-answer",
    label: "Quick answer",
  },
  {
    id: "entrance",
    label: "Entrance & Bone Key",
  },
  {
    id: "first-gate",
    label: "First gate & wall switch",
  },
  {
    id: "opposite-side",
    label: "Cross to the opposite side",
  },
  {
    id: "runes-barriers",
    label: "Runes & barriers",
  },
  {
    id: "cyclops",
    label: "Hollow Cyclops boss",
  },
  {
    id: "rewards",
    label: "Rewards & Ectoplasm Press",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded",
    label: "Enshrouded 1.0 Walkthrough",
  },
  {
    href: "/enshrouded/albaneve-summits-hollow-halls",
    label: "Albaneve Summits Hollow Halls",
  },
  {
    href: "/enshrouded/veilwater-basin-hollow-halls",
    label: "Veilwater Basin Hollow Halls",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 773,
        height: 361,
        alt: "Hollow Cyclops boss in the Revelwood Hollow Halls in Enshrouded",
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
          name: "Enshrouded",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Revelwood Hollow Halls",
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
      datePublished: "2026-10-22",
      dateModified: "2026-10-22",
      inLanguage: "en",
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Revelwood Hollow Halls",
        },
        {
          "@type": "Thing",
          name: "Revelwood Bone Key",
        },
        {
          "@type": "Thing",
          name: "Hollow Halls rune barriers",
        },
        {
          "@type": "Thing",
          name: "Hollow Cyclops",
        },
        {
          "@type": "Thing",
          name: "Ectoplasm Press",
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
          title="Enshrouded Revelwood Hollow Halls: Key, Runes & Cyclops"
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RevelwoodHollowHallsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
