import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5PinkCoinsContent from "@/data/deltarune/chapter-5-secret-boss-pink-coins.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune/chapter-5-secret-boss-pink-coins`;

const imageUrls = [
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-01-scissor-room.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-02-end-garden-dash-gate.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-03-shrine-roof.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-04-chef-door-route.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-05-first-cliffs-vine.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-06-scarecrow-vine-climb.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-07-floating-flower-room.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-08-final-cliffs-dash-gate.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-09-flower-castle-statues.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-10-paper-wall-chest.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-11-five-fox-door.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-12-first-canvas-puzzle.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-13-after-orange-bullet.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-14-mysterious-puzzle-canvas.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-15-canvas-wall-bullet.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-16-blue-door-shuriken.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-17-yellow-laser-route.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-18-top-castle-shuriken.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-coin-19-pink-door-drop.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-mystery-key-door.webp`,
  `${siteUrl}/images/deltarune/deltarune-chapter-5-pink-secret-boss-intro.webp`,
];

export const metadata: Metadata = {
  title: "All 19 Pink Coin Locations in DELTARUNE Chapter 5",
  description:
    "Find all 19 Pink Coin locations in DELTARUNE Chapter 5, including Garden, Cliffs, Flower Castle, Top of Castle, the fastest 10 for the Mystery Key, and post-Pink gear uses.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "All 19 Pink Coin Locations in DELTARUNE Chapter 5",
    description:
      "Find every Chapter 5 Pink Coin by area, then choose the fastest 10 for the Mystery Key, Pink Door, Pink / Miumu, and post-Pink flower gear.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 900,
        height: 600,
        alt: "DELTARUNE Chapter 5 Pink Coin 1 in the Garden scissor room left path.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All 19 Pink Coin Locations in DELTARUNE Chapter 5",
    description:
      "Use screenshots and a route checklist for all 19 Pink Coins, the fastest 10 for the Mystery Key, and post-Pink gear cleanup.",
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
          name: "DELTARUNE Guide",
          item: `${siteUrl}/deltarune`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All 19 Pink Coin Locations",
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
      headline: "All 19 Pink Coin Locations in DELTARUNE Chapter 5",
      description:
        "This DELTARUNE Chapter 5 guide shows all 19 Pink Coin locations with screenshots, including 4 Garden coins, 4 Cliffs coins, 9 Flower Castle coins, and 2 Top of Castle / Pink Door coins. It also explains the fastest route to 10 Pink Coins for the Mystery Key, when to buy the key, how extra coins work for post-Pink flower gear, and when to clean up before Flowery.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-27",
      dateModified: "2026-07-02",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "DELTARUNE",
        },
        {
          "@type": "Thing",
          name: "DELTARUNE Chapter 5",
        },
        {
          "@type": "Thing",
          name: "DELTARUNE Chapter 5 Pink Coins",
        },
        {
          "@type": "Thing",
          name: "All 19 Pink Coin locations",
        },
        {
          "@type": "Thing",
          name: "Pink Coin locations",
        },
        {
          "@type": "Thing",
          name: "Garden Pink Coins",
        },
        {
          "@type": "Thing",
          name: "Cliffs Pink Coins",
        },
        {
          "@type": "Thing",
          name: "Flower Castle Pink Coins",
        },
        {
          "@type": "Thing",
          name: "Top of Castle Pink Coins",
        },
        {
          "@type": "Thing",
          name: "Mystery Key",
        },
        {
          "@type": "Thing",
          name: "Pink Door",
        },
        {
          "@type": "Thing",
          name: "Pink / Miumu Secret Boss",
        },
        {
          "@type": "Thing",
          name: "Petal Feather",
        },
        {
          "@type": "Thing",
          name: "Flower Gear",
        },
        {
          "@type": "Thing",
          name: "Ferroll",
        },
        {
          "@type": "Thing",
          name: "Five Foxes",
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
          name: "How many Pink Coins are in DELTARUNE Chapter 5?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 19 Pink Coins in Chapter 5.",
          },
        },
        {
          "@type": "Question",
          name: "Where are all Pink Coins in DELTARUNE Chapter 5?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 4 Pink Coins in Garden, 4 in Cliffs, 9 in Flower Castle, and 2 near the Top of Castle / Pink Door route.",
          },
        },
        {
          "@type": "Question",
          name: "How many Pink Coins do I need for the Mystery Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need 10 Pink Coins to buy the Mystery Key.",
          },
        },
        {
          "@type": "Question",
          name: "Should I stop collecting after 10 Pink Coins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if you just want to unlock Pink quickly. If you care about post-Pink flower gear, collect more than 10.",
          },
        },
        {
          "@type": "Question",
          name: "What are the extra 9 Pink Coins for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The remaining Pink Coins can be used after beating Pink to buy flower gear, so they are not useless cleanup currency.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start serious Pink Coin cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start serious cleanup after Aqua, Petal Feather, and more shortcuts are open. The best sweep is late Chapter 5 before Flowery.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Petal Feather for Pink Coins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many Pink Coin routes need Petal Feather-style movement and platforming access. If a coin seems unreachable early, continue the story and come back later.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I buy the Mystery Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy the Mystery Key from Pink's shop in the Cliffs after collecting at least 10 Pink Coins.",
          },
        },
        {
          "@type": "Question",
          name: "What if the Mystery Key does not show up?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you have enough coins but the shop state looks wrong, save, reload, and check again before re-hunting the entire chapter.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Pink Door?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Pink Door is on the late Top of Castle or secret boss route near the final stretch before Flowery.",
          },
        },
        {
          "@type": "Question",
          name: "Is the five-fox room required for a Pink Coin?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Finding all five local foxes near the Second Diner opens a secret room where a fox becomes a chest and gives a Pink Coin.",
          },
        },
        {
          "@type": "Question",
          name: "Can Ferroll help with missed Pink Coins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After Pink, if Ferroll has been found in the Cliffs, Ferroll can appear in the Pink fight room and help point out missing Pink Coin counts by area for Flowery Dollars.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Pink before Flowery?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you want secret boss and flower gear cleanup, do it before committing to Flowery. If you only want the normal ending, you can save Pink for a cleanup file.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do this on Weird Route?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Keep Pink Coin cleanup, Pink / Miumu, and post-Pink gear on a normal or cleanup file, and keep Weird Route or Side B separate.",
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
          title="All 19 Pink Coin Locations in DELTARUNE Chapter 5"
          description="Find every Chapter 5 Pink Coin with screenshots: 4 in Garden, 4 in Cliffs, 9 in Flower Castle, and 2 near Top of Castle / Pink Door, plus the fastest 10 for the Mystery Key."
          gameTitle="DELTARUNE"
          gameHref="/deltarune"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 2, 2026"
          toc={[
            {
              id: "what-this-guide-covers",
              label: "What this covers",
            },
            {
              id: "all-pink-coins",
              label: "All 19 locations",
            },
            {
              id: "garden-pink-coins",
              label: "Garden 1-4",
            },
            {
              id: "cliffs-pink-coins",
              label: "Cliffs 5-8",
            },
            {
              id: "flower-castle-pink-coins",
              label: "Flower Castle 9-17",
            },
            {
              id: "top-of-castle-pink-coins",
              label: "Top of Castle 18-19",
            },
            {
              id: "quick-10-route",
              label: "Fast 10 route",
            },
            {
              id: "pink-coin-rule",
              label: "19 / 10 / 9 rule",
            },
            {
              id: "petal-feather",
              label: "Petal Feather",
            },
            {
              id: "when-to-clean-up",
              label: "When to clean up",
            },
            {
              id: "coins-after-10",
              label: "Coins after 10",
            },
            {
              id: "buy-mystery-key",
              label: "Mystery Key",
            },
            {
              id: "before-pink-door",
              label: "Before Pink Door",
            },
            {
              id: "five-fox-pink-coin",
              label: "Five-fox coin",
            },
            {
              id: "sun-style-coin",
              label: "Sun-style coin",
            },
            {
              id: "point-of-no-return",
              label: "Point of no return",
            },
            {
              id: "common-mistakes",
              label: "Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/deltarune",
              label: "DELTARUNE Guide Hub",
            },
            {
              href: "/deltarune/chapter-5-secret-boss-guide",
              label: "Pink / Miumu Secret Boss Guide",
            },
            {
              href: "/deltarune/chapter-5-foxes-secret-egg",
              label: "Five Foxes and Secret Egg Guide",
            },
            {
              href: "/deltarune/chapter-5-final-boss-guide",
              label: "Flowery Final Boss Guide",
            },
            {
              href: "/deltarune/chapter-5-weird-route",
              label: "Chapter 5 Weird Route and Side B Guide",
            },
            {
              href: "/#all-game-guides",
              label: "All Game Guides",
            },
          ]}
        >
          <DeltaruneChapter5PinkCoinsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}