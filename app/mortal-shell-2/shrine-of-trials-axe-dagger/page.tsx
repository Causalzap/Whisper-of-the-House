import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ShrineOfTrialsAxeDaggerContent from "@/data/mortal-shell-2/shrine-of-trials-axe-dagger.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/shrine-of-trials-axe-dagger`;

const metadataTitle =
  "Mortal Shell 2 Axe & Dagger: Shrine of Trials & Chapel Key";

const metadataDescription =
  "Find the Axe & Dagger in Mortal Shell 2 by using the hidden archway, getting the Chapel Key, and clearing the Shrine of Trials.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-mushroom-village-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-hidden-archway.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-chapel-key-hidden-statue.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-shrine-of-trials-king-inscription.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-shrine-reward.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-axe-dagger-duality.webp`,
];

const toc = [
  {
    id: "axe-dagger-route",
    label: "Axe & Dagger route",
  },
  {
    id: "why-i-couldnt-reach-axe-dagger",
    label: "Why the map marker fails",
  },
  {
    id: "hidden-archway",
    label: "Find the hidden archway",
  },
  {
    id: "chapel-key",
    label: "Get the Chapel Key",
  },
  {
    id: "shrine-of-trials",
    label: "Enter Shrine of Trials",
  },
  {
    id: "inside-shrine",
    label: "Clear the Shrine",
  },
  {
    id: "axe-dagger-location",
    label: "Axe & Dagger location",
  },
  {
    id: "test-before-upgrading",
    label: "Test it before upgrading",
  },
  {
    id: "duality",
    label: "Duality upgrade",
  },
  {
    id: "worth-getting-early",
    label: "Is it worth getting early?",
  },
  {
    id: "axe-dagger-route-summary",
    label: "Route summary",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
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
    title: "Mortal Shell 2 Axe & Dagger: Hidden Shrine of Trials Route",
    description:
      "Start from Mushroom Village, walk through the hidden archway and statue, get the Chapel Key, and clear the Shrine of Trials for the Axe & Dagger.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[1],
        alt: "Hidden archway leading toward the Chapel Key and Axe and Dagger in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Axe & Dagger: Shrine of Trials Route",
    description:
      "The hidden route from Mushroom Village to the Chapel Key, Shrine of Trials, and Axe & Dagger reward.",
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
        "Mortal Shell 2 Axe & Dagger Guide: Chapel Key and Shrine of Trials Route",
      description:
        "A practical Mortal Shell 2 Axe & Dagger location guide covering the route from Mushroom Village, the illusory archway and hidden statue, the Chapel Key, Shrine of Trials encounters, the weapon pickup, Duality, and whether the early detour is worth doing.",
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
          name: "Axe & Dagger",
        },
        {
          "@type": "Thing",
          name: "Shrine of Trials",
        },
        {
          "@type": "Thing",
          name: "Chapel Key",
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
          title="How I Find the Axe & Dagger in Shrine of Trials"
          description="I stop chasing the weapon marker, walk through the hidden archway and statue near Mushroom Village, get the Chapel Key, and clear the Shrine for the Axe & Dagger."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
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