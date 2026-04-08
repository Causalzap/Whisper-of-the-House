import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLongDarkEpisode5Content from "@/data/the-long-dark/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/`;

export const metadata: Metadata = {
  title:
    "The Long Dark Episode 5 Guide: Walkthrough, Mission List, Ending, Missing People",
  description:
    "A complete guide to The Long Dark Episode 5, with the full walkthrough, mission route, Missing People help, ending explanation, and Astrid's hardcase guide.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Long Dark Episode 5 Guide: Walkthrough, Mission List, Ending, Missing People",
    description:
      "A complete guide to The Long Dark Episode 5, with the full walkthrough, mission route, Missing People help, ending explanation, and Astrid's hardcase guide.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Long Dark Episode 5 Guide: Walkthrough, Mission List, Ending, Missing People",
    description:
      "A complete guide to The Long Dark Episode 5, with the full walkthrough, mission route, Missing People help, ending explanation, and Astrid's hardcase guide.",
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
        "The Long Dark Episode 5 Guide: Walkthrough, Mission List, Ending, Missing People",
      description:
        "Main guide for The Long Dark Episode 5, covering the best walkthrough starting point, mission route, Missing People help, ending explanation, and Astrid's hardcase.",
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
          name: "Perseverance Mills",
        },
        {
          "@type": "Thing",
          name: "Desperation Bay",
        },
        {
          "@type": "Thing",
          name: "Suzuki Radio Telescope",
        },
        {
          "@type": "Thing",
          name: "SAR station",
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
          title="The Long Dark Episode 5 Guide: Walkthrough, Mission List, Ending, Missing People"
          description="The main The Long Dark Episode 5 guide with the best walkthrough starting point, mission route, Missing People help, ending explanation, and Astrid's hardcase links."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          hideCurrentTitleInBreadcrumb={true}
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "what-is-the-long-dark-episode-5",
              label: "What is Episode 5?",
            },
            {
              id: "the-best-way-to-use-this-episode-5-guide",
              label: "Best way to use this guide",
            },
            {
              id: "the-main-the-long-dark-episode-5-walkthrough-route",
              label: "Main walkthrough route",
            },
            {
              id: "most-common-episode-5-stuck-points",
              label: "Most common stuck points",
            },
            {
              id: "which-episode-5-guide-should-you-open-first",
              label: "Which guide to open first",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/episode-5-walkthrough/",
              label: "The Long Dark Episode 5 Walkthrough",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations/",
              label: "Episode 5 Missing People Locations",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-ending-explained/",
              label: "Episode 5 Ending Explained",
            },
            {
              href: "/the-long-dark-episode-5/whats-in-astrids-hardcase-explained/",
              label: "What Is in Astrid's Hardcase?",
            },
          ]}
        >
          <TheLongDarkEpisode5Content />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}