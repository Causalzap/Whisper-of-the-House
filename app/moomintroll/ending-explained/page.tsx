import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MoomintrollEndingExplainedContent from "@/data/moomintroll/ending-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moomintroll/ending-explained`;

export const metadata: Metadata = {
  title: "Moomintroll Winter’s Warmth Ending Explained",
  description:
    "The finale of our Moomintroll Winter’s Warmth walkthrough! We explain the ending, the Lady of the Cold's arrival, and what Snufkin's return truly means.",
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
          name: "Moomintroll Winter’s Warmth Guide",
          item: `${siteUrl}/moomintroll`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ending Explained",
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
      headline: "Moomintroll Winter’s Warmth Ending Explained",
      description:
        "This Moomintroll Winter’s Warmth ending explained guide breaks down the Great Winter Bonfire, why winter does not end immediately, the false spring morning, Too-ticky and the squirrel rescue, the Lady of the Cold, the underground campfire, Snufkin’s return, and the main themes of the ending.",
      image: [
        `${siteUrl}/images/moomintroll/ending-opening-hibernation.webp`,
        `${siteUrl}/images/moomintroll/ending-squirrel-lady-cold.webp`,
        `${siteUrl}/images/moomintroll/ending-bonfire-celebration.webp`,
        `${siteUrl}/images/moomintroll/ending-false-spring.webp`,
        `${siteUrl}/images/moomintroll/ending-too-ticky-rescue.webp`,
        `${siteUrl}/images/moomintroll/ending-underground-campfire.webp`,
        `${siteUrl}/images/moomintroll/ending-lady-of-the-cold.webp`,
        `${siteUrl}/images/moomintroll/ending-spring-snufkin.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-04-28",
      dateModified: "2026-04-28",
      about: [
        {
          "@type": "VideoGame",
          name: "Moomintroll Winter’s Warmth",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth ending",
        },
        {
          "@type": "Thing",
          name: "Great Winter Bonfire",
        },
        {
          "@type": "Thing",
          name: "Lady of the Cold",
        },
        {
          "@type": "Thing",
          name: "Too-ticky",
        },
        {
          "@type": "Thing",
          name: "Moomintroll squirrel ending",
        },
        {
          "@type": "Thing",
          name: "Snufkin",
        },
        {
          "@type": "Thing",
          name: "Moomintroll Winter’s Warmth story explained",
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
          name: "What happens at the end of Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moomintroll lights the Great Winter Bonfire, but winter does not end immediately. He later rescues Too-ticky and the squirrel, sees the Lady of the Cold, and finally wakes up to spring with his family awake and Snufkin back.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Great Winter Bonfire the final ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It is a major story climax, but the true ending comes after the false spring morning and the Too-ticky and squirrel rescue.",
          },
        },
        {
          "@type": "Question",
          name: "Why is it still winter after the bonfire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because the bonfire brings the community together, but Moomintroll still has to face the fear and loss that started his winter journey.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Lady of the Cold evil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. She is dangerous and frightening, but the ending frames her as a natural force rather than a villain.",
          },
        },
        {
          "@type": "Question",
          name: "Is the squirrel the same squirrel from the beginning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The game leaves that slightly open. The important point is that Moomintroll chooses hope and kindness instead of needing perfect certainty.",
          },
        },
        {
          "@type": "Question",
          name: "Does Too-ticky die?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Moomintroll rescues Too-ticky and the squirrel after they fall through the ice.",
          },
        },
        {
          "@type": "Question",
          name: "Does Snufkin appear in Moomintroll Winter’s Warmth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Snufkin returns when spring arrives at the end.",
          },
        },
        {
          "@type": "Question",
          name: "Does the ending set up another game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not directly. It closes the winter story, though it naturally connects to the broader Moomin world and Snufkin’s seasonal return.",
          },
        },
        {
          "@type": "Question",
          name: "Should I finish collectibles before the ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you care about 100%. Use the Achievements and 100% Guide before treating the final route as your last objective.",
          },
        },
        {
          "@type": "Question",
          name: "What is the main message of the ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ending says that winter is not only something to escape. It is frightening and temporary, but it can also contain beauty, friendship, courage, and change.",
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
          title="Moomintroll Winter’s Warmth Ending Explained"
          description="Understand the ending of Moomintroll Winter’s Warmth, including the Great Winter Bonfire, the false spring, Too-ticky and the squirrel rescue, the Lady of the Cold, Snufkin’s return, and the story’s main themes."
          gameTitle="Moomintroll Winter’s Warmth"
          gameHref="/moomintroll"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 28, 2026"
          toc={[
            {
              id: "ending-summary",
              label: "Ending summary",
            },
            {
              id: "is-the-bonfire-the-ending",
              label: "Is the bonfire the ending?",
            },
            {
              id: "why-winter-does-not-end",
              label: "Why winter continues",
            },
            {
              id: "early-squirrel-and-lady-of-the-cold",
              label: "Opening squirrel scene",
            },
            {
              id: "too-ticky-and-squirrel-rescue",
              label: "Too-ticky rescue",
            },
            {
              id: "underground-campfire",
              label: "Underground campfire",
            },
            {
              id: "lady-of-the-cold-explained",
              label: "Lady of the Cold",
            },
            {
              id: "is-the-squirrel-alive",
              label: "Is the squirrel alive?",
            },
            {
              id: "details-you-may-have-missed",
              label: "Hidden details",
            },
            {
              id: "what-the-ending-means",
              label: "Ending meaning",
            },
            {
              id: "character-endings",
              label: "Character endings",
            },
            {
              id: "snufkin-ending",
              label: "Snufkin ending",
            },
            {
              id: "does-the-ending-tease-a-sequel",
              label: "Sequel tease?",
            },
            {
              id: "ending-and-completion",
              label: "Before ending",
            },
            {
              id: "quick-ending-questions",
              label: "Quick questions",
            },
            {
              id: "related-guides",
              label: "Related guides",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/moomintroll",
              label: "Complete Walkthrough & Guide",
            },
            {
              href: "/moomintroll/great-winter-bonfire",
              label: "Great Winter Bonfire Guide",
            },
            {
              href: "/moomintroll/achievements-guide",
              label: "Achievements and 100% Guide",
            },
            {
              href: "/moomintroll/side-quests",
              label: "All Side Quests Guide",
            },
            {
                href: "/moomintroll/little-my-snowball-fight",
                label: "Little My Snowball Fight Guide",
              },
            {
              href: "/moomintroll/vase-piece-locations",
              label: "All 25 Vase Piece Locations",
            },
            {
              href: "/moomintroll/tool-upgrades",
              label: "All Tool Upgrades Guide",
            },
          ]}
        >
          <MoomintrollEndingExplainedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
