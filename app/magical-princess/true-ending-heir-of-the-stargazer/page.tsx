import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MagicalPrincessTrueEndingHeirOfTheStargazerContent from "@/data/magical-princess/true-ending-heir-of-the-stargazer.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/magical-princess/true-ending-heir-of-the-stargazer`;

export const metadata: Metadata = {
  title: "Magical Princess True Ending Guide",
  description:
    "Get Heir of the Stargazer in Magical Princess: complete Two Queens, carry the Inheritance Fragment, finish Forbidden Research, and clear the Labyrinth.",
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
          name: "Magical Princess Endings Guide",
          item: `${siteUrl}/magical-princess/endings-guide`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "True Ending / Heir of the Stargazer",
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
      headline: "Magical Princess True Ending Guide: Heir of the Stargazer",
      description:
        "This Magical Princess guide explains how to get the True Ending, Heir of the Stargazer, by completing Two Queens, carrying the Inheritance Fragment into NG+, finishing Forbidden Research, and clearing Infinite Mirror Labyrinth.",
      image: [
        `${siteUrl}/images/magical-princess/cornelia-queen-intro.webp`,
        `${siteUrl}/images/magical-princess/cornelia-hangout-event.webp`,
        `${siteUrl}/images/magical-princess/ng-plus-replay-blessings.webp`,
        `${siteUrl}/images/magical-princess/forbidden-research-library-option.webp`,
        `${siteUrl}/images/magical-princess/royal-library-secret-room.webp`,
        `${siteUrl}/images/magical-princess/red-moon-blackburn-investigation.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
      about: [
        {
          "@type": "VideoGame",
          name: "Magical Princess",
        },
        {
          "@type": "Thing",
          name: "Magical Princess True Ending",
        },
        {
          "@type": "Thing",
          name: "Heir of the Stargazer",
        },
        {
          "@type": "Thing",
          name: "Two Queens Ending",
        },
        {
          "@type": "Thing",
          name: "Queen Cornelia",
        },
        {
          "@type": "Thing",
          name: "Inheritance Fragment",
        },
        {
          "@type": "Thing",
          name: "Forbidden Research",
        },
        {
          "@type": "Thing",
          name: "Infinite Mirror Labyrinth",
        },
        {
          "@type": "Thing",
          name: "Red Moon Eve",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Heir of the Stargazer the true ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Heir of the Stargazer is the true ending route for Magical Princess.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get Heir of the Stargazer on the first playthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. You need at least a later NG+ loop because the route depends on Two Queens and the Inheritance Fragment.",
          },
        },
        {
          "@type": "Question",
          name: "What ending do I need before Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need Two Queens first. Two Queens gives you the Inheritance Fragment, which carries into the later true ending route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the Inheritance Fragment?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Complete the Two Queens route by raising Queen Cornelia's route state, accepting her final-day invitation, and winning the Red Moon Eve battle.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Cornelia's invitation not appear?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably did not reach the required Cornelia route state, or you committed to another companion partner ending before the final day.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if I accidentally locked a partner route?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you see a confession-style scene, special date, romance activation, or final partner commitment prompt, assume the partner route may take priority. Reload if your target is Two Queens.",
          },
        },
        {
          "@type": "Question",
          name: "Can I date companions during the Two Queens run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can interact with companions, but do not lock into a partner ending. Keep the route clean until Cornelia's final-day event is secured.",
          },
        },
        {
          "@type": "Question",
          name: "When does the Red Moon Eve battle happen?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red Moon Eve happens after you accept Cornelia's final-day invitation on the Two Queens route. Do not confuse it with normal Blood Moon or Crimson Moon city events.",
          },
        },
        {
          "@type": "Question",
          name: "How strong should Alice be for Red Moon Eve and the Labyrinth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "As a practical baseline, aim for at least B or B+ Battle Rank before Red Moon Eve, one A-rank main combat path, updated gear, and a support or recovery plan. For Infinite Mirror Labyrinth, push closer to A- or A Battle Rank if you want a safer clear. Treat these as route-planning baselines, not confirmed hard requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Is Forbidden Research required for Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Forbidden Research is the Royal Library gate that leads toward Infinite Mirror Labyrinth.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after Forbidden Research Level 5?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow Anna's cue toward Infinite Mirror Labyrinth, then prepare for the final dungeon route.",
          },
        },
        {
          "@type": "Question",
          name: "Is Infinite Mirror Labyrinth required?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Clearing Infinite Mirror Labyrinth is the final step before Heir of the Stargazer.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Golden Ending before Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Do Heir of the Stargazer first unless you already understand the Golden Ending consequences and have a separate save.",
          },
        },
      ],
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
          title="Magical Princess True Ending Guide: Heir of the Stargazer"
          description="Get Heir of the Stargazer by completing Two Queens, carrying the Inheritance Fragment into NG+, finishing Forbidden Research, and clearing Infinite Mirror Labyrinth."
          gameTitle="Magical Princess"
          gameHref="/magical-princess/endings-guide"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "true-ending-route-overview",
              label: "Route overview",
            },
            {
              id: "cornelia-route-checklist",
              label: "Cornelia checklist",
            },
            {
              id: "two-queens-requirements",
              label: "Two Queens",
            },
            {
              id: "red-moon-eve-battle",
              label: "Red Moon Eve",
            },
            {
              id: "inheritance-fragment",
              label: "Inheritance Fragment",
            },
            {
              id: "forbidden-research-step",
              label: "Forbidden Research",
            },
            {
              id: "infinite-mirror-labyrinth",
              label: "Labyrinth",
            },
            {
              id: "why-heir-of-the-stargazer-is-not-unlocking",
              label: "Troubleshooting",
            },
            {
              id: "heir-vs-golden-ending",
              label: "True vs Golden",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/magical-princess/endings-guide",
              label: "Magical Princess Endings Guide",
            },
            {
              href: "/magical-princess/two-queens-ending-guide",
              label: "Two Queens Ending Guide",
            },
            {
              href: "/magical-princess/forbidden-research-guide",
              label: "Forbidden Research Guide",
            },
            {
              href: "/magical-princess/golden-ending-guide",
              label: "Golden Ending Guide",
            },
            {
              href: "/magical-princess/career-endings-requirements",
              label: "Career Endings Requirements Guide",
            },
          ]}
        >
          <MagicalPrincessTrueEndingHeirOfTheStargazerContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}