import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllWillFallOilRigGuideContent from "@/data/all-will-fall/oil-rig-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-will-fall/oil-rig-guide`;

export const metadata: Metadata = {
  title:
    "All Will Fall Oil Rig Guide: Build Order & First Raise Timing",
  description:
    "Master the All Will Fall Oil Rig scenario. Get the best early build order, a 500% efficiency Rain Catcher layout, and tips for the 40 metal + 15 fuel raise.",
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
          item: `${siteUrl}/all-will-fall`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oil Rig Guide",
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
        "All Will Fall Oil Rig Guide: Best Early Build Order, Rain Catcher Layout, and How to Raise the Platform",
      description:
        "This All Will Fall Oil Rig guide explains the best early build order, confirmed first raise cost, compact Rain Catcher setup, edge-tile rule, and the midgame shift into tools, oil pump access, power, and future raises.",
      image: [
        `${siteUrl}/images/all-will-fall/oil-rig-overview-start.webp`,
        `${siteUrl}/images/all-will-fall/oil-rig-core-layout.webp`,
        `${siteUrl}/images/all-will-fall/oil-rig-rain-catcher-500.webp`,
        `${siteUrl}/images/all-will-fall/oil-rig-first-platform-raise.webp`,
        `${siteUrl}/images/all-will-fall/oil-rig-oil-pump-metal-to-fuel.webp`,
      ],
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
          name: "Rain Catcher",
        },
        {
          "@type": "Thing",
          name: "Demolition Hut",
        },
        {
          "@type": "Thing",
          name: "Platform Raise",
        },
        {
          "@type": "Thing",
          name: "Oil Pump",
        },
        {
          "@type": "Thing",
          name: "Watchtower",
        },
        {
          "@type": "Thing",
          name: "Metal",
        },
        {
          "@type": "Thing",
          name: "Fuel",
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
          title="All Will Fall Oil Rig Guide: Best Early Build Order, Rain Catcher Layout, and How to Raise the Platform"
          description="Learn how to beat the Oil Rig scenario in All Will Fall. This guide covers the best early build order, the confirmed first raise cost, the compact Rain Catcher setup, edge-tile planning, and the midgame transition into tools, oil pump access, power, and future raises."
          gameTitle="All Will Fall"
          gameHref="/all-will-fall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 8, 2026"
          toc={[
            {
              id: "all-will-fall-oil-rig-guide-difficulty",
              label: "Oil Rig difficulty and who this page is for",
            },
            {
              id: "confirmed-oil-rig-numbers",
              label: "Confirmed Oil Rig numbers",
            },
            {
              id: "all-will-fall-oil-rig-guide-core-rules",
              label: "Core rules that make Oil Rig different",
            },
            {
              id: "all-will-fall-oil-rig-best-build-order",
              label: "Best build order",
            },
            {
              id: "all-will-fall-oil-rig-rain-catcher-layout",
              label: "Rain Catcher layout",
            },
            {
              id: "how-to-raise-the-platform-in-all-will-fall-oil-rig",
              label: "How to raise the platform",
            },
            {
              id: "oil-rig-midgame-priorities-after-first-raise",
              label: "Midgame priorities after first raise",
            },
            {
              id: "oil-rig-mistakes-to-avoid",
              label: "Mistakes to avoid",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/all-will-fall",
              label: "All Will Fall guide hub",
            },
            {
              href: "/all-will-fall/collapse-troubleshooting",
              label: "All Will Fall Collapse Troubleshooting",
            },
            {
              href: "/all-will-fall/tornado-race-guide",
              label: "All Will Fall Tornado Race guide",
            },
            {
              href: "/all-will-fall/tanker-truck-guide",
              label: "All Will Fall Tanker Truck guide",
            },
          ]}
        >
          <AllWillFallOilRigGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
