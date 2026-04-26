import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Episode5EndingExplainedContent from "@/data/the-long-dark/episode-5-ending-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/episode-5-ending-explained`;

export const metadata: Metadata = {
    title: "The Long Dark Episode 5 Ending Explained: Mackenzie's Fate & The Truth",
    description: "Wintermute's finale explained! We break down Mackenzie's ultimate sacrifice, Atwood's motives, and finally reveal what was inside Astrid's hardcase.",
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
          name: "Episode 5 Ending Explained",
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
        "The Long Dark Episode 5 Ending Explained: What The Light At The End Of All Things Really Means",
      description:
        "This guide explains The Long Dark Episode 5 ending, including Wintermute, Dr. Atwood's reveal, Astrid's hardcase, the final broadcast, Mackenzie's sacrifice, and why the ending works as both resolution and cliffhanger.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/suzuki-radio-telescope.jpg`,
        `${siteUrl}/images/the-long-dark/episode-5/cargo-ship.jpg`,
        `${siteUrl}/images/the-long-dark/episode-5/perseverance-mills-arrival.jpg`,
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
          name: "Wintermute",
        },
        {
          "@type": "Thing",
          name: "Astrid's hardcase",
        },
        {
          "@type": "Thing",
          name: "Geomagnetic storm",
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
          title="The Long Dark Episode 5 Ending Explained: What The Light At The End Of All Things Really Means"
          description="Confused by The Long Dark Episode 5 ending? This guide explains Wintermute, Atwood's reveal, Astrid's final broadcast, Mackenzie's sacrifice, Mathis, and what the ending really means."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "episode-5-ending-explained-in-one-paragraph",
              label: "Ending in one paragraph",
            },
            {
              id: "what-dr-atwood-finally-reveals-about-wintermute",
              label: "Atwood and Wintermute",
            },
            {
              id: "why-the-cargo-ship-matters-so-much",
              label: "Why the cargo ship matters",
            },
            {
              id: "what-the-aurora-is-actually-doing-to-people",
              label: "What the Aurora is doing",
            },
            {
              id: "what-is-in-astrids-hardcase",
              label: "What is in the hardcase",
            },
            {
              id: "why-astrid-kept-the-case-secret-for-so-long",
              label: "Why Astrid kept it secret",
            },
            {
              id: "why-the-case-could-not-save-donner",
              label: "Why it could not save Donner",
            },
            {
              id: "why-mackenzie-gives-himself-up-at-the-end",
              label: "Why Mackenzie gives himself up",
            },
            {
              id: "what-the-long-dark-finally-means-in-episode-5",
              label: "What The Long Dark means",
            },
            {
              id: "is-episode-5-a-real-ending-or-a-cliffhanger",
              label: "Ending or cliffhanger?",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5",
              label: "The Long Dark Episode 5 Guide Hub",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-walkthrough",
              label: "Episode 5 Walkthrough",
            },
            {
              href: "/the-long-dark-episode-5/whats-in-astrids-hardcase-explained",
              label: "What Is in Astrid's Hardcase?",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations",
              label: "Missing People Locations Guide",
            },
          ]}
        >
          <Episode5EndingExplainedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}