import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Directive8020AllEndingsContent from "@/data/directive-8020/all-endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/directive-8020/all-endings`;

export const metadata: Metadata = {
    title: "Directive 8020 Endings Guide: Unlock Every Conclusion",
    description:
      "Discover how to unlock every ending in Directive 8020. Our guide covers Everyone Lives, Homeward Bound, Cycle 13, Hitchhiker, and all bad destinies.",
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
          name: "All Endings",
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
        "Directive 8020 All Endings Guide: How to Get Every Ending",
      description:
        "A complete Directive 8020 all endings guide covering the 10 main ending variants, final message choices, Destinies, Turning Points, Cycle 13, Eisele post-credit scenes, and bad ending routes.",
      image: [
        `${siteUrl}/images/directive-8020/directive-8020-everyone-lives-ending.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-final-boss-reactor.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-eisele-humanitarian-post-credits.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-eisele-scientist-post-credits.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-docked-not-alone-ending.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-bad-ending-everyone-dies.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Directive 8020",
        },
        {
          "@type": "Thing",
          name: "All Endings",
        },
        {
          "@type": "Thing",
          name: "Everyone Lives Ending",
        },
        {
          "@type": "Thing",
          name: "Beacon Ending",
        },
        {
          "@type": "Thing",
          name: "Destinies",
        },
        {
          "@type": "Thing",
          name: "Cycle 13",
        },
        {
          "@type": "Thing",
          name: "Bad Ending",
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
          name: "How many endings are in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Directive 8020 has 10 main ending variants: Everyone Lives, Forever and Ever, Docked, Beacon, Docked / Not Alone, Homeward Bound / Massacre, Homeward Bound / Masks Off, Hitchhiker, Game Over, and Bad Ending / Everyone Dies.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best ending in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best ending for most players is Everyone Lives, where the active crew survives the final boss, reactor escape, and ending sequence with the cleanest route state.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the Beacon ending in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "To get the Beacon ending, branch from the final-message choice near the end and choose the distress / Save Our Souls-style message route. Choosing the warning-style route leads toward a different post-credit interpretation.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Destinies system affect the ending in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Stafford's The Father and Eisele's Humanist are the two Destinies you should check first for best-ending and post-credit cleanup. The Father comes from protective, mentor-style Stafford choices, while Humanist comes from Eisele choices that prioritize humanity over research or project continuation.",
          },
        },
        {
          "@type": "Question",
          name: "Do Cooper, Young, and Cernan Destinies affect the ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cooper, Young, and Cernan Destinies are useful for route-state and completion tracking, but Stafford's The Father and Eisele's Humanist are the first Destinies to check if your best ending or post-credit result is wrong.",
          },
        },
        {
          "@type": "Question",
          name: "What is Cycle 13 in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cycle 13 refers to the wider repeated experiment / clone route structure behind the mission. It helps explain why Forever and Ever and the Eisele post-credit scenes feel like more than normal escape endings.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Eisele the Humanitarian and Eisele the Scientist?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Eisele the Humanitarian focuses on moral cost, compassion, and the meaning of humanity. Eisele the Scientist focuses on research, cycles, the clone project, and the belief that another attempt may eventually succeed.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Homeward Bound / Massacre and Homeward Bound / Masks Off?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Homeward Bound / Massacre focuses on the bloody consequence of the alien threat carrying forward. Homeward Bound / Masks Off focuses more on duplicate identity and reveal conditions within the Homeward Bound route.",
          },
        },
        {
          "@type": "Question",
          name: "What is Docked / Not Alone in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Docked / Not Alone is a darker docked variant where the crew may have escaped one danger but has not truly escaped the alien threat.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the Game Over ending in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Game Over is a fail-state ending tied to having no playable characters left. It is best chased after your survival route, when you are deliberately testing failed branches.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase Everyone Dies first in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Save Everyone Lives for your first route, then chase Everyone Dies after you understand the death checks, duplicate scenes, and ending structure.",
          },
        },
        {
          "@type": "Question",
          name: "Are Directive 8020 endings different on PS5, Xbox, and PC?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The ending structure should be the same across platforms. Platform differences usually affect performance, controls, or patches, not which story endings exist.",
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
          title="Directive 8020 All Endings Guide: Everyone Lives, Beacon, Docked, Bad Ending and More"
          description="See how every Directive 8020 ending works, including Everyone Lives, Beacon, Docked, Docked / Not Alone, Homeward Bound, Hitchhiker, Game Over, Everyone Dies, Destinies, Turning Points, Cycle 13, and Eisele post-credit variants."
          gameTitle="Directive 8020"
          gameHref="/directive-8020"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "how-many-endings",
              label: "How many endings",
            },
            {
              id: "all-endings-overview",
              label: "Endings overview",
            },
            {
              id: "best-ending",
              label: "Best ending",
            },
            {
              id: "destinies-system",
              label: "Destinies",
            },
            {
              id: "everyone-lives-ending",
              label: "Everyone Lives",
            },
            {
              id: "forever-and-ever-ending",
              label: "Forever and Ever",
            },
            {
              id: "cycle-13-explained",
              label: "Cycle 13",
            },
            {
              id: "docked-ending",
              label: "Docked",
            },
            {
              id: "beacon-ending",
              label: "Beacon",
            },
            {
              id: "eisele-final-choice",
              label: "Eisele choice",
            },
            {
              id: "eisele-humanitarian",
              label: "Humanitarian",
            },
            {
              id: "eisele-scientist",
              label: "Scientist",
            },
            {
              id: "docked-not-alone-ending",
              label: "Docked / Not Alone",
            },
            {
              id: "homeward-bound-massacre",
              label: "Homeward Massacre",
            },
            {
              id: "homeward-bound-masks-off",
              label: "Homeward Masks Off",
            },
            {
              id: "hitchhiker-ending",
              label: "Hitchhiker",
            },
            {
              id: "game-over-ending",
              label: "Game Over",
            },
            {
              id: "bad-ending-everyone-dies",
              label: "Everyone Dies",
            },
            {
              id: "turning-point-branches",
              label: "Turning Points",
            },
            {
              id: "final-choice-conditions",
              label: "Final conditions",
            },
            {
              id: "best-ending-cleanup-order",
              label: "Cleanup order",
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
              href: "/directive-8020/character-survival-guide",
              label: "How to Keep Every Character Alive in Directive 8020",
            },
            {
              href: "/directive-8020/all-monster-scenes-alien-duplicates",
              label: "Directive 8020 Monster Scenes and Alien Duplicates Guide",
            },
            {
              href: "/directive-8020/all-secrets-simms-recordings-o-death",
              label: "Directive 8020 All Secrets, Simms Recordings, and O Death Locations",
            },
          ]}
        >
          <Directive8020AllEndingsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}