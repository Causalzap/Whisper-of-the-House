import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SearchPartyAchievementContent from "@/data/the-long-dark/search-party-achievement.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/search-party-achievement`;

export const metadata: Metadata = {
  title: "How to Get Search Party in The Long Dark Ep 5",
  description:
    "Need the Search Party achievement in The Long Dark Episode 5? This guide explains the 40-minute timed run, the best route order, and the biggest time-wasting mistakes.",
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
          name: "The Long Dark Episode 5",
          item: `${siteUrl}/the-long-dark-episode-5`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Search Party Achievement",
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
      headline: "The Long Dark Episode 5 Search Party Achievement Guide",
      description:
        "This guide explains how to get the Search Party achievement in The Long Dark Episode 5, including the timer logic, best route order, and the most common time-wasting mistakes.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-location-2-map.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-location-1-map.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-location-3-map.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-waterfall.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-basement.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/constable-fishing-pier.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-09",
      about: [
        {
          "@type": "VideoGame",
          name: "The Long Dark",
        },
        {
          "@type": "CreativeWork",
          name: "Wintermute Episode 5",
        },
        {
          "@type": "Thing",
          name: "Search Party achievement",
        },
        {
          "@type": "Thing",
          name: "Missing People objective",
        },
        {
          "@type": "Thing",
          name: "Perseverance Mills",
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
          title="The Long Dark Episode 5 Search Party Achievement Guide"
          description="Trying to get Search Party in The Long Dark Episode 5? This guide covers the timed run, the best route order, and the mistakes that waste the most time."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 9, 2026"
          toc={[
            {
              id: "what-search-party-requires-in-episode-5",
              label: "Achievement requirements",
            },
            {
              id: "when-the-search-party-timer-starts",
              label: "When the timer starts",
            },
            {
              id: "best-search-party-route",
              label: "Best route order",
            },
            {
              id: "stop-1-waterfall-route",
              label: "Stop 1: waterfall",
            },
            {
              id: "stop-2-basement-route",
              label: "Stop 2: basement",
            },
            {
              id: "stop-3-constable-route",
              label: "Stop 3: Constable",
            },
            {
              id: "what-wastes-the-most-time-in-search-party",
              label: "Biggest time-wasters",
            },
            {
              id: "how-to-prepare-before-you-start-search-party",
              label: "How to prepare",
            },
            {
              id: "search-party-vs-the-normal-missing-people-route",
              label: "Search Party vs normal route",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations",
              label: "Episode 5 Missing People Locations",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-walkthrough",
              label: "Episode 5 Walkthrough",
            },
            {
              href: "/the-long-dark-episode-5",
              label: "The Long Dark Episode 5 Guide Hub",
            },
          ]}
        >
          <SearchPartyAchievementContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}