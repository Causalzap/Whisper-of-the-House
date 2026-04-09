import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WhatToDoAfterTheAutopsyContent from "@/data/the-long-dark/what-to-do-after-the-autopsy.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/what-to-do-after-the-autopsy`;

export const metadata: Metadata = {
  title: "What to Do After the Autopsy in The Long Dark Ep 5",
  description:
    "Stuck after the autopsy in The Long Dark Episode 5? This guide explains why Terry's radio hut is the next objective and what to do before heading to Desperation Bay.",
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
          name: "What to Do After the Autopsy",
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
      headline: "What to Do After the Autopsy in The Long Dark Episode 5",
      description:
        "This guide explains what to do after the autopsy in The Long Dark Episode 5, why Terry is the next objective, and how this step leads to Desperation Bay.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/radio-hut.webp`,
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
          name: "Autopsy objective",
        },
        {
          "@type": "Thing",
          name: "Terry's radio hut",
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
          title="What to Do After the Autopsy in The Long Dark Episode 5"
          description="Stuck after the autopsy in The Long Dark Episode 5? This guide explains why Terry's radio hut is the next objective and what to do before heading to Desperation Bay."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 9, 2026"
          toc={[
            {
              id: "what-to-do-after-the-autopsy-in-one-paragraph",
              label: "Quick answer",
            },
            {
              id: "why-the-autopsy-changes-the-route",
              label: "Why the route changes",
            },
            {
              id: "why-terry-is-the-next-objective",
              label: "Why Terry is next",
            },
            {
              id: "where-to-go-after-the-autopsy",
              label: "Where to go next",
            },
            {
              id: "most-common-after-the-autopsy-mistakes",
              label: "Common mistakes",
            },
            {
              id: "what-happens-when-you-reach-terry",
              label: "What happens at Terry's hut",
            },
            {
              id: "how-this-fits-into-the-main-walkthrough",
              label: "How this fits the walkthrough",
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
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations/",
              label: "Episode 5 Missing People Locations",
            },
            {
              href: "/the-long-dark-episode-5/",
              label: "The Long Dark Episode 5 Guide Hub",
            },
          ]}
        >
          <WhatToDoAfterTheAutopsyContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}