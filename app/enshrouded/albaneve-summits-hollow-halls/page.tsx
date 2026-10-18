
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AlbaneveSummitsHollowHallsContent from "@/data/enshrouded/albaneve-summits-hollow-halls.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/enshrouded`;
const pageUrl = `${hubUrl}/albaneve-summits-hollow-halls`;

const metadataTitle =
  "Enshrouded Albaneve Summits Hollow Halls Walkthrough";

const metadataDescription =
  "Clear Albaneve Summits Hollow Halls in Enshrouded 1.0. Find switches, survive freezing, use Updrafts, defeat Hollow Titan, and collect Icy Giant Bones.";

const articleTitle =
  "Enshrouded Albaneve Summits Hollow Halls Walkthrough";

const articleDescription =
  "Enter the Albaneve Summits Hollow Halls with the Bone Key, solve the green rune barriers, cross frozen chambers, defeat Hollow Titan, and unlock the next dungeon.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-albaneve-hollow-halls-updraft-runes.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-albaneve-hollow-halls-locked-switch.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-albaneve-hollow-halls-hypothermia.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-albaneve-hollow-halls-elevated-rune.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-icy-giant-bones.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-hollow-titan-head.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-albaneve-hollow-halls-ectoplasm-rewards.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "entrance",
    label: "Entrance & Bone Key",
  },
  {
    id: "preparation",
    label: "Frost Protection & Preparation",
  },
  {
    id: "first-barrier",
    label: "First Green Rune Barrier",
  },
  {
    id: "locked-door",
    label: "Locked Door & Missing Switch",
  },
  {
    id: "freezing",
    label: "Survive Hypothermia",
  },
  {
    id: "updraft-runes",
    label: "Icy Slides & Updraft Runes",
  },
  {
    id: "upper-barrier",
    label: "Four-Rune Upper Barrier",
  },
  {
    id: "hollow-titan",
    label: "Hollow Titan Boss & Loot",
  },
  {
    id: "rewards",
    label: "Final Rewards & Veilwater Key",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded",
    label: "Enshrouded 1.0 Walkthrough & Progression",
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
        width: 922,
        height: 584,
        alt: "Green barrier runes and Updraft traversal inside the Albaneve Summits Hollow Halls in Enshrouded",
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
          name: "Albaneve Summits Hollow Halls",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Albaneve Summits Hollow Halls",
        },
        {
          "@type": "Thing",
          name: "Albaneve Summits Bone Key",
        },
        {
          "@type": "Thing",
          name: "Hollow Halls green rune barriers",
        },
        {
          "@type": "Thing",
          name: "Enshrouded frost protection",
        },
        {
          "@type": "Thing",
          name: "Hollow Titan",
        },
        {
          "@type": "Thing",
          name: "Icy Giant Bones",
        },
        {
          "@type": "Thing",
          name: "Veilwater Basin Bone Key",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
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
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function AlbaneveSummitsHollowHallsPage() {
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AlbaneveSummitsHollowHallsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
