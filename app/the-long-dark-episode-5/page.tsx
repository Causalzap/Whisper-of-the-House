import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLongDarkEpisode5Content from "@/data/the-long-dark/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5`;

export const metadata: Metadata = {
  title: "The Long Dark Episode 5 Guide Hub: Walkthrough, Ending, Missing People",
  description:
    "Use this The Long Dark Episode 5 guide hub to find the full walkthrough, missing people locations, ending explained, and Astrid's hardcase answer in one place.",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "The Long Dark Episode 5 Guide Hub: Walkthrough, Ending, Missing People, and Hardcase Help",
      description:
        "Use this The Long Dark Episode 5 guide hub to find the full walkthrough, missing people locations, ending explained, and Astrid's hardcase answer in one place.",
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
          title="The Long Dark Episode 5 Guide Hub: Walkthrough, Ending, Missing People, and Hardcase Help"
          description="Use this The Long Dark Episode 5 guide hub to find the full walkthrough, missing people locations, ending explained, and Astrid's hardcase answer in one place."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          hideCurrentTitleInBreadcrumb={true}
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "what-this-guide-covers",
              label: "What this guide covers",
            },
            {
              id: "best-guides-to-start-with",
              label: "Best guides to start with",
            },
            {
              id: "why-these-topics-matter",
              label: "Why these topics matter",
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
              href: "/the-long-dark-episode-5/episode-5-ending-explained",
              label: "Episode 5 Ending Explained",
            },
            {
              href: "/the-long-dark-episode-5/whats-in-astrids-hardcase-explained",
              label: "What Is in Astrid's Hardcase?",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations",
              label: "Episode 5 Missing People Locations Guide",
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