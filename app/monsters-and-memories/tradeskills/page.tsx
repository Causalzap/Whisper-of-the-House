import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesTradeskillsContent from "@/data/monsters-and-memories/tradeskills.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/monsters-and-memories`;
const pageUrl = `${hubUrl}/tradeskills`;

const metadataTitle =
  "Monsters & Memories Tradeskills Guide: Bags, Fishing & Crafting";

const metadataDescription =
  "Learn Monsters & Memories tradeskills, including backpacks, Tanning, Leatherworking, Tailoring, Fishing, material chains, and what to level first.";

const articleDescription =
  "Learn how tradeskills work in Monsters & Memories, which crafts to start first, how backpacks and cloth bags are made, how Tanning supports Leatherworking, how Fishing works, and which materials are worth keeping.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/tradeskills-skill-list.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "all-tradeskills",
    label: "Learning Tradeskills",
  },
  {
    id: "what-to-level-first",
    label: "What to Level First",
  },
  {
    id: "backpacks",
    label: "Backpacks",
  },
  {
    id: "tanning",
    label: "Tanning & Leatherworking",
  },
  {
    id: "tailoring",
    label: "Tailoring",
  },
  {
    id: "fishing",
    label: "Fishing",
  },
  {
    id: "material-chains",
    label: "Material Chains",
  },
  {
    id: "when-to-stop",
    label: "When to Stop",
  },
];

const relatedLinks = [
  {
    href: "/monsters-and-memories/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/monsters-and-memories/leveling-guide",
    label: "Leveling Guide 1–25",
  },
  {
    href: "/monsters-and-memories/best-solo-classes",
    label: "Best Solo Classes",
  },
  {
    href: "/monsters-and-memories/corpse-recovery",
    label: "Corpse Recovery",
  },
  {
    href: "/monsters-and-memories",
    label: "Monsters & Memories Guide",
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
        url: ogImage,
        width: 1600,
        height: 900,
        alt: "Monsters & Memories tradeskill list showing several crafting skills trained on one character",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [ogImage],
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
          name: "Monsters & Memories",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tradeskills",
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
        "Monsters & Memories Tradeskills Guide: Bags, Fishing & Crafting",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-06",
      dateModified: "2026-10-06",
      articleSection: "Monsters & Memories Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Monsters & Memories",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Tradeskills",
        },
        {
          "@type": "Thing",
          name: "Tanning",
        },
        {
          "@type": "Thing",
          name: "Leatherworking",
        },
        {
          "@type": "Thing",
          name: "Tailoring",
        },
        {
          "@type": "Thing",
          name: "Fishing",
        },
        {
          "@type": "Thing",
          name: "Backpacks",
        },
        {
          "@type": "Thing",
          name: "Material Chains",
        },
        {
          "@type": "Thing",
          name: "Fish Oil",
        },
      ],
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
          title="Monsters & Memories Tradeskills Guide: Bags, Fishing & Crafting"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesTradeskillsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}