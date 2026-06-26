import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/gamble-with-your-friends/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/gamble-with-your-friends/beginner-guide`;

export const metadata: Metadata = {
  title: "Gamble With Your Friends Guide - How to Play, Strategy & Tips",
  description:
    "Learn how to survive your first Gamble With Your Friends runs with quota tips, tickets, items, body parts, shared-bank rules, floors, and beginner game picks.",
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
        "Gamble With Your Friends Beginner Guide: Quota, Tickets, Items, Body Parts, and First Run Tips",
      description:
        "This Gamble With Your Friends beginner guide explains how the shared bank works, how quota works, which games to try first, what to buy with tickets, how body parts work, and how to survive your first casino days.",
      image: [
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-lobby-items.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-first-floor-casino.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-shared-money-duck-race.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-failed-quota-grave.webp`,
        `${siteUrl}/images/gamble-with-your-friends/gamble-with-your-friends-tickets-body-parts.webp`,
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
          name: "Gamble With Your Friends beginner guide",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends quota",
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
          name: "Gamble With Your Friends shared bank",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends floors",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends achievements",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends solo",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Roulette",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Duck Race",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Blackjack",
        },
        {
          "@type": "Thing",
          name: "Gamble With Your Friends Street Craps",
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
          name: "What is the first quota in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One day-one footage run shows about $1,000 starting money and a $1.2K target. Treat this as an observed launch-version example, not a permanent formula.",
          },
        },
        {
          "@type": "Question",
          name: "How long is each casino day in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each casino day lasts 5 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if you miss quota in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Missing quota can trigger a punishment scene and may cost the group momentum, body parts, or the run state depending on the situation.",
          },
        },
        {
          "@type": "Question",
          name: "Is money shared in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The group shares one bank account and one debt. A reckless player can spend money that another player just earned.",
          },
        },
        {
          "@type": "Question",
          name: "Can you play Gamble With Your Friends solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solo play is possible, but the Steam page says it is not advised unless you are feeling lucky.",
          },
        },
        {
          "@type": "Question",
          name: "What should you buy first with tickets in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with reliable run-changing tools such as Prevent Loss Nearby, Free All-In, Time Machine or Rewind, Increase Max Bet, or Increase Profit. Avoid mystery boxes until your group can afford randomness.",
          },
        },
        {
          "@type": "Question",
          name: "Are mystery boxes worth buying in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mystery boxes can be useful, but they are not reliable first purchases. Buy them after the team has handled important items, body recovery, or a clear next-floor plan.",
          },
        },
        {
          "@type": "Question",
          name: "What does the gun do in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In early community footage, the gun and body-part interaction can remove body parts and convert them into quota value. One observed value was about 33% of quota.",
          },
        },
        {
          "@type": "Question",
          name: "Duck Race or Roulette: which is better for a fast quota push?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roulette is cleaner for a planned fast push because the bet type is obvious. Duck Race is easier to spam, which makes it more dangerous for undisciplined groups.",
          },
        },
        {
          "@type": "Question",
          name: "Which Floor 1 game should beginners learn first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roulette is the easiest to understand. Blackjack is better for players who know basic card decisions. Street Craps may become strong, but it needs its own guide.",
          },
        },
        {
          "@type": "Question",
          name: "How do you unlock Floor 2 in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Steam page says higher floors unlock as you get richer and bolder. Exact launch-version thresholds still need cleaner testing.",
          },
        },
        {
          "@type": "Question",
          name: "How many floors are in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 4 themed casino floors.",
          },
        },
        {
          "@type": "Question",
          name: "How many games are in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 17 games of chance.",
          },
        },
        {
          "@type": "Question",
          name: "How many endings are in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 3 endings.",
          },
        },
        {
          "@type": "Question",
          name: "How many achievements are in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Steam currently lists 55 achievements.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest beginner mistake in Gamble With Your Friends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest mistake is treating the shared bank like personal spending money. In this game, one player’s bad bet can become everyone’s problem.",
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
          title="Gamble With Your Friends Beginner Guide: Quota, Tickets, Items, Body Parts, and First Run Tips"
          description="Follow this Gamble With Your Friends beginner guide to learn how quota works, how the shared bank works, what to buy with tickets, which games to try first, and how to survive your first casino days."
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
              id: "launch-version-basics",
              label: "Launch-version basics",
            },
            {
              id: "first-run-plan",
              label: "First run plan",
            },
            {
              id: "quota-explained",
              label: "Quota explained",
            },
            {
              id: "shared-bank",
              label: "Shared bank",
            },
            {
              id: "best-beginner-games",
              label: "Best beginner games",
            },
            {
              id: "tickets-items",
              label: "Tickets and items",
            },
            {
              id: "body-parts",
              label: "Body parts",
            },
            {
              id: "floors",
              label: "Floor clues",
            },
            {
              id: "solo-play",
              label: "Solo vs co-op",
            },
            {
              id: "when-to-stop",
              label: "When to stop",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "achievements-and-endings",
              label: "Achievements and endings",
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
              href: "/gamble-with-your-friends/craps-cheese-guide",
              label: "Street Craps Cheese Guide",
            },
            {
              href: "/gamble-with-your-friends/achievements",
              label: "Achievements Guide",
            },
          ]}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}