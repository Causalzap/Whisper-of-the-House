import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningHubContent from "@/data/dragonsword-awakening/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dragonsword-awakening`;

const metadataTitle =
  "DragonSword Awakening Guides: Walkthrough, Builds & Ending";
const metadataDescription =
  "Find the DragonSword Awakening guide you need: complete Chapters 1–8, build stronger teams, fix gear and Karma, beat Ursula, and understand the ending.";
  
const imageUrls = [
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-fates-invitation.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-northern-fog-blocked-road-cliff.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ranged-team-cerese-othello-dana.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-reforge-50000-gold-cost.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ursula-transformation.webp`,
];

const toc = [
  {
    id: "quick-guide-finder",
    label: "Choose by your problem",
  },
  {
    id: "all-guides",
    label: "All guides",
  },
  {
    id: "recommended-paths",
    label: "Recommended paths",
  },
  {
    id: "coverage",
    label: "Build & spoiler coverage",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks: { href: string; label: string }[] = [];

const faqEntities = [
  {
    question: "Which DragonSword Awakening guide should I read first?",
    answer:
      "Read the Beginner Guide when your first team and resource plan are still undecided. Open the Walkthrough first when a specific marker, cave, road, altar, or puzzle is blocking story progress.",
  },
  {
    question: "Does the walkthrough cover all eight chapters?",
    answer:
      "Yes. It follows the complete Chapter 1–8 main route and includes the major physical, objective, puzzle, and scripted-story blockers.",
  },
  {
    question: "Which guide contains the most story spoilers?",
    answer:
      "The Ursula Final Boss and Ending guide contains full Chapter 8 and ending spoilers. The Walkthrough also names late-story objectives but lets you stop at your current chapter.",
  },
  {
    question: "Are these guides based on the English PC build?",
    answer:
      "Yes. The current cluster uses the English PC launch interface and the complete Chapter 1–8 route shown in the supporting material. Major updates may change balance values or recommendations.",
  },
  {
    question:
      "Where should I start when both damage and story progression are failing?",
    answer:
      "Open the Walkthrough first to confirm that the route or combat state is correct. If the objective is valid but the fight remains too difficult, move to Team Comps and then Gear and Karma.",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "DragonSword Awakening Guides: Walkthrough, Teams, Gear and Ending",
    description:
    "Complete DragonSword Awakening with focused guides for Chapters 1–8, stronger teams, gear and Karma upgrades, Lv.70 Ursula, and the full ending route.",
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "DragonSword Awakening Guides",
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
        "DragonSword Awakening Guides: Walkthrough, Team Builds, Gear and Ending",
      description : "Choose your current problem and jump straight to the right guide for the Chapter 1–8 story, first-team decisions, stronger builds, gear and Karma upgrades, or Lv.70 Ursula.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-23",
      dateModified: "2026-07-23",
      about: [
        {
          "@type": "VideoGame",
          name: "DragonSword: Awakening",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening guides",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening beginner guide",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening walkthrough",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening team builds",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening gear and Karma",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Ursula and ending",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="DragonSword Awakening Guides"
          description="Choose the guide that matches your current problem: first-team and resource decisions, a blocked Chapter 1–8 route, team or Signal issues, gear and Karma investment, or the Ursula ending."
          gameTitle="DragonSword Awakening Guides"
          gameHref="/dragonsword-awakening"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonSwordAwakeningHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}