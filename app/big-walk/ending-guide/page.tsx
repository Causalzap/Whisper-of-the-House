import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkEndingGuideContent from "@/data/big-walk/ending-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/ending-guide`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-final-sphere-mechanism.webp`,
  `${siteUrl}/images/big-walk/big-walk-ending-building-across-water.webp`,
  `${siteUrl}/images/big-walk/big-walk-wave-goodbye-ending-prompt.webp`,
  `${siteUrl}/images/big-walk/big-walk-big-goodbye-final-room.webp`,
  `${siteUrl}/images/big-walk/big-walk-broken-sphere-after-ending.webp`,
  `${siteUrl}/images/big-walk/big-walk-seven-purple-puzzles.webp`,
  `${siteUrl}/images/big-walk/big-walk-final-key-spawn-location.webp`,
  `${siteUrl}/images/big-walk/big-walk-true-ending-secret-room-stairs.webp`,
  `${siteUrl}/images/big-walk/big-walk-true-ending-short-reading.webp`,
  `${siteUrl}/images/big-walk/big-walk-true-ending-white-exit.webp`,
  `${siteUrl}/images/big-walk/big-walk-big-game-completion-message.webp`,
];

const socialImageUrl =
  `${siteUrl}/images/big-walk/big-walk-wave-goodbye-ending-prompt.webp`;

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/black-tower",
    label: "Black Tower and Black Key Guide",
  },
  {
    href: "/big-walk/purple-puzzles",
    label: "All 7 Big Walk Purple Puzzles",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
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
];

const faqEntities = [
  {
    question: "Do I need 100% completion for Big Goodbye?",
    answer:
      "No. Big Goodbye finishes the normal main route. Full puzzle completion is required for Big Game.",
  },
  {
    question: "Can I continue after Big Goodbye?",
    answer:
      "Yes. Continue the same save to complete the seven Purple Puzzles, unfinished normal challenges, final-key route, and Big Game ending.",
  },
  {
    question: "Is Big Game a different branching choice?",
    answer:
      "No. Big Game follows Big Goodbye on the same save. Reaching one ending does not permanently block the other.",
  },
  {
    question: "What is the building across the water called?",
    answer:
      "There is no clear proper name confirmed here, so this guide refers to it as the ending building or the building across the water.",
  },
  {
    question: "Can I keep playing after Big Game?",
    answer:
      "Yes. The final completion screen still provides a Continue option after full completion.",
  },
];

export const metadata: Metadata = {
  title: "Big Walk Endings Guide: Big Goodbye & Big Game",
  description:
    "Unlock Big Goodbye and Big Game, finish the Black Sphere, find the final key, enter the hidden room, and fix 100% completion problems.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Endings Guide: Big Goodbye & Big Game",
    description:
      "Finish the Black Sphere, use Wave Goodbye, continue post-game cleanup, find the final key, and reach Big Walk's full-completion ending.",
    siteName: "Whisper of the House",
    images: [
      {
        url: socialImageUrl,
        width: 1412,
        height: 1012,
        alt: "Wave Goodbye prompt outside the Big Walk ending building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Endings Guide: Big Goodbye & Big Game",
    description:
      "Reach Big Goodbye, complete post-game cleanup, find the final key, and unlock the Big Game ending.",
    images: [socialImageUrl],
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
          name: "Endings Guide",
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
        "Big Walk Endings Guide: How to Unlock Big Goodbye and Big Game",
      description:
        "A Big Walk endings guide covering the final Black Sphere, Wave Goodbye, Big Goodbye, post-game completion state, final key, hidden completion room, Big Game ending, and final-key troubleshooting.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk endings",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Goodbye",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Game",
        },
        {
          "@type": "Thing",
          name: "Big Walk true ending",
        },
        {
          "@type": "Thing",
          name: "Big Walk Black Sphere",
        },
        {
          "@type": "Thing",
          name: "Big Walk Wave Goodbye",
        },
        {
          "@type": "Thing",
          name: "Big Walk final key",
        },
        {
          "@type": "Thing",
          name: "Big Walk hidden completion room",
        },
        {
          "@type": "Thing",
          name: "Big Walk 100 percent completion",
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
    id: "how-to-get-the-big-goodbye-ending",
    label: "How to get Big Goodbye",
  },
  {
    id: "black-sphere-ending-route",
    label: "Complete the Black Sphere",
  },
  {
    id: "wave-goodbye-ending",
    label: "Wave Goodbye route",
  },
  {
    id: "what-happens-in-big-goodbye",
    label: "Big Goodbye ending",
  },
  {
    id: "what-changes-after-big-goodbye",
    label: "What changes post-game",
  },
  {
    id: "how-to-get-the-big-game-ending",
    label: "How to get Big Game",
  },
  {
    id: "final-key-location",
    label: "Final key location",
  },
  {
    id: "hidden-completion-room",
    label: "Hidden completion room",
  },
  {
    id: "why-the-final-key-is-not-appearing",
    label: "Final key not appearing",
  },
  {
    id: "big-walk-ending-explained",
    label: "Ending explained",
  },
  {
    id: "ending-faq",
    label: "Endings FAQ",
  },
  {
    id: "final-takeaway",
    label: "Big Goodbye vs. Big Game",
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
          title="Big Walk Endings Guide"
          description="Finish the Black Sphere for Big Goodbye, then complete post-game cleanup, find the final key, and reach the hidden Big Game ending."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkEndingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}