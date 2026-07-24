import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TearsOfMetalGuideContent from "@/data/tears-of-metal/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tears-of-metal`;

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-act-one-route-great-gates.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-wallace-ravager-delayed-heat.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-barracks-upgrades.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-co-op-route-vote-flag.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-gilles-overhead-slam-telegraph.webp`,
];

const toc = [
  {
    id: "start-here",
    label: "Start here",
  },
  {
    id: "diagnose-the-failure",
    label: "Diagnose the failure",
  },
  {
    id: "core-rules",
    label: "Four core rules",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tears-of-metal/beginner-guide",
    label: "Beginner Guide & Act 1 Route",
  },
  {
    href: "/tears-of-metal/best-builds",
    label: "Wallace & Brienne Builds",
  },
  {
    href: "/tears-of-metal/village-upgrades",
    label: "Village Upgrades & Progression",
  },
  {
    href: "/tears-of-metal/co-op-guide",
    label: "Co-op Host, Loot & Revives",
  },
  {
    href: "/tears-of-metal/boss-guide",
    label: "Gilles & Iseult Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Tears of Metal Guide: Routes, Builds, Co-op & Bosses",
  description:
    "Find Tears of Metal guides for the first Campaign, Wallace and Brienne builds, Village upgrades, co-op rules, and Gilles and Iseult bosses.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Tears of Metal Guide Hub: Routes, Builds, Co-op and Bosses",
    description:
      "Diagnose why a Campaign failed, then open the right guide for Act 1 routes, builds, Village progression, co-op resources, or boss fights.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1536,
        height: 864,
        alt: "Tears of Metal Act 1 Campaign route leading toward the Great Gates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tears of Metal Guide Hub",
    description:
      "Start with the guide matching your problem: route, build, Village progression, co-op economy, or boss execution.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Where should a new Tears of Metal player start?",
    answer:
      "Start with the Beginner Guide. It covers the Act 1 route, Threat, healing, target priority, Wallace's first usable build, and preparation for Gilles.",
  },
  {
    question: "Does health refill after every battle in Tears of Metal?",
    answer:
      "No. Search the battlefield for Chicken and unused recovery, then decide whether the next Healing Font is worth the Coins.",
  },
  {
    question: "What carries over after a failed Tears of Metal Campaign?",
    answer:
      "Permanent hero and Barracks upgrades, Village investments, Ally Monikers, and permanent currencies remain. Coins and the current Emblem build do not carry over.",
  },
  {
    question: "Is Tears of Metal co-op?",
    answer:
      "Yes. Tears of Metal supports solo play and co-op for up to four players. The detailed Host, loot, Coin, healing, and revive rules in this guide cluster come from a tested two-player Campaign.",
  },
  {
    question: "What should I do after my first failed Campaign?",
    answer:
      "Identify whether the run failed because of health, Block Stamina, army output, route Threat, missing healing, an incomplete build, or boss execution. Then open the matching Beginner, Village, Build, Co-op, or Boss guide.",
  },
  {
    question:
      "Should I always buy another permanent upgrade after dying?",
    answer:
      "No. When the build already works and the Campaign ends because of route greed, maximum Threat, or unused healing Coins, the next improvement is a decision change rather than another stat.",
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
          name: "Tears of Metal Guide",
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
        "Tears of Metal Guide Hub: Campaign Routes, Builds, Village Upgrades, Co-op and Bosses",
      description:
        "This Tears of Metal guide hub directs players to the correct detailed guide based on where a Campaign failed. It includes a tested Act 1 beginner route to the Great Gates, Threat and healing decisions, Wallace and Brienne Emblem builds, permanent Village upgrade priorities, Barracks and currency progression, two-player co-op Host and resource rules, and boss strategies for Gilles, The Hog and Iseult, The Banshee. The hub also provides a cross-guide diagnostic table for route failures, incomplete builds, unclear permanent purchases, co-op revive economy, and inconsistent boss attempts.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-24",
      dateModified: "2026-07-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Tears of Metal",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Tears of Metal guide",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal guides",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal beginner guide",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Act 1 route",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal builds",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Village upgrades",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal co-op",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal boss guide",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Threat Level",
        },
        {
          "@type": "Thing",
          name: "Wallace",
        },
        {
          "@type": "Thing",
          name: "Brienne",
        },
        {
          "@type": "Thing",
          name: "Gilles, The Hog",
        },
        {
          "@type": "Thing",
          name: "Iseult, The Banshee",
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
          title="Tears of Metal Guide Hub"
          description="Diagnose where your Campaign failed, then open the right guide for the Act 1 route, Wallace or Brienne builds, Village progression, co-op resources, or Gilles and Iseult."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TearsOfMetalGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}