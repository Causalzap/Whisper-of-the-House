import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MagicalPrincessForbiddenResearchGuideContent from "@/data/magical-princess/forbidden-research-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/magical-princess/forbidden-research-guide`;

export const metadata: Metadata = {
  title: "How to Unlock Forbidden Research in Magical Princess",
  description:
    "Unlock Forbidden Research in Magical Princess: defeat Blackburn, get Cornet's necklace, start NG+, and replace Decipher Literature at the Library.",
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
          name: "Forbidden Research Guide",
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
      headline: "How to Unlock Forbidden Research in Magical Princess",
      description:
        "Unlock Forbidden Research in Magical Princess by defeating Blackburn, carrying Cornet's necklace into NG+, and replacing Decipher Literature.",
      image: [
        `${siteUrl}/images/magical-princess/forbidden-research-library-option.webp`,
        `${siteUrl}/images/magical-princess/ng-plus-replay-blessings.webp`,
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
          name: "Magical Princess Forbidden Research",
        },
        {
          "@type": "Thing",
          name: "Decipher Literature",
        },
        {
          "@type": "Thing",
          name: "Blackburn",
        },
        {
          "@type": "Thing",
          name: "Cornet's necklace",
        },
        {
          "@type": "Thing",
          name: "Cornet",
        },
        {
          "@type": "Thing",
          name: "Cornelia",
        },
        {
          "@type": "Thing",
          name: "Royal Library",
        },
        {
          "@type": "Thing",
          name: "Forbidden Literary Explorer",
        },
        {
          "@type": "Thing",
          name: "Infinite Mirror Labyrinth",
        },
        {
          "@type": "Thing",
          name: "Heir of the Stargazer",
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
          name: "Where does the Forbidden Research route start?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Forbidden Research route starts from the Red Moon or Crimson Moon secret story route, not from the Library. Push that story route until you reach Blackburn, then carry Cornet's necklace into NG+.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Blackburn?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Blackburn is the boss gate for the Forbidden Research route. He appears through the Red Moon or Crimson Moon secret story chain, not through normal Library work.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Cornelia and Cornet?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cornelia is the Queen route character tied to outings, affinity, Two Queens, and the Inheritance Fragment. Cornet is the late-route character tied to Blackburn, the necklace, NG+, Forbidden Research, and the Golden Ending route.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I only see Decipher Literature?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You only see Decipher Literature because Forbidden Research has not unlocked yet. You need the Blackburn to Cornet's necklace to NG+ trigger before the Library changes.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to max Decipher Literature first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Maxing Decipher Literature does not unlock Forbidden Research and does not count for Forbidden Literary Explorer.",
          },
        },
        {
          "@type": "Question",
          name: "Is Forbidden Research a third Library option?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Forbidden Research replaces Decipher Literature. If Decipher Literature is still there, the hidden research route has not unlocked.",
          },
        },
        {
          "@type": "Question",
          name: "What unlocks Forbidden Research?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The unlock chain is Red Moon or Crimson Moon route, then Blackburn, then Cornet's necklace, then NG+, then Royal Library. After you bring the necklace into the next loop, Decipher Literature is replaced by Forbidden Research.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after Forbidden Research Level 5?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "At Level 5, Anna tells you about the Infinite Mirror Labyrinth. That is your next cue for the Labyrinth route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Forbidden Literary Explorer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Reach Forbidden Research Level 5 at the Royal Library.",
          },
        },
        {
          "@type": "Question",
          name: "Is Forbidden Research required for Heir of the Stargazer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Heir of the Stargazer uses the Inheritance Fragment, Forbidden Research, and Infinite Mirror Labyrinth route chain.",
          },
        },
        {
          "@type": "Question",
          name: "Is Forbidden Research required for Golden Ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Golden Ending is tied to the Labyrinth special route, and Forbidden Research is part of that unlock path.",
          },
        },
        {
          "@type": "Question",
          name: "Does Golden Ending count as a normal graduation ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Golden Ending does not give the normal graduation ending flow. You do not get a career ending, marriage ending, or standard partner or no-partner completion result from that loop.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Forbidden Research before partner endings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If your goal is Heir of the Stargazer or Golden Ending, yes. Keep the loop focused on the secret route first. Do partner endings in a separate cleanup loop unless you already know they will not interfere.",
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
          title="How to Unlock Forbidden Research in Magical Princess"
          description="Unlock Forbidden Research by following the Red Moon / Crimson Moon route, defeating Blackburn, carrying Cornet's necklace into NG+, and replacing Decipher Literature at the Royal Library."
          gameTitle="Magical Princess"
          gameHref="/magical-princess/endings-guide"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 3, 2026"
          toc={[
            {
              id: "how-to-unlock-forbidden-research",
              label: "Unlock route",
            },
            {
              id: "where-the-route-starts",
              label: "Route start",
            },
            {
              id: "who-is-blackburn",
              label: "Blackburn",
            },
            {
              id: "cornet-vs-cornelia",
              label: "Cornet vs Cornelia",
            },
            {
              id: "forbidden-research-vs-decipher-literature",
              label: "Decipher vs Forbidden",
            },
            {
              id: "why-forbidden-research-is-not-showing-up",
              label: "Troubleshooting",
            },
            {
              id: "forbidden-research-level-5",
              label: "Level 5",
            },
            {
              id: "how-it-connects-to-heir-of-the-stargazer",
              label: "True ending",
            },
            {
              id: "how-it-connects-to-golden-ending",
              label: "Golden ending",
            },
            {
              id: "related-routes-and-achievements",
              label: "Related routes",
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
              href: "/magical-princess/golden-ending-guide",
              label: "Golden Ending Guide",
            },
            {
              href: "/magical-princess/two-queens-ending-guide",
              label: "Two Queens Ending Guide",
            },
            {
              href: "/magical-princess/career-endings-requirements",
              label: "Career Endings Requirements Guide",
            },
          ]}
        >
          <MagicalPrincessForbiddenResearchGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}