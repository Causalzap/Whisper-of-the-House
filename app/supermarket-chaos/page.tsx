import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SupermarketChaosGuideContent from "@/data/supermarket-chaos/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/supermarket-chaos/`;

const imageUrls = [
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-4668-products-528-shelves.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-section-labels-overview.webp`,
];

const toc = [
  {
    id: "supermarket-chaos-guide-hub",
    label: "Guide hub",
  },
  {
    id: "what-are-you-stuck-on",
    label: "Stuck points",
  },
  {
    id: "sections-not-all-items",
    label: "Sections first",
  },
  {
    id: "what-this-hub-does-not-repeat",
    label: "Guide boundaries",
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
  {
    href: "/supermarket-chaos/section-map-item-locations/",
    label: "Section Map and Tricky Item Locations",
  },
];

export const metadata: Metadata = {
  title: "Supermarket Chaos Guide Hub, Routes & 16 Sections",
  description:
    "Start Supermarket Chaos with the right guide: beginner route, 100% achievements, section map, upgrades, 4,668 products and 16 sections.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Supermarket Chaos Guide Hub, Routes and 16 Sections",
    description:
      "Choose the right Supermarket Chaos guide for the beginner route, achievements, section map, item locations, upgrades, 4,668 products, and 16 sections.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Supermarket Chaos opening objective showing 4,668 products to place on the correct shelves.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Chaos Guide Hub, Routes & 16 Sections",
    description:
      "Pick the right Supermarket Chaos guide for beginners, 100% achievements, section map, upgrades, and the 4,668-product cleanup.",
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
        "Supermarket Chaos Guide Hub: Beginner Route, Achievements, Section Map, Item Locations, Upgrades, 4,668 Products, and 16 Sections",
      description:
        "A Supermarket Chaos guide hub that helps players choose the correct deeper guide based on their current stuck point. The hub routes new players to the beginner guide, achievement hunters to the 100% achievements guide, wrong-category product problems to the section map and item locations guide, and slow cleanup problems to the best upgrades and skills guide. It explains the core route idea for the 4,668-product cleanup across 16 sections without repeating the full first-hour route, achievement checklist, upgrade order, or item-location map.",
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
          name: "Supermarket Chaos guide hub",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos beginner guide",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos achievements guide",
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
          name: "Supermarket Chaos best upgrades",
        },
        {
          "@type": "Thing",
          name: "4,668 products",
        },
        {
          "@type": "Thing",
          name: "16 sections",
        },
        {
          "@type": "Thing",
          name: "section routing",
        },
        {
          "@type": "Thing",
          name: "shelf feedback",
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
          name: "What is the goal in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The goal is to put 4,668 products back onto the correct shelves. The challenge is staying organized while the store slowly becomes cleaner.",
          },
        },
        {
          "@type": "Question",
          name: "How many sections are in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Supermarket Chaos lists 16 sections. Several signs are paired or visually close, so it is easier to route by section families instead of trying to memorize a perfect section list immediately.",
          },
        },
        {
          "@type": "Question",
          name: "Which Supermarket Chaos guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Beginner Guide if you are still learning the store. Use the Section Map if products keep failing, the Best Upgrades Guide if the route feels slow, and the Achievements Guide if you want 100%.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use an all-items list?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No, not for a normal clear. A full product database would be overkill. It is usually better to learn section rules, use shelf feedback, and rely on upgrades for the final cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Where do confusing products go?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Section Map and Tricky Item Locations Guide. That page handles wrong-category problems and confusing section signs.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrades should I buy first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Best Upgrades Guide. The hub only explains when upgrades become the right fix.",
          },
        },
        {
          "@type": "Question",
          name: "Is Supermarket Chaos hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It is not mechanically hard, but it becomes mentally tiring if products are sorted randomly. The hard part is keeping the store readable across thousands of products.",
          },
        },
        {
          "@type": "Question",
          name: "How do I finish the last products?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the section map to narrow the category, then use finder tools only when the section is already clear. For final milestones and 100%, use the achievements guide.",
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
          title="Choose the Right Supermarket Chaos Guide"
          description="Use this hub to pick the right route: beginner guide, 100% achievements, section map, item locations, or best upgrades for the 4,668-product cleanup."
          gameTitle="Supermarket Chaos"
          gameHref="/supermarket-chaos/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SupermarketChaosGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}