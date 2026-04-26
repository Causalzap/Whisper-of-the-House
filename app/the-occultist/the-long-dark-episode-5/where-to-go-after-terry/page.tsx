import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WhereToGoAfterTerryContent from "@/data/the-long-dark/where-to-go-after-terry.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/where-to-go-after-terry`;

export const metadata: Metadata = {
  title: "Where to Go After Terry in The Long Dark Ep 5",
  description:
    "Stuck after talking to Terry in The Long Dark Episode 5? This guide explains why Desperation Bay is the next objective and why the cargo ship is the real destination.",
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
          name: "Where to Go After Terry",
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
      headline: "Where to Go After Terry in The Long Dark Episode 5",
      description:
        "This guide explains where to go after talking to Terry in The Long Dark Episode 5, why Desperation Bay is the next area, and why the cargo ship is the real destination.",
      image: [`${siteUrl}/images/the-long-dark/episode-5/desperation-bay-map.webp`],
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
          name: "Terry's radio hut",
        },
        {
          "@type": "Thing",
          name: "Desperation Bay",
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
          title="Where to Go After Terry in The Long Dark Episode 5"
          description="Stuck after talking to Terry in The Long Dark Episode 5? This guide explains why Desperation Bay is the next objective and why the cargo ship is the real destination."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 9, 2026"
          toc={[
            {
              id: "desperation-bay-is-the-next-area",
              label: "Desperation Bay is next",
            },
            {
              id: "the-cargo-ship-is-the-real-target",
              label: "Cargo ship is the target",
            },
            {
              id: "what-terrys-clue-actually-means",
              label: "What Terry's clue means",
            },
            {
              id: "signs-you-are-heading-the-right-way",
              label: "Signs you're on track",
            },
            {
              id: "why-players-still-get-stuck-after-terry",
              label: "Why players get stuck",
            },
            {
              id: "what-you-find-on-the-coast-matters-so-much",
              label: "Why the coast matters",
            },
            {
              id: "what-not-to-do-after-terry",
              label: "What not to do",
            },
            {
              id: "what-comes-after-desperation-bay",
              label: "What comes after",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/what-to-do-after-the-autopsy",
              label: "What to Do After the Autopsy",
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
          <WhereToGoAfterTerryContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}