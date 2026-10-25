
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CursedConfrontationPart2Content from "@/data/dont-starve-together/cursed-confrontation-part-2-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dont-starve-together`;
const pageUrl = `${hubUrl}/cursed-confrontation-part-2-walkthrough`;

const metadataTitle =
  "DST Cursed Confrontation Part 2 Walkthrough";

const metadataDescription =
  "Start Cursed Confrontation Part 2, summon friendly Fuelweaver, get all 3 Blighted offerings, complete Charlie's ritual, and claim rewards.";

const articleDescription =
  "Complete Cursed Confrontation Part 2 in Don't Starve Together: obtain the Possessed Shadow Atrium, summon friendly Ancient Fuelweaver, corrupt the three required creatures, place their offerings, and finish Charlie's ritual.";

const heroImage =
  "/images/dont-starve-together/cursed-confrontation-keystone-gateway.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/dont-starve-together/possessed-atrium-friendly-fuelweaver.webp`,
  `${siteUrl}/images/dont-starve-together/blighted-rock-master-dash.webp`,
  `${siteUrl}/images/dont-starve-together/blighted-hound-batilisk-duplicates.webp`,
  `${siteUrl}/images/dont-starve-together/blighted-great-depths-worm.webp`,
  `${siteUrl}/images/dont-starve-together/cursed-confrontation-final-rewards.webp`,
];

const toc = [
  {
    id: "start-ritual",
    label: "Start Charlie's Ritual",
  },
  {
    id: "possessed-shadow-atrium",
    label: "Get Possessed Shadow Atrium",
  },
  {
    id: "friendly-fuelweaver",
    label: "Summon Friendly Fuelweaver",
  },
  {
    id: "three-offerings",
    label: "Three Blighted Offerings",
  },
  {
    id: "rock-master",
    label: "Rock Master & Blighted Claw",
  },
  {
    id: "hound-batilisk",
    label: "Hound Batilisk & Larynx",
  },
  {
    id: "great-depths-worm",
    label: "Great Depths Worm & Guts",
  },
  {
    id: "gateway-offerings",
    label: "Place the Three Offerings",
  },
  {
    id: "final-fight",
    label: "Shrouded Queen & Umbral",
  },
  {
    id: "final-rewards",
    label: "King's Staff & Rewards",
  },
  {
    id: "repeat-finale",
    label: "Repeat the Shadow Finale",
  },
];

const relatedLinks = [
  {
    href: "/dont-starve-together",
    label: "Shadow Progression & Final Boss",
  },
  {
    href: "/dont-starve-together/sanctum-walkthrough",
    label: "Sanctum Walkthrough & Keystone",
  },
  {
    href: "/dont-starve-together/shrouded-queen",
    label: "Shrouded Queen & Umbral Abomination Boss Guide",
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
    publishedTime: "2026-10-25",
    modifiedTime: "2026-10-25",
    images: [
      {
        url: heroImageUrl,
        alt: "Charlie beside the repaired Ancient Gateway during the Shadow ritual in Don't Starve Together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImageUrl],
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
          name: "Don't Starve Together",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cursed Confrontation Part 2",
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
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-25",
      dateModified: "2026-10-25",
      articleSection: "Don't Starve Together Guides",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Don't Starve Together",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Cursed Confrontation Part 2",
        },
        {
          "@type": "Thing",
          name: "Possessed Shadow Atrium",
        },
        {
          "@type": "Thing",
          name: "Ancient Fuelweaver",
        },
        {
          "@type": "Thing",
          name: "Blighted Rock Master",
        },
        {
          "@type": "Thing",
          name: "Blighted Hound Batilisk",
        },
        {
          "@type": "Thing",
          name: "Blighted Great Depths Worm",
        },
        {
          "@type": "Thing",
          name: "King's Staff",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title="Cursed Confrontation Part 2 Walkthrough: All 3 Offerings"
          description={articleDescription}
          gameTitle="Don't Starve Together"
          gameHref="/dont-starve-together"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CursedConfrontationPart2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
