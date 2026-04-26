import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AstridsHardcaseExplainedContent from "@/data/the-long-dark/whats-in-astrids-hardcase-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-long-dark-episode-5/whats-in-astrids-hardcase-explained`;

export const metadata: Metadata = {
    title: "What Is in Astrid's Hardcase in The Long Dark Episode 5?",
    description: "The case finally opens. Uncover what's inside Astrid's hardcase in The Long Dark Episode 5, why she smuggled the meds, and the tragic truth about Donner.",
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
          name: "What Is in Astrid's Hardcase?",
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
      headline: "What Is in Astrid's Hardcase in The Long Dark Episode 5?",
      description:
        "This guide explains what is in Astrid's hardcase in The Long Dark Episode 5, why she kept it secret, why it could not save Donner, and what the reveal means for the bigger story.",
      image: [
        `${siteUrl}/images/the-long-dark/episode-5/hardcase-cure-reveal.webp`,
        `${siteUrl}/images/the-long-dark/episode-5/where-is-the-case.webp`,
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
          name: "Astrid's hardcase",
        },
        {
          "@type": "Thing",
          name: "Experimental medication",
        },
        {
          "@type": "Thing",
          name: "Aurora-linked cognitive symptoms",
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
          title="What Is in Astrid's Hardcase in The Long Dark Episode 5?"
          description="Wondering what is in Astrid's hardcase in The Long Dark Episode 5? This guide explains the reveal, why Astrid kept it secret, why it could not save Donner, and what it means for the bigger story."
          gameTitle="The Long Dark Episode 5"
          gameHref="/the-long-dark-episode-5"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 5, 2026"
          toc={[
            {
              id: "what-is-in-astrids-hardcase-in-one-paragraph",
              label: "Hardcase in one paragraph",
            },
            {
              id: "what-the-game-actually-confirms-about-the-hardcase",
              label: "What the game confirms",
            },
            {
              id: "why-the-hardcase-matters-so-much-in-episode-5",
              label: "Why the hardcase matters",
            },
            {
              id: "is-it-a-cure-or-just-a-treatment",
              label: "Cure or treatment?",
            },
            {
              id: "why-astrid-kept-it-secret-for-so-long",
              label: "Why Astrid kept it secret",
            },
            {
              id: "why-the-hardcase-could-not-save-donner",
              label: "Why it could not save Donner",
            },
            {
              id: "what-the-hardcase-reveal-says-about-astrid",
              label: "What it says about Astrid",
            },
            {
              id: "does-episode-5-fully-answer-the-hardcase-mystery",
              label: "Does Episode 5 fully answer it?",
            },
            {
              id: "was-the-hardcase-reveal-worth-the-wait",
              label: "Was the reveal worth it?",
            },
            {
              id: "what-the-hardcase-reveal-means-for-the-bigger-story",
              label: "What it means for the story",
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
              href: "/the-long-dark-episode-5/episode-5-ending-explained",
              label: "Episode 5 Ending Explained",
            },
            {
              href: "/the-long-dark-episode-5/episode-5-missing-people-locations",
              label: "Missing People Locations Guide",
            },
          ]}
        >
          <AstridsHardcaseExplainedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}