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
    label: "Start here",
  },
  {
    id: "what-are-you-stuck-on",
    label: "Choose guide",
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
    label: "Beginner Route and First Upgrades",
  },
  {
    href: "/supermarket-chaos/section-map-item-locations/",
    label: "16-Section Map and Tricky Item Locations",
  },
  {
    href: "/supermarket-chaos/best-upgrades-skills/",
    label: "Best Upgrades and Skills Order",
  },
  {
    href: "/supermarket-chaos/achievements-guide/",
    label: "100% Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Supermarket Chaos Guide: Section Map, Upgrades & 100%",
  description:
    "Start Supermarket Chaos with a section-first route for 4,668 products, 16 store sections, best upgrades, item locations, achievements, and stuck fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Supermarket Chaos Guide: Section Map, Upgrades and 100%",
    description:
      "Start Supermarket Chaos with a section-first route for 4,668 products, 16 store sections, best upgrades, item locations, achievements, and stuck fixes.",
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
    title: "Supermarket Chaos Guide: Section Map, Upgrades & 100%",
    description:
      "Use a section-first route for 4,668 products, 16 sections, best upgrades, achievements, item locations, and stuck fixes.",
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
        "Supermarket Chaos Guide: Section Map, Upgrades, Achievements, and 4,668 Products",
      description:
        "A Supermarket Chaos guide hub for players sorting 4,668 products across 16 sections. It routes beginners to the first-run guide, stuck players to the section map and tricky item locations, slow cleanup problems to the best upgrades guide, and 100% players to the achievements route.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-01",
      dateModified: "2026-07-02",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Supermarket Chaos",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos guide",
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
          name: "Supermarket Chaos upgrades",
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
          name: "Supermarket Chaos stuck fixes",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos product placement",
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
          title="Supermarket Chaos Guide Hub: Section Map, Upgrades, Achievements"
          description="Start here for the section-first route, 4,668-product cleanup, 16-section map, best upgrades, achievements, tricky item locations, and stuck fixes."
          gameTitle="Supermarket Chaos"
          gameHref="/supermarket-chaos/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 2, 2026"
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