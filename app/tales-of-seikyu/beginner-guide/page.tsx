import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/tales-of-seikyu/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-farmhouse-first-day.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-shrine-fast-travel.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-boar-form-farming.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-crafting-table-chest.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-request-board-early-quests.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fishing-rod-beginner.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-slime-form-unlock.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-slime-underwater.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-ruins-entrance.webp`,
];

const toc = [
  {
    id: "beginner-guide",
    label: "Beginner guide",
  },
  {
    id: "town-tour-map",
    label: "Town tour and map",
  },
  {
    id: "first-farm-setup",
    label: "First farm setup",
  },
  {
    id: "trash-cans",
    label: "Trash cans",
  },
  {
    id: "storage-backpack",
    label: "Storage and backpack",
  },
  {
    id: "request-board-basic-rod",
    label: "Request Board and Basic Rod",
  },
  {
    id: "forms",
    label: "Early forms",
  },
  {
    id: "slime-form-water",
    label: "Slime Form routes",
  },
  {
    id: "upgrades",
    label: "Early upgrades",
  },
  {
    id: "bamboo-forest",
    label: "Bamboo Forest",
  },
  {
    id: "fox-ruins-prep",
    label: "Fox Ruins prep",
  },
  {
    id: "stuck-checklist",
    label: "Stuck checklist",
  },
  {
    id: "time-management",
    label: "3AM rule",
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
    href: "/tales-of-seikyu/request-board-guide",
    label: "Tales of Seikyu Request Board Guide",
  },
  {
    href: "/tales-of-seikyu/yokai-forms-guide",
    label: "Tales of Seikyu Yokai Forms Guide",
  },
  {
    href: "/tales-of-seikyu/fox-ruins-guide",
    label: "Tales of Seikyu Fox Ruins Guide",
  },
  {
    href: "/tales-of-seikyu/achievements-guide",
    label: "Tales of Seikyu Achievements Guide",
  },
  {
    href: "/tales-of-seikyu/romance-gifts-marriage-guide",
    label: "Tales of Seikyu Romance, Gifts, and Marriage Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Beginner Guide: First Week Route",
  description:
    "Start Tales of Seikyu with a first-week route for Yui’s tour, map, trash cans, backpack upgrades, Boar Form, Slime Form, fishing, shrines, and Fox Ruins.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Beginner Guide: First Week Route, Map Tips, Trash Cans, Backpack Upgrades and Forms",
    description:
      "Start Tales of Seikyu with a practical beginner route covering Yui’s town tour, map use, first farm setup, trash cans, backpack upgrades, storage, Basic Rod, Boar Form, Slime Form, Bamboo Forest, Fox Ruins preparation, and the 3AM rule.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu farmhouse on the first day.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Beginner Guide",
    description:
      "Follow a safe first-week route for map use, trash cans, backpack upgrades, Boar Form, Slime Form, fishing, shrines, and Fox Ruins prep.",
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
          name: "Tales of Seikyu Beginner Guide",
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
        "Tales of Seikyu Beginner Guide: First Week Route, Map Tips, Trash Cans, Backpack Upgrades, Slime Form and Fox Ruins Prep",
      description:
        "A player-focused Tales of Seikyu beginner guide for the 1.0 release covering Yui’s town tour, map use, first farm setup, Boar Form farming, trash cans, early storage, Musashi backpack upgrades, Request Board priorities, Basic Rod unlock, shrine teleporting, Slime Form water routes, Bamboo Forest entrance, Fox Ruins preparation, 3AM forced sleep behavior, and common beginner mistakes.",
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
          name: "Tales of Seikyu beginner guide",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu first week",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu map",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu trash cans",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu backpack upgrade",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Boar Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Slime Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Basic Rod",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Bamboo Forest",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Ruins",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu 3AM rule",
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
          name: "What should I do first in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow Yui’s town tour first, then use the step-by-step first-week table at the top of this guide.",
          },
        },
        {
          "@type": "Question",
          name: "Should I check trash cans in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Trash cans can give free ingredients, bamboo, hardwood, rare crafting materials, and other useful early items. Check them when they are already on your route.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I buy backpack upgrades in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check Musashi’s shop. Early backpack upgrades cost around 200 gold and add one inventory row. Buy one or two early if inventory pressure is slowing you down.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I stay out until 3AM in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The game forces you to sleep. In the current 1.0 behavior, you wake up with restored health and stamina and no permanent penalty, but you lose the rest of that in-game day.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find NPCs and shops in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the map. It shows NPC locations, building types, shop hours, and shrine teleport points, so you do not need to search blindly.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Bamboo Forest in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For the early route, look behind the farmhouse for the small path. Do not spend the whole day searching along the riverbank.",
          },
        },
        {
          "@type": "Question",
          name: "Is Slime Form useful early in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, after it unlocks. Slime Form can help with water, watering support, underwater movement, and routes that felt blocked before.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell wood, stone, and early materials in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sell extras, not your last useful stack. Wood, stone, clay, copper ore, crops, fish, food, bamboo, and hardwood can all become request, crafting, or offering blockers.",
          },
        },
        {
          "@type": "Question",
          name: "When should I enter Fox Ruins in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enter when you have food, inventory space, a weapon, and enough time. Your first run should focus on scouting, waypoints, clues, and offering gates.",
          },
        },
        {
          "@type": "Question",
          name: "Can I ignore the Request Board in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Request Board unlocks useful systems, especially fishing. Use it to guide early progress instead of only treating it as side money.",
          },
        },
        {
          "@type": "Question",
          name: "Should I make a huge farm immediately in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Start small. A field you can water every day is better than a large field that drains all your time and energy.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best early upgrade in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best early upgrade is the one solving your current problem. For most beginners, that means storage, backpack space, Basic Rod, or a practical form upgrade.",
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
          title="Start Tales of Seikyu Without Wasting Your First Week"
          description="Follow a beginner route for Yui’s town tour, the map, trash cans, backpack upgrades, first crops, Basic Rod, Slime Form, Bamboo Forest, Fox Ruins prep, and the 3AM rule."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
