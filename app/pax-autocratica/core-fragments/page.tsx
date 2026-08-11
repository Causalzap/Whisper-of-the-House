import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PaxAutocraticaCoreFragmentsContent from "@/data/pax-autocratica/core-fragments.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/pax-autocratica`;
const pageUrl = `${hubUrl}/core-fragments`;

const imageUrls = [
  `${siteUrl}/images/pax-autocratica/pax-autocratica-core-fragment-storage-pod.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-nebula-assault-rifle-core.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-electric-bouncer-split.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-electric-bouncer-range.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-extended-magazine-choice.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-core-fragments-reset.webp`,
];

export const metadata: Metadata = {
  title: "Pax Autocratica Core Fragments & Weapon Cores Guide",
  description:
    "Learn which Pax Autocratica Core Fragments fit your weapon, how duplicates work, what resets at base, and how Core Seeds affect future runs.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Pax Autocratica Core Fragments & Weapon Cores Guide",
    description:
      "Compare tested Core effects, build around your current weapon, understand duplicate upgrades, and see what resets when an expedition ends.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Pax Autocratica Core Fragment Collection with multiple expedition upgrade choices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pax Autocratica Core Fragments Guide",
    description:
      "See how Core Fragments, Weapon Cores, duplicates, Core Seeds and return-to-base resets work in Pax Autocratica.",
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
          name: "Pax Autocratica Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Core Fragments Guide",
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
      headline: "Pax Autocratica Core Fragments & Weapon Cores Guide",
      description:
        "A practical Pax Autocratica Core guide covering Core Fragments, Weapon Cores and Combination Core terminology, tested Nebula Assault Rifle, Electric Bouncer and Missile Core effects, duplicate Core upgrades, Extended Magazine versus Power Reload, return-to-base resets, Core Seeds, and how to choose upgrades around the weapon and expedition already in progress.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-11",
      dateModified: "2026-08-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Pax Autocratica",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica Core Fragments",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica Weapon Cores",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica Combination Cores",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica Core Seeds",
        },
        {
          "@type": "Thing",
          name: "Electric Bouncer Core",
        },
        {
          "@type": "Thing",
          name: "Missile Core",
        },
        {
          "@type": "Thing",
          name: "Nebula Assault Rifle",
        },
        {
          "@type": "Thing",
          name: "Extended Magazine",
        },
        {
          "@type": "Thing",
          name: "Power Reload",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Which Core Fragments Should You Take in Pax Autocratica?"
          description="Pick around the weapon you already have, stack Core effects that are carrying the run, and know exactly what disappears when you return to base."
          gameTitle="Pax Autocratica"
          gameHref="/pax-autocratica"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 11, 2026"
          toc={[
            {
              id: "what-core-fragments-do",
              label: "How Core Fragments work",
            },
            {
              id: "core-terminology",
              label: "Core terminology",
            },
            {
              id: "early-core-choices",
              label: "Early Core choices",
            },
            {
              id: "choose-for-current-weapon",
              label: "Pick for your weapon",
            },
            {
              id: "duplicate-core-upgrades",
              label: "Duplicate Core upgrades",
            },
            {
              id: "extended-magazine-power-reload",
              label: "Magazine vs Power Reload",
            },
            {
              id: "what-resets",
              label: "What resets at base",
            },
            {
              id: "core-seeds",
              label: "Core Seeds",
            },
            {
              id: "when-to-commit",
              label: "When to commit",
            },
            {
              id: "before-boss",
              label: "Cores before a boss",
            },
            {
              id: "my-core-rule",
              label: "My Core rule",
            },
          ]}
          relatedLinks={[
            {
              href: "/pax-autocratica",
              label: "Pax Autocratica Beginner Guide",
            },
            {
              href: "/pax-autocratica/elysia-walkthrough",
              label: "Elysia Walkthrough & Progression",
            },
            {
              href: "/pax-autocratica/mec-kong-boss-guide",
              label: "MEC-KONG 7X Boss Guide",
            },
            {
              href: "/pax-autocratica/capture-enemies-prisoners",
              label: "Capture Enemies & Convert Prisoners",
            },
          ]}
        >
          <PaxAutocraticaCoreFragmentsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}