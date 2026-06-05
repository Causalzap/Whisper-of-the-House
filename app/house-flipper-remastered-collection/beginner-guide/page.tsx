import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/house-flipper-remastered-collection/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/house-flipper-remastered-collection/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-classic-free-play.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-first-office.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-first-job-radiator.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-uv-light.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-regions.webp`,
];

const toc = [
  { id: "beginner-guide", label: "Beginner guide" },
  { id: "classic-or-free-play", label: "Classic vs Free Play" },
  { id: "starting-office", label: "Starting office" },
  { id: "what-to-do-first", label: "What to do first" },
  { id: "best-early-perks", label: "Best early perks" },
  { id: "cleaning-garage-uv-light", label: "UV light" },
  { id: "dont-rush-buying-houses", label: "First house timing" },
  { id: "open-map-overwhelm", label: "Open map problem" },
  { id: "new-remastered-features", label: "Remastered features" },
  { id: "early-job-route", label: "Early job route" },
  { id: "beginner-mistakes", label: "Beginner mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/house-flipper-remastered-collection",
    label: "House Flipper Remastered Collection Guide Hub",
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
  {
    href: "/house-flipper-remastered-collection/dlc-content-guide",
    label: "House Flipper Remastered DLC Content Guide",
  },
];

export const metadata: Metadata = {
  title: "House Flipper Remastered Collection Beginner Guide",
  description:
    "Beginner guide for House Flipper Remastered Collection. Pick Classic or Free Play, finish first jobs, choose early perks, use UV light, and avoid bad starts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "House Flipper Remastered Collection Beginner Guide: Classic Mode, First Jobs and Early Tips",
    description:
      "Start House Flipper Remastered Collection with the right mode, first jobs, early perks, UV light, open map advice, Remastered features, and beginner mistakes to avoid.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "House Flipper Remastered Collection Classic Mode and Free Play selection screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Flipper Remastered Collection Beginner Guide",
    description:
      "Pick Classic or Free Play, follow the first jobs, choose early perks, use UV light, and avoid the open map trap.",
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
        "House Flipper Remastered Collection Beginner Guide: Classic Mode, Free Play, First Jobs, Early Perks, UV Light and Open Map Advice",
      description:
        "A player-focused House Flipper Remastered Collection beginner guide for new and returning players. The guide explains whether to start in Classic Mode or Free Play, how the starting office and laptop work, what to do first, how to complete the first radiator job, which early perks matter most, when to use the UV light, when to buy your first house, why the Remastered map can feel overwhelming after early jobs, which regions to avoid early, and which new Remastered features such as Tool Selection Wheel, Favorites Tab, Area Cleanup, Photo Mode, and House Naming or Export are worth knowing.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-05",
      dateModified: "2026-06-05",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "House Flipper Remastered Collection" },
        { "@type": "Thing", name: "House Flipper Remastered beginner guide" },
        { "@type": "Thing", name: "House Flipper Remastered Collection beginner guide" },
        { "@type": "Thing", name: "House Flipper Remastered Classic Mode" },
        { "@type": "Thing", name: "House Flipper Remastered Free Play" },
        { "@type": "Thing", name: "House Flipper Remastered first jobs" },
        { "@type": "Thing", name: "House Flipper Remastered early perks" },
        { "@type": "Thing", name: "House Flipper Remastered UV light" },
        { "@type": "Thing", name: "House Flipper Remastered open map" },
        { "@type": "Thing", name: "House Flipper Remastered North Levyville" },
        { "@type": "Thing", name: "House Flipper Remastered Heart Valley" },
        { "@type": "Thing", name: "House Flipper Remastered Tool Selection Wheel" },
        { "@type": "Thing", name: "House Flipper Remastered Area Cleanup" },
        { "@type": "Thing", name: "House Flipper Remastered Favorites Tab" },
        { "@type": "Thing", name: "House Flipper Remastered beginner mistakes" },
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
          name: "Should I start with Classic Mode or Free Play?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with Classic Mode if this is your first normal run. It teaches jobs, tools, skills, and progression. Use Free Play when you want to renovate freely, test layouts, or repeat a house setup.",
          },
        },
        {
          "@type": "Question",
          name: "What is different about Free Play?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Free Play gives you broad access to tools, skills, jobs, houses, and extra cash much earlier. It is better for testing and renovating than learning the normal progression curve.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clean the office enough to use the laptop, then take Ex-Boyfriend Stole the Radiator. That job teaches cleaning, trash removal, buying a radiator, and mounting fixtures.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy a house right away?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Do jobs first until cleaning, mounting, painting, and furniture control feel comfortable. Houses are easier to profit from once your tools are ready.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best first perks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Take cleaning upgrades first, then dirt visibility, mounting speed, and painting perks. Skip negotiation perks until you start selling houses regularly.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the map feel overwhelming?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Remastered Collection can show many DLC-style regions early. Start with North Levyville, then branch into Cozy Village or South Levyville. Save Heart Valley for much later.",
          },
        },
        {
          "@type": "Question",
          name: "What is Area Cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Area Cleanup is a Remastered quality-of-life feature that helps clean or organize a defined area faster when available. Use it, then still check the task list before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Favorites Tab for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Favorites Tab to save items you buy often, such as common fixtures, lights, chairs, bookcases, or decoration pieces.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Tool Selection Wheel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Tool Selection Wheel helps you switch tools faster once you have cleaning, selling, mounting, painting, and other tools unlocked.",
          },
        },
        {
          "@type": "Question",
          name: "Is Photo Mode useful?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but mostly for tracking finished rooms or before and after results. It is not required for early progression.",
          },
        },
        {
          "@type": "Question",
          name: "What guide should I read after this?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the First Jobs Walkthrough next if you are still in the early job chain. Read the Money Guide once you are ready to sell houses.",
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
          title="How Should You Start House Flipper Remastered Collection?"
          description="Start in Classic Mode, clean the office, take the first radiator job, pick useful early perks, avoid the open-map trap, and use Free Play later for testing or free renovation."
          gameTitle="House Flipper Remastered Collection"
          gameHref="/house-flipper-remastered-collection"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 5, 2026"
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
