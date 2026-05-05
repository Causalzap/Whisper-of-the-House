import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import KeyLocationsContent from "@/data/librarian/key-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/librarian/key-locations`;

export const metadata: Metadata = {
  title: "Librarian All Key Locations & Chest Unlocks Guide",
  description:
    "Find all four hidden keys in Librarian: Tidy Up the Arcane Library, including the Crimson Octagon, Golden Diamond, Azure Star, and Emerald Club keys, plus every chest reward.",
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
          name: "Librarian: Tidy Up the Arcane Library Guide",
          item: `${siteUrl}/librarian`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Key Locations",
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
        "Librarian: Tidy Up the Arcane Library All Key Locations and Chest Unlocks",
      description:
        "This guide shows where to find every hidden key in Librarian: Tidy Up the Arcane Library, including the Crimson Octagon Key, Golden Diamond Key, Azure Star Key, and Emerald Club Key, plus the Jump, Sprint, and Carry Capacity chest rewards.",
      image: [
        `${siteUrl}/images/librarian/librarian-crimson-octagon-key.webp`,
        `${siteUrl}/images/librarian/librarian-crimson-chest-jump.webp`,
        `${siteUrl}/images/librarian/librarian-golden-diamond-key-vase.webp`,
        `${siteUrl}/images/librarian/librarian-azure-star-key-bookshelf.webp`,
        `${siteUrl}/images/librarian/librarian-emerald-club-key-bench.webp`,
        `${siteUrl}/images/librarian/librarian-sprint-unlock-note.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-05",
      dateModified: "2026-05-05",
      about: [
        {
          "@type": "VideoGame",
          name: "Librarian: Tidy Up the Arcane Library!",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library key locations",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library hidden keys",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library chests",
        },
        {
          "@type": "Thing",
          name: "Crimson Octagon Key",
        },
        {
          "@type": "Thing",
          name: "Golden Diamond Key",
        },
        {
          "@type": "Thing",
          name: "Azure Star Key",
        },
        {
          "@type": "Thing",
          name: "Emerald Club Key",
        },
        {
          "@type": "Thing",
          name: "Jump",
        },
        {
          "@type": "Thing",
          name: "Sprint",
        },
        {
          "@type": "Thing",
          name: "Carry Capacity",
        },
        {
          "@type": "Thing",
          name: "Efficiency Librarian",
        },
        {
          "@type": "Thing",
          name: "Anti-Magic Master",
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
          name: "How many keys are in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are four hidden keys in Librarian: Tidy Up the Arcane Library: Crimson Octagon, Golden Diamond, Azure Star, and Emerald Club.",
          },
        },
        {
          "@type": "Question",
          name: "Which key should I get first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get the Crimson Octagon Key first. Its chest unlocks Jump, which makes the other key locations easier or possible to reach.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Crimson Octagon Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Crimson Octagon Key is hanging under the crest or wall emblem directly ahead when you load into the library.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Crimson Octagon Key unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Crimson Octagon Key unlocks Jump.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Golden Diamond Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Golden Diamond Key is hidden inside a decorative vase on the stair railing near the crimson chest area. Jump onto the railing decoration and look inside the vase.",
          },
        },
        {
          "@type": "Question",
          name: "Why can I not find the Golden Diamond Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are probably looking on top of the vase instead of inside it. Jump onto the railing decoration and angle the camera down into the vase.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Golden Diamond Key unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Golden Diamond Key unlocks Carry Capacity +3.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Azure Star Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Walk to the back wall of the second floor, away from the staircase. As you face the back wall, the Azure Star Key is on top of the last bookshelf on your right.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Azure Star Key unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Azure Star Key unlocks Carry Capacity +2.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Emerald Club Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Emerald Club Key is on the bench to the right of the scale table, buried under a pile of books. Clear the books from the bench to reveal it.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Emerald Club Key unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Emerald Club Key unlocks Sprint or Run.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get the other keys without unlocking Jump first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some key spots may be reachable with awkward movement, but Jump makes the route straightforward. The Crimson Octagon Key does not require Jump because it is at ground level near the starting view, so get it first and avoid fighting the movement.",
          },
        },
        {
          "@type": "Question",
          name: "Are key upgrades required for completion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key upgrades are not the same as sorting rows, but they make the game much faster. Sprint and carry capacity upgrades are especially valuable.",
          },
        },
        {
          "@type": "Question",
          name: "Do chest upgrades count as magic for Anti-Magic Master?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on community testing, chest upgrades such as Jump, Sprint, and Carry Capacity are passive minor upgrades, not active major magic. Avoid active major spells such as Assemble, Insight, Shelf Guide, Sorting, and Auto-Shelving for Anti-Magic Master.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get the keys before an Efficiency Librarian run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Get all four key upgrades before serious sorting. Jump unlocks the route, Sprint reduces travel time, and the carry upgrades matter most once you use Assemble. With +5 total carry capacity, a 10-book series can take about two trips instead of several smaller trips, which adds up across hundreds of rows.",
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
          title="Librarian: Tidy Up the Arcane Library All Key Locations and Chest Unlocks"
          description="Find every hidden key in Librarian: Tidy Up the Arcane Library, including the Crimson Octagon, Golden Diamond, Azure Star, and Emerald Club keys, plus every Jump, Sprint, and Carry Capacity chest reward."
          gameTitle="Librarian: Tidy Up the Arcane Library!"
          gameHref="/librarian"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 5, 2026"
          toc={[
            {
              id: "all-key-locations",
              label: "All key locations",
            },
            {
              id: "best-key-route",
              label: "Best key route",
            },
            {
              id: "crimson-octagon-key",
              label: "Crimson Octagon Key",
            },
            {
              id: "golden-diamond-key",
              label: "Golden Diamond Key",
            },
            {
              id: "azure-star-key",
              label: "Azure Star Key",
            },
            {
              id: "emerald-club-key",
              label: "Emerald Club Key",
            },
            {
              id: "chest-rewards",
              label: "Chest rewards",
            },
            {
              id: "common-key-mistakes",
              label: "Common mistakes",
            },
            {
              id: "when-to-get-keys",
              label: "When to get keys",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/librarian",
              label: "Complete Guide Hub",
            },
            {
              href: "/librarian/best-abilities",
              label: "Best Abilities and Upgrade Order",
            },
            {
              href: "/librarian/achievements",
              label: "All Achievements and Endings Guide",
            },
            {
              href: "/librarian/book-sorting",
              label: "Book Sorting, Sections, and Color Guide",
            },
          ]}
        >
          <KeyLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}