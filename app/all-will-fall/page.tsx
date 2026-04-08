import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllWillFallGuideHubContent from "@/data/all-will-fall/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-will-fall`;

export const metadata: Metadata = {
  title: "All Will Fall Guide Hub: Oil Rig, Tanker Truck, Tornado Race, and Collapse Fixes",
  description:
    "Use this All Will Fall guide hub to find the right scenario guide fast, including Oil Rig, Tanker Truck, Tornado Race, and collapse troubleshooting.",
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
          name: "All Will Fall",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "All Will Fall",
      description:
        "This All Will Fall guide hub helps players jump directly to the right scenario guide or troubleshooting page, including Oil Rig, Tanker Truck, Tornado Race, and collapse troubleshooting.",
      inLanguage: "en",
      dateModified: "2026-04-08",
      about: [
        {
          "@type": "VideoGame",
          name: "All Will Fall",
        },
        {
          "@type": "Thing",
          name: "Oil Rig",
        },
        {
          "@type": "Thing",
          name: "Tanker Truck",
        },
        {
          "@type": "Thing",
          name: "Tornado Race",
        },
        {
          "@type": "Thing",
          name: "Building collapse",
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
          title="All Will Fall"
          description="Use this hub to jump straight to the All Will Fall page you actually need, whether that is Oil Rig, Tanker Truck, Tornado Race, or collapse troubleshooting."
          gameTitle=""
          gameHref=""
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 8, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "best-guide-order",
              label: "Best guide order",
            },
            {
              id: "scenario-guides",
              label: "Scenario guides",
            },
            {
              id: "system-guides",
              label: "System guides",
            },
            {
              id: "which-guide-should-you-read-first",
              label: "Which guide should you read first?",
            },
            {
              id: "current-small-cluster",
              label: "Current small cluster",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/all-will-fall/oil-rig-guide/",
              label: "All Will Fall Oil Rig guide: best early build order and 500% Rain Catcher setup",
            },
            {
              href: "/all-will-fall/tanker-truck-guide/",
              label: "All Will Fall Tanker Truck guide: best early build order, fuel math, and zone progression",
            },
            {
              href: "/all-will-fall/tornado-race-guide/",
              label: "All Will Fall Tornado Race guide: Day 60 timeline, Thruster Engines, and Power Grid",
            },
            {
              href: "/all-will-fall/collapse-troubleshooting/",
              label: "All Will Fall collapse troubleshooting guide: why buildings fall and how to fix them",
            },
          ]}
        >
          <AllWillFallGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}