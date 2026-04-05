import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLongDarkEpisode5Content from "@/data/the-long-dark/index.mdx";

const pageUrl = "https://www.whisperofthehouse.com/the-long-dark-episode-5";
const siteUrl = "https://www.whisperofthehouse.com";

export const metadata: Metadata = {
  title:
    "The Long Dark Episode 5 Guide Hub: Walkthrough, Missing People, Ending Explained, and Hardcase Answers",
  description:
    "Your complete The Long Dark Episode 5 guide hub. Use the full walkthrough, find all missing people in Perseverance Mills, understand the ending, and learn what is in Astrid's hardcase.",
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
        name: "The Long Dark Episode 5",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "The Long Dark Episode 5 Guide Hub: Walkthrough, Missing People, Ending Explained, and Hardcase Answers",
    description:
      "This The Long Dark Episode 5 guide hub helps players find the right article fast, whether they need the full walkthrough, the missing people locations, an ending explained guide, or a direct answer about Astrid's hardcase.",
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
      name: "The Long Dark",
    },
    dateModified: "2026-04-05",
    mainEntity: {
      "@id": `${pageUrl}#itemlist`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#itemlist`,
    name: "The Long Dark Episode 5 guides",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "The Long Dark Episode 5 Walkthrough",
        url: `${siteUrl}/the-long-dark-episode-5/episode-5-walkthrough/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Long Dark Episode 5 Missing People Locations Guide",
        url: `${siteUrl}/the-long-dark-episode-5/episode-5-missing-people-locations/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The Long Dark Episode 5 Ending Explained",
        url: `${siteUrl}/the-long-dark-episode-5/episode-5-ending-explained/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "What Is in Astrid's Hardcase in The Long Dark Episode 5?",
        url: `${siteUrl}/the-long-dark-episode-5/whats-in-astrids-hardcase-explained/`,
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
          title="The Long Dark Episode 5 Guide Hub: Walkthrough, Missing People, Ending Explained, and Hardcase Answers"
          description="This The Long Dark Episode 5 guide hub helps you find the right article fast, whether you need the full walkthrough, the missing people locations, an ending explained guide, or a direct answer about Astrid's hardcase."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          hideCurrentTitleInBreadcrumb={true}
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "what-this-the-long-dark-episode-5-guide-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "the-best-episode-5-guides-to-start-with",
              label: "Best guides to start with",
            },
            {
              id: "why-these-are-the-most-useful-episode-5-topics-right-now",
              label: "Why these topics matter",
            },
            {
              id: "all-the-long-dark-episode-5-guides-in-this-cluster",
              label: "All guides in this cluster",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/episode-5-walkthrough",
              label: "The Long Dark Episode 5 Walkthrough",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations",
              label: "Episode 5 Missing People Locations Guide",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-ending-explained",
              label: "Episode 5 Ending Explained",
            },
            {
              href: "/the-long-dark-episode-5/whats-in-astrids-hardcase-explained",
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