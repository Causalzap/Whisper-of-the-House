
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GravhoundsBeginnerContent from "@/data/gravhounds/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gravhounds`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Gravhounds Beginner Guide: First Shift & Extraction";

const metadataDescription =
  "Complete your first Gravhounds shift: connect Pipelines, build a Fabricator, mine Titanium, place and repair Turrets, and survive Launch Prep.";

const articleTitle =
  "Gravhounds Beginner Guide: How to Complete Your First Shift";

const articleDescription =
  "Complete your first shift in Gravhounds from the Holo Table to extraction. Connect the Collector Pipeline, place a Fabricator on a valid build node, mine and deliver Titanium, purchase and position a Turret, use Drone View, repair defenses with the Mining Laser, and survive Launch Prep before boarding. Then complete your first Research Lab Turret unlock.";

const imageUrls = [
  `${siteUrl}/images/gravhounds/gravhounds-first-shift-fabricator-placement.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-titanium-mining-objective.webp`,
  `${siteUrl}/images/gravhounds/gravhounds-launch-prep-underway.webp`,
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
      "Finish your first Gravhounds shift with Pipeline and Fabricator placement, Titanium delivery, Turret defense, and safe extraction.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Gravhounds first shift Fabricator placement showing the highlighted Pipeline build node and assembly objective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Build your first Gravhounds base, mine Titanium, defend the Collector, and finish Launch Prep.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "start-first-shift",
    label: "Start Your First Shift",
  },
  {
    id: "pipeline-fabricator",
    label: "Pipeline & Fabricator",
  },
  {
    id: "mining-resources",
    label: "Mine & Deliver Titanium",
  },
  {
    id: "first-turret",
    label: "Build & Repair Turrets",
  },
  {
    id: "launch-prep",
    label: "Launch Prep & Extraction",
  },
  {
    id: "first-research",
    label: "First Research Lab Unlock",
  },
];

const relatedLinks = [
  {
    href: "/gravhounds",
    label: "Gravhounds Guide: Progression, Missions & Blueprints",
  },
  {
    href: "/gravhounds/mod-deck-builder",
    label: "Gravhounds Mod Deck Builder: Unlock & Edit Mods",
  },
];

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
          name: "Gravhounds",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      about: [
        {
          "@type": "VideoGame",
          name: "GRAVHOUNDS",
        },
        {
          "@type": "Thing",
          name: "First Shift tutorial",
        },
        {
          "@type": "Thing",
          name: "Pipeline and Fabricator placement",
        },
        {
          "@type": "Thing",
          name: "Titanium mining and resource delivery",
        },
        {
          "@type": "Thing",
          name: "Turret construction and repairs",
        },
        {
          "@type": "Thing",
          name: "Drone View and enemy defense",
        },
        {
          "@type": "Thing",
          name: "Launch Prep and extraction",
        },
        {
          "@type": "Thing",
          name: "Initial Research Lab unlock",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description="Connect your first Pipeline, build a Fabricator, mine Titanium, defend the Collector, and finish Launch Prep before your first Research Lab unlock."
          gameTitle="GRAVHOUNDS"
          gameHref="/gravhounds"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GravhoundsBeginnerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
