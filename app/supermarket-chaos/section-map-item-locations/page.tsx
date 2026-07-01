import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SupermarketChaosSectionMapItemLocationsContent from "@/data/supermarket-chaos/section-map-item-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/supermarket-chaos/section-map-item-locations/`;

const imageUrls = [
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-section-labels-overview.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-sugar-tea-candies-placement.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-too-heavy-10-items.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-lucky-777-progress.webp`,
];

const toc = [
  {
    id: "supermarket-chaos-section-map-item-locations",
    label: "Section map",
  },
  {
    id: "section-map-tool",
    label: "Router tool",
  },
  {
    id: "quick-section-map",
    label: "Quick map",
  },
  {
    id: "tricky-item-placements",
    label: "Tricky items",
  },
  {
    id: "mixed-inventory-example",
    label: "Mixed inventory",
  },
  {
    id: "cleaning-housekeeping",
    label: "Cleaning & toilet",
  },
  {
    id: "what-to-do-when-item-will-not-fit",
    label: "Item will not fit",
  },
  {
    id: "last-item-cleanup",
    label: "Last item",
  },
  {
    id: "common-mistakes",
    label: "Mistakes",
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
    href: "/supermarket-chaos/best-upgrades-skills/",
    label: "Best Upgrades and Skills Guide",
  },
];

export const metadata: Metadata = {
  title: "Supermarket Chaos Section Map & Item Locations",
  description:
    "Find Supermarket Chaos item locations with the 16-section map, Tea/Candies, Breakfast/Sweets, Pasta/Condiments, Bento, Ramen and shelf feedback.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Supermarket Chaos Section Map and Item Locations",
    description:
      "Use the Supermarket Chaos section map for tricky item locations, Tea/Candies, Breakfast/Sweets, Pasta/Condiments, Bento, Ramen, Cleaning, Toilet, iT, and shelf feedback.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Supermarket Chaos store overview with section signs and products scattered on the floor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Chaos Section Map & Item Locations",
    description:
      "Route tricky items with Tea/Candies, Breakfast/Sweets, Pasta/Condiments, Bento, Ramen, Cleaning, Toilet and shelf feedback.",
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
          name: "Section Map and Item Locations",
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
        "Supermarket Chaos Section Map and Item Locations Guide: 16 Sections, Tea / Candies, Breakfasts / Sweets, Pasta / Condiments, Bento, Ramen, Cleaning, Toilet, iT, Home Decor, and Shelf Feedback",
      description:
        "A practical Supermarket Chaos section map and item locations guide for routing products through the game's 16 sections without relying on real supermarket logic. The guide explains how to use section signs, shelf feedback, and route zones for confusing placements such as Tea / Candies, Breakfasts / Sweets, Pasta / Condiments, Bento, Ramen, Bread, Frozen, Dairy, Meat, Soft Drinks, Wine, Alcohol, Toilet / Personal Care, Cleaning, Books, iT / Electronics, and Home Decor. It also includes a mixed 10-product inventory example, tricky item placement checks for sugar, candy, coffee, sushi, ramen, shampoo, toothpaste, condiments, routers, and decor, plus guidance for last-item cleanup.",
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
          name: "Supermarket Chaos section map",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos item locations",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos 16 sections",
        },
        {
          "@type": "Thing",
          name: "Tea / Candies",
        },
        {
          "@type": "Thing",
          name: "Breakfasts / Sweets",
        },
        {
          "@type": "Thing",
          name: "Pasta / Condiments",
        },
        {
          "@type": "Thing",
          name: "Bento",
        },
        {
          "@type": "Thing",
          name: "Ramen",
        },
        {
          "@type": "Thing",
          name: "Toilet / Personal Care",
        },
        {
          "@type": "Thing",
          name: "Cleaning",
        },
        {
          "@type": "Thing",
          name: "iT / Electronics",
        },
        {
          "@type": "Thing",
          name: "Home Decor",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos shelf feedback",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos sugar placement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos candy placement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos sushi placement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos ramen placement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos shampoo placement",
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
          name: "How many sections are in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Supermarket Chaos lists 16 sections, but several signs are paired or visually close, so it is easier to route by section families instead of memorizing a perfect list immediately.",
          },
        },
        {
          "@type": "Question",
          name: "Does sugar go in Breakfasts / Sweets or Tea / Candies?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check Tea / Candies first for sugar. Sugar is one of the clearest examples of why Supermarket Chaos item placement should follow the game's shelf feedback rather than real supermarket logic.",
          },
        },
        {
          "@type": "Question",
          name: "Do all candy items go in Tea / Candies?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Candy and sweet items can split between Breakfasts / Sweets and Tea / Candies depending on the exact product, so use shelf feedback instead of moving every candy-labeled item to one sign.",
          },
        },
        {
          "@type": "Question",
          name: "Where do chocolate chips and cakes go?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check Breakfasts / Sweets first for cake-style and chocolate-chip items.",
          },
        },
        {
          "@type": "Question",
          name: "Where do pasta and condiments go?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Pasta / Condiments for pasta, sauces, canned pantry items, salt, pepper, mayonnaise, chips, and other shelf-stable goods that do not fit a more specific sign.",
          },
        },
        {
          "@type": "Question",
          name: "Where do sushi and instant ramen go?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check Bento for sushi and prepared boxed food. Check Ramen for instant ramen, udon cups, and noodle bowls.",
          },
        },
        {
          "@type": "Question",
          name: "Where do shampoo and toothpaste go?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check Toilet / Personal Care first for shampoo and toothpaste. Cleaning products like bleach, dish soap, and multi cleaner belong in the Cleaning route instead.",
          },
        },
        {
          "@type": "Question",
          name: "Where do routers, headphones, and gamepads go?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check iT / Electronics first for routers, headphones, earbuds, gamepads, and tech accessories, but still read the item name because some technical-sounding products may be books.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Shelf Finder for every confusing item?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Shelf Finder is best when the section family is already clear but the exact shelf is hard to find. If the section itself is wrong, use the section map first.",
          },
        },
        {
          "@type": "Question",
          name: "Is this a full all-items list?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This page is a section-routing guide. It is meant to help with wrong-category problems without turning the page into a giant 4,668-product database.",
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
          title="Find the Right Section Before You Guess"
          description="Use the 16-section route map for Tea/Candies, Breakfast/Sweets, Pasta/Condiments, Bento, Ramen, Cleaning, Toilet, iT, Home Decor, tricky items, and shelf feedback."
          gameTitle="Supermarket Chaos"
          gameHref="/supermarket-chaos/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SupermarketChaosSectionMapItemLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}