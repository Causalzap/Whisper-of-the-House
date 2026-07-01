import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SupermarketChaosAchievementsGuideContent from "@/data/supermarket-chaos/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/supermarket-chaos/achievements-guide/`;

const imageUrls = [
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-4668-products-528-shelves.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-music-computer-achievement.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-lucky-777-progress.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-extra-carry-skills.webp`,
  `${siteUrl}/images/supermarket-chaos/supermarket-chaos-too-heavy-10-items.webp`,
];

const toc = [
  {
    id: "supermarket-chaos-achievements-guide",
    label: "Achievements",
  },
  {
    id: "achievement-route-tool",
    label: "Checklist tool",
  },
  {
    id: "best-100-percent-route",
    label: "100% route",
  },
  {
    id: "how-long-100-percent-takes",
    label: "Time estimate",
  },
  {
    id: "quick-action-achievements",
    label: "Quick actions",
  },
  {
    id: "too-heavy-achievement",
    label: "Too Heavy",
  },
  {
    id: "known-achievement-issues",
    label: "No-popup checks",
  },
  {
    id: "stocked-milestones",
    label: "Milestones",
  },
  {
    id: "one-more-complete",
    label: "One More & Complete",
  },
  {
    id: "confusing-items-that-block-100-percent",
    label: "Confusing items",
  },
  {
    id: "common-achievement-mistakes",
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
    href: "/supermarket-chaos/best-upgrades-skills/",
    label: "Best Upgrades and Skills Guide",
  },
  {
    href: "/supermarket-chaos/section-map-item-locations/",
    label: "Section Map and Tricky Item Locations",
  },
];

export const metadata: Metadata = {
  title: "Supermarket Chaos Achievements Guide & 100% Route",
  description:
    "Unlock all 12 Supermarket Chaos achievements with the 100% route, Too Heavy, Lucky 777, One More, Complete, no-popup fixes and 4,668-product cleanup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Supermarket Chaos Achievements Guide and 100% Route",
    description:
      "Follow the full Supermarket Chaos achievement route with a checklist tool, July 2026 completion-rate snapshot, Too Heavy setup, Lucky 777, One More, Complete, no-popup checks, and confusing item cleanup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Supermarket Chaos objective showing 4,668 products to place on the correct shelves.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Chaos Achievements Guide & 100% Route",
    description:
      "Get all 12 achievements with Too Heavy, Lucky 777, One More, Complete, no-popup checks and the 4,668-product cleanup route.",
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
        "Supermarket Chaos Achievements Guide: 12 Achievements, 100% Route, Too Heavy, Lucky 777, One More, Complete, No-Popup Checks, and 4,668-Product Cleanup",
      description:
        "A practical Supermarket Chaos achievements guide for unlocking all 12 achievements, including First Stocked, 100 Stocked, Do Not Throw, Music Duty, Lucky 777, Too Heavy, 1,000 Stocked, 2,000 Stocked, 3,000 Stocked, 4,000 Stocked, One More, and Complete. The guide explains the July 1, 2026 Steam completion-rate snapshot, the 4,668-product route, the 528-shelf cleanup structure, estimated 100% time, Extra Carry setup for Too Heavy, Lucky 777 at 777 stocked products, One More at 4,667, Complete at 4,668, achievement no-popup checks, and confusing product families that can slow a full clear.",
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
          name: "Supermarket Chaos achievements",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos 100% route",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos Complete achievement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos One More achievement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos Too Heavy achievement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos Lucky 777 achievement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos Do Not Throw achievement",
        },
        {
          "@type": "Thing",
          name: "Supermarket Chaos Music Duty achievement",
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
          name: "Extra Carry",
        },
        {
          "@type": "Thing",
          name: "Matchfinder",
        },
        {
          "@type": "Thing",
          name: "Shelf Finder",
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
          name: "How many achievements are in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Supermarket Chaos has 12 achievements in the launch achievement list.",
          },
        },
        {
          "@type": "Question",
          name: "What are the rarest Supermarket Chaos achievements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As of the July 1, 2026 Steam snapshot, the rarest achievements were Complete at 8.5% and One More! at 8.6%. These rates can change as more players finish the game.",
          },
        },
        {
          "@type": "Question",
          name: "How long does 100% take in Supermarket Chaos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plan for several hours rather than a quick run. The Lucky 777 checkpoint is only about 16.6% of the full 4,668-product route, so a first clear is better treated as a long-session or multi-session cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if an achievement does not pop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check the Steam achievement list first. If the achievement is still locked, repeat the condition once, make sure Steam is online, and restart the game before doing anything risky with the save.",
          },
        },
        {
          "@type": "Question",
          name: "What upgrade helps with Too Heavy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Extra Carry helps with Too Heavy because the achievement requires holding 10 or more products at once.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Lucky 777?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lucky 777 unlocks after correctly placing 777 products on shelves. It is a progress milestone, not a separate puzzle.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock One More?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One More! unlocks after correctly placing 4,667 products on shelves, one product before the full 4,668-product clear.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete unlocks after correctly placing all 4,668 products on shelves. Use section rules, shelf feedback, Matchfinder, and Shelf Finder for the final cleanup instead of guessing random shelves.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an all-items list for Complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A full all-items database is overkill for the achievement route. Use section rules, keep the store readable, and rely on finder skills for the final cleanup.",
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
          title="Get Every Supermarket Chaos Achievement"
          description="Use the 100% checklist for all 12 achievements, including Too Heavy, Lucky 777, One More, Complete, no-popup checks, and the full 4,668-product cleanup."
          gameTitle="Supermarket Chaos"
          gameHref="/supermarket-chaos/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 1, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SupermarketChaosAchievementsGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}