import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import KeyLocationsContent from "@/data/librarian/key-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/librarian/key-locations`;

export const metadata: Metadata = {
  title: "Librarian Tidy Up Keys: All 4 Key Locations & Chest Rewards",
  description:
    "Find all 4 keys in Librarian: Tidy Up the Arcane Library, with screenshots for Crimson Octagon, Golden Diamond, Emerald Club, Azure Star, and every chest reward.",
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
          name: "Key Locations",
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
        "Librarian: Tidy Up the Arcane Library Key Locations and Chest Rewards",
      description:
        "This guide shows the best route for finding every hidden key in Librarian: Tidy Up the Arcane Library, including the Crimson Octagon Key, Golden Diamond Key, Emerald Club Key, and Azure Star Key. It also explains which chest unlocks Jump, Sprint / Run, Carry Capacity +3, and Carry Capacity +2.",
      image: [
        `${siteUrl}/images/librarian/librarian-crimson-octagon-key-location-starting-crest.webp`,
        `${siteUrl}/images/librarian/librarian-crimson-octagon-key-pickup.webp`,
        `${siteUrl}/images/librarian/librarian-crimson-chest-jump.webp`,
        `${siteUrl}/images/librarian/librarian-golden-diamond-key-vase.webp`,
        `${siteUrl}/images/librarian/librarian-emerald-club-key-bench.webp`,
        `${siteUrl}/images/librarian/librarian-sprint-unlock-note.webp`,
        `${siteUrl}/images/librarian/librarian-azure-star-key-bookshelf.webp`,
        `${siteUrl}/images/librarian/librarian-carry-capacity-15-books.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-05",
      dateModified: "2026-06-15",
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
          name: "Librarian: Tidy Up the Arcane Library chest rewards",
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
          name: "Emerald Club Key",
        },
        {
          "@type": "Thing",
          name: "Azure Star Key",
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
          name: "Run",
        },
        {
          "@type": "Thing",
          name: "Carry Capacity",
        },
        {
          "@type": "Thing",
          name: "15 book capacity",
        },
        {
          "@type": "Thing",
          name: "Efficiency Librarian",
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
            text: "There are four hidden keys in Librarian: Tidy Up the Arcane Library: Crimson Octagon, Golden Diamond, Emerald Club, and Azure Star.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best key order in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best key order is Crimson Octagon, Golden Diamond, Emerald Club, then Azure Star. Get the Crimson Octagon Key first because its chest unlocks Jump.",
          },
        },
        {
          "@type": "Question",
          name: "Which key should I get first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get the Crimson Octagon Key first. Its chest unlocks Jump, which makes the Golden Diamond and Azure Star key locations easier to reach.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Crimson Octagon Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Crimson Octagon Key is hanging under the University of Celesthall crest or wall emblem directly ahead when you load into the library.",
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
            text: "The Golden Diamond Key is hidden inside a decorative vase on the stair railing near the crimson chest and stair area. Unlock Jump first, then look down into the vase.",
          },
        },
        {
          "@type": "Question",
          name: "Why can I not find the Golden Diamond Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are probably looking on top of the vase instead of inside it. Jump onto the railing decoration, move the camera above the vase, and look down inside it.",
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
          name: "Where is the Emerald Club Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Emerald Club Key is on the bench near the scale table, buried under a pile of books. Clear the books from the bench to reveal it.",
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
          name: "Where is the Azure Star Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Azure Star Key is on the second floor, on top of the right-side bookshelf near the far wall.",
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
          name: "How do you carry 15 books in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open both carrying capacity chests. The Golden Diamond chest gives Carry Capacity +3, and the Azure Star chest gives Carry Capacity +2. Together, they let you carry 15 books.",
          },
        },
        {
          "@type": "Question",
          name: "Are key upgrades required to finish Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key upgrades are not the same as sorting books, but they make the game much faster. Jump, Sprint or Run, and extra carrying capacity all save time across the full library.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get the keys before an Efficiency Librarian run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Get all four key upgrades before serious sorting. Jump opens the route, Sprint or Run reduces travel time, and the carrying upgrades reduce the number of book trips.",
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
          title="Librarian: Tidy Up the Arcane Library Key Locations and Chest Rewards"
          description="Find every key in Librarian: Tidy Up the Arcane Library, including the Crimson Octagon, Golden Diamond, Emerald Club, and Azure Star keys, plus the Jump, Sprint / Run, and Carry Capacity rewards."
          gameTitle="Librarian: Tidy Up the Arcane Library!"
          gameHref="/librarian"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 15, 2026"
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
              id: "emerald-club-key",
              label: "Emerald Club Key",
            },
            {
              id: "azure-star-key",
              label: "Azure Star Key",
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
            }
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
