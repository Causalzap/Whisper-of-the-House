import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DlcContentGuideContent from "@/data/house-flipper-remastered-collection/dlc-content-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/house-flipper-remastered-collection/dlc-content-guide`;

const imageUrls = [
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-regions.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-north-south-winter.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-cleaning-garage-job.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-garden-hose-outdoor-cleaning.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-cozy-maple-flipperberg.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-maple-bloom-first-job.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-sunset-moonrise.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-heart-valley-late.webp`,
];

const toc = [
  { id: "dlc-content-guide", label: "DLC content guide" },
  { id: "new-vs-returning-players", label: "New vs returning players" },
  { id: "new-remastered-tools", label: "Remastered tools" },
  { id: "north-levyville", label: "North Levyville" },
  { id: "cozy-village", label: "Cozy Village" },
  { id: "south-levyville", label: "South Levyville" },
  { id: "maple-bloom-village", label: "Maple Bloom Village" },
  { id: "flipperberg", label: "Flipperberg" },
  { id: "sunset-bay", label: "Sunset Bay" },
  { id: "moonrise-bay", label: "Moonrise Bay" },
  { id: "winter-hills", label: "Winter Hills" },
  { id: "heart-valley", label: "Heart Valley" },
  { id: "dlc-achievements", label: "DLC achievements" },
  { id: "common-dlc-mistakes", label: "DLC mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/house-flipper-remastered-collection",
    label: "House Flipper Remastered Collection Guide Hub",
  },
  {
    href: "/house-flipper-remastered-collection/beginner-guide",
    label: "House Flipper Remastered Beginner Guide",
  },
  {
    href: "/house-flipper-remastered-collection/first-jobs-walkthrough",
    label: "House Flipper Remastered First Jobs Walkthrough",
  },
  {
    href: "/house-flipper-remastered-collection/money-guide",
    label: "House Flipper Remastered Money Guide",
  },
  {
    href: "/house-flipper-remastered-collection/achievements-guide",
    label: "House Flipper Remastered Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "House Flipper Remastered Collection DLC Guide",
  description:
    "DLC region guide for House Flipper Remastered Collection. Best region order, what each area contains, North Levyville to Heart Valley, and DLC achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "House Flipper Remastered Collection DLC Guide: All Regions, Order and Content",
    description:
      "Plan the House Flipper Remastered Collection DLC regions with the best order, North Levyville main missions, 93 additional DLC missions, Heart Valley Lovely Jobs, Remastered tools, and DLC achievement groups.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "House Flipper Remastered Collection map showing DLC regions and routes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Flipper Remastered Collection DLC Guide",
    description:
      "Best DLC region order, what each area contains, Heart Valley story jobs, Remastered tools, and DLC achievement planning.",
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
          name: "House Flipper Remastered Collection Guide",
          item: `${siteUrl}/house-flipper-remastered-collection`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DLC Content Guide",
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
        "House Flipper Remastered Collection DLC Guide: All Regions, Best Order, Heart Valley, Remastered Tools and DLC Achievements",
      description:
        "A player-focused House Flipper Remastered Collection DLC guide explaining how to approach all major regions and when to start each one. The guide covers North Levyville and its 20 main missions, the 93 additional DLC missions across Cozy Village, South Levyville, Maple Bloom Village, Flipperberg, Sunset Bay, Moonrise Bay and Winter Hills, plus Heart Valley's 6 story-driven Lovely Jobs. It also explains the best route for new players and returning players, Remastered tools such as Area Cleanup, Area Demolition, Favorites, Tool Selection Wheel and House Import / Export, DLC achievement groups, common region mistakes, Steam Workshop support, and veteran upgrade notes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-05",
      dateModified: "2026-06-05",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "House Flipper Remastered Collection" },
        { "@type": "Thing", name: "House Flipper Remastered DLC guide" },
        { "@type": "Thing", name: "House Flipper Remastered Collection DLC regions" },
        { "@type": "Thing", name: "House Flipper Remastered best region order" },
        { "@type": "Thing", name: "House Flipper Remastered North Levyville" },
        { "@type": "Thing", name: "House Flipper Remastered Cozy Village" },
        { "@type": "Thing", name: "House Flipper Remastered South Levyville" },
        { "@type": "Thing", name: "House Flipper Remastered Maple Bloom Village" },
        { "@type": "Thing", name: "House Flipper Remastered Flipperberg" },
        { "@type": "Thing", name: "House Flipper Remastered Sunset Bay" },
        { "@type": "Thing", name: "House Flipper Remastered Moonrise Bay" },
        { "@type": "Thing", name: "House Flipper Remastered Winter Hills" },
        { "@type": "Thing", name: "House Flipper Remastered Heart Valley" },
        { "@type": "Thing", name: "House Flipper Remastered Lovely Jobs" },
        { "@type": "Thing", name: "House Flipper Remastered Area Cleanup" },
        { "@type": "Thing", name: "House Flipper Remastered Area Demolition" },
        { "@type": "Thing", name: "House Flipper Remastered Favorites Tab" },
        { "@type": "Thing", name: "House Flipper Remastered Steam Workshop" },
        { "@type": "Thing", name: "House Flipper Remastered DLC achievements" },
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
          name: "Are the 20 main missions enough before starting DLC regions?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes for most new players. The 20 North Levyville main missions teach the core loop: cleaning, trash removal, mounting, painting, windows, task lists, and early tool use. You do not need to finish every possible side activity before entering DLC regions, but you should feel comfortable with the basic tools first.",
          },
        },
        {
          "@type": "Question",
          name: "How many additional DLC missions are included?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The major DLC regions add 93 additional missions. Handle them by region instead of trying to clear every area at once.",
          },
        },
        {
          "@type": "Question",
          name: "What region should I start with?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with North Levyville. It teaches the main job loop, tools, task lists, and basic renovation before the DLC map gets too crowded.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best DLC order?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A safe order is North Levyville, Cozy Village, South Levyville, Maple Bloom Village, Flipperberg, Sunset Bay, Moonrise Bay, Winter Hills, then Heart Valley.",
          },
        },
        {
          "@type": "Question",
          name: "What does Heart Valley include?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Heart Valley includes 6 new story-driven Lovely Jobs and is the clearest new Remastered content area. New players should save it for later.",
          },
        },
        {
          "@type": "Question",
          name: "What does Maple Bloom Village include?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Maple Bloom Village is the farm route. Expect animals, barns, fields, countryside jobs, house-extension mechanics, and farm achievements.",
          },
        },
        {
          "@type": "Question",
          name: "What does Flipperberg include?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Flipperberg is the restaurant route. Expect dining layouts, restaurant furniture, table setup, food-service objectives, and Dine Out achievement progress.",
          },
        },
        {
          "@type": "Question",
          name: "Is Moonrise Bay farm content?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Treat Moonrise Bay as luxury and high-end home content. Use Maple Bloom Village for farm content.",
          },
        },
        {
          "@type": "Question",
          name: "What region is for beach houses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sunset Bay is the beach and coastal-home region.",
          },
        },
        {
          "@type": "Question",
          name: "Should returning players start from North Levyville?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Returning players can move faster. If you already know the original and its DLC systems, use North Levyville as a refresher or jump toward the region you care about most.",
          },
        },
        {
          "@type": "Question",
          name: "Does Remastered support Steam Workshop content?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Remastered supports the original House Flipper ecosystem, including Workshop-style custom furniture and decoration support. If you already subscribed to Workshop items, check them in-game before building a full renovation around them, because item behavior and availability should be tested inside Remastered.",
          },
        },
        {
          "@type": "Question",
          name: "Do original House Flipper owners get a discount?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Veteran players should check Steam directly before buying. Owner-based loyalty discounts can reduce the final price depending on which original House Flipper content and DLC packs you already own.",
          },
        },
        {
          "@type": "Question",
          name: "What new Remastered tools matter for DLC?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Area Cleanup, Area Demolition, Favorites, Tool Selection Wheel, and House Import / Export are the main quality-of-life features to learn before tackling bigger DLC properties.",
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
          title="Which DLC Region Should You Do First?"
          description="Use this House Flipper Remastered Collection DLC route to plan North Levyville, Cozy Village, South Levyville, Maple Bloom Village, Flipperberg, Sunset Bay, Moonrise Bay, Winter Hills, and Heart Valley without getting overwhelmed."
          gameTitle="House Flipper Remastered Collection"
          gameHref="/house-flipper-remastered-collection"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DlcContentGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
