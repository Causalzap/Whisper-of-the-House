import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import KankanGuideContent from "@/data/grime-2/kankan-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/grime-2/kankan-guide`;

export const metadata: Metadata = {
  title:
    "GRIME II Kankan Guide: What to Do, Where to Go, and How to Get Back on Track",
  description:
    "Complete GRIME II Kankan guide: Optimal city routing, Breathsmith & Firstsmith locations, and the path to Tankard Warden and Greatblade Preacher.",
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
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "GRIME II",
          item: `${siteUrl}/grime-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GRIME II Kankan Guide",
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
        "GRIME II Kankan Guide: What to Do, Where to Go, and How to Get Back on Track",
      description:
        "This GRIME II Kankan guide explains what to do after entering the city, how to find Breathsmith and Firstsmith, where Tankard Warden and Greatblade Preacher fit into the route, and how to recover if the route starts feeling confusing.",
      image: [
        `${siteUrl}/images/grime-2/kankan-guide/kankan-overview.webp`,
        `${siteUrl}/images/grime-2/kankan-guide/tankard-warden.webp`,
        `${siteUrl}/images/grime-2/kankan-guide/greatblade-preacher.webp`,
        `${siteUrl}/images/grime-2/kankan-guide/impaled-mountainborn.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-04",
      about: [
        {
          "@type": "VideoGame",
          name: "GRIME II",
        },
        {
          "@type": "Thing",
          name: "Kankan",
        },
        {
          "@type": "Thing",
          name: "Tankard Warden",
        },
        {
          "@type": "Thing",
          name: "Greatblade Preacher",
        },
        {
          "@type": "Thing",
          name: "Breathsmith",
        },
        {
          "@type": "Thing",
          name: "Firstsmith",
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
          title="GRIME II Kankan Guide: What to Do, Where to Go, and How to Get Back on Track"
          description="Lost in Kankan in GRIME II? This guide explains what to do after entering Kankan, how to find Breathsmith and Firstsmith, where Tankard Warden and Greatblade Preacher fit into the route, and how to get back on track if the city starts feeling confusing."
          gameTitle="GRIME II"
          gameHref="/grime-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 4, 2026"
          toc={[
            {
              id: "what-to-do-first-after-entering-kankan-in-grime-ii",
              label: "What to do first",
            },
            {
              id: "how-to-find-breathsmith-and-firstsmith-in-kankan",
              label: "Find Breathsmith and Firstsmith",
            },
            {
              id: "grime-ii-kankan-core-route-overview",
              label: "Core route overview",
            },
            {
              id: "where-tankard-warden-fits-into-the-kankan-route",
              label: "Tankard Warden",
            },
            {
              id: "how-to-reach-greatblade-preacher-in-lower-kankan",
              label: "Greatblade Preacher",
            },
            {
              id: "what-to-do-if-you-get-lost-or-locked-out-of-kankan",
              label: "If you get lost",
            },
            {
              id: "where-to-go-after-kankan-in-grime-ii",
              label: "Where to go after Kankan",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/grime-2/",
              label: "GRIME II Guide Hub",
            },
            {
              href: "/grime-2/best-early-weapons/",
              label: "GRIME II Best Early Weapons",
            },
            {
              href: "/grime-2/blade-mammoth-boss-guide/",
              label: "How to Beat Blade Mammoth in GRIME II",
            },
            {
              href: "/grime-2/vs-grime-1-differences/",
              label: "GRIME II vs GRIME 1 Differences",
            },
          ]}
        >
          <KankanGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}