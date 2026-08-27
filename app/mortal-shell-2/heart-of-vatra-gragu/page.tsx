import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HeartOfVatraGraguContent from "@/data/mortal-shell-2/heart-of-vatra-gragu.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/heart-of-vatra-gragu`;

const metadataTitle =
  "Mortal Shell 2 Heart of Vatra Location & Gragu Unlock";

const metadataDescription =
  "Find the Heart of Vatra, light all three Temple offerings, get Berserker's Stone, escape the sealed route, and return the Heart to unlock Gragu.";

const articleDescription =
  "Find the Heart of Vatra in Mortal Shell 2, reach the Temple of Vatra from One-Legged Wolf, collect the Synaptic Vessel, locate all three offerings, get Berserker's Stone, escape after the temple seals, and return the Heart to unlock Gragu.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-heart-of-vatra-altar.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-gragu-one-legged-wolf-tavern.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-jump-gate.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-synaptic-vessel.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-offering-left-chest.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-offering-statue-pillar.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-offering-brickwork.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-berserker-stone-vatra-chest.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-route-blocked-after-heart.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-temple-of-vatra-escape-route.webp`,
];

const toc = [
  {
    id: "heart-of-vatra-location",
    label: "Heart of Vatra location",
  },
  {
    id: "temple-of-vatra-route",
    label: "Route to Temple of Vatra",
  },
  {
    id: "before-taking-heart",
    label: "Before taking the Heart",
  },
  {
    id: "synaptic-vessel",
    label: "Synaptic Vessel location",
  },
  {
    id: "three-offerings",
    label: "Three offering locations",
  },
  {
    id: "berserkers-stone",
    label: "Get Berserker's Stone",
  },
  {
    id: "take-heart-of-vatra",
    label: "Take the Heart of Vatra",
  },
  {
    id: "temple-sealed-after-heart",
    label: "Temple sealed after Heart",
  },
  {
    id: "escape-temple",
    label: "Escape Temple of Vatra",
  },
  {
    id: "give-heart-to-gragu",
    label: "Unlock Gragu's Shell",
  },
  {
    id: "gragu-wont-unlock",
    label: "Troubleshooting",
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
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova, Gloom Siphon & Mether's Breath",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
  },
  {
    href: "/mortal-shell-2/achievements",
    label: "Achievements Guide",
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
      "Find the Heart of Vatra, solve all three Temple offerings, get Berserker's Stone, escape the sealed Temple of Vatra, and unlock Gragu.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Heart of Vatra held by the kneeling statue inside the Temple of Vatra in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Heart of Vatra location, all three Temple offerings, Berserker's Stone, sealed Temple escape route, and Gragu unlock.",
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
          name: "Heart of Vatra Location & Gragu Unlock",
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
        "Heart of Vatra Location, Temple Offerings & Gragu Unlock",
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
          name: "Temple of Vatra offerings",
        },
        {
          "@type": "Thing",
          name: "Berserker's Stone",
        },
        {
          "@type": "Thing",
          name: "Synaptic Vessel",
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
          title="Heart of Vatra Location, Temple Offerings & Gragu Unlock"
          description="Find the Heart of Vatra in the Temple of Vatra, collect the Synaptic Vessel and Berserker's Stone first, escape after the route seals, then return the Heart to Gragu to unlock his Shell."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
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