import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Grime2Content from "@/data/grime-2/index.mdx";

const pageUrl = "https://www.whisperofthehouse.com/grime-2";
const siteUrl = "https://www.whisperofthehouse.com";

export const metadata: Metadata = {
  title:
    "GRIME II Guide Hub: Bosses, Routes & Early Weapons",
  description:
    "Your complete GRIME II guide hub. Conquer the Blade Mammoth, navigate Kankan, discover the best early weapons, and see what changed from the first game.",
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
        name: "GRIME II",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "GRIME II Guide Hub: Bosses, Kankan, Best Early Weapons, and What Changed",
    description:
      "This GRIME II guide hub helps players find the right article fast, whether they are stuck in Kankan, choosing an early weapon, comparing GRIME II to the first game, or looking for a boss strategy.",
    inLanguage: "en",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Whisper of the House",
      url: siteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: "GRIME II",
    },
    dateModified: "2026-04-04",
    mainEntity: {
      "@id": `${pageUrl}#itemlist`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#itemlist`,
    name: "GRIME II guides",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "How to Beat Blade Mammoth in GRIME II",
        url: `${siteUrl}/grime-2/blade-mammoth-boss-guide/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GRIME II Kankan Guide",
        url: `${siteUrl}/grime-2/kankan-guide/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "GRIME II Best Early Weapons",
        url: `${siteUrl}/grime-2/best-early-weapons/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "GRIME II vs GRIME 1 Differences",
        url: `${siteUrl}/grime-2/vs-grime-1-differences/`,
      },
    ],
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
          title="GRIME II Guide Hub: Bosses, Kankan, Best Early Weapons, and What Changed"
          description="This GRIME II guide hub helps you find the right article fast, whether you are stuck in Kankan, choosing an early weapon, comparing the sequel to the first game, or looking for a boss strategy."
          gameTitle="GRIME II"
          gameHref="/grime-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          hideCurrentTitleInBreadcrumb={true}
          updatedAt="April 4, 2026"
          toc={[
            {
              id: "what-this-grime-ii-guide-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "the-best-grime-ii-guides-to-start-with",
              label: "Best guides to start with",
            },
            {
              id: "why-these-are-the-most-useful-grime-ii-topics-right-now",
              label: "Why these topics matter",
            },
            {
              id: "all-grime-ii-guides-in-this-cluster",
              label: "All guides in this cluster",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/grime-2/blade-mammoth-boss-guide",
              label: "How to Beat Blade Mammoth in GRIME II",
            },
            {
              href: "/grime-2/kankan-guide",
              label: "GRIME II Kankan Guide",
            },
            {
              href: "/grime-2/best-early-weapons",
              label: "GRIME II Best Early Weapons",
            },
            {
              href: "/grime-2/vs-grime-1-differences",
              label: "GRIME II vs GRIME 1 Differences",
            },
          ]}
        >
          <Grime2Content />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}