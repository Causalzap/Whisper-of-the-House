import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import GambleWithYourFriendsContent from "@/data/gamble-with-your-friends/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends`;

export const metadata: Metadata = {
    title: "Gamble With Your Friends Guide: Best Items, Combos & Tips",
    description:
      "Master Gamble With Your Friends! Discover top item combos, beginner tips, ticket farming, and Street Craps strategies. Unlock all achievements today.",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "Gamble With Your Friends Guide",
      description:
        "This Gamble With Your Friends guide hub links to beginner tips, tickets, items, body parts, best games, item combos, Street Craps strategies, and achievement routes.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-first-floor-casino.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-lobby-items.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-shared-money-duck-race.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-item-golden-chip-price.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-achievements-overview.webp`,
      ],
      inLanguage: "en",
      about: [
        {
          "@type": "VideoGame",
          name: "Gamble With Your Friends",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends guide",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends beginner guide",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends tickets",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends items",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends body parts",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends best games",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends item combos",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Street Craps",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends achievements",
        },
      ],
      hasPart: [
        {
          "@type": "WebPage",
          name: "Beginner Guide",
          url: `${siteUrl}/gamble-with-your-friends/beginner-guide`,
        },
        {
          "@type": "WebPage",
          name: "Tickets, Items, and Body Parts Guide",
          url: `${siteUrl}/gamble-with-your-friends/tickets-items-body-parts`,
        },
        {
          "@type": "WebPage",
          name: "Best Games to Play",
          url: `${siteUrl}/gamble-with-your-friends/best-games`,
        },
        {
          "@type": "WebPage",
          name: "Best Item Combos and Strategies",
          url: `${siteUrl}/gamble-with-your-friends/best-item-combos`,
        },
        {
          "@type": "WebPage",
          name: "Street Craps Cheese Guide",
          url: `${siteUrl}/gamble-with-your-friends/craps-cheese-guide`,
        },
        {
          "@type": "WebPage",
          name: "Achievements Guide",
          url: `${siteUrl}/gamble-with-your-friends/achievements`,
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
          name: "What is Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gamble With Your Friends is a co-op casino-crawler where players share a bank, play casino games under quota pressure, buy items with tickets, and try to survive increasingly risky casino floors.",
          },
        },
        {
          "@type": "Question",
          name: "Is Gamble With Your Friends good solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but the game is built around team chaos. Solo play is cleaner because nobody else can burn the shared bank, but co-op is where the game’s funniest systems matter most.",
          },
        },
        {
          "@type": "Question",
          name: "What should beginners do first in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beginners should learn Floor 1 games, protect the shared bank, hit quota before achievement hunting, and spend early tickets on practical items.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best beginner game in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roulette is the cleanest fast beginner game. Blackjack is good if one player understands basic decisions. Duck Race is easy but dangerous if the team spams it.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best item combo in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cleanest item combo is Taser + Golden Chip. Use Taser first to increase maximum bet, then use Golden Chip for a larger free all-in.",
          },
        },
        {
          "@type": "Question",
          name: "What should I buy first with tickets in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Good early buys include Golden Chip, Taser, Holy Statue, Drink, Insurance, and Quota Gun. Do not buy random items before the team has a plan.",
          },
        },
        {
          "@type": "Question",
          name: "Is Street Craps worth learning in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Street Craps is one of the best tables if your team assigns one roller, one caller, and plays slowly instead of panic throwing.",
          },
        },
        {
          "@type": "Question",
          name: "How many achievements does Gamble With Your Friends have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gamble With Your Friends has 55 Steam achievements.",
          },
        },
        {
          "@type": "Question",
          name: "Are the endings solved in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not from achievement names alone. Ending achievements should be handled separately once completed-run triggers are confirmed.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest beginner mistake in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is forgetting that the money is shared. One player’s bad bet is everyone’s problem.",
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
          title="Gamble With Your Friends Guide"
          description="Start here for the complete Gamble With Your Friends guide hub, including beginner tips, tickets, items, body parts, best games, item combos, Street Craps, and achievements."
          gameTitle="Gamble With Your Friends"
          gameHref="/gamble-with-your-friends"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 2, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "what-is-gamble-with-your-friends",
              label: "What is it?",
            },
            {
              id: "core-systems",
              label: "Core systems",
            },
            {
              id: "quick-start-plan",
              label: "Quick start plan",
            },
            {
              id: "which-guide-do-you-need",
              label: "Which guide?",
            },
            {
              id: "best-beginner-route",
              label: "Beginner route",
            },
            {
              id: "tickets-items-body-parts",
              label: "Tickets and items",
            },
            {
              id: "best-games-overview",
              label: "Best games",
            },
            {
              id: "street-craps",
              label: "Street Craps",
            },
            {
              id: "achievements-overview",
              label: "Achievements",
            },
            {
              id: "bugged-achievements-warning",
              label: "Bugged achievements",
            },
            {
              id: "endings-overview",
              label: "Endings",
            },
            {
              id: "save-scum-overview",
              label: "Save scum / RNG",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/gamble-with-your-friends/beginner-guide",
              label: "Beginner Guide",
            },
            {
              href: "/gamble-with-your-friends/quota-guide",
              label: "Quota Guide",
            },
            {
              href: "/gamble-with-your-friends/tickets-items-body-parts",
              label: "Tickets, Items, and Body Parts Guide",
            },
            {
              href: "/gamble-with-your-friends/best-games",
              label: "Best Games to Play",
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
            {
              href: "/gamble-with-your-friends/bugged-achievements",
              label: "Bugged Achievements Guide",
            },
            {
              href: "/gamble-with-your-friends/all-endings-guide",
              label: "All Endings Guide",
            },
          ]}
        >
          <GambleWithYourFriendsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}