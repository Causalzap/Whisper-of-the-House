import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SupermarketChaosBeginnerGuideContent from "@/data/supermarket-chaos/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/supermarket-chaos/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-section-labels-overview.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-sugar-tea-candies-placement.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-extra-carry-skills.webp`,
];

const toc = [
  {
    id: "supermarket-chaos-beginner-guide",
    label: "Beginner guide",
  },
  {
    id: "what-kind-of-game-this-is",
    label: "Game type",
  },
  {
    id: "first-hour-route",
    label: "First-hour route",
  },
  {
    id: "keyboard-mouse-controller",
    label: "Controls",
  },
  {
    id: "beginner-route-tool",
    label: "Checklist tool",
  },
  {
    id: "best-sections-to-clear-first",
    label: "First sections",
  },
  {
    id: "use-shelf-feedback",
    label: "Shelf feedback",
  },
  {
    id: "first-upgrades",
    label: "First upgrades",
  },
  {
    id: "how-to-handle-temporary-piles",
    label: "Temporary piles",
  },
  {
    id: "beginner-mistakes",
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
    href: "/supermarket-chaos",
    label: "Supermarket Chaos Guide Hub",
  },
  {
    href: "/supermarket-chaos/achievements-guide",
    label: "Supermarket Chaos Achievements Guide",
  },
  {
    href: "/supermarket-chaos/best-upgrades-skills",
    label: "Best Upgrades and Skills Guide",
  },
  {
    href: "/supermarket-chaos/section-map-item-locations",
    label: "Section Map and Tricky Item Locations",
  },
];

export const metadata: Metadata = {
  title: "Supermarket Chaos Beginner Guide & First Upgrades",
  description:
    "Start Supermarket Chaos with first-hour route, 4,668 products, 528 shelves, section signs, controls, shelf feedback, Extra Carry and beginner mistakes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Supermarket Chaos Beginner Guide and First Upgrades",
    description:
      "Learn the Supermarket Chaos first-hour route with section signs, 4,668 products, 528 shelves, controls, shelf feedback, Extra Carry, temporary piles, and beginner mistakes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Supermarket Chaos opening store view with section signs and products scattered on the floor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Chaos Beginner Guide & First Upgrades",
    description:
      "Use the first-hour route, section signs, controls, shelf feedback, Extra Carry and beginner checklist to start sorting cleanly.",
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
        "Supermarket Chaos Beginner Guide: First-Hour Route, 4,668 Products, 528 Shelves, Section Signs, Controls, Extra Carry, Shelf Feedback, Temporary Piles, and Early Mistakes",
      description:
        "A practical Supermarket Chaos beginner guide for the first hour and first 500 products, covering what kind of game it is, why the route should be based on section families instead of an all-items list, how to read the store's 528 shelves and section signs, how to handle the 4,668-product cleanup target, when to use keyboard and mouse or controller, how to use shelf feedback, why Extra Carry is the first useful upgrade path, how to manage temporary piles, and when to switch to the achievements, best upgrades, or section map guides.",
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
          name: "Supermarket Chaos beginner guide",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos first-hour route",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos first 500 products",
        },
        {
          "@type": "Thing",
          name: "4,668 products",
        },
        {
          "@type": "Thing",
          name: "528 shelves",
        },
        {
          "@type": "Thing",
          name: "section signs",
        },
        {
          "@type": "Thing",
          name: "shelf feedback",
        },
        {
          "@type": "Thing",
          name: "Extra Carry",
        },
        {
          "@type": "Thing",
          name: "keyboard and mouse",
        },
        {
          "@type": "Thing",
          name: "controller support",
        },
        {
          "@type": "Thing",
          name: "temporary piles",
        },
        {
          "@type": "Thing",
          name: "sugar placement",
        },
        {
          "@type": "Thing",
          name: "shampoo placement",
        },
        {
          "@type": "Thing",
          name: "wine placement",
        },
        {
          "@type": "Thing",
          name: "bento items",
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
          name: "What should I do first in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Walk the store, learn the big section signs, then place obvious products first. Do not start by trying to identify every product on the floor.",
          },
        },
        {
          "@type": "Question",
          name: "Is Supermarket Chaos a management game?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not really. The core loop is sorting and placement. There is no deep pricing, restocking, cashier, staffing, or business-management layer in the early route.",
          },
        },
        {
          "@type": "Question",
          name: "How many products are in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The launch objective is to place 4,668 products back onto the correct shelves.",
          },
        },
        {
          "@type": "Question",
          name: "How many shelves are there in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The run tracks 528 shelves, so it is better to think in section families than individual products.",
          },
        },
        {
          "@type": "Question",
          name: "Is keyboard and mouse or controller better for Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Both work. Controller can feel better for relaxed long sorting, while keyboard and mouse is useful for quicker item handling, precise shelf tests, or fast throw timing.",
          },
        },
        {
          "@type": "Question",
          name: "What changes after I buy Extra Carry?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The route feels less stop-start. You can carry more products from the same aisle, finish small section passes faster, and avoid walking back and forth for every few items.",
          },
        },
        {
          "@type": "Question",
          name: "Should I clean one shelf perfectly before moving on?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not at the very start. Correct section placement matters first. Perfect cleanup matters more later, when the store is easier to read.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do with confusing products?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Test the most likely section once. If it fails, move by category family or use the section map. Do not brute force every shelf nearby.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use an all-items list?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. For a normal clear, an all-items list is unnecessary. Learn section rules, keep small temporary piles, and use finder upgrades later.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start achievement hunting?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do Music Duty and Do Not Throw early if you want 100%. Then follow the normal cleanup route until the dedicated achievement milestones become relevant.",
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
          title="Start Sorting Without Making a Second Mess"
          description="Learn the first-hour route, section signs, controls, shelf feedback, Extra Carry timing, temporary piles, and beginner mistakes before the 4,668-product cleanup gets messy."
          gameTitle="Supermarket Chaos"
          gameHref="/supermarket-chaos/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SupermarketChaosBeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}