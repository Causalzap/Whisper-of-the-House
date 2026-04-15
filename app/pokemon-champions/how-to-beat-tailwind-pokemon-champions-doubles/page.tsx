import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TailwindGuideContent from "@/data/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles`;

export const metadata: Metadata = {
  title:
    "How to Beat Tailwind in Pokemon Champions Doubles | Taunt, Fake Out, Trick Room, and Speed Control Answers",
  description:
    "Learn how to beat Tailwind in Pokemon Champions Doubles with practical answers like Taunt, Fake Out pressure, mirror Tailwind, Trick Room, and better positioning after the first boosted turn.",
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
          name: "How to Beat Tailwind in Pokemon Champions Doubles",
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
      headline: "How to Beat Tailwind in Pokemon Champions Doubles",
      description:
        "A practical counterplay guide for beating Tailwind in Pokemon Champions Doubles, including Taunt, Fake Out pressure, mirror Tailwind, Trick Room, and how to manage the first boosted turn after Tailwind goes up.",
      image: [
        `${siteUrl}/images/pokemon-champions/pokemon-champions-whimsicott-tailwind-setter.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-aerodactyl-tailwind-setter.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-talonflame-tailwind-setter.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-tailwind-weaknesses.webp`,
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
          name: "Tailwind",
        },
        {
          "@type": "Thing",
          name: "Taunt",
        },
        {
          "@type": "Thing",
          name: "Fake Out",
        },
        {
          "@type": "Thing",
          name: "Trick Room",
        },
        {
          "@type": "Thing",
          name: "Speed Control",
        },
        {
          "@type": "Thing",
          name: "Whimsicott",
        },
        {
          "@type": "Thing",
          name: "Aerodactyl",
        },
        {
          "@type": "Thing",
          name: "Talonflame",
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
          title="How to Beat Tailwind in Pokemon Champions Doubles"
          description="Learn how to counter Tailwind in Pokemon Champions Doubles with Taunt, Fake Out pressure, mirror Tailwind, Trick Room, and the positioning habits that stop the first boosted turn from snowballing."
          gameTitle="Pokemon Champions"
          gameHref="/pokemon-champions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 15, 2026"
          toc={[
            {
              id: "why-tailwind-is-so-hard-to-deal-with",
              label: "Why Tailwind is hard to deal with",
            },
            {
              id: "recognize-the-most-common-tailwind-setters",
              label: "Recognize the most common setters",
            },
            {
              id: "the-best-ways-to-stop-tailwind-from-going-up",
              label: "Best ways to stop Tailwind",
            },
            {
              id: "if-tailwind-does-go-up-do-not-lose-the-next-turn",
              label: "If Tailwind goes up",
            },
            {
              id: "turn-1-should-you-hit-the-setter-or-the-partner",
              label: "Turn 1: setter or partner",
            },
            {
              id: "what-kinds-of-teams-handle-tailwind-best",
              label: "What teams handle Tailwind best",
            },
            {
              id: "common-mistakes-players-make-into-tailwind",
              label: "Common mistakes",
            },
            {
              id: "quick-counter-table",
              label: "Quick Counter Table",
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
              href: "/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles/",
              label: "How to Beat Trick Room in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles/",
              label: "How to Counter Incineroar in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles/",
              label: "How to Deal With Sneasler in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions",
              label: "Pokemon Champions Doubles Speed Control Guide",
            },
          ]}
        >
          <TailwindGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}