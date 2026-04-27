import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MissablesGuideContent from "@/data/mouse-pi-for-hire/missables-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mouse-pi-for-hire/missables-guide`;

export const metadata: Metadata = {
  title: "MOUSE: P.I. For Hire Missables Guide",
  description:
    "Learn the real missable risks in MOUSE: P.I. For Hire, including the Jack Squat point of no return, best manual save points, what can be bought back later, and which trophies still need extra caution.",
  alternates: {
    canonical: pageUrl,
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
          name: "MOUSE: P.I. For Hire",
          item: `${siteUrl}/mouse-p-i-for-hire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Missables Guide",
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
      headline: "MOUSE: P.I. For Hire Missables Guide",
      description:
        "This guide explains the real missable risks in MOUSE: P.I. For Hire, including the Jack Squat point of no return, the best save ladder for 100% completion, what can be bought back later, and which trophies still need extra caution.",
      inLanguage: "en",
      dateModified: "2026-04-17",
      about: [
        {
          "@type": "VideoGame",
          name: "MOUSE: P.I. For Hire",
        },
        {
          "@type": "Thing",
          name: "Missables",
        },
        {
          "@type": "Thing",
          name: "Jack Squat",
        },
        {
          "@type": "Thing",
          name: "Side Jobs",
        },
        {
          "@type": "Thing",
          name: "Collectibles",
        },
        {
          "@type": "Thing",
          name: "Trophies",
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
          title="MOUSE: P.I. For Hire Missables Guide"
          description="Need the safest 100% route in MOUSE: P.I. For Hire? This guide explains the real point of no return, which missables are actually dangerous, what can be bought back later, and where to place your most important manual saves."
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-p-i-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
            {
              id: "danger-first-what-is-actually-worth-panicking-about",
              label: "Danger first: what is actually worth panicking about",
            },
            {
              id: "route-planning-facts-you-should-know-before-you-commit",
              label: "Route-planning facts before you commit",
            },
            {
              id: "can-you-replay-missions-in-mouse-pi-for-hire",
              label: "Can you replay missions?",
            },
            {
              id: "the-main-point-of-no-return",
              label: "The main point of no return",
            },
            {
              id: "best-manual-saves-for-100-percent-completion",
              label: "Best manual saves for 100% completion",
            },
            {
              id: "what-about-key-clues-and-optional-clues",
              label: "What about Key Clues and optional clues",
            },
            {
              id: "bugged-or-still-risky-trophies-you-should-know-about",
              label: "Bugged or still-risky trophies",
            },
            {
              id: "difficulty-ng-plus-and-playthrough-count",
              label: "Difficulty, New Game+, and playthrough count",
            },
            {
              id: "best-practical-missables-order",
              label: "Best practical missables order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/mouse-pi-for-hire/collectibles-hub",
              label: "Collectibles Hub",
            },
            {
              href: "/mouse-pi-for-hire/buy-back-guide",
              label: "Buy-Back Guide",
            },
            {
              href: "/mouse-pi-for-hire/missable-side-job-rewards",
              label: "Missable Side Job Rewards",
            },
            {
              href: "/mouse-pi-for-hire",
              label: "MOUSE: P.I. For Hire Guide Hub",
            },
          ]}
        >
          <MissablesGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}