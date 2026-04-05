import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MissingPeopleLocationsContent from "@/data/the-long-dark/episode-5-missing-people-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/episode-5-missing-people-locations`;

export const metadata: Metadata = {
  title: "Where to Find the 3 Missing People in The Long Dark Ep 5",
  description:
    "Stuck in the snow? Don't waste hours searching. Get the exact map locations for all 3 missing people in TLD Episode 5, including how to reach the Constable past the broken bridge.",
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
          name: "Episode 5 Missing People Locations",
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
      headline: "The Long Dark Episode 5 Missing People Locations Guide",
      description:
        "This guide shows where to find all three missing people in The Long Dark Episode 5, including the basement survivor, the body behind the waterfall, and the Constable past the broken bridge.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-location-1-map.webp`,
  `${siteUrl}/images/the-long-dark/episode-5/missing-person-location-2-map.webp`,
  `${siteUrl}/images/the-long-dark/episode-5/missing-person-location-3-map.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-basement.jpg`,
        `${siteUrl}/images/the-long-dark/episode-5/missing-person-waterfall.jpg`,
        `${siteUrl}/images/the-long-dark/episode-5/constable-fishing-pier.jpg`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-05",
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
          name: "Missing People objective",
        },
        {
          "@type": "Thing",
          name: "Perseverance Mills",
        },
        {
          "@type": "Thing",
          name: "Search Party achievement",
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
          title="The Long Dark Episode 5 Missing People Locations Guide"
          description="Looking for all missing people in The Long Dark Episode 5? This guide shows where to find the basement survivor, the body behind the waterfall, and the Constable past the broken bridge."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "where-to-find-all-missing-people-in-the-long-dark-episode-5",
              label: "All missing people overview",
            },
            {
              id: "missing-person-1-basement-location",
              label: "Missing Person 1: basement",
            },
            {
              id: "missing-person-2-waterfall-location",
              label: "Missing Person 2: waterfall",
            },
            {
              id: "missing-person-3-constable-location",
              label: "Constable location",
            },
            {
              id: "best-order-to-find-all-three-missing-people",
              label: "Best route order",
            },
            {
              id: "search-party-achievement-how-to-get-it",
              label: "Search Party achievement",
            },
            {
              id: "most-common-missing-people-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/episode-5-walkthrough/",
              label: "Episode 5 Walkthrough",
            },
            {
              href: "/the-long-dark-episode-5/",
              label: "The Long Dark Episode 5 Guide Hub",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-ending-explained/",
              label: "Episode 5 Ending Explained",
            },
          ]}
        >
          <MissingPeopleLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}