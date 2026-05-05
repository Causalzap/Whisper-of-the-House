import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestAbilitiesContent from "@/data/librarian/best-abilities.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/librarian/best-abilities`;

export const metadata: Metadata = {
  title: "Librarian Best Abilities & Upgrade Order Guide",
  description:
    "Master Librarian: Tidy Up the Arcane Library! Discover the best ability upgrade order, top spells like Assemble & Auto-Shelving, and Efficiency speedrun routes.",
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
          name: "Best Abilities",
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
        "Librarian: Tidy Up the Arcane Library Best Abilities and Upgrade Order",
      description:
        "This guide explains the best ability upgrade order in Librarian: Tidy Up the Arcane Library, including why Assemble is the strongest skill, when Insight is useful, when Sorting becomes worth upgrading, how Auto-Shelving works, and which abilities to avoid for Anti-Magic Master.",
      image: [
        `${siteUrl}/images/librarian/librarian-ability-menu-overview.webp`,
        `${siteUrl}/images/librarian/librarian-assemble-series-pull.webp`,
        `${siteUrl}/images/librarian/librarian-assemble-cooldown-upgrade.webp`,
        `${siteUrl}/images/librarian/librarian-insight-highlight-books.webp`,
        `${siteUrl}/images/librarian/librarian-sorting-auto-order.webp`,
        `${siteUrl}/images/librarian/librarian-auto-shelving-target.webp`,
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
          name: "Librarian: Tidy Up the Arcane Library abilities",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library best abilities",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library upgrade order",
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
          name: "Sorting ability",
        },
        {
          "@type": "Thing",
          name: "Auto-Shelving",
        },
        {
          "@type": "Thing",
          name: "Shelf Guide",
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
          name: "What is the best ability in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assemble is the best overall ability because it gathers books from the same series and reduces pile searching.",
          },
        },
        {
          "@type": "Question",
          name: "What ability should I unlock first in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlock Assemble first if you want efficiency. Choose Insight early only if you are still struggling to find matching books in piles.",
          },
        },
        {
          "@type": "Question",
          name: "Is Insight better than Assemble in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Insight is better for visual searching early, but Assemble is stronger overall because it brings matching books to you instead of only highlighting them.",
          },
        },
        {
          "@type": "Question",
          name: "Is Shelf Guide worth it in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shelf Guide is worth it if you are playing blind or refuse external maps. If you already use a section map, it is usually lower priority than Assemble.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sorting worth upgrading in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sorting is worth upgrading once you have both carry capacity chests unlocked and regularly hold 7 or more books at once. Before that point, the books in your hand are usually too few for auto-ordering to save meaningful time.",
          },
        },
        {
          "@type": "Question",
          name: "Is Auto-Shelving worth using in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but it is not a first priority. Auto-Shelving is best when you already know the correct shelf and want to place matching books faster.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Assemble not grab a book in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assemble may not pull books that are already placed on shelves. Keep temporary books on the floor if you plan to gather them later.",
          },
        },
        {
          "@type": "Question",
          name: "Does Assemble have a cooldown in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Assemble has a cooldown, and upgrades make it available more often. Upgraded Assemble becomes the core loop for fast cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best ability route for Efficiency Librarian?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Collect all key upgrades early, rush Assemble, add Sorting once you carry larger groups, and use Insight only when searching piles still costs time.",
          },
        },
        {
          "@type": "Question",
          name: "Do carry capacity upgrades help Assemble?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Carry capacity upgrades let you hold more books from the series Assemble gathers, which reduces trips and speeds up full-row cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What counts as major magic for Anti-Magic Master?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid active spell tools such as Assemble, Insight, Shelf Guide, Sorting, and Auto-Shelving. Chest upgrades like Jump, Sprint, and Carry Capacity are passive minor upgrades based on community testing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use abilities in an Anti-Magic Master run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do not use active major abilities in an Anti-Magic Master run. Keep that run manual.",
          },
        },
        {
          "@type": "Question",
          name: "Should I max every ability in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a normal magic run, yes, eventually. For efficiency, prioritize Assemble first, then only invest in tools that reduce real time loss.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest ability mistake in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is spending too much early on Shelf Guide or Auto-Shelving before upgrading Assemble. Assemble solves the main problem: finding full series.",
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
          title="Librarian: Tidy Up the Arcane Library Best Abilities and Upgrade Order"
          description="Learn the best ability upgrade order in Librarian: Tidy Up the Arcane Library, including why Assemble is the strongest skill, when Sorting becomes worth it, how Insight and Auto-Shelving fit in, and what to avoid for Anti-Magic Master."
          gameTitle="Librarian: Tidy Up the Arcane Library!"
          gameHref="/librarian"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 5, 2026"
          toc={[
            {
              id: "best-ability-order",
              label: "Best ability order",
            },
            {
              id: "upgrade-route",
              label: "Upgrade route",
            },
            {
              id: "assemble",
              label: "Assemble",
            },
            {
              id: "insight",
              label: "Insight",
            },
            {
              id: "sorting",
              label: "Sorting",
            },
            {
              id: "auto-shelving",
              label: "Auto-Shelving",
            },
            {
              id: "shelf-guide",
              label: "Shelf Guide",
            },
            {
              id: "best-builds",
              label: "Best builds",
            },
            {
              id: "cooldown-and-levels",
              label: "Cooldowns and levels",
            },
            {
              id: "efficiency-route",
              label: "Efficiency route",
            },
            {
              id: "anti-magic-master",
              label: "Anti-Magic Master",
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
              href: "/librarian/achievements",
              label: "All Achievements and Endings Guide",
            },
            {
              href: "/librarian/book-sorting",
              label: "Book Sorting, Sections, and Color Guide",
            },
          ]}
        >
          <BestAbilitiesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}