import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SneaslerGuideContent from "@/data/pokemon-champions/incineroar-counter-pokemon-champions-doubles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles`;

export const metadata: Metadata = {
  title:
    "How to Deal With Sneasler in Pokemon Champions Doubles | Unburden, Fake Out, and Counterplay",
  description:
    "Learn how to deal with Sneasler in Pokemon Champions Doubles with practical counterplay for Unburden, Fake Out, Dire Claw, and the item patterns that make Sneasler so hard to manage.",
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
          item: `${siteUrl}/pokemon-champions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Deal With Sneasler in Pokemon Champions Doubles",
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
      headline: "How to Deal With Sneasler in Pokemon Champions Doubles",
      description:
        "A practical counterplay guide for dealing with Sneasler in Pokemon Champions Doubles, including Unburden timing, Fake Out pressure, Dire Claw status pressure, and the cleanest ways to stop Sneasler from taking over a game.",
      image: [
        `${siteUrl}/images/pokemon-champions/pokemon-champions-sneasler-stats-and-weaknesses.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-sneasler-common-moves.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-sneasler-utility-variant.webp`,
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
          name: "Sneasler",
        },
        {
          "@type": "Thing",
          name: "Unburden",
        },
        {
          "@type": "Thing",
          name: "Fake Out",
        },
        {
          "@type": "Thing",
          name: "Dire Claw",
        },
        {
          "@type": "Thing",
          name: "Speed Control",
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
          title="How to Deal With Sneasler in Pokemon Champions Doubles"
          description="Learn how to beat Sneasler’s Unburden, Fake Out, and Dire Claw pressure in Pokemon Champions Doubles, and which answers actually stop it from taking over speed control."
          gameTitle="Pokemon Champions"
          gameHref="/pokemon-champions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 15, 2026"
          toc={[
            {
              id: "why-sneasler-is-so-hard-to-deal-with",
              label: "Why Sneasler is hard to deal with",
            },
            {
              id: "what-makes-sneasler-so-annoying-in-practice",
              label: "What makes Sneasler annoying",
            },
            {
              id: "how-unburden-changes-the-matchup",
              label: "How Unburden changes the matchup",
            },
            {
              id: "what-actually-checks-sneasler-best",
              label: "What actually checks Sneasler best",
            },
            {
              id: "when-to-hit-sneasler-and-when-to-hit-its-partner",
              label: "When to hit Sneasler or its partner",
            },
            {
              id: "watch-for-utility-variants",
              label: "Watch for utility variants",
            },
            {
              id: "common-mistakes-players-make-into-sneasler",
              label: "Common mistakes",
            },
            {
              id: "quick-counter-table",
              label: "Quick Counter Table",
            },
            {
              id: "what-kinds-of-teams-handle-sneasler-best",
              label: "What teams handle Sneasler best",
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
              href: "/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles/",
              label: "How to Counter Incineroar in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles/",
              label: "How to Beat Tailwind in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles/",
              label: "How to Beat Trick Room in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions",
              label: "Pokemon Champions Doubles Speed Control Guide",
            },
          ]}
        >
          <SneaslerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}