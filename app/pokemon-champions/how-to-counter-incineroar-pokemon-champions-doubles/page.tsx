import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IncineroarCounterGuideContent from "@/data/pokemon-champions/incineroar-counter-pokemon-champions-doubles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles`;

export const metadata: Metadata = {
  title:
    "How to Counter Incineroar in Pokemon Champions Doubles | Fake Out, Parting Shot, and Tempo Answers",
  description:
    "Learn how to counter Incineroar in Pokemon Champions Doubles with practical answers to Fake Out, Intimidate, and Parting Shot, plus the best team structures for handling its tempo control.",
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
          name: "How to Counter Incineroar in Pokemon Champions Doubles",
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
        "How to Counter Incineroar in Pokemon Champions Doubles",
      description:
        "A practical counterplay guide for dealing with Incineroar in Pokemon Champions Doubles, including Fake Out, Intimidate, Parting Shot, and the best ways to stop Incineroar from controlling the pace of the game.",
      image: [
        `${siteUrl}/images/pokemon-champions/pokemon-champions-incineroar-standard-set.webp`,
        `${siteUrl}/images/pokemon-champions/pokemon-champions-incineroar-sinistcha-switch-core.webp`,
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
          name: "Incineroar",
        },
        {
          "@type": "Thing",
          name: "Fake Out",
        },
        {
          "@type": "Thing",
          name: "Parting Shot",
        },
        {
          "@type": "Thing",
          name: "Intimidate",
        },
        {
          "@type": "Thing",
          name: "Tempo Control",
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
          title="How to Counter Incineroar in Pokemon Champions Doubles"
          description="Learn how to beat Incineroar’s Fake Out, Intimidate, and Parting Shot lines in Pokemon Champions Doubles, and which answers actually stop it from controlling the pace of the game."
          gameTitle="Pokemon Champions"
          gameHref="/pokemon-champions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 15, 2026"
          toc={[
            {
              id: "why-incineroar-is-so-hard-to-deal-with",
              label: "Why Incineroar is hard to deal with",
            },
            {
              id: "what-incineroar-is-actually-trying-to-do",
              label: "What Incineroar is trying to do",
            },
            {
              id: "the-best-practical-counters-to-incineroar",
              label: "Best practical counters",
            },
            {
              id: "how-to-handle-fake-out",
              label: "How to handle Fake Out",
            },
            {
              id: "how-to-stop-parting-shot-from-winning-the-turn",
              label: "How to stop Parting Shot",
            },
            {
              id: "why-bulky-incineroar-cores-are-so-annoying",
              label: "Why bulky Incineroar cores are annoying",
            },
            {
              id: "when-you-should-attack-incineroar-and-when-you-should-not",
              label: "When to attack Incineroar",
            },
            {
              id: "common-mistakes-players-make-into-incineroar",
              label: "Common mistakes",
            },
            {
              id: "quick-counter-table",
              label: "Quick Counter Table",
            },
            {
              id: "what-kinds-of-teams-handle-incineroar-best",
              label: "What teams handle Incineroar best",
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
              href: "/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles/",
              label: "How to Deal With Sneasler in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles/",
              label: "How to Beat Tailwind in Pokemon Champions Doubles",
            },
            {
              href: "/pokemon-champions",
              label: "Pokemon Champions Doubles Speed Control Guide",
            },
          ]}
        >
          <IncineroarCounterGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}