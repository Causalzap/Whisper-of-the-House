import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsContent from "@/data/gamble-with-your-friends/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/achievements`;

export const metadata: Metadata = {
  title: "Gamble With Your Friends: 100% Achievement Guide & All Endings",
  description:
    "Master Gamble With Your Friends with our 100% achievement guide. Unlock all hidden endings, floor-by-floor routes, money milestones, and deliberate losses.",
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
          name: "Gamble With Your Friends Guide",
          item: `${siteUrl}/gamble-with-your-friends`,
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
      headline: "Gamble With Your Friends Achievements Guide",
      description:
        "This Gamble With Your Friends achievements guide covers all visible Steam achievement routes, including Floor 1, Floor 2, Floor 3, Floor 4, money milestones, hidden ending achievements, completion rates, and deliberate loss-chain achievements.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievements-overview.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievement-no-bust-run.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievement-lucky-7-craps.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievement-floor-two-unlock.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievement-rare-floor-four.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-02",
      dateModified: "2026-05-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Gamble With Your Friends",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Steam achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Floor 1 achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Floor 2 achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Floor 3 achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Floor 4 achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Lucky 7",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends No Bust Run",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Greed Test",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Natural Roller",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Poker Face",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Perfect Sweep",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Flameproof",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends ending achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends hidden achievements",
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
          name: "How many achievements are in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gamble With Your Friends has 55 Steam achievements.",
          },
        },
        {
          "@type": "Question",
          name: "What achievements should I do first in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with Floor 1 achievements: High Roller, Big Spender, Lucky Streak, All on Red, YARLL!!!, Lucky 7, Risky Move, No Bust Run, and Jackpot Hunter.",
          },
        },
        {
          "@type": "Question",
          name: "Do High Roller and Big Spender have exact dollar amounts in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Steam requirement text uses wording like very big bet and a lot of money. This guide keeps the official wording instead of inventing hidden dollar thresholds.",
          },
        },
        {
          "@type": "Question",
          name: "What is the easiest achievement route in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clear Floor 1 game achievements first, then move to Floor 2 game achievements, then save Floor 3, Floor 4, and money milestones for later.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lucky 7 hard in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lucky 7 depends on your first Street Craps roll on Floor 1. It is easier if one player controls the dice and another player calls the target.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get No Bust Run in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Win 4 games in a row on Blackjack on Floor 1. Let one player lead decisions and use small bets while learning.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Greed Test in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Win at least 10X on Crash on Floor 2. Pick a cash-out target before greed takes over.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Natural Roller in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Win on Street Craps during the point phase on Floor 3. Use the Craps guide instead of improvising.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Poker Face in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Win on 1P Poker on Floor 3 without locking cards, with a hand equal to or better than Two of a Kind.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Perfect Sweep in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Win at least 20X on Mine Sweeper on Floor 3. Treat it as a specialist achievement, not a panic table.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Flameproof in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Win at least 3X three times in a row on Dragon Tower on Floor 4.",
          },
        },
        {
          "@type": "Question",
          name: "Which achievements are deliberate loss achievements in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The captured Steam list confirms at least these deliberate loss-chain achievements: Step Into Fire, Straight Down, and High Risk Wedge. Do these on dedicated attempts, not serious money runs.",
          },
        },
        {
          "@type": "Question",
          name: "Should I chase deliberate loss achievements early in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Achievements like Step Into Fire, Straight Down, and High Risk Wedge should be done on dedicated attempts, not during serious quota or money runs.",
          },
        },
        {
          "@type": "Question",
          name: "Are ending achievements solved in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not from the public achievement descriptions alone. Let It Ride!, End of the Line, and ...And They Lived Happily After are hidden in the captured Steam list and should be handled in the separate endings guide once exact triggers are confirmed.",
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
          title="Gamble With Your Friends Achievements Guide"
          description="Follow this Gamble With Your Friends achievements guide to clear Floor 1–4 achievements, money milestones, hidden endings, deliberate loss chains, and rare Steam achievements with practical routes."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 2, 2026"
          toc={[
            {
              id: "source-note",
              label: "Source note",
            },
            {
              id: "achievement-categories",
              label: "Achievement categories",
            },
            {
              id: "general-achievements",
              label: "General achievements",
            },
            {
              id: "best-achievement-route",
              label: "What to skip early",
            },
            {
              id: "floor-one-achievements",
              label: "Floor 1 achievements",
            },
            {
              id: "lucky-7-craps",
              label: "Lucky 7 / Craps",
            },
            {
              id: "floor-two-achievements",
              label: "Floor 2 achievements",
            },
            {
              id: "floor-three-achievements",
              label: "Floor 3 achievements",
            },
            {
              id: "floor-four-achievements",
              label: "Floor 4 achievements",
            },
            {
              id: "money-achievements",
              label: "Money milestones",
            },
            {
              id: "ending-achievements",
              label: "Ending achievements",
            },
            {
              id: "achievements-to-avoid-early",
              label: "Avoid early",
            },
            {
              id: "old-player-tips",
              label: "Old-player tips",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/gamble-with-your-friends",
              label: "Gamble With Your Friends Guide Hub",
            },
            {
              href: "/gamble-with-your-friends/best-games",
              label: "Best Games to Play",
            },
            {
              href: "/gamble-with-your-friends/tickets-items-body-parts",
              label: "Tickets, Items, and Body Parts Guide",
            },
            {
              href: "/gamble-with-your-friends/best-item-combos",
              label: "Best Item Combos and Strategies",
            },
            {
              href: "/gamble-with-your-friends/craps-cheese-guide",
              label: "Street Craps Cheese Guide",
            },
            {
              href: "/gamble-with-your-friends/beginner-guide",
              label: "Beginner Guide",
            },
          ]}
        >
          <AchievementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}