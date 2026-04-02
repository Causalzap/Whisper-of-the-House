import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CafeLayoutTipsContent from "@/data/hozy/cafe-layout-tips.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/guides/hozy/cafe-layout-tips`;

export const metadata: Metadata = {
  title: "Best Hozy Cafe Layout Tips: Cozy, Not Cluttered",
  description:
    "Struggling with the Hozy Cafe level? Learn how to zone the busy space, avoid clutter, and design a perfectly balanced cafe without a strict walkthrough.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
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
        name: "Hozy Cafe Layout Tips",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: "Hozy Cafe Layout Tips: How to Keep the Room Cozy, Not Cluttered",
    description:
      "The Cafe is one of the easiest Hozy levels to over-decorate. This page is not a full walkthrough. It focuses on why the room gets busy so quickly, how to build the layout in layers, and how to keep the final result eclectic without making it feel messy.",
    image: [
      `${siteUrl}/images/hozy/cafe/cafe-overview.webp`,
      `${siteUrl}/images/hozy/cafe/cafe-cluttered-layout.webp`,
      `${siteUrl}/images/hozy/cafe/cafe-structure-first.webp`,
      `${siteUrl}/images/hozy/cafe/cafe-balanced-finish.webp`,
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
        name: "Cafe level layout tips",
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
];

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
          title="Hozy Cafe Layout Tips: How to Keep the Room Cozy, Not Cluttered"
          description="The Cafe is one of the easiest Hozy levels to over-decorate. This page is not a full walkthrough. It focuses on why the room gets busy so quickly, how to build the layout in layers, and how to keep the final result eclectic without making it feel messy."
          gameTitle="Hozy"
          gameHref="/guides/hozy"
          breadcrumbBaseHref="/guides"
          breadcrumbBaseLabel="Guides"
          updatedAt="April 2, 2026"
          toc={[
            {
              id: "why-the-cafe-level-gets-cluttered-so-fast",
              label: "Why Cafe gets cluttered",
            },
            {
              id: "how-to-build-a-balanced-cafe-layout",
              label: "How to build the layout",
            },
            {
              id: "what-to-place-first-in-the-cafe",
              label: "What to place first",
            },
            {
              id: "how-to-keep-the-room-eclectic-without-making-it-messy",
              label: "How to keep it eclectic",
            },
            {
              id: "how-cafe-compares-with-penthouse-and-dreams",
              label: "Cafe vs Penthouse and Dreams",
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
              href: "/guides/hozy/penthouse-layout-guide/",
              label: "Hozy Penthouse Layout Guide",
            },
            {
              href: "/guides/hozy/hardest-levels-ranked/",
              label: "Hozy Hardest Levels Ranked",
            },
            {
              href: "/guides/hozy/",
              label: "Hozy Guides",
            },
          ]}
        >
          <CafeLayoutTipsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}