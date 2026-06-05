import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsGuideContent from "@/data/house-flipper-remastered-collection/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/house-flipper-remastered-collection/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-achievements-list.png`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-first-job-radiator.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-uv-light.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-paint-electrical-outlet.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-oceanside-villa-dolan-trusk-sale.webp`,
  `${siteUrl}/images/house-flipper-remastered-collection/house-flipper-remastered-collection-map-regions.webp`,
];

const toc = [
  { id: "achievements-guide", label: "Achievements guide" },
  { id: "all-56-achievements", label: "All 56 achievements" },
  { id: "secret-and-tricky-achievements", label: "Secret achievements" },
  { id: "first-jobs-achievements", label: "Early job achievements" },
  { id: "cleaning-painting-layout", label: "Cleaning and painting" },
  { id: "buyer-achievements", label: "Buyer achievements" },
  { id: "money-selling-negotiator", label: "Money and Negotiator" },
  { id: "dlc-achievement-groups", label: "DLC groups" },
  { id: "achievement-not-unlocking", label: "Not unlocking fixes" },
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
    href: "/house-flipper-remastered-collection/dlc-content-guide",
    label: "House Flipper Remastered DLC Content Guide",
  },
];

export const metadata: Metadata = {
  title: "House Flipper Remastered Achievements Guide: All 56",
  description:
    "Unlock all 56 House Flipper Remastered achievements with quick steps for jobs, buyers, Negotiator, DLC groups, and not-unlocking fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "House Flipper Remastered Collection Achievements Guide: All 56 Steam Achievements",
    description:
      "Plan every House Flipper Remastered Collection achievement with a 56-achievement checklist, buyer unlocks, secret actions, Negotiator advice, DLC groups, and not-unlocking fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "House Flipper Remastered Collection Steam achievement list with 56 achievements.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Flipper Remastered Achievements Guide",
    description:
      "Use this 56-achievement checklist for House Flipper Remastered jobs, buyers, Negotiator, DLC groups, and not-unlocking fixes.",
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
          name: "Achievements Guide",
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
        "House Flipper Remastered Collection Achievements Guide: All 56 Steam Achievements, Buyer Sales, Negotiator, DLC Groups and Not Unlocking Fixes",
      description:
        "A player-focused House Flipper Remastered Collection achievements guide built around the current 56 Steam achievements. The guide explains how to approach early job achievements, secret actions such as Strongman, Car mechanic, Knock knock and The floor is your canvas, buyer achievements such as Geek, Worth every penny, Wall Street Shark, Family man, Artistic soul, Mr. Mystery, Alpha Male and prepper buyers, money and sale achievements such as Millionaire, Junior estate agent, Real estate agent and Negotiator, and DLC achievement groups for Garden, Pets, Farm, Dine Out, Luxury, Winter and coastal content. It also includes achievement-not-unlocking troubleshooting for job completion, buyer sales, negotiation triggers, DLC routes and progress achievements.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-05",
      dateModified: "2026-06-05",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "House Flipper Remastered Collection" },
        { "@type": "Thing", name: "House Flipper Remastered achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Collection achievements guide" },
        { "@type": "Thing", name: "House Flipper Remastered all 56 achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Steam achievements" },
        { "@type": "Thing", name: "House Flipper Remastered secret achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Negotiator achievement" },
        { "@type": "Thing", name: "House Flipper Remastered Millionaire achievement" },
        { "@type": "Thing", name: "House Flipper Remastered buyer achievements" },
        { "@type": "Thing", name: "House Flipper Remastered achievement not unlocking" },
        { "@type": "Thing", name: "House Flipper Remastered DLC achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Garden achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Pets achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Farm achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Dine Out achievements" },
        { "@type": "Thing", name: "House Flipper Remastered Winter Flipper" },
        { "@type": "Thing", name: "House Flipper Remastered Luxury is always in style" },
        { "@type": "Thing", name: "House Flipper Remastered Worth every penny" },
        { "@type": "Thing", name: "House Flipper Remastered Wall Street Shark" },
        { "@type": "Thing", name: "House Flipper Remastered Perfectionist" },
        { "@type": "Thing", name: "House Flipper Remastered Real estate agent" },
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
          name: "How many achievements are in House Flipper Remastered Collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "House Flipper Remastered Collection currently has 56 Steam achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Is this the same as the original House Flipper achievement list?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The original House Flipper had a larger achievement list across its base game and DLC packs. House Flipper Remastered Collection uses its own separate Steam achievement list, so use the Remastered list when planning 100%.",
          },
        },
        {
          "@type": "Question",
          name: "What achievement should I get first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "First money is the natural first achievement. Complete your first paid job.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best 100% route?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Finish the first jobs, clear secret actions, target buyer achievements, sell houses for money achievements, then clear DLC groups one at a time.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Negotiator?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use a valuable property with a strong buyer offer, then negotiate after the house already fits that buyer.",
          },
        },
        {
          "@type": "Question",
          name: "Why did Negotiator not unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The negotiation gain was probably too small. Use a bigger sale with more room for a large negotiation increase.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock buyer achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Make the target buyer win the auction. Their name must be the final winning buyer, not just one of the interested buyers.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Free Play for achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Free Play for testing, cleanup, repeating properties, or specific sale setups. Use Classic Mode first if you want natural progression.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Perfectionist?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Complete every job all the way to 100%. Replay any job that was left unfinished.",
          },
        },
        {
          "@type": "Question",
          name: "Why did an achievement not unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may have used the wrong tool, stopped before 100%, sold to the wrong buyer, or not finished the full DLC objective chain. Repeat the action with the exact condition the achievement expects.",
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
          title="How Do You Unlock All 56 Remastered Achievements?"
          description="Use this checklist for House Flipper Remastered Collection achievements: early jobs, secret actions, buyer sales, Negotiator, Millionaire, DLC groups, and fixes when an achievement does not unlock."
          gameTitle="House Flipper Remastered Collection"
          gameHref="/house-flipper-remastered-collection"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
