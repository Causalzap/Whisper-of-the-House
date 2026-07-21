import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZeroSpaceGuideHubContent from "@/data/zerospace/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zerospace`;

const imageUrls = [
  `${siteUrl}/images/zerospace/zerospace-tutorial-production-tab.webp`,
  `${siteUrl}/images/zerospace/zerospace-operation-moby-forward-base.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-final-swarm.webp`,
  `${siteUrl}/images/zerospace/zerospace-galactic-war-galaxy-map.webp`,
];

const toc = [
  {
    id: "common-player-problems",
    label: "Find the right guide",
  },
  {
    id: "guide-list",
    label: "ZeroSpace guides",
  },
  {
    id: "reading-order",
    label: "Recommended reading order",
  },
  {
    id: "problem-links",
    label: "Common problems",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/zerospace/beginner-guide/",
    label: "ZeroSpace Beginner Guide",
  },
  {
    href: "/zerospace/campaign-walkthrough-choices/",
    label: "ZeroSpace Act 1 Campaign Walkthrough",
  },
  {
    href: "/zerospace/mission-3-arcadia-walkthrough/",
    label: "ZeroSpace Mission 3 Arcadia Walkthrough",
  },
  {
    href: "/zerospace/galactic-war-beginner-guide/",
    label: "ZeroSpace Galactic War Guide",
  },
];

const guideItems = [
  {
    name: "ZeroSpace Beginner Guide",
    url: `${pageUrl}/beginner-guide`,
    description:
      "Learn Hexite, Flux, Supply, production queues, heroes, expansion timing, Strider transport, Mercenary deployment, and the first stable base route.",
  },
  {
    name: "ZeroSpace Act 1 Campaign Walkthrough",
    url: `${pageUrl}/campaign-walkthrough-choices`,
    description:
      "Follow Operation Moby, Trisaris, ship boarding, five Koru Hearts, Deru Laboratory, Machine Works, Trinity, Kris, and confirmed Act 1 choices.",
  },
  {
    name: "ZeroSpace Mission 3 Arcadia Walkthrough",
    url: `${pageUrl}/mission-3-arcadia-walkthrough`,
    description:
      "Stabilize the Arcadia forward base, start Flux income, kill Old Bessie, remove the southern Grell source, survive the final swarm, and make the evacuation choice.",
  },
  {
    name: "ZeroSpace Galactic War Guide",
    url: `${pageUrl}/galactic-war-beginner-guide`,
    description:
      "Understand alliances, Capture Points, Jump Fuel, occupation bonuses, System Mastery, Credits, Influence, Commander XP, Co-op, and AI missions.",
  },
];

export const metadata: Metadata = {
  title: "ZeroSpace Guide Hub: Beginner, Campaign & Galactic War",
  description:
    "Find ZeroSpace beginner help, Act 1 walkthroughs, Mission 3 Arcadia solutions, and Galactic War guides for Capture Points, Jump Fuel, and Mastery.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title:
      "ZeroSpace Guide Hub: Beginner Guide, Campaign, Arcadia and Galactic War",
    description:
      "Choose the ZeroSpace guide that matches your problem: blocked production, an Act 1 objective, the Arcadia defense, or confusing Galactic War mechanics.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "ZeroSpace Galactic War galaxy map showing allied territory, enemy systems, neutral locations, and contested fronts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroSpace Guide Hub: Beginner, Campaign & Galactic War",
    description:
      "Find the right ZeroSpace guide for economy problems, Act 1 missions, Arcadia, Capture Points, Jump Fuel, and System Mastery.",
    images: [imageUrls[3]],
  },
};

const faqEntities = [
  {
    question: "Which ZeroSpace guide should I read first?",
    answer:
      "Start with the Beginner Guide when Supply, Flux, production, hero control, or expansion is unclear. Move directly to the Campaign, Arcadia, or Galactic War guide when the problem belongs to one specific mission or mode.",
  },
  {
    question:
      "Is the ZeroSpace Campaign Walkthrough the same as the Mission 3 guide?",
    answer:
      "No. The Campaign Walkthrough covers the Act 1 mission order, major choices, and confirmed consequences. The Mission 3 guide covers the complete Arcadia defense, including Old Bessie, the southern Grell source, final swarm, and evacuation panel.",
  },
  {
    question:
      "Can ZeroSpace Galactic War be played without another player?",
    answer:
      "Yes. Select Play with AI from the Galactic War mission panel. It is useful for learning the objective order before choosing Play Co-op or increasing the difficulty.",
  },
  {
    question:
      "Does choosing a Galactic War alliance lock my ZeroSpace faction?",
    answer:
      "No. Alliance membership controls which strategic side receives the Capture Point contribution. The commander and combat faction selected inside missions remain separate choices.",
  },
  {
    question: "Are all ZeroSpace Campaign choice outcomes confirmed?",
    answer:
      "No. The guides identify visible consequences from the completed route and do not claim hidden relationship scores, alternate rewards, or ending changes that have not been verified.",
  },
  {
    question: "Is this a complete ZeroSpace Wiki?",
    answer:
      "No. This is a focused problem-solving guide cluster covering beginner systems, the Act 1 Campaign, Mission 3 Arcadia, and Galactic War. New pages are added only when they solve a distinct player problem without duplicating the existing guides.",
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
          name: "ZeroSpace Guide Hub",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name:
        "ZeroSpace Guide Hub: Beginner Guide, Campaign Walkthrough, Arcadia and Galactic War",
      headline:
        "ZeroSpace Guide Hub: Beginner Guide, Campaign Walkthrough, Mission 3 Arcadia and Galactic War",
      description:
        "This ZeroSpace guide hub directs players to focused help for the beginner RTS economy, Act 1 Campaign missions and choices, the Mission 3 Arcadia colony defense, and Galactic War mechanics. It covers blocked production, Hexite, Flux, Supply, Operation Moby, Trisaris, Old Bessie, the southern Grell source, the Arcadia final swarm, evacuation choices, alliances, Capture Points, Jump Fuel, occupation bonuses, System Mastery, Credits, Influence, Co-op, and AI missions. Each guide owns a distinct player problem instead of duplicating systems across a Wiki-style collection.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-21",
      dateModified: "2026-07-21",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
      about: {
        "@type": "VideoGame",
        name: "ZeroSpace",
        url: pageUrl,
      },
      hasPart: guideItems.map((guide) => ({
        "@type": "WebPage",
        name: guide.name,
        url: guide.url,
        description: guide.description,
      })),
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
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "ZeroSpace Guides",
      numberOfItems: guideItems.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: guideItems.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: guide.name,
          url: guide.url,
          description: guide.description,
        },
      })),
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
          title="ZeroSpace Guide Hub: Beginner, Campaign, Arcadia and Galactic War"
          description="Find the right ZeroSpace guide for blocked production, Act 1 missions and choices, the Mission 3 Arcadia defense, or Galactic War systems such as Capture Points, Jump Fuel, and Mastery."
          gameTitle="ZeroSpace"
          gameHref="/zerospace/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZeroSpaceGuideHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}