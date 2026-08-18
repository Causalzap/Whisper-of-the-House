import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HeartOfVatraGraguContent from "@/data/mortal-shell-2/heart-of-vatra-gragu.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/heart-of-vatra-gragu`;

const metadataTitle =
  "Mortal Shell 2 Heart of Vatra: Gragu & Berserker Stone";

const metadataDescription =
  "Unlock Gragu with the Heart of Vatra, solve the three-candle Temple puzzle, get Berserker's Stone first, and escape after the temple routes close.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-mushroom-village-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-gragu-one-legged-wolf-tavern.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-jump-gate.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-three-candles.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-berserker-stone-vatra-chest.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-heart-of-vatra-altar.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-sealed-after-heart.webp`,
];

const toc = [
  {
    id: "gragu-unlock-order",
    label: "Gragu unlock order",
  },
  {
    id: "why-gragu-wont-join",
    label: "Why Gragu won't join",
  },
  {
    id: "route-from-mushroom-village",
    label: "Route from Mushroom Village",
  },
  {
    id: "find-gragu",
    label: "Find Gragu",
  },
  {
    id: "reach-temple-of-vatra",
    label: "Reach Temple of Vatra",
  },
  {
    id: "do-not-take-heart-yet",
    label: "Do not take the Heart yet",
  },
  {
    id: "berserkers-stone-warning",
    label: "Get Berserker's Stone first",
  },
  {
    id: "three-candles",
    label: "Light the three candles",
  },
  {
    id: "take-heart-of-vatra",
    label: "Take the Heart of Vatra",
  },
  {
    id: "escape-temple",
    label: "Escape the temple",
  },
  {
    id: "return-heart-to-gragu",
    label: "Return the Heart to Gragu",
  },
  {
    id: "gragu-after-unlock",
    label: "After unlocking Gragu",
  },
  {
    id: "if-berserkers-stone-was-missed",
    label: "Missed Berserker's Stone?",
  },
  {
    id: "heart-of-vatra-route",
    label: "Full Heart of Vatra route",
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
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova & Gloom Siphon Guide",
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
    title:
      "Mortal Shell 2 Heart of Vatra: Gragu & Berserker's Stone Route",
    description:
      "Find Gragu, reach the Temple of Vatra, light all three candles, collect Berserker's Stone before the Heart, and escape after the temple changes.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[4],
        alt: "Berserker's Stone chest inside the Temple of Vatra in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mortal Shell 2 Heart of Vatra: Gragu & Berserker's Stone",
    description:
      "The safe Temple of Vatra order: light three candles, collect Berserker's Stone, then take the Heart and return it to Gragu.",
    images: [imageUrls[4]],
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
        "Mortal Shell 2 Heart of Vatra Guide: Gragu, Berserker's Stone and Temple of Vatra",
      description:
        "A practical Mortal Shell 2 Heart of Vatra guide covering how to find Gragu at the One-Legged Wolf, reach the Temple of Vatra from Mushroom Village, light all three candles, collect Berserker's Stone before taking the Heart, escape after the temple routes close, and return the Heart to unlock Gragu.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-08-18",
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
          name: "Gragu",
        },
        {
          "@type": "Thing",
          name: "Temple of Vatra",
        },
        {
          "@type": "Thing",
          name: "Berserker's Stone",
        },
        {
          "@type": "Thing",
          name: "One-Legged Wolf",
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
          title="How I Get the Heart of Vatra and Unlock Gragu"
          description="I find Gragu at the One-Legged Wolf, clear the three-candle reward before touching the Heart, then escape the changed temple and bring the Heart back."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
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