import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllWillFallTankerTruckGuideContent from "@/data/all-will-fall/tanker-truck-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-will-fall/tanker-truck-guide`;

export const metadata: Metadata = {
  title: "All Will Fall Tanker Truck Guide: Best Early Build Order, Fuel Math, and Zone Progression",
  description:
    "Use this All Will Fall Tanker Truck guide to stabilize your opening, manage fuel between zones, set up Wood Catchers, Fishing Huts, boats, powered junk collection, and the midgame Mushroom Farm pivot.",
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
          name: "Tanker Truck Guide",
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
        "All Will Fall Tanker Truck Guide: Best Early Build Order, Fuel Math, and Zone Progression",
      description:
        "This All Will Fall Tanker Truck guide focuses on the opening build order, fuel economy, boat scavenging, powered junk collection, wave generators, and the Mushroom Farm pivot that helps the scenario stop stalling out.",
      image: [
        `${siteUrl}/images/all-will-fall/broken-tanker-overview-start.webp`,
        `${siteUrl}/images/all-will-fall/broken-tanker-double-fishing-and-boat.webp`,
        `${siteUrl}/images/all-will-fall/broken-tanker-fuel-production-online.webp`,
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
          name: "Broken Tanker",
        },
        {
          "@type": "Thing",
          name: "Tanker Truck",
        },
        {
          "@type": "Thing",
          name: "Fuel management",
        },
        {
          "@type": "Thing",
          name: "Wood Catcher",
        },
        {
          "@type": "Thing",
          name: "Wood Boiler",
        },
        {
          "@type": "Thing",
          name: "Fishing Huts",
        },
        {
          "@type": "Thing",
          name: "Simple Boat",
        },
        {
          "@type": "Thing",
          name: "Electric Junk Catcher",
        },
        {
          "@type": "Thing",
          name: "Hamster Wheel",
        },
        {
          "@type": "Thing",
          name: "Wave Generator",
        },
        {
          "@type": "Thing",
          name: "Mushroom Farm",
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
          title="All Will Fall Tanker Truck Guide: Best Early Build Order, Fuel Math, and Zone Progression"
          description="Learn how to stabilize the Broken Tanker / Tanker Truck scenario in All Will Fall. This guide covers the opening build order, fuel math, boats, powered junk collection, wave generators, and the Mushroom Farm transition that keeps your run moving."
          gameTitle="All Will Fall"
          gameHref="/all-will-fall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 8, 2026"
          toc={[
            {
              id: "confirmed-tanker-truck-numbers",
              label: "Confirmed Tanker Truck numbers",
            },
            {
              id: "how-tanker-truck-actually-works",
              label: "How Tanker Truck actually works",
            },
            {
              id: "all-will-fall-tanker-truck-best-build-order",
              label: "Best build order",
            },
            {
              id: "resource-math-and-why-fuel-is-the-real-bottleneck",
              label: "Resource math and fuel bottleneck",
            },
            {
              id: "boats-scavenging-and-why-sailors-matter",
              label: "Boats, scavenging, and sailors",
            },
            {
              id: "the-first-powered-economy-hamster-wheel-and-electric-junk-catcher",
              label: "First powered economy",
            },
            {
              id: "wave-generator-vs-hamster-wheel-when-to-switch",
              label: "Wave Generator vs Hamster Wheel",
            },
            {
              id: "when-to-start-making-your-own-fuel",
              label: "When to make your own fuel",
            },
            {
              id: "the-midgame-food-pivot-mushroom-farm-vs-fishing-huts",
              label: "Mushroom Farm vs Fishing Huts",
            },
            {
              id: "common-tanker-truck-mistakes",
              label: "Common Tanker Truck mistakes",
            },
            {
              id: "what-this-page-still-cannot-fully-confirm",
              label: "What this page still cannot fully confirm",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/all-will-fall/",
              label: "All Will Fall guide hub",
            },
            {
              href: "/all-will-fall/beginner-guide/",
              label: "All Will Fall beginner guide",
            },
            {
              href: "/all-will-fall/collapse-troubleshooting/",
              label: "All Will Fall collapse troubleshooting guide",
            },
            {
              href: "/all-will-fall/oil-rig-guide/",
              label: "All Will Fall Oil Rig guide",
            },
          ]}
        >
          <AllWillFallTankerTruckGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
