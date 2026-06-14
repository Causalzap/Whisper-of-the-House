import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FoxRuinsContent from "@/data/tales-of-seikyu/fox-ruins-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu/fox-ruins-guide`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-ruins-entrance.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-new-relic-waypoint.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-ruins-offering-altar.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-slime-underwater.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-tengu-form-flight.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-water-fire-puzzle.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-foxhole-scrap-paper.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-form-scroll.webp`,
];

const toc = [
  {
    id: "fox-ruins-guide",
    label: "Fox Ruins guide",
  },
  {
    id: "route-order",
    label: "Route order",
  },
  {
    id: "relic-waypoints",
    label: "Relic waypoints",
  },
  {
    id: "offering-altars",
    label: "Offering altars",
  },
  {
    id: "form-gates",
    label: "Form gates",
  },
  {
    id: "slime-shortcuts",
    label: "Slime shortcuts",
  },
  {
    id: "tengu-form-ruins",
    label: "Tengu Form routes",
  },
  {
    id: "water-fire-puzzle",
    label: "Water/fire puzzle",
  },
  {
    id: "puzzles",
    label: "Puzzle logic",
  },
  {
    id: "foxholes-scrolls",
    label: "Foxholes and scrolls",
  },
  {
    id: "bosses",
    label: "Boss prep",
  },
  {
    id: "rooms-count",
    label: "75 rooms",
  },
  {
    id: "treasure-chests",
    label: "Scrolls and chests",
  },
  {
    id: "mistakes",
    label: "Mistakes",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tales-of-seikyu",
    label: "Tales of Seikyu Guide Hub",
  },
  {
    href: "/tales-of-seikyu/beginner-guide",
    label: "Tales of Seikyu Beginner Guide",
  },
  {
    href: "/tales-of-seikyu/yokai-forms-guide",
    label: "Tales of Seikyu Yokai Forms Guide",
  },
  {
    href: "/tales-of-seikyu/achievements-guide",
    label: "Tales of Seikyu Achievements Guide",
  },
  {
    href: "/tales-of-seikyu/request-board-guide",
    label: "Tales of Seikyu Request Board Guide",
  },
  {
    href: "/tales-of-seikyu/romance-gifts-marriage-guide",
    label: "Tales of Seikyu Romance, Gifts, and Marriage Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Fox Ruins Guide: Puzzles & 75 Rooms",
  description:
    "Clear Tales of Seikyu Fox Ruins with offerings, relic waypoints, Slime shortcuts, Tengu gaps, water/fire puzzle notes, bosses, scrolls, chests, and 75 rooms.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Fox Ruins Guide: Offerings, Waypoints, Slime Shortcuts, Tengu Gaps, Puzzles and 75 Rooms",
    description:
      "Plan Fox Ruins routes in Tales of Seikyu with relic waypoints, offering altars, Slime Form shortcuts, Tengu Form gaps, water/fire puzzle notes, foxholes, transformation scrolls, bosses, treasure chests, and Move Over, Yohji room tracking.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu Fox Ruins entrance.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Fox Ruins Guide",
    description:
      "Track offerings, waypoints, Slime shortcuts, Tengu gaps, water/fire puzzle notes, bosses, scrolls, chests, and 75 rooms.",
    images: [imageUrls[0]],
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
          name: "Tales of Seikyu Guide",
          item: `${siteUrl}/tales-of-seikyu`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tales of Seikyu Fox Ruins Guide",
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
        "Tales of Seikyu Fox Ruins Guide: Offerings, Relic Waypoints, Slime Shortcuts, Tengu Form, Water and Fire Puzzle, Bosses and 75 Rooms",
      description:
        "A player-focused Tales of Seikyu Fox Ruins guide covering route preparation, relic waypoints, offering altars, Slime Form shortcuts, Tengu Form aerial crossings, the Water and fire cannot coexist puzzle note, foxholes, scrap paper clues, transformation scrolls, boss preparation, treasure chests, mining rewards, and 75-room Move Over, Yohji achievement routing.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tales of Seikyu",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Ruins",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu relic waypoints",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu offering altars",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Water and fire cannot coexist puzzle",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Slime Form shortcuts",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Tengu Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Transformation Scroll",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Ruins bosses",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Move Over Yohji",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu 75 ruins rooms",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "When should I enter the Fox Ruins in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enter when you have food, inventory space, a weapon, and enough time left in the day. Your first run should focus on scouting, relic waypoints, clues, and offering gates.",
          },
        },
        {
          "@type": "Question",
          name: "How do I solve the Water and fire cannot coexist puzzle in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Current community testing suggests Slime Form alone does not solve this room. Mark it and return after more story or form progress. When you revisit, check nearby routes, switches, boss progress, or later transformation options.",
          },
        },
        {
          "@type": "Question",
          name: "What does Slime Form unlock in the Fox Ruins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slime Form helps with water routes, underwater movement, and some shortcut logic between indoor and outdoor ruins sections.",
          },
        },
        {
          "@type": "Question",
          name: "What does Tengu Form do in the Fox Ruins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tengu Form helps with large gaps, ravines, cliffs, and elevated platforms. If a room looks impossible to cross by normal jumping, return after Tengu progress.",
          },
        },
        {
          "@type": "Question",
          name: "How many Fox Ruins rooms do I need for Move Over, Yohji?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move Over, Yohji asks you to unlock 75 ruins rooms. Treat it as a long-term 1.0 cleanup route, not something you finish during the first few visits.",
          },
        },
        {
          "@type": "Question",
          name: "Are there bosses in the Fox Ruins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, the Fox Ruins should be treated as a dungeon with boss routes, not only puzzles. Save before major fights, bring food, and upgrade weapons or forms if combat feels too slow.",
          },
        },
        {
          "@type": "Question",
          name: "Are there multiple transformation scrolls in the Fox Ruins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Fox Ruins routes can connect to multiple transformation scrolls. Do not assume every scroll is Fox Form; follow the story clue for the specific scroll you need.",
          },
        },
        {
          "@type": "Question",
          name: "Should I open every chest in the Fox Ruins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open chests when you can safely reach them and have inventory space. Puzzle rooms, side rooms, and mining routes can all lead to useful rewards.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if a Fox Ruins room feels impossible?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stop forcing it. Mark the room as a form gate, offering gate, boss gate, or story gate, then return after new progress.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell Fox Ruins materials?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sell extras carefully, but keep useful drops, ores, meat, energy crystals, and unusual materials until you know whether they are needed for offerings, crafting, or upgrades.",
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
          title="Clear Fox Ruins Without Wasting Runs on Form Gates"
          description="Use this Fox Ruins route to track relic waypoints, offering altars, Slime shortcuts, Tengu gaps, water/fire puzzle notes, bosses, scrolls, chests, and 75-room cleanup."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FoxRuinsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
