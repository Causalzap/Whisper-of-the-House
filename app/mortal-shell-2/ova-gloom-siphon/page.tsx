import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import OvaGloomSiphonContent from "@/data/mortal-shell-2/ova-gloom-siphon.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/ova-gloom-siphon`;

const metadataTitle =
  "Mortal Shell 2 Ova & Gloom Siphon: Mether's Breath Guide";

const metadataDescription =
  "Learn how Ova, the Gloom Siphon and Mether's Breath work in Mortal Shell 2, including blocked corruption paths, cleansing routes and fast travel.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-path-blocked-by-corruption.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-unblemished-ova-objective.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-gloom-siphon-milos.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-methers-breath-unlocked.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-cleanse-corruption-path.webp`,
];

const toc = [
  {
    id: "blocked-by-corruption",
    label: "Path blocked by corruption",
  },
  {
    id: "unblemished-ova",
    label: "Unblemished Ova",
  },
  {
    id: "gloom-siphon",
    label: "Gloom Siphon",
  },
  {
    id: "methers-breath",
    label: "Mether's Breath",
  },
  {
    id: "when-to-return",
    label: "When I return to blocked paths",
  },
  {
    id: "when-i-prioritize-ova",
    label: "When I prioritize Ova",
  },
  {
    id: "methers-breath-vs-pulse",
    label: "Mether's Breath vs Pulse",
  },
  {
    id: "what-i-do-when-stuck",
    label: "What I check when stuck",
  },
  {
    id: "why-ova-matters",
    label: "Why Ova progression matters",
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
    href: "/mortal-shell-2/how-to-unlock-eredrim",
    label: "How to Unlock Eredrim",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
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
    title: "Mortal Shell 2 Ova, Gloom Siphon & Mether's Breath",
    description:
      "See what I do when corruption blocks a route, how Ova progress the Gloom Siphon, and when Mether's Breath lets me return and open the path.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Path blocked by corruption message in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Ova, Gloom Siphon & Mether's Breath",
    description:
      "Fix blocked corruption routes by progressing Ova, the Gloom Siphon and Mether's Breath, then return through your revitalized beacon network.",
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
          name: "Ova & Gloom Siphon",
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
        "Mortal Shell 2 Ova, Gloom Siphon and Mether's Breath Guide",
      description:
        "A practical Mortal Shell 2 progression-blocker guide explaining what to do when a path is blocked by corruption, how Unblemished Ova advance the Gloom Siphon at Marrow Keep, how Mether's Breath unlocks travel between revitalized beacons and corruption cleansing, when I return to previously inaccessible routes, and how I distinguish Mether's Breath from Mether's Pulse.",
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
          name: "Mortal Shell 2 Ova",
        },
        {
          "@type": "Thing",
          name: "Unblemished Ova",
        },
        {
          "@type": "Thing",
          name: "Gloom Siphon",
        },
        {
          "@type": "Thing",
          name: "Mether's Breath",
        },
        {
          "@type": "Thing",
          name: "Mether's Pulse",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 corruption",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 blocked by corruption",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 fast travel",
        },
        {
          "@type": "Thing",
          name: "Revitalized Beacons",
        },
        {
          "@type": "Thing",
          name: "Marrow Keep",
        },
        {
          "@type": "Thing",
          name: "Milos",
        },
        {
          "@type": "Thing",
          name: "Gloomshade Grove",
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
          title="What I Do When Corruption Blocks My Route"
          description="I stop searching for hidden doors, progress the Unblemished Ova through the Gloom Siphon, then return once Mether's Breath can clear the route."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <OvaGloomSiphonContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}