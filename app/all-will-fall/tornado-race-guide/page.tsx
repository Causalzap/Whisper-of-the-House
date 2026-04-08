import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllWillFallTornadoRaceGuideContent from "@/data/all-will-fall/tornado-race-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/all-will-fall/tornado-race-guide`;

export const metadata: Metadata = {
  title: "All Will Fall: Tornado Race Guide (Day 60, Thrusters & Power Grid)",
  description:
    "Master the Tornado Race in All Will Fall with this complete guide. Learn how to beat the Day 60 deadline, set up all 4 Thruster Engines, optimize your Power Grid, and upgrade platform materials to outrun the storm.",
  
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
          name: "Tornado Race Guide",
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
        "All Will Fall Tornado Race Guide: Day 60 Timeline, Thruster Engines, and Power Grid",
      description:
        "This All Will Fall Tornado Race guide focuses on the Day 60 fail deadline, 4 Thruster Engines, Power Grid by Day 40, late wind pressure, platform preparation, and failure snapshots for runs that look stable but are already behind.",
      image: [`${siteUrl}/images/all-will-fall/tornado-race-evacuation-overview.webp`],
      inLanguage: "en",
      dateModified: "2026-04-08",
      about: [
        {
          "@type": "VideoGame",
          name: "All Will Fall",
        },
        {
          "@type": "Thing",
          name: "Tornado Race",
        },
        {
          "@type": "Thing",
          name: "Thruster Engines",
        },
        {
          "@type": "Thing",
          name: "Power Grid",
        },
        {
          "@type": "Thing",
          name: "Evacuation platform",
        },
        {
          "@type": "Thing",
          name: "Day 60 timeline",
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
          title="All Will Fall Tornado Race Guide: Day 60 Timeline, Thruster Engines, and Power Grid"
          description="Use this best-current Tornado Race guide to plan around the Day 60 deadline, get Sailors exploring early, finish Power Grid by Day 40, track the 4 Thruster Engines, and avoid the late-game failure states that still look stable until it is too late."
          gameTitle="All Will Fall"
          gameHref="/all-will-fall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 8, 2026"
          toc={[
            {
              id: "what-makes-tornado-race-different",
              label: "What makes Tornado Race different",
            },
            {
              id: "confirmed-public-facts",
              label: "Confirmed public Tornado Race facts",
            },
            {
              id: "best-current-timeline",
              label: "Best current timeline",
            },
            {
              id: "what-good-enough-actually-means",
              label: "What “good enough” actually means",
            },
            {
              id: "platform-checklist",
              label: "Evacuation platform checklist",
            },
            {
              id: "when-to-move-between-zones",
              label: "When to move between zones",
            },
            {
              id: "phase-shift",
              label: "Phase shift",
            },
            {
              id: "cross-scenario-comparison",
              label: "Cross-scenario comparison",
            },
            {
              id: "failure-snapshots",
              label: "Failure snapshots",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/all-will-fall/",
              label: "All Will Fall Guide Hub",
            },
            {
              href: "/all-will-fall/oil-rig-guide/",
              label: "All Will Fall Oil Rig guide: best early build order and 500% Rain Catcher setup",
            },
            {
              href: "/all-will-fall/tanker-truck-guide/",
              label: "All Will Fall Tanker Truck guide: best early build order, fuel math, and zone progression",
            },
            {
              href: "/all-will-fall/collapse-troubleshooting/",
              label: "All Will Fall collapse troubleshooting guide: why buildings fall and how to fix them",
            },
          ]}
        >
          <AllWillFallTornadoRaceGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
