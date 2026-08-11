import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PaxAutocraticaGuideContent from "@/data/pax-autocratica/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/pax-autocratica`;

const imageUrls = [
  `${siteUrl}/images/pax-autocratica/pax-autocratica-four-titanite-command-center-repair.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-barracks-first-research.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-first-expedition-weapon-transfer.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-resource-transport-station.webp`,
];

export const metadata: Metadata = {
  title: "Pax Autocratica Beginner Guide & Early-Game Walkthrough",
  description:
    "Start Pax Autocratica with 4 Titanite, repair the Command Center, build the Barracks, launch your first expedition, and fix the right bottlenecks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Pax Autocratica Beginner Guide & Early-Game Walkthrough",
    description:
      "Follow the early build order from 4 Titanite to the first expedition, then use real colony bottlenecks to decide what to build and research next.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Pax Autocratica Command Center repair requiring four Titanite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pax Autocratica Beginner Guide",
    description:
      "The early route from 4 Titanite and the Command Center to the Barracks, first weapon, first expedition, and your next colony priorities.",
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
      headline: "Pax Autocratica Beginner Guide & Early-Game Walkthrough",
      description:
        "A practical Pax Autocratica beginner guide covering the opening 4 Titanite Command Center repair, Barracks research, the first expedition weapon, when to stop building and leave the base, what to bring home, how the first return determines the next colony priority, when to build the Resource Transport Station, how to choose research around real bottlenecks, and where to continue for Elysia progression, prisoners, work schedules, Core Fragments and MEC-KONG 7X.",
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
          name: "Pax Autocratica beginner guide",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica early game",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica walkthrough",
        },
        {
          "@type": "Thing",
          name: "Command Center",
        },
        {
          "@type": "Thing",
          name: "Barracks",
        },
        {
          "@type": "Thing",
          name: "Titanite",
        },
        {
          "@type": "Thing",
          name: "Resource Transport Station",
        },
        {
          "@type": "Thing",
          name: "Elysia",
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
          title="What I Build First in Pax Autocratica"
          description="Get the Command Center and Barracks online, launch the first expedition early, then let real colony problems decide what deserves your next resources."
          gameTitle="Pax Autocratica"
          gameHref="/pax-autocratica"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 11, 2026"
          toc={[
            {
              id: "first-priority",
              label: "Get 4 Titanite first",
            },
            {
              id: "research-barracks",
              label: "Research the Barracks",
            },
            {
              id: "first-expedition-weapon",
              label: "Equip the first weapon",
            },
            {
              id: "do-not-finish-base-first",
              label: "Do not finish the base first",
            },
            {
              id: "what-to-bring-home",
              label: "First expedition goals",
            },
            {
              id: "first-return",
              label: "What to build after returning",
            },
            {
              id: "what-to-research-next",
              label: "What to research next",
            },
            {
              id: "beginner-progress-checklist",
              label: "Early-game checklist",
            },
            {
              id: "when-to-leave-again",
              label: "When to leave again",
            },
            {
              id: "where-to-go-next",
              label: "Where to go next",
            },
            {
              id: "beginner-rule",
              label: "My beginner rule",
            },
          ]}
          relatedLinks={[
            {
              href: "/pax-autocratica/elysia-walkthrough",
              label: "Elysia Walkthrough & Progression",
            },
            {
              href: "/pax-autocratica/capture-enemies-prisoners",
              label: "Capture Enemies & Prisoners Guide",
            },
            {
              href: "/pax-autocratica/work-schedule",
              label: "Work Schedule & Overworked Soldiers",
            },
            {
              href: "/pax-autocratica/core-fragments",
              label: "Core Fragments & Weapon Cores Guide",
            },
            {
              href: "/pax-autocratica/mec-kong-boss-guide",
              label: "MEC-KONG 7X Boss Guide",
            },
          ]}
        >
          <PaxAutocraticaGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}