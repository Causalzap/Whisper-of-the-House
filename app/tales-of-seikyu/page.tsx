import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TalesOfSeikyuContent from "@/data/tales-of-seikyu/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-farmhouse-first-day.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-boar-form-farming.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-shrine-fast-travel.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-request-board.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-ruins-entrance.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-forms-menu.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fishing-rod-beginner.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-ranch-facilities-sasaki.webp`,
];

const toc = [
  {
    id: "tales-of-seikyu-guide",
    label: "Guide hub",
  },
  {
    id: "what-to-do-first",
    label: "What to do first",
  },
  {
    id: "first-farmhouse",
    label: "Farmhouse",
  },
  {
    id: "boar-form",
    label: "Boar Form",
  },
  {
    id: "shrines-fast-travel",
    label: "Shrines and fast travel",
  },
  {
    id: "request-board",
    label: "Request Board",
  },
  {
    id: "fox-ruins",
    label: "Fox Ruins",
  },
  {
    id: "forms-menu",
    label: "Forms menu",
  },
  {
    id: "fishing-kappa",
    label: "Fishing and Kappa",
  },
  {
    id: "ranch-farmhouse-upgrades",
    label: "Ranch upgrades",
  },
  {
    id: "which-guide-to-read-next",
    label: "Guide route",
  },
  {
    id: "priority-map",
    label: "Priority map",
  },
  {
    id: "achievement-priority",
    label: "Achievements",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tales-of-seikyu/beginner-guide",
    label: "Tales of Seikyu Beginner Guide",
  },
  {
    href: "/tales-of-seikyu/fox-ruins-guide",
    label: "Tales of Seikyu Fox Ruins Guide",
  },
  {
    href: "/tales-of-seikyu/yokai-forms-guide",
    label: "Tales of Seikyu Yokai Forms Guide",
  },
  {
    href: "/tales-of-seikyu/request-board-guide",
    label: "Tales of Seikyu Request Board Guide",
  },
  {
    href: "/tales-of-seikyu/romance-gifts-marriage-guide",
    label: "Tales of Seikyu Romance, Gifts, and Marriage Guide",
  },
  {
    href: "/tales-of-seikyu/achievements-guide",
    label: "Tales of Seikyu Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Guide: Beginner Route, Forms & Fox Ruins",
  description:
    "Start Tales of Seikyu with a clear route for farming, shrines, Request Board jobs, yokai forms, Fox Ruins, fishing, romance, and achievements.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Guide: Beginner Route, Yokai Forms, Fox Ruins, Requests, Romance and Achievements",
    description:
      "Use this Tales of Seikyu guide hub to plan your first route through farming, Boar Form, shrine teleporting, Request Board jobs, fishing, Fox Ruins, yokai forms, ranch upgrades, romance, and long-term achievements.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu first farmhouse scene.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Guide",
    description:
      "Plan your first route through farming, shrines, requests, Fox Ruins, yokai forms, fishing, romance, and achievements.",
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
          name: "Tales of Seikyu Guide",
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
        "Tales of Seikyu Guide: Beginner Route, Farming, Shrines, Request Board, Fox Ruins, Yokai Forms, Romance and Achievements",
      description:
        "A player-focused Tales of Seikyu guide hub for the 1.0 release covering the safest first route, farmhouse setup, Boar Form farming, shrine teleporting, Request Board jobs, Basic Rod fishing, Fox Ruins preparation, yokai form progression, Boar, Slime, Tengu, Yuki-onna and Fox Form blockers, ranch facilities, romance and marriage planning, and long-term achievements such as shrine offerings, waypoints, the 75-room ruins achievement, rare fish, ranch animals, giant crops, and completionist cleanup.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tales of Seikyu",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu beginner guide",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu first week",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu farmhouse",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Boar Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu shrine teleport",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Request Board",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Basic Rod",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Ruins",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Yokai Forms",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Slime Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Tengu Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Yuki-onna Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu romance",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu achievements",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I do first in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the opening town tour, reach your farmhouse, pay respects at the first shrine, use Boar Form to start farming, make storage, then check the Request Board.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock fast travel in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pay respects at fox shrines. After you have restored a couple of shrines, the game explains that you can teleport between them.",
          },
        },
        {
          "@type": "Question",
          name: "What is Boar Form for in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Boar Form is your first practical transformation. Use it to cultivate farm soil, smash obstacles, move around faster, and start learning the Forms upgrade system.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Request Board in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Request Board is near the town fountain. Yui introduces it early, and residents use it to post requests for items, jobs, and special needs.",
          },
        },
        {
          "@type": "Question",
          name: "Should I accept every request in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Some requests have timers after you accept them, and some require materials you may not have yet. Check requirements before filling your quest list.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get the fishing rod in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Take the early fishing request from the Request Board. It leads you to the Basic Rod and starts the fishing loop.",
          },
        },
        {
          "@type": "Question",
          name: "When should I go to the Fox Ruins in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Go after you have basic food, a weapon, inventory space, and shrine or waypoint access. The ruins include offerings, puzzles, mining, combat, bosses, and form progression, so rushing in underprepared can waste a day.",
          },
        },
        {
          "@type": "Question",
          name: "What are relic waypoints in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Relic waypoints are teleport points you can unlock inside or near ruins routes. Activate them when you find them so you do not have to repeat long walks.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Slime Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slime Form comes from Fox Ruins boss progression. It helps with underwater routes, water-based blockers, water attacks, and crop watering.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Tengu Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tengu Form comes from later Fox Ruins boss progression. It helps with flight, high ledges, and aerial routes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Yuki-onna Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yuki-onna Form unlocks later through Fox Ruins and story progression after earlier forms. It helps with later movement and route checks.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Fox Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fox Form is the final transformation route. Learn Boar, Slime, Tengu, and Yuki-onna first, then continue the Fox Clan story route.",
          },
        },
        {
          "@type": "Question",
          name: "Is ranch content important in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but not immediately. Ranch facilities matter more after your basic farm, income, requests, and materials are stable.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tales of Seikyu have romance and marriage?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The 1.0 route includes loved gifts, birthdays, heart events, closer interactions, proposal, wedding, and spouse life at the farmhouse.",
          },
        },
        {
          "@type": "Question",
          name: "Should I focus on achievements from the start in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only the long-term ones. Simple achievements unlock naturally, but shrine offerings, all waypoints, the 75-room ruins achievement, rare fish, ranch animals, giant crops, marriage, and completionist goals are worth tracking early.",
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
          title="Start With the Right Route Through Seikyu"
          description="Use this Tales of Seikyu hub to choose your next guide for farming, shrines, Request Board jobs, Fox Ruins, yokai forms, fishing, romance, and achievements."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TalesOfSeikyuContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
