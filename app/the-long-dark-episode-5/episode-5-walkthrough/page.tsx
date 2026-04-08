import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Episode5WalkthroughContent from "@/data/the-long-dark/episode-5-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/episode-5-walkthrough`;

export const metadata: Metadata = {
  title: "The Long Dark Episode 5 Walkthrough: Full Story Guide",
  description:
    "Step-by-step The Long Dark Episode 5 walkthrough covering Perseverance Mills, the mine, the substations, the SAR station, and the ending.",
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
          name: "Episode 5 Walkthrough",
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
      headline: "The Long Dark Episode 5 Walkthrough: Full Story Guide",
      description:
        "Step-by-step walkthrough for The Long Dark Episode 5, covering the full route from Perseverance Mills to the ending.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/perseverance-mills-arrival.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/cargo-ship.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/suzuki-radio-telescope.webp`,
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
          title="The Long Dark Episode 5 Walkthrough: Full Story Guide"
          description="Step-by-step The Long Dark Episode 5 walkthrough covering Perseverance Mills, the mine, the substations, the SAR station, and the ending."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "part-1-astrid-in-perseverance-mills",
              label: "Astrid in Perseverance Mills",
            },
            {
              id: "part-2-astrid-radio-hut-and-desperation-bay",
              label: "Radio hut and Desperation Bay",
            },
            {
              id: "part-3-mackenzie-and-jace-through-the-wilderness",
              label: "Mackenzie and Jace",
            },
            {
              id: "part-4-the-mine-walkthrough",
              label: "Mine walkthrough",
            },
            {
              id: "part-5-reach-atwood-and-start-the-substation-objective",
              label: "Atwood and substations",
            },
            {
              id: "part-6-the-suzuki-radio-telescope-sequence",
              label: "Suzuki Radio Telescope",
            },
            {
              id: "part-7-astrids-sar-station-and-train-section",
              label: "SAR station and train",
            },
            {
              id: "part-8-mackenzie-in-occupied-perseverance-mills",
              label: "Occupied Perseverance Mills",
            },
            {
              id: "episode-5-ending-summary",
              label: "Ending summary",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-long-dark-episode-5/",
              label: "The Long Dark Episode 5 Guide",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations/",
              label: "Episode 5 Missing People Locations",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-ending-explained/",
              label: "Episode 5 Ending Explained",
            },
          ]}
        >
          <Episode5WalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}