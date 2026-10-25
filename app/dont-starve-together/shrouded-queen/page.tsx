
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ShroudedQueenContent from "@/data/dont-starve-together/shrouded-queen.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dont-starve-together`;
const pageUrl = `${hubUrl}/shrouded-queen`;

const metadataTitle =
  "DST Shrouded Queen & Umbral Abomination Boss Guide";

const metadataDescription =
  "Beat Shrouded Queen and Umbral Abomination with phase HP thresholds, melee and ranged counters, Ink Blights, Dreadstone Outcrops, and laser dodges.";

const articleDescription =
  "Learn how to defeat Shrouded Queen and Umbral Abomination in Don't Starve Together, including their health thresholds, attack counters, Shadow Hands, Grim Harriers, Ink Blights, Dreadstone hazards, and widening optic laser.";

const heroImage =
  "/images/dont-starve-together/umbral-abomination-optic-laser.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/dont-starve-together/shrouded-queen-vine-counter.webp`,
  `${siteUrl}/images/dont-starve-together/shrouded-queen-homing-projectiles.webp`,
  `${siteUrl}/images/dont-starve-together/shrouded-queen-grim-harriers.webp`,
  `${siteUrl}/images/dont-starve-together/umbral-abomination-ink-blights.webp`,
  `${siteUrl}/images/dont-starve-together/umbral-abomination-dreadstone-outcrops.webp`,
];

const toc = [
  {
    id: "summon-shrouded-queen",
    label: "How to Start the Boss Fight",
  },
  {
    id: "boss-preparation",
    label: "Best Equipment & Preparation",
  },
  {
    id: "shrouded-queen-basic-attacks",
    label: "Shrouded Queen Phase 1",
  },
  {
    id: "shrouded-queen-melee-counter",
    label: "Melee Counter & Vines",
  },
  {
    id: "shrouded-queen-ranged-counter",
    label: "Reflected Projectiles",
  },
  {
    id: "shrouded-queen-vines",
    label: "Tracking Vines",
  },
  {
    id: "grim-harriers",
    label: "Grim Harriers at 20% HP",
  },
  {
    id: "umbral-abomination-transition",
    label: "Umbral Abomination Begins",
  },
  {
    id: "umbral-ink-blights",
    label: "Ink Blights & Portal Attacks",
  },
  {
    id: "umbral-puddle",
    label: "Moving Puddle at 95% HP",
  },
  {
    id: "dreadstone-outcrops",
    label: "Dreadstone Outcrops",
  },
  {
    id: "umbral-laser",
    label: "Tracking Laser at 83% HP",
  },
  {
    id: "umbral-late-summons",
    label: "Rasps & Rictuses at 66%",
  },
  {
    id: "umbral-wide-laser",
    label: "Wide Laser at 33% HP",
  },
  {
    id: "solo-beefalo",
    label: "Solo vs Beefalo",
  },
  {
    id: "finish-fight",
    label: "Finish the Fight & Exit",
  },
];

const relatedLinks = [
  {
    href: "/dont-starve-together",
    label: "Shadow Progression & Final Boss",
  },
  {
    href: "/dont-starve-together/cursed-confrontation-part-2-walkthrough",
    label: "Cursed Confrontation Part 2 Walkthrough",
  },
  {
    href: "/dont-starve-together/sanctum-walkthrough",
    label: "Sanctum Walkthrough & Keystone",
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
        alt: "Umbral Abomination firing a tracking optic laser during the final Shadow boss fight",
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
          name: "Shrouded Queen & Umbral Abomination",
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
          name: "Shrouded Queen",
        },
        {
          "@type": "Thing",
          name: "Umbral Abomination",
        },
        {
          "@type": "Thing",
          name: "Shrouded Queen boss phases",
        },
        {
          "@type": "Thing",
          name: "Umbral Abomination optic laser",
        },
        {
          "@type": "Thing",
          name: "Dreadstone Outcrops",
        },
        {
          "@type": "Thing",
          name: "Grim Harriers",
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
          title="How to Beat Shrouded Queen & Umbral Abomination in DST"
          description={articleDescription}
          gameTitle="Don't Starve Together"
          gameHref="/dont-starve-together"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ShroudedQueenContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
