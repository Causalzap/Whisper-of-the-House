import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Directive8020CharacterSurvivalContent from "@/data/directive-8020/character-survival-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/directive-8020/character-survival-guide`;

export const metadata: Metadata = {
    title: "Directive 8020 Survival Guide: Keep Everyone Alive",
    description:
      "Learn how to save Eisele, Cernan, Stafford, and the rest of the crew in Directive 8020. Our character survival guide also explains Carter and Sims' fates.",
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
          name: "Directive 8020 Guide",
          item: `${siteUrl}/directive-8020`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Character Survival Guide",
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
        "Directive 8020 Character Survival Guide: How to Keep Everyone Alive",
      description:
        "A player-first Directive 8020 character survival guide covering each crew member’s highest-risk scene, death-risk diagnosis, Carter and Sims scripted roles, Episode 6 pressure, duplicate checks, and route dependencies.",
      image: [
        `${siteUrl}/images/directive-8020/directive-8020-carter-sims-dead-pod.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-two-eiseles-choice.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-cernan-williams-duplicate-route.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-landing-computer-crash.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-mitchell-fire-choice.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-sample-argument.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-alien-growth-science.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-williams-wakeup.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Directive 8020",
        },
        {
          "@type": "Thing",
          name: "Character Survival",
        },
        {
          "@type": "Thing",
          name: "Everyone Lives",
        },
        {
          "@type": "Thing",
          name: "Eisele",
        },
        {
          "@type": "Thing",
          name: "Cernan",
        },
        {
          "@type": "Thing",
          name: "Stafford",
        },
        {
          "@type": "Thing",
          name: "Mitchell",
        },
        {
          "@type": "Thing",
          name: "Williams",
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
          name: "Can everyone survive in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The active crew can survive through the finale and reach the clean survival route.",
          },
        },
        {
          "@type": "Question",
          name: "Can you save Carter in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Carter is part of the opening mystery and is not a normal active-crew survival target.",
          },
        },
        {
          "@type": "Question",
          name: "Can you save Sims in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No, not like a normal crew member. Sims is tied to the sleep crew mystery, recordings, and mimic setup.",
          },
        },
        {
          "@type": "Question",
          name: "Who is hardest to keep alive in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Eisele and Cernan are among the easiest to lose because later survival scenes can depend on earlier route states.",
          },
        },
        {
          "@type": "Question",
          name: "How do I keep Eisele alive in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Test or scanner logic in duplicate scenes, avoid bad Stafford-related route states, and check Episode 6 pressure if she dies later.",
          },
        },
        {
          "@type": "Question",
          name: "How do I keep Cernan alive in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the Cernan / Williams route and Episode 6 Detour before replaying only the final death scene.",
          },
        },
        {
          "@type": "Question",
          name: "How do I keep Mitchell alive in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Treat Mitchell’s danger scenes as both system problems and rescue problems. Solving only one side can get him killed.",
          },
        },
        {
          "@type": "Question",
          name: "Should I keep Williams alive in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but do not let Williams’ ambition override containment or crew safety.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I get a bad ending even though some characters survived?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A character can survive physically while the route still carries an intruder, duplicate, or contaminated escape condition.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after saving everyone in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Turning Points for endings, monster scenes, and death-route cleanup.",
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
          title="Directive 8020 Character Survival Guide: How to Keep Everyone Alive"
          description="Find each Directive 8020 character’s highest-risk scene, including how to keep Eisele, Cernan, Stafford, Mitchell, Williams, Anders, and Cooper alive, plus why Carter and Sims are not normal save targets."
          gameTitle="Directive 8020"
          gameHref="/directive-8020"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "can-everyone-survive",
              label: "Can everyone survive",
            },
            {
              id: "highest-risk-scenes",
              label: "Highest-risk scenes",
            },
            {
              id: "major-death-risk-scenes",
              label: "Death-risk scenes",
            },
            {
              id: "eisele-survival",
              label: "Keep Eisele alive",
            },
            {
              id: "cernan-survival",
              label: "Keep Cernan alive",
            },
            {
              id: "stafford-survival",
              label: "Keep Stafford alive",
            },
            {
              id: "mitchell-survival",
              label: "Keep Mitchell alive",
            },
            {
              id: "williams-survival",
              label: "Keep Williams alive",
            },
            {
              id: "anders-survival",
              label: "Keep Anders alive",
            },
            {
              id: "cooper-survival",
              label: "Keep Cooper alive",
            },
            {
              id: "route-dependencies",
              label: "Route dependencies",
            },
            {
              id: "if-someone-dies",
              label: "If someone dies",
            },
            {
              id: "best-order",
              label: "Best order",
            },
            {
              id: "what-to-read-next",
              label: "Read next",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/directive-8020",
              label: "Directive 8020 Save Everyone Guide",
            },
            {
              href: "/directive-8020/choices-consequences",
              label: "Directive 8020 Choices and Consequences Guide",
            },
            {
              href: "/directive-8020/all-monster-scenes-alien-duplicates",
              label: "Directive 8020 Monster Scenes and Alien Duplicates Guide",
            },
            {
              href: "/directive-8020/all-endings",
              label: "Directive 8020 All Endings Guide",
            },
            {
              href: "/directive-8020/all-secrets-simms-recordings-o-death",
              label: "Directive 8020 All Secrets, Simms Recordings, and O Death Locations",
            },
          ]}
        >
          <Directive8020CharacterSurvivalContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}