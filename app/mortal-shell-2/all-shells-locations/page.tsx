import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AllShellsLocationsContent from "@/data/mortal-shell-2/all-shells-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/all-shells-locations`;

const metadataTitle =
  "Mortal Shell 2 All Shell Locations & How to Unlock All 8";

const metadataDescription =
  "Find all 8 permanent Mortal Shell 2 Shell locations and unlock requirements for Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel.";

const articleDescription =
  "A complete Mortal Shell 2 Shell locations guide covering all eight permanent post-prologue Shells: Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel, including their locations, unlock requirements, route blockers, and which Shells are easiest to collect first.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tiel-location-graveyard.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-proxima-location-black-ridge-cliffs.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-smert-three-blood-pools.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-lazlo-royal-crypt-location.webp`,
];

const toc = [
  {
    id: "all-shell-locations",
    label: "All 8 Shell locations",
  },
  {
    id: "how-shell-unlocks-work",
    label: "How Shell unlocks work",
  },
  {
    id: "tiel",
    label: "Tiel location",
  },
  {
    id: "proxima",
    label: "Proxima location",
  },
  {
    id: "gragu",
    label: "Gragu location",
  },
  {
    id: "eredrim",
    label: "Eredrim location",
  },
  {
    id: "smert",
    label: "Smert location",
  },
  {
    id: "genessa",
    label: "Genessa location",
  },
  {
    id: "lazlo",
    label: "Lazlo location",
  },
  {
    id: "sariel",
    label: "Sariel location",
  },
  {
    id: "which-shell-first",
    label: "Which Shell to unlock first",
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
    href: "/mortal-shell-2/heart-of-vatra-gragu",
    label: "Heart of Vatra & Gragu",
  },
  {
    href: "/mortal-shell-2/how-to-unlock-eredrim",
    label: "How to Unlock Eredrim",
  },
  {
    href: "/mortal-shell-2/how-to-unlock-genessa",
    label: "How to Unlock Genessa",
  },
  {
    href: "/mortal-shell-2/sariel-boss-guide",
    label: "Sariel Boss & Unlock Guide",
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
      "Find Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel, with the route and unlock requirement for every permanent Shell.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tiel Shell location in the graveyard near Widow's Overlook in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "All 8 permanent Mortal Shell 2 Shell locations, unlock requirements, route blockers, and the easiest Shells to collect first.",
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
          name: "All Shell Locations",
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
        "Mortal Shell 2 All Shell Locations & How to Unlock All 8",
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
          name: "Mortal Shell 2 Shell locations",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 all Shells",
        },
        {
          "@type": "Thing",
          name: "How to unlock all Shells",
        },
        {
          "@type": "Thing",
          name: "Tiel",
        },
        {
          "@type": "Thing",
          name: "Proxima",
        },
        {
          "@type": "Thing",
          name: "Gragu",
        },
        {
          "@type": "Thing",
          name: "Eredrim",
        },
        {
          "@type": "Thing",
          name: "Smert",
        },
        {
          "@type": "Thing",
          name: "Genessa",
        },
        {
          "@type": "Thing",
          name: "Lazlo",
        },
        {
          "@type": "Thing",
          name: "Sariel",
        },
        {
          "@type": "Thing",
          name: "Harros",
        },
        {
          "@type": "Thing",
          name: "Fainweald",
        },
        {
          "@type": "Thing",
          name: "Mammon",
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
          title="Mortal Shell 2 All Shell Locations & How to Unlock All 8"
          description="I show where to find Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel, what each unlock actually requires, and which Shells are easiest to collect first."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AllShellsLocationsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}