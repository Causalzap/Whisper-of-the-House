import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SupermarketChaosBestUpgradesSkillsContent from "@/data/supermarket-chaos/best-upgrades-skills.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/supermarket-chaos/best-upgrades-skills/`;

const imageUrls = [
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-skill-tree-overview.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-extra-carry-skills.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-too-heavy-10-items.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-matchfinder-skill.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-shelf-finder-skill.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-matchfinder-plus-skill.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-shelf-feedback-money-skills.webp`,
];

const toc = [
  {
    id: "supermarket-chaos-best-upgrades-skills",
    label: "Best upgrades",
  },
  {
    id: "upgrade-costs-and-levels",
    label: "Costs & levels",
  },
  {
    id: "upgrade-planner-tool",
    label: "Planner tool",
  },
  {
    id: "best-upgrade-order",
    label: "Upgrade order",
  },
  {
    id: "extra-carry-first",
    label: "Extra Carry",
  },
  {
    id: "matchfinder",
    label: "Match Finder",
  },
  {
    id: "shelf-finder",
    label: "Shelf Finder",
  },
  {
    id: "matchfinder-plus",
    label: "Match Finder+",
  },
  {
    id: "money-and-shelf-feedback",
    label: "Money & feedback",
  },
  {
    id: "which-tool-to-use",
    label: "Which tool?",
  },
  {
    id: "upgrade-mistakes",
    label: "Mistakes",
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
    href: "/supermarket-chaos/",
    label: "Supermarket Chaos Guide Hub",
  },
  {
    href: "/supermarket-chaos/beginner-guide/",
    label: "Supermarket Chaos Beginner Guide",
  },
  {
    href: "/supermarket-chaos/achievements-guide/",
    label: "Supermarket Chaos Achievements Guide",
  },
  {
    href: "/supermarket-chaos/section-map-item-locations/",
    label: "Section Map and Tricky Item Locations",
  },
];

export const metadata: Metadata = {
  title: "Supermarket Chaos Best Upgrades, Skills & Costs",
  description:
    "Pick the best Supermarket Chaos upgrades with Extra Carry, Match Finder, Shelf Finder, Match Finder+, current costs, level caps and skill order.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Supermarket Chaos Best Upgrades, Skills, Costs and Level Caps",
    description:
      "Plan the Supermarket Chaos upgrade route with Extra Carry, Match Finder, Shelf Finder, Match Finder+, current costs, level caps, money use, shelf feedback and cleanup mistakes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Supermarket Chaos skill tree overview with upgrade branches.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Chaos Best Upgrades, Skills & Costs",
    description:
      "Use the best upgrade order for Extra Carry, Match Finder, Shelf Finder, Match Finder+, current costs and late cleanup tools.",
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
          name: "Supermarket Chaos Guide",
          item: `${siteUrl}/supermarket-chaos/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Upgrades and Skills",
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
        "Supermarket Chaos Best Upgrades and Skills Guide: Extra Carry, Match Finder, Shelf Finder, Match Finder+, Current Costs, Level Caps, Money, Shelf Feedback, and Cleanup Efficiency",
      description:
        "A practical Supermarket Chaos best upgrades and skills guide explaining how to spend money on Extra Carry, Match Finder, Shelf Finder, Match Finder+, and optional movement speed. The guide covers current upgrade costs and level caps shown on the skill screen, including Extra Carry Lv 0/10 with a $2 current cost, Match Finder Lv 0/5 with a $3 current cost, Shelf Finder Lv 0/5 with a $3 current cost, and Match Finder+ Lv 0/1 with a $15 cost. It also explains when to use each tool, why skills solve speed problems rather than category problems, how money and shelf feedback shape the upgrade route, and when to switch to the beginner, achievements, or section map guides.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-01",
      dateModified: "2026-07-01",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Supermarket Chaos",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos best upgrades",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos skills",
        },
        {
          "@type": "Thing",
          name: "Extra Carry",
        },
        {
          "@type": "Thing",
          name: "Match Finder",
        },
        {
          "@type": "Thing",
          name: "Shelf Finder",
        },
        {
          "@type": "Thing",
          name: "Match Finder+",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos skill tree",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos current upgrade costs",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos level caps",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos money",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos shelf feedback",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos cleanup efficiency",
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
          name: "What is the best first upgrade in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Extra Carry is the best first upgrade because it makes every trip more efficient and helps the whole route, not just one section.",
          },
        },
        {
          "@type": "Question",
          name: "What does Extra Carry cost in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "At the start of the skill track, Extra Carry shows Lv 0/10 with a $2 current upgrade cost. That makes it the easiest early purchase in the route.",
          },
        },
        {
          "@type": "Question",
          name: "How many levels does Extra Carry have?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Extra Carry shows Lv 0/10 on the skill screen. It does not need to be maxed immediately, but extra levels are useful when short inventory trips become the main slowdown.",
          },
        },
        {
          "@type": "Question",
          name: "What level of Extra Carry do I need for Too Heavy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Too Heavy requires holding 10 or more products at once. Keep upgrading until the inventory can reach 10 held products, then use the achievements guide for the actual 10/10 setup.",
          },
        },
        {
          "@type": "Question",
          name: "What does Match Finder do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Match Finder shows dropped products that match the product being held. It is strongest after the correct section or shelf family is already clear.",
          },
        },
        {
          "@type": "Question",
          name: "What do Match Finder and Shelf Finder cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Match Finder and Shelf Finder both show Lv 0/5 with a $3 current upgrade cost in the early skill screen. They are good early finder unlocks after the first carry upgrade starts paying off.",
          },
        },
        {
          "@type": "Question",
          name: "What does Shelf Finder do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shelf Finder shows the nearest shelf for the product being held. Use it when the product family is clear but the exact shelf is hard to remember.",
          },
        },
        {
          "@type": "Question",
          name: "Is Match Finder+ worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but it is better in the mid-to-late run. Match Finder+ shows Lv 0/1 with a $15 cost and works best after the store is less cluttered.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy movement speed first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Movement speed is useful, but carry capacity and finder tools solve bigger early problems.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get more money for upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Place products correctly. Correct stocking earns money, and that money funds the skill route.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if a product still will not fit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "That is usually a category problem, not an upgrade problem. Use the section map and tricky placements guide instead of brute forcing shelves.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need every upgrade before finishing the game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. A good route needs enough carry and finder help to avoid wasting time. You do not need to max everything before making real progress.",
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
          title="Buy Upgrades That Actually Fix the Run"
          description="Use the upgrade planner for Extra Carry, Match Finder, Shelf Finder, Match Finder+, current costs, level caps, money use, shelf feedback, and cleanup mistakes."
          gameTitle="Supermarket Chaos"
          gameHref="/supermarket-chaos/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SupermarketChaosBestUpgradesSkillsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}