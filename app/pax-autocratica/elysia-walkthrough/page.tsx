import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PaxAutocraticaElysiaWalkthroughContent from "@/data/pax-autocratica/elysia-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/pax-autocratica`;
const pageUrl = `${hubUrl}/elysia-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/pax-autocratica/pax-autocratica-first-elysia-expedition.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-expedition-progress-enemy-strength.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-return-to-base-100-percent.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-first-decisive-battle-unlocked.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-second-decisive-battle-unlocked.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-elysia-sector-overlord-unlocked.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-elysia-secured.webp`,
];

export const metadata: Metadata = {
  title: "Pax Autocratica Elysia Walkthrough & Progression Guide",
  description:
    "Follow Elysia from your first expedition through 100% progress, both Decisive Battles, MEC-KONG 7X and the final sector clear.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Pax Autocratica Elysia Walkthrough & Progression Guide",
    description:
      "See when to keep pushing, when to return to base, how 100% Expedition Progress works, and what actually finishes Elysia.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Pax Autocratica Elysia at 100 percent Expedition Progress with Return to Base still available",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pax Autocratica Elysia Walkthrough",
    description:
      "Progress through Elysia without overextending: return timing, 100% progress, Decisive Battles, MEC-KONG 7X and sector completion.",
    images: [imageUrls[2]],
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
          name: "Elysia Walkthrough",
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
      headline: "Pax Autocratica Elysia Walkthrough & Progression Guide",
      description:
        "A practical Pax Autocratica Elysia progression walkthrough covering the first sector expedition, Expedition Progress versus Enemy Strength, when to return to base, what happens at 100% progress, the first and second Decisive Battles, the final interstellar blockade, MEC-KONG 7X, Elysia sector completion, and what to prepare before moving into the next sector.",
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
          name: "Pax Autocratica Elysia",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica walkthrough",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica progression",
        },
        {
          "@type": "Thing",
          name: "Expedition Progress",
        },
        {
          "@type": "Thing",
          name: "Enemy Strength",
        },
        {
          "@type": "Thing",
          name: "Decisive Battle",
        },
        {
          "@type": "Thing",
          name: "MEC-KONG 7X",
        },
        {
          "@type": "Thing",
          name: "Second Chance State-Issued",
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
          title="How I Progress Through Elysia Without Throwing Away a Good Run"
          description="Push the sector while the run is efficient, return before Enemy Strength turns greed into a bad trade, then use each Decisive Battle to prepare for the next progression gate."
          gameTitle="Pax Autocratica"
          gameHref="/pax-autocratica"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 11, 2026"
          toc={[
            {
              id: "first-expedition",
              label: "First Elysia expedition",
            },
            {
              id: "when-to-return",
              label: "When to return",
            },
            {
              id: "100-percent-progress",
              label: "At 100% progress",
            },
            {
              id: "stabilize-base",
              label: "Strengthen the base",
            },
            {
              id: "reach-first-decisive-battle",
              label: "First Decisive Battle",
            },
            {
              id: "first-decisive-battle",
              label: "After the first battle",
            },
            {
              id: "second-decisive-battle",
              label: "Second Decisive Battle",
            },
            {
              id: "sector-overlord",
              label: "MEC-KONG 7X",
            },
            {
              id: "after-elysia",
              label: "After securing Elysia",
            },
          ]}
          relatedLinks={[
            {
              href: "/pax-autocratica",
              label: "Pax Autocratica Beginner Guide",
            },
            {
              href: "/pax-autocratica/capture-enemies-prisoners",
              label: "Capture Enemies & Convert Prisoners",
            },
            {
              href: "/pax-autocratica/core-fragments",
              label: "Core Fragments & Weapon Cores Guide",
            },
            {
              href: "/pax-autocratica/mec-kong-boss-guide",
              label: "MEC-KONG 7X Boss Guide",
            },
            {
              href: "/pax-autocratica/work-schedule",
              label: "Work Schedule & Overworked Soldiers",
            },
          ]}
        >
          <PaxAutocraticaElysiaWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}