import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import LiberationWalkthroughContent from "@/data/iron-nest/liberation-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/iron-nest`;
const pageUrl = `${hubUrl}/liberation-walkthrough`;

const metadataTitle =
  "Iron Nest Liberation Walkthrough: All 5 Infantry & AP Cache";

const metadataDescription =
  "Find all five Liberation infantry targets, complete the P4 recon flight, destroy the AP-only cache, avoid friendlies, and preserve minimum assets.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-liberation-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-liberation-first-three-targets.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-liberation-opening-firing-solutions.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-liberation-p4-recon-order.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-liberation-underground-cache-ap-solution.webp`,
];

const toc = [
  {
    id: "liberation-route",
    label: "Liberation route",
  },
  {
    id: "mark-new-iron-nest-position",
    label: "Mark the new Nest position",
  },
  {
    id: "locate-opening-infantry",
    label: "Find the first three infantry",
  },
  {
    id: "prepare-opening-firing-cards",
    label: "Prepare the opening shots",
  },
  {
    id: "destroy-first-three-infantry",
    label: "Destroy the first three",
  },
  {
    id: "p4-recon",
    label: "Complete the P4 recon",
  },
  {
    id: "destroy-underground-cache",
    label: "Destroy the AP cache",
  },
  {
    id: "find-final-two-infantry",
    label: "Find the final two infantry",
  },
  {
    id: "choose-h-or-ap-final-targets",
    label: "Choose H or AP",
  },
  {
    id: "prepare-final-two-guns",
    label: "Prepare both guns",
  },
  {
    id: "minimum-assets",
    label: "Protect minimum assets",
  },
  {
    id: "liberation-completion",
    label: "Complete Liberation",
  },
  {
    id: "liberation-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest",
    label: "Iron Nest Guide Hub",
  },
  {
    href: "/iron-nest/fire-and-light-walkthrough",
    label: "Fire and Light Walkthrough",
  },
  {
    href: "/iron-nest/counter-battery-mission",
    label: "Counter-Battery Walkthrough",
  },
  {
    href: "/iron-nest/iron-road-walkthrough",
    label: "Iron Road Walkthrough",
  },
  {
    href: "/iron-nest/siege-of-cartagena-walkthrough",
    label: "Siege of Cartagena Walkthrough",
  },
  {
    href: "/iron-nest/the-gorge-walkthrough",
    label: "The Gorge Walkthrough",
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
    title: "Iron Nest Liberation Walkthrough and AP Cache Guide",
    description:
      "Destroy the first three infantry, complete the required P4 overflight, use AP on the underground cache, and clear the final danger-close targets.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Liberation order requiring five hostile infantry units to be destroyed after the Nest is repositioned",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Liberation Walkthrough",
    description:
      "Find all five infantry, complete the P4 recon, destroy the underground AP cache, and protect friendlies during the final shots.",
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
          name: "Iron Nest Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Liberation Walkthrough",
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
        "Iron Nest Liberation Walkthrough: Five Infantry Targets, P4 Reconnaissance, Underground AP Cache, and Friendly Urban Fire",
      description:
        "A player-focused Iron Nest Liberation walkthrough explaining how to replace the old Iron Nest firing origin after repositioning, locate the first three infantry positions from the opening field reports, calculate three separate firing cards before purchasing ammunition, complete the required reconnaissance flight over P4, identify and destroy the underground AP-required supply cache, locate the final two infantry units in the friendly urban sector, choose H for the isolated target and AP for the danger-close target, prepare both guns, avoid friendly casualties, preserve the minimum-assets result, and wait for the sector-clear stand-down order.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
      articleSection: "Iron Nest Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Iron Nest Liberation",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Liberation walkthrough",
        },
        {
          "@type": "Thing",
          name: "Iron Nest five infantry targets",
        },
        {
          "@type": "Thing",
          name: "Iron Nest P4 reconnaissance",
        },
        {
          "@type": "Thing",
          name: "Iron Nest underground supply cache",
        },
        {
          "@type": "Thing",
          name: "Iron Nest AP required",
        },
        {
          "@type": "Thing",
          name: "Iron Nest final two infantry",
        },
        {
          "@type": "Thing",
          name: "Iron Nest friendly urban sector",
        },
        {
          "@type": "Thing",
          name: "Iron Nest danger-close AP shot",
        },
        {
          "@type": "Thing",
          name: "Iron Nest minimum assets",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Sector clear",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Clear Liberation Without Losing Friendlies or Wasting Assets"
          description="Find the first three infantry, use the issued P4 flight to reveal the underground cache, then choose H or AP for the final two targets inside the friendly urban sector."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 7, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <LiberationWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}