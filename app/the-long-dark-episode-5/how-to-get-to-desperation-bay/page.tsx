import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HowToGetToDesperationBayContent from "@/data/the-long-dark/how-to-get-to-desperation-bay.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/how-to-get-to-desperation-bay`;

export const metadata: Metadata = {
  title: "How to Get to Desperation Bay in The Long Dark Ep 5",
  description:
    "Stuck trying to reach Desperation Bay in The Long Dark Episode 5? This guide explains the lighthouse clue, the icy coastal route, and how to reach the cargo ship.",
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
          name: "How to Get to Desperation Bay",
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
      headline: "How to Get to Desperation Bay in The Long Dark Episode 5",
      description:
        "This guide explains how to get to Desperation Bay in The Long Dark Episode 5, how the lighthouse clue helps, and how to work through the icy coast route to the cargo ship.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/desperation-bay-map.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/cargo-ship.webp`,
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
          name: "Desperation Bay",
        },
        {
          "@type": "Thing",
          name: "Lighthouse clue",
        },
        {
          "@type": "Thing",
          name: "Cargo ship",
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
          title="How to Get to Desperation Bay in The Long Dark Episode 5"
          description="Stuck trying to reach Desperation Bay in The Long Dark Episode 5? This guide explains the lighthouse clue, the icy coastal route, and how to reach the cargo ship."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 9, 2026"
          toc={[
            {
              id: "how-to-get-to-desperation-bay-in-one-paragraph",
              label: "Quick answer",
            },
            {
              id: "the-best-way-to-think-about-this-route",
              label: "How to think about the route",
            },
            {
              id: "what-the-lighthouse-clue-is-telling-you",
              label: "What the lighthouse clue means",
            },
            {
              id: "why-this-part-feels-like-an-ice-maze",
              label: "Why it feels like an ice maze",
            },
            {
              id: "how-to-handle-wrong-turns-without-wasting-time",
              label: "How to handle wrong turns",
            },
            {
              id: "how-to-know-you-are-close-to-the-ship",
              label: "How to know you are close",
            },
            {
              id: "most-common-desperation-bay-route-mistakes",
              label: "Common route mistakes",
            },
            {
              id: "why-reaching-the-ship-matters-so-much",
              label: "Why reaching the ship matters",
            },
            {
              id: "what-comes-right-after-you-get-there",
              label: "What comes after",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/where-to-go-after-terry/",
              label: "Where to Go After Terry",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-walkthrough/",
              label: "Episode 5 Walkthrough",
            },
            {
              href: "/the-long-dark-episode-5/",
              label: "The Long Dark Episode 5 Guide Hub",
            },
          ]}
        >
          <HowToGetToDesperationBayContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}