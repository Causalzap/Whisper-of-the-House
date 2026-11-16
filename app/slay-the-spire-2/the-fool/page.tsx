
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheFoolContent from "@/data/slay-the-spire-2/the-fool.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/slay-the-spire-2/the-fool`;

const metadataTitle =
  "Slay the Spire 2 The Fool Guide: Arrows, Aim & Melody";

const metadataDescription =
  "Learn The Fool in Slay the Spire 2 with Arrow and Aim damage, Impaled, Melody, Motif, Sadness, Joy, and Wah Symphony builds.";

const articleTitle =
  "Slay the Spire 2 The Fool Guide: How Do Arrows, Melody & Sadness Work?";

const articleDescription =
  "Learn why an Impaled Arrow cannot be fired again immediately, how to spend Aim on powerful Shots, and when to build around Melody or Sadness. Compare early card rewards, Motif upgrades, and defensive options before committing to a combination.";

const imageUrls = [
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-fool-nock-aim-setup.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-fool-rapid-shot-aim-burst.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-fool-motif-upgrade.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-fool-sadness-ecstasy-conversion.webp`,
  `${siteUrl}/images/slay-the-spire-2/slay-the-spire-2-fool-wah-symphony-clone.webp`,
];

const toc = [
  {
    id: "arrows-aim-and-impaled",
    label: "Why another Arrow cannot fire",
  },
  {
    id: "first-card-rewards",
    label: "Choosing Act 1 card rewards",
  },
  {
    id: "arrow-aim-build",
    label: "Arrow and Aim damage",
  },
  {
    id: "melody-and-motif",
    label: "Melody and Motif builds",
  },
  {
    id: "sadness-joy-and-ecstasy",
    label: "Sadness, Joy and Ecstasy",
  },
  {
    id: "clone-vs-upgrade",
    label: "Clone or upgrade Wah Symphony?",
  },
  {
    id: "defense-bosses-and-dread",
    label: "Surviving difficult fights",
  },
  {
    id: "troubleshoot-build",
    label: "Why The Fool builds fail",
  },
];

const relatedLinks = [
  {
    href: "/slay-the-spire-2/beginner-guide",
    label: "Slay the Spire 2 Beginner Guide",
  },
  {
    href: "/slay-the-spire-2/ascension-guide",
    label: "Slay the Spire 2 Ascension Guide",
  },
  {
    href: "/slay-the-spire-2/blitz",
    label: "Slay the Spire 2 Blitz Mode Guide",
  },
  {
    href: "/slay-the-spire-2/dread",
    label: "Slay the Spire 2 Dread Mode Guide",
  },
  {
    href: "/slay-the-spire-2/aeonglass",
    label: "Slay the Spire 2 Aeonglass Boss Guide",
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
      "Build The Fool around Arrow attacks, Aim, Melody, or Sadness. Learn how Impaled works and when Motif or Wah Symphony is worth improving.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[1],
        alt: "The Fool preparing a high-damage Rapid Shot after stacking Aim in Slay the Spire 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Learn The Fool's Arrow, Aim, Impaled, Melody, Motif, Sadness, Joy, and Wah Symphony combinations.",
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
          name: "Slay the Spire 2 Guide",
          item: `${siteUrl}/slay-the-spire-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Slay the Spire 2 The Fool Guide",
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
        "Learn how to play The Fool in Slay the Spire 2. Use Aim to strengthen Arrow attacks, understand why an Impaled Arrow needs to be dislodged before firing again, choose early cards that keep the deck alive, build Melody combinations around Motif, convert Sadness into Joy with Ecstasy, and compare cloning or upgrading Wah Symphony. Prepare enough Block and Energy to survive dangerous encounters before the main damage combination is ready.",

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
          name: "The Fool",
        },
        {
          "@type": "Thing",
          name: "The Fool builds",
        },
      ],

      mentions: [
        { "@type": "Thing", name: "Arrow" },
        { "@type": "Thing", name: "Aim" },
        { "@type": "Thing", name: "Impaled" },
        { "@type": "Thing", name: "Nock" },
        { "@type": "Thing", name: "Rapid Shot" },
        { "@type": "Thing", name: "Melody" },
        { "@type": "Thing", name: "Motif" },
        { "@type": "Thing", name: "Sadness" },
        { "@type": "Thing", name: "Joy" },
        { "@type": "Thing", name: "Ecstasy" },
        { "@type": "Thing", name: "Wah Symphony" },
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
          <TheFoolContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
