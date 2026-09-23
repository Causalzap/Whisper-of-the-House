import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantHedronLinkContent from "@/data/control-resonant/hedron-link.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/hedron-link`;

const metadataTitle =
  "CONTROL Resonant Hedron Link Guide: Balloons & Probe Relays";

const metadataDescription =
  "Sever the Hedron Links, use research balloons and Probe Relays, cross Pattern bridges, and handle Dylan's Hiss reactions during the final route.";

const articleDescription =
  "Rescue Pope, reach the Hedron Links, use research balloons and Probe Relays to reshape the Pattern, cross the new routes, and keep severing the Hedron's connections.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-hedron-final-objective.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-hedron-first-link-severed.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-hedron-link-research-balloon.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "rescue-pope",
    label: "Rescue Pope",
  },
  {
    id: "first-link",
    label: "First Hedron Link",
  },
  {
    id: "why-links-matter",
    label: "Why severing Links matters",
  },
  {
    id: "research-balloon",
    label: "Research balloons",
  },
  {
    id: "bridge-route",
    label: "Pattern bridge route",
  },
  {
    id: "next-link",
    label: "Finding the next Link",
  },
  {
    id: "hiss-reaction",
    label: "Dylan's Hiss reaction",
  },
  {
    id: "hedron-link-blocked",
    label: "Blocked Hedron Link routes",
  },
  {
    id: "before-final-approach",
    label: "Final approach",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
  },
  {
    href: "/control-resonant/co-director",
    label: "Co-Director Boss Guide",
  },
  {
    href: "/control-resonant/quests",
    label: "Main Missions & Side Stories",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hedron Link",
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
        "CONTROL Resonant Hedron Link Guide: Balloons & Probe Relays",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-23",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Hedron Link",
        },
        {
          "@type": "Thing",
          name: "Sever the Hedron Links",
        },
        {
          "@type": "Thing",
          name: "Hedron",
        },
        {
          "@type": "Thing",
          name: "Research balloons",
        },
        {
          "@type": "Thing",
          name: "Probe Relays",
        },
        {
          "@type": "Thing",
          name: "Pattern bridge",
        },
        {
          "@type": "Thing",
          name: "Oldest House",
        },
        {
          "@type": "Thing",
          name: "Dylan Faden",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="CONTROL Resonant Hedron Link Walkthrough: Balloons & Probe Relays"
          description="Rescue Pope, sever the Hedron Links, use research balloons and Probe Relays to reshape the Pattern, and follow each new route toward the Hedron."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantHedronLinkContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}