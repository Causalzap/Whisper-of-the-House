import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkAchievementsContent from "@/data/big-walk/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/achievements`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-backpack-unlock.png`,
  `${siteUrl}/images/big-walk/big-walk-hip-belt-map.png`,
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/tutorial-walkthrough",
    label: "Tutorial and Drawbridge Walkthrough",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Chairlift Guide",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/black-tower",
    label: "Black Tower and Black Key Guide",
  },
  {
    href: "/big-walk/how-to-get-shiny",
    label: "How to Get Shiny and Big Makeover",
  },
  {
    href: "/big-walk/purple-puzzles",
    label: "All 7 Big Walk Purple Puzzles",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and Big Game Guide",
  },
];

const faqEntities = [
  {
    question: "How many achievements are in Big Walk?",
    answer: "Big Walk has 12 achievements.",
  },
  {
    question:
      "Should I follow achievement rarity when deciding what to do next?",
    answer:
      "No. Progression order is more useful. Optional equipment and hidden interactions can be rarer than later main-route achievements.",
  },
  {
    question: "Are Big Goodbye and Big Game the same completion state?",
    answer:
      "No. Big Goodbye is the normal campaign ending, while Big Game is the later full-completion achievement.",
  },
  {
    question: "Does Big Game require Big Makeover?",
    answer:
      "Big Makeover is treated as a separate Shiny achievement. The confirmed Big Game route is based on full puzzle completion, the final-key check, and the hidden ending route.",
  },
  {
    question: "Can I still work on achievements after Big Goodbye?",
    answer:
      "Yes. Continue on the same save to complete Purple Puzzles, unfinished normal challenges, Big Game cleanup, and optional achievements skipped earlier.",
  },
  {
    question: "Is Big View triggered by picking up the portable map?",
    answer:
      "No. Big View unlocks by entering the physical Map Room. The portable map can instead be used for Big Help by attaching it to an equipped hip belt.",
  },
];

export const metadata: Metadata = {
  title: "Big Walk Achievements Guide: All 12 Unlock Requirements",
  description:
    "Track all 12 Big Walk achievements, exact unlock triggers, progression order, and fixes for Backpack, Map Room, transport, endings, and Shiny.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Achievements: All 12 Unlock Requirements",
    description:
      "Find the exact trigger for all 12 Big Walk achievements, when to attempt each one, and what to check when an unlock does not appear.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 762,
        height: 722,
        alt: "Big Walk player wearing a hip belt with the portable map attached",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Achievements: All 12 Unlock Requirements",
    description:
      "Track all 12 achievements and troubleshoot Backpack, Map Room, Chairlift, Tunnel, Train, Wall, ending, and Shiny unlocks.",
    images: [imageUrls[1]],
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements",
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
        "Big Walk Achievements Guide: All 12 Unlock Requirements and Trigger Fixes",
      description:
        "A Big Walk achievement guide covering all 12 unlock triggers, progression order, Backpack and hip-item equipment checks, Map Room, Chairlift, highest point, Tunnel, Train, Wall, Big Goodbye, Big Game, and Big Makeover.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk achievements",
        },
        {
          "@type": "Thing",
          name: "Big Walk achievement list",
        },
        {
          "@type": "Thing",
          name: "Big Pack achievement",
        },
        {
          "@type": "Thing",
          name: "Big View achievement",
        },
        {
          "@type": "Thing",
          name: "Big Help achievement",
        },
        {
          "@type": "Thing",
          name: "Big Sit achievement",
        },
        {
          "@type": "Thing",
          name: "Big Climb achievement",
        },
        {
          "@type": "Thing",
          name: "Big Tunnel achievement",
        },
        {
          "@type": "Thing",
          name: "Big Ride achievement",
        },
        {
          "@type": "Thing",
          name: "Big Wall achievement",
        },
        {
          "@type": "Thing",
          name: "Big Goodbye achievement",
        },
        {
          "@type": "Thing",
          name: "Big Game achievement",
        },
        {
          "@type": "Thing",
          name: "Big Makeover achievement",
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

const toc = [
  {
    id: "achievement-list",
    label: "All 12 achievements",
  },
  {
    id: "big-walk",
    label: "Big Walk",
  },
  {
    id: "big-pack",
    label: "Big Pack",
  },
  {
    id: "big-view",
    label: "Big View",
  },
  {
    id: "big-help",
    label: "Big Help",
  },
  {
    id: "transport-achievements",
    label: "Sit, Climb, Tunnel, and Ride",
  },
  {
    id: "big-wall",
    label: "Big Wall",
  },
  {
    id: "big-goodbye",
    label: "Big Goodbye",
  },
  {
    id: "big-game",
    label: "Big Game",
  },
  {
    id: "big-makeover",
    label: "Big Makeover",
  },
  {
    id: "achievement-route-decisions",
    label: "When to chase achievements",
  },
  {
    id: "stuck",
    label: "Achievement fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

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
          title="Big Walk Achievements Guide"
          description="Track all 12 achievements by their exact trigger, complete them in a practical progression order, and fix common unlock problems."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}