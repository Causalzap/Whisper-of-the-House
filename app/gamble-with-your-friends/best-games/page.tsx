import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestGamesContent from "@/data/gamble-with-your-friends/best-games.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/best-games`;

export const metadata: Metadata = {
  title: "Gamble With Your Friends Best Games Guide",
  description:
    "Find the best games to play in Gamble With Your Friends, including Roulette, Blackjack, Duck Race, Street Craps, Slots, Crash, HiLo, and later-floor game risks.",
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
          name: "Best Games Guide",
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
        "Gamble With Your Friends Best Games Guide: Roulette, Blackjack, Duck Race, Slots, Craps, Crash, HiLo, and Later Floors",
      description:
        "This Gamble With Your Friends best games guide ranks the best beginner games, maps confirmed floor game clues, explains risk levels, and shows which games work best with items like Golden Chip, Taser, Holy Statue, and Time Machine.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-first-floor-casino.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-roulette-red-black.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-shared-money-duck-race.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-blackjack-floor-one.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-prevent-loss-slots.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-street-craps-cheese.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-wheel-of-fortune.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-late-floor-games.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-floor-two-penguin.webp`,
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
          name: "Gamble With Your Friends best games",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Roulette",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Blackjack",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Duck Race",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Slot Machine",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Street Craps",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Wheel of Fortune",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Money Wheel",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Penguin Cross",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Crash",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends HiLo",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Plinko",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Dragon Tower",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends 1P Poker",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Mine Sweeper",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends floor games",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends item-supported games",
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
          name: "What is the best game in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For beginners, Roulette is the cleanest fast game, Blackjack is the best controlled game if someone knows basic decisions, and Slot Machine becomes better with item support. Street Craps may be stronger for skilled groups, but it needs more setup.",
          },
        },
        {
          "@type": "Question",
          name: "What is the safest Floor 1 game in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roulette is the easiest to understand. Blackjack can be safer if one player knows how to play. Duck Race is simple, but easy to spam.",
          },
        },
        {
          "@type": "Question",
          name: "How many games are confirmed so far in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This guide currently has strong names or floor clues for 14 of the 17 games. The remaining 3 game names still need screenshot, achievement, or direct footage confirmation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Duck Race good in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duck Race is good for learning and simple bets, but it is dangerous for undisciplined groups because players can repeat bets quickly and drain shared money.",
          },
        },
        {
          "@type": "Question",
          name: "Is Blackjack good in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if one player knows basic card decisions. It becomes risky when the team forces streak challenges or panics under the timer.",
          },
        },
        {
          "@type": "Question",
          name: "Is Street Craps worth playing in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but not as a blind beginner table. Street Craps has strong strategy and cheese potential, but the group needs to understand the roll flow.",
          },
        },
        {
          "@type": "Question",
          name: "Is Crash good in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Crash can be good if the player can cash out early and follow a target multiplier. It is bad when the player waits too long because they want one bigger payout.",
          },
        },
        {
          "@type": "Question",
          name: "Is HiLo good in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HiLo can be useful for controlled later-floor testing, but it becomes dangerous when players keep climbing the risk ladder after they already have a good result.",
          },
        },
        {
          "@type": "Question",
          name: "Is Roulette better than Duck Race in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roulette is usually better for a planned quota push because the bet structure is clearer. Duck Race is easier to spam, which makes it riskier for chaotic groups.",
          },
        },
        {
          "@type": "Question",
          name: "What game should I use Golden Chip on in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Golden Chip on a table with a meaningful all-in opportunity, especially after checking whether Taser can increase the maximum bet.",
          },
        },
        {
          "@type": "Question",
          name: "What game works best with Holy Statue in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Holy Statue works best near fast-repeat betting setups, such as slots or clustered table plays, because it prevents nearby loss while active.",
          },
        },
        {
          "@type": "Question",
          name: "What games should beginners avoid blind max betting in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beginners should not blind max bet Crash, HiLo, Plinko, Dragon Tower, 1P Poker, Mine Sweeper, or Keno until the table rules are clear. These games may be useful later, but they are bad first-contact max-bet targets.",
          },
        },
        {
          "@type": "Question",
          name: "How many games are there in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Steam page says Gamble With Your Friends has 17 different games of chance.",
          },
        },
        {
          "@type": "Question",
          name: "Are all 17 games fully mapped yet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This page currently confirms 14 of 17 games. The final 3 should be added after direct confirmation.",
          },
        },
        {
          "@type": "Question",
          name: "Which Gamble With Your Friends guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Read Best Item Combos and Strategies next if you want to pair games with items, or Craps Cheese Guide if your group wants to push Street Craps.",
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
          title="Gamble With Your Friends Best Games Guide"
          description="Follow this Gamble With Your Friends best games guide to learn which games are safest early, which games need item support, and which later-floor games you should avoid blind max betting."
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
              id: "best-games-ranking",
              label: "Best games ranking",
            },
            {
              id: "floor-game-map",
              label: "Floor game map",
            },
            {
              id: "game-risk-table",
              label: "Game risk table",
            },
            {
              id: "roulette",
              label: "Roulette",
            },
            {
              id: "duck-race",
              label: "Duck Race",
            },
            {
              id: "blackjack",
              label: "Blackjack",
            },
            {
              id: "slot-machine",
              label: "Slot Machine",
            },
            {
              id: "street-craps",
              label: "Street Craps",
            },
            {
              id: "wheel-games",
              label: "Wheel games",
            },
            {
              id: "crash",
              label: "Crash",
            },
            {
              id: "hilo",
              label: "HiLo",
            },
            {
              id: "other-later-floor-games",
              label: "Other later-floor games",
            },
            {
              id: "penguin-cross",
              label: "Penguin Cross",
            },
            {
              id: "item-supported-games",
              label: "Item-supported games",
            },
            {
              id: "games-to-avoid-blind",
              label: "Avoid blind max bets",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-route",
              label: "Decision route",
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
              href: "/gamble-with-your-friends/beginner-guide",
              label: "Beginner Guide",
            },
            {
              href: "/gamble-with-your-friends/quota-guide",
              label: "Quota Guide",
            },
            {
              href: "/gamble-with-your-friends/best-item-combos",
              label: "Best Item Combos and Strategies",
            },
            {
              href: "/gamble-with-your-friends/save-scum-guide",
              label: "Save Scum Guide",
            },
            {
              href: "/gamble-with-your-friends/craps-cheese-guide",
              label: "Street Craps Cheese Guide",
            },
            {
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
          ]}
        >
          <BestGamesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}