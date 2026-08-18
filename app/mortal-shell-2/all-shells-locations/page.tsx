import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import AllShellsLocationsContent from "@/data/mortal-shell-2/all-shells-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/all-shells-locations`;

const metadataTitle =
  "Mortal Shell 2 All Shell Locations & Best Shells to Use";

const metadataDescription =
  "Find all 8 Mortal Shell 2 Shell locations, compare each playstyle, and see which early and late-game Shells are actually worth spending your Glimpses on.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-tiel-location-graveyard.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-proxima-location-black-ridge-cliffs.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-smert-three-blood-pools.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-lazlo-royal-crypt-location.webp`,
];

const toc = [
  {
    id: "before-spending-glimpses",
    label: "Before spending Glimpses",
  },
  {
    id: "harros",
    label: "Harros",
  },
  {
    id: "fainweald-shells",
    label: "Fainweald Shells",
  },
  {
    id: "tiel",
    label: "Tiel",
  },
  {
    id: "proxima",
    label: "Proxima",
  },
  {
    id: "gragu",
    label: "Gragu",
  },
  {
    id: "eredrim",
    label: "Eredrim",
  },
  {
    id: "smert",
    label: "Smert",
  },
  {
    id: "mammon-shells",
    label: "Mammon Shells",
  },
  {
    id: "genessa",
    label: "Genessa",
  },
  {
    id: "lazlo",
    label: "Lazlo",
  },
  {
    id: "sariel",
    label: "Sariel",
  },
  {
    id: "which-shell-first",
    label: "Which Shell I unlock first",
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
    title: "Mortal Shell 2 All Shell Locations & Which Shell to Use",
    description:
      "Find Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel, then decide which Shell is actually worth your Glimpses.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
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
    title: "Mortal Shell 2 All Shell Locations & Which Shell to Use",
    description:
      "Find all eight main Shells and decide which early, Fainweald, and Mammon unlocks are actually worth investing Glimpses in.",
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
        "Mortal Shell 2 All Shell Locations and Which Shells Are Worth Investing In",
      description:
        "A practical Mortal Shell 2 Shell guide covering all eight main post-prologue Shells: Tiel, Proxima, Gragu, Eredrim, Smert, Genessa, Lazlo, and Sariel. It explains where each Shell fits into Fainweald or Mammon progression, how expensive each unlock route is, the combat identity of each Shell, and when I think it is worth committing limited Glimpses instead of spreading resources across the entire roster.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
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
          name: "Mortal Shell 2 Shell locations",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 best Shell",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 which Shell to use",
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
          name: "Fainweald",
        },
        {
          "@type": "Thing",
          name: "Mammon",
        },
        {
          "@type": "Thing",
          name: "Glimpses",
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
          title="Every Mortal Shell 2 Shell I’d Actually Consider Building"
          description="I find all eight main Shells, compare what each one is good at, and decide which unlocks are worth the route and which deserve my limited Glimpses."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
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