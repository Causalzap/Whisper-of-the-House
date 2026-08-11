import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PaxAutocraticaMecKongBossGuideContent from "@/data/pax-autocratica/mec-kong-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/pax-autocratica`;
const pageUrl = `${hubUrl}/mec-kong-boss-guide`;

const imageUrls = [
  `${siteUrl}/images/pax-autocratica/pax-autocratica-mec-kong-overlord-objective.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-mec-kong-laser-rifle.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-mec-kong-gatling-gun.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-mec-kong-heal-window.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-mec-kong-grenade-interrupt.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-mec-kong-defeated.webp`,
];

export const metadata: Metadata = {
  title: "Pax Autocratica MEC-KONG 7X Boss Guide",
  description:
    "Beat MEC-KONG 7X with safer heal timing, grenade openings, weapon choices, Gatling survival tips, and clear signs for when to return first.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Pax Autocratica MEC-KONG 7X Boss Guide",
    description:
      "See how I survived MEC-KONG 7X at 4/314 HP, handled its Gatling pressure, used grenades for openings, and finished Elysia.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "MEC-KONG 7X Level 10 using its Gatling gun in Pax Autocratica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Beat MEC-KONG 7X in Pax Autocratica",
    description:
      "A practical MEC-KONG 7X fight guide covering Gatling pressure, healing, grenades, weapon choice and the final Elysia clear.",
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
          name: "MEC-KONG 7X Boss Guide",
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
      headline: "Pax Autocratica MEC-KONG 7X Boss Guide",
      description:
        "A practical Pax Autocratica MEC-KONG 7X boss guide covering when to take the final Elysia fight or return first, useful weapon choices, the boss's sustained Gatling pressure, healing decisions after reaching Critical Health, grenade interruption windows, Core build preparation, Second Chance, the successful boss clear, and what happens after Elysia is secured.",
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
          name: "MEC-KONG 7X",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica boss",
        },
        {
          "@type": "Thing",
          name: "Elysia sector overlord",
        },
        {
          "@type": "Thing",
          name: "MEC-KONG 7X Level 10",
        },
        {
          "@type": "Thing",
          name: "Laser Rifle",
        },
        {
          "@type": "Thing",
          name: "Gatling gun",
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
          title="How I Beat MEC-KONG 7X Without Throwing Away the Final Elysia Run"
          description="Respect the Gatling pressure, heal before another burst becomes lethal, use your grenades, and bring the weapon and Core setup that already carried you to the boss."
          gameTitle="Pax Autocratica"
          gameHref="/pax-autocratica"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 11, 2026"
          toc={[
            {
              id: "how-to-reach-mec-kong",
              label: "How to reach MEC-KONG",
            },
            {
              id: "should-i-fight-now",
              label: "Fight now or return first?",
            },
            {
              id: "weapon-choice",
              label: "Weapon choice",
            },
            {
              id: "gatling-gun",
              label: "Survive the Gatling gun",
            },
            {
              id: "heal-before-critical",
              label: "When to heal",
            },
            {
              id: "use-grenades",
              label: "Use grenades",
            },
            {
              id: "core-build",
              label: "Core build",
            },
            {
              id: "second-chance",
              label: "Second Chance",
            },
            {
              id: "how-i-finish",
              label: "How I finish the fight",
            },
            {
              id: "after-mec-kong",
              label: "After MEC-KONG",
            },
          ]}
          relatedLinks={[
            {
              href: "/pax-autocratica/elysia-walkthrough",
              label: "Elysia Walkthrough & Progression",
            },
            {
              href: "/pax-autocratica/core-fragments",
              label: "Core Fragments & Weapon Cores Guide",
            },
            {
              href: "/pax-autocratica",
              label: "Pax Autocratica Beginner Guide",
            },
          ]}
        >
          <PaxAutocraticaMecKongBossGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}