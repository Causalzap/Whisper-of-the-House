import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BookSortingContent from "@/data/librarian/book-sorting.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/librarian/book-sorting`;

export const metadata: Metadata = {
  title: "Librarian Book Sorting, Sections & Shelf Guide",
  description:
    "Learn how book sorting works in Librarian: Tidy Up the Arcane Library, including sections, color clues, volume order, blue shelf indicators, small shelves, and missing-book fixes.",
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
          name: "Book Sorting Guide",
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
        "Librarian: Tidy Up the Arcane Library Book Sorting, Sections, Color Clues, and Shelf Indicators Guide",
      description:
        "This guide explains how to sort books in Librarian: Tidy Up the Arcane Library, including section maps, title clues, color traps, volume order, small shelves, blue shelf indicators, and what to check when a shelf will not turn blue.",
      image: [
        `${siteUrl}/images/librarian/librarian-book-sorting-map.webp`,
        `${siteUrl}/images/librarian/librarian-white-books-color-trap.webp`,
        `${siteUrl}/images/librarian/librarian-shelf-blue-indicator.webp`,
        `${siteUrl}/images/librarian/librarian-volume-order-example.webp`,
        `${siteUrl}/images/librarian/librarian-small-shelf-series.webp`,
        `${siteUrl}/images/librarian/librarian-section-2j-philosophy.webp`,
        `${siteUrl}/images/librarian/librarian-section-1b-divination.webp`,
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
          name: "Librarian: Tidy Up the Arcane Library book sorting",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library book sections",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library shelf indicators",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library blue shelf indicator",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library volume order",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library small shelves",
        },
        {
          "@type": "Thing",
          name: "1A Monsterology",
        },
        {
          "@type": "Thing",
          name: "1B Astrology and Divination",
        },
        {
          "@type": "Thing",
          name: "1E Necromancy",
        },
        {
          "@type": "Thing",
          name: "2J Philosophy",
        },
        {
          "@type": "Thing",
          name: "Assemble ability",
        },
        {
          "@type": "Thing",
          name: "Shelf Guide",
        },
        {
          "@type": "Thing",
          name: "Sorting ability",
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
          name: "How do I know where a book goes in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the title keywords first, then confirm the section on the map or with Shelf Guide. Color is only a clue.",
          },
        },
        {
          "@type": "Question",
          name: "Can I sort books by color in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not reliably. White books can be Philosophy, Healing, Holy, or Priest-style books, so always check the title and section.",
          },
        },
        {
          "@type": "Question",
          name: "Where do white books go in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "White books can go to several sections, including Philosophy, Healing, Holy, and Priest-style areas. Do not send every white book to 2J Philosophy.",
          },
        },
        {
          "@type": "Question",
          name: "Where do black books with red text go in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many black or dark books with red text are Necromancy or Curse-related books. Check 1E Necromancy and curse or dispel sections first.",
          },
        },
        {
          "@type": "Question",
          name: "Where do monster books go in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Monster, beast, creature, and species-related books usually point toward 1A Monsterology. This is one of the easiest early categories to check.",
          },
        },
        {
          "@type": "Question",
          name: "What does it mean when a shelf does not turn blue in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually one book is missing, out of order, in the wrong section, or split into a neighboring row. Recheck the full series and volume order.",
          },
        },
        {
          "@type": "Question",
          name: "I placed all the books but the shelf still will not turn blue — what am I missing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common cause is a volume order mistake or a split series. Books in the same series must stay together and be placed left to right by volume number.",
          },
        },
        {
          "@type": "Question",
          name: "Does a book snapping into the shelf mean it is correct?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It means the placement was accepted, not that the row is complete. The row only counts when the shelf indicator turns blue or lights up.",
          },
        },
        {
          "@type": "Question",
          name: "Why is volume order important in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The game expects books in the same series to be ordered by volume number. A single wrong number can keep the shelf incomplete.",
          },
        },
        {
          "@type": "Question",
          name: "What should I sort first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with easy visual groups: Monsterology books, white books, black or red necromancy books, repeated title groups, and short series that are easy to complete.",
          },
        },
        {
          "@type": "Question",
          name: "Are small shelves important in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Some 3-volume or 5-volume series belong on smaller shelf panels. Do not force every short series into a long row.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Shelf Guide in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Shelf Guide if you are playing blind. If you already have the map open, prioritize Assemble and Sorting instead.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Assemble not find my missing book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The book may already be sitting on a shelf. Assemble is strongest when books are loose in piles or on the floor.",
          },
        },
        {
          "@type": "Question",
          name: "Is this a full 3,072-book list?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This is a sorting system and section guide. A full 3,072-book database should be a separate long-term page or interactive index.",
          },
        },
        {
          "@type": "Question",
          name: "Will there be a full 1A-1N section index?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That should be a separate page. This guide gives confirmed section examples and sorting rules, while a full 1A-1N and second-floor index needs a dedicated searchable table.",
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
          title="Librarian: Tidy Up the Arcane Library Book Sorting, Sections, Color Clues, and Shelf Guide"
          description="Learn how to sort books in Librarian: Tidy Up the Arcane Library with section maps, color clues, title keywords, volume order, blue shelf indicators, small shelf rules, and missing-book fixes."
          gameTitle="Librarian: Tidy Up the Arcane Library!"
          gameHref="/librarian"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 5, 2026"
          toc={[
            {
              id: "sorting-system",
              label: "Sorting system",
            },
            {
              id: "maps-and-sections",
              label: "Maps and sections",
            },
            {
              id: "color-clues",
              label: "Color clues",
            },
            {
              id: "volume-order",
              label: "Volume order",
            },
            {
              id: "shelf-indicators",
              label: "Shelf indicators",
            },
            {
              id: "short-shelves",
              label: "Short shelves",
            },
            {
              id: "best-sorting-workflow",
              label: "Sorting workflow",
            },
            {
              id: "missing-book-fixes",
              label: "Missing book fixes",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
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
          ]}
        >
          <BookSortingContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}