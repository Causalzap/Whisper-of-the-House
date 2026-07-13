import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BackyardBaseballBestPlayersContent from "@/data/backyard-baseball/best-players-team-lineup.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/backyard-baseball`;
const pageUrl = `${hubUrl}/best-players-team-lineup`;

const imageUrls = [
  `${siteUrl}/images/backyard-baseball/backyard-baseball-best-team-fielding-lineup.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-best-team-batting-order.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-pete-wheeler-skill-ratings.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-kiesha-phillips-five-for-five.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-maria-luna-pink-boost-325-home-run.webp`,
];

const toc = [
  {
    id: "tier-list",
    label: "S & A Tier player stats",
  },
  {
    id: "best-team",
    label: "Best team & lineup",
  },
  {
    id: "draft-plan",
    label: "Draft plan",
  },
  {
    id: "real-game-results",
    label: "Real game results",
  },
  {
    id: "rotation",
    label: "Pitching rotation",
  },
  {
    id: "boosts",
    label: "Player boosts",
  },
  {
    id: "custom-kid-builds",
    label: "Custom Kid builds",
  },
  {
    id: "alternative-teams",
    label: "Alternative teams",
  },
  {
    id: "mlb-players",
    label: "MLB pros",
  },
  {
    id: "common-mistakes",
    label: "Team-building mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/backyard-baseball",
    label: "Backyard Baseball 2026 Guide Hub",
  },
  {
    href: "/backyard-baseball/unlock-all-players",
    label: "Unlock All Players",
  },
  {
    href: "/backyard-baseball/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/backyard-baseball/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Backyard Baseball 2026 Best Players, Team & Tier List",
  description:
    "Compare S- and A-tier player stats, copy the best batting order and fielding lineup, and plan your rotation, boosts, Custom Kid build, and MLB pro upgrades.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Backyard Baseball 2026 Best Players, Team & Tier List",
    description:
      "Compare the strongest Backyard Kids, base ratings, best batting order, fielding positions, pitching rotation, boosts, and Custom Kid builds.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Recommended Backyard Baseball 2026 fielding lineup with Angela pitching, Pete in center field, Mikey at third, and Kenny catching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard Baseball 2026 Best Players & Tier List",
    description:
      "Use S- and A-tier stats to build the best batting order, fielding lineup, pitching rotation, and Custom Kid.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Who is the best overall player in Backyard Baseball 2026?",
    answer:
      "Pablo Sanchez is the safest overall first selection. His base ratings are 10 Batting, 10 Running, 9 Pitching, and 9 Fielding.",
  },
  {
    question: "Who is the best leadoff hitter?",
    answer:
      "Pete Wheeler is the best standard leadoff option because he combines 10 Running with 8 Batting and 7 Fielding.",
  },
  {
    question: "Who are the best pitchers?",
    answer:
      "Angela Delvecchio and Kenny Kawaguchi both have 10 Pitching. Pablo Sanchez has 9 Pitching and is the strongest emergency relief option in the recommended lineup.",
  },
  {
    question: "Who is the best shortstop?",
    answer:
      "Kiesha Phillips is the strongest offense-first shortstop option. Stephanie Morgan is a useful defense-first alternative when the lineup already has enough power.",
  },
  {
    question: "Does the Tier List include every player stat?",
    answer:
      "The detailed table covers the S- and A-tier standard Backyard Kids most relevant to competitive team building. B- and C-tier players are listed without a full stat database.",
  },
  {
    question: "Is Maria Luna S Tier with a pink uniform?",
    answer:
      "The pink condition makes Maria Luna much more valuable, but she remains conditional A Tier because the team must be built around that requirement.",
  },
  {
    question: "What is the best Custom Kid build?",
    answer:
      "Use 6 Batting, 10 Running, 1 Pitching, and 7 Fielding for a leadoff center fielder; 10, 4, 1, and 9 for a power corner infielder; or 7, 3, 10, and 4 for a two-way pitcher.",
  },
  {
    question: "Should I add an MLB pro as soon as one unlocks?",
    answer:
      "Only add an MLB pro when the player improves a specific role without removing essential pitching depth, shortstop coverage, fielding, or center-field speed.",
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
          name: "Backyard Baseball 2026 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Players, Team and Tier List",
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
        "Backyard Baseball 2026 Best Players, Team, Lineup and Tier List",
      description:
        "This Backyard Baseball 2026 best players guide compares the base Batting, Running, Pitching, and Fielding ratings of the most useful S- and A-tier Backyard Kids. It provides a nine-player League roster, batting order, fielding positions, pitching rotation, draft priorities, real-game results, team-color and teammate boosts, Hot and Cold lineup decisions, Custom Kid builds, alternative power and defense teams, and advice for fitting the seven unlockable MLB pros into an existing roster.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-13",
      dateModified: "2026-07-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Backyard Baseball",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 best players",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 Tier List",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball player stats",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball best team",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball batting order",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball fielding positions",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball pitching rotation",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball player boosts",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball Custom Kid build",
        },
      ],
      mentions: [
        {
          "@type": "Person",
          name: "Pablo Sanchez",
        },
        {
          "@type": "Person",
          name: "Pete Wheeler",
        },
        {
          "@type": "Person",
          name: "Kiesha Phillips",
        },
        {
          "@type": "Person",
          name: "Angela Delvecchio",
        },
        {
          "@type": "Person",
          name: "Kenny Kawaguchi",
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
          title="Backyard Baseball 2026 Best Players and Team"
          description="Compare S- and A-tier player stats, copy a balanced nine-player lineup, and adjust your batting order, defense, rotation, boosts, and Custom Kid build."
          gameTitle="Backyard Baseball"
          gameHref="/backyard-baseball"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BackyardBaseballBestPlayersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}