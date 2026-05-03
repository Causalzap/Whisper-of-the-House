import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MagicalPrincessTwoQueensEndingGuideContent from "@/data/magical-princess/two-queens-ending-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/magical-princess/two-queens-ending-guide`;

export const metadata: Metadata = {
  title: "Magical Princess Two Queens Ending Guide",
  description:
    "Get Two Queens in Magical Princess: raise Cornelia affinity, avoid partner locks, win Red Moon Eve, and secure the Inheritance Fragment.",
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
          name: "Two Queens Ending Guide",
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
      headline: "Magical Princess Two Queens Ending Guide",
      description:
        "This Magical Princess guide explains how to get the Two Queens Ending by raising Queen Cornelia's affinity, avoiding partner-route locks, accepting Cornelia's final-day invitation, winning Red Moon Eve, and checking the Inheritance Fragment for the true ending route.",
      image: [
        `${siteUrl}/images/magical-princess/cornelia-queen-intro.webp`,
        `${siteUrl}/images/magical-princess/cornelia-hangout-event.webp`,
        `${siteUrl}/images/magical-princess/cornelia-second-hangout.webp`,
        `${siteUrl}/images/magical-princess/red-moon-protect-city-choice.webp`,
        `${siteUrl}/images/magical-princess/ng-plus-replay-blessings.webp`,
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
          name: "Magical Princess Two Queens Ending",
        },
        {
          "@type": "Thing",
          name: "Two Queens",
        },
        {
          "@type": "Thing",
          name: "Queen Cornelia",
        },
        {
          "@type": "Thing",
          name: "Cornelia affinity",
        },
        {
          "@type": "Thing",
          name: "Royal Rendezvous",
        },
        {
          "@type": "Thing",
          name: "Side-by-Side with Her Majesty",
        },
        {
          "@type": "Thing",
          name: "Red Moon Eve",
        },
        {
          "@type": "Thing",
          name: "Inheritance Fragment",
        },
        {
          "@type": "Thing",
          name: "Heir of the Stargazer",
        },
        {
          "@type": "Thing",
          name: "Forbidden Research",
        },
        {
          "@type": "Thing",
          name: "Golden Ending",
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
          name: "Is Two Queens required for the true ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Two Queens gives the Inheritance Fragment, which is required for the Heir of the Stargazer true ending route.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get Two Queens on the first playthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Two Queens is a NG+ secret ending. The earliest practical attempt is Loop 2, your first NG+.",
          },
        },
        {
          "@type": "Question",
          name: "What loop is Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you get Two Queens in Loop 2 and confirm the Inheritance Fragment in the next carry-over state, the earliest practical Heir of the Stargazer attempt is Loop 3, your second NG+.",
          },
        },
        {
          "@type": "Question",
          name: "How do I raise Cornelia affinity?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose Cornelia outings, Queen visits, and Cornelia-related route events whenever they appear. Use Royal Rendezvous and Side-by-Side with Her Majesty as your progress checks.",
          },
        },
        {
          "@type": "Question",
          name: "How many Cornelia outings do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Five Cornelia outings are the Royal Rendezvous milestone. For Two Queens, keep going until Cornelia affinity is maxed and Side-by-Side with Her Majesty is secured.",
          },
        },
        {
          "@type": "Question",
          name: "Is Two Queens the same as a Cornelia partner ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Two Queens is Cornelia's secret Queen-route ending. It uses Cornelia affinity, but it is not the same as a normal companion partner ending.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Cornelia's final invitation not appear even though her affinity was high?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Another route may have taken priority, or Cornelia may not be fully maxed. Check whether you accepted a confession, special date, romance activation, or final partner prompt from another companion.",
          },
        },
        {
          "@type": "Question",
          name: "Can I date companions while going for Two Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can interact with companions, but do not accept confession, special date, or final partner commitment prompts if your target is Two Queens.",
          },
        },
        {
          "@type": "Question",
          name: "What is Red Moon Eve?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red Moon Eve is the final battle sequence after Cornelia's final-day invitation. Winning it completes Two Queens and gives the Inheritance Fragment.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Inheritance Fragment carry over to NG+?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After completing Two Queens, check your NG+ carry-over or inherited items screen before committing the next run. The Fragment is the key item for Heir of the Stargazer, so confirm it before starting the Library and Labyrinth half.",
          },
        },
        {
          "@type": "Question",
          name: "Is Two Queens the same as Golden Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Two Queens is Cornelia's secret route and leads toward Heir of the Stargazer. Golden Ending is tied to Cornet's necklace, Forbidden Research, and the Labyrinth special route.",
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
          title="Magical Princess Two Queens Ending Guide"
          description="Get Two Queens by raising Queen Cornelia's affinity, avoiding partner-route locks, accepting her final-day invitation, and winning Red Moon Eve."
          gameTitle="Magical Princess"
          gameHref="/magical-princess/endings-guide"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "two-queens-route-overview",
              label: "Route overview",
            },
            {
              id: "loop-order",
              label: "Loop order",
            },
            {
              id: "cornelia-route-checklist",
              label: "Cornelia checklist",
            },
            {
              id: "two-queens-vs-cornelia-partner-ending",
              label: "Two Queens vs partner",
            },
            {
              id: "avoid-partner-route-lock",
              label: "Partner lock",
            },
            {
              id: "final-day-invitation",
              label: "Final invitation",
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
              id: "two-queens-to-true-ending",
              label: "True ending link",
            },
            {
              id: "why-two-queens-is-not-unlocking",
              label: "Troubleshooting",
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
              href: "/magical-princess/true-ending-heir-of-the-stargazer",
              label: "True Ending / Heir of the Stargazer Guide",
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
          <MagicalPrincessTwoQueensEndingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}