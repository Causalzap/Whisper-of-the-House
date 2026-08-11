import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PaxAutocraticaCaptureEnemiesPrisonersContent from "@/data/pax-autocratica/capture-enemies-prisoners.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/pax-autocratica`;
const pageUrl = `${hubUrl}/capture-enemies-prisoners`;

const imageUrls = [
  `${siteUrl}/images/pax-autocratica/pax-autocratica-capture-rounds-tutorial.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-heavy-enemy-captured.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-sniper-capture-target.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-prison-blueprint-research.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-prison-captive-conversion.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-prison-conversion-actions.webp`,
];

export const metadata: Metadata = {
  title: "Pax Autocratica Capture Enemies & Prisoners Guide",
  description:
    "Learn how Capture Rounds work, raise Capture Rate, build a Prison, find missing captives, and convert prisoners into workers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Pax Autocratica Capture Enemies & Prisoners Guide",
    description:
      "Use Capture Rounds correctly, understand Capture Rate, manage Prison capacity, and turn useful captives into colony workers.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Pax Autocratica Capture Rounds tutorial explaining how enemy capture works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Capture Enemies in Pax Autocratica",
    description:
      "Capture enemies, manage Prison space, find stored captives, and convert prisoners into useful workers.",
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
          name: "Capture Enemies & Prisoners",
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
      headline: "Pax Autocratica Capture Enemies & Prisoners Guide",
      description:
        "A practical Pax Autocratica capture and prisoner guide covering Capture Round controls, how target health and Capture Round quality affect Capture Rate, when I save or spend Capture Rounds, capturing stronger enemies, where captives go after an expedition, Prison research and capacity, temporary inventory storage, Willpower and Convictions, Indoctrination, Electroshock, and turning prisoners into useful colony workers.",
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
          name: "Pax Autocratica Capture Rounds",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica Capture Rate",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica prisoners",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica Prison",
        },
        {
          "@type": "Thing",
          name: "Willpower",
        },
        {
          "@type": "Thing",
          name: "Convictions",
        },
        {
          "@type": "Thing",
          name: "Indoctrination",
        },
        {
          "@type": "Thing",
          name: "Electroshock",
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
          title="How I Capture Enemies and Turn Prisoners Into Workers"
          description="Lower enemy health, watch Capture Rate, save scarce Capture Rounds for useful targets, then use Prison capacity and conversion actions to turn captives into colony labor."
          gameTitle="Pax Autocratica"
          gameHref="/pax-autocratica"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 11, 2026"
          toc={[
            {
              id: "how-to-capture-enemies",
              label: "How to capture enemies",
            },
            {
              id: "capture-rate",
              label: "How Capture Rate works",
            },
            {
              id: "which-enemies-to-capture",
              label: "Which enemies to capture",
            },
            {
              id: "can-you-capture-strong-enemies",
              label: "Capture stronger enemies?",
            },
            {
              id: "where-captives-go",
              label: "Where captives go",
            },
            {
              id: "build-prison",
              label: "Research and build Prison",
            },
            {
              id: "prison-capacity",
              label: "When Prison is full",
            },
            {
              id: "convert-prisoners",
              label: "Convert prisoners",
            },
            {
              id: "indoctrination-electroshock",
              label: "Indoctrination & Electroshock",
            },
            {
              id: "capture-round-management",
              label: "Manage Capture Rounds",
            },
            {
              id: "after-conversion",
              label: "After prisoners join",
            },
            {
              id: "my-capture-rule",
              label: "My capture rule",
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
              href: "/pax-autocratica/work-schedule",
              label: "Work Schedule & Overworked Soldiers",
            },
          ]}
        >
          <PaxAutocraticaCaptureEnemiesPrisonersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}