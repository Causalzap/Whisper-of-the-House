import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PenthouseLayoutGuideContent from "@/data/hozy/penthouse-layout-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/guides/hozy/penthouse-layout-guide`;

export const metadata: Metadata = {
  title: "Hozy Penthouse Layout Guide: How to Balance the Big Room",
  description:
    "Penthouse feeling messy? This guide explains how to anchor furniture, zone your space, and create a perfectly balanced room without a strict walkthrough.",
  alternates: {
    canonical: pageUrl,
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
          name: "Guides",
          item: `${siteUrl}/guides`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hozy",
          item: `${siteUrl}/guides/hozy`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hozy Penthouse Layout Guide",
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
      headline: "Hozy Penthouse Layout Guide: How to Keep the Room Balanced",
      description:
        "The Penthouse is one of the hardest Hozy levels to lay out well. This page is not a full walkthrough. It focuses on why the room gets messy so easily, how to build the layout in zones, and how to keep the final result balanced instead of cluttered.",
        image: [
            `${siteUrl}/images/hozy/penthouse/penthouse-overview.webp`,
            `${siteUrl}/images/hozy/penthouse/penthouse-cluttered-layout.webp`,
            `${siteUrl}/images/hozy/penthouse/penthouse-large-items-first.webp`,
            `${siteUrl}/images/hozy/penthouse/penthouse-balanced-finish.webp`,
          ],  
      inLanguage: "en",
      dateModified: "2026-04-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Hozy",
        },
        {
          "@type": "Thing",
          name: "Penthouse level",
        },
        {
          "@type": "Thing",
          name: "Penthouse layout guide",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Hozy Penthouse Layout Guide: How to Keep the Room Balanced"
          description="The Penthouse is one of the hardest Hozy levels to lay out well. This page is not a full walkthrough. It focuses on why the room gets messy so easily, how to build the layout in zones, and how to keep the final result balanced instead of cluttered."
          gameTitle="Hozy"
          gameHref="/guides/hozy"
          breadcrumbBaseHref="/guides"
          breadcrumbBaseLabel="Guides"
          updatedAt="April 2, 2026"
          toc={[
            {
              id: "why-the-penthouse-level-feels-so-hard-to-layout",
              label: "Why Penthouse feels hard",
            },
            {
              id: "why-the-room-gets-cluttered-so-fast",
              label: "Why it gets cluttered",
            },
            {
              id: "how-to-start-the-penthouse-layout",
              label: "How to start the layout",
            },
            {
              id: "where-to-place-big-items-first",
              label: "Where to place big items",
            },
            {
              id: "how-to-keep-the-room-balanced",
              label: "How to keep it balanced",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/guides/hozy/dreams-explained/",
              label: "Hozy Dreams Explained",
            },
            {
              href: "/guides/hozy/hardest-levels-ranked/",
              label: "Hozy Hardest Levels Ranked",
            },
            {
              href: "/guides/hozy/cafe-layout-tips/",
              label: "Hozy Cafe Layout Tips",
            },
            {
              href: "/guides/hozy/",
              label: "Hozy Guides",
            },
          ]}
        >
          <PenthouseLayoutGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}