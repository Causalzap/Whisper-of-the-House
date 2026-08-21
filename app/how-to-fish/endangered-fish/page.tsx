import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HowToFishEndangeredFishContent from "@/data/how-to-fish/endangered-fish.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/how-to-fish`;
const pageUrl = `${hubUrl}/endangered-fish`;

const imageUrls = [
  `${siteUrl}/images/how-to-fish/how-to-fish-tourist-endangered-quest.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-endangered-species-tag.webp`,
  `${siteUrl}/images/how-to-fish/how-to-fish-tourist-carrot-reward.webp`,
];

export const metadata: Metadata = {
  title: "How to Fish Endangered Fish: Tourist & Carrot Guide",
  description:
    "Find a valid Endangered Species creature for the Tourist on Island 3, learn why Needlefish is not required, and get the Carrot for Pufferfish.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Fish Endangered Species and Tourist Guide",
    description:
      "Identify a valid endangered creature on Island 3, understand when Needlefish works, avoid wasting the catch, and get the Tourist's Carrot.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Creature showing the Endangered Species status in How to Fish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fish Endangered Fish Guide",
    description:
      "Find an Endangered Species creature for the Island 3 Tourist, understand the Needlefish question, and get the Carrot.",
    images: [imageUrls[1]],
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
          name: "How to Fish Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endangered Fish Guide",
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
        "How to Fish Endangered Fish Guide: Endangered Species, Needlefish, Tourist, and Carrot",
      description:
        "This How to Fish Island 3 guide explains how to complete the Tourist's endangered-creature request by checking catches for the Endangered Species status rather than searching for one fixed fish. It explains why Needlefish can work without being the only solution, what not to do with a valid catch, how to finish the Tourist hand-in, and how to obtain the Carrot needed for the Pufferfish progression step.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-21",
      dateModified: "2026-08-21",
      about: [
        {
          "@type": "VideoGame",
          name: "How to Fish",
        },
        {
          "@type": "Thing",
          name: "Endangered Species",
        },
        {
          "@type": "Thing",
          name: "Island 3 Tourist",
        },
        {
          "@type": "Thing",
          name: "Needlefish",
        },
        {
          "@type": "Thing",
          name: "Carrot",
        },
        {
          "@type": "Thing",
          name: "Pufferfish progression",
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
    id: "where-this-starts",
    label: "Where this starts",
  },
  {
    id: "what-counts",
    label: "What counts",
  },
  {
    id: "needlefish",
    label: "Does Needlefish work?",
  },
  {
    id: "bait",
    label: "Do I need special bait?",
  },
  {
    id: "keep-the-creature",
    label: "Keep the valid catch",
  },
  {
    id: "give-it-to-tourist",
    label: "Give it to the Tourist",
  },
  {
    id: "what-the-carrot-is-for",
    label: "What the Carrot is for",
  },
  {
    id: "tourist-not-accepting",
    label: "Tourist not accepting it",
  },
];

const relatedLinks = [
  {
    href: "/how-to-fish",
    label: "How to Fish Walkthrough & Guide Hub",
  },
  {
    href: "/how-to-fish/giant-piranha",
    label: "Giant Piranha Guide",
  },
  {
    href: "/how-to-fish/pufferfish",
    label: "Pufferfish Boss Guide",
  },
  {
    href: "/how-to-fish/boss-guide",
    label: "How to Fish Boss Guide",
  },
  {
    href: "/how-to-fish/achievements",
    label: "How to Fish Achievements",
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
          title="How to Fish Endangered Fish & Carrot Guide"
          description="Complete the Island 3 Tourist request by identifying a valid Endangered Species catch, understand why Needlefish is only one possible answer, and get the Carrot for the next progression step."
          gameTitle="How to Fish"
          gameHref="/how-to-fish"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFishEndangeredFishContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}