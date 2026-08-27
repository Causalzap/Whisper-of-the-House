import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ShrineOfTrialsAxeDaggerContent from "@/data/mortal-shell-2/shrine-of-trials-axe-dagger.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/shrine-of-trials-axe-dagger`;

const metadataTitle =
  "Mortal Shell 2 Axe & Dagger Location & Shrine of Trials Puzzle";

const metadataDescription =
  "Find the Chapel Key near Mushroom Village, solve every Shrine of Trials puzzle, defeat the final enemy, and get the Axe & Dagger in Mortal Shell 2.";

const articleDescription =
  "A complete Mortal Shell 2 Axe and Dagger location guide covering the full-release route from Mushroom Village, the illusory stone arch, Chapel Key, Shrine of Trials secret wall, first pillar puzzle, two-pillar pressure plate puzzle, final enemy, Axe and Dagger reward, Duality, and whether the early detour is worth doing.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-mushroom-village-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-hidden-archway.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-chapel-key-hidden-statue.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-shrine-of-trials-king-inscription.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-shrine-of-trials-first-pillar-puzzle.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-shrine-of-trials-second-pillar-puzzle.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-shrine-reward.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-duality.webp`,
];

const toc = [
  {
    id: "axe-dagger-location",
    label: "Axe & Dagger location",
  },
  {
    id: "chapel-key",
    label: "Chapel Key location",
  },
  {
    id: "shrine-of-trials",
    label: "Enter Shrine of Trials",
  },
  {
    id: "shrine-first-puzzle",
    label: "Secret wall puzzle",
  },
  {
    id: "shrine-second-puzzle",
    label: "Pillar puzzles",
  },
  {
    id: "inside-shrine",
    label: "Final Shrine enemy",
  },
  {
    id: "axe-dagger-reward",
    label: "Get the Axe & Dagger",
  },
  {
    id: "duality",
    label: "Duality upgrade",
  },
  {
    id: "worth-getting-early",
    label: "Worth getting early?",
  },
  {
    id: "shrine-troubleshooting",
    label: "Shrine troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Weapon Tier List",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/heart-of-vatra-gragu",
    label: "Heart of Vatra & Gragu",
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
    description:
      "Get the Chapel Key near Mushroom Village, solve the Shrine of Trials secret wall and pillar puzzles, then defeat the final enemy and claim the Axe & Dagger.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
    images: [
      {
        url: imageUrls[6],
        width: 1600,
        height: 900,
        alt: "Axe and Dagger reward at the end of the Shrine of Trials in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Chapel Key location, Shrine of Trials puzzle solutions, full-release Axe & Dagger route, final enemy, and Duality.",
    images: [imageUrls[6]],
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Axe & Dagger and Shrine of Trials",
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
        "Mortal Shell 2 Axe & Dagger Location & Shrine of Trials Puzzle",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Axe & Dagger",
        },
        {
          "@type": "Thing",
          name: "Axe & Dagger location",
        },
        {
          "@type": "Thing",
          name: "How to get Axe & Dagger",
        },
        {
          "@type": "Thing",
          name: "Shrine of Trials",
        },
        {
          "@type": "Thing",
          name: "Shrine of Trials puzzle",
        },
        {
          "@type": "Thing",
          name: "Shrine of Trials secret wall",
        },
        {
          "@type": "Thing",
          name: "Shrine of Trials pillar puzzle",
        },
        {
          "@type": "Thing",
          name: "Chapel Key",
        },
        {
          "@type": "Thing",
          name: "Chapel Key location",
        },
        {
          "@type": "Thing",
          name: "Mushroom Village",
        },
        {
          "@type": "Thing",
          name: "Duality",
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

export default function Page() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Axe & Dagger Location, Chapel Key & Shrine of Trials Puzzle"
          description="I start from Mushroom Village, get the Chapel Key through the illusory arch, solve the Shrine of Trials secret wall and pillar puzzles, defeat the final enemy, and collect the Axe & Dagger."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ShrineOfTrialsAxeDaggerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}