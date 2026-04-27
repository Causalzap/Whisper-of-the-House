import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SintopiaHubContent from "@/data/sintopia/index.mdx";

const pageUrl = "https://www.whisperofthehouse.com/sintopia";
const siteUrl = "https://www.whisperofthehouse.com";

const guides = [
  {
    name: "How To Create The Best Hell Layout In Sintopia",
    url: `${siteUrl}/sintopia/best-hell-layout-guide`,
  },
  {
    name: "How to Get Hearos in Sintopia",
    url: `${siteUrl}/sintopia/hearos-guide`,
  },
  {
    name: "Sintopia Overworld Guide",
    url: `${siteUrl}/sintopia/overworld-guide`,
  },
  {
    name: "Sintopia Saints Guide",
    url: `${siteUrl}/sintopia/saints-guide`,
  },
];

export const metadata: Metadata = {
  title: "Sintopia Guide Hub",
  description:
    "The best starting point for Sintopia guides, including Hell layout, Hearos, Overworld strategy, Saints handling, and fix-focused help for common problems.",
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
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sintopia",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: "Sintopia Guide Hub",
    description:
      "The best starting point for Sintopia guides, including Hell layout, Hearos, Overworld strategy, Saints handling, and fix-focused help for common problems.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en",
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
    isPartOf: {
      "@type": "WebSite",
      name: "Whisper of the House",
      url: siteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: "Sintopia",
    },
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#guides`,
    name: "Sintopia Guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.name,
      url: guide.url,
    })),
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
          title="Sintopia Guide Hub"
          description="Start here for the best Sintopia guides, including Hell layout, Hearos, Overworld strategy, Saints handling, and fix-focused help for the most common problems."
          gameTitle="Sintopia"
          gameHref="/sintopia"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 19, 2026"
          toc={[
            {
              id: "game-overview",
              label: "Game overview",
            },
            {
              id: "quick-start",
              label: "Quick start",
            },
            {
              id: "core-management-modules",
              label: "Core management modules",
            },
            {
              id: "faq",
              label: "FAQ",
            },
            {
              id: "final-note",
              label: "Final note",
            },
          ]}
          relatedLinks={[
            {
              href: "/sintopia/saints-guide",
              label: "Sintopia Saints Hub",
            },
            {
              href: "/sintopia/best-hell-layout-guide",
              label: "Sintopia Best Hell Layout Guide",
            },
            {
              href: "/sintopia/overworld-guide",
              label: "Sintopia Overworld Guide",
            },
            {
              href: "/sintopia/hearos-guide",
              label: "Sintopia Hearos Guide",
            },
          ]}
        >
          <SintopiaHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}