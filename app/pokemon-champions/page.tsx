import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PokemonChampionsGuideHubContent from "@/data/pokemon-champions/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/pokemon-champions`;

export const metadata: Metadata = {
  title:
    "Pokemon Champions Doubles Speed Control Guide Hub: Tailwind, Trick Room, Fake Out, and Core Matchups",
  description:
    "Looking for the best Pokemon Champions Doubles guides? This hub covers Tailwind, Trick Room, Incineroar, Sneasler, speed control, and the matchup decisions that matter most.",
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
          name: "Pokemon Champions",
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
        "Pokemon Champions Doubles Speed Control Guide Hub: Tailwind, Trick Room, Fake Out, and Core Matchups",
      description:
        "This hub collects the most useful Pokemon Champions Doubles guides, including Tailwind, Trick Room, Incineroar, Sneasler, and the speed-control concepts that decide real games.",
      image: [
        `${siteUrl}/images/pokemon-champions/pokemon-champions-whimsicott-tailwind-setter.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-trick-room-core.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-incineroar-standard-set.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Pokemon Champions",
        },
        {
          "@type": "Thing",
          name: "Doubles",
        },
        {
          "@type": "Thing",
          name: "Speed Control",
        },
        {
          "@type": "Thing",
          name: "Tailwind",
        },
        {
          "@type": "Thing",
          name: "Trick Room",
        },
        {
          "@type": "Thing",
          name: "Fake Out",
        },
        {
          "@type": "Thing",
          name: "Incineroar",
        },
        {
          "@type": "Thing",
          name: "Sneasler",
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
          title="Pokemon Champions Doubles Speed Control Guide: What Actually Decides Games"
          description="Looking for the best Pokemon Champions Doubles guides? This hub points you to Tailwind, Trick Room, Incineroar, and Sneasler guides while explaining the speed-control ideas that matter most."
          gameTitle="Pokemon Champions"
          gameHref="/pokemon-champions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 15, 2026"
          toc={[
            {
              id: "what-speed-control-means-in-pokemon-champions-doubles",
              label: "What speed control means",
            },
            {
              id: "the-four-main-ways-teams-control-speed",
              label: "Four main ways teams control speed",
            },
            {
              id: "tailwind-vs-trick-room",
              label: "Tailwind vs Trick Room",
            },
            {
              id: "why-fake-out-matters-so-much",
              label: "Why Fake Out matters",
            },
            {
              id: "the-first-turn-question-that-decides-many-games",
              label: "The first-turn question",
            },
            {
              id: "common-speed-control-combinations-you-should-recognize",
              label: "Common speed-control combinations",
            },
            {
              id: "how-to-build-a-team-that-does-not-auto-lose-speed-wars",
              label: "How to build against speed wars",
            },
            {
              id: "where-most-players-actually-lose-speed-control-games",
              label: "Where players actually lose",
            },
            {
              id: "best-pages-to-read-next",
              label: "Best pages to read next",
            },
            {
              id: "final-thoughts",
              label: "Final thoughts",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles",
              label: "How to Beat Tailwind in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles",
              label: "How to Beat Trick Room in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles",
              label: "How to Counter Incineroar in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles",
              label: "How to Deal With Sneasler in Pokemon Champions Doubles",
            },
          ]}
        >
          <PokemonChampionsGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}