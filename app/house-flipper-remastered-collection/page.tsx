import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HouseFlipperRemasteredHubContent from "@/data/house-flipper-remastered-collection/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/house-flipper-remastered-collection`;

const imageUrls = [
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-classic-free-play.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-first-office.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-original-vs-remaster-lighting.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-first-job-radiator.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-uv-light.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-regions.webp`,
];

const toc = [
  { id: "jump-to-your-problem", label: "Jump to your problem" },
  { id: "house-flipper-remastered-collection-guide", label: "Guide hub" },
  { id: "classic-vs-free-play", label: "Classic vs Free Play" },
  { id: "whats-new", label: "What changed" },
  { id: "what-to-do-first", label: "What to do first" },
  { id: "first-jobs", label: "First jobs" },
  { id: "dlc-regions", label: "DLC regions" },
  { id: "money-selling", label: "Money and selling" },
  { id: "achievements", label: "Achievements" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
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
    href: "/house-flipper-remastered-collection/dlc-content-guide",
    label: "House Flipper Remastered DLC Content Guide",
  },
  {
    href: "/house-flipper-remastered-collection/achievements-guide",
    label: "House Flipper Remastered Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "House Flipper Remastered Collection Guide Hub",
  description:
    "Start here for House Flipper Remastered Collection guides: Classic vs Free Play, first jobs, money, buyers, DLC regions, Heart Valley, and all 56 achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "House Flipper Remastered Collection Guide Hub: Jobs, Money, DLC and Achievements",
    description:
      "Use this House Flipper Remastered Collection guide hub to choose Classic or Free Play, finish first jobs, make money, plan DLC regions, avoid Heart Valley too early, and unlock all 56 achievements.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "House Flipper Remastered Collection Classic Mode and Free Play Mode selection screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Flipper Remastered Collection Guide Hub",
    description:
      "Classic Mode, Free Play, first jobs, money, buyers, DLC regions, Heart Valley, and all 56 achievements.",
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
        "House Flipper Remastered Collection Guide Hub: Classic Mode, Free Play, First Jobs, Money, DLC Regions and Achievements",
      description:
        "A player-focused House Flipper Remastered Collection guide hub that helps new and returning players choose Classic Mode or Free Play, follow the first job route, unlock early tools, understand Remastered changes, plan DLC regions, make money from house sales, read buyer feedback, avoid Heart Valley too early, and work toward all 56 Steam achievements. The hub links to dedicated guides for beginner tips, first jobs, money, DLC content, and achievements.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-05",
      dateModified: "2026-06-05",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "House Flipper Remastered Collection" },
        { "@type": "Thing", name: "House Flipper Remastered Collection guide" },
        { "@type": "Thing", name: "House Flipper Remastered beginner guide" },
        { "@type": "Thing", name: "House Flipper Remastered Classic Mode" },
        { "@type": "Thing", name: "House Flipper Remastered Free Play" },
        { "@type": "Thing", name: "House Flipper Remastered first jobs" },
        { "@type": "Thing", name: "House Flipper Remastered tool unlocks" },
        { "@type": "Thing", name: "House Flipper Remastered money guide" },
        { "@type": "Thing", name: "House Flipper Remastered buyers" },
        { "@type": "Thing", name: "House Flipper Remastered DLC regions" },
        { "@type": "Thing", name: "House Flipper Remastered Heart Valley" },
        { "@type": "Thing", name: "House Flipper Remastered achievements" },
        { "@type": "Thing", name: "House Flipper Remastered 56 achievements" },
        { "@type": "Thing", name: "House Flipper Remastered PS5" },
        { "@type": "Thing", name: "House Flipper Remastered Xbox Series X/S" },
        { "@type": "Thing", name: "House Flipper Remastered single-player" },
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
          name: "Is House Flipper Remastered Collection good for new players?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Start in Classic Mode if you want the normal learning route. The early jobs teach cleaning, mounting, painting, tool unlocks, room tasks, and basic house work before you need to worry about big sales.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose Classic Mode or Free Play Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose Classic Mode for progression. Choose Free Play Mode if you want to renovate freely, test a layout, rebuild a property, or repeat a sale setup without grinding jobs again.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clean your office, use the laptop, take the first available jobs, and unlock basic tools. Do not rush into buying houses until you can clean, paint, mount fixtures, and control furniture properly.",
          },
        },
        {
          "@type": "Question",
          name: "Does House Flipper 1 save data carry over?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Treat Remastered Collection as a fresh start. Use Classic Mode for normal progression or Free Play Mode if you want faster access to tools and content.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Remastered Collection include all original DLC?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It is built as an all-in-one Remastered collection with major DLC-style regions such as garden, pets, farm, restaurants, beach homes, luxury homes, winter content, and Heart Valley. Use the DLC Content Guide for the region route.",
          },
        },
        {
          "@type": "Question",
          name: "How many main missions and DLC missions are there?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "North Levyville contains the 20 main missions. The major DLC regions add 93 additional missions. Heart Valley appears as a 0/6 late route.",
          },
        },
        {
          "@type": "Question",
          name: "Which region should I start with?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with North Levyville. It teaches the main job loop, tools, task lists, and basic renovation before the region map gets too crowded.",
          },
        },
        {
          "@type": "Question",
          name: "When should I do Heart Valley?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save Heart Valley for later if you are new. It is framed as a late test and may expect tools or skills you unlock elsewhere.",
          },
        },
        {
          "@type": "Question",
          name: "Is House Flipper Remastered Collection different from House Flipper 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. House Flipper Remastered Collection is a refreshed version of the original House Flipper experience with DLC-style content, updated visuals, quality-of-life changes, and the original-style job, buyer, and renovation loop. House Flipper 2 is a separate sequel with its own systems.",
          },
        },
        {
          "@type": "Question",
          name: "Is there multiplayer or co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. House Flipper Remastered Collection is a single-player renovation game.",
          },
        },
        {
          "@type": "Question",
          name: "Does it support PS5 and Xbox?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. House Flipper Remastered Collection launched on June 4, 2026 for Steam, PlayStation 5, and Xbox Series X/S.",
          },
        },
        {
          "@type": "Question",
          name: "Does it support Chinese?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Steam language list includes Simplified Chinese and Traditional Chinese interface/subtitle support.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make money early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do jobs first. They pay you while unlocking tools. Once you can renovate properly, start learning house sales, buyer feedback, room labels, and negotiation through the Money Guide.",
          },
        },
        {
          "@type": "Question",
          name: "When should I start achievement hunting?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start after you understand early jobs, tools, and selling. Many achievements are easier when you naturally progress through jobs, DLC regions, money goals, and house sales.",
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
          title="Where Should You Start in House Flipper Remastered Collection?"
          description="Choose Classic or Free Play, follow the first jobs, learn money and buyer feedback, plan DLC regions, avoid Heart Valley too early, and use the right guide when you get stuck."
          gameTitle="House Flipper Remastered Collection"
          gameHref="/house-flipper-remastered-collection"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HouseFlipperRemasteredHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
