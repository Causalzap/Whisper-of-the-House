import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LibrarianIndexContent from "@/data/librarian/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/librarian`;

export const metadata: Metadata = {
  title: "Librarian: Tidy Up the Arcane Library Guide, Keys & Abilities",
  description:
    "A complete Librarian: Tidy Up the Arcane Library guide hub covering key locations, chest unlocks, best abilities, shelf glow, book sorting, achievements, and common fixes.",
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
        "Librarian: Tidy Up the Arcane Library Complete Guide — Keys, Abilities, Shelf Glow, Sorting, Achievements, and Fixes",
      description:
        "This Librarian: Tidy Up the Arcane Library guide explains how to sort books, complete rows, unlock abilities, find all keys, open chests, understand blue shelf indicators, plan achievements, and troubleshoot common missing-book issues.",
      image: [
        `${siteUrl}/images/librarian/librarian-library-overview.webp`,
        `${siteUrl}/images/librarian/librarian-key-chests.webp`,
        `${siteUrl}/images/librarian/librarian-ability-menu.webp`,
        `${siteUrl}/images/librarian/librarian-shelf-glow.webp`,
        `${siteUrl}/images/librarian/librarian-completion-results.webp`,
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
          name: "Librarian: Tidy Up the Arcane Library guide",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library walkthrough",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library keys",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library key locations",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library chest unlocks",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library abilities",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library book sorting",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library shelf glow",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library blue shelf indicator",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library achievements",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library troubleshooting",
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
          name: "Assemble ability",
        },
        {
          "@type": "Thing",
          name: "Insight ability",
        },
        {
          "@type": "Thing",
          name: "Auto-Shelving",
        },
        {
          "@type": "Thing",
          name: "Efficiency Librarian",
        },
        {
          "@type": "Thing",
          name: "Anti-Magic Master",
        },
        {
          "@type": "Thing",
          name: "You Are Fired",
        },
        {
          "@type": "Thing",
          name: "Overtime Avoider",
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
          name: "What should I do first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check the stair maps, complete easy rows, and collect the four hidden keys. Early rows unlock magic, while chests unlock Jump, Sprint, and carry upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best ability to unlock first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assemble is the best first major ability for efficiency. It gathers books from the same series and reduces pile searching.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Shelf Guide in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Shelf Guide if you are playing blind. If you already have a map open, spend points on Assemble, Insight, Sorting, or Auto-Shelving instead.",
          },
        },
        {
          "@type": "Question",
          name: "Can I sort books by color in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not reliably. Color helps, but white books can be Philosophy, Healing, Holy, or Priest-style books, so always confirm the title and section.",
          },
        },
        {
          "@type": "Question",
          name: "What does it mean when the shelf does not turn blue in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually one book is missing, out of order, in the wrong section, or placed in a duplicate row. Check volume order and the shelf indicator before reloading.",
          },
        },
        {
          "@type": "Question",
          name: "I placed all the books but the shelf still will not turn blue — what am I missing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common cause is a volume order mistake or a split series. Books in the same series must be grouped together and placed in correct volume order from left to right. One wrong volume or one book sitting in a neighboring row can keep the indicator dark.",
          },
        },
        {
          "@type": "Question",
          name: "What does a dark shelf indicator mean in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A dark indicator means the row or shelf group is unfinished. Look for a missing book, wrong volume order, or a series split across shelves.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Assemble not grab a book in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assemble may not pull books already placed on shelves. Keep temporary storage books on the floor if you plan to collect them later with Assemble.",
          },
        },
        {
          "@type": "Question",
          name: "How many books are in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The full library contains 3,072 books.",
          },
        },
        {
          "@type": "Question",
          name: "How many rows do I need to complete in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A full completion requires 400 completed rows.",
          },
        },
        {
          "@type": "Question",
          name: "How many keys are there in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are four hidden keys: Crimson Octagon, Golden Diamond, Azure Star, and Emerald Club.",
          },
        },
        {
          "@type": "Question",
          name: "Which key should I get first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get the Crimson Octagon Key first because it unlocks Jump, which helps you reach other key locations.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Golden Diamond Key in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Golden Diamond Key is hidden inside a decorative vase on the stair railing near the crimson chest. Jump up and look inside the vase.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Sprint in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sprint is unlocked from the chest tied to the Emerald Club Key. The key is buried under books near the scale table bench.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Efficiency Librarian in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finish the entire game in under 3 hours. Learn the layout first, collect chest upgrades early, and rush Assemble.",
          },
        },
        {
          "@type": "Question",
          name: "Do chest upgrades count as magic for Anti-Magic Master in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on community testing, chest upgrades such as Jump, Sprint, and Carry Capacity are treated as passive minor upgrades, not active major magic. For Anti-Magic Master, avoid active major spells such as Assemble, Insight, Shelf Guide, Sorting, and Auto-Shelving.",
          },
        },
        {
          "@type": "Question",
          name: "How do I clear the Special Stage in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After finishing the main library, enter the Special Stage and use the ultimate skill. That is the route for Overtime Avoider.",
          },
        },
        {
          "@type": "Question",
          name: "Is You Are Fired part of a normal completion route in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You Are Fired is a joke route where the library is filled incorrectly without completing a single row. Do it separately.",
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
          title="Librarian: Tidy Up the Arcane Library Complete Guide — Keys, Abilities, Shelf Glow, Sorting, Achievements, and Fixes"
          description="Use this Librarian: Tidy Up the Arcane Library guide hub to find all key locations, unlock chest rewards, choose the best abilities, understand blue shelf indicators, sort books faster, plan achievements, and fix common missing-book issues."
          gameTitle="Librarian: Tidy Up the Arcane Library!"
          gameHref="/librarian"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 5, 2026"
          toc={[
            {
              id: "quick-facts",
              label: "Quick facts",
            },
            {
              id: "first-run-route",
              label: "First-run route",
            },
            {
              id: "keys-and-chests",
              label: "Keys and chests",
            },
            {
              id: "shelf-glow",
              label: "Shelf glow",
            },
            {
              id: "best-abilities",
              label: "Best abilities",
            },
            {
              id: "book-sorting",
              label: "Book sorting",
            },
            {
              id: "achievements",
              label: "Achievements",
            },
            {
              id: "troubleshooting",
              label: "Troubleshooting",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/librarian/key-locations",
              label: "All Key Locations and Chest Unlocks",
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
          <LibrarianIndexContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}