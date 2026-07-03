import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/the-binding-of-isaac-rebirth/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-binding-of-isaac-rebirth/beginner-guide/`;

const imageUrls = [
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dlc-fresh-save-isaac.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-first-item-room-route.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-shop-20-coins.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-blue-heart-before-mom.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-mom-foot-first-wall.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-item-description-mod.webp`,
];

const toc = [
  {
    id: "binding-of-isaac-beginner-guide",
    label: "Beginner guide",
  },
  {
    id: "normal-or-hard",
    label: "Normal or Hard",
  },
  {
    id: "why-isaac-first",
    label: "Why Isaac first",
  },
  {
    id: "first-ten-runs-route",
    label: "First ten runs",
  },
  {
    id: "floor-priority",
    label: "Floor priority",
  },
  {
    id: "stage-priority",
    label: "Stage changes",
  },
  {
    id: "keys-bombs-coins",
    label: "Keys, bombs, coins",
  },
  {
    id: "tinted-rocks-secret-rooms",
    label: "Tinted rocks",
  },
  {
    id: "blue-hearts",
    label: "Blue hearts",
  },
  {
    id: "boss-room",
    label: "Boss room",
  },
  {
    id: "mom-foot",
    label: "Mom's Foot",
  },
  {
    id: "devil-deals",
    label: "Devil Deals",
  },
  {
    id: "run-changing-items",
    label: "Key items",
  },
  {
    id: "d6",
    label: "D6",
  },
  {
    id: "item-descriptions",
    label: "Item descriptions",
  },
  {
    id: "repentance-beginner",
    label: "Repentance",
  },
  {
    id: "mistakes",
    label: "Mistakes",
  },
  {
    id: "what-to-do-after-mom",
    label: "After Mom",
  },
  {
    id: "when-to-switch-guides",
    label: "Next guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-binding-of-isaac-rebirth/",
    label: "The Binding of Isaac: Rebirth Guide Hub",
  },
  {
    href: "/the-binding-of-isaac-rebirth/dlc-buying-guide/",
    label: "DLC Buying Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/unlock-order/",
    label: "Unlock Order Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/best-beginner-characters/",
    label: "Best Beginner Characters",
  },
  {
    href: "/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide/",
    label: "Tainted Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "Binding of Isaac Rebirth Beginner Guide & Tips",
  description:
    "Master your first 10 runs in The Binding of Isaac! Learn essential strategies for item rooms, bombs, tinted rocks, Devil Deals, and defeating Mom's Foot.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Binding of Isaac Rebirth Beginner Guide: First Runs, D6, Shops, Bombs and Mom",
    description:
      "Learn how to start The Binding of Isaac: Rebirth with Isaac, Normal mode, item rooms, shop thresholds, bomb value, tinted rocks, Secret Rooms, blue hearts, Devil Deals, D6 rerolls, Mom's Foot and early Repentance routing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "The Binding of Isaac Rebirth fresh save character select showing Isaac as the starting character.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binding of Isaac Rebirth Beginner Guide & Tips",
    description:
      "Learn Isaac first runs with item rooms, shops, bombs, tinted rocks, D6, Devil Deals, Mom's Foot and beginner route decisions.",
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
          name: "The Binding of Isaac: Rebirth Guide",
          item: `${siteUrl}/the-binding-of-isaac-rebirth/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "The Binding of Isaac: Rebirth Beginner Guide: First Ten Runs, Isaac, Normal Mode, Shops, Bombs, Tinted Rocks, Secret Rooms, D6, Devil Deals and Mom's Foot",
      description:
        "A practical The Binding of Isaac: Rebirth beginner guide for new and returning players. The guide explains why to start with Isaac before relying on Azazel or Magdalene, when to play Normal instead of Hard, how to route the first ten runs, when to enter item rooms and shops, how to use 5, 15 and 20 coin shop thresholds, where bombs create value, why tinted rocks and Secret Rooms matter, how blue hearts protect red hearts, when to enter boss rooms, why Mom's Foot is the first major wall, how to think about Devil Deals, what early run-changing items like Brimstone, Mom's Knife, Sacred Heart and The Small Rock mean, how to use D6 after it is unlocked, and when to move from beginner runs into unlock order, beginner characters and Tainted character routing.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-03",
      dateModified: "2026-07-03",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Binding of Isaac: Rebirth",
        },
        {
          "@type": "Thing",
          name: "The Binding of Isaac beginner guide",
        },
        {
          "@type": "Thing",
          name: "Isaac",
        },
        {
          "@type": "Thing",
          name: "Azazel",
        },
        {
          "@type": "Thing",
          name: "Magdalene",
        },
        {
          "@type": "Thing",
          name: "Normal Mode",
        },
        {
          "@type": "Thing",
          name: "Hard Mode",
        },
        {
          "@type": "Thing",
          name: "Item Room",
        },
        {
          "@type": "Thing",
          name: "Shop",
        },
        {
          "@type": "Thing",
          name: "Tinted Rocks",
        },
        {
          "@type": "Thing",
          name: "Secret Rooms",
        },
        {
          "@type": "Thing",
          name: "Soul Hearts",
        },
        {
          "@type": "Thing",
          name: "Devil Deals",
        },
        {
          "@type": "Thing",
          name: "D6",
        },
        {
          "@type": "Thing",
          name: "Mom's Foot",
        },
        {
          "@type": "Thing",
          name: "Boss Rush",
        },
        {
          "@type": "Thing",
          name: "Brimstone",
        },
        {
          "@type": "Thing",
          name: "Mom's Knife",
        },
        {
          "@type": "Thing",
          name: "Sacred Heart",
        },
        {
          "@type": "Thing",
          name: "Repentance",
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
          name: "Should I start The Binding of Isaac: Rebirth on Normal or Hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start on Normal if you are new. Move to Hard when you understand why your runs are failing and want completion marks to matter.",
          },
        },
        {
          "@type": "Question",
          name: "Why start with Isaac instead of Azazel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Isaac teaches the normal game. Azazel is easier for early wins because of flight and short Brimstone, but he can hide movement, range and floor-routing mistakes that matter on other characters.",
          },
        },
        {
          "@type": "Question",
          name: "Is Magdalene better for new players?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Magdalene is safer if you keep dying from health mistakes. Isaac is still a cleaner first teacher because he teaches the baseline route without a special safety buffer.",
          },
        },
        {
          "@type": "Question",
          name: "Should I go to the item room before the boss?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually yes, if you have a key. One early item can make the boss much easier and can turn a weak first floor into a playable run.",
          },
        },
        {
          "@type": "Question",
          name: "When should I enter the shop in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Enter the shop when you have money or a clear reason. A 15-cent item is the main early shop threshold, while 5 coins can still buy small fixes like a key, bomb or heart.",
          },
        },
        {
          "@type": "Question",
          name: "What should I use bombs for as a beginner?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use bombs for tinted rocks, useful chests, strong Secret Room candidates, blocked pickups or boss damage when you have extras. Do not waste your last bomb without a clear target.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find Secret Rooms in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Regular Secret Rooms are usually next to 3 or 4 rooms. Look for map gaps with several adjacent rooms and avoid walls blocked by rocks, gaps, spikes or awkward room geometry.",
          },
        },
        {
          "@type": "Question",
          name: "Why are tinted rocks important?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tinted rocks can drop Soul Hearts and other rewards, making them one of the best early bomb targets. Check them before spending bombs on random walls.",
          },
        },
        {
          "@type": "Question",
          name: "Does Isaac start with D6?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not on every file. D6 is an unlock that later becomes Isaac's key active item. Once Isaac has D6, use it to reroll bad pedestal items instead of rerolling every item automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Should beginners take Devil Deals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only take a Devil Deal if the item clearly helps and you can survive without the red hearts. Do not take every deal automatically as a beginner.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I keep dying to Mom's Foot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mom's Foot checks positioning, enemy control, stomp timing, health and damage at the same time. New players often die because they watch only the boss and stop reading the whole room.",
          },
        },
        {
          "@type": "Question",
          name: "Do item descriptions make The Binding of Isaac easy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Item descriptions make the game clearer, not easy. They explain item effects, but you still need to make route, health, shop, D6, deal and boss decisions yourself.",
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
          title="Start Isaac Without Wasting Your First Runs"
          description="Learn the first-ten-run route with item rooms, shop thresholds, bomb value, tinted rocks, Secret Rooms, D6, Devil Deals, Mom's Foot and when to move on."
          gameTitle="The Binding of Isaac: Rebirth"
          gameHref="/the-binding-of-isaac-rebirth/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 3, 2026"
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