
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AeonglassContent from "@/data/slay-the-spire-2/aeonglass.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/aeonglass`;

const metadataTitle =
  "Slay the Spire 2 Aeonglass Boss Guide: Wither & Attacks";

const metadataDescription =
  "Beat Aeonglass in Slay the Spire 2. Learn its Ebb and Eye Lasers pattern, Wither triggers, discard and Exhaust counters, and three Artifact charges.";

const articleTitle =
  "Slay the Spire 2 Aeonglass: How Do You Beat Wither and Survive Its Attacks?";

const articleDescription =
  "Aeonglass adds a Wither after every six cards played and strengthens its attacks as the fight continues. Learn the Ebb, Eye Lasers, and Increasing Intensity cycle, how to remove Withers, and why Artifact can prevent your important debuffs.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-aeonglass-wither-card-trigger.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-aeonglass-wither-end-turn-damage.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-aeonglass-silent-expose-artifact.webp`,
];

const toc = [
  {
    id: "aeonglass-pattern",
    label: "Aeonglass attack pattern",
  },
  {
    id: "wither-mechanics",
    label: "Wither and Withering Presence",
  },
  {
    id: "discard-exhaust-wither",
    label: "Discard vs Exhaust for Wither",
  },
  {
    id: "artifact-debuffs",
    label: "Removing Aeonglass's Artifact",
  },
  {
    id: "fool-aeonglass",
    label: "The Fool: Sadness and Melody",
  },
  {
    id: "defect-aeonglass",
    label: "Defect: Finishing Aeonglass",
  },
  {
    id: "late-fight-failure",
    label: "Why long fights become dangerous",
  },
  {
    id: "dread-aeonglass",
    label: "Aeonglass in Dread Mode",
  },
  {
    id: "aeonglass-troubleshooting",
    label: "Why Aeonglass runs fail",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/dread",
    label: "Slay the Spire 2 Dread Mode Guide",
  },
  {
    href: "/slay-the-spire-2/blitz",
    label: "Slay the Spire 2 Blitz Mode Guide",
  },
  {
    href: "/slay-the-spire-2/the-fool",
    label: "Slay the Spire 2 The Fool Guide",
  },
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
  },
  {
    href: "/slay-the-spire-2",
    label: "Slay the Spire 2 Guide",
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
    description:
      "Survive Aeonglass's Ebb and Eye Lasers, count six-card Wither triggers, remove Artifact, and defeat the boss before Increasing Intensity becomes overwhelming.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        alt: "Aeonglass's Withering Presence generating Wither after six cards played in Slay the Spire 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Beat Aeonglass by counting Wither triggers, using discard or Exhaust, removing Artifact, and preparing for Ebb and Eye Lasers.",
    images: [imageUrls[0]],
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
          name: "Slay the Spire 2 Guide",
          item: `${siteUrl}/slay-the-spire-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Slay the Spire 2 Aeonglass Boss Guide",
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

      headline: articleTitle,

      description:
        "Learn how to defeat Aeonglass, an Act 3 boss in Slay the Spire 2. Survive its Ebb and Eye Lasers attacks, respond to Increasing Intensity, and count the six-card trigger from Withering Presence. Remove Wither Status cards through discard or Exhaust when possible, avoid excessive end-turn damage, and clear Aeonglass's three Artifact charges before relying on Weak, Vulnerable, Poison, or Doom. Understand why long fights become increasingly dangerous and how Aeonglass's Dread Dominion differs from its normal boss ability.",

      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-11-16",
      articleSection: "Slay the Spire 2 Guides",

      about: [
        {
          "@type": "VideoGame",
          name: "Slay the Spire 2",
        },
        {
          "@type": "Thing",
          name: "Aeonglass",
        },
        {
          "@type": "Thing",
          name: "Aeonglass boss fight",
        },
      ],

      mentions: [
        { "@type": "Thing", name: "Withering Presence" },
        { "@type": "Thing", name: "Wither" },
        { "@type": "Thing", name: "Artifact" },
        { "@type": "Thing", name: "Ebb" },
        { "@type": "Thing", name: "Eye Lasers" },
        { "@type": "Thing", name: "Increasing Intensity" },
        { "@type": "Thing", name: "Expose+" },
        { "@type": "Thing", name: "Discard" },
        { "@type": "Thing", name: "Exhaust" },
        { "@type": "Thing", name: "Dread Dominion" },
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Slay the Spire 2"
          gameHref="/slay-the-spire-2"
          updatedAt="November 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AeonglassContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
