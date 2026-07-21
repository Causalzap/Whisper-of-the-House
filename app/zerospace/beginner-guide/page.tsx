import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZeroSpaceBeginnerGuideContent from "@/data/zerospace/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/zerospace`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/zerospace/zerospace-tutorial-attack-move-control-tower.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-harvester-flux.webp`,
  `${siteUrl}/images/zerospace/zerospace-tutorial-supply-platform-warning.webp`,
  `${siteUrl}/images/zerospace/zerospace-barracks-commandos.webp`,
  `${siteUrl}/images/zerospace/zerospace-tutorial-production-tab.webp`,
  `${siteUrl}/images/zerospace/zerospace-tutorial-expansion-blue-hexagon.webp`,
  `${siteUrl}/images/zerospace/zerospace-strider-load-unload.webp`,
  `${siteUrl}/images/zerospace/zerospace-mercenary-charge-deployment.webp`,
];

const toc = [
  {
    id: "first-ten-minutes",
    label: "First 10 minutes",
  },
  {
    id: "tutorial-and-controls",
    label: "Tutorial & controls",
  },
  {
    id: "resources",
    label: "Resources",
  },
  {
    id: "first-base",
    label: "First base setup",
  },
  {
    id: "common-problems",
    label: "Problems & fixes",
  },
  {
    id: "hero-management",
    label: "Hero management",
  },
  {
    id: "production-management",
    label: "Production management",
  },
  {
    id: "expansion",
    label: "When to expand",
  },
  {
    id: "advanced-units",
    label: "Advanced units",
  },
  {
    id: "common-mistakes",
    label: "Beginner mistakes",
  },
  {
    id: "related-guides",
    label: "Related guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/zerospace/",
    label: "ZeroSpace Guide Hub",
  },
  {
    href: "/zerospace/campaign-walkthrough-choices/",
    label: "Campaign Walkthrough & Choices",
  },
  {
    href: "/zerospace/mission-3-arcadia-walkthrough/",
    label: "Mission 3 Arcadia Walkthrough",
  },
  {
    href: "/zerospace/galactic-war-beginner-guide/",
    label: "Galactic War Beginner Guide",
  },
];

export const metadata: Metadata = {
  title: "ZeroSpace Beginner Guide: Economy, Resources & Supply",
  description:
    "Learn ZeroSpace economy, Flux, Supply, production, heroes, expansion timing, and fixes for blocked unit queues and weak early armies.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "ZeroSpace Beginner Guide: Fix Economy and Production Problems",
    description:
      "Set up Hexite and Flux income, prevent Supply blocks, build a working first army, manage your hero, and expand without losing the original base.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 920,
        height: 616,
        alt: "ZeroSpace Tutorial advising the player to add another Supply Platform before reaching the unit cap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroSpace Beginner Guide: Economy, Resources & Supply",
    description:
      "Fix blocked production, start Flux income, manage Supply, use your hero safely, and learn when the first base is ready to expand.",
    images: [imageUrls[2]],
  },
};

const faqEntities = [
  {
    question: "How do I get Flux in ZeroSpace?",
    answer:
      "Create a Harvester from the Operating Tower. It automatically travels to the nearest discovered Flux node. The Tutorial allows one Harvester for each Flux node discovered on the map.",
  },
  {
    question: "Why is my unit queue blocked in ZeroSpace?",
    answer:
      "Check Supply first, followed by Flux, Hexite, the selected production category, and whether the production structure is still alive. Building another Barracks does not fix a resource or Supply block.",
  },
  {
    question: "How does Supply work in ZeroSpace?",
    answer:
      "Supply is the unit cap. Supply Platforms increase the number of units the army can support. Add another platform before reaching the current limit so queued units do not stop completing.",
  },
  {
    question: "When should I expand in ZeroSpace?",
    answer:
      "Expand after the original base has active production, working Flux income, enough Supply for the next army cycle, and a safe route to the blue expansion Hexagon.",
  },
  {
    question: "How do heroes respawn in ZeroSpace?",
    answer:
      "The Tutorial states that a dead hero returns to the base for free after a short delay. The practical penalty is losing map pressure, abilities, and protection for the army while the hero is unavailable.",
  },
  {
    question:
      "Why do I have Hexite but still cannot train a unit in ZeroSpace?",
    answer:
      "The unit may also require Flux, or the army may already be at its Supply cap. Check both conditions before adding another production structure.",
  },
  {
    question: "Do Mercenaries use a normal production queue in ZeroSpace?",
    answer:
      "No. Mercenaries deploy immediately after hiring, but each hire consumes a Mercenary charge. Those charges replenish gradually over time.",
  },
  {
    question: "Can infantry attack while loaded in a Strider?",
    answer:
      "I have not confirmed that every infantry type continues dealing full damage while loaded. I use the Strider as protected transport and unload the infantry before the main engagement.",
  },
];

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
          name: "ZeroSpace Guide",
          item: hubUrl,
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
        "ZeroSpace Beginner Guide: Economy, Supply, Flux and First Base Setup",
      description:
        "This ZeroSpace beginner guide explains the first ten-minute route I use to establish a working economy and army. It covers Hexite income, Flux Harvesters, discovered Flux nodes, Supply Platforms, blocked production queues, Barracks costs and build time, Attack Move, Control Towers, hero respawning, production management through Tab, safe expansion timing, blue expansion Hexagons, Strider infantry transport, Mercenary charges, recovery after early losses, and the most common first-hour problems and fixes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-21",
      dateModified: "2026-07-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ZeroSpace",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "ZeroSpace beginner guide",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace economy",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace resources",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Hexite",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Flux",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Harvester",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Supply",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace production queue blocked",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace first base setup",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace hero respawn",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace expansion",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Control Tower",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Strider",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Mercenary charges",
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
          title="ZeroSpace Beginner Guide: Economy, Supply and Your First Base"
          description="Learn the first 10-minute route I use to start Hexite and Flux income, avoid blocked unit queues, keep the hero alive, and expand without losing the original base."
          gameTitle="ZeroSpace"
          gameHref="/zerospace/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZeroSpaceBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}