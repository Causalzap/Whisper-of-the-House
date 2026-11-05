import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LoftiaPetsContent from "@/data/loftia/pets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/loftia`;
const pageUrl = `${hubUrl}/pets`;

const metadataTitle =
  "Loftia Pets: How to Rescue and Adopt Your First Dog";

const metadataDescription =
  "Find Joanna in Hanging Gardens, collect 5 Dog Location Pieces, bring 4 Lettuce and 2 Carrots, then adopt, equip, and customize your first Loftia pet.";

const articleTitle =
  "How Do You Get Your First Pet in Loftia?";

const articleDescription =
  "Follow Joanna’s Notes From the Fauna quest in Hanging Gardens, find the lost dog’s tracks, feed it at the Pet Bowl, adopt and equip your Small Dog, and return for the reward.";

const imageUrls = [
  `${siteUrl}/images/loftia/loftia-lost-dog-tracks.webp`,
  `${siteUrl}/images/loftia/loftia-dog-rescue-food-requirements.webp`,
  `${siteUrl}/images/loftia/loftia-first-dog-adoption-equip.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-pets",
    label: "When Pets Unlock",
  },
  {
    id: "joanna",
    label: "Find Joanna",
  },
  {
    id: "dog-tracks",
    label: "Five Dog Location Pieces",
  },
  {
    id: "missing-clues",
    label: "Missing Dog Tracks",
  },
  {
    id: "dog-food",
    label: "Lettuce & Carrots",
  },
  {
    id: "adopt-dog",
    label: "Adopt & Equip the Dog",
  },
  {
    id: "report-joanna",
    label: "Return to Joanna",
  },
  {
    id: "pet-customization",
    label: "Pet Customization",
  },
  {
    id: "pet-not-following",
    label: "Dog Not Following",
  },
  {
    id: "next-pet",
    label: "Next Pet Quest",
  },
];

const relatedLinks = [
  {
    href: "/loftia",
    label: "Loftia Guide",
  },
  {
    href: "/loftia/beginner-guide",
    label: "Beginner: First Quests & Glider",
  },
  {
    href: "/loftia/research-and-tool-upgrades",
    label: "Research: Hammer & Pruners Lv.2",
  },
  {
    href: "/loftia/money-making",
    label: "Make Dew: Crops & Cooking",
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
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
    images: [
      {
        url: heroImage,
        alt: "Dog Location Pieces being collected in Loftia’s lost pet quest",
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
          name: "Loftia",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "First Pet & Dog Rescue",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-05",
      dateModified: "2026-11-05",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
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
    },
  ],
};

export default function LoftiaPetsPage() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Loftia"
          gameHref="/loftia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LoftiaPetsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
