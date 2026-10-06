import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MonstersMemoriesCorpseRecoveryContent from "@/data/monsters-and-memories/corpse-recovery.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/monsters-and-memories`;
const pageUrl = `${hubUrl}/corpse-recovery`;

const metadataTitle =
  "Monsters & Memories Corpse Recovery Guide: Find Your Body";

const metadataDescription =
  "Find and recover your corpse in Monsters & Memories with Locate Corpse, dragging, resurrection, spellbook backups, Cantrips, and expired corpse recovery.";

const articleDescription =
  "Recover a lost corpse in Monsters & Memories by retracing landmarks, using Locate Corpse, dragging the body to safety, restoring a missing spellbook, using resurrection, and recovering expired corpses.";

const imageUrls = [
  `${siteUrl}/images/monsters-and-memories/locate-corpse-shaded-dunes.webp`,
  `${siteUrl}/images/monsters-and-memories/spellbook-corpse-recovery.webp`,
];

const ogImage = imageUrls[0];

const toc = [
  {
    id: "what-happens-when-you-die",
    label: "What Happens When You Die",
  },
  {
    id: "find-lost-corpse",
    label: "Find a Lost Corpse",
  },
  {
    id: "drag-corpse",
    label: "Drag a Corpse",
  },
  {
    id: "spellbook",
    label: "Spellbook Recovery",
  },
  {
    id: "resurrection",
    label: "Resurrection",
  },
  {
    id: "after-recovering-corpse",
    label: "After Recovery",
  },
  {
    id: "expired-corpse",
    label: "Expired Corpse",
  },
  {
    id: "recovery-order",
    label: "Recovery Order",
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
    href: "/monsters-and-memories/tradeskills",
    label: "Tradeskills Guide",
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
        alt: "Monsters & Memories corpse recovery in Shaded Dunes using a locating ability",
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
          name: "Corpse Recovery",
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
        "Monsters & Memories Corpse Recovery Guide: Find Your Body",
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
          name: "Corpse Recovery",
        },
        {
          "@type": "Thing",
          name: "Locate Corpse",
        },
        {
          "@type": "Thing",
          name: "Corpse Dragging",
        },
        {
          "@type": "Thing",
          name: "Resurrection",
        },
        {
          "@type": "Thing",
          name: "Spellbook Recovery",
        },
        {
          "@type": "Thing",
          name: "Cantrips",
        },
        {
          "@type": "Thing",
          name: "Opportunistic Adventurer",
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
          title="Monsters & Memories Corpse Recovery Guide: Find Your Body"
          description={articleDescription}
          gameTitle="Monsters & Memories"
          gameHref="/monsters-and-memories"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MonstersMemoriesCorpseRecoveryContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}