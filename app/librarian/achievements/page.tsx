import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsContent from "@/data/librarian/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/librarian/achievements`;

export const metadata: Metadata = {
  title: "Librarian Achievements Guide: All 12 Achievements",
  description:
    "100% achievement guide for Librarian: Tidy Up the Arcane Library. How to unlock Anti-Magic Master, Efficiency Librarian, You Are Fired & all others!",
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
          name: "Achievements Guide",
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
        "Librarian: Tidy Up the Arcane Library Achievements Guide — All 12 Achievements",
      description:
        "This guide explains how to unlock all 12 achievements in Librarian: Tidy Up the Arcane Library, including The Grand Librarian, Efficiency Librarian, Anti-Magic Master, You Are Fired, Overtime Avoider, magic achievements, and the recommended 100% route.",
      image: [
        `${siteUrl}/images/librarian/librarian-achievements-overview.webp`,
        `${siteUrl}/images/librarian/librarian-400-rows-complete.webp`,
        `${siteUrl}/images/librarian/librarian-clear-time-results.webp`,
        `${siteUrl}/images/librarian/librarian-pizza-ending.webp`,
        `${siteUrl}/images/librarian/librarian-special-stage-entry.webp`,
        `${siteUrl}/images/librarian/librarian-you-are-fired-setup.webp`,
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
          name: "Librarian: Tidy Up the Arcane Library achievements",
        },
        {
          "@type": "Thing",
          name: "Librarian: Tidy Up the Arcane Library endings",
        },
        {
          "@type": "Thing",
          name: "The First Step of Organizing",
        },
        {
          "@type": "Thing",
          name: "Intermediate Librarian",
        },
        {
          "@type": "Thing",
          name: "Veteran Librarian",
        },
        {
          "@type": "Thing",
          name: "The Grand Librarian",
        },
        {
          "@type": "Thing",
          name: "Novice Mage",
        },
        {
          "@type": "Thing",
          name: "Sage of the Library",
        },
        {
          "@type": "Thing",
          name: "Life Hack Wizard",
        },
        {
          "@type": "Thing",
          name: "The Archmage",
        },
        {
          "@type": "Thing",
          name: "Overtime Avoider",
        },
        {
          "@type": "Thing",
          name: "You Are Fired",
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
          name: "Special Stage",
        },
        {
          "@type": "Thing",
          name: "Assemble ability",
        },
        {
          "@type": "Thing",
          name: "Auto-Shelving",
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
          name: "How many achievements are in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 12 achievements in Librarian: Tidy Up the Arcane Library.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get every achievement in one run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No practical route should try that. Efficiency Librarian, Anti-Magic Master, and You Are Fired have conflicting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best 100% achievement route in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do a normal magic completion first, then a separate Efficiency run, a separate Anti-Magic run, and a separate You Are Fired route.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock The Grand Librarian?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete all 400 rows and finish the main library.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Overtime Avoider?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finish the main library, enter the Special Stage, and use the ultimate skill.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Efficiency Librarian?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete the game in under 3 hours. Learn the library first, collect all key upgrades early, rush Assemble, and add Sorting after carry upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Should I try Efficiency Librarian on my first run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Learn the key route, shelf sections, and Assemble loop first. A blind run wastes too much time.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Anti-Magic Master?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete the game without active major magic. Avoid Assemble, Insight, Shelf Guide, Sorting, and Auto-Shelving.",
          },
        },
        {
          "@type": "Question",
          name: "Do chest upgrades count against Anti-Magic Master?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on community testing, chest upgrades such as Jump, Sprint, and Carry Capacity are passive minor upgrades, not active major magic.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Assemble for Anti-Magic Master?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Treat Assemble as active major magic and avoid it during Anti-Magic Master.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Sorting for Anti-Magic Master?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Sorting is an active major magic tool, so avoid it for Anti-Magic Master.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock You Are Fired in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fill the library incorrectly without completing any row, then leave through the library exit or barrier. Do not just quit to menu or close the game. If any row turns blue, break that row before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do You Are Fired on my main save?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Do it on a separate route or save-copy route because it intentionally ruins the library arrangement.",
          },
        },
        {
          "@type": "Question",
          name: "What achievement should I do last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do Anti-Magic Master last if you dislike long manual sorting. It is the most grind-heavy route because you cannot use active sorting magic.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Anti-Magic Master take in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Expect Anti-Magic Master to take much longer than a normal magic run. Community reports commonly put no-magic routes in the 8 to 12+ hour range depending on section knowledge, routing, and how often you need to check maps.",
          },
        },
        {
          "@type": "Question",
          name: "Are achievements missable in Librarian: Tidy Up the Arcane Library?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Progress and magic achievements are easy to recover during normal play. Challenge achievements are route-specific, so plan separate runs for Efficiency, Anti-Magic, and You Are Fired.",
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
          title="Librarian: Tidy Up the Arcane Library Achievements Guide — All 12 Achievements"
          description="Unlock all 12 achievements in Librarian: Tidy Up the Arcane Library, including Efficiency Librarian, Anti-Magic Master, You Are Fired, Overtime Avoider, The Grand Librarian, and every magic achievement."
          gameTitle="Librarian: Tidy Up the Arcane Library!"
          gameHref="/librarian"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 5, 2026"
          toc={[
            {
              id: "all-achievements",
              label: "All achievements",
            },
            {
              id: "recommended-route",
              label: "100% route",
            },
            {
              id: "normal-magic-run",
              label: "Normal magic run",
            },
            {
              id: "overtime-avoider",
              label: "Overtime Avoider",
            },
            {
              id: "efficiency-librarian",
              label: "Efficiency Librarian",
            },
            {
              id: "anti-magic-master",
              label: "Anti-Magic Master",
            },
            {
              id: "you-are-fired",
              label: "You Are Fired",
            },
            {
              id: "hardest-achievements",
              label: "Hardest achievements",
            },
            {
              id: "normal-ending",
              label: "Normal ending",
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
              href: "/librarian/book-sorting",
              label: "Book Sorting, Sections, and Color Guide",
            },
          ]}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}