import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HeartOfVatraGraguContent from "@/data/mortal-shell-2/heart-of-vatra-gragu.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/heart-of-vatra-gragu`;

const metadataTitle =
  "Mortal Shell 2 Heart of Vatra & Gragu Unlock Guide";

const metadataDescription =
  "Find the Heart of Vatra, reach the Temple of Vatra, get Berserker's Stone first, escape after taking the Heart, and unlock Gragu.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-heart-of-vatra-altar.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-gragu-one-legged-wolf-tavern.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-jump-gate.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-three-candles.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-berserker-stone-vatra-chest.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-sealed-after-heart.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-mushroom-village-beacon.webp`,
];

const toc = [
  {
    id: "heart-of-vatra-location",
    label: "Heart of Vatra location",
  },
  {
    id: "how-to-unlock-gragu",
    label: "How to unlock Gragu",
  },
  {
    id: "find-gragu",
    label: "Where to find Gragu",
  },
  {
    id: "route-from-mushroom-village",
    label: "Route from Mushroom Village",
  },
  {
    id: "temple-of-vatra",
    label: "Reach Temple of Vatra",
  },
  {
    id: "before-taking-heart",
    label: "Before taking the Heart",
  },
  {
    id: "three-offerings",
    label: "Three offerings",
  },
  {
    id: "berserkers-stone",
    label: "Get Berserker's Stone",
  },
  {
    id: "take-heart-of-vatra",
    label: "Take Heart of Vatra",
  },
  {
    id: "temple-seals",
    label: "Why the temple seals",
  },
  {
    id: "escape-temple",
    label: "Escape Temple of Vatra",
  },
  {
    id: "what-to-do-with-heart",
    label: "What to do with the Heart",
  },
  {
    id: "give-heart-to-gragu",
    label: "Give the Heart to Gragu",
  },
  {
    id: "gragu-abilities",
    label: "Gragu abilities",
  },
  {
    id: "gragu-wont-unlock",
    label: "Gragu not unlocking",
  },
  {
    id: "heart-before-berserkers-stone",
    label: "Heart before Berserker's Stone?",
  },
  {
    id: "is-heart-missable",
    label: "Is Heart of Vatra missable?",
  },
  {
    id: "heart-of-vatra-route",
    label: "Route recap",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Tier List",
  },
  {
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova, Gloom Siphon & Mether's Breath",
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
      "Find the Heart of Vatra, solve the three-offering chest, collect Berserker's Stone, escape the Temple of Vatra, and unlock Gragu.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-22",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Heart of Vatra on the altar inside the Temple of Vatra in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Heart of Vatra location, Temple of Vatra route, Berserker's Stone warning, and the full Gragu unlock sequence.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Heart of Vatra & Gragu",
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
        "Mortal Shell 2 Heart of Vatra & Gragu Unlock Guide",
      description:
        "A complete Mortal Shell 2 Heart of Vatra guide covering the Temple of Vatra route, Gragu the Insatiable, the three offerings, Berserker's Stone, what changes after taking the Heart, how to escape the temple, and how to unlock Gragu.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-22",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Heart of Vatra",
        },
        {
          "@type": "Thing",
          name: "Heart of Vatra location",
        },
        {
          "@type": "Thing",
          name: "Temple of Vatra",
        },
        {
          "@type": "Thing",
          name: "Gragu the Insatiable",
        },
        {
          "@type": "Thing",
          name: "Gragu unlock",
        },
        {
          "@type": "Thing",
          name: "One-Legged Wolf",
        },
        {
          "@type": "Thing",
          name: "Berserker's Stone",
        },
        {
          "@type": "Thing",
          name: "Temple of Vatra three offerings",
        },
        {
          "@type": "Thing",
          name: "Mushroom Village",
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
          title="Mortal Shell 2 Heart of Vatra & Gragu Unlock Guide"
          description="I find Gragu at the One-Legged Wolf, reach the Temple of Vatra, collect Berserker's Stone before taking the Heart, then escape and bring it back to unlock his Shell."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HeartOfVatraGraguContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}